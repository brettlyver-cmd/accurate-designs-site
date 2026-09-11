import React, { useEffect, useState } from "react";

const MEASUREMENT_ID = "G-0TK1QV797P";
const STORAGE_KEY = "accurate-designs-analytics-consent-v1";
const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
const SETTINGS_EVENT = "accurate:privacy-settings";

const C = {
  black: "#080808",
  cream: "#F5F1EB",
  orange: "#C96A2B",
  stone: "#CFC7BC",
};

const font = { fontFamily: "'Montserrat', sans-serif" };

function readChoice() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!saved?.status || !saved?.expiresAt || Date.now() >= saved.expiresAt) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return saved.status === "granted" || saved.status === "denied" ? saved.status : null;
  } catch {
    return null;
  }
}

function saveChoice(status) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status, savedAt: Date.now(), expiresAt: Date.now() + ONE_YEAR_MS })
    );
  } catch {
    // The choice still applies for the current page even if storage is unavailable.
  }
}

function removeGoogleAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name === "_gat");

  const domain = window.location.hostname.replace(/^www\./, "");
  names.forEach((name) => {
    const expirations = [
      `${name}=; Max-Age=0; path=/`,
      `${name}=; Max-Age=0; path=/; domain=${window.location.hostname}`,
      `${name}=; Max-Age=0; path=/; domain=.${domain}`,
    ];
    expirations.forEach((value) => {
      document.cookie = `${value}; SameSite=Lax`;
    });
  });
}

function disableAnalytics() {
  window[`ga-disable-${MEASUREMENT_ID}`] = true;
  removeGoogleAnalyticsCookies();
}

function loadAnalytics() {
  window[`ga-disable-${MEASUREMENT_ID}`] = false;

  if (window.__accurateAnalyticsLoaded) return;
  window.__accurateAnalyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.onload = () => {
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);
  };
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const [choice, setChoice] = useState(() => readChoice());
  const [open, setOpen] = useState(() => readChoice() === null);

  useEffect(() => {
    if (choice === "granted") {
      loadAnalytics();
    } else {
      disableAnalytics();
    }
  }, [choice]);

  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener(SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(SETTINGS_EVENT, reopen);
  }, []);

  const choose = (status) => {
    saveChoice(status);
    setChoice(status);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="privacy-consent-title"
      aria-describedby="privacy-consent-description"
      style={{
        position: "fixed",
        left: 20,
        right: 20,
        bottom: 20,
        zIndex: 10000,
        maxWidth: 980,
        margin: "0 auto",
        background: C.black,
        border: "1px solid rgba(201,106,43,0.35)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.32)",
        padding: "24px 26px",
      }}
    >
      <div className="privacy-consent-layout" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 28, alignItems: "center" }}>
        <div>
          <div id="privacy-consent-title" style={{ ...font, color: C.cream, fontSize: 18, fontWeight: 500, marginBottom: 8 }}>
            We respect your privacy
          </div>
          <p id="privacy-consent-description" style={{ ...font, color: "rgba(245,241,235,0.72)", fontSize: 12.5, fontWeight: 400, lineHeight: 1.7, margin: 0, maxWidth: 620 }}>
            We use Google Analytics to understand how visitors use our website and improve the experience. Analytics is optional and will only run if you accept. You can change your choice later in Privacy Settings. {" "}
            <a href="/privacy" style={{ color: C.stone, textUnderlineOffset: 3 }}>
              Privacy Policy
            </a>
          </p>
        </div>

        <div className="privacy-consent-actions" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, minWidth: 310 }}>
          <button
            type="button"
            onClick={() => choose("denied")}
            style={{
              ...font,
              minHeight: 44,
              padding: "12px 18px",
              background: "transparent",
              border: "1px solid rgba(245,241,235,0.52)",
              color: C.cream,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            style={{
              ...font,
              minHeight: 44,
              padding: "12px 18px",
              background: C.orange,
              border: `1px solid ${C.orange}`,
              color: "#fff",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 1.4,
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Accept Analytics
          </button>
        </div>
      </div>

      {choice ? (
        <div style={{ ...font, color: "rgba(245,241,235,0.45)", fontSize: 10.5, marginTop: 12 }}>
          Current preference: analytics {choice === "granted" ? "accepted" : "declined"}.
        </div>
      ) : null}

      <style>{`
        @media (max-width: 760px) {
          .privacy-consent-layout { grid-template-columns: 1fr !important; gap: 18px !important; }
          .privacy-consent-actions { min-width: 0 !important; width: 100% !important; }
        }
        @media (max-width: 440px) {
          .privacy-consent-actions { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export { SETTINGS_EVENT };
