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
'''      <div
        style={{
          maxWidth: 1240,''',
'''      <div
        className="nav-shell"
        style={{
          maxWidth: 1240,''',
"nav shell class",
)

replace_once(
'''          <img src="/Logo.png" alt="Accurate Designs" style={{ height: 60, width: "auto", display: "block" }} />''',
'''          <img className="nav-logo" src="/Logo.png" alt="Accurate Designs" style={{ height: 60, width: "auto", display: "block" }} />''',
"nav logo class",
)

old_css = '''      <style>{`@media(max-width:860px){.dn{display:none!important}.mt{display:block!important}.mm{display:block!important}}@media(max-width:640px){h1{font-size:32px!important}h2{font-size:26px!important}section{padding-left:24px!important;padding-right:24px!important}button{width:100%!important;text-align:center}}`}</style>'''
new_css = '''      <style>{`@media(max-width:860px){.dn{display:none!important}.mt{display:block!important}.mm{display:block!important}.nav-shell{padding:0 20px!important;height:72px!important}.nav-logo{height:38px!important;max-width:calc(100vw - 100px)!important}}@media(max-width:640px){h1{font-size:32px!important}h2{font-size:26px!important}section{padding-left:24px!important;padding-right:24px!important}button{width:100%!important;text-align:center}.home-hero{min-height:100svh!important;padding-top:80px!important}.home-hero-content{padding:0 0 56px!important}.home-hero-title{font-size:32px!important;line-height:1.08!important;margin-bottom:24px!important}.home-hero-copy{font-size:16px!important;line-height:1.65!important;max-width:360px!important}.contact-hero{padding-top:112px!important;padding-bottom:64px!important}}`}</style>'''
replace_once(old_css, new_css, "mobile CSS")

replace_once(
'''      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: C.black, overflow: "hidden" }}>''',
'''      <section className="home-hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: C.black, overflow: "hidden" }}>''',
"home hero class",
)

replace_once(
'''        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, width: "100%", margin: "0 auto", padding: "0 20px 140px", textAlign: "center" }}>''',
'''        <div className="home-hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 900, width: "100%", margin: "0 auto", padding: "0 20px 140px", textAlign: "center" }}>''',
"home hero content class",
)

replace_once(
'''            <h1 style={{ ...sf, fontSize: "clamp(32px,5.5vw,64px)", fontWeight: 400, color: C.cream, lineHeight: 1.1, marginBottom: 32, maxWidth: 900}}>''',
'''            <h1 className="home-hero-title" style={{ ...sf, fontSize: "clamp(32px,5.5vw,64px)", fontWeight: 400, color: C.cream, lineHeight: 1.1, marginBottom: 32, maxWidth: 900}}>''',
"home hero title class",
)

replace_once(
'''            <div style={{ ...sn, fontSize: 20, fontWeight: 400, lineHeight: 1.85, color: "rgba(245,241,235,0.82)", maxWidth: 820, margin: "0 auto" }}>''',
'''            <div className="home-hero-copy" style={{ ...sn, fontSize: 20, fontWeight: 400, lineHeight: 1.85, color: "rgba(245,241,235,0.82)", maxWidth: 820, margin: "0 auto" }}>''',
"home hero copy class",
)

replace_once(
'''      <section style={{ background: C.black, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>''',
'''      <section className="contact-hero" style={{ background: C.black, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>''',
"contact hero class",
)

path.write_text(text, encoding="utf-8")
