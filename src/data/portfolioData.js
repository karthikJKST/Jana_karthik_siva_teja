export const personalInfo = {
  name: "Jana Karthik Siva Teja",
  title: "Software Engineer",
  tagline: "Building production-grade applications with Java & Spring Boot",
  email: "karthikshivatejaj@gmail.com",
  phone: "+91 9392463105",
  location: "India",
  linkedin: "https://linkedin.com/in/karthik-siva-teja-jana-a367a0275",
  github: "https://github.com/karthikJKST",
  summary: "Software Engineer with hands-on experience designing, developing, and deploying production-ready full-stack applications using Java, Spring Boot, React, TypeScript, Python, and PostgreSQL. Proficient in building scalable backend systems, secure REST APIs, Spring Security, JWT authentication, database design, Docker, CI/CD, and cloud deployment. Experienced in delivering end-to-end software solutions across project management, financial technology, and AI-powered career platforms.",
};

export const education = [
  {
    id: 1,
    degree: "B.Tech Computer Science and Engineering",
    institution: "Vellore Institute of Technology (VIT-AP)",
    period: "2022 – 2026",
    score: "CGPA: 7.98 / 10",
    description: "Focusing on AI/ML, software development, and database systems.",
  },
  {
    id: 2,
    degree: "Intermediate MPC",
    institution: "Tirumala Junior College",
    period: "2020 – 2022",
    score: "Score: 890 / 1000",
    description: "Major in Mathematics, Physics, and Chemistry.",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", level: 92 },
      { name: "Spring Security", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "JWT / OAuth", level: 85 },
      { name: "FastAPI", level: 78 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Material UI", level: 75 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "SQLite", level: 70 },
      { name: "Flyway", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", level: 85 },
      { name: "Docker Compose", level: 80 },
      { name: "GitHub Actions", level: 80 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "WeekDays",
    year: "2026",
    description:
      "Production-grade project management SaaS platform with Kanban boards, real-time task tracking, team collaboration, and analytics. Architected using Spring Boot Controller-Service-Repository pattern with stateless JWT security, Flyway migrations, and Docker deployment.",
    technologies: ["Java", "Spring Boot 3", "React 19", "TypeScript", "PostgreSQL", "Docker", "JWT"],
    github: "https://github.com/karthikJKST/Weekdays",
    live: "https://weekdays-jkst.vercel.app",
    color: "#6C63FF",
    status: "Production",
  },
  {
    id: 2,
    title: "StockFlow",
    year: "2026",
    description:
      "Real-time stock market intelligence platform with paper trading, portfolio tracking, and technical analysis. Streams live prices via WebSocket (Finnhub API) with interactive candlestick charts, stock screener, and multi-currency support.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "WebSocket", "PostgreSQL", "Finnhub API"],
    github: "https://github.com/karthikJKST/stockFlow",
    live: "https://stock-flow-jkst.vercel.app",
    color: "#00D4FF",
    status: "Live",
  },
  {
    id: 3,
    title: "HirePilot",
    year: "2026",
    description:
      "AI-powered career platform for resume uploads, ATS-style matching, mock interviews, and PDF interview reports. Integrates Google Gemini 2.5 Flash for resume-based question generation and answer evaluation.",
    technologies: ["Python", "FastAPI", "React", "Gemini API", "JWT", "PostgreSQL"],
    github: "https://github.com/karthikJKST/AI-Career-Assistant",
    live: "https://ai-career-assistant-jkst.vercel.app",
    color: "#FF6B6B",
    status: "Live",
  },
  {
    id: 4,
    title: "Phoenix",
    year: "2026",
    description:
      "AI-powered desktop assistant with LLM-based planning and cross-app automation. Automates browser, file system, and desktop application tasks through natural language commands.",
    technologies: ["Python", "LLM", "Desktop Automation", "Voice"],
    github: "https://github.com/karthikJKST/Phoneix",
    live: null,
    color: "#FFA500",
    status: "Beta",
  },
  {
    id: 5,
    title: "Diabetic Retinopathy Detection",
    year: "2025",
    description:
      "A deep learning system using CNN and ResNet50 architectures to classify retinal images for early detection of diabetic retinopathy, achieving high accuracy on benchmark datasets.",
    technologies: ["Python", "TensorFlow", "CNN", "ResNet50"],
    github: "https://github.com/karthikJKST/Diabetic_retinopathy",
    live: null,
    color: "#00C853",
    status: "Completed",
  },
  {
    id: 6,
    title: "Fleet Fuel Management Prediction",
    year: "2024",
    description:
      "Machine learning project for predictive modeling of fleet fuel consumption. Uses regression and classification techniques on vehicle fleet data to optimize fuel efficiency and reduce operational costs.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebook"],
    github: "https://github.com/karthikJKST/Predictive-Modeling-For-Fleet-Fuel-Management-Using-Machine-Learning",
    live: null,
    color: "#E91E63",
    status: "Completed",
  },
];

export const certifications = [
  {
    id: 1,
    title: "MongoDB Associate Database Administrator",
    issuer: "MongoDB",
    date: "July 2025",
    link: "https://www.mongodb.com",
    description: "Professional certification in database administration, covering deployment, monitoring, backup, and security of MongoDB databases.",
  },
  {
    id: 2,
    title: "Artificial Intelligence using Google TensorFlow",
    issuer: "SmartInternz",
    date: "August 2024",
    link: "https://www.smartinternz.com",
    description: "Hands-on training in AI/ML concepts using TensorFlow, covering neural networks, computer vision, and model deployment.",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
