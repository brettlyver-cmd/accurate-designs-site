import React, { useCallback, useEffect, useRef, useState } from "react";
import heroModernDusk from "./assets/Landing-page-image-1.webp";
import beforeAfterTraditionalToModern from "./assets/before-after-traditional-to-modern.jpg";
import processExistingHouse from "./assets/process-existing-house.jpg";
import processFramingInsulation from "./assets/process-framing-insulation.webp";
import processFoundationPoured from "./assets/process-foundation-poured.jpg";
import processTradesFeatureWall from "./assets/process-trades-feature-wall.jpg";
import ownerRepFoundationForms from "./assets/ownerrep-foundation-forms.webp";
import ownerRepFoundationForms2 from "./assets/ownerrep-foundation-forms2.webp";
import ownerRepFramingWall from "./assets/ownerrep-framing-wall.jpg";
import ownerRepTradesInstall from "./assets/ownerrep-trades-install.jpg";
import aboutConstructionSite from "./assets/about-construction-site.webp";
import portfolioEstateFrontDusk from "./assets/portfolio-estate-front-dusk.webp";
import portfolioModernFrontDay from "./assets/portfolio-modern-front-day.jpg";
import portfolioModernRearDusk from "./assets/portfolio-modern-rear-dusk.jpg";
import portfolioLuxuryLivingRoom from "./assets/portfolio-luxury-living-room.jpg";
import portfolioLuxuryKitchen from "./assets/portfolio-luxury-kitchen.jpg";
import portfolioModernBathroom from "./assets/portfolio-modern-bathroom.jpg";
import portfolioCoveredOutdoorWaterfront from "./assets/portfolio-covered-outdoor-waterfront.jpg";
import portfolioFoundationFormed from "./assets/portfolio-foundation-formed.jpg";
import portfolioFoundationPoured from "./assets/portfolio-foundation-poured.webp";
import portfolioBeforeAfterGreyHouse from "./assets/portfolio-before-after-grey-house.jpg";


import ch1 from "./assets/1. Case Study Image 1.jpg";
import ch2 from "./assets/1. Case Study Image 2.jpg";
import ch3 from "./assets/1. Case Study Image 3.webp";

import eg1 from "./assets/2. Case Study Image 1.webp";
import eg2 from "./assets/2. Case Study Image 2.jpg";

import ph1 from "./assets/3. Case Study Image 1.jpg";
import ph2 from "./assets/3. Case Study Image 2.webp";

import nt1 from "./assets/4. Case Study Image 1.jpg";
import nt2 from "./assets/4. Case Study Image 2.webp";
import processHero from "./assets/process-foundation-poured.jpg";
import designBuildImage from "./assets/DesignBuild_1.webp";
import architecturalDrawings from "./assets/Drawings_1.webp";
import processMechanical from "./assets/process-mechanical.webp";
import processTechnical from "./assets/process-technical.jpg";
import ownerRepAuthority from "./assets/ownerrep-authority.webp";
import aboutConstructionFoundation from "./assets/about-construction-foundation.webp";
import aboutConstructionFraming from "./assets/about-construction-framing.jpg";
import portfolioHeroImage from "./assets/portfolio-hero-image.webp";
import contactTrust from "./assets/contact-trust.webp";

/* ACCURATE DESIGNS site — refined premium layout with Montserrat typography, warm palette, and restrained editorial spacing. */
const C = {
  black: "#080808",
  deep: "#1E1E1E",
  smoke: "#3A3632",
  cream: "#F5F1EB",
  warm: "#FAF8F4",
  orange: "#C96A2B",
  stone: "#CFC7BC",
  muted: "#5F5953",
  faint: "#E5DFD7",
  text: "#2F2B27",
  tw: "#FFFFFF",
};
const sf = { fontFamily: "'Montserrat',sans-serif" };
const sn = { fontFamily: "'Montserrat',sans-serif", fontWeight: 400 };
const CONTACT_EMAIL = "blyver@accuratedesigns.ca";
const CONTACT_PHONE = "416-768-1290";
const OFFICE_ADDRESS = "1215 Queensway E, Unit 56\nMississauga, ON L4Y 0G4";

function useFI() {
  const r = useRef(null);
  const [v, sV] = useState(false);

  useEffect(() => {
    const e = r.current;
    if (!e) return;
    const o = new IntersectionObserver(
      ([x]) => {
        if (x.isIntersecting) {
          sV(true);
          o.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    o.observe(e);
    return () => o.disconnect();
  }, []);

  return {
    ref: r,
    style: {
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(20px)",
      transition:
        "opacity 0.9s cubic-bezier(.25,.46,.45,.94),transform 0.9s cubic-bezier(.25,.46,.45,.94)",
    },
  };
}

function F({ children, delay = 0, style, className }) {
  const f = useFI();
  return (
    <div
      ref={f.ref}
      className={className}
      style={{ ...f.style, transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

function HoverImage({
  src,
  alt,
  ratio = "75%",
  filter = "grayscale(10%) brightness(0.9)",
  hoverFilter = "grayscale(0) brightness(1)",
  wrapperStyle,
  imageStyle,
  label,
  labelDark,
}) {
  return (
    <div style={{ position: "relative", ...wrapperStyle }}>
      <div
        style={{
          position: "relative",
          paddingBottom: ratio,
          overflow: "hidden",
          background: C.black,
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.85s, filter 0.85s",
            filter,
            ...imageStyle,
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.02)";
            e.target.style.filter = hoverFilter;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.filter = filter;
          }}
        />
      </div>
      {label ? (
        <div
          style={{
            ...sn,
            position: "absolute",
            top: 16,
            left: 16,
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: 2.4,
            textTransform: "uppercase",
            color: labelDark ? C.black : C.cream,
            background: labelDark ? "rgba(245,241,235,0.88)" : "rgba(8,8,8,0.45)",
            padding: "10px 14px",
            backdropFilter: "blur(10px)",
          }}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
}

const PROJECTS = [
  {
    id: "country-heights-estate",
    name: "Courtyard Residence",
    location: "Richmond Hill",
    sqft: "10,000",
    type: "Custom Home",
    lens: "Regulatory Foresight + Environmental Stewardship",
    img: ch1,
    images: [ch1, ch2, ch3],
    imageLabels: ["Outcome", "Constraint", "Exterior"],
    desc:
      "A courtyard-form residence that transforms a constrained lot into a private, light-filled retreat. The L-shaped plan balances openness with enclosure, creating a seamless dialogue between architecture and landscape.",
  },
  {
    id: "expansive-glazing",
    name: "Escarpment Edge Residence",
    location: "Oakville",
    sqft: "4,000",
    type: "Custom Home",
    lens: "Structural Transparency + Indoor-Outdoor Oversight",
    img: eg1,
    images: [eg1, eg2],
    imageLabels: ["Outcome", "Connection"],
    desc:
      "Positioned along the Niagara Escarpment, this home frames panoramic views while respecting the natural terrain. Clean lines and expansive glazing connect interior spaces to the surrounding environment.",
  },
  {
    id: "protected-heritage-bungalow",
    name: "Urban Infill Residence",
    location: "Richmond Hill",
    sqft: "2,500",
    type: "Renovation + Second Storey Addition",
    lens: "Heritage Alignment + Existing Condition Intelligence",
    img: ph2,
    images: [ph2, ph1],
    imageLabels: ["Outcome", "Before"],
    desc:
      "Designed for a narrow urban lot, this residence maximizes space and natural light through thoughtful massing and vertical organization, proving that constraints can inspire refined architectural solutions.",
  },
  {
    id: "narrow-toronto-lot",
    name: "Waterfront Modern Retreat",
    location: "Toronto",
    sqft: "2,800",
    type: "Custom Home + Legal Basement Apartment",
    lens: "Urban Infill Precision + Shoring Strategy",
    img: nt2,
    images: [nt2, nt1],
    imageLabels: ["Outcome", "Shoring Strategy"],
    desc:
      "A contemporary lakeside retreat designed to embrace its setting through expansive glazing, sheltered outdoor living spaces, and a seamless connection between interior comfort and the natural landscape.",
  },
];


const PROCESS_STEPS = [
  {
    n: "01",
    t: "Discovery + Feasibility",
    d: "We assess your project goals, lot characteristics, budget range, timeline, and existing decisions. We review zoning, identify constraints, and confirm feasibility before design begins. This phase regularly surfaces opportunities or risks that affect scope, cost, or timeline which is far less expensive to address here than after drawings are underway.",
    img: processExistingHouse,
  },
  {
    n: "02",
    t: "Design Development",
    d: "We resolve layout, structure, code compliance, mechanical coordination, and cost alignment through concept, schematic, and detailed design phases. Beam locations coordinate with duct runs, window headers with structural loads, plumbing stacks with usable floor area. The goal: a fully resolved document set with no decisions deferred to the builder.",
    img: processFramingInsulation,
  },
  {
    n: "03",
    t: "Permit + Approvals",
    d: "We submit complete, coordinated permit packages including architectural, structural, and mechanical. Our familiarity with OBC requirements and municipal processes means thorough documentation that addresses what reviewers look for. Our submissions typically receive 2–3 review comments, where many projects receive 10–15 or more.",
    img: processFoundationPoured,
  },
  {
    n: "04",
    t: "Build Readiness",
    d: "We ensure the builder has everything needed to price accurately and build confidently. Drawings answer most questions before they’re asked. Budget is validated against real trade pricing. If we’re providing design-build, our team carries this precision directly through construction.",
    img: processTradesFeatureWall,
  },
];

const TEST = [
  {
    text: "Accurate Designs was the best choice we made for our custom home build. Brett walked us through the entire process and designed exactly what we envisioned. The permit process was a breeze.",
    author: "Roger - Residential Client",
    location: "Oakville, ON",
    label: "Smooth Permit Experience",
  },
  {
    text: "Honesty, transparency, commitment and professionalism. Brett took full responsibility and delivered on time, on budget. He's the only designer I've worked since we met in 2010.",
    author: "Majdi - Residential Builder",
    location: "Mississauga, ON",
    label: "On Time, On Budget",
  },
  {
    text: "Brett helped us design a phenomenal layout addressing all of our needs. The end result was beautiful.",
    author: "Michele - Residential Client",
    location: "Oakville, ON",
    label: "Design That Delivered",
  },
  {
    text: "I worked with Brett over ten years ago, he designed my home. Very informative, took charge through the permit process. Highly recommend.",
    author: "Richard - Plumber & Residential Client",
    location: "Toronto, ON",
    label: "Builder Perspective",
  },
];

function Nav({ page, go }) {
  const [sc, setSc] = useState(false);
  const [op, setOp] = useState(false);

  useEffect(() => {
    const h = () => setSc(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const nv = (p) => {
    go(p);
    setOp(false);
  };

  const its = [
    { id: "services", l: "Services" },
    { id: "portfolio", l: "Portfolio" },
    { id: "process", l: "Process" },
    { id: "owner-rep", l: "Owner Representation" },
    { id: "about", l: "About" },
    { id: "contact", l: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: sc
          ? "rgba(8,8,8,0.97)"
          : "linear-gradient(to bottom, rgba(8,8,8,0.65), rgba(8,8,8,0.1))",
        backdropFilter: sc ? "blur(20px)" : "none",
        transition: "all 0.6s",
        borderBottom: sc ? "1px solid rgba(201,106,43,0.08)" : "none",
      }}
    >
      <div
        className="nav-shell"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: sc ? 64 : 84,
          transition: "height 0.6s",
        }}
      >
        <a
          href="/"
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}
          onClick={(e) => { e.preventDefault(); nv("home"); }}
          aria-label="Accurate Designs home"
        >
          <img className="nav-logo" src="/Logo.png" alt="Accurate Designs" style={{ height: 60, width: "auto", display: "block" }} />
        </a>

        <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="dn">
          {its.map((i) => (
            <a
              key={i.id}
              href={`/${i.id}`}
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
                borderBottom: page === i.id ? `1px solid ${C.orange}` : "1px solid transparent",
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
            </a>
          ))}
        </div>

        <div className="mt" style={{ display: "none", cursor: "pointer", padding: 10, position: "relative", zIndex: 1002, flexShrink: 0 }} onClick={() => setOp(!op)}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 22,
                height: 1.5,
                background: "#FFFFFF",
                marginBottom: i < 2 ? 6 : 0,
                transition: "all 0.3s",
                ...(op && i === 0 ? { transform: "rotate(45deg) translate(5px,5px)" } : {}),
                ...(op && i === 1 ? { opacity: 0 } : {}),
                ...(op && i === 2 ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}),
              }}
            />
          ))}
        </div>
      </div>

      {op ? (
        <div
          className="mm"
          style={{
            display: "none",
            background: "rgba(8,8,8,0.98)",
            padding: "20px 40px 28px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {its.map((i) => (
            <a
              key={i.id}
              href={`/${i.id}`}
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
            </a>
          ))}
        </div>
      ) : null}

      <style>{`@media(max-width:860px){.dn{display:none!important}.mt{display:block!important}.mm{display:block!important}.nav-shell{padding:0 20px!important;height:72px!important}.nav-logo{height:38px!important;max-width:calc(100vw - 100px)!important}}@media(max-width:640px){h1{font-size:32px!important}h2{font-size:26px!important}section{padding-left:24px!important;padding-right:24px!important}button{width:100%!important;text-align:center}.home-hero{min-height:100svh!important;padding-top:80px!important}.home-hero-content{padding:0 0 56px!important}.home-hero-title{font-size:32px!important;line-height:1.08!important;margin-bottom:24px!important}.home-hero-copy{font-size:16px!important;line-height:1.65!important;max-width:360px!important}.contact-hero{padding-top:112px!important;padding-bottom:64px!important}}`}</style>
    </nav>
  );
}

function Sec({ children, bg, py = 140, wide, className }) {
  return (
    <section className={className} style={{ background: bg || C.cream, padding: `${py}px 40px` }}>
      <div style={{ maxWidth: wide ? 1120 : 960, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function Lbl({ children, light, style = {} }) {
  return (
    <div
      style={{
        ...sn,
        fontSize: 9.5,
        fontWeight: 500,
        letterSpacing: 3.5,
        textTransform: "uppercase",
        color: light ? "rgba(245,241,235,0.55)" : C.orange,
        marginBottom: 20,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Ttl({ children, light, size, style }) {
  return (
    <h2
      style={{
        ...sf,
        fontSize: size || "clamp(28px,3.2vw,38px)",
        fontWeight: 400,
        color: light ? C.cream : C.black,
        lineHeight: 1.14,
        marginBottom: 20,
        letterSpacing: -0.25,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

function Bd({ children, light, max, style }) {
  return (
    <p
      style={{
        ...sn,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.8,
        color: light ? "rgba(245,241,235,0.52)" : C.muted,
        maxWidth: max || 620,
        letterSpacing: 0.12,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

function Bt({ children, onClick, outline, light, style: s }) {
  const dk = light && outline;
  const b = {
    ...sn,
    padding: "15px 42px",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 2.6,
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.4s",
    border: `1px solid ${dk ? "rgba(255,255,255,0.15)" : outline ? "rgba(201,106,43,0.35)" : C.orange}`,
    background: outline ? "transparent" : C.orange,
    color: dk ? "rgba(255,255,255,0.75)" : outline ? C.orange : C.cream,
    ...s,
  };

  return (
    <button
      style={b}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.target.style.background = C.orange;
        e.target.style.color = C.cream;
        e.target.style.borderColor = C.orange;
      }}
      onMouseLeave={(e) => {
        e.target.style.background = outline ? "transparent" : C.orange;
        e.target.style.color = dk ? "#ffffff" : outline ? C.orange : C.cream;
        e.target.style.borderColor = dk ? "rgba(255,255,255,0.15)" : outline ? "rgba(201,106,43,0.35)" : C.orange;
      }}
    >
      {children}
    </button>
  );
}

function Inp({ label, type = "text", textarea }) {
  const fieldName = label.replace(" *", "");
  const required = label.endsWith(" *");
  const fieldId = `field-${fieldName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const autoComplete = {
    "First Name": "given-name",
    "Last Name": "family-name",
    Email: "email",
    Phone: "tel",
  }[fieldName];

  const b = {
    ...sn,
    width: "100%",
    padding: "16px 0 14px",
    fontSize: 14,
    fontWeight: 400,
    color: C.black,
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${C.stone}`,
    outline: "none",
    letterSpacing: 0.3,
    boxSizing: "border-box",
    transition: "border-color 0.4s",
  };

  return (
    <div style={{ marginBottom: 42 }}>
      <label
        htmlFor={fieldId}
        style={{
          ...sn,
          fontSize: 9.5,
          fontWeight: 500,
          letterSpacing: 2.5,
          textTransform: "uppercase",
          color: C.text,
          display: "block",
          marginBottom: 10,
        }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={fieldId}
          name={fieldName}
          required={required}
          rows={3}
          style={{ ...b, resize: "none", fontFamily: "'Montserrat',sans-serif" }}
          onFocus={(e) => (e.target.style.borderBottomColor = C.orange)}
          onBlur={(e) => (e.target.style.borderBottomColor = C.stone)}
        />
      ) : (
        <input
          id={fieldId}
          name={fieldName}
          type={type}
          required={required}
          autoComplete={autoComplete}
          style={b}
          onFocus={(e) => (e.target.style.borderBottomColor = C.orange)}
          onBlur={(e) => (e.target.style.borderBottomColor = C.stone)}
        />
      )}
    </div>
  );
}

function Sel({ label, options }) {
  const fieldName = label.replace(" *", "");
  const required = label.endsWith(" *");
  const fieldId = `field-${fieldName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div style={{ marginBottom: 42 }}>
      <label
        htmlFor={fieldId}
        style={{
          ...sn,
          fontSize: 9.5,
          fontWeight: 500,
          letterSpacing: 2.5,
          textTransform: "uppercase",
          color: C.text,
          display: "block",
          marginBottom: 10,
        }}
      >
        {label}
      </label>
      <select
        id={fieldId}
        name={fieldName}
        required={required}
        defaultValue=""
        style={{
          ...sn,
          width: "100%",
          padding: "16px 0 14px",
          fontSize: 14,
          fontWeight: 400,
          color: C.black,
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${C.stone}`,
          outline: "none",
          boxSizing: "border-box",
          cursor: "pointer",
        }}
      >
        {options.map((o, i) => {
          const placeholder = i === 0 && o === "Select...";
          return (
            <option key={o} value={placeholder ? "" : o} disabled={placeholder}>
              {o}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function Stats({ light }) {
  const s = [
    { n: "25+", l: "Years in Practice" },
    { n: "500+", l: "Residential Projects" },
    { n: "2 – 3", l: "Typical Permit Review Comments" },
    { n: "$500K – $20M+", l: "Project Range" },
  ];

  return (
    <div
      style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: "56px 0",
        borderTop: `1px solid ${light ? "rgba(245,241,235,0.06)" : C.faint}`,
        borderBottom: `1px solid ${light ? "rgba(245,241,235,0.06)" : C.faint}`,
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }} className="stg">
        {s.map((x, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div
              style={{
                ...sf,
                fontSize: "clamp(26px,3.2vw,38px)",
                fontWeight: 400,
                color: light ? C.cream : C.black,
                marginBottom: 10,
                lineHeight: 1.02,
                whiteSpace: "nowrap",
              }}
            >
              {x.n}
            </div>
            <div
              style={{
                ...sn,
                fontSize: 9.5,
                fontWeight: 400,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: light ? "rgba(245,241,235,0.3)" : C.muted,
              }}
            >
              {x.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PInfo({ p }) {
  return (
    <div style={{ paddingTop: 8, textAlign: "left" }}>
      <div
        style={{
          ...sn,
          fontSize: 9,
          fontWeight: 500,
          letterSpacing: 4,
          color: C.orange,
          marginBottom: 14,
          textTransform: "uppercase",
          opacity: 0.8,
          textAlign: "left",
        }}
      >
        {p.lens}
      </div>
      <h3
        style={{ ...sf, fontSize: "clamp(24px,2.8vw,32px)", color: C.black, marginBottom: 8, lineHeight: 1.15, textAlign: "left", transition: "color 0.3s ease" }}
        onMouseEnter={(e)=>e.target.style.color=C.orange}
        onMouseLeave={(e)=>e.target.style.color=C.black}
      >
        {p.name}
      </h3>
      <div
        style={{
          ...sn,
          fontSize: 11,
          fontWeight: 400,
          color: C.text,
          marginBottom: 22,
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          textAlign: "left",
        }}
      >
        <span>{p.type}</span>
        <span style={{ color: C.stone }}>·</span>
        <span>{p.location}</span>
        <span style={{ color: C.stone }}>·</span>
        <span>{p.sqft} sf</span>
      </div>
      <div style={{ marginBottom: 14, textAlign: "left" }}>
        <div style={{ ...sn, fontSize: 9.5, fontWeight: 600, letterSpacing: 2, color: C.smoke, marginBottom: 6, textTransform: "uppercase", textAlign: "left" }}>
          Design Narrative
        </div>
        <p style={{ ...sn, fontSize: 14.5, fontWeight: 400, lineHeight: 1.7, color: C.text, maxWidth: 520, margin: 0, textAlign: "left" }}>
          {p.desc}
        </p>
      </div>
    </div>
  );
}

function ProjectGallery({ project }) {
  return (
    <div>
      <HoverImage
        src={project.images?.[0] || project.img}
        alt={project.name}
        ratio="62%"
        filter="grayscale(6%) brightness(0.94)"
        hoverFilter="grayscale(0) brightness(1)"
        label={project.imageLabels?.[0]}
      />
      {project.images && project.images.length > 1 ? (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(project.images.length - 1, 2)},1fr)`, gap: 14, marginTop: 14 }}>
          {project.images.slice(1, 3).map((im, idx) => (
            <HoverImage
              key={idx}
              src={im}
              alt={`${project.name} ${idx + 2}`}
              ratio="42%"
              filter="grayscale(10%) brightness(0.94)"
              hoverFilter="grayscale(0) brightness(1)"
              label={project.imageLabels?.[idx + 1]}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function HomePage({ go }) {
  return (
    <>
      <section className="home-hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", background: C.black, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={heroModernDusk}
            alt="Contemporary custom home at dusk"
            fetchPriority="high"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(6%) brightness(0.80) contrast(1.08) sepia(0.06)" }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.72) 35%, rgba(8,8,8,0.45) 60%, rgba(8,8,8,0.28) 78%, rgba(8,8,8,0.38) 100%)" }} />
        <div className="home-hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 900, width: "100%", margin: "0 auto", padding: "0 20px 140px", textAlign: "center" }}>
          <F>
            <Lbl light>Custom Homes · Additions · Major Renovations</Lbl>
          </F>
          <F delay={0.12}>
            <h1 className="home-hero-title" style={{ ...sf, fontSize: "clamp(32px,5.5vw,64px)", fontWeight: 400, color: C.cream, lineHeight: 1.1, marginBottom: 32, maxWidth: 900}}>
              Homes that feel exceptional long before they’re built.
            </h1>
          </F>
          <F delay={0.24}>
            <div className="home-hero-copy" style={{ ...sn, fontSize: 20, fontWeight: 400, lineHeight: 1.85, color: "rgba(245,241,235,0.82)", maxWidth: 820, margin: "0 auto" }}>
              <div style={{ marginBottom: 10 }}>
  Designed with clarity. Detailed with intent. Executed without compromise.
</div>
<div>
  Where architecture, construction, and cost are aligned from the very beginning.
</div>
            </div>
          </F>
          <F delay={0.36}>
            <div style={{ display: "flex", gap: 16, marginTop: 48, justifyContent: "center", flexWrap: "wrap" }}>
              <Bt onClick={() => go("contact")}>Book a Project Consultation</Bt>
              <Bt outline light onClick={() => go("portfolio")}>View Built Projects</Bt>
            </div>
          </F>
        </div>
      </section>

      <section style={{ background: "#F3EFE8", padding: "28px 40px", borderBottom: `1px solid ${C.faint}` }} data-section="early-trust">
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

      <Sec className="home-proof-intro" py={110} bg={C.warm}>
        <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
          <div style={{...sn,fontSize:12,letterSpacing:3,textTransform:"uppercase",color:C.orange,marginBottom:14}}>
            What this looks like when it’s done right
          </div>

          <div style={{...sf,fontSize:"clamp(22px,2.6vw,30px)",lineHeight:1.5,color:C.black,marginBottom:22}}>
            A better design. A cleaner build.<br/>
            Fewer decisions left to the site.
          </div>

          <div style={{...sn,fontSize:15,lineHeight:1.9,color:C.smoke,maxWidth:760,margin:"0 auto"}}>
            When structure, layout, code, cost, and construction sequencing are resolved early, the project moves forward with clarity. The result is not just fewer surprises, it is a better home.
          </div>
        </div>
      </Sec>

      <Sec className="home-transformation" py={96} bg={C.warm} wide>
        <div style={{ display: "grid", gridTemplateColumns: "0.88fr 1.12fr", gap: 48, alignItems: "center" }} className="trg">
          <F>
            <div style={{ maxWidth: 420 }}>
              <Lbl style={{ fontSize: 12 }}>Transformation</Lbl>
              <Ttl size="clamp(28px,3.6vw,44px)">Every project starts with constraints.</Ttl>
              <Bd max={420} style={{ marginBottom: 0 }}>
                The outcome is determined by <span className="desktop-newline">how early they’re resolved.</span>
              </Bd>
            </div>
          </F>
          <F delay={0.1}>
            <div style={{ background: C.cream, padding: 18, border: `1px solid ${C.faint}`, marginTop: 20 }}>
              <div style={{ border: `1px solid ${C.stone}`, padding: 18 }}>
                <HoverImage
                  src={beforeAfterTraditionalToModern}
                  alt="Before and after residential transformation"
                  ratio="100%"
                  filter="grayscale(4%) brightness(0.95)"
                  hoverFilter="grayscale(0) brightness(1)"
                  label="Before + After"
                />
              </div>
            </div>
          </F>
        </div>
      </Sec>
      <Sec className="home-process-bridge" py={88} bg={C.warm}>
  <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
    <div style={{ ...sn, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: C.orange, marginBottom: 16 }}>
      What happens next
    </div>

    <div style={{ ...sf, fontSize: "clamp(24px,2.8vw,34px)", lineHeight: 1.42, color: C.black, marginBottom: 24 }}>
      The feeling draws you in. <span className="desktop-newline">The process makes it buildable.</span>
    </div>

    <div style={{ ...sn, fontSize: 15.5, lineHeight: 1.9, color: C.smoke, maxWidth: 760, margin: "0 auto" }}>
      Beautiful homes do not come from design alone. They come from resolving proportion, structure, budget, code, and construction logic early enough that <span className="desktop-newline">the finished home still feels like the original vision.</span>
    </div>
  </div>
</Sec>
<Sec className="home-credibility" py={64} bg="#F3EFE8">
  <div style={{ maxWidth: 1000, margin: "0 auto" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap:60 }}>
      
      <div style={{ textAlign: "center" }}>
        <div style={{ ...sf, fontSize: 19.5, fontWeight: 500, marginBottom: 10 }}>
          Fewer Surprises
        </div>
        <div style={{ ...sn, fontSize: 14.5, lineHeight: 1.8, color: C.smoke }}>
          Decisions are resolved early, <span className="desktop-newline">so the build does not drift</span>{" "}<span className="desktop-newline">under pressure.</span>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ ...sf, fontSize: 19.5, fontWeight: 500, marginBottom: 10 }}>
          Cleaner Builds
        </div>
        <div style={{ ...sn, fontSize: 14.5, lineHeight: 1.8, color: C.smoke }}>
          Structure, layout, and sequencing <span className="desktop-newline">are coordinated before</span>{" "}<span className="desktop-newline">construction begins.</span>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ ...sf, fontSize: 19.5, fontWeight: 500, marginBottom: 10 }}>
          Better Outcomes
        </div>
        <div style={{ ...sn, fontSize: 14.5, lineHeight: 1.8, color: C.smoke }}>
          The finished home reflects <span className="desktop-newline">the original vision, not</span>{" "}<span className="desktop-newline">compromises made on site.</span>
        </div>
      </div>

    </div>
  </div>
</Sec>
      <Sec className="home-stats" py={64} bg="#F3EFE8">
        <Stats />
      </Sec>

      <Sec className="home-why" py={120}>
        <F>
        <Lbl style={{ fontSize: 12 }}>Why It Matters</Lbl>
          <Ttl style={{ letterSpacing: 0.2 }}>The outcome is shaped by when decisions are made, not just which ones.</Ttl>
        </F>
        <F delay={0.08}>
          <p style={{ ...sn, fontSize: 15, fontWeight: 400, lineHeight: 1.8, color: C.text, maxWidth: 640, margin: "0 auto", textAlign: "center", letterSpacing: 0.15 }}>
            When zoning, structure, mechanical systems and budget are coordinated during design - not after - projects cost less to build, they obtain permits faster and produce better outcomes. That coordination is the foundation of everything we do.
          </p>
        </F>
        <F delay={0.12}>
          <div style={{ maxWidth: 860, margin: "44px auto 0" }}>
            <HoverImage
              src={architecturalDrawings}
              alt="Architectural drawings, material samples, and project budgeting tools"
              ratio="41%"
              filter="grayscale(4%) brightness(0.96)"
              hoverFilter="grayscale(0) brightness(1)"
              label="Planning + Specification"
            />
          </div>
        </F>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 48, marginTop: 72 }}>
          {[
            {
              t: "Construction-Aware Design",
              b: "Every drawing is developed with buildability in mind. We coordinate structure, mechanical, and architectural systems so the builder receives instructions, not questions.",
            },
            {
              t: "Fewer Surprises Later",
              b: "When decisions are resolved on paper, change orders drop, timelines hold, and the gap between design intent and construction reality closes.",
            },
            {
              t: "Clarity Before You Commit",
              b: "Before you invest in design or sign a contract, we help you understand what your lot allows, what the code requires, and what the project will realistically cost.",
            },
          ].map((x, i) => (
            <F key={i} delay={i * 0.08}>
              <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 32 }}>
                <h3 style={{ ...sn, fontSize: 15, fontWeight: 500, color: C.black, marginBottom: 14, letterSpacing: 0.2 }}>{x.t}</h3>
                <p style={{ ...sn, fontSize: 15.5, fontWeight: 400, lineHeight: 1.8, color: C.text }}>{x.b}</p>
              </div>
            </F>
          ))}
        </div>
      </Sec>

      <Sec className="home-design-outcome" py={88}>
        <div style={{maxWidth:820,margin:"0 auto",textAlign:"center"}}>
          <div style={{...sn,fontSize:12,letterSpacing:3,textTransform:"uppercase",color:C.orange,marginBottom:14}}>
            Design Outcome
          </div>

          <div style={{...sf,fontSize:"clamp(22px,2.6vw,30px)",lineHeight:1.5,color:C.black,marginBottom:22}}>
            When the right decisions are made early, <span className="desktop-newline">the design becomes clear.</span>
          </div>

          <div style={{...sn,fontSize:15,lineHeight:1.85,color:C.smoke}}>
            Not forced. Not decorative. A result of structure, proportion, and use being resolved together.
          </div>
        </div>
      </Sec>

      <Sec className="home-services" py={96} bg="#F3EFE8">
        <div style={{ display: "grid", gridTemplateColumns: "520px 1fr", gap: 48, alignItems: "center", marginBottom: 52 }} className="wdh">
          <F delay={0.08}>
            <div style={{ maxWidth: 520, margin: 0 }}>
              <HoverImage
                src={designBuildImage}
                alt="Architectural design aligned with the built structure on site"
                ratio="68%"
                filter="grayscale(4%) brightness(0.96)"
                hoverFilter="grayscale(0) brightness(1)"
                label="Custom Home Design + Build"
              />
            </div>
          </F>
          <F>
            <div>
              <Lbl style={{ fontSize: 12 }}>What We Do</Lbl>
              <div style={{ ...sn, fontSize: 13, color: C.text, marginBottom: 14 }}>
                Project quality is shaped by how clearly design and construction are aligned before work begins.
              </div>
              <Ttl size="clamp(28px,3.5vw,40px)" style={{ marginBottom: 0 }}>
                Design and build services for custom residential projects.
              </Ttl>
            </div>
          </F>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 48, marginTop: 64 }} className="wdg">
          {[
            { t: "Custom Homes", d: "Full architectural design,\npermit documentation,\nand construction services\nfor new custom homes\nacross the GTA." },
            { t: "Additions + Renovations", d: "Second-storey additions,\nmajor renovations, and\nstructural changes\nplanned with precision\nfor a new build." },
            { t: "Permit Documentation", d: "OBC-compliant architectural, structural, and mechanical drawings coordinated as a single package." },
            { t: "Owner Representation", d: "Independent project oversight for homeowners who want an experienced technical advocate in their corner." },
          ].map((x, i) => (
            <F key={i} delay={i * 0.06}>
              <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 28 }}>
                <h4 style={{ ...sn, fontSize: 14, fontWeight: 500, color: C.black, marginBottom: 10 }}>{x.t}</h4>
                <p className="desktop-preline" style={{ ...sn, fontSize: 15, fontWeight: 400, lineHeight: 1.75, color: C.text }}>{x.d}</p>
              </div>
            </F>
          ))}
        </div>
        <div style={{ marginTop: 52 }}>
          <Bt outline onClick={() => go("services")}>View All Services</Bt>
        </div>
      </Sec>

      <Sec className="home-fit" py={96}>
        <F>
          <Lbl style={{ fontSize: 12 }}>Who We Work With</Lbl>
          <Ttl size="clamp(26px,3.2vw,36px)">We're the right fit when the details matter.</Ttl>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, marginTop: 44 }} className="wg">
            <div>
              {[
                "Homeowners planning a custom home, estate-scale\nbuild, or major renovation",
                "Major additions typically involve structural reconfiguration,\nwhich makes coordination critical",
                "Projects where zoning, conservation authority,\nor site complexity requires careful analysis",
                "Clients who value thorough planning\nover fast sketches",
              ].map((x, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: 20, alignItems: "flex-start", textAlign: "left" }}>
                  <span style={{ ...sn, fontSize: 16, color: C.orange, fontWeight: 500, minWidth: 14, lineHeight: 1, paddingTop: 1 }}>•</span>
                  <span className="desktop-preline" style={{ ...sn, fontSize: 14, fontWeight: 400, color: C.text, lineHeight: 1.7, textAlign: "left" }}>{x}</span>
                </div>
              ))}
            </div>
            <div style={{ borderLeft: `1px solid ${C.faint}`, paddingLeft: 36, display: "flex", alignItems: "center" }}>
              <p style={{ ...sf, fontSize: 16, fontStyle: "italic", color: C.text, lineHeight: 1.7, textAlign: "center" }}>
                We are not the right choice for permit-only drafting with minimal design coordination. Our value is in the thinking behind the drawings.
              </p>
            </div>
          </div>
        </F>
      </Sec>

      <section className="home-selected-work" style={{ background: C.black, padding: "140px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <F>
          <Lbl style={{ fontSize: 12 }}>Selected Work</Lbl>
          </F>
          <F delay={0.08}>
            <Ttl light>Featured Projects</Ttl>
          </F>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24, marginTop: 64 }}>
            {PROJECTS.slice(0, 3).map((p, i) => (
              <F key={p.id} delay={i * 0.1}>
                <div style={{ cursor: "pointer" }} onClick={() => go("portfolio")}>
                  <HoverImage src={p.img} alt={p.name} ratio="75%" filter="grayscale(14%) brightness(0.84)" hoverFilter="grayscale(0) brightness(1)" />
                  <div style={{ padding: "22px 0 0", textAlign: "center" }}>
                    <div style={{ ...sn, fontSize: 12, fontWeight: 500, letterSpacing: 3, color: C.orange, marginBottom: 10, textTransform: "uppercase", opacity: 0.8 }}>
                      {p.lens}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
                      <span style={{ ...sf, fontSize: 17, fontWeight: 400, color: C.cream }}>{p.name}</span>
                      <span style={{ color: "rgba(245,241,235,0.2)" }}>·</span>
                      <span style={{ ...sn, fontSize: 12, fontWeight: 400, color: "rgba(245,241,235,0.25)" }}>{p.sqft} sf</span>
                    </div>
                    <p style={{ ...sn, fontSize: 12, fontWeight: 400, lineHeight: 1.6, color: "rgba(245,241,235,0.3)" }}>{p.desc}</p>
                  </div>
                </div>
              </F>
            ))}
          </div>
          <div style={{ marginTop: 52 }}>
            <Bt outline light onClick={() => go("portfolio")}>See More Projects</Bt>
          </div>
        </div>
      </section>

      <Sec className="home-testimonial" py={56}>
        <F>
          <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
            <div style={{ ...sn, fontSize: 9, fontWeight: 500, letterSpacing: 3, color: C.orange, marginBottom: 20, textTransform: "uppercase" }}>Smooth Permit Experience</div>
            <p style={{ ...sf, fontSize: "clamp(19px,2.5vw,26px)", fontStyle: "italic", fontWeight: 400, color: C.smoke, lineHeight: 1.55, marginBottom: 28, textAlign: "center", maxWidth: 780, marginLeft: "auto", marginRight: "auto" }}>
              "Brett walked us through the entire process and designed exactly what we envisioned. The permit process was a breeze."
            </p>
            <div style={{ ...sn, fontSize: 12, fontWeight: 500, color: C.black, letterSpacing: 0.5 }}>Custom Home Client</div>
            <div style={{ ...sn, fontSize: 11, fontWeight: 400, color: C.text }}>Oakville, ON</div>
          </div>
        </F>
      </Sec>

      <Sec className="home-how-we-work" py={96} bg="#F3EFE8">
        <F>
          <Lbl>How We Work</Lbl>
          <Ttl size="clamp(28px,3.5vw,40px)">A structured process that resolves complexity early.</Ttl>
        </F>
        <F delay={0.08}>
          <div style={{ maxWidth: 860, margin: "40px auto 56px" }}>
            <HoverImage
              src={processHero}
              alt="Construction process and structural coordination on site"
              ratio="48%"
              filter="grayscale(10%) brightness(0.9)"
              hoverFilter="grayscale(0) brightness(1)"
              label="Build Intelligence"
            />
          </div>
        </F>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 32, marginTop: 56 }} className="prv">
          {[
            { n: "01", t: "Discovery + Feasibility", d: "We assess your lot, zoning,\nbudget range, and goals\nbefore design begins." },
            { n: "02", t: "Design Resolution", d: "Decisions are resolved.\nStructure and systems align.\nMaterials and cost are set." },
            { n: "03", t: "Permit + Approvals", d: "Complete, coordinated\ndocumentation submitted\nfor efficient review." },
            { n: "04", t: "Build Readiness", d: "Drawings detailed enough\nfor accurate pricing and\nconfident construction." },
          ].map((x, i) => (
            <F key={i} delay={i * 0.06}>
              <div>
                <div style={{ ...sf, fontSize: 28, fontWeight: 400, color: C.orange, opacity: 0.35, marginBottom: 14 }}>{x.n}</div>
                <h4 style={{ ...sn, fontSize: 15, fontWeight: 500, color: C.black, marginBottom: 10 }}>{x.t}</h4>
                <p className="desktop-preline" style={{ ...sn, fontSize: 15, fontWeight: 400, lineHeight: 1.75, color: C.text }}>{x.d}</p>
              </div>
            </F>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <Bt outline onClick={() => go("process")}>See How It Works</Bt>
        </div>
      </Sec>

      <Sec className="home-learn" py={96}>
        <F>
          <Lbl>Learn with Brett</Lbl>
          <Ttl size="clamp(26px,3.2vw,38px)">Planning insights for homeowners who want to get it right the first time.</Ttl>
          <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
            <Bd max={620} style={{ lineHeight: 1.85 }}>
              Before you hire anyone, there are decisions that quietly shape the cost, timeline, and outcome of your entire project.
            </Bd>
          </div>
        </F>
        <div style={{ marginTop: 56 }}>
          <F>
            <div style={{ background: C.warm, padding: "48px 44px", borderLeft: `3px solid ${C.orange}`, marginBottom: 40 }}>
              <div style={{ ...sn, fontSize: 9, fontWeight: 500, letterSpacing: 3, color: C.orange, marginBottom: 14, textTransform: "uppercase" }}>Planning Insight</div>
              <h3 style={{ ...sf, fontSize: "clamp(22px,2.5vw,28px)", fontWeight: 400, color: C.black, lineHeight: 1.25, marginBottom: 14 }}>The Decisions That Lock In Cost</h3>
              <p style={{ ...sn, fontSize: 14, fontWeight: 400, lineHeight: 1.8, color: C.text, maxWidth: 480, margin: "0 auto 24px", textAlign: "center" }}>
                Which early-stage choices quietly determine 80% of your construction budget — and how to make them with full context before committing to design or construction.
              </p>
              <Bt outline onClick={() => go("contact")}>Book a Project Consultation</Bt>
            </div>
          </F>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 36 }}>
            {[
              { t: "Before You Sign Anything", d: "What to clarify about scope, budget,\nand expectations before signing\na design or builder agreement." },
              { t: "What Your Lot Actually Allows", d: "How zoning bylaws, setbacks,\neasements, and conservation rules\nshape what can actually be built." },
            ].map((x, i) => (
              <F key={i} delay={i * 0.06}>
                <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 28 }}>
                  <h4 style={{ ...sf, fontSize: 16, fontWeight: 400, fontStyle: "italic", color: C.smoke, marginBottom: 10 }}>{x.t}</h4>
                  <p className="desktop-preline" style={{ ...sn, fontSize: 15, fontWeight: 400, lineHeight: 1.75, color: C.text }}>{x.d}</p>
                </div>
              </F>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 36 }}>
          <Bt outline onClick={() => go("contact")}>Book a Project Consultation</Bt>
        </div>
      </Sec>

      <section style={{ background: C.deep, padding: "96px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }} className="og">
          <F>
            <div>
              <Lbl light>Independent Advisory</Lbl>
              <Ttl light size="clamp(28px,3.5vw,42px)">Owner Representation</Ttl>
              <p style={{ ...sn, fontSize: 14, fontWeight: 400, lineHeight: 1.9, color: "rgba(245,241,235,0.45)", marginBottom: 40 }}>
                An experienced technical advocate who reads drawings, understands construction, and works exclusively in your interest. <span className="desktop-newline">Available for projects at any stage.</span>
              </p>
              <Bt outline light onClick={() => go("owner-rep")}>See Owner Rep</Bt>
            </div>
          </F>
          <F delay={0.12}>
            <div style={{ borderLeft: "1px solid rgba(201,106,43,0.15)", paddingLeft: 40 }}>
              <div style={{ ...sf, fontSize: "clamp(20px,2.8vw,28px)", fontStyle: "italic", fontWeight: 400, color: "rgba(245,241,235,0.18)", lineHeight: 1.55 }}>
                "If a decision is not made on paper, it will be made on site."
              </div>
            </div>
          </F>
        </div>
      </section>

      <Sec py={56} bg={C.warm} wide>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="midimg">
          <F>
            <HoverImage
              src={ownerRepFoundationForms}
              alt="Construction oversight and foundation coordination"
              ratio="62%"
              filter="grayscale(10%) brightness(0.9)"
              hoverFilter="grayscale(0) brightness(1)"
              label="Technical Oversight"
            />
          </F>
          <F delay={0.06}>
            <HoverImage
              src={portfolioModernRearDusk}
              alt="Finished custom home outcome"
              ratio="62%"
              filter="grayscale(8%) brightness(0.92)"
              hoverFilter="grayscale(0) brightness(1)"
              label="Built Outcome"
            />
          </F>
        </div>
      </Sec>

      <Sec py={96} bg={C.cream}>
        <F>
          <div style={{ textAlign: "center", maxWidth: 940, margin: "0 auto" }}>
            <Lbl>Next Step</Lbl>
<div style={{ ...sf, fontSize: "clamp(18px,2.2vw,24px)", fontStyle: "italic", color: C.smoke, lineHeight: 1.55, maxWidth: 760, margin: "0 auto 20px" }}>
  The quality of the outcome is determined by what gets resolved before construction begins.
</div>
            <Ttl size="clamp(26px,3.5vw,40px)">Planning a custom home, addition, or renovation?</Ttl>
            <p style={{ ...sn, fontSize: 15, fontWeight: 400, color: C.text, lineHeight: 1.8, marginBottom: 44, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
              A project consultation helps clarify goals, assess feasibility, <span className="desktop-newline">and outline next steps. No cost, no obligation.</span>
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Bt onClick={() => go("contact")}>Book a Project Consultation</Bt>
              <Bt outline onClick={() => go("portfolio")}>View Built Projects</Bt>
            </div>
          </div>
        </F>
      </Sec>

      <style>{`@media(min-width:861px){.home-proof-intro{padding-top:72px!important;padding-bottom:64px!important}.home-transformation{padding-top:56px!important;padding-bottom:56px!important}.home-process-bridge{padding-top:52px!important;padding-bottom:48px!important}.home-credibility{padding-top:44px!important;padding-bottom:40px!important}.home-stats{padding-top:28px!important;padding-bottom:28px!important}.home-stats>div>div{padding-top:40px!important;padding-bottom:40px!important}.home-why{padding-top:72px!important;padding-bottom:68px!important}.home-design-outcome{padding-top:52px!important;padding-bottom:48px!important}.home-services{padding-top:60px!important;padding-bottom:60px!important}.home-fit{padding-top:60px!important;padding-bottom:64px!important}.home-selected-work{padding-top:110px!important;padding-bottom:80px!important}.home-testimonial{padding-top:48px!important;padding-bottom:44px!important}.home-how-we-work{padding-top:64px!important;padding-bottom:60px!important}.home-learn{padding-top:64px!important;padding-bottom:72px!important}}@media(max-width:1080px){.wdg,.prv{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:860px){.wg,.og,.trg,.wdh,.midimg{grid-template-columns:1fr!important}.stg,.wdg,.prv{grid-template-columns:1fr!important}.orwg{grid-template-columns:1fr!important}.orwi{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}


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

function ServicesPage({ go }) {
  const sv = [
    {
      label: "Design-Build",
      title: "Custom Home Design + Build",
      body: "The same team that designs the home oversees the build. Decisions carry through to the site without reinterpretation or gaps between what was drawn and what gets built.",
      outcome: "The result is a home that carries its original intent through construction, without compromise.",
      cta: "Book a Project Consultation",
    },
    {
      label: "Additions + Renovations",
      title: "Major Additions + Renovations",
      body: "Existing buildings carry hidden constraints such as foundation capacity, load paths through older framing, systems that weren’t designed to be extended. We resolve those conditions in the drawings before work begins.",
      outcome: "When the walls come down, the builder is working from a set of drawings that already accounts for what was behind them.",
      cta: "Book a Project Consultation",
    },
    {
      label: "Permit Documentation",
      title: "Permit-Ready Documentation",
      body: "We prepare complete permit packages including architectural, structural, and mechanical coordinated as a single submission. Drawings are formatted to address what reviewers look for, not just what the code requires.",
      outcome: "Our submissions typically receive 2–3 examiner comments. Many projects receive 10–15 or more. The difference is documentation that resolves questions before they’re asked.",
      cta: "Book a Project Consultation",
    },
    {
      label: "Feasibility + Planning",
      title: "Pre-Design Feasibility",
      body: "Before committing to design, you need to know what your lot actually allows, what the code requires, and what the project will realistically cost. This is especially important when zoning, conservation authority, or site conditions affect what can be built.",
      outcome: "A feasibility review is typically completed within 1–2 weeks depending on available information. This step identifies constraints early, confirms what’s possible on your property, and prevents time being spent in the wrong direction.",
      cta: "Book a Project Consultation",
    },
  ];

  return (
    <>
      <section style={{ background: C.black, padding: "160px 40px 100px" }}>
        <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center" }}>
          <F>
            <Lbl light>What We Do</Lbl>
            <Ttl light>Services</Ttl>
          </F>
          <F delay={0.1}>
            <Bd light max={620}>Projects are shaped by how early the important decisions are resolved.</Bd>
            <Bd light max={620} style={{ marginTop: 18, marginLeft: "auto", marginRight: "auto" }}>
              We design and plan custom homes, major renovations, and additions so those decisions are made before construction begins.
            </Bd>
          </F>
        </div>
      </section>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 40px" }}>
        <p style={{ ...sn, fontSize: 15, fontWeight: 400, color: C.text, textAlign: "center", maxWidth: 560, margin: "34px auto 0", lineHeight: 1.85 }}>
          Projects are shaped by decisions made early — by how clearly they are resolved, documented, and carried into construction.
        </p>
        <div style={{ borderTop: `1px solid ${C.faint}`, margin: "48px auto 0", maxWidth: 680 }} />
      </div>

      <Sec py={96} bg="#F3EFE8">
        <F>
          <div style={{ textAlign: "center" }}>
            <Lbl>When We’re Most Valuable</Lbl>
          </div>
          <div style={{ maxWidth: 860, margin: "0 auto 56px" }}>
            <HoverImage
              src={processMechanical}
              alt="Coordinated plumbing and mechanical systems during construction"
              ratio="48%"
              filter="grayscale(10%) brightness(0.9)"
              hoverFilter="grayscale(0) brightness(1)"
              label="System Coordination"
            />
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto 60px", paddingLeft: 18, boxSizing: "border-box" }}>
            {[
              "You’re planning a custom home or major renovation and want it done properly from the start",
              "You want to reduce mid-construction revisions through better planning",
              "You’re mid-project and need a clear, unbiased second opinion",
              "You want a complete, coordinated permit package before building begins",
            ].map((x, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start", width: "100%" }}>
                <span style={{ ...sn, fontSize: 16, color: C.orange, fontWeight: 500, minWidth: 14, lineHeight: 1, paddingTop: 2 }}>•</span>
                <span style={{ ...sn, fontSize: 14, fontWeight: 400, color: C.text, lineHeight: 1.7 }}>{x}</span>
              </div>
            ))}
          </div>
        </F>
        <F delay={0.08}>
          <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 48 }}>
            <Lbl>Where to Start</Lbl>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 48, maxWidth: 1100, margin: "0 auto" }} className="wts">
              {[
                { s: "You’re ready to move forward with a custom home or major renovation", a: "Project Consultation", p: "contact" },
                { s: "You need clarity before committing to design", a: "Feasibility Review", p: "contact" },
                { s: "You’re already in a project and need an unbiased second opinion", a: "Representation Consultation", p: "owner-rep" },
              ].map((r, i) => (
                <div key={i} style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 24, cursor: "pointer" }} onClick={() => go(r.p)}>
                  <p style={{ ...sn, fontSize: 15, fontWeight: 400, color: C.text, lineHeight: 1.65, marginBottom: 10 }}>{r.s}</p>
                  <div style={{ ...sn, fontSize: 22, fontWeight: 400, color: C.orange, lineHeight: 1, marginBottom: 8, opacity: 0.9, transform: "translateY(-1px)" }}>↓</div>
                  <span style={{ ...sn, fontSize: 11, fontWeight: 500, color: C.orange, letterSpacing: 2, textTransform: "uppercase" }}>{r.a}</span>
                </div>
              ))}
            </div>
          </div>
        </F>
      </Sec>

      {sv.map((s, i) => (
        <Sec key={i} py={100} bg={i % 2 === 0 ? C.cream : C.warm}>
          <F>
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 48, alignItems: "start" }} className="sg">
              <div style={{ ...sn, fontSize: 11, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: C.orange, paddingTop: 6 }}>{s.label}</div>
              <div style={{ textAlign: "left" }}>
                <h3 style={{ ...sf, fontSize: "clamp(24px,2.8vw,34px)", color: C.black, marginBottom: 14, lineHeight: 1.15 }}>{s.title}</h3>
                <p style={{ ...sn, fontSize: 14, fontWeight: 400, lineHeight: 1.75, color: C.text, marginBottom: 18, maxWidth: 520 }}>{s.body}</p>
                <p style={{ ...sn, fontSize: 14, fontWeight: 400, lineHeight: 1.75, color: C.text, marginBottom: 18, maxWidth: 520 }}>{s.outcome}</p>
                {[
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
                </div>
              </div>
            </div>
          </F>
        </Sec>
      ))}

      <section style={{ background: C.deep, padding: "100px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <Ttl light size="clamp(26px,3vw,36px)">Not sure where to start?</Ttl>
          <p style={{ ...sn, fontSize: 14, fontWeight: 400, color: "rgba(245,241,235,0.35)", maxWidth: 400, margin: "0 auto 40px" }}>
            A short conversation will help clarify the right path forward.
          </p>
          <Bt onClick={() => go("contact")}>Book a Project Consultation</Bt>
        </div>
      </section>

      <style>{`@media(max-width:860px){.sg,.wts{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}

function PortfolioPage({ go }) {
  return (
    <>
      <section style={{ background: C.black, padding: "160px 40px 100px" }}>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <F>
            <Lbl light>Our Work</Lbl>
            <Ttl light>Portfolio</Ttl>
          </F>
          <F delay={0.08}>
            <div style={{ maxWidth: 900, margin: "40px auto 32px" }}>
              <HoverImage
                src={portfolioHeroImage}
                alt="Completed custom home exterior"
                ratio="42%"
                filter="grayscale(10%) brightness(0.9)"
                hoverFilter="grayscale(0) brightness(1)"
                label="Completed Work"
              />
            </div>
          </F>
          <F delay={0.1}>
            <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
              <Bd light max={760} style={{ margin: "0 auto", textAlign: "center" }}>
                A curated selection of built work showing how early decisions shape clarity, construction, and the finished result.
              </Bd>
            </div>
          </F>
        </div>
      </section>

      

      <section style={{ background: C.warm, padding: "96px 40px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {PROJECTS.map((p, i) => (
            <F key={p.id} delay={i * 0.04}>
              <div style={{ marginBottom: 68, paddingBottom: i < PROJECTS.length - 1 ? 68 : 0, borderBottom: i < PROJECTS.length - 1 ? `1px solid ${C.faint}` : "none" }}>
                <div style={{ display: "grid", gridTemplateColumns: i === 0 ? "1.35fr 1fr" : i % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr", gap: 48, alignItems: "start" }} className="pg">
                  {i % 2 === 0 ? (
                    <>
                      <ProjectGallery project={p} />
                      <PInfo p={p} />
                    </>
                  ) : (
                    <>
                      <PInfo p={p} />
                      <ProjectGallery project={p} />
                    </>
                  )}
                </div>
              </div>
            </F>
          ))}
        </div>
      </section>

      <Sec py={88} bg={C.warm}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ ...sf, fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.5, color: C.black }}>
            Every project begins the same way — by resolving what others leave open.
          </div>
        </div>
      </Sec>

      <section style={{ background: C.deep, padding: "108px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <Ttl light size="clamp(26px,3vw,36px)">Have a project in mind?</Ttl>
          <p style={{ ...sn, fontSize: 14, fontWeight: 400, color: "rgba(245,241,235,0.4)", maxWidth: 460, margin: "0 auto 36px", lineHeight: 1.85 }}>
            We'll assess feasibility and outline a clear path forward.
          </p>
          <Bt onClick={() => go("contact")}>Book a Project Consultation</Bt>
        </div>
      </section>

      <style>{`@media(max-width:860px){.pg,.pfg{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}

function ProcessPage({ go }) {
  return (
    <>
      <section style={{ background: C.black, padding: "160px 40px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 24, paddingRight: 24, textAlign: "center" }}>
          <F>
            <Lbl light>How We Work</Lbl>
            <Ttl light style={{ marginBottom: 18 }}>Process</Ttl>
          </F>
          <F delay={0.1}>
            <Bd light max={620} style={{ margin: "0 auto", textAlign: "center", lineHeight: 1.75 }}>
              Each phase is designed to bring the project into sharper alignment, so by the time construction begins the work is clear, coordinated, and ready to execute.
            </Bd>
          </F>
          <F delay={0.14}>
            <div style={{ maxWidth: 860, margin: "48px auto 32px" }}>
              <HoverImage
                src={processHero}
                alt="Construction process and structural coordination on site"
                ratio="48%"
                filter="grayscale(10%) brightness(0.9)"
                hoverFilter="grayscale(0) brightness(1)"
                label="Build Intelligence"
              />
            </div>
          </F>
          <F delay={0.18}>
            <div style={{ maxWidth: 860, margin: "24px auto 56px" }}>
              <HoverImage
                src={processTechnical}
                alt="Structural framing and beam coordination during construction"
                ratio="48%"
                filter="grayscale(10%) brightness(0.9)"
                hoverFilter="grayscale(0) brightness(1)"
                label="Technical Resolution"
              />
            </div>
          </F>
        </div>
      </section>

      <Sec py={0} bg="#F3EFE8">
        <F>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40, maxWidth: 960, margin: "0 auto", paddingLeft: 24, paddingRight: 24, paddingTop: 40, paddingBottom: 40, borderTop: `1px solid ${C.faint}` }} className="prb">
            {["Fewer late-stage decisions", "More accurate pricing", "Smoother permit approvals", "Cleaner builder handoff"].map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                <span style={{ ...sn, fontSize: 12, color: C.orange, fontWeight: 500 }}>—</span>
                <span style={{ ...sn, fontSize: 14, fontWeight: 400, lineHeight: 1.7, color: C.text, letterSpacing: 0.2 }}>{b}</span>
              </div>
            ))}
          </div>
        </F>
      </Sec>

      <Sec py={0} bg="#F3EFE8">
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
          {PROCESS_STEPS.map((s, i) => (
            <F key={i} delay={i * 0.06}>
              <div style={{ paddingTop: 32, paddingBottom: 32 }}>
                <div style={{ maxWidth: 720, margin: "0 auto" }}>
                  <div style={{ ...sf, fontSize: 28, fontWeight: 400, color: C.orange, opacity: 0.35, marginBottom: 18, textAlign: "center" }}>{s.n}</div>
                  <HoverImage
                    src={s.img}
                    alt={s.t}
                    ratio="48%"
                    filter="grayscale(10%) brightness(0.9)"
                    hoverFilter="grayscale(0) brightness(1)"
                    wrapperStyle={{ marginBottom: 24 }}
                  />
                  <div style={{ width: "100%" }}>
                    <h3 style={{ ...sn, fontSize: 17, fontWeight: 500, color: C.black, marginBottom: 12, letterSpacing: 0.2, textAlign: "center" }}>{s.t}</h3>
                    <p style={{ ...sn, fontSize: 14.5, fontWeight: 400, lineHeight: 1.8, color: C.text, marginBottom: 0, letterSpacing: 0.2, textAlign: "center" }}>{s.d}</p>
                  </div>
                </div>
                {i < PROCESS_STEPS.length - 1 ? <div style={{ width: "100%", maxWidth: 640, margin: "42px auto 0", borderTop: `1px solid ${C.faint}` }} /> : null}
              </div>
            </F>
          ))}
        </div>
      </Sec>

      <Sec py={72} bg="#F3EFE8">
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ ...sf, fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.5, color: C.black }}>
            By the time construction begins, the project is no longer being interpreted. It’s being executed.
          </div>
        </div>
      </Sec>

      <section style={{ background: C.deep, padding: "108px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <div style={{ ...sf, fontSize: 22, fontStyle: "italic", fontWeight: 400, color: "rgba(245,241,235,0.85)", maxWidth: 600, margin: "0 auto 28px", lineHeight: 1.6, opacity: 0.85 }}>
            "If a decision is not made on paper, it will be made on site."
          </div>
          <Bt onClick={() => go("contact")} style={{ padding: "16px 34px", fontSize: 12, letterSpacing: 1.6 }}>Book a Project Consultation</Bt>
        </div>
      </section>

      <style>{`@media(max-width:860px){.prb{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}

function OwnerRepPage({ go }) {
  return (
    <>
      <section style={{ background: C.black, padding: "160px 40px 100px" }}>
        <div style={{ maxWidth: 940, margin: "0 auto", textAlign: "center" }}>
          <F>
            <div style={{ marginBottom: 18 }}>
              <Lbl light>Independent Advisory</Lbl>
            </div>
            <Ttl light style={{ marginBottom: 12 }}>Owner Representation</Ttl>
          </F>
          <F delay={0.1}>
            <Bd light max={620} style={{ margin: "0 auto", textAlign: "center", lineHeight: 1.75 }}>
              An experienced technical advocate who understands drawings, construction, and cost, and works exclusively in your interest throughout the project.
            </Bd>
          </F>
        </div>
      </section>

      <Sec py={72} bg={C.warm}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 28 }} className="orbf">
            {[
              "Clear decisions",
              "Aligned expectations",
              "Fewer surprises",
              "Continuity throughout",
            ].map((item, i) => (
              <F key={i} delay={i * 0.05}>
                <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 18, textAlign: "center" }}>
                  <div style={{ ...sn, fontSize: 11, fontWeight: 500, letterSpacing: 2.4, textTransform: "uppercase", color: C.text, lineHeight: 1.7 }}>
                    {item}
                  </div>
                </div>
              </F>
            ))}
          </div>
        </div>
      </Sec>

      <Sec py={96}>
        <F>
          <Ttl size="clamp(26px,3vw,34px)">Why this exists</Ttl>
          <div style={{ maxWidth: 720, margin: "40px auto 48px" }}>
            <HoverImage
              src={ownerRepAuthority}
              alt="Technical drawing review and decision-making during project planning"
              ratio="52%"
              filter="grayscale(6%) brightness(0.95)"
              hoverFilter="grayscale(0) brightness(1)"
              label="Decision Layer"
            />
          </div>
          <Bd max={620} style={{ lineHeight: 1.75, textAlign: "center", margin: "0 auto" }}>
            Custom residential projects often involve capable professionals working from different priorities. As drawings, budgets, and site conditions move from one stage to the next, decisions can lose alignment.
          </Bd>
          <p style={{ ...sn, fontSize: 14.5, lineHeight: 1.75, color: C.text, maxWidth: 620, margin: "12px auto 0", textAlign: "center" }}>
            When that continuity is not maintained early, expectations separate and the homeowner is left interpreting information that should already have been resolved.
          </p>
        </F>
        <F delay={0.08}>
          <Bd max={620} style={{ margin: "6px auto 0", lineHeight: 1.75, textAlign: "center" }}>
            Drawings are read differently. Budgets are built on allowances. Site conditions introduce new variables. Over time, clarity can soften unless someone is tracking how each decision affects the whole project.
          </Bd>
        </F>
      </Sec>

      <Sec py={56} bg={C.warm} wide>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 18 }} className="orstk">
          {[
            { src: ownerRepFoundationForms, alt: "Foundation forms under owner representation oversight" },
            { src: ownerRepFramingWall, alt: "Framing wall review during owner representation" },
            { src: ownerRepTradesInstall, alt: "Trades installation oversight" },
          ].map((img, i) => (
            <F key={i} delay={i * 0.06}>
              <HoverImage src={img.src} alt={img.alt} ratio="82%" filter="grayscale(8%) brightness(0.92)" hoverFilter="grayscale(0) brightness(1)" />
            </F>
          ))}
        </div>
      </Sec>

      <Sec py={96} bg={C.warm}>
        <F>
          <div style={{ marginBottom: 18 }}><Lbl>The gap</Lbl></div>
          <Ttl size="clamp(26px,3vw,34px)" style={{ marginBottom: 10, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
  The homeowner is often the only one expected to connect the pieces
</Ttl>
        </F>
        <F delay={0.08}>
          <Bd max={550} style={{ lineHeight: 1.75, textAlign: "center", margin: "0 auto" }}>
            The designer is responsible for design intent. The builder is responsible for construction. Each operates within their own scope.
          </Bd>
        </F>
        <F delay={0.12}>
          <Bd max={500} style={{ margin: "6px auto 0", lineHeight: 1.75, textAlign: "center" }}>
            What's missing is someone who understands both and ensures that decisions, documentation, and execution remain aligned with the homeowner's best interest at every stage.
          </Bd>
        </F>
      </Sec>

      <Sec py={96}>
        <F>
          <div style={{ marginBottom: 18 }}><Lbl>What makes this different</Lbl></div>
          <Ttl size="clamp(26px,3vw,34px)" style={{ marginBottom: 4 }}>This is not general project management</Ttl>
        </F>
        <F delay={0.08}>
          <Bd max={620} style={{ marginBottom: 14, textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            This role is grounded in technical understanding. Drawings are reviewed the way a builder reads them. Cost implications are identified before they appear in a quote. Coordination issues are resolved before they reach the site.
          </Bd>
        </F>
        <F delay={0.12}>
          <div style={{ paddingTop: 16, borderTop: "1px solid rgba(0,0,0,0.08)", maxWidth: 520, margin: "0 auto" }}>
    <p style={{ ...sn, fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: C.text, letterSpacing: 0.3, opacity: 0.9, textAlign: "center" }}>
      This is technically informed advocacy, not general oversight.
    </p>
  </div>
</F>
</Sec>
<Sec py={56} bg={C.warm} wide>
  <div style={{ maxWidth: 860, margin: "0 auto" }}>
    <HoverImage
      src={ownerRepFoundationForms2}
      alt="Construction coordination and oversight during foundation stage"
      ratio="48%"
      filter="grayscale(10%) brightness(0.9)"
      hoverFilter="grayscale(0) brightness(1)"
      label="On-Site Coordination"
    />
  </div>
</Sec>

      <Sec py={96} bg={C.warm}>
        <F>
          <div style={{ marginBottom: 18 }}><Lbl>When this is valuable</Lbl></div>
        </F>
        <div style={{ width: "100%", maxWidth: 780, margin: "0 auto 28px", borderTop: "1px solid rgba(0,0,0,0.12)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 48, marginTop: 0, maxWidth: 940, margin: "0 auto" }} className="orwg">
          <F>
            <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 20 }}>
              <h4 style={{ ...sn, fontSize: 13.5, fontWeight: 500, color: C.black, marginBottom: 12, letterSpacing: 0.35 }}>Before construction</h4>
              {[
                "Evaluating a property or project feasibility",
                "Reviewing drawings before committing to build",
                "Validating builder quotes and allowances",
                "Clarifying scope, budget, and risk before signing",
              ].map((x, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 6, alignItems: "flex-start" }}>
                  <span style={{ color: C.orange, lineHeight: 1.5, flexShrink: 0, opacity: 0.5, transform: "translateY(1px)" }}>—</span>
                  <span style={{ ...sn, fontSize: 13.5, lineHeight: 1.5, color: C.text }}>{x}</span>
                </div>
              ))}
            </div>
          </F>
          <F delay={0.08}>
            <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 20 }}>
              <h4 style={{ ...sn, fontSize: 13.5, fontWeight: 500, color: C.black, marginBottom: 12, letterSpacing: 0.35 }}>During construction</h4>
              {[
                "Reviewing change orders and cost adjustments",
                "Resolving discrepancies between drawings and the site",
                "Supporting material and scope decisions",
                "Ensuring alignment between design intent & execution",
              ].map((x, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 6, alignItems: "flex-start" }}>
                  <span style={{ color: C.orange, lineHeight: 1.5, flexShrink: 0, opacity: 0.5, transform: "translateY(1px)" }}>—</span>
                  <span style={{ ...sn, fontSize: 13.5, lineHeight: 1.5, color: C.text }}>{x}</span>
                </div>
              ))}
            </div>
          </F>
        </div>
      </Sec>

      <Sec py={96}>
        <F>
          <div style={{ marginBottom: 18 }}><Lbl>What this includes</Lbl></div>
        </F>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "28px 36px" }} className="orwi">
            {[
              {
                t: "Drawing + document review",
                d: "Independent review of architectural, structural, and mechanical drawings to identify coordination issues before they reach construction.",
              },
              {
                t: "Budget + quote validation",
                d: "Analysis of pricing, allowances, and assumptions to identify risk before committing.",
              },
              {
                t: "Team coordination",
                d: "Ensuring all parties are working from the same information and expectations.",
              },
              {
                t: "Decision support",
                d: "Providing clear technical and financial context so decisions are made confidently and at the right time.",
              },
            ].map((x, i) => (
              <F key={i} delay={i * 0.06}>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 18 }}>
                  <h4 style={{ ...sn, fontSize: 14.5, fontWeight: 500, color: C.black, marginBottom: 8 }}>{x.t}</h4>
                  <p style={{ ...sn, fontSize: 13.5, lineHeight: 1.6, color: C.text }}>{x.d}</p>
                </div>
              </F>
            ))}
          </div>
        </div>
      </Sec>

      <section style={{ background: C.deep, padding: "96px 40px", textAlign: "center" }}>
        <div style={{ ...sf, fontSize: "clamp(18px,2.2vw,24px)", fontStyle: "italic", fontWeight: 400, color: "rgba(245,241,235,0.78)", lineHeight: 1.55, maxWidth: 760, margin: "0 auto 20px" }}>
  The value is not more opinions. It’s having one technically informed advocate who keeps the project aligned from decision to execution.
</div>
<Ttl light size="clamp(26px,3vw,36px)" style={{ marginBottom: 10, letterSpacing: -0.2 }}>Need an experienced advocate on your project?</Ttl>
        <p style={{ ...sn, fontSize: 14, color: "rgba(245,241,235,0.4)", maxWidth: 420, margin: "0 auto 16px" }}>
          Available for select projects where clarity, coordination, and cost control are critical.
        </p>
        <Bt onClick={() => go("contact")} style={{ padding: "18px 48px" }}>Book a Project Consultation</Bt>
      </section>

      <style>{`@media(max-width:860px){.orbf,.orstk{grid-template-columns:1fr!important}.orwg{grid-template-columns:1fr!important}.orwi{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}

function AboutPage({ go }) {
  return (
    <>
      <section style={{ background: C.black, padding: "160px 40px 100px" }}>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <F>
            <Lbl light>Our Story</Lbl>
            <Ttl light>Built on Precision. Now Building as a Family.</Ttl>
          </F>
        </div>
      </section>

      <Sec py={72}>
        <div style={{maxWidth:860,margin:"0 auto",textAlign:"center"}}>
          <div style={{...sn,fontSize:12,letterSpacing:3,textTransform:"uppercase",color:C.orange,marginBottom:12}}>
            Design
          </div>

          <div style={{...sf,fontSize:"clamp(22px,2.6vw,30px)",lineHeight:1.5,color:C.black,marginBottom:18,maxWidth:650,marginLeft:"auto",marginRight:"auto"}}>
  Design is not a separate layer. It is the result of decisions made correctly.
</div>

<div style={{...sn,fontSize:15,lineHeight:1.85,color:C.smoke,maxWidth:700,marginLeft:"auto",marginRight:"auto"}}>
            Structure, layout, budget, code, and construction logic are resolved together. When those variables align early, the design becomes clearer, more disciplined, and more buildable.
            <br /><br />
            This is where design moves from preference to precision.
          </div>
        </div>
      </Sec>

      <Sec py={96}>
        <F style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ ...sn, fontSize: 9.5, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: C.orange, marginBottom: 20 }}>Why Accurate Designs Exists</div>
          <div style={{ ...sf, fontSize: "clamp(22px,3vw,30px)", color: C.black, lineHeight: 1.4, marginBottom: 28, maxWidth: 820, textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            Residential projects are shaped by the quality of the decisions made before construction begins.
          </div>
          <Bd max={660} style={{ textAlign: "center", margin: "0 auto" }}>
            Accurate Designs was founded in 2000 to bring structure, layout, budget, code, and construction logic into the design process early. When those variables are aligned on paper, the project moves with more clarity and the design holds its integrity.
          </Bd>
        </F>
      </Sec>

      <Sec py={56} bg="#F3EFE8" wide>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 22, alignItems: "stretch" }} className="abg">
          <F>
          <HoverImage src={portfolioFoundationFormed} alt="Foundation formed on an active project site" ratio="50%" filter="grayscale(12%) brightness(0.9)" hoverFilter="grayscale(0) brightness(1)" label="Site Credibility" />
          </F>
          <F delay={0.08}>
          <HoverImage src={aboutConstructionSite} alt="Accurate Designs team presence on a construction site" ratio="75%" filter="grayscale(8%) brightness(0.93)" hoverFilter="grayscale(0) brightness(1)" label="On-Site Execution" />
          </F>
        </div>
      </Sec>

      <Sec py={96} bg="#F3EFE8">
        <F>
          <div style={{ maxWidth: 860, margin: "0 auto 56px" }}>
            <HoverImage
              src={aboutConstructionFraming}
              alt="Foundation construction and site execution"
              ratio="50%"
              filter="grayscale(10%) brightness(0.9)"
              hoverFilter="grayscale(0) brightness(1)"
              label="Built Reality"
            />
          </div>
        </F>
        <F style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ ...sn, fontSize: 9.5, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: C.orange, marginBottom: 20 }}>How Brett Works</div>
          <Bd max={820} style={{ textAlign: "center", margin: "0 auto" }}>
            Over 500+ residential projects, from modest renovations to $20M+ estates. Brett has developed a consistent approach: coordinate every system on paper, anticipate construction realities during design, and produce documentation thorough enough that the builder’s job is to execute, not interpret.
          </Bd>
        </F>
        <F delay={0.08} style={{ display: "flex", justifyContent: "center" }}>
          <Bd max={680} style={{ textAlign: "center", margin: "0 auto" }}>
            The results are measurable. Permit submissions that typically receive 2 - 3 review comments. Builders who report that these are among the most complete drawings they work from. Projects where the design intent carries through to the finished home.
          </Bd>
        </F>
      </Sec>

      <Sec py={96}>
        <F style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ ...sn, fontSize: 9.5, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: C.orange, marginBottom: 20 }}>Where We're Going</div>
          <Bd max={740} style={{ textAlign: "center", margin: "0 auto" }}>
            Accurate Designs is expanding into a family-operated firm. Brett's wife brings VP-level corporate communications expertise to client experience and business operations. Their two sons are learning the practice, the next generation of a firm built on getting the details right.
          </Bd>
        </F>
        <F delay={0.08} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ ...sn, fontSize: 15, fontWeight: 500, color: C.black, marginTop: 24, textAlign: "center" }}>— Brett Lyver, Founder + Principal</div>
        </F>
      </Sec>

      <section style={{ background: C.black, padding: "64px 40px" }}>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <Stats light />
        </div>
      </section>

      <Sec py={96} bg="#F3EFE8">
        <F>
          <div style={{ textAlign: "center" }}>
            <Lbl>What Clients + Collaborators Say</Lbl>
          </div>
        </F>
        <div style={{ marginTop: 32, maxWidth: 860, marginLeft: "auto", marginRight: "auto" }}>
          {TEST.map((t, i) => (
            <F key={i} delay={i * 0.06}>
              <div style={{ borderTop: `1px solid ${C.faint}`, padding: "44px 0", textAlign: "center" }}>
                <div style={{ ...sn, fontSize: 9, fontWeight: 500, letterSpacing: 2.5, color: C.orange, marginBottom: 12, textTransform: "uppercase", textAlign: "center" }}>{t.label}</div>
                <p style={{ ...sf, fontSize: "clamp(18px,2vw,23px)", fontStyle: "italic", fontWeight: 400, color: C.smoke, lineHeight: 1.6, marginBottom: 14, maxWidth: 880, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>{t.text}</p>
                <div style={{ ...sn, fontSize: 12, fontWeight: 500, color: C.black, textAlign: "center" }}>{t.author}</div>
                <div style={{ ...sn, fontSize: 11, fontWeight: 400, color: C.text, textAlign: "center" }}>{t.location}</div>
              </div>
            </F>
          ))}
        </div>
      </Sec>

      <section style={{ background: C.deep, padding: "108px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <Ttl light size="clamp(26px,3vw,36px)">Ready to discuss your project?</Ttl>
          <div style={{ marginTop: 36 }}>
            <Bt onClick={() => go("contact")}>Book a Project Consultation</Bt>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:860px){.abg{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="contact-hero" style={{ background: C.black, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
          <img src={aboutConstructionSite} alt="Construction site" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
        </div>
        <div style={{ position: "relative", maxWidth: 1040, margin: "0 auto" }}>
          <F>
            <Lbl light>Begin Here</Lbl>
            <Ttl light>Book a Project Consultation</Ttl>
          </F>
          <F delay={0.1}>
            <Bd light max={620} style={{ margin: "0 auto", textAlign: "center", lineHeight: 1.8 }}>
              A focused conversation about your project, your goals, and the right path forward.
              <br />
              <br />
              We typically work on projects starting at $500K+ construction budgets.
              <br />
              <br />
              No cost. No obligation. Just clarity.
              <br />
              <br />
              If we’re not the right fit, we’ll be direct about it.
              <br /><br />
              Most successful projects begin with clarity before construction starts.
            </Bd>
          </F>
        </div>
      </section>

      <Sec py={96} bg="#F3EFE8">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 72 }} className="cg">
          <div>
            {sent ? (
              <F>
                <div style={{ padding: "80px 0" }}>
                  <div style={{ ...sf, fontSize: 28, color: C.black, marginBottom: 12 }}>Thank you.</div>
                  <Bd>We've received your inquiry and will follow up within one business day.</Bd>
                </div>
              </F>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 36px" }} className="nm">
                  <Inp label="First Name *" />
                  <Inp label="Last Name *" />
                </div>
                <Inp label="Email *" type="email" />
                <Inp label="Phone" type="tel" />
                <Sel label="Project Type *" options={["Select...", "Custom Home (New Build)", "Major Addition", "Major Renovation", "Feasibility / Planning", "Owner Representation", "Other"]} />
                <Sel label="Service Needed *" options={["Select...", "Full Design-Build", "Design + Permit Drawings", "Permit Drawings Only", "Owner Representation", "Feasibility Review", "Not Sure Yet"]} />
                <Inp label="Project Location *" />
                <Sel label="Estimated Budget Range *" options={["Select...", "Under $500K", "$500K – $1M", "$1M – $3M", "$3M – $5M", "$5M – $10M", "$10M+", "Not Sure Yet"]} />
                <Sel label="Target Start Timeline *" options={["Select...", "Within 3 months", "3–6 months", "6–12 months", "12+ months", "Already in progress"]} />
                <Sel label="Current Drawing Status" options={["Select...", "Starting from scratch", "Conceptual / sketch stage", "Design development", "Permit-ready or permitted", "Have drawings — need revisions"]} />
                <Sel label="Current Builder Status" options={["Select...", "No builder yet", "Evaluating builders", "Builder selected — not signed", "Builder under contract", "Want Accurate Designs to build", "Not applicable"]} />
                <Sel label="How Did You Hear About Us?" options={["Select...", "Referral", "Builder / Trade", "Google Search", "Instagram", "Facebook", "LinkedIn", "YouTube", "Repeat Client", "Other"]} />
                <Inp label="Project Overview *" textarea />
                <p style={{ ...sn, fontSize: 11, fontWeight: 400, color: C.smoke, marginBottom: 32, letterSpacing: 0.3, lineHeight: 1.7 }}>
                  Every inquiry is reviewed personally. We typically reply within one business day.
                </p>
                <Bt
  onClick={async () => {
    const requiredFields = Array.from(
      document.querySelectorAll("input[required], textarea[required], select[required]")
    );
    const invalidField = requiredFields.find((field) => !field.checkValidity());

    if (invalidField) {
      invalidField.reportValidity();
      invalidField.focus();
      return;
    }

    const formData = new FormData();

    document.querySelectorAll("input, textarea, select").forEach((field) => {
      if (field.name) {
        formData.append(field.name, field.value);
      }
    });

    const response = await fetch("https://formspree.io/f/xdayrzaw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData?.errors?.[0]?.message || "Form failed to send.");
      return;
    }

    setSent(true);

    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: "contact_form",
        value: 1,
      });
    }
  }}
  style={{ width: "100%", marginTop: 20, padding: "18px 0" }}
>
  Send Inquiry
</Bt>
              </>
            )}
          </div>

          <div style={{ paddingTop: 12 }}>
            <div style={{ maxWidth: 720, margin: "0 auto 40px" }}>
              <HoverImage
                src={contactTrust}
                alt="Design intent connected to built outcome"
                ratio="48%"
                filter="grayscale(8%) brightness(0.94)"
                hoverFilter="grayscale(0) brightness(1)"
                label="Design to Reality"
              />
            </div>
            <div style={{ background: C.cream, padding: "40px 36px", marginBottom: 32, border: `1px solid ${C.faint}` }}>
              <h3 style={{ ...sf, fontSize: 20, fontWeight: 400, color: C.black, marginBottom: 20 }}>What Happens Next</h3>
              {[
                "We review your inquiry and assess fit.",
                "We follow up within one business day to schedule a call.",
                "You leave the call with clear next steps and a recommended path forward.",
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 14, alignItems: "flex-start" }}>
                  <div style={{ ...sn, fontSize: 11, fontWeight: 500, color: C.orange, minWidth: 18, paddingTop: 2 }}>{i + 1}.</div>
                  <p style={{ ...sn, fontSize: 15, fontWeight: 400, color: C.text, lineHeight: 1.65 }}>{s}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 32, marginTop: 24, marginBottom: 32, textAlign: "center" }}>
              {[{ l: "Email", v: CONTACT_EMAIL }, { l: "Phone", v: CONTACT_PHONE }, { l: "Office", v: OFFICE_ADDRESS }].map((c, i) => (
                <div key={i} style={{ marginBottom: 32 }}>
                  <div style={{ ...sn, fontSize: 9.5, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase", color: C.text, marginBottom: 5 }}>{c.l}</div>
                  <div style={{ ...sn, fontSize: 14, fontWeight: 400, color: C.black, whiteSpace: "pre-line", lineHeight: 1.6 }}>{c.v}</div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 28 }}>
              <div style={{ ...sn, fontSize: 9.5, fontWeight: 500, letterSpacing: 2.5, textTransform: "uppercase", color: C.text, marginBottom: 10 }}>Service Area</div>
              <p style={{ ...sn, fontSize: 15, fontWeight: 400, lineHeight: 1.75, color: C.text }}>
                Greater Toronto Area including Milton, Oakville, Burlington, Mississauga, and Toronto. Muskoka, Niagara, and extended regions considered case-by-case.
              </p>
            </div>
          </div>
        </div>
      </Sec>

      <section style={{ background: C.warm, padding: "96px 40px", textAlign: "center", borderTop: `1px solid ${C.faint}` }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ ...sf, fontSize: 22, fontStyle: "italic", color: C.smoke, lineHeight: 1.6 }}>
            "If a decision is not made on paper, it will be made on site."
          </p>
        </div>
      </section>

      <style>{`@media(max-width:860px){.cg,.nm{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ background: C.black, padding: "72px 40px 48px", borderTop: "1px solid rgba(201,106,43,0.06)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 48, marginBottom: 56 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <img src="/Logo.png" alt="Accurate Designs" style={{ height: 40, width: "auto", display: "block" }} />
              <span style={{ ...sn, fontSize: 9, fontWeight: 400, letterSpacing: 4, color: "rgba(245,241,235,0.62)", textTransform: "uppercase" }}></span>
            </div>
            <p style={{ ...sn, fontSize: 12, fontWeight: 400, color: "rgba(245,241,235,0.72)", lineHeight: 1.75, maxWidth: 220 }}>
              Construction-aware residential design since 2000.
            </p>
          </div>
          <div>
            <div style={{ ...sn, fontSize: 9, fontWeight: 500, letterSpacing: 3, color: "rgba(201,106,43,0.78)", marginBottom: 20, textTransform: "uppercase" }}>Navigate</div>
            {[{ id: "services", l: "Services" }, { id: "portfolio", l: "Portfolio" }, { id: "process", l: "Process" }, { id: "owner-rep", l: "Owner Representation" }, { id: "about", l: "About" }, { id: "contact", l: "Contact" }].map((p) => (
              <a
                key={p.id}
                href={`/${p.id}`}
                onClick={(e) => { e.preventDefault(); go(p.id); }}
                style={{ ...sn, display: "block", textDecoration: "none", fontSize: 12, fontWeight: 400, color: "rgba(245,241,235,0.7)", marginBottom: 12, cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,241,235,0.95)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,241,235,0.7)")}
              >
                {p.l}
              </a>
            ))}
          </div>
          <div>
            <div style={{ ...sn, fontSize: 9, fontWeight: 500, letterSpacing: 3, color: "rgba(201,106,43,0.78)", marginBottom: 20, textTransform: "uppercase" }}>Services</div>
            {[
              { id: "custom-home-design-build", l: "Custom Home Design + Build" },
              { id: "major-additions-renovations", l: "Major Additions + Renovations" },
              { id: "pre-design-feasibility", l: "Pre-Design Feasibility" },
              { id: "second-storey-addition", l: "Second-Storey Additions" },
              { id: "committee-of-adjustment", l: "Committee of Adjustment" },
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
            ))}
          </div>
          <div>
            <div style={{ ...sn, fontSize: 9, fontWeight: 500, letterSpacing: 3, color: "rgba(201,106,43,0.78)", marginBottom: 20, textTransform: "uppercase" }}>Contact</div>
            <div style={{ ...sn, fontSize: 12, fontWeight: 400, color: "rgba(245,241,235,0.72)", lineHeight: 1.8 }}>
              Accurate Designs Inc.
              <br />
              1215 Queensway E, Unit 56
              <br />
              Mississauga, ON L4Y 0G4
              <br />
              {CONTACT_PHONE}
            </div>
            <div style={{ ...sn, fontSize: 11, fontWeight: 400, color: "rgba(245,241,235,0.55)", marginTop: 18, lineHeight: 1.6, fontStyle: "italic" }}>
              Consultations · Feasibility · Owner Representation
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(245,241,235,0.08)", paddingTop: 36, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
          <span style={{ ...sn, fontSize: 11, fontWeight: 400, color: "rgba(245,241,235,0.58)" }}>© 2026 Accurate Designs Inc.</span>
          <span style={{ ...sf, fontSize: 12, fontWeight: 400, fontStyle: "italic", color: "rgba(245,241,235,0.52)", letterSpacing: 0.5 }}>Resolve complexity before it reaches the site.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState(() => {
    const path = window.location.pathname.replace("/", "");
    return path || "home";
  });

  const go = useCallback((p) => {
    setPage(p);
    const url = p === "home" ? "/" : `/${p}`;
    window.history.pushState({ page: p }, "", url);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const onPop = () => {
      const path = window.location.pathname.replace("/", "");
      setPage(path || "home");
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const pages = {
    home: <HomePage go={go} />,
    services: <ServicesPage go={go} />,
    "custom-home-design-build": <SearchServicePage go={go} kind="custom" />,
    "major-additions-renovations": <SearchServicePage go={go} kind="additions" />,
    "pre-design-feasibility": <SearchServicePage go={go} kind="feasibility" />,
    "second-storey-addition": <PlanningQuestionPage go={go} kind="second-storey" />,
    "committee-of-adjustment": <PlanningQuestionPage go={go} kind="committee" />,
    portfolio: <PortfolioPage go={go} />,
    process: <ProcessPage go={go} />,
    "owner-rep": <OwnerRepPage go={go} />,
    about: <AboutPage go={go} />,
    contact: <ContactPage go={go} />,
  };

  return (
    <div style={{ ...sn, fontWeight: 400, color: C.text, background: C.cream, minHeight: "100vh" }}>
      <Nav page={page} go={go} />
      {pages[page] || pages.home}
      <Footer go={go} />
    </div>
  );
}
