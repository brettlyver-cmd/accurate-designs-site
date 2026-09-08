from pathlib import Path

app_path = Path("src/App.jsx")
seo_path = Path("src/seo.js")
sitemap_path = Path("public/sitemap.xml")

app = app_path.read_text(encoding="utf-8")
seo = seo_path.read_text(encoding="utf-8")
sitemap = sitemap_path.read_text(encoding="utf-8")

component = r'''
function SearchServicePage({ go, kind }) {
  const pages = {
    custom: {
      eyebrow: "Custom Home Design + Build",
      title: "Custom Home Design + Build Across the GTA",
      intro: "A custom home works best when architecture, structure, building systems, cost, permits, and construction are resolved together before work reaches the site.",
      image: portfolioEstateFrontDusk,
      imageAlt: "Completed custom home designed and coordinated by Accurate Designs",
      imageLabel: "Custom Home Design + Build",
      whyTitle: "A custom home should be resolved before it becomes expensive.",
      whyBody: "The decisions that shape a home are interconnected. Lot constraints affect massing. Structure affects layout. Mechanical systems affect ceiling heights and usable space. Budget affects every one of those choices. Our role is to coordinate those decisions early so the builder receives a clear, buildable set of instructions rather than a collection of unresolved questions.",
      topics: [
        ["Lot + Zoning Feasibility", "Setbacks, lot coverage, height, site conditions, and approval constraints are reviewed before the design is allowed to outrun the property."],
        ["Architecture + Layout", "Proportion, circulation, natural light, views, and day-to-day use are developed together rather than as separate exercises."],
        ["Structure + Building Systems", "Structural, mechanical, plumbing, and architectural decisions are coordinated during design so they do not compete on site."],
        ["Permit + Build Readiness", "Documentation is developed for municipal review, accurate trade pricing, and confident construction."],
      ],
      steps: [
        ["01", "Discovery + Feasibility", "We review the lot, goals, budget range, zoning, and project constraints before design begins."],
        ["02", "Design Resolution", "Layout, structure, systems, materials, and cost are developed together until the major decisions are resolved."],
        ["03", "Permit + Approvals", "A coordinated permit package is prepared and submitted with the information reviewers need."],
        ["04", "Build Readiness", "The project is detailed for pricing and construction, with design intent carried forward into the build."],
      ],
      faqs: [
        ["When should we involve Accurate Designs?", "The earlier the better. The most valuable decisions are often made before a floor plan is finalized, when zoning, site conditions, scope, and budget can still be aligned without expensive redesign."],
        ["Do you prepare permit drawings?", "Yes. Accurate Designs prepares coordinated residential permit documentation and manages the design information required for municipal review."],
        ["Can Accurate Designs handle both design and construction?", "Yes. Design-build is available for custom residential projects where carrying the design intent through construction is the right fit."],
        ["Where do you work?", "Our core service area is the Greater Toronto Area, including Milton, Oakville, Burlington, Mississauga, and Toronto. Muskoka, Niagara, and extended regions are considered case-by-case."],
      ],
    },
    additions: {
      eyebrow: "Major Additions + Renovations",
      title: "Major Home Additions + Renovations Across the GTA",
      intro: "Major renovations and additions are not blank-slate projects. Existing structure, foundations, mechanical systems, zoning, and construction sequencing all have to be understood before the new work can be resolved properly.",
      image: beforeAfterTraditionalToModern,
      imageAlt: "Before and after major residential renovation and addition",
      imageLabel: "Existing Home Transformation",
      whyTitle: "Existing homes already have rules. The design has to work with them.",
      whyBody: "A second storey, substantial rear addition, or structural renovation can affect load paths, foundations, stairs, plumbing, HVAC, exterior massing, and municipal approvals at the same time. We bring those conditions into the design process early so the project is shaped by what is actually buildable, not by assumptions that become expensive once demolition begins.",
      topics: [
        ["Existing Conditions", "The current house, visible structure, site relationships, and available information are reviewed before new work is developed."],
        ["Structural Strategy", "Load paths, openings, additions, and reconfiguration are considered as part of the layout rather than after it."],
        ["Zoning + Approvals", "Setbacks, height, lot coverage, and the likely approval path are assessed early where they affect the proposed work."],
        ["Systems + Sequencing", "Mechanical, plumbing, electrical implications, and construction sequencing are considered so the renovation can be executed realistically."],
      ],
      steps: [
        ["01", "Existing-Condition Review", "We assess the house, project goals, available drawings, site constraints, and the scope of the proposed change."],
        ["02", "Design + Structural Strategy", "The addition or renovation is developed around both the desired outcome and the realities of the existing building."],
        ["03", "Coordination + Permits", "Architectural, structural, and required building-system information is coordinated into the permit package."],
        ["04", "Build Readiness", "The drawings are developed far enough to support pricing, sequencing, and construction with fewer site-made decisions."],
      ],
      faqs: [
        ["Can you assess a second-storey addition?", "Yes. Second-storey additions are part of our major-addition work. Feasibility depends on the existing house, zoning, structure, site conditions, and project goals."],
        ["What if the existing conditions are different from what was expected?", "Renovations always carry some uncertainty. The goal is to identify and coordinate as much as reasonably possible before construction, then respond intelligently if concealed conditions are uncovered."],
        ["Do you coordinate structural and permit requirements?", "Yes. Our residential documentation is developed with architectural, structural, and required mechanical information coordinated as a project rather than treated as disconnected drawings."],
        ["Where do you work?", "Our core service area is the Greater Toronto Area, including Milton, Oakville, Burlington, Mississauga, and Toronto. Muskoka, Niagara, and extended regions are considered case-by-case."],
      ],
    },
    feasibility: {
      eyebrow: "Pre-Design Feasibility + Lot Review",
      title: "Pre-Design Feasibility & Lot Review Across the GTA",
      intro: "Before investing in detailed design, confirm what the property allows, which constraints matter, what approvals may be required, and whether the project direction is realistic.",
      image: architecturalDrawings,
      imageAlt: "Architectural drawings and project planning material used during feasibility review",
      imageLabel: "Planning + Feasibility",
      whyTitle: "Before drawing the house, confirm the project.",
      whyBody: "A compelling idea can still be the wrong project for a particular property, approval path, or budget. Feasibility work brings the important constraints forward while changing direction is still inexpensive. The objective is not to design the whole project early; it is to establish enough clarity to know what deserves to be designed next.",
      topics: [
        ["Zoning + Lot Constraints", "Applicable setbacks, lot coverage, height, and other property-specific constraints are reviewed against the intended project."],
        ["Site + Existing Conditions", "Available surveys, existing buildings, access, grading, and known site conditions are considered where they may shape feasibility."],
        ["Approval Path", "We identify whether the intended direction appears to fit within the standard approval path or may require additional municipal review."],
        ["Scope + Budget Alignment", "The scale and complexity of the proposed work are discussed against the budget range and priorities before detailed design begins."],
      ],
      steps: [
        ["01", "Inputs + Goals", "We gather the available property information, survey or drawings, project goals, budget range, and known constraints."],
        ["02", "Zoning + Constraint Review", "The proposed direction is tested against the property and the regulations that materially affect it."],
        ["03", "Buildability + Approval Context", "We identify the issues likely to influence design, approvals, structure, site planning, or project complexity."],
        ["04", "Clear Next Step", "You leave with a clearer understanding of what is worth pursuing and what should be resolved before detailed design."],
      ],
      faqs: [
        ["Can you review a property before detailed design begins?", "Yes. That is the purpose of pre-design feasibility: understand the property and project constraints before committing significant time and money to a design direction."],
        ["What information is useful for a feasibility review?", "A current survey is especially helpful. Existing drawings, property information, photos, your priorities, and a realistic budget range also improve the quality of the review."],
        ["Does a feasibility review guarantee municipal approval?", "No. Municipal and other approvals remain subject to the applicable authorities and a complete submission. Feasibility is intended to identify constraints and likely paths early, not replace the formal approval process."],
        ["What happens after feasibility?", "If the project direction is viable and the fit is right, the next step is usually design development. If another path is more appropriate, we will be direct about that as well."],
      ],
    },
  };

  const d = pages[kind] || pages.custom;

  return (
    <>
      <section style={{ background: C.black, padding: "164px 40px 104px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <F><Lbl light>{d.eyebrow}</Lbl></F>
          <F delay={0.08}>
            <h1 style={{ ...sf, fontSize: "clamp(34px,5vw,58px)", fontWeight: 400, color: C.cream, lineHeight: 1.08, letterSpacing: -0.7, margin: "0 auto 28px", maxWidth: 900 }}>{d.title}</h1>
          </F>
          <F delay={0.16}>
            <p style={{ ...sn, fontSize: 17, lineHeight: 1.85, color: "rgba(245,241,235,0.66)", maxWidth: 760, margin: "0 auto 40px" }}>{d.intro}</p>
          </F>
          <F delay={0.24}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Bt onClick={() => go("contact")}>Book a Project Consultation</Bt>
              <Bt outline light onClick={() => go("portfolio")}>View Built Projects</Bt>
            </div>
          </F>
        </div>
      </section>

      <Sec py={88} bg={C.warm} wide>
        <div className="search-service-overview" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 64, alignItems: "center" }}>
          <F>
            <HoverImage src={d.image} alt={d.imageAlt} ratio="66%" filter="grayscale(6%) brightness(0.94)" hoverFilter="grayscale(0) brightness(1)" label={d.imageLabel} />
          </F>
          <F delay={0.08}>
            <div>
              <Lbl>Why It Matters</Lbl>
              <Ttl size="clamp(27px,3.2vw,40px)">{d.whyTitle}</Ttl>
              <Bd max={520} style={{ marginBottom: 0 }}>{d.whyBody}</Bd>
            </div>
          </F>
        </div>
      </Sec>

      <Sec py={84} bg="#F3EFE8">
        <F><Lbl>What Gets Resolved</Lbl><Ttl>Decisions coordinated before they become site problems.</Ttl></F>
        <div className="search-service-topics" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "34px 56px", marginTop: 52 }}>
          {d.topics.map(([title, body], i) => (
            <F key={title} delay={i * 0.05}>
              <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 24, textAlign: "left" }}>
                <h2 style={{ ...sf, fontSize: 18, fontWeight: 500, color: C.black, lineHeight: 1.3, marginBottom: 12 }}>{title}</h2>
                <p style={{ ...sn, fontSize: 14.5, lineHeight: 1.8, color: C.text, margin: 0 }}>{body}</p>
              </div>
            </F>
          ))}
        </div>
      </Sec>

      <Sec py={88} bg={C.cream}>
        <F><Lbl>How We Work</Lbl><Ttl>A clear path from early questions to build-ready decisions.</Ttl></F>
        <div className="search-service-steps" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 30, marginTop: 54 }}>
          {d.steps.map(([n, title, body], i) => (
            <F key={n} delay={i * 0.05}>
              <div style={{ textAlign: "left" }}>
                <div style={{ ...sf, fontSize: 26, color: C.orange, opacity: 0.38, marginBottom: 14 }}>{n}</div>
                <h2 style={{ ...sn, fontSize: 15, fontWeight: 500, color: C.black, lineHeight: 1.4, marginBottom: 10 }}>{title}</h2>
                <p style={{ ...sn, fontSize: 14, color: C.text, lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            </F>
          ))}
        </div>
      </Sec>

      <section style={{ background: C.deep, padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <F>
            <Lbl light>Service Area</Lbl>
            <Ttl light size="clamp(26px,3vw,36px)">Residential projects across the Greater Toronto Area.</Ttl>
            <p style={{ ...sn, fontSize: 15, lineHeight: 1.85, color: "rgba(245,241,235,0.5)", maxWidth: 720, margin: "0 auto" }}>
              Our core service area includes Milton, Oakville, Burlington, Mississauga, and Toronto. Muskoka, Niagara, and extended regions are considered case-by-case.
            </p>
          </F>
        </div>
      </section>

      <Sec py={88} bg={C.warm}>
        <F><Lbl>Common Questions</Lbl><Ttl>Before you move forward.</Ttl></F>
        <div style={{ maxWidth: 820, margin: "44px auto 0", textAlign: "left" }}>
          {d.faqs.map(([q, a]) => (
            <details key={q} style={{ borderTop: `1px solid ${C.faint}`, padding: "22px 0" }}>
              <summary style={{ ...sf, fontSize: 16, fontWeight: 500, color: C.black, cursor: "pointer", lineHeight: 1.5 }}>{q}</summary>
              <p style={{ ...sn, fontSize: 14.5, lineHeight: 1.8, color: C.text, margin: "16px 0 0", maxWidth: 760 }}>{a}</p>
            </details>
          ))}
          <div style={{ borderTop: `1px solid ${C.faint}` }} />
        </div>
      </Sec>

      <Sec py={88} bg={C.cream}>
        <F>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <Lbl>Next Step</Lbl>
            <Ttl>Start with the decisions that determine what happens next.</Ttl>
            <p style={{ ...sn, fontSize: 15, lineHeight: 1.8, color: C.text, maxWidth: 600, margin: "0 auto 36px" }}>A project consultation helps clarify goals, assess fit, and identify the right path forward. No cost. No obligation.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Bt onClick={() => go("contact")}>Book a Project Consultation</Bt>
              <Bt outline onClick={() => go("services")}>View All Services</Bt>
            </div>
          </div>
        </F>
      </Sec>

      <style>{`@media(max-width:860px){.search-service-overview,.search-service-topics,.search-service-steps{grid-template-columns:1fr!important}.search-service-overview{gap:40px!important}.search-service-steps{gap:36px!important}}`}</style>
    </>
  );
}

'''

if "function SearchServicePage({ go, kind })" not in app:
    marker = "function ServicesPage({ go }) {"
    if marker not in app:
        raise SystemExit("ServicesPage marker not found")
    app = app.replace(marker, component + marker, 1)

pages_old = '''    services: <ServicesPage go={go} />,
    portfolio: <PortfolioPage go={go} />,'''
pages_new = '''    services: <ServicesPage go={go} />,
    "custom-home-design-build": <SearchServicePage go={go} kind="custom" />,
    "major-additions-renovations": <SearchServicePage go={go} kind="additions" />,
    "pre-design-feasibility": <SearchServicePage go={go} kind="feasibility" />,
    portfolio: <PortfolioPage go={go} />,'''
if pages_old in app:
    app = app.replace(pages_old, pages_new, 1)
elif pages_new not in app:
    raise SystemExit("pages map marker not found")

footer_old = '''            {[{ id: "services", l: "Custom Home Design + Build" }, { id: "owner-rep", l: "Owner Representation" }, { id: "services", l: "Permit-Ready Documentation" }, { id: "services", l: "Feasibility Review" }].map((s, i) => (
              <div
                key={i}
                onClick={() => go(s.id)}
                style={{ ...sn, fontSize: 12, fontWeight: 400, color: "rgba(245,241,235,0.7)", marginBottom: 12, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "rgba(245,241,235,0.95)")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(245,241,235,0.7)")}
              >
                {s.l}
              </div>
            ))}'''
footer_new = '''            {[
              { id: "custom-home-design-build", l: "Custom Home Design + Build" },
              { id: "major-additions-renovations", l: "Major Additions + Renovations" },
              { id: "pre-design-feasibility", l: "Pre-Design Feasibility" },
              { id: "owner-rep", l: "Owner Representation" },
            ].map((s, i) => (
              <a
                key={i}
                href={`/${s.id}`}
                onClick={(e) => { e.preventDefault(); go(s.id); }}
                style={{ ...sn, display: "block", textDecoration: "none", fontSize: 12, fontWeight: 400, color: "rgba(245,241,235,0.7)", marginBottom: 12, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,241,235,0.95)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,241,235,0.7)")}
              >
                {s.l}
              </a>
            ))}'''
if footer_old in app:
    app = app.replace(footer_old, footer_new, 1)
elif footer_new not in app:
    raise SystemExit("footer services block not found")

# Add crawlable contextual links on the existing Services page without changing the primary consultation CTA.
service_link_anchor = '''                <div style={{ marginTop: 32 }}>
                  <Bt outline onClick={() => go("contact")}>{s.cta}</Bt>
                </div>'''
service_link_replacement = '''                {[
                  "Custom Home Design + Build",
                  "Major Additions + Renovations",
                  "Pre-Design Feasibility",
                ].includes(s.title) ? (
                  <div style={{ marginTop: 22, marginBottom: 6 }}>
                    <a
                      href={s.title === "Custom Home Design + Build" ? "/custom-home-design-build" : s.title === "Major Additions + Renovations" ? "/major-additions-renovations" : "/pre-design-feasibility"}
                      onClick={(e) => {
                        e.preventDefault();
                        go(s.title === "Custom Home Design + Build" ? "custom-home-design-build" : s.title === "Major Additions + Renovations" ? "major-additions-renovations" : "pre-design-feasibility");
                      }}
                      style={{ ...sn, fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: C.orange, textDecoration: "none" }}
                    >
                      Explore this service →
                    </a>
                  </div>
                ) : null}
                <div style={{ marginTop: 26 }}>
                  <Bt outline onClick={() => go("contact")}>{s.cta}</Bt>
                </div>'''
if service_link_anchor in app:
    app = app.replace(service_link_anchor, service_link_replacement, 1)
elif "Explore this service →" not in app:
    raise SystemExit("Services CTA marker not found")

seo_insert = '''  "/custom-home-design-build": {
    title: "Custom Home Design + Build GTA | Accurate Designs",
    description:
      "Construction-aware custom home design and design-build services across the GTA, with feasibility, coordinated design, permits and build readiness aligned early.",
  },
  "/major-additions-renovations": {
    title: "Major Home Additions & Renovations GTA | Accurate Designs",
    description:
      "Design and planning for major home additions, second-storey additions and structural renovations across the GTA, coordinated for permits and construction.",
  },
  "/pre-design-feasibility": {
    title: "Lot & Pre-Design Feasibility GTA | Accurate Designs",
    description:
      "Pre-design feasibility and lot review for GTA custom homes and major renovations, including zoning, site constraints, approvals and early project alignment.",
  },
'''
if '"/custom-home-design-build"' not in seo:
    marker = '  "/portfolio": {'
    if marker not in seo:
        raise SystemExit("seo marker not found")
    seo = seo.replace(marker, seo_insert + marker, 1)

new_urls = [
    "https://www.accuratedesigns.ca/custom-home-design-build",
    "https://www.accuratedesigns.ca/major-additions-renovations",
    "https://www.accuratedesigns.ca/pre-design-feasibility",
]
if new_urls[0] not in sitemap:
    marker = "  <url><loc>https://www.accuratedesigns.ca/portfolio</loc></url>"
    addition = "\n".join(f"  <url><loc>{u}</loc></url>" for u in new_urls) + "\n"
    if marker not in sitemap:
        raise SystemExit("sitemap marker not found")
    sitemap = sitemap.replace(marker, addition + marker, 1)

app_path.write_text(app, encoding="utf-8")
seo_path.write_text(seo, encoding="utf-8")
sitemap_path.write_text(sitemap, encoding="utf-8")
print("SEO service pages patch applied")
