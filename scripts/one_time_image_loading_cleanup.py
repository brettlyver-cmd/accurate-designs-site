from pathlib import Path

path = Path("src/App.jsx")
text = path.read_text(encoding="utf-8")

hover_old = '''        <img
          src={src}
          alt={alt}
          style={{'''
hover_new = '''        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{'''

if 'src={src}\n          alt={alt}\n          loading="lazy"' not in text:
    if hover_old not in text:
        raise SystemExit("Could not locate HoverImage image element")
    text = text.replace(hover_old, hover_new, 1)

hero_old = '''          <img
            src={heroModernDusk}
            alt="Contemporary custom home at dusk"
            style={{'''
hero_new = '''          <img
            src={heroModernDusk}
            alt="Contemporary custom home at dusk"
            fetchPriority="high"
            decoding="async"
            style={{'''

if 'src={heroModernDusk}\n            alt="Contemporary custom home at dusk"\n            fetchPriority="high"' not in text:
    if hero_old not in text:
        raise SystemExit("Could not locate homepage hero image")
    text = text.replace(hero_old, hero_new, 1)

path.write_text(text, encoding="utf-8")
