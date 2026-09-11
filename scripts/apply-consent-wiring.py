from pathlib import Path

app_path = Path("src/App.jsx")
app = app_path.read_text(encoding="utf-8")

import_old = 'import PrivacyPage from "./PrivacyPage.jsx";\n'
import_new = 'import PrivacyPage from "./PrivacyPage.jsx";\nimport CookieConsent, { SETTINGS_EVENT } from "./CookieConsent.jsx";\n'
if app.count(import_old) != 1:
    raise SystemExit(f"Expected one PrivacyPage import, found {app.count(import_old)}")
app = app.replace(import_old, import_new, 1)

footer_old = '''            <a href="/privacy" onClick={(e) => { e.preventDefault(); go("privacy"); }} style={{ ...sn, fontSize: 11, fontWeight: 400, color: "rgba(245,241,235,0.58)", textDecoration: "none" }}>
              Privacy Policy
            </a>'''
footer_new = '''            <a href="/privacy" onClick={(e) => { e.preventDefault(); go("privacy"); }} style={{ ...sn, fontSize: 11, fontWeight: 400, color: "rgba(245,241,235,0.58)", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))}
              style={{ ...sn, padding: 0, border: 0, background: "transparent", fontSize: 11, fontWeight: 400, color: "rgba(245,241,235,0.58)", cursor: "pointer" }}
            >
              Privacy Settings
            </button>'''
if app.count(footer_old) != 1:
    raise SystemExit(f"Expected one footer privacy link, found {app.count(footer_old)}")
app = app.replace(footer_old, footer_new, 1)

render_old = '''      {pages[page] || pages.home}
      <Footer go={go} />
    </div>'''
render_new = '''      {pages[page] || pages.home}
      <Footer go={go} />
      <CookieConsent />
    </div>'''
if app.count(render_old) != 1:
    raise SystemExit(f"Expected one App render insertion point, found {app.count(render_old)}")
app = app.replace(render_old, render_new, 1)
app_path.write_text(app, encoding="utf-8")

index_path = Path("index.html")
index = index_path.read_text(encoding="utf-8")
ga_block = '''    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0TK1QV797P"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0TK1QV797P');
    </script>
'''
if index.count(ga_block) != 1:
    raise SystemExit(f"Expected one immediate Google Analytics block, found {index.count(ga_block)}")
index = index.replace(ga_block, '', 1)
index_path.write_text(index, encoding="utf-8")
