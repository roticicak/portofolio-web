import profileImg from "../assets/profile.jpg";
import dashImg from "../assets/dashboard.jpeg";
import cashierImg from "../assets/cashier.jpeg";
import chartImg from "../assets/chart.jpeg";

export const NAV_ITEMS = [
  {
    id: "home",
    index: "01",
    label: "Home",
    tagline: "Overview & Featured Work",
    accent: { primary: "rgba(245, 158, 11, 0.16)", secondary: "rgba(52, 211, 153, 0.12)" },
  },
  {
    id: "about",
    index: "02",
    label: "About",
    tagline: "Background, Focus & Stack",
    accent: { primary: "rgba(56, 189, 248, 0.15)", secondary: "rgba(245, 158, 11, 0.12)" },
  },
  {
    id: "projects",
    index: "03",
    label: "Projects",
    tagline: "Selected Systems & Case Studies",
    accent: { primary: "rgba(251, 191, 36, 0.17)", secondary: "rgba(16, 185, 129, 0.13)" },
  },
  {
    id: "experience",
    index: "04",
    label: "Experience",
    tagline: "Journey & Capabilities",
    accent: { primary: "rgba(52, 211, 153, 0.16)", secondary: "rgba(56, 189, 248, 0.12)" },
  },
  {
    id: "contact",
    index: "05",
    label: "Contact",
    tagline: "Let's Build Something Useful",
    accent: { primary: "rgba(245, 158, 11, 0.18)", secondary: "rgba(244, 114, 182, 0.10)" },
  },
];

export const PROFILE = {
  name: "Steven Samuel",
  shortName: "Steven",
  role: "Web Developer | Data",
  status: "Information Systems Student • Open to Opportunities",
  email: "stevensamuelputrabastian@gmail.com",
  github: "https://github.com/roticicak",
  photo: profileImg,
  aboutParagraphs: [
    "I am an Information Systems student focused on building web applications and data-driven dashboards to solve real-world problems. I have experience developing systems like POS, inventory management, and analytics dashboards, with an emphasis on clean design and usability.",
    "I combine web development, data analysis, and UI/UX to create practical and user-friendly solutions, and I continuously improve my skills to deliver better digital products.",
  ],
  pillars: [
    {
      id: "web",
      title: "Web Applications",
      desc: "Building responsive, practical web-based systems including POS, inventory management, and full-stack CRUD workflows.",
      badge: "React • PHP • Tailwind",
    },
    {
      id: "data",
      title: "Data & Analytics",
      desc: "Transforming raw transaction and sales records into clear visual dashboards, top-product insights, and performance reports.",
      badge: "SQL • MySQL • Excel",
    },
    {
      id: "ux",
      title: "Clean UI/UX",
      desc: "Designing intuitive, low-friction interfaces so cashiers, operators, and business owners can get work done faster.",
      badge: "Usability • Clarity",
    },
  ],
  techGroups: [
    {
      category: "Frontend & UI",
      items: ["React.js", "Tailwind CSS", "React Router DOM"],
    },
    {
      category: "Backend & Systems",
      items: ["PHP", "MySQL", "Authentication & CRUD"],
    },
    {
      category: "Data & Reporting",
      items: ["SQL", "Excel", "Analytics Dashboards"],
    },
  ],
};

export const PROJECTS = [
  {
    id: "angkringan-jo-pos",
    featured: true,
    category: "Web App",
    year: "2026",
    title: "Angkringan Jo POS System",
    subtitle: "Web-Based Cashier & Analytics App",
    fullTitle: "Angkringan Jo POS System (Web-Based Cashier & Analytics App)",
    desc: "A web-based Point of Sale (POS) system designed for small food businesses like angkringan. This application allows cashiers to manage transactions, track sales, and generate business insights such as best-selling products and cashier performance.",
    detail:
      "This system helps manage transactions, track sales, and generate reports with a user-friendly dashboard.",
    tech: ["React.js", "Tailwind CSS", "React Router DOM"],
    demo: "https://pos-angkringan.vercel.app/",
    github: "https://github.com/roticicak/pos-angkringan",
    highlights: [
      "Real-time cashier checkout with automatic subtotal, 10% tax, and change calculation",
      "Owner dashboard displaying total transactions, revenue, and best-selling menu items",
      "Shift-based cashier tracking and transaction history with visual performance charts",
      "Dynamic menu management with category filters (Makanan & Minuman) and live search",
    ],
    screenshots: [
      {
        src: dashImg,
        title: "Owner Dashboard",
        caption: "Sales KPIs, total revenue overview, best-seller chart, and cashier performance breakdown.",
      },
      {
        src: cashierImg,
        title: "Smart POS Cashier",
        caption: "Fast order builder with category tabs, live menu addition, tax calculation, and checkout panel.",
      },
      {
        src: chartImg,
        title: "Laporan Kasir & Riwayat",
        caption: "Per-cashier revenue visualization paired with timestamped transaction history records.",
      },
    ],
  },
  {
    id: "inventory-system",
    featured: false,
    category: "Web App",
    year: "Academic & Personal",
    title: "Inventory System",
    subtitle: "Stock Tracking & Product Management",
    fullTitle: "Inventory System",
    desc: "Stock tracking and product management system",
    detail:
      "Designed to monitor stock levels, manage products, and reduce inventory errors.",
    tech: ["PHP", "MySQL"],
    demo: null,
    github: null,
    highlights: [
      "Structured product catalog with real-time stock level monitoring",
      "Inbound & outbound stock recording to reduce manual inventory discrepancies",
      "Relational MySQL database schema built for reliable CRUD operations",
    ],
    screenshots: [],
    previewType: "inventory",
  },
  {
    id: "sales-dashboard",
    featured: false,
    category: "Data & Analytics",
    year: "Analytics",
    title: "Sales Dashboard",
    subtitle: "Sales Performance Visualization",
    fullTitle: "Sales Dashboard",
    desc: "Data visualization for sales performance analysis",
    detail:
      "Provides insights into sales trends, top products, and monthly performance.",
    tech: ["Excel", "SQL"],
    demo: null,
    github: null,
    highlights: [
      "SQL-powered data aggregation for clean, repeatable sales reporting",
      "Interactive trend views highlighting monthly revenue patterns and growth",
      "Top-performing product breakdown to support data-driven business decisions",
    ],
    screenshots: [],
    previewType: "sales",
  },
];

export const EXPERIENCES = [
  {
    id: "it-support-intern",
    role: "IT Support Intern",
    organization: "PT Astha Dian Manunggal",
    period: "November 2026 – Present",
    category: "Industry Roles",
    current: true,
    accent: "emerald",
    details: [
      "Maintained structured IT infrastructure documentation, server maintenance logs, and system configuration records with strict attention to detail.",
      "Executed systematic troubleshooting, operational workflow support, and incident tracking to ensure high system reliability.",
      "Assisted in internal systems development, relational database maintenance, and organized digital record-keeping processes.",
    ],
    tags: [
      "IT Infrastructure",
      "Server Maintenance",
      "Troubleshooting",
      "Incident Tracking",
      "Relational Database",
      "Internal Systems",
    ],
  },
  {
    id: "game-ua-staff",
    role: "Game User Acquisition Staff",
    organization: "PT Ifun Digital Global",
    period: "June 2026",
    category: "Industry Roles",
    current: false,
    accent: "amber",
    details: [
      "Managed daily data entry, campaign performance tracking, and structured reporting using Microsoft Excel and analytical dashboards.",
      "Monitored, validated, and organized multi-channel datasets to support resource allocation, scheduling, and performance evaluation.",
      "Collaborated closely with cross-functional teams to maintain accurate documentation and meet strict reporting deadlines.",
    ],
    tags: [
      "Microsoft Excel",
      "Analytical Dashboards",
      "Campaign Tracking",
      "Data Validation",
      "Multi-Channel Datasets",
      "Reporting",
    ],
  },
  {
    id: "network-admin-data-analyst",
    role: "Network Administrator & Data Analyst",
    organization: "Infrastructure Projects",
    period: "June 2025",
    category: "Technical Projects",
    current: false,
    accent: "sky",
    details: [
      "Built a comprehensive Sales Dashboard using SQL, enabling data-driven decision-making through complex queries and structured data visualization.",
      "Designed and configured a robust network simulation for a 10-PC environment utilizing Cisco Packet Tracer, implementing multiple VLANs and CLI verification.",
      "Spearheaded the development of the Universitas Terbuka Capstone Project, aligning system architecture with academic and technical requirements.",
    ],
    tags: [
      "SQL",
      "Sales Dashboard",
      "Cisco Packet Tracer",
      "VLANs & CLI",
      "System Architecture",
      "Universitas Terbuka",
    ],
  },
  {
    id: "fullstack-systems-analyst",
    role: "Full-Stack Developer & Systems Analyst",
    organization: "Web Software Development Projects",
    period: "January 2025",
    category: "Technical Projects",
    current: false,
    accent: "amber",
    details: [
      "Developed and deployed an Inventory System and a Warmindo POS (Point of Sale) System, streamlining transaction workflows and stock-tracking efficiency.",
      "Spearheaded various Frontend Web Development and Business Website Development initiatives, focusing on responsive design, modern UI/UX, and cross-browser compatibility.",
      "Successfully implemented Website Development & Deployment pipelines using Vercel, ensuring continuous integration and high-performance hosting.",
      "Engineered third-party integrations, including Google Reviews / Google API, to enhance platform interactivity and leverage user-generated content.",
    ],
    tags: [
      "Inventory & Warmindo POS",
      "Frontend & UI/UX",
      "Vercel Deployment",
      "Google Reviews / API",
      "Responsive Web",
    ],
  },
  {
    id: "freelance-web-dev",
    role: "Freelance Web Developer",
    organization: "Academic & Personal Projects",
    period: "Ongoing",
    category: "Technical Projects",
    current: true,
    accent: "emerald",
    details: [
      "Built web-based systems including POS, inventory, and dashboards for academic and personal use.",
      "Developed multiple full-stack applications with authentication, CRUD operations, and reporting features.",
    ],
    tags: [
      "POS Systems",
      "Inventory Management",
      "Analytics Dashboards",
      "Authentication",
      "CRUD Operations",
      "Reporting",
    ],
  },
];

export const CAPABILITIES = [
  {
    step: "01",
    title: "System Analysis & Data Design",
    desc: "Mapping business workflows and relational database tables so every transaction and stock update stays accurate.",
  },
  {
    step: "02",
    title: "Full-Stack Implementation",
    desc: "Developing end-to-end features including authentication, structured CRUD operations, and responsive interfaces.",
  },
  {
    step: "03",
    title: "Reporting & Visual Insights",
    desc: "Turning operational data into actionable dashboards, top-product rankings, and monthly performance summaries.",
  },
];
