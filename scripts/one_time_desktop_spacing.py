from pathlib import Path

path = Path("src/App.jsx")
text = path.read_text(encoding="utf-8")


def replace_once(old: str, new: str, label: str) -> None:
    global text
    if old in text:
        text = text.replace(old, new, 1)
    elif new not in text:
        raise SystemExit(f"Missing expected text for {label}")


replace_once(
    'function Sec({ children, bg, py = 140, wide }) {',
    'function Sec({ children, bg, py = 140, wide, className }) {',
    'Sec className support',
)
replace_once(
    '    <section style={{ background: bg || C.cream, padding: `${py}px 40px` }}>',
    '    <section className={className} style={{ background: bg || C.cream, padding: `${py}px 40px` }}>',
    'Sec className render',
)

replace_once(
    '      <Sec py={110} bg={C.warm} data-section="what-happens-next">',
    '      <Sec className="home-proof-intro" py={110} bg={C.warm}>',
    'proof intro section',
)
replace_once(
    '      <Sec py={96} bg={C.warm} wide>',
    '      <Sec className="home-transformation" py={96} bg={C.warm} wide>',
    'transformation section',
)
replace_once(
    '      <Sec py={88} bg={C.warm}>',
    '      <Sec className="home-process-bridge" py={88} bg={C.warm}>',
    'process bridge section',
)
replace_once(
    '<Sec py={64} bg="#F3EFE8" data-section="credibility-strip">',
    '<Sec className="home-credibility" py={64} bg="#F3EFE8">',
    'credibility section',
)
replace_once(
    '      <Sec py={64} bg="#F3EFE8" data-section="stats">',
    '      <Sec className="home-stats" py={64} bg="#F3EFE8">',
    'stats section',
)
replace_once(
    '      <Sec py={120}>\n        <F>\n        <Lbl style={{ fontSize: 12 }}>Why It Matters</Lbl>',
    '      <Sec className="home-why" py={120}>\n        <F>\n        <Lbl style={{ fontSize: 12 }}>Why It Matters</Lbl>',
    'why it matters section',
)
replace_once(
    '      <Sec py={88}>\n        <div style={{maxWidth:820,margin:"0 auto",textAlign:"center"}}>',
    '      <Sec className="home-design-outcome" py={88}>\n        <div style={{maxWidth:820,margin:"0 auto",textAlign:"center"}}>',
    'design outcome section',
)
replace_once(
    '      <Sec py={96} bg="#F3EFE8">\n        <div style={{ display: "grid", gridTemplateColumns: "520px 1fr", gap: 48, alignItems: "center", marginBottom: 52 }} className="wdh">',
    '      <Sec className="home-services" py={96} bg="#F3EFE8">\n        <div style={{ display: "grid", gridTemplateColumns: "520px 1fr", gap: 48, alignItems: "center", marginBottom: 52 }} className="wdh">',
    'home services section',
)
replace_once(
    '      <Sec py={96}>\n        <F>\n          <Lbl style={{ fontSize: 12 }}>Who We Work With</Lbl>',
    '      <Sec className="home-fit" py={96}>\n        <F>\n          <Lbl style={{ fontSize: 12 }}>Who We Work With</Lbl>',
    'who we work with section',
)
replace_once(
    '      <section style={{ background: C.black, padding: "140px 40px" }}>',
    '      <section className="home-selected-work" style={{ background: C.black, padding: "140px 40px" }}>',
    'selected work section',
)
replace_once(
    '      <Sec py={56}>\n        <F>\n          <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>',
    '      <Sec className="home-testimonial" py={56}>\n        <F>\n          <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>',
    'testimonial section',
)
replace_once(
    '      <Sec py={96} bg="#F3EFE8">\n        <F>\n          <Lbl>How We Work</Lbl>',
    '      <Sec className="home-how-we-work" py={96} bg="#F3EFE8">\n        <F>\n          <Lbl>How We Work</Lbl>',
    'how we work section',
)
replace_once(
    '      <Sec py={96}>\n        <F>\n          <Lbl>Learn with Brett</Lbl>',
    '      <Sec className="home-learn" py={96}>\n        <F>\n          <Lbl>Learn with Brett</Lbl>',
    'learn with brett section',
)

old_style = '''      <style>{`@media(max-width:1080px){.wdg,.prv{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:860px){.wg,.og,.trg,.wdh,.midimg{grid-template-columns:1fr!important}.stg,.wdg,.prv{grid-template-columns:1fr!important}.orwg{grid-template-columns:1fr!important}.orwi{grid-template-columns:1fr!important}}`}</style>'''
new_style = '''      <style>{`@media(min-width:861px){.home-proof-intro{padding-top:72px!important;padding-bottom:64px!important}.home-transformation{padding-top:56px!important;padding-bottom:56px!important}.home-process-bridge{padding-top:52px!important;padding-bottom:48px!important}.home-credibility{padding-top:44px!important;padding-bottom:40px!important}.home-stats{padding-top:28px!important;padding-bottom:28px!important}.home-stats>div>div{padding-top:40px!important;padding-bottom:40px!important}.home-why{padding-top:72px!important;padding-bottom:68px!important}.home-design-outcome{padding-top:52px!important;padding-bottom:48px!important}.home-services{padding-top:60px!important;padding-bottom:60px!important}.home-fit{padding-top:60px!important;padding-bottom:64px!important}.home-selected-work{padding-top:110px!important;padding-bottom:80px!important}.home-testimonial{padding-top:48px!important;padding-bottom:44px!important}.home-how-we-work{padding-top:64px!important;padding-bottom:60px!important}.home-learn{padding-top:64px!important;padding-bottom:72px!important}}@media(max-width:1080px){.wdg,.prv{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:860px){.wg,.og,.trg,.wdh,.midimg{grid-template-columns:1fr!important}.stg,.wdg,.prv{grid-template-columns:1fr!important}.orwg{grid-template-columns:1fr!important}.orwi{grid-template-columns:1fr!important}}`}</style>'''
replace_once(old_style, new_style, 'homepage desktop spacing CSS')

path.write_text(text, encoding="utf-8")
