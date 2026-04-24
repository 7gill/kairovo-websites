# Kairovo — Websites

Operational reference for all Kairovo marketing sites.
Last updated: 2026-04-24

---

## Repo structure

```
kairovo-websites/
  design-system/        — shared CSS and component files (see BRANDING.md)
    tokens.css          — Kairovo v1 design system tokens (--k-*, --ss-*, --ra-*, etc.)
    kairovo-system.css  — v2 design system (hairline Swiss direction)
    components.css      — shared Kairovo v1 components
    kit-pages.css       — kit page layout styles
    app-icon.jsx        — React component for app icons (used in kit pages)
    kairovo-logo.svg    — Kairovo K mark SVG

  kairovo.com/          — Studio homepage (blank — needs rebuilding in v2)
  recitalatlas.com/     — Recital Atlas marketing site (blank — needs rebuilding)
  scoresifter.com/      — ScoreSifter marketing site (blank — needs rebuilding)
  ariadesk.com/         — AriaDesk site (blank — build when app is ready)
  vocemetry/            — Vocemetry site (blank — build when app is ready)

  WEBSITES.md           — this file
  BRANDING.md           — design system and brand decisions
```

---

## Site status

| Site | Domain | Status | Priority |
|---|---|---|---|
| kairovo.com | kairovo.com | Needs rebuild in v2 | Medium |
| recitalatlas.com | recitalatlas.com | Needs rebuild in v2 | High — launching soon |
| scoresifter.com | scoresifter.com | Needs rebuild in v2 | High — beta imminent |
| ariadesk.com | ariadesk.com | Blank — build when app ready | Low |
| vocemetry | TBD | Blank — build when app ready | Low |

---

## Technology

All sites are static HTML — no framework, no build step, no npm.
- HTML + CSS + vanilla JS only
- Shared design system CSS loaded from `../design-system/`
- App icons rendered via `app-icon.jsx` (React, loaded via CDN for kit pages only)
- No CMS, no database, no server-side rendering

This keeps deployment trivial and the sites fast.

---

## Design direction

All sites use the **v2 design system** (kairovo-system.css):
- Font stack: Inter Tight (display) + JetBrains Mono (labels/code)
- Warm paper background: `#F4F0E6`
- Hairline borders, zero border radius
- Per-app accent colour via `data-app` attribute on `<html>`
- See BRANDING.md for full colour and typography decisions

Reference files from Claude Design session (April 2026):
- `Kairovo v2.html` — studio homepage mockup
- `Site - Recital Atlas.html` — RA site mockup
- `Site - ScoreSifter.html` — ScoreSifter site mockup (rename demo widget)
- `Site - AriaDesk.html` — AriaDesk site mockup
- `Site - Vocemetry.html` — Vocemetry site mockup

These are reference/inspiration only — text is placeholder and colours
need updating to the settled palette (see BRANDING.md). Use them as
structural and layout reference when building the real pages.

---

## Key pages per site

### kairovo.com
- Home — studio intro, four app cards, tagline
- Privacy policy

### recitalatlas.com
- Home — hero, features, screenshots, pricing/download
- Docs / guide
- Download
- Privacy policy

### scoresifter.com
- Home — rename demo widget hero, how it works, download
- Guide
- Privacy policy

### ariadesk.com / vocemetry
- Single page to start — hero + waitlist/notify when ready

---

## Deployment — Cloudflare Pages

Each site deploys from this repo via Cloudflare Pages with a subfolder
build configuration. Setup (when ready to deploy):

1. Go to Cloudflare Dashboard → Pages → Create a project
2. Connect to GitHub → select `7gill/kairovo-websites`
3. Set build configuration:
   - Build command: (none — static files)
   - Build output directory: `recitalatlas.com` (or whichever site)
   - Root directory: `/` (repo root)
4. Add custom domain
5. Deploy

Repeat for each site as a separate Cloudflare Pages project.

**Current deployment status:**
- recitalatlas.com — deployed via Cloudflare (old version, needs update)
- scoresifter.com — not yet deployed
- kairovo.com — not yet deployed

---

## Domain registration

All domains registered and managed separately.
Check registrar for renewal dates.

---

## What to build next

Priority order:
1. **scoresifter.com** — beta releasing soon, site needed for download link
2. **recitalatlas.com** — launching soon, existing site needs v2 rebuild
3. **kairovo.com** — studio homepage, lower urgency
4. **ariadesk.com / vocemetry** — when apps are ready
