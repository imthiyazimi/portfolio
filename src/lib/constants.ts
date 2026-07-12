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
  { value: 150, suffix: "+", label: "Reports" },
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
      "Test Summary Reports",
      "STCM Reports",
    ],
    description:
      "I don't just follow test scripts. I think like a user, break things creatively, and document everything so nothing slips through. From test charters to traceability matrices — comprehensive coverage is the standard.",
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
      "Stakeholder Management",
      "RTM Documentation",
      "Traceability Matrix",
    ],
    description:
      "I sit in meetings where doctors explain what they need, then I turn that into clear specs developers can build from. No ambiguity. No assumptions. Client approval before a single line of code is written.",
  },
  {
    title: "Healthcare Domain",
    tagline: "10 years of speaking both clinical and technical.",
    skills: [
      "Hospital Management Systems",
      "EMR / MRD / MCI",
      "Patient Information Systems",
      "Clinical Workflows",
      "Healthcare Billing",
      "Multi-tenant Architecture",
      "Compliance & Audit",
      "AI in Healthcare",
      "Hospital Operations",
    ],
    description:
      "Healthcare isn't just another industry vertical. It has its own language, its own regulations, and zero tolerance for downtime. I know both worlds — from appointment booking to radiology reports.",
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
      "Leading QA & BA for WHIS serving 7+ Kamineni Hospital locations with multi-tenant architecture",
      "Directing major enhancements: EMR, MRD/MCI, Patient Portal, Dashboards, Mobile App, Kiosk",
      "Implementing Spark AI — AI-based Radiology Reports on Voice & Keywords for paperless operations",
      "Managing enterprise integrations: Tally, LIS, PACS, SMS/WhatsApp",
      "Facilitating daily client interactions and scrum meetings between clinical & dev teams",
      "Managed incidents, service requests using Odoo Ticketing System",
      "Leading KT sessions and mentoring new team members",
    ],
    tools: ["MySQL", "Tomcat", "IIS", "GCP", "Odoo", "Spark AI"],
  },
  {
    period: "Jul 2016 - Mar 2023",
    role: "Senior Quality Analyst & Business Analyst",
    company: "Ideas2IT Technologies Private Limited",
    location: "Chennai",
    duration: "6 Years 9 Months",
    highlights: [
      "Led QA for IdeaMed — 150+ HMS implementations across 20+ countries",
      "Executed end-to-end business analysis: requirements to prototypes to client approval",
      "Managed complete deployment lifecycle: pre-release, production releases, infrastructure setup",
      "Conducted exploratory testing with test charters; prepared test summary & STCM reports",
      "Designed production infrastructure for multi-currency, multi-timezone operations",
      "Created RTM reports for production releases",
      "Used GoodDay Ticketing System for task tracking, defect management, Agile sprints",
      "Prepared data analytics reports and quarterly P&L analysis",
    ],
    tools: ["MySQL", "Tomcat", "Jasperserver", "GoodDay", "Figma", "Jira", "Confluence"],
  },
];

export const TECH_STACK = {
  Databases: ["MySQL", "SQL Queries", "SQL Server Basics", "Text-to-SQL AI", "SQL AI"],
  Servers: ["Tomcat Configuration", "Service Engine Setup", "IIS Operations", "Windows Server", "Linux"],
  Cloud: ["GCP (Basic)", "VPS Environment", "Linux Commands"],
  Testing: ["Manual Testing", "Defect Tracking", "Test Management", "Test Reporting", "Exploratory Testing", "Jira", "Confluence"],
  Design: ["Figma", "Draw.io", "Prototyping"],
  Analytics: ["PowerBI", "Data Analytics", "P&L Analysis"],
  AI: ["Python Automation", "Browser Automation", "AI Master Data Creation", "Spark AI", "Text-to-SQL", "Augnito Voice-to-Text"],
  Integrations: ["Tally", "LIS", "PACS", "SMS/WhatsApp", "QR Code Generation"],
  Tools: ["GoodDay", "Odoo", "MS Office Suite", "PyCharm", "VS Code"],
  Interests: ["Blockchain", "Web3", "OpenCode AI", "Emerging Tech", "Healthcare IT Innovation"],
};

export const PROJECTS = [
  {
    title: "IdeaMed",
    subtitle: "Hospital Management System",
    stats: "150+ hospitals | 20+ countries | 20+ modules",
    description:
      "A complete hospital management solution handling everything from appointment booking to billing to clinical documentation. Multi-currency, multi-timezone, multi-tenant — built to serve single-specialty clinics, multi-specialty hospitals, and medical colleges alike.",
    tech: ["MySQL", "Tomcat", "Jasperserver", "Radaptive"],
    highlights: [
      "300+ screens and 150+ reports with comprehensive test coverage",
      "Multi-currency, multi-timezone, multi-tenant support",
      "Common database infrastructure across N branch locations",
      "Zero critical production defects",
      "Deployed across Ubuntu/Linux and cloud environments",
    ],
  },
  {
    title: "WHIS + Spark AI",
    subtitle: "Hospital Information System with AI",
    stats: "7 branches | AI-powered | Paperless",
    description:
      "A modern HMS enhanced with artificial intelligence. Spark AI generates radiology reports from voice and keywords, making clinical documentation paperless and efficient. Integrates with Tally, LIS, PACS, and WhatsApp for enterprise-grade operations.",
    tech: ["MySQL", "Tomcat", "IIS", "GCP"],
    highlights: [
      "AI-based radiology reports on voice & keywords (Spark AI)",
      "Multi-tenant shared database architecture across 7 branches",
      "EMR, Patient Portal, Mobile App, Kiosk development",
      "Tally, LIS, PACS, SMS/WhatsApp enterprise integrations",
      "10+ modules, 100+ screens, 50+ reports for Indian healthcare",
    ],
  },
  {
    title: "Python AI Automation",
    subtitle: "Browser Automation for Master Data",
    stats: "AI-powered | Self-developed",
    description:
      "Self-developed Python automation using AI for browser automation to create master data into healthcare applications. Reduces manual data entry and speeds up setup for new hospital deployments.",
    tech: ["Python", "PyCharm", "AI", "Browser Automation"],
    highlights: [
      "Automated master data creation using AI",
      "Browser automation for repetitive tasks",
      "Reduced manual effort in hospital setup",
      "Self-developed and maintained",
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

export const EDUCATION = {
  degree: "Bachelor of Engineering (B.E.)",
  specialization: "Electronics and Communication Engineering",
  college: "C. Abdul Hakeem College of Engineering and Technology",
};

export const CONTACT = {
  email: "Imthiyazzilaan@gmail.com",
  phone: "+91-8695067338",
  location: "Hyderabad, India",
  linkedin: "https://linkedin.com/in/mohammed-imthiyaz-a-63266446/",
  github: "https://github.com/imthiyazimi",
};
