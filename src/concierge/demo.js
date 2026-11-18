// Offline demo answers only. For genuine multi-turn understanding, enable the AI endpoint.
// Keep intent detection specific: city names alone must never override the question.
const CITIES = ["Oakville", "Milton", "Mississauga", "Burlington", "Toronto", "Hamilton", "Muskoka", "Niagara", "Brampton", "Etobicoke", "Scarborough", "Vaughan", "Markham", "Caledon"];
const SECOND = /second[\s-]*stor(?:e)?y|2nd[\s-]*stor(?:e)?y|add (?:a |another )?(?:second )?(?:floor|storey)|upstairs addition/i;
const NEW_HOME = /new (?:custom )?(?:home|house)|custom home|build a (?:new )?(?:home|house)/i;
const COA = /committee of adjustment|minor variance|zoning variance|\bco[\s-]?a\b/i;
const CONSULT = /\bconsultation\b|\bappointment\b|arrange a (?:call|meeting)|book a (?:call|meeting)|schedule a (?:call|meeting)|speak (?:to|with) (?:someone|a person)/i;
const PRICE = /\bhow much\b|\bcost\b|\bprice\b|\bfee\b|\bfees\b|\bquote\b/i;
const USER_TURNS = messages => (messages || []).filter(m => m.role === "user").map(m => String(m.content || "")).filter(Boolean);

export function conversationContext(messages = []) {
  const turns = USER_TURNS(messages);
  const text = turns.join(" ");
  const locations = [];
  for (const city of CITIES) {
    const re = new RegExp("\\b" + city + "\\b", "ig");
    for (const match of text.matchAll(re)) locations.push({ city, index: match.index });
  }
  locations.sort((a,b) => b.index - a.index);
  let projectType = "";
  for (const turn of turns) {
    if (NEW_HOME.test(turn)) projectType = "Custom home";
    if (/renovat/i.test(turn)) projectType = "Major renovation";
    if (SECOND.test(turn) || /major addition|house addition/i.test(turn)) projectType = "Major addition";
  }
  const budgets = [...text.matchAll(/\$\s*([\d,.]+)\s*(million|m|k|thousand)?\b/ig)];
  const last = budgets.at(-1);
  let budget = "";
  if (last) {
    const unit = (last[2] || "").toLowerCase();
    const n = Number(last[1].replace(/,/g, "")) * (unit.startsWith("m") ? 1e6 : unit.startsWith("k") || unit === "thousand" ? 1e3 : 1);
    if (Number.isFinite(n) && n >= 100000) budget = n.toLocaleString("en-CA", { style:"currency", currency:"CAD", maximumFractionDigits:0 });
  }
  return { location: locations[0]?.city || "", projectType, budget, bungalow: /\bbungalow\b/i.test(text) };
}

function floorArea(text) {
  const m = text.match(/\b([\d,]{3,5})[\s-]*(?:sq(?:uare)?\.?[\s-]*(?:ft|feet|foot)|s\.?f\.?|square[\s-]*feet)\b/i);
  const n = m ? Number(m[1].replace(/,/g, "")) : 0;
  return n >= 500 && n <= 20000 ? n : 0;
}

export function demoReply(question, history = []) {
  const q = String(question || "").trim();
  const context = conversationContext([...history, { role:"user", content:q }]);
  const place = context.location ? " in " + context.location : "";

  if (/i already (?:said|stated|mentioned)|i told you|i just told you/i.test(q)) {
    const detail = context.projectType === "Major addition"
      ? "For your bungalow's second-storey addition, we'd review zoning and the existing structure before confirming what is feasible. Would you be considering a full or partial second storey?"
      : "I'll use that information as we discuss your project. What would you like to know next?";
    return { text: "You're right — you already told me " + (context.location || "that") + ". " + detail };
  }
  // Intent, not incidental words: a renovation consultation is a booking question.
  if (CONSULT.test(q) && !/how much.*consultation|cost of.*consultation|price of.*consultation/i.test(q)) {
    const project = (context.budget ? context.budget + " " : "") + (context.projectType ? context.projectType.toLowerCase() : "project") + place;
    return {
      text: "Absolutely — we'd be happy to discuss your " + project + ". I can help you prepare a consultation request now, and our team will follow up personally. I'll carry over the project details you've already shared.",
      action: "prepare-inquiry",
    };
  }
  if (COA.test(q)) {
    return { text: "A Committee of Adjustment application is generally needed when a design requires a zoning variance, such as relief from a setback, height or lot-coverage limit. We would first review the zoning and prepare the supporting design information, then the application is submitted to the municipality for notice and a public hearing. If approved, the variance decision and any appeal period are separate from obtaining a building permit. We can help review the approval path for your project" + place + ". Is this for an addition or a new home?" };
  }
  if (SECOND.test(q) || (/\bbungalow\b/i.test(q) && /add|addition|build/i.test(q))) {
    return { text: "A second-storey addition to a bungalow" + place + " may be possible. We'd review zoning limits, such as height and setbacks, and have the foundation and existing structure assessed to determine what reinforcement might be needed. If zoning relief is required, a Committee of Adjustment application could be part of the process. Are you considering a full second storey or a partial addition?" };
  }
  if (NEW_HOME.test(q) && /muskoka|niagara|can you|do you|area|serve|work in/i.test(q)) {
    const extended = context.location === "Muskoka" || context.location === "Niagara";
    return { text: extended
      ? "Yes — we consider custom-home projects in " + context.location + ". We can discuss the design and approval process, with the exact scope and availability confirmed after reviewing the property. Have you already purchased the lot?"
      : "Yes — custom-home design is one of our core services" + place + ". We can assist from feasibility through coordinated permit drawings. Have you already purchased the lot?" };
  }
  if (PRICE.test(q) && /design|drawing|architectural|designer|plans|sq(?:uare)?\.?\s*f(?:t|eet)/i.test(q)) {
    const area = floorArea(q);
    return area
      ? { text:"For a " + area.toLocaleString("en-CA") + " sq. ft. custom home, a useful starting point for architectural design fees is approximately " + (area * 6).toLocaleString("en-CA", { style:"currency", currency:"CAD", maximumFractionDigits:0 }) + ", based on our typical rate of about $6 per square foot. The final proposal depends on complexity and which services are needed, including any separate consultant work. Are you building on a vacant lot or replacing an existing home?" }
      : { text:"For custom-home architectural design, a useful starting point is about $6 per square foot. The final fee depends on complexity and services required. Roughly how large is the home you're planning?" };
  }
  if (PRICE.test(q) && CONSULT.test(q)) {
    return { text:"Our initial consultation is complimentary and there's no obligation. Would you like to prepare a request?", action:"prepare-inquiry" };
  }
  if (NEW_HOME.test(q)) {
    return { text:"Yes. Custom-home design is one of our principal services. We begin with your goals and property constraints, then develop the design and coordinate permit documents. Do you already own the lot?" };
  }
  // Only answer service-area questions when that is actually what was asked.
  if (/where do you work|where do you serve|service area|areas do you cover|work in|serve in|where are you located/i.test(q)) {
    return { text:"We regularly work in Toronto, Mississauga, Oakville, Milton and Burlington. We also consider projects in Muskoka, Niagara and other areas depending on scope. What type of project are you planning?" };
  }
  if (/permit|zoning|approval|setback|variance/i.test(q)) {
    return { text:"We prepare coordinated permit packages and assist with approvals. For a specific property" + place + ", the starting point is zoning and site feasibility, followed by design and permit documentation. If zoning relief is needed, that requires a separate approval. Are you planning a new home or an addition?" };
  }
  if (/process|how do you work|where do i start|design development|steps/i.test(q)) {
    return { text:"Our process begins with discovery and feasibility, then design development, permit and approval documentation, and build readiness. We aim to resolve important decisions early rather than leaving them for construction. Are you planning a custom home, addition or renovation?" };
  }
  return { text:"I want to give you a reliable answer rather than guess. This preview uses a limited set of prepared replies. I can help you prepare an inquiry so our team can answer your specific question.", action:"prepare-inquiry" };
}

export function leadHints(messages = []) {
  const context = conversationContext(messages);
  const turns = USER_TURNS(messages);
  const lastProject = [...turns].reverse().find(t => NEW_HOME.test(t) || SECOND.test(t) || /renovat/i.test(t));
  return {
    projectType: context.projectType,
    location: context.location,
    description: [lastProject || "", context.budget ? "Indicative budget mentioned: " + context.budget : ""].filter(Boolean).join("\n").slice(0, 1200),
  };
}
