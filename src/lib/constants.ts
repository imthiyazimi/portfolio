export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 10, suffix: "+", label: "Years in Healthcare IT" },
  { value: 150, suffix: "+", label: "Hospitals Served Globally" },
  { value: 7, suffix: "+", label: "Hospital Branches Running" },
  { value: 0, suffix: "", label: "Critical Production Defects" },
  { value: 20, suffix: "+", label: "Modules Tested & Delivered" },
  { value: 300, suffix: "+", label: "Screens Managed" },
  { value: 150, suffix: "+", label: "Reports Generated" },
  { value: 5, suffix: "+", label: "Enterprise Integrations" },
];

export const SERVICES = [
  {
    title: "Quality Analysis",
    tagline: "Finding bugs before they find patients.",
    skills: [
      "Smoke Testing",
      "Functional Testing",
      "Integration Testing",
      "System Testing",
      "UAT",
      "Regression Testing",
      "Exploratory Testing",
      "Defect Management",
      "Test Summary Reports",
      "STCM Reports",
      "Test Case Design",
      "Test Charters",
    ],
    description:
      "I don't just follow test scripts. I think like a user, break things creatively, and document everything so nothing slips through. From test charters to traceability matrices — comprehensive coverage is the standard. Zero critical production defects across 150+ hospitals is the track record.",
  },
  {
    title: "Business Analysis",
    tagline: "Translating hospital chaos into developer language.",
    skills: [
      "Requirements Gathering",
      "Specification Documentation",
      "Prototyping",
      "Figma Wireframing",
      "Draw.io Wireframing",
      "Scrum Process",
      "Stakeholder Management",
      "RTM / Traceability Matrix",
      "Client Liaison",
      "Vendor Coordination",
    ],
    description:
      "I sit in meetings where doctors explain what they need, then I turn that into clear specs developers can build from. No ambiguity. No assumptions. Client approval before a single line of code is written. End-to-end business analysis from requirements to prototypes to sign-off.",
  },
  {
    title: "AI-Driven Automation",
    tagline: "Building tools that eliminate manual bottlenecks.",
    skills: [
      "Python Browser Automation",
      "Human-in-the-Loop Validation",
      "GitHub Copilot",
      "PyCharm",
      "Z.ai",
      "OpenCode AI",
      "Bulk Master Data Creation",
      "Excel Data Ingestion",
      "AI-Assisted Development",
    ],
    description:
      "I built a Python automation tool that reads Excel data and auto-fills hospital master-data forms — eliminating days of manual data entry and the need for dedicated data-entry hires. Human-in-the-loop validation ensures data integrity before records are committed. AI coding assistants accelerate development.",
  },
  {
    title: "Healthcare Domain",
    tagline: "10+ years of speaking both clinical and technical.",
    skills: [
      "Hospital Management Systems",
      "EMR / MRD / MCI",
      "Patient Information Systems",
      "Clinical Workflows",
      "Healthcare Billing",
      "Multi-Tenant Architecture",
      "Compliance & Audit",
      "AI in Healthcare",
      "Spark AI Radiology",
      "Paperless Operations",
    ],
    description:
      "Healthcare isn't just another industry vertical. It has its own language, its own regulations, and zero tolerance for downtime. I know both worlds — from appointment booking to AI-powered radiology reports. Vendor coordination, compliance, and clinical workflow optimization.",
  },
];

export const TIMELINE = [
  {
    period: "Apr 2023 - Present",
    role: "Senior Software Engineer & Quality Analyst Lead",
    company: "Kamineni Hospitals Private Limited",
    location: "Hyderabad",
    duration: "3+ Years",
    highlights: [
      "Leading QA & BA for TrioTree HMS across 7+ Kamineni Hospital locations on shared multi-tenant database",
      "Designed & built Python browser-automation tool (with GitHub Copilot) eliminating manual data-entry bottleneck — removing need for dedicated data-entry staff",
      "Engineered human-in-the-loop safeguard for sensitive master-data: automation fills, human confirms creation",
      "Directing major enhancements: EMR, MRD/MCI, Patient Portal, Dashboards, Mobile App, Kiosk",
      "Implementing Spark AI — AI-based Radiology Reports on Voice & Keywords for paperless operations",
      "Managing enterprise integrations: Tally (Accounting), LIS, PACS, SMS/WhatsApp",
      "Facilitating daily stakeholder & vendor sync meetings via Odoo Ticketing System",
      "Leading KT sessions and mentoring new team members on healthcare domain & QA standards",
    ],
    tools: ["Python", "MySQL", "Tomcat", "IIS", "GCP", "Odoo", "Spark AI", "GitHub Copilot"],
  },
  {
    period: "Jul 2016 - Mar 2023",
    role: "Senior Quality Analyst & Business Analyst",
    company: "Ideas2IT Technologies Private Limited",
    location: "Chennai",
    duration: "6 Years 9 Months",
    highlights: [
      "Led QA for IdeaMed — in-house multi-tenant HMS with 150+ global implementations across 20+ countries",
      "Executed end-to-end business analysis: requirements gathering, specification docs, prototyping, client sign-off",
      "Managed complete deployment lifecycle: pre-release checks, production releases, Linux & cloud infrastructure",
      "Conducted exploratory testing with test charters; authored test summary & STCM reports for full traceability",
      "Designed production infrastructure for multi-currency, multi-timezone, multi-tenant operations",
      "Created RTM reports for production releases; used GoodDay for Agile (Scrum) task & defect tracking",
      "Prepared data analytics reports and supported quarterly P&L analysis for revenue tracking",
    ],
    tools: ["MySQL", "Tomcat", "Jasperserver", "GoodDay", "Figma", "Draw.io"],
  },
];

export const TECH_STACK = {
  "Automation & AI": [
    "Python Browser Automation",
    "GitHub Copilot",
    "PyCharm",
    "Z.ai",
    "OpenCode AI",
    "AI Master Data Creation",
    "Human-in-the-Loop Validation",
  ],
  Databases: ["MySQL", "SQL Queries", "SQL Server Basics"],
  Servers: ["Tomcat Configuration", "IIS Basic Operations", "Windows Server Basic"],
  Cloud: ["Google Cloud Platform", "AWS (Basic)", "VPS Environment", "Linux Commands"],
  Testing: [
    "Manual Testing",
    "Defect Tracking",
    "Test Management & Reporting",
    "Exploratory Testing",
    "Test Charters",
  ],
  "Business Analysis": [
    "Figma Wireframing",
    "Draw.io Wireframing",
    "Prototyping",
    "RTM / Traceability Matrix",
    "Specification Documentation",
  ],
  "Ticketing & BI": ["Odoo", "GoodDay", "PowerBI", "Data Analytics"],
  Healthcare: [
    "HMS Systems",
    "Spark AI Radiology",
    "Tally Integration",
    "LIS & PACS",
    "SMS/WhatsApp",
    "QR Code Generation",
  ],
  "Office & Collab": ["MS Office Suite", "Email & Communication Tools"],
  Interests: ["Blockchain", "Web3", "AI in Healthcare", "Cloud Security"],
};

export const PROJECTS = [
  {
    title: "AI-Assisted Master-Data Automation",
    subtitle: "Python Browser Automation Tool",
    stats: "Eliminated data-entry bottleneck | Human-in-the-loop | Self-developed",
    description:
      "TrioTree (vendor HMS) lacked bulk/Excel upload for master data, forcing manual multi-day data-entry cycles and dedicated temporary hires for new-branch rollouts. Built a Python browser-automation solution with AI coding assistance (GitHub Copilot, PyCharm) that ingests Excel data and auto-fills it into the application. Implemented human-in-the-loop safeguard for sensitive data — automation fills and validates each record, while final 'Create' confirmation remains manual.",
    tech: ["Python", "PyCharm", "GitHub Copilot", "Browser Automation", "Excel"],
    highlights: [
      "Automated bulk master-data creation from Excel into TrioTree HMS forms",
      "Human-in-the-loop: automation fills, human confirms — preventing unreviewed bulk commits",
      "Eliminated need for dedicated data-entry operators for master-data creation",
      "Cut new-branch/master-data setup time from days to hours",
      "Developed with AI coding assistance (GitHub Copilot) to accelerate development",
    ],
  },
  {
    title: "IdeaMed - Hospital Management System",
    subtitle: "Multi-Tenant HMS Product",
    stats: "150+ hospitals | 20+ countries | 20+ modules | 300+ screens",
    description:
      "Industry-leading HMS product for single-specialty, multi-specialty, and medical-college hospitals with 150+ global implementations. Enterprise-grade quality across 20+ modules, 300+ screens, and 150+ reports. Multi-currency, multi-timezone, multi-tenant support on shared database architecture across N branch locations.",
    tech: ["MySQL", "Tomcat", "Jasperserver", "Radaptive"],
    highlights: [
      "300+ screens and 150+ reports with comprehensive test coverage",
      "Multi-currency, multi-timezone, multi-tenant support across 20+ countries",
      "Common database infrastructure across N branch locations",
      "Zero critical production defects across all implementations",
      "Deployed across Ubuntu/Linux and cloud environments",
    ],
  },
  {
    title: "TrioTree HMS + Spark AI",
    subtitle: "Vendor HMS Support & AI Enhancement",
    stats: "7 branches | AI-powered | Paperless Operations",
    description:
      "Vendor-owned HMS deployed across 7+ Kamineni Hospital locations on shared multi-tenant database. Coordinated vendor-delivered enhancements: EMR, MRD/MCI, Patient Portal, Mobile App, Kiosk. Led QA for Spark AI — AI-based radiology report generation via voice and keyword input. Drove integrations for Tally, LIS, PACS, and SMS/WhatsApp for paperless clinical operations.",
    tech: ["MySQL", "Tomcat", "IIS", "GCP", "Spark AI"],
    highlights: [
      "Spark AI: AI-based radiology reports from voice & keywords",
      "Multi-tenant shared database across 7+ hospital branches",
      "Enterprise integrations: Tally, LIS, PACS, SMS/WhatsApp",
      "EMR, Patient Portal, Mobile App, Kiosk development & QA",
      "10+ modules, 100+ screens, 50+ reports for Indian healthcare standards",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirements",
    subtitle: "Gathering",
    description:
      "Hospital stakeholder interviews, pain points identification, clinical workflow analysis, vendor coordination",
  },
  {
    step: "02",
    title: "Analysis",
    subtitle: "Documentation",
    description:
      "Figma wireframes, specification docs, RTM creation, Scrum process management, prototyping",
  },
  {
    step: "03",
    title: "Testing",
    subtitle: "Execution",
    description:
      "Test case design, defect management, UAT coordination, exploratory testing, human-in-the-loop validation",
  },
  {
    step: "04",
    title: "Delivery",
    subtitle: "Deployment",
    description:
      "Production deployment, knowledge transfer, team mentoring, continuous monitoring, automation tooling",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Engineering (B.E.)",
  specialization: "Electronics and Communication Engineering",
  college: "C. Abdul Hakeem College of Engineering and Technology",
};

export const CERTIFICATIONS = [
  {
    name: "Google AI Essentials",
    status: "Completed",
    issuer: "Google",
  },
  {
    name: "Microsoft Career Essentials in Generative AI",
    status: "Completed",
    issuer: "Microsoft",
  },
  {
    name: "UiPath Academy",
    status: "In Progress",
    issuer: "UiPath",
  },
  {
    name: "Power BI",
    status: "In Progress",
    issuer: "Microsoft",
  },
];

export const CONTACT = {
  email: "Imthiyazzilaan@gmail.com",
  phone: "+91-8695067338",
  location: "Hyderabad, India",
  linkedin: "https://linkedin.com/in/mohammed-imthiyaz-a-63266446/",
  github: "https://github.com/imthiyazimi",
};
