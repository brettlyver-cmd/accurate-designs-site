const fs = require('fs');

const path = 'src/App.jsx';
let text = fs.readFileSync(path, 'utf8');

function replaceOnce(name, from, to) {
  const count = text.split(from).length - 1;
  if (count !== 1) throw new Error(`${name}: expected exactly 1 match, found ${count}`);
  text = text.replace(from, to);
}

replaceOnce(
  'home logo link',
  `        <div
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 16 }}
          onClick={() => nv("home")}
        >
          <img className="nav-logo" src="/Logo.png" alt="Accurate Designs" style={{ height: 60, width: "auto", display: "block" }} />
        </div>`,
  `        <a
          href="/"
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}
          onClick={(e) => { e.preventDefault(); nv("home"); }}
          aria-label="Accurate Designs home"
        >
          <img className="nav-logo" src="/Logo.png" alt="Accurate Designs" style={{ height: 60, width: "auto", display: "block" }} />
        </a>`
);

replaceOnce(
  'desktop navigation links',
  `            <span
              key={i.id}
              onClick={() => nv(i.id)}
              style={{
                ...sn,
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: page === i.id ? C.orange : "rgba(255,255,255,0.95)",
                cursor: "pointer",
                transition: "color 0.4s",
                paddingBottom: 2,
                borderBottom: page === i.id ? \`1px solid \${C.orange}\` : "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (page !== i.id) e.target.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (page !== i.id) e.target.style.color = "rgba(255,255,255,0.45)";
              }}
            >
              {i.l}
            </span>`,
  `            <a
              key={i.id}
              href={\`/\${i.id}\`}
              onClick={(e) => { e.preventDefault(); nv(i.id); }}
              style={{
                ...sn,
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: page === i.id ? C.orange : "rgba(255,255,255,0.95)",
                cursor: "pointer",
                transition: "color 0.4s",
                paddingBottom: 2,
                borderBottom: page === i.id ? \`1px solid \${C.orange}\` : "1px solid transparent",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                if (page !== i.id) e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (page !== i.id) e.currentTarget.style.color = "rgba(255,255,255,0.45)";
              }}
            >
              {i.l}
            </a>`
);

replaceOnce(
  'mobile navigation links',
  `            <div
              key={i.id}
              onClick={() => nv(i.id)}
              style={{
                ...sn,
                padding: "16px 0",
                fontSize: 12,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: page === i.id ? C.orange : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                borderBottom: "1px solid rgba(255,255,255,0.03)",
              }}
            >
              {i.l}
            </div>`,
  `            <a
              key={i.id}
              href={\`/\${i.id}\`}
              onClick={(e) => { e.preventDefault(); nv(i.id); }}
              style={{
                ...sn,
                display: "block",
                padding: "16px 0",
                fontSize: 12,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: page === i.id ? C.orange : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                borderBottom: "1px solid rgba(255,255,255,0.03)",
                textDecoration: "none",
              }}
            >
              {i.l}
            </a>`
);

replaceOnce(
  'footer navigation links',
  `              <div
                key={p.id}
                onClick={() => go(p.id)}
                style={{ ...sn, fontSize: 12, fontWeight: 400, color: "rgba(245,241,235,0.7)", marginBottom: 12, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "rgba(245,241,235,0.95)")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(245,241,235,0.7)")}
              >
                {p.l}
              </div>`,
  `              <a
                key={p.id}
                href={\`/\${p.id}\`}
                onClick={(e) => { e.preventDefault(); go(p.id); }}
                style={{ ...sn, display: "block", textDecoration: "none", fontSize: 12, fontWeight: 400, color: "rgba(245,241,235,0.7)", marginBottom: 12, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,241,235,0.95)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,241,235,0.7)")}
              >
                {p.l}
              </a>`
);

fs.writeFileSync(path, text);
