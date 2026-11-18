import test from "node:test";
import assert from "node:assert/strict";
import { conversationContext, demoReply, leadHints } from "../src/concierge/demo.js";

test("3,500-square-foot design question gets a useful estimate, not construction budget", () => {
  const answer = demoReply("How much does it cost to design a 3,500-square-foot custom home?");
  assert.match(answer.text, /\$21,000/);
  assert.doesNotMatch(answer.text, /website|500K construction/i);
});

test("second-storey question in Oakville is answered as feasibility, not service area", () => {
  const answer = demoReply("Can I add a second storey to my bungalow in Oakville?");
  assert.match(answer.text, /second-storey addition/i);
  assert.match(answer.text, /Oakville/i);
  assert.match(answer.text, /zoning/i);
  assert.doesNotMatch(answer.text, /Our (?:core )?service area/i);
  assert.doesNotMatch(answer.text, /What municipality/i);
});

test("follow-up remembers Oakville and does not ask for city again", () => {
  const history = [{role:"user", content:"Can I add a second storey to my bungalow in Oakville?"}];
  const answer = demoReply("I already stated Oakville.", history);
  assert.match(answer.text, /Oakville/i);
  assert.match(answer.text, /bungalow/i);
  assert.doesNotMatch(answer.text, /What municipality/i);
});

test("Committee of Adjustment gets actual process explanation", () => {
  const answer = demoReply("What's involved in getting a Committee of Adjustment approval?");
  assert.match(answer.text, /zoning variance/i);
  assert.match(answer.text, /public hearing/i);
  assert.match(answer.text, /building permit/i);
});

test("Muskoka home request gets direct service answer", () => {
  const answer = demoReply("Can you design a new home in Muskoka?");
  assert.match(answer.text, /Yes/);
  assert.match(answer.text, /Muskoka/i);
  assert.doesNotMatch(answer.text, /What municipality/i);
});

test("renovation consultation goes straight to inquiry with preserved budget", () => {
  const q="I'd like to arrange a consultation about a $1.5 million renovation.";
  const answer=demoReply(q);
  assert.match(answer.text, /\$1,500,000/);
  assert.match(answer.text, /consultation request/i);
  assert.equal(answer.action, "prepare-inquiry");
  const hints=leadHints([{role:"user",content:q}]);
  assert.equal(hints.projectType,"Major renovation");
  assert.match(hints.description, /\$1,500,000/);
});

test("keeps last given location from earlier turn", () => {
  const context = conversationContext([
    {role:"user",content:"I'm in Oakville and planning a second-storey addition."},
    {role:"assistant",content:"Thanks"},
    {role:"user",content:"What if I need a minor variance?"},
  ]);
  assert.equal(context.location,"Oakville");
  const answer=demoReply("What if I need a minor variance?", [
    {role:"user",content:"I'm in Oakville and planning a second-storey addition."},
  ]);
  assert.match(answer.text,/Oakville/);
});
