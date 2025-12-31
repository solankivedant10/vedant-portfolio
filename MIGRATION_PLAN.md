# Portfolio Migration Plan: Vite/JS → Next.js 14/TypeScript + ShadCN UI

> **Generated:** December 31, 2024  
> **Current Stack:** Vite + React 19 + JavaScript + react-router-dom  
> **Target Stack:** Next.js 14 (App Router) + TypeScript + ShadCN UI + Tailwind CSS v4

---

## Strategy

### Migration Approach

1. **Rename existing project folder** to `_legacy` to preserve all current code
2. **Initialize fresh Next.js 14 project** in the root directory with App Router
3. **Install ShadCN UI** and configure the design system
4. **Migrate components incrementally** from `_legacy/src/components` → `app/components`
5. **Convert JSX to TSX** and add TypeScript types
6. **Replace `react-router-dom`** with Next.js file-based routing
7. **Port styles** from `App.css` and `index.css` to global CSS / Tailwind config

### Why `_legacy` Folder?

- Keeps the original codebase intact for reference during migration
- Allows side-by-side comparison when porting components
- Easy rollback if needed
- Can be deleted after successful migration

---

## Route Mapping

| Old Path (react-router-dom) | Old File | New App Router Path | New File |
|---|---|---|---|
| `/` | `src/pages/HomePage.jsx` | `/` | `app/page.tsx` |
| `/about` | `src/pages/AboutPage.jsx` | `/about` | `app/about/page.tsx` |
| `/experience` | `src/pages/ExperiencePage.jsx` | `/experience` | `app/experience/page.tsx` |
| `/projects` | `src/pages/ProjectsPage.jsx` | `/projects` | `app/projects/page.tsx` |
| `/garage` | `src/pages/GaragePage.jsx` | `/garage` | `app/garage/page.tsx` |
| `/blog` | `src/pages/BlogPage.jsx` | `/blog` | `app/blog/page.tsx` |
| `/blog/:slug` | `src/pages/BlogPostPage.jsx` | `/blog/[slug]` | `app/blog/[slug]/page.tsx` |
| `/contact` | `src/pages/ContactPage.jsx` | `/contact` | `app/contact/page.tsx` |

### Layout Structure

```
app/
├── layout.tsx          # Root layout (replaces App.jsx wrapper)
├── page.tsx            # Home page
├── globals.css         # Global styles (from App.css + index.css)
├── about/
│   └── page.tsx
├── experience/
│   └── page.tsx
├── projects/
│   └── page.tsx
├── garage/
│   └── page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── contact/
│   └── page.tsx
└── components/         # Shared components
    ├── ui/             # ShadCN UI components
    └── ...             # Custom components
```

---

## Component Audit

### Summary

- **Total Components:** 17 (+ 1 index.js barrel export)
- **Client Components Required:** 17 (all use React hooks and/or framer-motion)
- **Server Components Possible:** 0 (Footer could be Server but uses React Router Link)
- **ShadCN Replacements:** 4 potential candidates

### Detailed Component Table

| Component | File | Type | Reason | ShadCN Replacement | Notes |
|---|---|---|---|---|---|
| `About` | `About.jsx` | Client | `useRef`, `useInView`, `motion` | `Card` (partial) | Keep custom, add `'use client'` |
| `AboutPreview` | `AboutPreview.jsx` | Client | `useRef`, `useInView`, `motion`, `Link` | — | Keep custom |
| `Blog` | `Blog.jsx` | Client | `useRef`, `useInView`, `motion`, `Link` | `Card` (posts) | Keep custom layout |
| `BlogPreview` | `BlogPreview.jsx` | Client | `useRef`, `useInView`, `motion`, `Link` | `Card` | Keep custom |
| `Contact` | `Contact.jsx` | Client | `useState`, `useRef`, `useEffect`, `useInView`, `motion`, Cal.com | `Button`, `Input`, `Textarea` | Replace form elements with ShadCN |
| `Experience` | `Experience.jsx` | Client | `useRef`, `useInView`, `motion` | `Card`, `Badge` | Use ShadCN for cards/badges |
| `FeaturedProjects` | `FeaturedProjects.jsx` | Client | `useRef`, `useInView`, `motion`, `Link` | `Card` | Keep custom hover effects |
| `Footer` | `Footer.jsx` | Client | Uses `Link` from react-router-dom | — | Convert to Server + Next.js `Link` |
| `Garage` | `Garage.jsx` | Client | `useRef`, `useInView`, `motion` | `Card`, `Badge`, `Progress` | Use ShadCN progress bars |
| `GitHubContributions` | `GitHubContributions.jsx` | Client | `useState`, `useEffect`, `useRef`, `useInView`, `motion` | — | Keep custom (unique UI) |
| `Hero` | `Hero.jsx` | Client | `useEffect`, `motion`, Cal.com | `Button` | Replace buttons with ShadCN |
| `HomeCTA` | `HomeCTA.jsx` | Client | `useEffect`, `useRef`, `useInView`, `motion`, Cal.com | `Button` | Replace buttons with ShadCN |
| `Navbar` | `Navbar.jsx` | Client | `useState`, `useEffect`, `motion`, `NavLink` | `Button`, `Sheet` (mobile menu) | Use ShadCN Sheet for mobile |
| `Projects` | `Projects.jsx` | Client | `useState`, `useRef`, `useInView`, `motion` | `Card`, `Badge`, `Tabs` | Use ShadCN for filters/cards |
| `Skills` | `Skills.jsx` | Client | `useRef`, `useInView`, `motion` | `Badge`, `Tooltip` | Use ShadCN tooltips |
| `SkillsPreview` | `SkillsPreview.jsx` | Client | `useRef`, `useInView`, `motion` | `Badge`, `Tooltip` | Use ShadCN tooltips |
| `WhyHireMe` | `WhyHireMe.jsx` | Client | `useRef`, `useInView`, `motion` | `Card` | Keep custom layout |

### ShadCN UI Components to Install

```bash
# Essential components for this migration
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add tooltip
npx shadcn@latest add sheet        # For mobile navigation
npx shadcn@latest add progress     # For Garage project progress bars
npx shadcn@latest add tabs         # For Projects filter
```

---

## Dependency Check

### Packages to UNINSTALL

| Package | Reason |
|---|---|
| `react-router-dom` | Replaced by Next.js file-based routing |
| `vite` | Replaced by Next.js bundler |
| `@vitejs/plugin-react` | Vite-specific, not needed |
| `@tailwindcss/vite` | Next.js has built-in Tailwind support |

### Packages to KEEP

| Package | Reason |
|---|---|
| `react` | Core (Next.js compatible) |
| `react-dom` | Core (Next.js compatible) |
| `framer-motion` | Animation library, works with Next.js |
| `@calcom/embed-react` | Cal.com scheduling widget |
| `tailwindcss` | Styling (v4 works with Next.js) |

### Packages to INSTALL

| Package | Reason |
|---|---|
| `next` | Next.js framework |
| `typescript` | TypeScript support |
| `@types/node` | Node.js type definitions |
| `clsx` | Conditional classNames (ShadCN dependency) |
| `tailwind-merge` | Merge Tailwind classes (ShadCN dependency) |
| `class-variance-authority` | Component variants (ShadCN dependency) |
| `lucide-react` | Icons (ShadCN default icon library) |
| `@radix-ui/*` | Headless UI primitives (ShadCN components) |

---

## Data & Assets Migration

### Data Files

| Current Location | New Location |
|---|---|
| `src/data/blogPosts.js` | `lib/data/blog-posts.ts` |

### Assets

| Current Location | New Location | Notes |
|---|---|---|
| `src/assets/*.png` | `public/images/` | Static images |
| `src/assets/*.svg` | `public/images/` or inline components | SVGs can be React components |
| `public/vite.svg` | Remove | Vite branding not needed |
| `public/_redirects` | Remove | Netlify-specific, Vercel uses `vercel.json` |

---

## Next Steps

### 1. Backup Current Project

```bash
# Rename the src folder to preserve it
cd c:\Users\HP\Downloads\Portfolio-old\Portfolio-main
ren src _legacy_src
ren public _legacy_public
del package-lock.json
```

### 2. Initialize Next.js 14 Project

```bash
npx -y create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --turbopack
```

> [!IMPORTANT]
> Use `--turbopack` for faster dev builds. The `.` means initialize in current directory.

### 3. Install ShadCN UI

```bash
npx shadcn@latest init
```

Choose these options:
- Style: **Default**
- Base color: **Zinc** (matches current dark theme)
- CSS variables: **Yes**

### 4. Install Required ShadCN Components

```bash
npx shadcn@latest add button card badge input textarea tooltip sheet progress tabs
```

### 5. Install Additional Dependencies

```bash
npm install framer-motion @calcom/embed-react
```

### 6. Migrate Components

For each component in `_legacy_src/components/`:
1. Create new `.tsx` file in `src/components/`
2. Add `'use client'` directive at the top
3. Replace `react-router-dom` `Link` with `next/link` `Link`
4. Add TypeScript types/interfaces
5. Replace applicable elements with ShadCN components

### 7. Delete Legacy Files

After successful migration and testing:
```bash
rmdir /s /q _legacy_src
rmdir /s /q _legacy_public
```

---

## Verification Plan

### Build Verification
```bash
npm run build
```
- Ensure no TypeScript errors
- Ensure no build warnings

### Dev Server Testing
```bash
npm run dev
```
- Navigate to all routes
- Verify page transitions work
- Test mobile responsiveness
- Test Cal.com embed functionality

### Manual Testing Checklist
- [ ] All 8 routes load correctly
- [ ] Navbar navigation works
- [ ] Mobile menu opens/closes
- [ ] Framer Motion animations render
- [ ] GitHub contributions chart loads
- [ ] Blog post dynamic routing works (`/blog/[slug]`)
- [ ] Cal.com scheduling buttons work
- [ ] Footer links work
- [ ] All images load correctly

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Tailwind v4 incompatibility issues | Medium | Medium | Test early, fallback to v3 if needed |
| Framer Motion SSR issues | Low | High | Use `'use client'` directive consistently |
| Cal.com embed not loading | Low | Medium | Ensure client-side only rendering |
| Image paths breaking | Medium | Low | Use Next.js `<Image>` component with proper paths |
| Dynamic blog routes not working | Low | High | Test `[slug]` routing early |

---

## Timeline Estimate

| Phase | Duration |
|---|---|
| Project setup (Next.js + ShadCN) | 30 min |
| Layout & routing setup | 1 hour |
| Component migration (17 components) | 4-6 hours |
| Styles migration | 1 hour |
| Testing & bug fixes | 2 hours |
| **Total** | **8-10 hours** |
