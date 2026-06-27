# PROJECT_CONTEXT.md

> **Single source of truth** for the Manganni Salvaticus website.
> If every prior conversation disappeared, this file alone should contain
> everything needed to continue development without losing context.
>
> Keep this file updated after every work session (see [§17 Session Notes](#17-session-notes)).

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Core Design Philosophy](#2-core-design-philosophy)
3. [Client Requirements](#3-client-requirements)
4. [Information Architecture](#4-information-architecture)
5. [Homepage Blueprint](#5-homepage-blueprint)
6. [Visual Design System](#6-visual-design-system)
7. [Animation & Motion System](#7-animation--motion-system)
8. [Technical Architecture](#8-technical-architecture)
9. [Planned Folder Structure](#9-planned-folder-structure)
10. [Development Roadmap](#10-development-roadmap)
11. [Current Progress](#11-current-progress)
12. [Immediate Next Steps](#12-immediate-next-steps)
13. [Future Enhancements](#13-future-enhancements)
14. [Development Rules](#14-development-rules)
15. [Decision Log](#15-decision-log)
16. [Open Questions](#16-open-questions)
17. [Session Notes](#17-session-notes)
18. [Quick Reference](#18-quick-reference)

---

## 1. Project Overview

### What the website is
The official website for **Manganni Salvaticus**, a nonprofit organization. The
site is **not** a conventional informational nonprofit website — it is built as
an **immersive, cinematic experience** that feels closer to a documentary, an
interactive exhibit, and a piece of interactive storytelling than a traditional
set of pages.

### Who it is for
- **Primary audience:** the public — prospective supporters, volunteers,
  donors, athletes, veterans, and community members discovering the
  organization for the first time.
- **Secondary audience:** the **organization's owner/administrator**, who needs
  to keep the site's event calendar current without touching code (see the
  admin plans in [§4](#4-information-architecture) and [§8](#8-technical-architecture)).

### The organization's mission
The mission centers on **preserving legacy, building opportunity, and creating
champions** — supporting athletes (with an Olympic-level aspiration referenced
in the notes), running veterans programs, and driving community-based work.

> **Placeholder — refine the mission statement.** The exact, client-approved
> mission wording is still pending. See [§16 Open Questions](#16-open-questions).

### The purpose of the website
- Tell the organization's story in an emotionally resonant, cinematic way.
- Showcase programs (athletics, veterans, community) and upcoming events.
- Convert visitors into volunteers and donors.
- Give sponsors visible, premium placement.
- Let the owner self-manage events through a future admin panel.

### The experience we're trying to create
Moving through the website should feel like **moving through the Manganni
Salvaticus journey** — not scrolling through sections, not reading pages, but
*experiencing* a story. Each scroll should feel like entering another memory or
moving deeper through a documentary.

### Overall vision
A black, futuristic, neon-lit world with a video always playing behind the
content. Sections emerge from darkness and dissolve back into it. The site feels
premium and intentional, the opposite of a templated nonprofit site.

### Long-term goals
- A maintainable, owner-editable platform (events now; potentially more later).
- A reusable cinematic design system that can extend to future pages
  (Meet The Team, Veterans Programs, About Us, etc.).
- A strong portfolio-grade reference build.

---

## 2. Core Design Philosophy

The philosophy behind every decision on this project:

- **This is not a traditional nonprofit website.** Reject the standard
  header → sections → footer informational template. The benchmark is a
  cinematic brand experience, not a brochure.
- **The site tells a story rather than presenting information.** Content is
  sequenced as a narrative journey, not organized as a reference document.
- **The experience should feel immersive.** A persistent background video,
  neon lighting, and darkness between sections create a continuous world rather
  than discrete screens.
- **Motion is a storytelling tool, not decoration.** Every animation exists to
  reinforce the feeling of moving through a journey. No motion is added purely
  to look busy.
- **Every interaction should feel intentional.** Hovers, transitions, and
  scroll behavior are deliberate and consistent, contributing to a sense of
  craft and polish.
- **Smoothness is non-negotiable.** A premium feel depends on fluid, performant
  motion. Flashy effects are never worth a janky experience.
- **Premium over generic.** The site should feel expensive and bespoke, never
  like a template.

---

## 3. Client Requirements

Interpreted and consolidated from the client's handwritten notebook notes and
sketches (not a transcription — grouped into coherent requirements).

### 3.1 Overall experience
- The website must feel like an immersive journey through the Manganni
  Salvaticus story.
- It must explicitly **not** use normal website scrolling — scroll transitions
  should feel like content dissolving into darkness and the next section
  emerging from it (described in the notes like "swinging from ring to ring,"
  "entering another memory," "moving through a documentary").

### 3.2 Aesthetic
- Black, futuristic look.
- Neon lighting (green primary, red secondary).
- A video **always playing** in the background.

### 3.3 Persistent elements (always visible)
- **Top navbar** with a transparent black glass effect. Links: Home,
  Meet The Team, Veterans Programs, About Us, plus Profile/Login.
- **Left sponsor conveyor** — vertical, continuously moving, infinite loop,
  logos slowly floating.
- **Right sponsor conveyor** — same, moving in the opposite direction, to
  create motion on both sides.

### 3.4 Hero section
- Full-screen background video: **night-time POV crossing the jungle**, with
  fog, rain, flashlights — atmospheric.
- Large, glowing, animated title: **MANGANNI SALVATICUS** (huge, red, glowing).
- Subtitle: **Preserving Legacy. / Building Opportunity. / Creating Champions.**
- An animated, glowing, pulsing scroll indicator (not a plain arrow).

### 3.5 Event calendar (centerpiece)
- A large glassmorphism calendar card titled "Upcoming Events."
- Calendar grid with hover effects: hovering a date expands it and glows green;
  clicking a date slides out event details.
- On entering the section, the calendar should materialize almost
  holographically.
- **The owner must be able to edit/add/remove events themselves** (drove the
  admin-login + database decision — see [§4](#4-information-architecture)).

### 3.6 Categories
- Four large circular cards (from the sketch):
  **Meet The Team, Veterans Programs, About Us, Vision/Future.**
- Hover: card grows, glow intensifies, background video shifts, text slides up.

### 3.7 Mission story
- A horizontal story timeline revealed on scroll:
  **Vision → Beginning → Growth → Olympic Dream → Future.**
- Each milestone appears over cinematic footage.

### 3.8 Impact section
- Statistics, athletes, programs, achievements.
- Cards animate in; counters increase.

### 3.9 Final call to action
- Big statement: **"Join The Journey."**
- Two buttons: **Volunteer** and **Donate.**
- Backed by slow-motion jungle footage.

### 3.10 Structure
- The homepage is **one continuous cinematic scrolling experience**, not
  separate stacked pages. Navbar links jump to chapters within the homepage.
  The video background, sponsor conveyors, and neon aesthetic persist
  throughout.

---

## 4. Information Architecture

### Navigation
- Persistent top navbar, present across the whole experience.
- Links act as **in-page jumps to story chapters**, not separate page loads
  (single-page experience).
- Nav items: **Home · Meet The Team · Veterans Programs · About Us** and a
  **Login** entry (the future admin/owner entry point).

### Pages
- **Homepage** — the single cinematic scroll experience (the entire focus of
  the current build).
- **Future standalone pages** (post-homepage): Meet The Team, Veterans
  Programs, About Us, Vision/Future. These currently exist as category cards and
  in-page chapters; they may graduate to dedicated routes later.
- **`/admin`** — a hidden route for the owner to manage events (planned,
  Phase 5).

### Homepage sections (in order)
`Navbar → Hero → Calendar → Categories → Mission → Impact → CTA`

### User flow
1. Land on the hero (jungle video, glowing title).
2. Scroll/"Begin" into the Upcoming Events calendar.
3. Continue into the four category circles (choose a path).
4. Move through the Mission story timeline.
5. See Impact (stats, achievements).
6. Arrive at the Join The Journey CTA (Volunteer / Donate).

### Content hierarchy
- **Persistent layer:** background video, navbar, sponsor rails.
- **Chapter layer:** the six story sections, each full-height.
- **Interactive layer:** calendar interactions, category hovers, CTA buttons.

### Login / admin
- The navbar **Login** slot anchors a future authenticated `/admin` area.
- Purpose: let the owner add/edit/delete calendar events without code or
  developer involvement.
- Chosen approach: **Supabase** auth + database (see [§8](#8-technical-architecture)
  and [§15](#15-decision-log)).

### Sponsor areas
- Two persistent vertical conveyors (left and right), infinite-looping in
  opposite directions, displaying sponsor logos.

### Calendar
- Centerpiece glassmorphism card.
- Data-driven: events come from a data source (local JSON now → Supabase later),
  so the UI never hardcodes events.

### Categories
- Four circular entry points to deeper content/chapters.

---

## 5. Homepage Blueprint

A complete walkthrough of the homepage as designed and (partly) built.

### Persistent layers (always on screen)
- **Background video layer** — one fixed, full-screen video playing
  continuously behind everything (night jungle). Currently falls back to a
  layered dark gradient with green/red fog until footage is added.
- **Navbar** — fixed top, transparent black glass (blur + translucent dark
  background), logo left, chapter links center, Login button right.
- **Sponsor rails** — fixed left and right columns. Currently static
  placeholder slots; become infinite conveyors in Phase 3.

### Section 1 — Hero
- **Experience:** the first frame of the journey. Huge glowing red title
  "MANGANNI SALVATICUS," three-line subtitle, and a glowing "Begin" scroll
  indicator.
- **Layout:** full-height, centered. Title uses the display font at a massive
  clamp size with layered red text-shadow for the neon glow.
- **Purpose:** set tone instantly — cinematic, premium, atmospheric.
- **Transition out:** (Phase 4) dissolves/blurs/scales away as the next chapter
  emerges from darkness.

### Section 2 — Upcoming Events (Calendar)
- **Experience:** a glassmorphism card materializes, showing the current month
  grid with event days marked, plus a list of upcoming events.
- **Layout:** centered glass card, blurred translucent background, soft shadow,
  rounded corners. Calendar grid (7-column) plus an events list below.
- **Interactions (current):** event days are highlighted with a green border and
  a glowing dot; an events list shows date, title, and category.
- **Interactions (planned, Phase 5):** hover a date to expand + glow green;
  click a date to slide out event details; holographic materialize on entry.
- **Data:** rendered from `src/data/events.json`, shaped like the future
  Supabase rows.
- **Purpose:** the centerpiece — what's happening now, and the owner-editable
  heart of the site.

### Section 3 — Categories
- **Experience:** four large circular cards — Meet The Team, Veterans Programs,
  About Us, Vision & Future.
- **Layout:** 4-up circular grid (responsive to 2-up, then stacked).
- **Interactions (current):** hover lifts the border to neon green with a soft
  glow.
- **Interactions (planned):** card grows, glow intensifies, background video
  shifts, text slides up.
- **Purpose:** branching entry points into the deeper story/chapters.

### Section 4 — Mission Story
- **Experience (planned):** a horizontal story timeline revealed on scroll —
  Vision → Beginning → Growth → Olympic Dream → Future — each milestone over
  cinematic footage.
- **Current state:** stubbed full-height section with a labeled placeholder so
  the page structure matches the final architecture.
- **Purpose:** the emotional core — where the organization came from and where
  it's going.

### Section 5 — Impact
- **Experience (planned):** statistics, athletes, programs, achievements; cards
  animate in; counters increase.
- **Current state:** stubbed full-height section with a placeholder.
- **Purpose:** proof of the organization's work and credibility.

### Section 6 — Final CTA
- **Experience:** big "Join The Journey" statement with Volunteer and Donate
  buttons, over (planned) slow-motion jungle footage.
- **Layout:** centered statement, two buttons (primary green, secondary
  outline → red on hover).
- **Current state:** built (buttons functional as anchors; actions TBD).
- **Purpose:** convert the emotional journey into action.

---

## 6. Visual Design System

All colors are defined as CSS custom properties in `src/index.css`.

### Color palette
| Token            | Value                     | Role                         |
|------------------|---------------------------|------------------------------|
| `--green`        | `#00FF66`                 | Primary — neon green         |
| `--red`          | `#FF3030`                 | Secondary — bright red       |
| `--bg`           | `#050505`                 | Near-black background        |
| `--text`         | `#FFFFFF`                 | Primary text                 |
| `--glass`        | `rgba(255,255,255,0.05)`  | Glass panel fill             |
| `--text-dim`     | `rgba(255,255,255,0.6)`   | Secondary text               |
| `--text-faint`   | `rgba(255,255,255,0.35)`  | Tertiary text / labels       |
| `--glass-border` | `rgba(255,255,255,0.1)`   | Glass + card borders         |
| `--green-glow`   | `rgba(0,255,102,0.35)`    | Green glow shadows           |
| `--red-glow`     | `rgba(255,48,48,0.45)`    | Red glow shadows (hero)      |

> **Why these:** the green/red/near-black/white set comes straight from the
> client notes. The derived tokens (dims, glows, borders) were added so the
> whole UI stays consistent and themeable from one place.

### Typography
- **Display / cinematic:** **Anton** — the huge poster-style hero title and
  section titles. Chosen for its condensed, monumental, cinematic weight.
- **Body:** **Space Grotesk** — techy but highly readable; fits the futuristic
  tone without sacrificing legibility.
- **Mono / labels / data:** **Space Mono** — eyebrows, nav links, tags, dates,
  and calendar labels, for a technical, instrument-panel feel.

> **Note:** the earlier portfolio used Syne; for this project Anton was chosen
> for a more cinematic, monumental hero. Revisit if the client wants a
> different display face.

### Spacing & layout
- `--nav-height: 72px`
- `--rail-width: 88px` (sponsor columns)
- `--content-max: 1100px` (section content width)
- Sections are full-height (`min-height: 100vh`), centered, with generous
  padding accounting for the navbar and rails.

### Buttons
- **Primary:** solid neon green fill, dark green text, green glow shadow
  (used for Volunteer).
- **Secondary:** transparent with a glass border; border + text shift to red on
  hover (used for Donate).
- Pill-shaped (`border-radius: 999px`), mono uppercase label, letter-spaced.

### Cards
- **Calendar card:** glassmorphism — translucent white fill, blur, subtle
  border, large radius (24px), deep soft shadow.
- **Category cards:** circular, radial glass gradient, neon-green border glow on
  hover.

### Glassmorphism
- Pattern: `background: var(--glass)` + `backdrop-filter: blur(...)` +
  `1px var(--glass-border)` border. Used for navbar, calendar card, sponsor
  slots, and event rows.

### Neon effects & lighting
- Achieved with layered `text-shadow` (hero title) and `box-shadow` glows
  (buttons, hover states) using the `--green-glow` / `--red-glow` tokens.
- The background gradient placeholder uses soft green/red radial glows to imply
  neon lighting before video loads.

### Backgrounds
- Global near-black (`--bg`).
- Fixed video layer behind all content, dimmed (`brightness(0.6)`) with a radial
  vignette so foreground text always stays readable.

### Shadows
- Soft, large, dark shadows for depth on glass cards.
- Colored glows (green/red) for neon emphasis, never harsh.

### Border radius
- Cards 24px; inner elements 12–14px; buttons/pills 999px; circular category
  cards 50%.

### Icon style
- Planned: **React Icons** for a consistent, lightweight icon set
  (not yet installed — see [§13](#13-future-enhancements)).
- Current scroll indicator uses an inline SVG arrow with a green glow.

### Hover states
- Links/nav: dim → neon green.
- Category cards: border → neon green + soft green box-shadow glow.
- Secondary button: border/text → red.

### Focus states
- Visible green outline (`outline: 2px solid var(--green)`, offset) on links and
  buttons for keyboard accessibility.

### Overall aesthetic
Black, futuristic, neon-lit, cinematic, premium. Darkness as a canvas; green and
red as the only saturated colors; glass and glow as the texture.

---

## 7. Animation & Motion System

> This is the heart of the experience and should be treated as the most
> important build effort (Phase 4). Most of it is **planned**, not yet built.

### Scroll philosophy
- **Not normal scrolling.** The defining requirement. As the user scrolls, the
  current section dissolves into the background (fades, scales up slightly,
  blurs) while the next section emerges from darkness (fades in, scales from
  smaller to full). The feeling: moving through memories / a documentary.

### Section transitions (planned, Motion.dev)
- Outgoing section: `opacity 100% → 0%`, `scale 100% → 110%`, `blur 0 → 10px`.
- Incoming section: `opacity 0% → 100%`, `scale 90% → 100%`.
- Net effect: content appears to grow out of the darkness — exactly what the
  sketches describe.

### Hero animations (planned)
- Title: glowing entrance; the neon red glow is already in CSS, animation
  (pulse/flicker/intro) to be added.
- Scroll indicator: glowing, pulsing motion to suggest downward movement.

### Text animations (planned)
- Subtitle lines and section eyebrows/titles fade/slide in on chapter entry.

### Parallax (planned)
- Subtle depth between the background video, mid-ground content, and foreground
  glass elements.

### Blur & fade transitions (planned)
- Core to the dissolve effect (see Section transitions).

### Sponsor conveyor movement (Phase 3)
- Infinite vertical loops: left rail drifts up, right rail drifts down,
  continuously, seamlessly (`repeat: Infinity`).

### Hover effects (partly built)
- Category cards, nav links, buttons (see [§6](#6-visual-design-system)).
- Planned richer category hover: grow + intensified glow + background video
  shift + text slide.

### Loading animations (planned)
- Optional cinematic intro/loader; video poster shows instantly while footage
  buffers.

### Page/chapter transitions (planned)
- Since it's single-page, "page" transitions are the chapter dissolve effects
  above, coordinated with scroll.

### Motion timing
- Crossfades/dissolves around ~1.2s; hovers ~0.2–0.25s. Favor smooth easing.
  Exact curves to be tuned in Phase 4.

### Motion.dev implementation ideas
- `useScroll()` for scroll-driven section progress.
- `AnimatePresence` + `motion.div` for enter/exit of chapters.
- Infinite-loop animation config for the sponsor conveyors.
- Floating neon particle/drift effects in the background (optional).

### Lenis smooth scrolling (planned)
- Add **Lenis** for buttery, controlled smooth-scroll that the dissolve
  transitions can hook into. Pairs with Motion.dev's scroll utilities.
- **Why:** native scroll is too abrupt for the intended cinematic feel; Lenis
  gives the smooth, momentum-based motion the journey concept needs.

### Reduced motion
- `prefers-reduced-motion` is already respected in base CSS (transitions
  disabled, smooth scroll off, video swapped for static). All future motion must
  honor this.

---

## 8. Technical Architecture

### Technologies and why

- **React (18)** — component-based UI. Chosen because the site is composed of
  reusable pieces (Navbar, Hero, Calendar, cards), the calendar is stateful
  (selection, slide-outs), Motion.dev is React-native, and data-driven
  rendering (events from JSON/DB) is exactly React's model. Also a high-value,
  in-demand skill for the developer's portfolio.
- **Vite (6)** — build tool / dev server. Instant hot-reload during
  development and optimized production bundles. Fast, modern, minimal config.
- **Motion.dev (Framer Motion)** — the animation engine for the custom scroll
  experience and transitions. Chosen over plain CSS because the dissolve/scale/
  blur choreography and scroll-driven sequencing need a real animation library;
  Motion.dev is more suited to building this custom experience than prototyping
  in Framer itself.
- **Lenis** — smooth-scroll layer (planned) for the cinematic scroll feel.
- **React Icons** — consistent icon set (planned).
- **Supabase** — hosted Postgres database + authentication (planned, Phase 5).
  Chosen for the calendar's owner-editable requirement: it provides a database
  and built-in auth while keeping the site essentially static (React fetches
  events on load), with no server for the developer to maintain, and a free
  tier that comfortably covers a nonprofit event calendar. The admin panel
  becomes a hidden `/admin` route where the owner logs in and manages events.

### Component philosophy
- One component per concern, each owning its own markup/structure.
- Sections are self-contained and full-height so motion can wrap them 1:1.
- Data is passed in / imported, never hardcoded into deeply nested markup
  (e.g., categories and events are arrays mapped to UI).

### State management plans
- Local React state (`useState`) for UI interactions (e.g., selected calendar
  day in Phase 5).
- No global state library anticipated yet; revisit only if complexity grows.
- Event data: local JSON now → Supabase fetch later. The component contract
  stays the same, so the swap touches only the data source.

### Performance considerations
- Background video must be compressed (short loop, 1080p max, no audio,
  ideally < ~5 MB, `+faststart`). Video is the biggest perf risk.
- Poster images show instantly while video buffers.
- Video pauses when the tab is hidden.
- Planned (Phase 6): lazy loading, further compression, mobile tuning.

### Deployment plans
- Static build output (`dist/`) — deployable to any static host
  (e.g., GitHub Pages, Netlify, Vercel). Final host TBD.
- > **Placeholder — confirm hosting target** (see [§16](#16-open-questions)).

### GitHub workflow
- Repo: **`https://github.com/JK-nick/manganni-salvaticus`** (public).
- Each phase ends with a clean commit and push, so progress is snapshotted and
  reversible. Commit messages are phase-labeled
  (e.g., "Phase 2: persistent background video system").
- `node_modules` and `dist` are gitignored.

---

## 9. Planned Folder Structure

```text
manganni-salvaticus/
├── index.html               # Vite entry; loads fonts + #root
├── package.json             # dependencies + scripts (dev/build/preview)
├── vite.config.js           # Vite + React plugin
├── README.md                # run instructions + phase roadmap
├── PROJECT_CONTEXT.md        # ← this file (single source of truth)
├── public/
│   └── videos/              # background footage drop folder (lowercase!)
│       └── background.mp4   # client-supplied footage (converted from .mov)
└── src/
    ├── main.jsx             # React entry; mounts <App/>
    ├── App.jsx              # composes the page (z-stack + INDEX architecture)
    ├── index.css            # global styles + design tokens
    ├── components/          # one component per concern
    │   ├── VideoLayer.jsx   # z-0: fixed full-viewport background video
    │   ├── ScrollFilm.jsx   # z-1: scroll-driven dark overlay (0 → 0.82 opacity)
    │   ├── Navbar.jsx
    │   ├── SponsorRail.jsx  # used twice (left/right) via `side` prop
    │   ├── Hero.jsx
    │   ├── CalendarSection.jsx
    │   ├── Categories.jsx
    │   ├── Mission.jsx      # stub
    │   ├── Impact.jsx       # stub
    │   └── CTA.jsx
    └── data/
        └── events.json      # event data (shaped like future Supabase rows)
```

### Conventions
- **Components:** PascalCase `.jsx`, one component per file, default-exported.
- **Data:** lives in `src/data/`, imported by components.
- **Styles:** centralized in `index.css` via CSS custom properties (no
  per-component CSS files yet; revisit if it grows).
- **Future folders (likely):** `src/hooks/` (custom hooks, e.g., scroll),
  `src/lib/` (Supabase client), `src/pages/` or routes (if the site grows
  beyond one page), `src/admin/` (admin panel).

---

## 10. Development Roadmap

Six phases, derived from the client spec and our planning.

### Phase 1 — Layout ✅
- **Objective:** establish the full page structure with no animation.
- **Tasks:** Vite+React scaffold; design tokens; Navbar; Hero; Calendar
  (static, data-driven); Categories; stub Mission/Impact/CTA; sponsor rail
  placeholders.
- **Completion criteria:** all sections present in correct order; build passes;
  runs locally. ✅ Met.
- **Dependencies:** none.

### Phase 2 — Video background system ✅
- **Objective:** persistent background video behind the whole experience.
- **Tasks:** `VideoLayer` component; single-video config; fade-in on ready;
  graceful gradient fallback; pause on hidden tab; reduced-motion support.
- **Completion criteria:** video plays persistently when a file is present;
  gradient fallback when absent; build passes. ✅ Met (awaiting actual footage).
- **Dependencies:** Phase 1.

### Phase 3 — Sponsor conveyors
- **Objective:** the two infinite vertical sponsor loops.
- **Tasks:** infinite-loop animation (left up, right down); seamless wrap;
  sponsor logo slots; mobile treatment (horizontal strip).
- **Completion criteria:** smooth, seamless, performant infinite motion both
  sides; responsive.
- **Dependencies:** Phase 1 (rails exist); ideally Motion.dev installed.

### Phase 4 — Motion.dev transitions (the cinematic scroll)
- **Objective:** the defining dissolve/scale/blur scroll experience + Lenis.
- **Tasks:** install Motion.dev + Lenis; chapter enter/exit transitions;
  hero/text animations; scroll-indicator pulse; tune timing/easing; respect
  reduced motion.
- **Completion criteria:** scrolling feels like moving through the journey;
  smooth on target devices.
- **Dependencies:** Phases 1–3.

### Phase 5 — Interactive calendar + admin
- **Objective:** make the calendar interactive and owner-editable.
- **Tasks:** Supabase project + events table + auth; `/admin` route + login;
  add/edit/delete events UI; hover-expand days, green glow, slide-out details;
  holographic materialize; swap JSON → Supabase fetch.
- **Completion criteria:** owner can log in and manage events; public calendar
  reflects changes; interactions match the spec.
- **Dependencies:** Phases 1–4; Supabase account; client sign-off on admin
  approach.

### Phase 6 — Performance & polish
- **Objective:** production readiness.
- **Tasks:** video compression; lazy loading; full mobile pass (nav menu, rail
  strip); accessibility audit; deployment.
- **Completion criteria:** fast load, smooth on mobile, accessible, deployed.
- **Dependencies:** all prior phases.

---

## 11. Current Progress

### ✅ Completed
- [x] Vite + React project scaffolded and running.
- [x] Design-token system (colors, fonts, spacing) in `index.css`.
- [x] Navbar (glass, chapter links, Login slot).
- [x] Hero (glowing red title, subtitle, scroll indicator).
- [x] Calendar section (static, data-driven from `events.json`, real month grid).
- [x] Categories (four circular cards, hover glow).
- [x] Mission / Impact stubbed; CTA built.
- [x] Sponsor rails as static placeholders.
- [x] Phase 2 video system rebuilt: `VideoLayer` (fixed, full-viewport, z-0) + `ScrollFilm` (scroll-driven dark overlay, z-1, opacity 0 → 0.82 over 300 px, RAF-based).
- [x] Background footage: `Swinging.mov` supplied by client, converted to `public/videos/background.mp4` (H.264, no audio, `+faststart`, ~11.6 MB).
- [x] App.jsx z-stack established: VideoLayer (z-0) → ScrollFilm (z-1) → content (z-2).
- [x] `public/videos/` enforced lowercase for Linux/production compatibility.
- [x] Git repo initialized and pushed to GitHub.
- [x] GitHub Actions deploy workflow (`.github/workflows/deploy.yml`) — builds with Vite and deploys `dist/` to GitHub Pages on every push to `main`.
- [x] `vite.config.js` base path set to `/manganni-salvaticus/` for correct asset URLs on GitHub Pages.
- [x] Video path updated to `${import.meta.env.BASE_URL}videos/background.mp4` — works in both local dev and production.
- [x] Site live at **https://jk-nick.github.io/manganni-salvaticus/**

### 🚧 In Progress
- [ ] Phase 3 — sponsor conveyor animation (next milestone).

### ⬜ Not Started
- [ ] Motion.dev install + cinematic scroll transitions (Phase 4).
- [ ] Lenis smooth scrolling (Phase 4).
- [ ] Interactive calendar + Supabase + `/admin` (Phase 5).
- [ ] Mission story timeline content (Phase 4+).
- [ ] Impact stats/counters content (Phase 4+).
- [ ] CTA button real destinations (Volunteer/Donate).
- [ ] Performance pass, mobile menu, deployment (Phase 6).

---

## 12. Immediate Next Steps

In priority order:

1. **Phase 3 — Sponsor conveyors.** Build the infinite vertical loops (left rail drifts up, right drifts down). This is the next planned build milestone.
2. **Install Motion.dev (and Lenis).** Needed for Phase 4; can be set up at the end of Phase 3.
3. **Phase 4 — Cinematic scroll transitions.** The signature experience — dissolve/scale/blur between chapters.
4. **Begin Phase 5 planning** — create the Supabase project and confirm the admin approach with the client.

---

## 13. Future Enhancements

Discussed but intentionally postponed (not required for current phases):

- **React Icons** integration for consistent iconography.
- **Floating neon particles** drifting in the background.
- **Cinematic loading screen / intro animation.**
- **Dedicated routes** for Meet The Team, Veterans Programs, About Us,
  Vision/Future (beyond in-page chapters).
- **Per-section background video changes** — *explicitly deferred/declined:* the
  client wants **one** continuous video throughout, so this is not planned
  (kept here only to record the decision).
- **Expanded admin** (beyond events) — e.g., editing sponsors, team, impact
  stats — possible later if the owner wants more self-service.
- **Donation/volunteer integrations** — real payment/volunteer signup flows for
  the CTA buttons.

---

## 14. Development Rules

Permanent rules for this project:

- **Never sacrifice smoothness for flashy effects.** Performance and fluidity
  come first.
- **Maintain cinematic storytelling.** Every screen should feel like part of the
  journey.
- **Avoid generic layouts.** No templated nonprofit patterns.
- **Every animation must have a purpose.** Motion serves the story, never
  decoration.
- **Prioritize polish over quantity.** A few perfect interactions beat many
  rough ones.
- **Maintain consistency.** Use the design tokens; reuse patterns; keep spacing,
  glows, and type uniform.
- **One continuous background video.** The atmosphere is a single persistent
  video, not per-section swaps.
- **Always respect `prefers-reduced-motion`.** Every motion feature ships with a
  reduced-motion fallback.
- **Keep data-driven.** UI renders from data (JSON/DB), never hardcoded lists.
- **Keep the data contract stable.** Local JSON mirrors the future Supabase
  shape so sources can swap without UI changes.
- **Commit per phase.** End each phase with a clean, labeled commit + push.
- **Keep this file updated.** Append to the Decision Log and Session Notes every
  session.

---

## 15. Decision Log

Chronological log of important decisions and **why**.

- **Single-page cinematic experience (not stacked pages).** The journey concept
  requires one continuous scroll; nav links jump to chapters. Matches the
  sketches and gives a premium feel.
- **Stack: React + Vite + Motion.dev.** Component model, fast dev/build, and a
  real animation engine for the custom scroll — the right tools for this kind of
  experience (and strong for the developer's portfolio).
- **CSS custom properties for all design tokens.** One place to control the
  neon/glass system; keeps the UI consistent and themeable.
- **Fonts: Anton + Space Grotesk + Space Mono.** Cinematic display, readable
  body, technical labels — fits the futuristic tone. (Departs from the
  portfolio's Syne for a more monumental hero.)
- **Calendar is data-driven from `events.json`, shaped like future DB rows.** So
  the later Supabase swap touches only the data source, not the UI.
- **Admin via Supabase (auth + DB) behind a hidden `/admin` route.** Satisfies
  the owner-editable-events requirement while keeping the site essentially
  static, with no server to maintain and a free tier suited to a nonprofit.
- **Stub Mission/Impact/CTA from the start.** Locks in the final page structure
  so Phase 4 motion can wrap each chapter cleanly.
- **Sections are full-height and self-contained.** Enables 1:1 motion wrapping
  for the dissolve transitions.
- **Phase 2: one persistent background video (not per-chapter footage).** The
  client clarified they want the **same** video throughout. This also reads
  truer to "video always playing" and simplified the component significantly
  (removed IntersectionObserver/crossfade machinery).
- **Graceful video fallback to the gradient placeholder.** The site never looks
  broken when footage is missing; footage can be added later with zero code
  changes.
- **Git: commit per phase, `node_modules`/`dist` ignored.** Clean, reversible
  history; standard hygiene.
- **Plan to add Lenis for smooth scrolling.** Native scroll is too abrupt for
  the intended cinematic motion.
- **Rebuilt Phase 2 with an explicit `ScrollFilm` overlay component.** Instead of relying on a CSS vignette alone, Phase 2 ships a dedicated `ScrollFilm` component: a fixed black div (z-1) whose opacity is scroll-driven from 0 → 0.82 over the first 300 px of scroll. This makes the dark-film effect tunable from one place, fully component-scoped, and easy to extend (e.g. per-section opacity caps in Phase 4).
- **RAF scroll handling in `ScrollFilm`.** The scroll listener uses `requestAnimationFrame` and writes directly to the DOM via a ref — zero React state updates in the scroll hot path. This is the correct pattern for scroll-synced CSS values and keeps the experience jank-free.
- **Client-provided footage.** `Swinging.mov` (HEVC, 1440×1080, 36 s) was supplied and converted to H.264 MP4 using ffmpeg (`-crf 23`, `-an`, `-movflags +faststart`). Output ~11.6 MB, web-safe, streams from the first byte.
- **`public/videos/` enforced lowercase.** macOS is case-insensitive but Linux (production servers, CI) is not. Renamed `Videos/` → `videos/` to prevent 404s on any non-macOS host.
- **GitHub Actions for deployment (not branch-based Pages).** Branch-based GitHub Pages serves raw source files — Vite apps need a build step first. The `.github/workflows/deploy.yml` workflow runs `npm ci` + `npm run build` and uploads `dist/` to Pages on every push to `main`. This is the required pattern for any React/Vite project on GitHub Pages.
- **`vite.config.js` base set to `/manganni-salvaticus/`.** Without this, Vite generates absolute paths (`/assets/...`) that 404 on GitHub Pages where the app lives in a subdirectory. The `base` option rewrites all asset URLs at build time.
- **Video src uses `import.meta.env.BASE_URL`.** A hardcoded `/videos/background.mp4` path works locally (served from `/`) but 404s on GitHub Pages (served from `/manganni-salvaticus/`). Using `\`${import.meta.env.BASE_URL}videos/background.mp4\`` resolves correctly in both environments with no extra config. Apply this pattern to all future `public/` asset references.
- **Hosting target confirmed: GitHub Pages.** Free, integrated with the existing repo, sufficient for all planned phases. Custom domain can be added later via the Pages settings.

---

## 16. Open Questions

Items needing client clarification:

- **Exact mission statement / approved copy** for hero subtitle, mission, and
  impact sections.
- **Real background footage** — will the client provide original jungle footage,
  or should we proceed with licensed stock as a placeholder/permanent?
- **Sponsor list** — actual sponsor names/logos for the conveyors.
- **Calendar event source of truth** — confirm Supabase + owner-managed admin is
  approved; who will be the admin user(s)?
- **CTA destinations** — where do Volunteer and Donate lead (external platforms,
  forms, payment processor)?
- ~~**Hosting target**~~ — **Resolved: GitHub Pages** (`jk-nick.github.io/manganni-salvaticus`), deployed via GitHub Actions workflow. Custom domain TBD.
- **Domain name** for the live site.
- **Real content** for Meet The Team, Veterans Programs, About Us,
  Vision/Future, and Impact stats.
- **Logo asset** — is there a finalized logo/wordmark?

---

## 17. Session Notes

Append a new entry after each work session using this template.

```md
### Session — YYYY-MM-DD
**Summary:**
**Changes Made:**
**New Decisions:**
**Files Modified:**
**Outstanding Tasks:**
**Next Session Goals:**
```

---

### Session — 2026-06-09 (Phase 1)
- **Summary:** Reviewed the client spec, confirmed the cinematic single-page
  vision, scaffolded the project, and built the full Phase 1 layout.
- **Changes Made:** Vite+React scaffold; design tokens; Navbar, Hero, Calendar
  (data-driven), Categories; stubbed Mission/Impact/CTA; sponsor rail
  placeholders; README with roadmap.
- **New Decisions:** Single-page experience; React+Vite+Motion.dev; token
  system; font choices; data-driven calendar; Supabase/admin plan; stubbing
  strategy.
- **Files Modified:** entire initial project.
- **Outstanding Tasks:** add footage; Phases 2–6.
- **Next Session Goals:** Phase 2 video system.

### Session — 2026-06-09 (Phase 2 + setup)
- **Summary:** Built the persistent video background system; set up Node/npm,
  ran the dev server, created the GitHub repo, and pushed the project.
- **Changes Made:** `VideoLayer` component + `videos.js` config; CSS for video
  layer; initially per-chapter footage, then **revised to one persistent
  video** per client preference; `public/videos/` drop folder + instructions;
  README roadmap updated.
- **New Decisions:** One continuous background video (not per-section); graceful
  fallback to gradient; commit-per-phase Git workflow.
- **Files Modified:** `App.jsx`, `index.css`, `components/VideoLayer.jsx`,
  `data/videos.js`, `public/videos/README.md`, `README.md`.
- **Outstanding Tasks:** add real/stock footage; Phase 3 conveyors.
- **Next Session Goals:** migrate to a Claude Project with this file as the
  knowledge base; then build Phase 3.

### Session — 2026-06-27 (Phase 2 fresh start)
- **Summary:** Rebuilt Phase 2 from scratch with a cleaner two-component video architecture. Client supplied actual background footage (`Swinging.mov`), which was converted to a web-compatible H.264 MP4. Fixed a broken `App.jsx` (duplicate export), established the z-stack pattern, and confirmed the dev server working at localhost:5173 with the video live as a full-screen background.
- **Changes Made:** Rewrote `VideoLayer.jsx` (fixed, full-viewport, z-0, reduced-motion aware); added new `ScrollFilm.jsx` (scroll-driven black overlay, z-1, opacity 0 → 0.82 over 300 px, RAF-based, no React state in scroll hot path); fixed `App.jsx` (removed duplicate `export default`, removed invalid inline JSX comment, established VideoLayer → ScrollFilm → content z-stack); converted `Swinging.mov` → `public/videos/background.mp4` (H.264, no audio, `+faststart` via ffmpeg); renamed `public/Videos/` → `public/videos/` (case-sensitivity fix for Linux servers).
- **New Decisions:** `ScrollFilm` as explicit overlay (cleaner than CSS vignette alone); RAF + direct DOM mutation for scroll handler (no re-renders); lowercase `public/videos/` enforced for production compatibility.
- **Files Modified:** `src/components/VideoLayer.jsx` (rewritten), `src/components/ScrollFilm.jsx` (new), `src/App.jsx` (fixed), `public/videos/background.mp4` (new).
- **Outstanding Tasks:** Phase 3 sponsor conveyor animation; commit Phase 2 to GitHub.
- **Next Session Goals:** Phase 3 — build infinite vertical sponsor rail loops (left rail drifts up, right drifts down).

### Session — 2026-06-27 (Deployment)
- **Summary:** Got the site live on GitHub Pages. The branch-based deploy was serving raw source files (blank page). Fixed by adding a GitHub Actions build workflow, setting Vite's base path for the subdirectory, and switching the video src to use `import.meta.env.BASE_URL`. Also walked through the full git commit/push/sync workflow for the first time.
- **Changes Made:** Added `.github/workflows/deploy.yml` (Actions: checkout → Node 20 → `npm ci` → `npm run build` → upload `dist/` → deploy to Pages); added `base: '/manganni-salvaticus/'` to `vite.config.js`; updated `App.jsx` video src to `\`${import.meta.env.BASE_URL}videos/background.mp4\``; switched GitHub Pages source from "Deploy from a branch" to "GitHub Actions" in repo Settings → Pages.
- **New Decisions:** GitHub Pages as hosting target (confirmed); GitHub Actions build+deploy pattern; `import.meta.env.BASE_URL` for all `public/` asset paths.
- **Files Modified:** `.github/workflows/deploy.yml` (new), `vite.config.js` (base added), `src/App.jsx` (video path fix).
- **Outstanding Tasks:** Phase 3 sponsor conveyor animation.
- **Next Session Goals:** Phase 3 — infinite vertical sponsor rail loops (left up, right down). Upload `PROJECT_CONTEXT.md` at the start of the new chat.

---

## 18. Quick Reference

> A two-minute dashboard.

- **Project Vision:** A cinematic, immersive, single-page journey for the
  Manganni Salvaticus nonprofit — black/neon, persistent background video,
  sections that dissolve into and emerge from darkness. Story, not brochure.

- **Technology Stack:** React 18 · Vite 6 · Motion.dev (planned) · Lenis
  (planned) · React Icons (planned) · Supabase (planned, Phase 5).

- **Color Palette:** `--green #00FF66` · `--red #FF3030` · `--bg #050505` ·
  `--text #FFFFFF` · `--glass rgba(255,255,255,.05)`.

- **Fonts:** Anton (display) · Space Grotesk (body) · Space Mono (labels/data).

- **Current Progress:** Phases 1–2 fully complete and **live**. Site deployed at
  `https://jk-nick.github.io/manganni-salvaticus/` via GitHub Actions. Video
  background, ScrollFilm overlay, and full layout confirmed working in production.

- **Hosting:** GitHub Pages · deployed via `.github/workflows/deploy.yml` · auto-deploys on push to `main`.

- **Next Task:** Build **Phase 3 — sponsor conveyors** (infinite vertical loops,
  left rail drifts up, right rail drifts down). Start new chat, upload this file.

- **Development Priorities:** smoothness > flash · cinematic storytelling ·
  purposeful motion · polish > quantity · consistency · reduced-motion always.

- **Design Principles:** not a traditional nonprofit site · immersive & cinematic
  · motion as storytelling · every interaction intentional · premium over
  generic.

- **Client Goals:** tell the story immersively · showcase programs & events ·
  owner-editable calendar · visible sponsors · convert to volunteers/donors.

---

*End of PROJECT_CONTEXT.md — keep this document current.*
