from pathlib import Path

path = Path("src/App.jsx")
text = path.read_text(encoding="utf-8")

old_toggle = '''        <div className="mt" style={{ display: "none", cursor: "pointer", padding: 10 }} onClick={() => setOp(!op)}>'''
new_toggle = '''        <div className="mt" style={{ display: "none", cursor: "pointer", padding: 10, position: "relative", zIndex: 1002, flexShrink: 0 }} onClick={() => setOp(!op)}>'''

old_line = '''                background: "rgba(255,255,255,0.5)",'''
new_line = '''                background: "#FFFFFF",'''

if old_toggle in text:
    text = text.replace(old_toggle, new_toggle, 1)
elif new_toggle not in text:
    raise SystemExit("Could not find mobile menu toggle")

if old_line in text:
    text = text.replace(old_line, new_line, 1)
elif new_line not in text:
    raise SystemExit("Could not find mobile menu line color")

path.write_text(text, encoding="utf-8")
