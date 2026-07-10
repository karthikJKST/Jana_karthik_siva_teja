# Karthik Siva Teja - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Framer Motion. Features smooth animations, glassmorphism design, and a dark theme with gradient accents.

## 🚀 Tech Stack

- **React 19** — Component-based UI library
- **Vite** — Fast build tool and dev server
- **Framer Motion** — Animation library for React
- **React Icons** — Icon library
- **React Intersection Observer** — Scroll-triggered animations

## ✨ Features

- 🌗 Dark theme with purple/cyan gradient accents
- ⚡ Smooth page transitions and scroll animations
- 🎯 Interactive skill bars with animated fills
- 🏆 Project cards with hover effects
- 📚 Education timeline with glassmorphism cards
- 📱 Fully responsive design
- 🔗 Social links sidebar (desktop)
- 🧭 Fixed navbar with active section indicator

## 📂 Project Structure

```
karthik-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed navigation bar
│   │   ├── Hero.jsx          # Hero section with animated background
│   │   ├── About.jsx         # About section with stats
│   │   ├── Education.jsx     # Education timeline
│   │   ├── Skills.jsx        # Skills with animated bars
│   │   ├── Projects.jsx      # Featured projects
│   │   ├── Certifications.jsx # Certifications badges
│   │   ├── Contact.jsx       # Contact information
│   │   └── Footer.jsx        # Footer with social links
│   ├── data/
│   │   └── portfolioData.js  # All portfolio content data
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & design tokens
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm 9+

### Installation

```bash
# Navigate to the project folder
cd karthik-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```

2. **Option A: Via Vercel CLI**
   ```bash
   cd karthik-portfolio
   vercel --prod
   ```
   Follow the prompts to log in and deploy.

3. **Option B: Via Vercel Dashboard (Deploy from GitHub)**
   - Push the project to a GitHub repository
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click **"Add New Project"** → **"Import Git Repository"**
   - Select your repository
   - Vercel auto-detects Vite — no configuration needed
   - Click **"Deploy"**

### Deploy to Netlify

1. Push the project to a GitHub repository
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repository
5. Build settings (auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

### Deploy to GitHub Pages

1. Update `vite.config.js` to add the `base` property:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

2. Install the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json`:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

> **Note:** For custom domains, configure the domain in your DNS settings and update the `base` path accordingly.

## 🎨 Customization

To update the portfolio content, edit the `src/data/portfolioData.js` file:

- Update `personalInfo` with your own details
- Modify `skills`, `projects`, `education`, and `certifications` arrays
- The site will automatically reflect all changes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
