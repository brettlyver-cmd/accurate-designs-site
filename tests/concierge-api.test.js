import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/concierge.js";

function request(messages, overrides = {}) {
  return {
    method: "POST",
    headers: { host: "preview.example", origin: "https://preview.example", "x-real-ip": "192.0.2.44" },
    body: { messages },
    ...overrides,
  };
}
function response() {
  return {
    headers: {},
    setHeader(key, value) { this.headers[key] = value; },
    status(status) { this.statusCode = status; return this; },
    json(data) { this.result = data; return this; },
  };
}
const turns = [{ role: "user", content: "Can I add a second storey to my bungalow in Oakville?" }];
function withEnv(values, fn) {
  const keys = ["CONCIERGE_AI_ENABLED", "OPENAI_API_KEY", "UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN", "CONCIERGE_MODEL"];
  const old = Object.fromEntries(keys.map(key => [key, process.env[key]]));
  for (const key of keys) delete process.env[key];
  for (const [key, value] of Object.entries(values)) process.env[key] = value;
  const oldFetch = globalThis.fetch;
  return Promise.resolve().then(fn).finally(() => {
    for (const key of keys) {
      if (old[key] === undefined) delete process.env[key];
      else process.env[key] = old[key];
    }
    globalThis.fetch = oldFetch;
  });
}

test("disabled live AI refuses requests without contacting paid services", async () => withEnv({}, async () => {
  let calls = 0;
  globalThis.fetch = async () => { calls++; throw Error("unexpected"); };
  const res = response();
  await handler(request(turns), res);
  assert.equal(res.statusCode, 503);
  assert.equal(calls, 0);
}));

test("invalid origin is rejected", async () => withEnv({}, async () => {
  const res = response();
  await handler(request(turns, { headers: { host: "preview.example", origin: "https://attacker.invalid" } }), res);
  assert.equal(res.statusCode, 403);
}));

test("oversized and invalid conversations are rejected", async () => withEnv({
  CONCIERGE_AI_ENABLED: "true", OPENAI_API_KEY: "test-key",
}, async () => {
  const res = response();
  await handler(request([{ role:"user", content:"x".repeat(1400) }]), res);
  assert.equal(res.statusCode, 400);
}));

test("no rate limiting configuration fails closed before any OpenAI calls", async () => withEnv({
  CONCIERGE_AI_ENABLED: "true", OPENAI_API_KEY: "test-key",
}, async () => {
  let calls = 0;
  globalThis.fetch = async () => { calls++; throw Error("unexpected"); };
  const res = response();
  await handler(request(turns), res);
  assert.equal(res.statusCode, 503);
  assert.equal(calls, 0);
}));

test("rate limits block model calls", async () => withEnv({
  CONCIERGE_AI_ENABLED:"true", OPENAI_API_KEY:"test-key",
  UPSTASH_REDIS_REST_URL:"https://rate.test", UPSTASH_REDIS_REST_TOKEN:"rate-token",
}, async () => {
  const urls = [];
  globalThis.fetch = async url => {
    urls.push(url);
    return { ok: true, json: async () => [{ result: 21 }] };
  };
  const res = response();
  await handler(request(turns), res);
  assert.equal(res.statusCode, 429);
  assert.equal(urls.length, 1);
  assert.ok(urls[0].includes("/pipeline"));
}));

test("successful response uses capped Responses API, no storage, preserved context", async () => withEnv({
  CONCIERGE_AI_ENABLED:"true", OPENAI_API_KEY:"test-key",
  UPSTASH_REDIS_REST_URL:"https://rate.test", UPSTASH_REDIS_REST_TOKEN:"rate-token",
}, async () => {
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    if (url.endsWith("/pipeline")) return { ok:true, json: async () => [{ result: 1 }] };
    return { ok: true, json: async () => ({
      output: [{ type:"message", content:[{ type:"output_text", text:"Yes. We can review the Oakville addition for feasibility." }] }],
    }) };
  };
  const res = response();
  await handler(request(turns, { body: { messages:turns, context:{location:"Oakville", projectType:"Major addition"} } }), res);
  assert.equal(res.statusCode, 200);
  assert.match(res.result.answer, /Oakville/);
  assert.equal(calls.length, 2);
  const body = JSON.parse(calls[1].options.body);
  assert.equal(body.model, "gpt-6-luna");
  assert.equal(body.store, false);
  assert.equal(body.max_output_tokens, 520);
  assert.equal(body.reasoning.effort, "low");
  assert.ok(body.input[0].content.includes("Oakville"));
  assert.match(body.instructions, /answer the customer's actual question first/);
}));

test("third-party errors do not reveal API keys or private error payloads", async () => withEnv({
  CONCIERGE_AI_ENABLED:"true", OPENAI_API_KEY:"private-test-key",
  UPSTASH_REDIS_REST_URL:"https://rate.test", UPSTASH_REDIS_REST_TOKEN:"rate-token",
}, async () => {
  globalThis.fetch = async url => url.endsWith("/pipeline")
    ? { ok:true, json: async () => [{result:1}] }
    : { ok:false, status:500, text: async () => "private-test-key" };
  const res = response();
  await handler(request(turns), res);
  assert.equal(res.statusCode, 502);
  assert.doesNotMatch(JSON.stringify(res.result), /private-test-key/);
}));
