import { PROJECTS } from "./projects.js";

export const SITE_URL = "https://www.accuratedesigns.ca";

export const ROUTES = {
  "/": {
    title: "Accurate Designs | Custom Homes, Additions & Major Renovations",
    description:
      "Accurate Designs provides construction-aware residential design, design-build and owner representation for custom homes, additions and major renovations across the GTA.",
  },
  "/services": {
    title: "Custom Home Design & Build Services | Accurate Designs",
    description:
      "Custom home design-build, major additions and renovations, permit-ready documentation and pre-design feasibility services across the Greater Toronto Area.",
  },
  "/custom-home-design-build": {
    title: "Custom Home Design + Build GTA | Accurate Designs",
    description:
      "Construction-aware custom home design and design-build services across the GTA, with feasibility, coordinated design, permits and build readiness aligned early.",
  },
  "/major-additions-renovations": {
    title: "Major Home Additions & Renovations GTA | Accurate Designs",
    description:
      "Design and planning for major home additions, second-storey additions and structural renovations across the GTA, coordinated for permits and construction.",
  },
  "/pre-design-feasibility": {
    title: "Lot & Pre-Design Feasibility GTA | Accurate Designs",
    description:
      "Pre-design feasibility and lot review for GTA custom homes and major renovations, including zoning, site constraints, approvals and early project alignment.",
  },
  "/second-storey-addition": {
    title: "Second-Storey Addition Design GTA | Accurate Designs",
    description:
      "Planning a second-storey addition in Toronto or the GTA? Accurate Designs coordinates zoning, existing structure, systems and permit requirements before construction.",
  },
  "/committee-of-adjustment": {
    title: "Committee of Adjustment & Minor Variance GTA | Accurate Designs",
    description:
      "Residential design and planning for GTA projects that may require Committee of Adjustment or minor variance approval, with zoning and design issues resolved early.",
  },
  "/portfolio": {
    title: "Custom Home Portfolio | Accurate Designs",
    description:
      "Explore custom homes, additions and major renovations designed with structure, cost, code and construction coordinated from the beginning.",
  },
  "/process": {
    title: "Residential Design-Build Process | Accurate Designs",
    description:
      "See how Accurate Designs resolves feasibility, design, permits and build readiness early to create clearer residential projects with fewer surprises on site.",
  },
  "/owner-rep": {
    title: "Owner Representation for Custom Homes | Accurate Designs",
    description:
      "Independent, technically informed owner representation for custom homes and major residential projects across the GTA, from pre-construction through the build.",
  },
  "/about": {
    title: "About Accurate Designs | Residential Design-Build GTA",
    description:
      "Accurate Designs has provided construction-aware residential design across the GTA since 2000, with more than 500 residential projects completed or designed.",
  },
  "/contact": {
    title: "Book a Project Consultation | Accurate Designs",
    description:
      "Discuss your custom home, addition, major renovation, feasibility review or owner representation needs with Accurate Designs in the Greater Toronto Area.",
  },
  "/privacy": {
    title: "Privacy Policy | Accurate Designs",
    description:
      "Learn how Accurate Designs collects, uses, protects and manages information submitted through its website, project inquiry form and website analytics.",
  },
};


for (const project of PROJECTS) {
  ROUTES[`/case-studies/${project.id}`] = {
    title: `${project.name} | ${project.location} Case Study | Accurate Designs`,
    description: `${project.sqft} sq. ft. ${project.type.toLowerCase()} in ${project.location}. ${project.lens}. Explore the challenge, approach and result.`,
  };
}
