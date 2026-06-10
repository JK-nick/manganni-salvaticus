# Manganni Salvaticus — Website

Story-driven, cinematic single-page experience. Black futuristic aesthetic,
neon green + red, persistent video background, scroll-as-journey.

## Run it

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build → dist/
```

## Stack

- React 18 + Vite 6
- Motion.dev (Framer Motion) — added in Phase 4
- Supabase (events DB + admin auth) — added in Phase 5

## Design tokens

All colors live as CSS custom properties in `src/index.css`:

| Token     | Value                  | Role            |
|-----------|------------------------|-----------------|
| `--green` | `#00FF66`              | Primary / neon  |
| `--red`   | `#FF3030`              | Secondary       |
| `--bg`    | `#050505`              | Near black      |
| `--text`  | `#FFFFFF`              | Text            |
| `--glass` | `rgba(255,255,255,.05)`| Glass panels    |

Type: **Anton** (display) · **Space Grotesk** (body) · **Space Mono** (labels/data).

## Phase roadmap

- [x] **Phase 1 — Layout.** Navbar, hero, calendar, categories. Sponsor rails
      and Mission/Impact/CTA stubbed so the page structure matches the final
      INDEX. No animations.
- [ ] **Phase 2 — Video background system.** Persistent `<video>` layer
      replaces `.video-placeholder` in `App.jsx`.
- [ ] **Phase 3 — Sponsor conveyors.** Infinite vertical loops (left up,
      right down) + mobile strip.
- [ ] **Phase 4 — Motion.dev transitions.** Dissolve/scale/blur scroll
      experience between story chapters; scroll-indicator pulse; hero glow
      animation.
- [ ] **Phase 5 — Interactive calendar.** Supabase events table + auth,
      hidden `/admin` route for the owner to add/edit/delete events,
      hover-expand days, slide-out event details.
- [ ] **Phase 6 — Performance.** Video compression, lazy loading, full
      mobile pass (nav menu), accessibility audit.

## Notes

- Events currently load from `src/data/events.json`, shaped exactly like the
  future Supabase rows — swapping the data source in Phase 5 won't touch the
  components.
- Each section is a full-height "chapter" wrapped in `.section`, so Phase 4's
  `AnimatePresence` transitions map onto them one-to-one.
- `prefers-reduced-motion` is already respected in the base CSS.
