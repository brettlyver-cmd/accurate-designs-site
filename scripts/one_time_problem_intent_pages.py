from pathlib import Path

app_path = Path('src/App.jsx')
seo_path = Path('src/seo.js')
sitemap_path = Path('public/sitemap.xml')
app = app_path.read_text(encoding='utf-8')
seo = seo_path.read_text(encoding='utf-8')
sitemap = sitemap_path.read_text(encoding='utf-8')

component = r'''
function PlanningQuestionPage({ go, kind }) {
  const pages = {
    "second-storey": {
      eyebrow: "Second-Storey Addition Planning",
      title: "Planning a Second-Storey Addition in the GTA?",
      intro: "Adding a floor can create substantial living space without increasing the home's footprint, but it also changes the structural, zoning, circulation, building-system, approval, and construction questions that have to be resolved.",
      image: beforeAfterTraditionalToModern,
      imageAlt: "Residential home transformed through a major addition",
      imageLabel: "Major Addition Planning",
      whyTitle: "The question is not only whether a second floor fits. It is whether the existing house can support the project you want.",
      whyBody: "A second-storey addition connects new design to an existing building that was never intended to carry the same loads, circulation, systems, or construction sequence. The project is strongest when those realities shape the design early rather than appearing as corrections after drawings or demolition.",
      points: [
        ["Zoning Envelope", "Height, setbacks, lot coverage and other applicable zoning standards can shape the size and massing of the addition before the floor plan is finalized."],
        ["Existing Structure + Foundations", "The existing load path, framing and foundation conditions influence what can reasonably be added and where structural intervention may be required."],
        ["Stairs + Interior Planning", "A new storey needs a workable stair location and circulation strategy without sacrificing the function of the existing main floor."],
        ["Building Systems + Sequencing", "HVAC, plumbing, electrical, roof work, weather protection and the order of construction all affect how the project can be executed."],
      ],
      contextTitle: "A second-storey addition is a whole-house project, even when the footprint stays the same.",
      contextBody: "The value of early planning is understanding the interactions before one decision forces another. Feasibility establishes the constraints. Design resolves the architecture and structure. Permit documentation coordinates the required information. Build readiness carries those decisions far enough that pricing and construction can proceed with fewer assumptions.",
      faqs: [
        ["Can every bungalow or house support a second storey?", "No. Feasibility depends on the existing structure, foundations, configuration, zoning, site conditions and the proposed design. Structural requirements must be assessed by the appropriate qualified professionals."],
        ["Will the existing foundation need reinforcement?", "Possibly. Some projects can work with the existing foundation strategy while others require reinforcement or structural changes. That cannot be determined reliably without project-specific assessment."],
        ["Will I need Committee of Adjustment approval?", "It depends on the property and proposed design. If the project cannot comply with an applicable zoning standard, a minor variance or another approval path may be required."],
        ["Is a second-storey addition better than a rear addition?", "Neither is universally better. The right direction depends on zoning, the existing house, lot conditions, budget, desired rooms, circulation and how you want the finished home to function."],
      ],
      secondaryLabel: "View Major Addition Services",
      secondaryRoute: "major-additions-renovations",
    },
    committee: {
      eyebrow: "Zoning + Approvals",
      title: "Committee of Adjustment & Minor Variance Planning for GTA Homes",
      intro: "When a residential design cannot comply with a specific zoning standard, the project may require minor variance approval. The approval question should be understood while the design can still respond intelligently to it.",
      image: architecturalDrawings,
      imageAlt: "Residential architectural drawings used to coordinate zoning and approval requirements",
      imageLabel: "Zoning + Design Coordination",
      whyTitle: "A variance should be understood before the design becomes expensive.",
      whyBody: "Committee of Adjustment is not simply a paperwork step after design. The exact zoning relief, the relationship to the property and neighbourhood, and the reason for the design all affect the approval context. Approval is never guaranteed, so the project should be developed with a clear understanding of where it complies and where it does not.",
      points: [
        ["Exact Zoning Relief", "The project first needs a clear zoning review so the specific standard or standards that are not met are understood rather than assumed."],
        ["Design Context", "The proposed massing, setbacks, height, parking or other requested relief needs to make sense within the site and residential context."],
        ["Planning Tests", "Minor variance decisions consider whether the variance is minor and desirable and whether it maintains the general intent and purpose of the zoning by-law and Official Plan."],
        ["Approval Dependency", "The design, permit timing and construction plan should account for the fact that a variance decision is a separate approval and may affect what can move forward."],
      ],
      contextTitle: "Not every custom home or addition needs a variance, and avoiding one is sometimes a design decision.",
      contextBody: "A feasibility review can identify the applicable zoning envelope before detailed design. From there, the project can either remain within that envelope or deliberately evaluate a design direction that requires relief. The important part is knowing which path you are taking and why before substantial design work is committed.",
      faqs: [
        ["What is a Committee of Adjustment minor variance?", "A minor variance is site-specific relief from one or more zoning by-law standards. Municipal Committees of Adjustment consider these applications under the Planning Act and the applicable local process."],
        ["Does every addition or custom home need Committee of Adjustment?", "No. Projects that comply with the applicable zoning standards generally do not require a minor variance for those standards. A zoning review is the appropriate way to determine whether relief may be needed."],
        ["Can the design sometimes be changed to avoid a variance?", "Yes. Depending on the constraint and your priorities, the design may be adjusted to comply. In other cases, seeking relief may remain the preferred project direction. That trade-off is best understood early."],
        ["Does Committee of Adjustment approval mean I can start building?", "No. A variance decision does not replace the building permit or other required approvals. The project must still satisfy the applicable permit and technical requirements."],
      ],
      secondaryLabel: "Start With Feasibility",
      secondaryRoute: "pre-design-feasibility",
    },
  };

  const d = pages[kind] || pages["second-storey"];

  return (
    <>
      <section style={{ background: C.black, padding: "164px 40px 104px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <F><Lbl light>{d.eyebrow}</Lbl></F>
          <F delay={0.08}>
            <h1 style={{ ...sf, fontSize: "clamp(34px,5vw,58px)", fontWeight: 400, color: C.cream, lineHeight: 1.08, letterSpacing: -0.7, margin: "0 auto 28px" }}>{d.title}</h1>
          </F>
          <F delay={0.16}>
            <p style={{ ...sn, fontSize: 17, lineHeight: 1.85, color: "rgba(245,241,235,0.66)", maxWidth: 760, margin: "0 auto 40px" }}>{d.intro}</p>
          </F>
          <F delay={0.24}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Bt onClick={() => go("contact")}>Book a Project Consultation</Bt>
              <Bt outline light onClick={() => go(d.secondaryRoute)}>{d.secondaryLabel}</Bt>
            </div>
          </F>
        </div>
      </section>

      <Sec py={88} bg={C.warm} wide>
        <div className="planning-question-overview" style={{ display: "grid", gridTemplateColumns: "1.02fr .98fr", gap: 64, alignItems: "center" }}>
          <F><HoverImage src={d.image} alt={d.imageAlt} ratio="66%" filter="grayscale(6%) brightness(0.94)" hoverFilter="grayscale(0) brightness(1)" label={d.imageLabel} /></F>
          <F delay={0.08}>
            <div><Lbl>Why It Matters</Lbl><Ttl size="clamp(27px,3.2vw,40px)">{d.whyTitle}</Ttl><Bd max={540} style={{ marginBottom: 0 }}>{d.whyBody}</Bd></div>
          </F>
        </div>
      </Sec>

      <Sec py={84} bg="#F3EFE8">
        <F><Lbl>What Needs to Be Understood</Lbl><Ttl>Resolve the constraint before it becomes a construction problem.</Ttl></F>
        <div className="planning-question-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "34px 56px", marginTop: 52 }}>
          {d.points.map(([title, body], i) => (
            <F key={title} delay={i * 0.05}><div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 24, textAlign: "left" }}><h2 style={{ ...sf, fontSize: 18, fontWeight: 500, color: C.black, lineHeight: 1.3, marginBottom: 12 }}>{title}</h2><p style={{ ...sn, fontSize: 14.5, lineHeight: 1.8, color: C.text, margin: 0 }}>{body}</p></div></F>
          ))}
        </div>
      </Sec>

      <section style={{ background: C.deep, padding: "86px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <F><Lbl light>Planning Context</Lbl><Ttl light size="clamp(26px,3vw,36px)">{d.contextTitle}</Ttl><p style={{ ...sn, fontSize: 15, lineHeight: 1.85, color: "rgba(245,241,235,0.52)", maxWidth: 760, margin: "0 auto" }}>{d.contextBody}</p></F>
        </div>
      </section>

      <Sec py={88} bg={C.warm}>
        <F><Lbl>Common Questions</Lbl><Ttl>What homeowners usually need clarified first.</Ttl></F>
        <div style={{ maxWidth: 820, margin: "44px auto 0", textAlign: "left" }}>
          {d.faqs.map(([q, a]) => (<details key={q} style={{ borderTop: `1px solid ${C.faint}`, padding: "22px 0" }}><summary style={{ ...sf, fontSize: 16, fontWeight: 500, color: C.black, cursor: "pointer", lineHeight: 1.5 }}>{q}</summary><p style={{ ...sn, fontSize: 14.5, lineHeight: 1.8, color: C.text, margin: "16px 0 0", maxWidth: 760 }}>{a}</p></details>))}
          <div style={{ borderTop: `1px solid ${C.faint}` }} />
        </div>
      </Sec>

      <Sec py={88} bg={C.cream}>
        <F><div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}><Lbl>Next Step</Lbl><Ttl>Understand the project before committing to the wrong direction.</Ttl><p style={{ ...sn, fontSize: 15, lineHeight: 1.8, color: C.text, maxWidth: 600, margin: "0 auto 36px" }}>A project consultation helps clarify the constraint, assess fit, and identify the right next step. No cost. No obligation.</p><div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}><Bt onClick={() => go("contact")}>Book a Project Consultation</Bt><Bt outline onClick={() => go(d.secondaryRoute)}>{d.secondaryLabel}</Bt></div></div></F>
      </Sec>

      <style>{`@media(max-width:860px){.planning-question-overview,.planning-question-grid{grid-template-columns:1fr!important}.planning-question-overview{gap:40px!important}}`}</style>
    </>
  );
}

'''

if 'function PlanningQuestionPage({ go, kind })' not in app:
    marker = 'function ServicesPage({ go }) {'
    if marker not in app:
        raise SystemExit('ServicesPage marker not found')
    app = app.replace(marker, component + marker, 1)

pages_old = '''    "pre-design-feasibility": <SearchServicePage go={go} kind="feasibility" />,
    portfolio: <PortfolioPage go={go} />,'''
pages_new = '''    "pre-design-feasibility": <SearchServicePage go={go} kind="feasibility" />,
    "second-storey-addition": <PlanningQuestionPage go={go} kind="second-storey" />,
    "committee-of-adjustment": <PlanningQuestionPage go={go} kind="committee" />,
    portfolio: <PortfolioPage go={go} />,'''
if pages_old in app:
    app = app.replace(pages_old, pages_new, 1)
elif pages_new not in app:
    raise SystemExit('pages map marker not found')

footer_old = '''              { id: "pre-design-feasibility", l: "Pre-Design Feasibility" },
              { id: "owner-rep", l: "Owner Representation" },'''
footer_new = '''              { id: "pre-design-feasibility", l: "Pre-Design Feasibility" },
              { id: "second-storey-addition", l: "Second-Storey Additions" },
              { id: "committee-of-adjustment", l: "Committee of Adjustment" },
              { id: "owner-rep", l: "Owner Representation" },'''
if footer_old in app:
    app = app.replace(footer_old, footer_new, 1)
elif footer_new not in app:
    raise SystemExit('footer service marker not found')

seo_insert = '''  "/second-storey-addition": {
    title: "Second-Storey Addition Design GTA | Accurate Designs",
    description:
      "Planning a second-storey addition in Toronto or the GTA? Accurate Designs coordinates zoning, existing structure, systems and permit requirements before construction.",
  },
  "/committee-of-adjustment": {
    title: "Committee of Adjustment & Minor Variance GTA | Accurate Designs",
    description:
      "Residential design and planning for GTA projects that may require Committee of Adjustment or minor variance approval, with zoning and design issues resolved early.",
  },
'''
if '"/second-storey-addition"' not in seo:
    marker = '  "/portfolio": {'
    if marker not in seo:
        raise SystemExit('SEO marker not found')
    seo = seo.replace(marker, seo_insert + marker, 1)

urls = [
    'https://www.accuratedesigns.ca/second-storey-addition',
    'https://www.accuratedesigns.ca/committee-of-adjustment',
]
if urls[0] not in sitemap:
    marker = '  <url><loc>https://www.accuratedesigns.ca/portfolio</loc></url>'
    addition = '\n'.join(f'  <url><loc>{u}</loc></url>' for u in urls) + '\n'
    if marker not in sitemap:
        raise SystemExit('sitemap marker not found')
    sitemap = sitemap.replace(marker, addition + marker, 1)

app_path.write_text(app, encoding='utf-8')
seo_path.write_text(seo, encoding='utf-8')
sitemap_path.write_text(sitemap, encoding='utf-8')
print('Problem-intent pages patch applied')
