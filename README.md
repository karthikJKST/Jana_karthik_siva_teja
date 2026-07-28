<div align="center">
  <br />
  <h1 align="center">👨‍💻 Karthik Siva Teja</h1>
  <p align="center">
    <strong>Software Engineer · Full Stack Developer</strong>
    <br />
    Java · Spring Boot · React · FastAPI · Python · TypeScript
  </p>

  <p>
    <a href="https://github.com/karthikJKST">
      <img src="https://img.shields.io/badge/GitHub-karthikJKST-181717?style=flat-square&logo=github" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/karthik-siva-teja-jana-a367a0275/">
      <img src="https://img.shields.io/badge/LinkedIn-Karthik%20Siva%20Teja-0A66C2?style=flat-square&logo=linkedin" alt="LinkedIn" />
    </a>
    <a href="https://portfolio.karthikshivatejaj.workers.dev/">
      <img src="https://img.shields.io/badge/Live-Portfolio-6C63FF?style=flat-square&logo=cloudflare" alt="Live Portfolio" />
    </a>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite" alt="Vite 8" />
    <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT License" />
  </p>
</div>

---

## 📖 About

A modern, responsive portfolio website built with **React 19**, **Vite 8**, and **Framer Motion**. Features smooth scroll-triggered animations, glassmorphism design, and a dark theme with purple/cyan gradient accents.

**Live site:** [portfolio.karthikshivatejaj.workers.dev](https://portfolio.karthikshivatejaj.workers.dev/)

This site showcases my skills, production-grade projects, certifications, education, and professional experience as a Software Engineer. Includes a downloadable resume and live demo links for featured projects.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌗 **Dark Theme** | Purple/cyan gradient accents with glassmorphism design and backdrop blur |
| ⚡ **Animations** | Smooth scroll-triggered and staggered animations with Framer Motion |
| 🎯 **Animated Skills** | Skill bars with percentage fills and progress animations |
| 🏆 **Project Showcase** | Glassmorphism project cards with status badges, tech tags, and live demo links |
| 📚 **Education Timeline** | Vertical timeline layout with glassmorphism cards and animated dots |
| 🧭 **Fixed Navigation** | Sticky navbar with active section indicator and smooth scroll |
| 📱 **Fully Responsive** | Seamless experience across desktop, tablet, and mobile |
| 🔗 **Social Links** | Floating sidebar with GitHub, LinkedIn, and email |
| 📄 **Resume Download** | One-click PDF resume download from Hero and Contact sections |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (User)                           │
│  ┌───────────────────────────────────────────────────────┐   │
│  │              React SPA (Vite 8)                       │   │
│  │  ┌────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐  │   │
│  │  │ Navbar │  │   Hero   │  │  About   │  │ Skills │  │   │
│  │  └────────┘  └──────────┘  └──────────┘  └────────┘  │   │
│  │  ┌────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐  │   │
│  │  │Projects│  │Education │  │  Certs   │  │Contact │  │   │
│  │  └────────┘  └──────────┘  └──────────┘  └────────┘  │   │
│  │                Framer Motion Animations                │   │
│  └───────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 with Vite 8 |
| **Animation** | Framer Motion — scroll-triggered, staggered, spring physics |
| **Styling** | CSS with CSS variables, glassmorphism, purple/cyan theme |
| **Icons** | React Icons (Feather Icons) |
| **Data** | Static JS module via `src/data/portfolioData.js` |
| **Hosting** | Cloudflare Workers — auto-deployed from GitHub |
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework with hooks and functional components |
| **Vite 8** | Build tool and development server |
| **Framer Motion** | Declarative animations, scroll-triggered reveals, spring physics |
| **React Icons** | Feather icon set for UI elements |
| **CSS3** | Custom properties, glassmorphism, gradients, responsive design |
| **Cloudflare Workers** | Production hosting with continuous deployment |

---

## 📁 Project Structure

```
karthik-portfolio/
├── public/                  # Static assets (resume PDF, favicon)
│   └── jana_karthik_siva_teja_Resume.pdf
├── src/
│   ├── components/          # React components (Navbar, Hero, About, Skills, Projects, etc.)
│   ├── data/
│   │   └── portfolioData.js # All portfolio content (personal info, skills, projects, certs)
│   ├── App.jsx              # Root component with section layout
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles, CSS variables, utility classes
├── index.html               # HTML entry with SEO meta tags
├── vite.config.js           # Vite configuration
├── wrangler.toml            # Cloudflare Workers configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## 🚦 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** 9+

### Local Development

```bash
cd karthik-portfolio
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output is written to `dist/`.

---

## 🌐 Deployment

### Cloudflare Workers (Current)

This project is deployed on **Cloudflare Workers** with automatic deployments from the `main` branch on GitHub.

1. Push to GitHub
2. Cloudflare Pages auto-detects the build configuration
3. Deployed at `portfolio.karthikshivatejaj.workers.dev`

### Vercel (Alternative)

1. Push to GitHub
2. Import to [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no config needed

---

## 🎨 Customization

All portfolio content lives in a single file:

**`src/data/portfolioData.js`** — Update personal info, title, summary, skills, projects, certifications, and navigation links.

To update the resume PDF, replace the file at `public/jana_karthik_siva_teja_Resume.pdf`.

---

## 📄 License

MIT License — see [LICENSE](../LICENSE) for details.

---

## 👤 Author

**Karthik Siva Teja** (Jana Karthik Siva Teja)

- **Portfolio:** [portfolio.karthikshivatejaj.workers.dev](https://portfolio.karthikshivatejaj.workers.dev/)
- **GitHub:** [@karthikJKST](https://github.com/karthikJKST)
- **LinkedIn:** [Karthik Siva Teja](https://www.linkedin.com/in/karthik-siva-teja-jana-a367a0275/)
- **Email:** [karthikshivatejaj@gmail.com](mailto:karthikshivatejaj@gmail.com)

---

<div align="center">
  <sub>Built with React 19, Vite 8, and Framer Motion · Hosted on Cloudflare Workers</sub>
</div>
