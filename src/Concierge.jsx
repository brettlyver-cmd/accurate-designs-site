import React, { useEffect, useRef, useState } from "react";
import { CONCIERGE } from "./concierge/config.js";
import { demoReply, leadHints, conversationContext } from "./concierge/demo.js";
import "./Concierge.css";

function metric(eventName) {
  // The existing consent-controlled analytics script defines gtag only after consent.
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "concierge_" + eventName, { event_category: "concierge" });
  }
}

const initialMessages = [{ role: "assistant", content: CONCIERGE.greeting, mode: "static" }];
const leadSubmissionEnabled = import.meta.env.VITE_CONCIERGE_LEADS_ENABLED === "true";
const liveAIEnabled = import.meta.env.VITE_CONCIERGE_AI_ENABLED === "true";

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("chat");
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [aiConsent, setAiConsent] = useState(false);
  const [leadBusy, setLeadBusy] = useState(false);
  const [leadResult, setLeadResult] = useState("");
  const [lead, setLead] = useState({ name: "", email: "", phone: "", projectType: "", location: "", description: "", consent: false });
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && tab === "chat") endRef.current?.scrollIntoView({ block: "nearest" });
  }, [messages, open, tab]);

  useEffect(() => {
    if (open && tab === "chat") inputRef.current?.focus();
  }, [open, tab]);

  function toggle() {
    setOpen(value => {
      if (!value) metric("opened");
      return !value;
    });
  }

  async function ask(question) {
    const text = String(question || "").trim().slice(0, 1200);
    if (!text || busy || (liveAIEnabled && !aiConsent)) return;
    const fullHistory = [...messages.filter(m => m.mode !== "static").map(m => ({ role: m.role, content: m.content })), { role: "user", content: text }];
    const history = fullHistory.slice(-16);
    const context = conversationContext(fullHistory);
    setMessages(previous => [...previous, { role: "user", content: text }]);
    setDraft("");
    setBusy(true);
    metric("question");
    try {
      if (!liveAIEnabled) {
        // Explicit demo mode: use intent and previously provided context.
        // Never pretend the scripted reply came from a live language model.
        const reply = demoReply(text, history.slice(0, -1));
        setMessages(previous => [...previous, { role: "assistant", content: reply.text, action: reply.action, mode: "demo" }]);
        return;
      }
      const response = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, context }),
      });
      if (!response.ok) throw new Error("AI is unavailable");
      const json = await response.json();
      if (!json.answer) throw new Error("No answer");
      const consultationRequested = /(?:arrange|schedule|book|request|set up|i'd like|i want).{0,90}(?:consultation|appointment|meeting|call)/i.test(text);
      setMessages(previous => [...previous, { role: "assistant", content: json.answer, action: consultationRequested ? "prepare-inquiry" : undefined, mode: "ai" }]);
    } catch {
      // Do not silently substitute scripted answers when the live AI fails.
      setMessages(previous => [...previous, { role: "assistant", content: "I'm having trouble connecting right now. You can use Prepare an inquiry and our team will follow up personally.", action: "prepare-inquiry", mode: "error" }]);
    } finally {
      setBusy(false);
    }
  }

  function switchToLead() {
    const hints = leadHints(messages);
    setLead(previous => ({ ...previous, projectType: previous.projectType || hints.projectType, location: previous.location || hints.location, description: previous.description || hints.description }));
    setTab("lead");
    setLeadResult("");
    metric("inquiry_started");
  }

  async function sendLead(event) {
    event.preventDefault();
    if (leadBusy || !lead.consent || !lead.name.trim() || !/^\S+@\S+\.\S+$/.test(lead.email)) return;
    if (!leadSubmissionEnabled) {
      setLeadResult("Demo only: your information was NOT sent or stored. Live submissions are disabled until launch approval.");
      metric("inquiry_demo_completed");
      return;
    }
    setLeadBusy(true);
    setLeadResult("");
    try {
      const form = new FormData();
      form.append("name", lead.name.trim());
      form.append("email", lead.email.trim());
      form.append("phone", lead.phone.trim());
      form.append("project_type", lead.projectType);
      form.append("project_location", lead.location.trim());
      form.append("message", lead.description.trim());
      form.append("_subject", "AI Concierge - Project Inquiry");
      form.append("source", "Accurate Designs AI Concierge");
      form.append("consent_to_contact", "Yes");
      const response = await fetch(CONCIERGE.formspreeEndpoint, {
        method: "POST", headers: { Accept: "application/json" }, body: form,
      });
      if (!response.ok) throw new Error("Submission failed");
      setLeadResult("Thank you. Your inquiry has been sent for personal review. We typically respond within one business day.");
      setLead({ name: "", email: "", phone: "", projectType: "", location: "", description: "", consent: false });
      metric("inquiry_submitted");
    } catch {
      setLeadResult("We couldn't send that inquiry. Please use the website contact page instead.");
    } finally {
      setLeadBusy(false);
    }
  }

  return (
    <div className="ad-concierge" data-testid="concierge">
      {open && (
        <section className="ad-concierge-panel" aria-label={CONCIERGE.assistantName}>
          <header className="ad-concierge-head">
            <div>
              <strong>{CONCIERGE.assistantName}</strong>
              <small>AI assistant · Human review for project inquiries</small>
            </div>
            <button type="button" className="ad-concierge-close" aria-label="Close AI guide" onClick={toggle}>×</button>
          </header>
          <nav className="ad-concierge-tabs" aria-label="Assistant sections">
            <button type="button" aria-current={tab === "chat" ? "page" : undefined} className={tab === "chat" ? "selected" : ""} onClick={() => setTab("chat")}>Ask a question</button>
            <button type="button" aria-current={tab === "lead" ? "page" : undefined} className={tab === "lead" ? "selected" : ""} onClick={switchToLead}>Prepare an inquiry</button>
          </nav>
          {tab === "chat" ? (
            <>
              <div className="ad-concierge-messages" role="log" aria-live="polite" aria-relevant="additions">
                {messages.map((message, index) => (
                  <div key={index} className={"ad-concierge-bubble " + (message.role === "user" ? "visitor" : "guide")}>
                    <div>{message.content}</div>
                    {message.mode === "demo" && <small>Prepared demonstration answer · Not live AI</small>}
                    {message.action === "prepare-inquiry" && <button type="button" className="ad-concierge-next" onClick={switchToLead}>Prepare a consultation inquiry</button>}
                  </div>
                ))}
                {busy && <div className="ad-concierge-bubble guide">Reviewing your question…</div>}
                <div ref={endRef} />
              </div>
              {messages.length <= 2 && <div className="ad-concierge-suggestions">
                {CONCIERGE.suggestedQuestions.map(question =>
                  <button key={question} type="button" disabled={busy} onClick={() => ask(question)}>{question}</button>
                )}
              </div>}
              {liveAIEnabled && <div className="ad-concierge-ai-consent">
                <label>
                  <input type="checkbox" checked={aiConsent} onChange={event => setAiConsent(event.target.checked)} />
                  <span>I agree to have my chat messages processed by OpenAI to answer my questions. Please don't include confidential information. <a href={CONCIERGE.privacyPath}>Privacy</a></span>
                </label>
              </div>}
              <form className="ad-concierge-input" onSubmit={event => { event.preventDefault(); ask(draft); }}>
                <label htmlFor="ad-concierge-question" className="ad-concierge-sr">Ask a question</label>
                <input ref={inputRef} id="ad-concierge-question" type="text" value={draft} maxLength={1200} placeholder="Ask about your project…" onChange={event => setDraft(event.target.value)} disabled={busy}/>
                <button type="submit" disabled={!draft.trim() || busy || (liveAIEnabled && !aiConsent)}>Send</button>
              </form>
            </>
          ) : (
            <form className="ad-concierge-lead" onSubmit={sendLead}>
              <p>Share the basics so our team can understand your project. This does not book or confirm a consultation.</p>
              <label>Full name *<input required maxLength={120} value={lead.name} onChange={e => setLead(v => ({...v, name:e.target.value}))}/></label>
              <label>Email *<input required type="email" maxLength={160} value={lead.email} onChange={e => setLead(v => ({...v, email:e.target.value}))}/></label>
              <label>Phone (optional)<input type="tel" maxLength={35} value={lead.phone} onChange={e => setLead(v => ({...v, phone:e.target.value}))}/></label>
              <label>Project type<select value={lead.projectType} onChange={e => setLead(v => ({...v, projectType:e.target.value}))}>
                <option value="">Select a project type</option>
                {CONCIERGE.projectTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select></label>
              <label>City / municipality<input maxLength={140} value={lead.location} onChange={e => setLead(v => ({...v, location:e.target.value}))}/></label>
              <label>What are you planning?<textarea rows={3} maxLength={1200} value={lead.description} onChange={e => setLead(v => ({...v, description:e.target.value}))}/></label>
              <label className="ad-concierge-consent">
                <input type="checkbox" required checked={lead.consent} onChange={e => setLead(v => ({...v, consent:e.target.checked}))}/>
                <span>I agree to Accurate Designs using this information to respond to my inquiry, as explained in the <a href={CONCIERGE.privacyPath}>Privacy Policy</a>.</span>
              </label>
              <button type="submit" disabled={leadBusy || !lead.consent}>{leadBusy ? "Sending…" : leadSubmissionEnabled ? "Send project inquiry" : "Preview inquiry (not sent)"}</button>
              {leadResult && <p role="status" className="ad-concierge-result">{leadResult}</p>}
              <p className="ad-concierge-help">You can also use our <a href={CONCIERGE.contactPath}>complete consultation form</a>.</p>
            </form>
          )}
          <footer className="ad-concierge-foot">
            <span>{!liveAIEnabled ? "SCRIPTED DEMO · No inquiries sent" : !leadSubmissionEnabled ? "AI-POWERED PREVIEW · No inquiries sent" : "AI-powered guide · Human review of inquiries"}</span>
            <a href={CONCIERGE.privacyPath}>Privacy</a>
          </footer>
        </section>
      )}
      <button type="button" className="ad-concierge-launcher" aria-expanded={open} aria-label={open ? "Close Accurate Designs AI Guide" : "Ask Accurate Designs AI Guide"} onClick={toggle}>
        <span aria-hidden="true">{open ? "×" : "✦"}</span>
        {open ? "Close guide" : "Need a quick answer?"}
      </button>
    </div>
  );
}
