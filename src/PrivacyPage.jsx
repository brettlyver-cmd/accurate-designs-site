const C = {
  black: "#080808",
  smoke: "#3A3632",
  cream: "#F5F1EB",
  warm: "#FAF8F4",
  orange: "#C96A2B",
  faint: "#E5DFD7",
  text: "#2F2B27",
  muted: "#5F5953",
};

const font = { fontFamily: "'Montserrat', sans-serif" };
const headingStyle = { ...font, fontSize: 22, fontWeight: 500, color: C.black, marginBottom: 14, lineHeight: 1.3 };
const bodyStyle = { ...font, fontSize: 14.5, fontWeight: 400, color: C.text, lineHeight: 1.85, marginBottom: 16 };
const sectionStyle = { borderTop: `1px solid ${C.faint}`, paddingTop: 34, marginTop: 24 };

export default function PrivacyPage() {
  return (
    <>
      <section style={{ background: C.black, padding: "160px 40px 92px" }}>
        <div style={{ maxWidth: 940, margin: "0 auto", textAlign: "center" }}>
          <div style={{ ...font, fontSize: 10, fontWeight: 500, letterSpacing: 3.5, textTransform: "uppercase", color: C.orange, marginBottom: 24 }}>
            Privacy
          </div>
          <h1 style={{ ...font, fontSize: "clamp(34px,5vw,56px)", fontWeight: 400, color: C.cream, lineHeight: 1.08, margin: 0 }}>
            Privacy Policy
          </h1>
          <p style={{ ...font, fontSize: 14, fontWeight: 400, color: "rgba(245,241,235,0.68)", lineHeight: 1.8, margin: "22px auto 0" }}>
            Effective September 11, 2026
          </p>
        </div>
      </section>

      <section style={{ background: C.warm, padding: "88px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={bodyStyle}>
            Accurate Designs Inc. respects your privacy and is committed to handling personal information responsibly. This policy explains what information we collect through this website, why we collect it, how it may be used or disclosed, and the choices available to you.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 42 }}>
            This policy applies to information collected through accuratedesigns.ca. It does not replace any separate privacy terms that may apply once you enter into a client or professional-services relationship with us.
          </p>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Information We Collect</h2>
            <p style={bodyStyle}>
              When you submit a project inquiry, we may collect information you choose to provide, including your name, email address, telephone number, project location, project type, service needs, estimated budget range, target timeline, drawing and builder status, how you heard about us, and the project description you enter.
            </p>
            <p style={bodyStyle}>
              If you contact us by email, telephone, or another channel, we may also retain the information contained in that communication as reasonably necessary to respond and manage the relationship.
            </p>
            <p style={bodyStyle}>
              If you choose to accept analytics, Google Analytics may collect standard technical and website-usage information such as browser and device information, pages visited, session activity, and approximate geographic information. Analytics does not load when you decline or before you make a choice.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>How We Use Information</h2>
            <p style={bodyStyle}>
              We use personal information to review and respond to inquiries, assess project fit, communicate with prospective and existing clients, schedule consultations, provide requested services, maintain business records, protect the security and integrity of our website, and improve the usefulness and performance of our website and services.
            </p>
            <p style={bodyStyle}>
              We do not sell personal information. We do not use information submitted through the project inquiry form for unrelated marketing purposes without an appropriate basis or consent.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Service Providers and Disclosure</h2>
            <p style={bodyStyle}>
              We use third-party service providers to operate parts of this website and our business. Website inquiry submissions are processed through Formspree. If you consent to analytics, website analytics are provided through Google Analytics. Our website is hosted and deployed using third-party web infrastructure. These providers may process information on our behalf in accordance with their own terms, privacy practices, and contractual obligations.
            </p>
            <p style={bodyStyle}>
              Some service providers may process or store information outside Canada, where it may be subject to the laws of the jurisdiction in which it is processed. We may also disclose information where reasonably necessary to comply with law, protect our legal rights, investigate misuse or security issues, or complete a business transaction involving the company, subject to applicable law.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Analytics and Cookies</h2>
            <p style={bodyStyle}>
              Google Analytics is optional on this website. It does not load or send analytics information to Google unless you select “Accept Analytics” in our privacy notice. If you decline, Google Analytics remains disabled.
            </p>
            <p style={bodyStyle}>
              If you accept, Google Analytics may use first-party cookies or similar technologies to distinguish users and sessions and may collect information such as device and browser details, session statistics, pages viewed, and approximate geographic information. Your analytics choice is stored in your browser for approximately 12 months so we can remember your preference.
            </p>
            <p style={bodyStyle}>
              You can change your choice at any time by selecting “Privacy Settings” in the website footer. If you withdraw consent, we disable further analytics collection and make a reasonable effort to remove Google Analytics cookies associated with this site from your browser.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Retention and Safeguards</h2>
            <p style={bodyStyle}>
              We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, for legitimate business record-keeping, and to meet legal or regulatory requirements. Retention periods may vary depending on the nature of the information and our relationship with you.
            </p>
            <p style={bodyStyle}>
              We use reasonable administrative, technical, and organizational safeguards appropriate to the nature of the information. No method of electronic transmission or storage is completely secure, so absolute security cannot be guaranteed.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Your Choices and Access</h2>
            <p style={bodyStyle}>
              You may contact us to ask about personal information we hold about you, request access to or correction of that information, or raise a concern about our privacy practices. You may also withdraw consent to certain uses of your information, subject to legal, contractual, and reasonable notice requirements. In some circumstances, withdrawing consent may limit our ability to respond to or provide a requested service.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Changes to This Policy</h2>
            <p style={bodyStyle}>
              We may update this policy from time to time to reflect changes to our practices, services, technology, or legal obligations. The effective date shown at the top of this page identifies the current version.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={headingStyle}>Privacy Contact</h2>
            <p style={bodyStyle}>
              Privacy inquiries, access requests, or concerns may be directed to Brett Lyver, Founder + Principal, Accurate Designs Inc.
            </p>
            <p style={{ ...bodyStyle, whiteSpace: "pre-line", marginBottom: 0 }}>
              blyver@accuratedesigns.ca{"\n"}416-768-1290{"\n"}1215 Queensway E, Unit 56{"\n"}Mississauga, ON L4Y 0G4
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
