from pathlib import Path

path = Path("src/App.jsx")
text = path.read_text(encoding="utf-8")


def replace_once(old: str, new: str, label: str) -> None:
    global text
    if old in text:
        text = text.replace(old, new, 1)
    elif new not in text:
        raise SystemExit(f"Missing expected text for {label}")


# Establish one clear primary conversion action while preserving navigational CTAs.
replace_once("Begin with a Conversation", "Book a Project Consultation", "hero CTA")

home_final_old = '''            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Bt onClick={() => go("contact")}>Book a Consultation</Bt>
              <Bt outline onClick={() => go("contact")}>Request a Review</Bt>
            </div>'''
home_final_new = '''            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Bt onClick={() => go("contact")}>Book a Project Consultation</Bt>
              <Bt outline onClick={() => go("portfolio")}>View Built Projects</Bt>
            </div>'''
replace_once(home_final_old, home_final_new, "home final CTA pair")

text = text.replace("Book a Consultation", "Book a Project Consultation")
text = text.replace('cta: "Request a Quote"', 'cta: "Book a Project Consultation"')
text = text.replace('cta: "Request a Review"', 'cta: "Book a Project Consultation"')
text = text.replace(">Request a Review</Bt>", ">Book a Project Consultation</Bt>")
text = text.replace(">Get Planning Help</Bt>", ">Book a Project Consultation</Bt>")
text = text.replace(">Request the Guide</Bt>", ">Book a Project Consultation</Bt>")
text = text.replace(">Featured Resource<", ">Planning Insight<")
text = text.replace("© 2025 Accurate Designs Inc.", "© 2026 Accurate Designs Inc.")

# Put compact credibility proof immediately after the hero without changing the hero itself.
marker = '      <Sec py={110} bg={C.warm} data-section="what-happens-next">'
trust_strip = '''      <section style={{ background: "#F3EFE8", padding: "28px 40px", borderBottom: `1px solid ${C.faint}` }} data-section="early-trust">
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 24, alignItems: "center" }}>
          {[
            { n: "25+", l: "Years in Practice" },
            { n: "500+", l: "Residential Projects" },
            { n: "Since 2000", l: "Construction-Aware Design" },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ ...sf, fontSize: 18, fontWeight: 500, color: C.black, marginBottom: 4 }}>{item.n}</div>
              <div style={{ ...sn, fontSize: 9.5, fontWeight: 500, letterSpacing: 2.2, textTransform: "uppercase", color: C.muted }}>{item.l}</div>
            </div>
          ))}
        </div>
      </section>

'''

if 'data-section="early-trust"' not in text:
    if marker not in text:
        raise SystemExit("Missing homepage post-hero marker")
    text = text.replace(marker, trust_strip + marker, 1)

path.write_text(text, encoding="utf-8")
