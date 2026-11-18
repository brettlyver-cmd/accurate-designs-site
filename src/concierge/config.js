/**
 * Reusable customer-specific concierge settings.
 * Copy this configuration (and update the approved server knowledge) for future clients.
 * No visitor personal information belongs in this file.
 */
export const CONCIERGE = {
  businessName: "Accurate Designs",
  assistantName: "Accurate Designs AI Guide",
  greeting: "Planning a custom home, major addition, or renovation? Ask a question about our services or the project process. I can also help you prepare a consultation inquiry.",
  contactPath: "/contact",
  privacyPath: "/privacy",
  contactEmail: "blyver@accuratedesigns.ca",
  contactPhone: "416-768-1290",
  formspreeEndpoint: "https://formspree.io/f/xljezpyq",
  suggestedQuestions: [
    "How does the design and permit process work?",
    "Do you handle second-storey additions?",
    "Where does Accurate Designs work?",
  ],
  projectTypes: ["Custom home", "Major addition", "Major renovation", "Permit / approvals", "Owner representation", "Other"],
  budgetRanges: ["Undecided", "Under $500K", "$500K–$1M", "$1M–$2M", "Over $2M"],
  approvedFacts: [
    "Accurate Designs Inc. has practiced residential design since 2000, focusing on custom homes, major additions and structural renovations.",
    "Services include custom home design and build, major additions and renovations, permit documentation, pre-design feasibility and owner representation.",
    "The core service area includes Toronto, Mississauga, Oakville, Milton and Burlington; Muskoka, Niagara and extended regions are considered case by case.",
    "The public consultation page says projects typically begin at construction budgets of $500K and above.",
    "The consultation is no cost and no obligation. A human reviews each inquiry and typically replies within one business day.",
    "Feasibility depends on the specific property, zoning, site conditions, applicable codes and project scope. A professional review is required before giving definitive answers.",
    "The process covers discovery and feasibility, design development, permits and approvals, and build readiness.",
    "A consultation inquiry can be sent using the contact form at /contact.",
  ],
};
