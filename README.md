Vedant Solanki - Portfolio

A modern, dark-mode-first portfolio website built with Next.js 14

✨ Features

- Dark Mode First - Premium zinc-950 aesthetic with subtle viewport glow
- Bricolage Grotesque Typography - Modern, bold font styling
- Glassmorphism Navigation - Sticky navbar with backdrop blur and "Available" badge
- Typewriter Hero - Dynamic headline with rotating phrases
- Static Tech Grid - Hover-lift effect on technology icons
- Vertical Project Cards - Category badges with color-coded labels
- The Garage - WIP section with progress bars and glowing card effects
- Cal.com Integration - "Book a Call" modal for scheduling
- SEO Optimized - Dynamic sitemap, robots.txt, and OpenGraph images

🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Components | Shadcn UI (Radix primitives) |
| Fonts | Bricolage Grotesque (next/font) |
| Deployment | Vercel |

📦 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & providers
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Tailwind + custom CSS
│   ├── sitemap.ts           # Dynamic sitemap generation
│   ├── robots.ts            # Robots.txt configuration
│   ├── blog/                # Blog pages
│   ├── projects/            # Projects page
│   ├── garage/              # The Garage (WIP section)
│   ├── experience/          # Experience timeline
│   └── contact/             # Contact page
├── components/
│   ├── ui/                  # Shadcn primitives
│   ├── Hero.tsx             # Hero section with typewriter
│   ├── TechStack.tsx        # Static grid with hover effects
│   ├── FeaturedProjects.tsx # Vertical project cards
│   ├── Experience.tsx       # Timeline component
│   ├── BookingModal.tsx     # Cal.com integration
│   └── ...
└── lib/
    └── utils.ts             # cn() utility
```

🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | zinc-950 | Page background |
| `--foreground` | zinc-50 | Primary text |
| `--card` | zinc-900 | Card backgrounds |
| `--muted-foreground` | zinc-400 | Subtitles, meta |
| `--primary` | white | CTAs, active states |
| `--accent` | emerald-500 | "Available" badge |

🚀 Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/solankivedant10/Portfolio)

Or manually:

```bash
vercel --prod
```

📄 License

MIT © 2025 Vedant Solanki
