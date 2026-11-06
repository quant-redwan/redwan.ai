# Redwanur Rahaman — Portfolio

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Font — Sans | Geist |
| Font — Serif | DM Serif Display |
| Font — Mono | JetBrains Mono |
| Deployment | Vercel |
| Analytics | Vercel Analytics |


## Features

- Dual theme — Obsidian (dark) & Ivory (light) with system preference support
- Glassmorphic card design with violet accent
- Interactive particle field with mouse interaction
- Animated preloader with smooth progress counter
- Fully responsive — mobile, tablet, desktop
- Smooth scroll animations via Framer Motion
- Sections: Hero · About · Experience · Education · Projects · Skills · Services · Contact

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/quant-redwan/redwan.ai.git
cd redwan

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
redwan/
├── app/
│   ├── globals.css        # CSS variables, theme tokens, utility classes
│   ├── layout.tsx         # Root layout, font loading, ThemeProvider
│   └── page.tsx           # Page composition
├── components/
│   ├── navigation.tsx     # Sticky frosted glass nav with theme toggle
│   ├── hero-section.tsx   # Full-screen hero with particle field
│   ├── about-section.tsx  # Bio, stats, experience timeline
│   ├── projects-section.tsx
│   ├── skills-section.tsx # Tag-based skill grid
│   ├── services-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── preloader.tsx      # Animated loading screen
│   ├── particle-field.tsx # Canvas-based interactive background
│   └── theme-provider.tsx
├── public/                # Static assets and project images
└── package.json
```

---

## Customization

All theme colors are defined as CSS variables in `app/globals.css` under `:root` (light) and `.dark`. To change the accent color, update:

```css
--accent: oklch(0.56 0.24 280);      /* light mode */
/* and in .dark: */
--accent: oklch(0.62 0.24 280);      /* dark mode */
```

---

## Deployment

The project auto-deploys to Vercel on every push to `main`. No manual steps required after the initial Vercel project setup.

---

## License

MIT — see [LICENSE] (./LICENSE)

---

## Contact

**Redwanur Rahaman**
- Email: [redwanur.r.rahaman@gmail.com](mailto:redwanur.r.rahaman@gmail.com)
- GitHub: [@quant-redwan](https://github.com/quant-redwan)
- LinkedIn: [redwanurrahaman](https://www.linkedin.com/in/redwanurrahaman/)
- Twitter / X: [@redwanurrahaman](https://x.com/redwanurrahaman)
