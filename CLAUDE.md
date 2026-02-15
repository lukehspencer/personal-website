# Personal Portfolio Website

Single-page personal portfolio for a Data Scientist, Data Analyst, AI/ML Engineer, and Software Engineer. Static site with scroll-triggered animations — no backend, no auth, no API routes.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19, TypeScript 5
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` — theme tokens in `src/app/globals.css:3-12`
- **Animation:** Framer Motion 12 — scroll-triggered fade-ins, hover interactions
- **Font:** Inter (self-hosted via `next/font/google`) — configured in `src/app/layout.tsx:6-9`
- **Linting:** ESLint 9 flat config with Next.js core-web-vitals + TypeScript rules

## Commands

```sh
npm run dev      # Dev server on localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

No test framework is configured.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Tailwind @theme tokens, scroll behavior, base styles
│   ├── layout.tsx        # Root layout: Inter font, metadata, Navbar wrapper
│   └── page.tsx          # Home page — composes all section components
└── components/
    ├── Navbar.tsx         # Sticky nav, smooth scroll links, mobile hamburger (client)
    ├── Hero.tsx           # Full-viewport intro with fade-in + scroll indicator (client)
    ├── About.tsx          # Two-column bio + skill pills (client)
    ├── Portfolio.tsx      # 3-card project grid with hover lift (client)
    ├── Resume.tsx         # Experience/education timeline + download button (client)
    ├── Contact.tsx        # Static form (Name, Email, Message) — no backend (client)
    └── Footer.tsx         # Copyright + social links (server component)
public/                   # Static assets — place resume.pdf here for download link
```

## Key Conventions

- **One section per file.** Each component owns its section's data, layout, and animations.
- **Named exports only.** All components use `export function ComponentName()` — no default exports.
- **Client vs server.** All interactive components have `"use client"`. Footer is the only server component.
- **Static data co-located.** Arrays like `projects`, `experience`, `skills` live as constants at the top of the component that renders them (e.g., `src/components/Portfolio.tsx:6-30`).
- **No global state.** Only Navbar uses `useState`/`useEffect` for scroll and mobile menu. Everything else is stateless.
- **Path alias:** `@/*` maps to `./src/*` (tsconfig.json:22-23). Use `@/components/Foo` for all imports.

## Color Tokens

Defined as CSS custom properties in `src/app/globals.css:3-12`, consumed as Tailwind utilities:

| Token          | Value     | Usage                           |
|----------------|-----------|---------------------------------|
| `accent`       | `#2563eb` | Buttons, links, timeline dots   |
| `accent-light` | `#dbeafe` | Skill/tech tag backgrounds      |
| `foreground`   | `#1a1a2e` | Primary text                    |
| `muted`        | `#64748b` | Secondary text, descriptions    |
| `border`       | `#e2e8f0` | Card/section borders            |
| `card`         | `#f8fafc` | Alternating section backgrounds |

## Architectural Patterns

### Section Structure

Every section follows: `<section id="x" className="py-24 px-6">` wrapping a centered `max-w-{size}xl` container. Section `id` must match the Navbar link href in `Navbar.tsx:7-12`. Alternating sections use `bg-card` for visual separation (Portfolio, Contact have it; About, Resume don't).

### Scroll-Triggered Fade-Up

The `fadeUp` variant is defined locally in 4 components — `About.tsx:13-16`, `Portfolio.tsx:33-36`, `Resume.tsx:44-47`, `Contact.tsx:6-9`:

```ts
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
```

Applied with `whileInView="visible"`, `viewport={{ once: true, margin: "-100px" }}`, and staggered via `delay: N * 0.1`. Hero uses inline `animate` instead of `whileInView` since it fires on page load.

### Interactive Buttons

CTAs in Hero.tsx:21, Resume.tsx:108, Contact.tsx:89 share: `whileHover={{ scale: 1.05 }}`, `whileTap={{ scale: 0.97 }}`, and `rounded-full bg-accent text-white shadow-md hover:shadow-lg`.

### Tag/Pill Styling

Skill and tech tags in About.tsx:68 and Portfolio.tsx:63 use: `rounded-full bg-accent-light text-accent font-medium`. About uses larger pills (`px-4 py-1.5 text-sm`), Portfolio uses compact (`px-3 py-1 text-xs`).

### Card Hover Lift

Portfolio cards combine Framer Motion `whileHover={{ y: -6 }}` with CSS `shadow-sm hover:shadow-md transition-shadow` for a layered lift effect.

### Responsive Strategy

Mobile-first with two breakpoints: `md:` (768px) for multi-column layouts and desktop nav, `lg:` (1024px) for 3-column Portfolio grid. Mobile hamburger uses `AnimatePresence` for menu enter/exit.
