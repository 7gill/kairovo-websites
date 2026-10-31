# Kairovo — Websites

Operational reference for all Kairovo marketing sites.
Last updated: 2026-11-01 (the live 2026 sites). The April 2026 version is
in git history.

---

## Repo structure

```
kairovo-websites/
  kairovo.com/          — studio homepage (LIVE): index, privacy, terms, site.css, images/
  scoresifter.com/      — Score Sifter site (LIVE): index, how-it-works, guide,
                          privacy, terms, site.css, images/ (screenshots, demo.mp4, icons)
  recitalatlas.com/     — one-page placeholder
  ariadesk.com/         — one-page placeholder
  vocemetry.com/        — one-page placeholder

  design-system/        — shared CSS from the April v2 system (tokens.css,
                          kairovo-system.css, components.css, kit-pages.css,
                          scoresifter.css, app-icon.jsx); the placeholders
                          load kairovo-system.css from jsDelivr (@main)
  WEBSITES.md           — this file
  BRANDING.md           — design system and brand decisions
  STATUS.md             — where things stand (updated every session)
```

---

## Site status

| Site | Status |
|---|---|
| scoresifter.com | **Live** since the soft launch (2026-10-30): Score Sifter 2.0, free, Mac only. Email-gated download, how it works, guide, interactive demo (autoplays on phones too), privacy and terms |
| kairovo.com | **Live**, rebuilt 2026-10-30: the studio homepage, app cards (Score Sifter "FREE · MAC"), privacy and terms (wording approved 2026-10-29) |
| recitalatlas.com | Placeholder (2026-04-29); full site when the app is ready |
| ariadesk.com | Placeholder; waitlist page when the app is ready |
| vocemetry.com | Placeholder; build when the app is ready |

---

## Technology

All sites are static HTML. There's no framework, no build step and no npm.
- HTML, CSS and vanilla JS only.
- The live sites each carry their own `site.css`. The placeholders load
  `design-system/kairovo-system.css` through jsDelivr.
- No CMS, no database, no server. The one outside service is the
  Buttondown signup form on scoresifter.com (below).

---

## Design direction

See BRANDING.md for colour and typography.
- **The Kairovo mark** (Derek 2026-10-29): an EB Garamond Italic "K" on
  the bronze triangle. It's the logo and favicon on kairovo.com, and it
  sits beside "Part of Kairovo" in every scoresifter.com footer. The old K
  is gone.
- Both live sites carry the full icon set on every page, plus a real
  `/favicon.ico` (16, 32 and 48 px) and apple-touch icons.
- Copy rules: plain, calm, no exclamation marks (BRANDING.md).

---

## Score Sifter's download and email list

- **The download** is `https://downloads.scoresifter.com/ScoreSifter.dmg`,
  and it's always the newest version. It saves as
  `ScoreSifter-<version>.dmg`. The page says "the latest version" and
  names no number, so it needs no edit when a release ships.
- **The files** live in the Cloudflare R2 bucket `scoresifter-downloads`,
  on `downloads.scoresifter.com`. The bucket holds the versioned DMGs,
  `ScoreSifter.dmg` and the Sparkle update feed `appcast.xml`. They're
  served `cache-control: no-cache` (Cloudflare's Browser Cache TTL is set
  to "Respect Existing Headers").
- **Uploading** is not done from this repo. It's ScoreSifterMac's
  `scripts/publish.sh`, run only on Derek's go after `scripts/release.sh`.
  It uploads the DMG, then the same DMG as `ScoreSifter.dmg`, then the
  feed, and downloads each one again to compare it byte for byte (wrangler
  4.151.0, after Derek's `wrangler login`). The steps are in
  ScoreSifterMac's `docs/RELEASE_CHECKLIST.md`.
- **The email gate:** the form posts to Buttondown
  (`buttondown.com/api/emails/embed-subscribe/kairovo`). That's **one list
  shared by all Kairovo apps**. The download starts straight away, and
  Buttondown sends one confirmation email (double opt-in). Only an email
  address is asked for. The gate is a request, not a lock: the download
  link itself is public.

---

## Deployment — Cloudflare Pages

- The sites **deploy automatically from `main`** of `7gill/kairovo-websites`
  through Cloudflare Pages (Git-connected). Every branch gets a preview,
  e.g. `https://<branch>.scoresifter.pages.dev`.
- **`main` is what's live.** Every website change stays on a branch until
  Derek approves it:
  1. Branch and commit as "draft for Derek, not main".
  2. Preview from the branch's Pages address, or from a worktree on the
     scratch drive (`"/Volumes/1TB Music/scratch/kairovo-websites-preview/<branch>"`).
  3. Merge to `main` and push once Derek has seen it.
- Docs at the repo root (this file, BRANDING.md, STATUS.md) aren't part of
  any site's output.

---

## Domain registration

All domains are registered and managed separately. scoresifter.com's DNS
is in Cloudflare. Check the registrar for renewal dates.

---

## What to build next

1. **recitalatlas.com**: the full site when Recital Atlas is ready (Mac
   App Store).
2. **ariadesk.com**: a waitlist page, to test prices with teachers (Aria
   Desk's CONTEXT.md, "Open").
3. **vocemetry.com**: when the iPhone app is ready.
