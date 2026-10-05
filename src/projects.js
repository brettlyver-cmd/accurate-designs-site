import ch1 from "./assets/1. Case Study Image 1.jpg";
import ch2 from "./assets/1. Case Study Image 2.jpg";
import ch3 from "./assets/1. Case Study Image 3.webp";

import eg1 from "./assets/2. Case Study Image 1.webp";
import eg2 from "./assets/2. Case Study Image 2.jpg";

import ph1 from "./assets/3. Case Study Image 1.jpg";
import ph2 from "./assets/3. Case Study Image 2.webp";

import nt1 from "./assets/4. Case Study Image 1.jpg";
import nt2 from "./assets/4. Case Study Image 2.webp";

export const PROJECTS = [
  {
    id: "country-heights-estate",
    name: "Country Heights Estate",
    location: "Richmond Hill",
    sqft: "10,000",
    type: "Custom Home",
    lens: "Regulatory Foresight + Environmental Stewardship",
    img: ch1,
    images: [ch1, ch2, ch3],
    imageLabels: ["Outcome", "Constraint", "Exterior"],
    challenge: "This project required early design decisions to be made before municipal regulations were finalized. Delaying would have stalled progress, but moving ahead without a disciplined strategy risked both the approval path and the integrity of the design.",
    solution: "We studied the surrounding context and historical regulations in detail, allowing the design to proceed with confidence before the final framework was established. When the zoning framework was ultimately confirmed, only minimal revisions were required, preserving both the architectural vision and interior planning. Because the property bordered protected conservation lands, environmental controls were also planned to exacting standards so runoff and sediment would remain fully contained throughout construction.",
    result: "The project maintained its original design intent from concept through approval, avoided major redesign, and saved the client approximately four months. Site control measures were reviewed and approved prior to construction, allowing the home to proceed responsibly and without compromise.",
  },
  {
    id: "expansive-glazing",
    name: "Expansive Glazing",
    location: "Oakville",
    sqft: "4,000",
    type: "Custom Home",
    lens: "Structural Transparency + Indoor-Outdoor Oversight",
    img: eg1,
    images: [eg1, eg2],
    imageLabels: ["Outcome", "Connection"],
    challenge: "The design intent was clear from the outset: uninterrupted glass, open sightlines, and a direct visual connection between the main living spaces and the backyard. Achieving that level of transparency required careful structural coordination, mechanical planning for large-format glazing.",
    solution: "We coordinated the structural design to support expansive spans while minimizing visual obstructions, and engineered the mechanical systems to manage heat gain and loss without compromising the architecture. On the second level, fully custom window assemblies were integrated early to satisfy Ontario Building Code tempered glass requirements and avoid revisions during construction. The existing concrete pool, though in disrepair, was retained and used as an organizing element for the plan.",
    result: "What could have been a constraint became a defining feature of the home. The result is a cohesive indoor-outdoor environment with expansive views, clear supervision of the pool from the Kitchen and Great Room, and a covered patio that supports both family oversight and everyday living.",
  },
  {
    id: "protected-heritage-bungalow",
    name: "Protected Heritage Bungalow",
    location: "Richmond Hill",
    sqft: "2,500",
    type: "Renovation + Second Storey Addition",
    lens: "Heritage Alignment + Existing Condition Intelligence",
    img: ph2,
    images: [ph2, ph1],
    imageLabels: ["Outcome", "Before"],
    challenge: "This project began with a raised bungalow on a lot where zoning restrictions prohibited horizontal expansion, leaving vertical addition as the only viable path forward. Our design also had to satisfy strict heritage district architectural guidelines while still delivering meaningful additional living space.",
    solution: "We carefully controlled proportions, rooflines, and exterior detailing so the second storey would feel consistent with both the original home and the surrounding neighbourhood. Extensive documentation of existing conditions was carried out before construction, including attic inspections to confirm framing configurations and selective openings in finished surfaces to verify structural connections and mechanical routing.",
    result: "The result is a seamless transformation from a constrained bungalow to a fully realized two-storey home, delivering increased living space while satisfying both the homeowner’s objectives and the requirements of the heritage authority.",
  },
  {
    id: "narrow-toronto-lot",
    name: "Narrow Toronto Lot",
    location: "Toronto",
    sqft: "2,800",
    type: "Custom Home + Legal Basement Apartment",
    lens: "Urban Infill Precision + Shoring Strategy",
    img: nt2,
    images: [nt2, nt1],
    imageLabels: ["Outcome", "Shoring Strategy"],
    challenge: "This project was set on a tightly constrained urban infill lot with neighbouring structures in close proximity on both sides. The limited working space required a highly controlled approach from the outset, with virtually no margin for error during excavation and foundation construction.",
    solution: "To safely facilitate the work, full shoring systems were installed along both property lines. Excavation, support, and forming were sequenced with exacting control so the foundation could be constructed while maintaining the stability of the adjacent buildings and protecting worker safety throughout the process.",
    result: "Within severe site constraints, precision became the defining requirement. The resulting home was designed to sit comfortably within its established streetscape while the construction process protected the surrounding properties at every stage.",
  },
];
