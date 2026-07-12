export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 10, suffix: "+", label: "Years in Healthcare" },
  { value: 150, suffix: "+", label: "Hospitals Served" },
  { value: 7, suffix: "", label: "Branches Running" },
  { value: 0, suffix: "", label: "Critical Defects" },
  { value: 20, suffix: "+", label: "Modules Tested" },
  { value: 300, suffix: "+", label: "Screens Managed" },
  { value: 15, suffix: "+", label: "Reports Automated" },
  { value: 3, suffix: "+", label: "Integrations Deployed" },
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
    ],
    description:
      "I don't just follow test scripts. I think like a user, break things creatively, and document everything so nothing slips through.",
  },
  {
    title: "Business Analysis",
    tagline: "Translating hospital chaos into developer language.",
    skills: [
      "Requirements Gathering",
      "Specification Documentation",
      "Prototyping",
      "Figma & Draw.io Wireframing",
      "Scrum Process",
      "Client Liaison",
      "RTM Documentation",
    ],
    description:
      "I sit in meetings where doctors explain what they need, then I turn that into clear specs developers can build from. No ambiguity. No assumptions.",
  },
  {
    title: "Healthcare Domain",
    tagline: "10 years of speaking both clinical and technical.",
    skills: [
      "Hospital Management Systems",
      "EMR / MRD",
      "Patient Information",
      "Clinical Workflows",
      "Healthcare Billing",
      "Multi-tenant Architecture",
      "Compliance & Audit",
      "AI in Healthcare",
    ],
    description:
      "Healthcare isn't just another industry vertical. It has its own language, its own regulations, and zero tolerance for downtime. I know both worlds.",
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
      "Leading QA & BA for WHIS serving 7+ Kamineni Hospital locations",
      "Directing major enhancements: EMR, MRD/MCI, Patient Portal, Mobile App",
      "Implementing Spark AI - AI-based Radiology Reports on Voice & Keywords",
      "Managing integrations: Tally, LIS, PACS, SMS/WhatsApp",
      "Facilitating daily scrum meetings between clinical & dev teams",
    ],
    tools: ["MySQL", "Tomcat", "IIS", "GCP", "Odoo"],
  },
  {
    period: "Jul 2016 - Mar 2023",
    role: "Senior Quality Analyst & Business Analyst",
    company: "Ideas2IT Technologies Private Limited",
    location: "Chennai",
    duration: "6 Years 9 Months",
    highlights: [
      "Led QA for IdeaMed - 150+ HMS implementations across 20+ countries",
      "Executed end-to-end business analysis: requirements to prototypes",
      "Designed production infrastructure for multi-currency operations",
      "Created RTM reports ensuring zero critical production defects",
      "Prepared quarterly P&L analysis for business insights",
    ],
    tools: ["MySQL", "Tomcat", "Jasperserver", "GoodDay", "Figma"],
  },
];

export const TECH_STACK = {
  Databases: ["MySQL", "SQL Queries", "SQL Server Basics"],
  Servers: ["Tomcat Configuration", "IIS Operations", "Windows Server", "Linux"],
  Cloud: ["GCP (Basic)", "VPS Environment", "Linux Commands"],
  Testing: ["Manual Testing", "Defect Tracking", "Test Management", "Test Reporting"],
  Design: ["Figma", "Draw.io", "Prototyping"],
  Analytics: ["PowerBI", "Data Analytics", "P&L Analysis"],
  Integrations: ["Tally", "LIS", "PACS", "SMS/WhatsApp", "Spark AI"],
  Tools: ["GoodDay", "Odoo", "MS Office Suite"],
};

export const PROJECTS = [
  {
    title: "IdeaMed",
    subtitle: "Hospital Management System",
    stats: "150+ hospitals | 20+ countries | 20+ modules",
    description:
      "A complete hospital management solution handling everything from appointment booking to billing to clinical documentation. Multi-currency, multi-timezone, multi-tenant — built to serve single-specialty clinics and multi-specialty hospitals alike.",
    tech: ["MySQL", "Tomcat", "Jasperserver", "Radaptive"],
    highlights: [
      "300+ screens and 150+ reports",
      "Multi-currency, multi-timezone support",
      "Common database across N branch locations",
      "Zero critical production defects",
    ],
  },
  {
    title: "WHIS + Spark AI",
    subtitle: "Hospital Information System with AI",
    stats: "7 branches | AI-powered | Paperless",
    description:
      "A modern HMS enhanced with artificial intelligence. Spark AI generates radiology reports from voice and keywords, making clinical documentation paperless and efficient. Integrates with Tally, LIS, PACS, and WhatsApp.",
    tech: ["MySQL", "Tomcat", "IIS", "GCP"],
    highlights: [
      "AI-based radiology reports on voice & keywords",
      "Multi-tenant shared database architecture",
      "EMR, Patient Portal, Mobile App, Kiosk",
      "Tally, LIS, PACS enterprise integrations",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirements",
    subtitle: "Gathering",
    description: "Hospital stakeholder interviews, pain points identification, clinical workflow analysis",
  },
  {
    step: "02",
    title: "Analysis",
    subtitle: "Documentation",
    description: "Figma wireframes, specification docs, RTM creation, Scrum process management",
  },
  {
    step: "03",
    title: "Testing",
    subtitle: "Execution",
    description: "Test case design, defect management, UAT coordination, exploratory testing",
  },
  {
    step: "04",
    title: "Delivery",
    subtitle: "Deployment",
    description: "Production deployment, knowledge transfer, team mentoring, continuous monitoring",
  },
];

export const CONTACT = {
  email: "Imthiyazzilaan@gmail.com",
  phone: "+91-8695067338",
  location: "Hyderabad, India",
  linkedin: "https://linkedin.com/in/mohammed-imthiyaz-a-63266446/",
  github: "https://github.com/imthiyazimi",
};
