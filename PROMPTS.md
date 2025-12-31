# Portfolio Migration Prompt Log

> Documentation of all migration phases for the Vite → Next.js 14 portfolio upgrade.

---

## Phase 1: Migration Audit & Planning
**Goal:** Analyze the existing Vite + React + JavaScript codebase and generate a migration plan.

**Actions:**
- Analyzed all 17 components in `src/components` for client/server classification
- Mapped 8 routes from react-router-dom to Next.js App Router
- Identified dependencies to uninstall (vite, react-router-dom) and install (next, typescript, shadcn)
- Generated `MIGRATION_PLAN.md` with route mapping, component audit, and step-by-step commands

**Output:** `MIGRATION_PLAN.md`

---

## Phase 2: Safe Scaffolding & Next.js Init
**Goal:** Preserve existing code and initialize fresh Next.js 14 project.

**Actions:**
- Created `_legacy` folder and moved all source files (src, public, vite.config.js, etc.)
- Initialized Next.js 14 with TypeScript, Tailwind, ESLint, App Router, and src directory
- Installed dependencies: framer-motion, clsx, tailwind-merge, lucide-react, @calcom/embed-react
- Ran `npx shadcn@latest init` with Zinc/Dark theme configuration
- Updated `globals.css` to force dark mode (Zinc 950 background) by default
- Created placeholder `page.tsx` with migration status UI

**Output:** Fresh Next.js project with ShadCN UI and `_legacy` folder preserved

---

## Phase 3: Navbar & Hero Implementation
**Goal:** Migrate the Navbar and Hero components from legacy to new stack.

**Actions:**
- Installed ShadCN components: button, sheet, separator
- Created `Navbar.tsx`:
  - Glassmorphism style with `bg-background/80 backdrop-blur-md`
  - Desktop navigation with Next.js Link
  - Mobile menu using ShadCN Sheet (slide-out drawer)
  - Live date/time display (hydration-safe)
  - "Available" status badge
- Created `Hero.tsx`:
  - Gradient typography (`bg-gradient-to-r from-indigo-400 via-purple-400`)
  - Cal.com "Book a call" CTA integration
  - Social icons with Lucide React
  - Floating cards with framer-motion animations
  - Stats section (8+ months, 4+ projects, 500+ contributions)
- Updated `page.tsx` to render Navbar and Hero

**Output:** `Navbar.tsx`, `Hero.tsx` with upgraded UI

---

## Phase 4: Experience, Projects & Documentation
**Goal:** Migrate content sections and document all prompts.

**Actions:**
- Created this `PROMPTS.md` file
- Created `Experience.tsx` with vertical timeline layout
- Created `Projects.tsx` with ShadCN Card grid and Badge tags
- Updated `page.tsx` with all sections

**Output:** `Experience.tsx`, `Projects.tsx`, `PROMPTS.md`

---

## Future Phases

### Phase 5: Contact, Footer & Polish
- About, Blog, Contact, Garage, Footer components

### Phase 6: Route Pages
- Create App Router pages for /about, /projects, /blog, etc.

### Phase 7: Polish & Deploy
- SEO metadata, performance optimization, Vercel deployment
