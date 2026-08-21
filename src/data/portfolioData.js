export const personalData = {
  name: "MO-CODES",
  title: "Full-Stack Web Developer & Designer",
  greeting: "Hi, I'm MO-CODES 👋",
  bio: "I craft high-performance web applications and visually captivating user experiences. Combining modern frontend frameworks, scalable cloud backends, and sleek glassmorphic UI design, I turn complex ideas into refined digital products.",
  location: "Hargeisa, Somaliland / Remote",
  availability: "Available for Freelance & Full-Time Roles",
  email: "contact mo.codes@gmail.com",
  github: "https://github.com/mo-codes",
  linkedin: "https://linkedin.com/in/mo-codes",
  twitter: "https://twitter.com/mo_codes",
  dribbble: "https://dribbble.com/mo-codes",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "45+" },
    { label: "Satisfied Clients", value: "99%" },
    { label: "Courses Created", value: "12+" }
  ]
};

export const skillCategories = ["All", "Frontend", "Backend", "UI/UX & Design", "Tools & DevOps"];

export const skillsData = [
  { name: "React.js / Next.js", category: "Frontend", level: 95, icon: "Code2", description: "SSR, SSG, Server Components, State Management" },
  { name: "TypeScript", category: "Frontend", level: 90, icon: "FileCode", description: "Strict Typing, Generic Interfaces, Async Flows" },
  { name: "Tailwind CSS & Glassmorphism", category: "Frontend", level: 98, icon: "Palette", description: "Custom Design Systems, Responsive Layouts, Micro-interactions" },
  { name: "Node.js & Express", category: "Backend", level: 88, icon: "Server", description: "RESTful APIs, Microservices, Middleware & Auth" },
  { name: "PostgreSQL & Prisma", category: "Backend", level: 85, icon: "Database", description: "Relational Modeling, Migrations, Query Optimization" },
  { name: "GraphQL & REST APIs", category: "Backend", level: 86, icon: "Cpu", description: "Schema Design, Apollo Client/Server, Dynamic Endpoints" },
  { name: "Figma & UI/UX Design", category: "UI/UX & Design", level: 92, icon: "Figma", description: "Prototyping, Wireframing, Component Libraries" },
  { name: "Graphic & Brand Design", category: "UI/UX & Design", level: 90, icon: "Sparkles", description: "Vector Artboards, Typography, Visual Guidelines" },
  { name: "Docker & CI/CD", category: "Tools & DevOps", level: 80, icon: "Box", description: "Containerization, Automated Deployments, GitHub Actions" },
  { name: "Git & GitHub Workflow", category: "Tools & DevOps", level: 94, icon: "GitBranch", description: "Branching Strategies, PR Code Reviews, Rebase/Merge" },
  { name: "Vite & Modern Bundlers", category: "Tools & DevOps", level: 92, icon: "Zap", description: "HMR, Tree Shaking, Build Optimization" },
  { name: "Firebase & Supabase", category: "Backend", level: 88, icon: "Cloud", description: "Realtime Databases, Auth, Serverless Functions" }
];

export const projectCategories = ["All", "Full-Stack", "Web Apps", "UI/UX Design", "Mobile"];

export const projectsData = [
  {
    id: "election-dashboard",
    title: "Somali Live Election Dashboard",
    category: "Full-Stack",
    summary: "Real-time election tracking & vote visualization platform for Somali polling stations with live broadcast styling.",
    description: "A state-of-the-art interactive election dashboard providing live vote aggregation across 6 federal member states. Features real-time state breakdown charts, candidate analytics, live polling station status, and dark glassmorphic UI.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "Tailwind CSS", "Chart.js", "WebSocket"],
    demoUrl: "https://demo-election.mocodes.dev",
    githubUrl: "https://github.com/mo-codes/somali-election-dashboard",
    features: [
      "Real-time vote count polling via WebSockets",
      "Interactive state-by-state heat map & charts",
      "Candidate comparison matrix with live percentages",
      "Broadcast-ready dark glassmorphism layout"
    ],
    architecture: "React SPA with Tailwind glass utilities, backend WebSockets for zero-latency vote updates, and responsive mobile-first views."
  },
  {
    id: "mcp-stitch-ui",
    title: "Google Stitch MCP Design Suite",
    category: "UI/UX Design",
    summary: "Pixel-perfect glassmorphism design system & component spec for Google Stitch Model Context Protocol integration.",
    description: "An elegant UI specification and design system tailored for developer tooling and MCP workflows. Includes custom artboards, translucent panels, glowing state indicators, and smooth micro-interactions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    tags: ["Figma", "Design System", "Glassmorphism", "CSS Variables"],
    demoUrl: "https://stitch-design.mocodes.dev",
    githubUrl: "https://github.com/mo-codes/stitch-mcp-ui",
    features: [
      "Custom vector logo artboards (Horizontal, Vertical, Dark/Light)",
      "Strict color token system (#6366F1, #111827, #818CF8)",
      "Reusable glass panel specs with subtle 1px border glows",
      "Comprehensive typography hierarchy & interactive tokens"
    ],
    architecture: "Design tokens generated as CSS custom properties and React glass wrapper components."
  },
  {
    id: "crypto-vault-saas",
    title: "Apex Crypto Analytics SaaS",
    category: "Web Apps",
    summary: "Next-generation cryptocurrency portfolio tracker with automated risk analysis and live market alerts.",
    description: "A high-performance SaaS web app enabling crypto investors to connect wallets, monitor multi-chain balances, analyze market trends, and receive instant alert notifications.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Web3.js"],
    demoUrl: "https://apex-crypto.mocodes.dev",
    githubUrl: "https://github.com/mo-codes/apex-crypto-saas",
    features: [
      "Multi-chain wallet connection (Ethereum, Solana, Polygon)",
      "Interactive PnL timeline and asset distribution breakdown",
      "Custom price alert triggers via WebPush & Telegram Bot",
      "Ultra-fast serverless data fetching with 10s revalidation"
    ],
    architecture: "Next.js App Router, Tailwind CSS, CoinGecko API integration, Supabase Auth & Realtime."
  },
  {
    id: "edu-stream-lms",
    title: "Masterclass Video LMS Platform",
    category: "Full-Stack",
    summary: "Full-featured online learning management system with course video streaming, quizzes, and digital certification.",
    description: "A custom LMS solution engineered for technical educators. Offers high-bitrate video playback, downloadable code resources, student progress tracking, interactive quizzes, and automated PDF certificate generation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Express", "PostgreSQL", "Prisma", "Stripe"],
    demoUrl: "https://lms-courses.mocodes.dev",
    githubUrl: "https://github.com/mo-codes/edu-stream-lms",
    features: [
      "HLS video streaming with adaptive bitrate switching",
      "Stripe payment integration for course purchase & subscriptions",
      "Interactive code playground & quiz engine",
      "Automated PDF completion certificate generation"
    ],
    architecture: "React frontend, Node/Express API server, AWS S3/CloudFront for media distribution, PostgreSQL database."
  },
  {
    id: "dev-hub-mobile",
    title: "DevSpace Mobile App UI",
    category: "Mobile",
    summary: "Cross-platform mobile application for developers to discover tech news, bookmark snippets, and network.",
    description: "Sleek mobile app interface built for developer communities. Incorporates dark mode glassmorphic UI, offline snippet storage, push notifications, and tech news feeds.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
    tags: ["React Native", "Expo", "Redux Toolkit", "Figma"],
    demoUrl: "https://devspace-mobile.mocodes.dev",
    githubUrl: "https://github.com/mo-codes/devspace-mobile-ui",
    features: [
      "Fluid 60fps animations with React Native Reanimated",
      "Offline code snippet saver with syntax highlighting",
      "Personalized daily tech feed aggregator",
      "Biometric lock & secure token storage"
    ],
    architecture: "React Native with Expo SDK, Tailwind NativeWind styling, and Firebase backend."
  },
  {
    id: "ai-prompt-studio",
    title: "Synthetix AI Prompt Studio",
    category: "Web Apps",
    summary: "AI workspace for engineering, testing, and chaining LLM prompt workflows with version control.",
    description: "An intuitive web application designed for prompt engineers to construct complex multi-step AI chains, run automated benchmarking, and export clean API code snippets.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "OpenAI API", "Tailwind CSS", "Zustand"],
    demoUrl: "https://ai-studio.mocodes.dev",
    githubUrl: "https://github.com/mo-codes/ai-prompt-studio",
    features: [
      "Visual node-based prompt chain editor",
      "Side-by-side model output comparison (GPT-4 vs Claude 3)",
      "One-click code exporter (Python, JavaScript, cURL)",
      "Prompt version history & token cost estimator"
    ],
    architecture: "Client-side React SPA leveraging Web Workers for payload validation and streaming response parsing."
  }
];

export const servicesData = [
  {
    id: "custom-web-dev",
    type: "service",
    title: "Custom Full-Stack Web Development",
    subtitle: "End-to-end Web Applications & SaaS Solutions",
    price: "$2,499",
    billing: "Starting flat rate / $65 hr",
    popular: true,
    badge: "Most Requested",
    description: "Complete full-stack development tailored to your product needs. High performance, security, and responsive glassmorphism UI.",
    inclusions: [
      "Custom React / Next.js SPA or SSR Architecture",
      "Responsive Glassmorphism UI/UX Design System",
      "Backend REST or GraphQL API Development",
      "Database Schema Design & Migration (PostgreSQL / Supabase)",
      "Payment Gateway Integration (Stripe / PayPal)",
      "SEO Optimization & Fast Core Web Vitals",
      "Source Code Ownership & 30-Day Post-Launch Support"
    ]
  },
  {
    id: "ui-ux-design-system",
    type: "service",
    title: "UI/UX & Brand Design Package",
    subtitle: "Pixel-Perfect Visual Identities & Prototypes",
    price: "$1,299",
    billing: "Per Project",
    popular: false,
    description: "Transform your visual brand with sleek dark glassmorphism designs, logo vector sets, and developer-ready Figma components.",
    inclusions: [
      "Full Figma Design System & Component Library",
      "Logo Vector Package (Horizontal, Vertical, Light/Dark, Favicon)",
      "Interactive High-Fidelity Prototypes",
      "Tailwind CSS Configuration & Style Tokens Export",
      "Custom Icons, Color Palettes & Glass Effect Rules",
      "Unlimited Revisions during initial phase"
    ]
  },
  {
    id: "consulting-code-review",
    type: "service",
    title: "Architecture & Code Audit",
    subtitle: "Performance & Security Optimization",
    price: "$499",
    billing: "Flat Fee / Session",
    popular: false,
    description: "Deep-dive code review of your existing React/Node codebase to resolve bottleneck issues, refactor layout bugs, and improve scalability.",
    inclusions: [
      "Comprehensive Codebase Audit & Security Check",
      "Performance Optimization (Lighthouse score 90+ guarantee)",
      "Refactoring Roadmap & Architecture Recommendations",
      "1-on-1 Strategy Video Session (90 Mins)",
      "Detailed Written Audit Report & Action Plan"
    ]
  }
];

export const coursesData = [
  {
    id: "master-glassmorphism",
    type: "course",
    title: "Mastering Modern Glassmorphism & UI/UX",
    subtitle: "Build High-End Dark Mode Web Interfaces",
    price: "$149",
    billing: "Lifetime Access",
    popular: true,
    badge: "Bestseller",
    description: "Learn how to build jaw-dropping dark mode glassmorphism web applications using CSS blur filters, glowing gradients, and Tailwind utilities.",
    inclusions: [
      "18+ Hours of HD Video Content",
      "Full Source Code & Figma Artboards Included",
      "Build 4 Real-World Glassmorphism Projects",
      "CSS Backdrop-Filter & Glow Effect Masterclass",
      "Access to Private Discord Mastermind",
      "Certificate of Completion"
    ]
  },
  {
    id: "fullstack-react-node",
    type: "course",
    title: "Full-Stack Web Dev Bootcamp",
    subtitle: "From Zero to Production React & Node.js Engineer",
    price: "$199",
    billing: "Lifetime Access",
    popular: false,
    description: "Comprehensive step-by-step masterclass covering React, Node.js, PostgreSQL, Docker, deployment pipelines, and SaaS architecture.",
    inclusions: [
      "35+ Hours of Comprehensive Video Lessons",
      "Build a SaaS & Real-Time Analytics App from scratch",
      "Database Modeling, Auth, Security & Stripe Payments",
      "Deployment to Vercel, AWS & Railway",
      "Direct Q&A Code Support from MO-CODES",
      "Certificate of Mastery"
    ]
  }
];

export const initialTestimonials = [
  {
    id: 1,
    name: "Deeqa Moumin",
    role: "CTO & Co-Founder",
    company: "Nexus Labs",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "MO-CODES turned our complex SaaS platform into a visually stunning, ultra-fast application. His glassmorphism UI design received overwhelming praise from our investors and early users!",
    verified: true,
    date: "August 2026"
  },
  {
    id: 2,
    name: "Zamzam Ahmed",
    role: "Product Manager",
    company: "Vanguard Tech",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "Working with MO-CODES was a seamless experience. He delivered our live analytics dashboard 3 days ahead of schedule, with clean maintainable code and exceptional attention to detail.",
    verified: true,
    date: "July 2026"
  },
  {
    id: 3,
    name: "Hassan Mohamed",
    role: "Founder",
    company: "Somali Digital Hub",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "MO-CODES' Full-Stack Web Bootcamp is by far the best investment I've made. The real-world projects and glassmorphism styling modules elevated my team's skills dramatically.",
    verified: true,
    date: "June 2026"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Lead Frontend Architect",
    company: "Aetheria Interactive",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "The Google Stitch MCP component design system MO-CODES created for us set a new benchmark for developer tools. His UI aesthetic is truly world-class.",
    verified: true,
    date: "May 2026"
  }
];
