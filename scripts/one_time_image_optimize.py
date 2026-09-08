from pathlib import Path
import re
from PIL import Image, ImageOps

APP = Path('src/App.jsx')
ASSETS = Path('src/assets')
text = APP.read_text(encoding='utf-8')
pat = re.compile(r'import\s+(\w+)\s+from\s+"\.\/assets\/(.+?\.(?:jpg|jpeg|png))";')
changes = []
for var, rel in pat.findall(text):
    src = ASSETS / rel
    if not src.exists() or src.stat().st_size < 750_000:
        continue
    out = src.with_suffix('.webp')
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)
    if max(im.size) > 3000:
        scale = 3000 / max(im.size)
        im = im.resize((round(im.width*scale), round(im.height*scale)), Image.Resampling.LANCZOS)
    if im.mode not in ('RGB','RGBA'):
        im = im.convert('RGBA' if 'A' in im.getbands() else 'RGB')
    im.save(out, 'WEBP', quality=90, method=6)
    old = f'./assets/{rel}'
    new = f'./assets/{out.name}'
    text = text.replace(old, new)
    changes.append((rel, src.stat().st_size, out.name, out.stat().st_size, im.size))

if not changes:
    raise SystemExit('No qualifying imported images found')
APP.write_text(text, encoding='utf-8')
print('Optimized imported assets:')
for a,b,c,d,size in changes:
    print(f'{a}: {b/1024/1024:.2f} MB -> {c}: {d/1024/1024:.2f} MB @ {size[0]}x{size[1]}')
print(f'Total: {sum(x[1] for x in changes)/1024/1024:.2f} MB -> {sum(x[3] for x in changes)/1024/1024:.2f} MB')
