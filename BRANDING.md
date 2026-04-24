# Kairovo — Branding & Design System

Brand and visual design reference for the Kairovo suite.
Last updated: 2026-04-24

---

## Studio identity

**Name:** Kairovo
**Tagline:** Software built for the music room.
**Owner:** Derek Hill, Auckland NZ
**Voice:** Quiet, professional, unhurried. Names the thing, says what
happened, moves on. No exclamation marks, no "awesome", no emoji.

**The mark:** Near-black rounded square, italic Instrument Serif "K"
in warm off-white. A publisher's mark, not a tech logo.
- Background: `#1A1A18`
- Letter: `#F5F1E8`
- Radius: ~23% of edge length
- Font: Instrument Serif italic

---

## Suite palette — LOCKED 2026-04-24

Four apps, four distinct colours. Settled after Claude Design session.

| App | Name | Hex | Character |
|---|---|---|---|
| ScoreSifter | Teal | `#1D9E75` | Utility, done, resolved |
| Recital Atlas | Wine | `#7A3A46` | Performance, culture, warmth |
| AriaDesk | Slate | `#3D5A6C` | Professional, clinical, organised |
| Vocemetry | Violet | `#4A1A8F` | Technical, scientific, precise |

### Why this palette works
- Four completely distinct colours with no visual conflict
- Each communicates the right personality for its app
- Teal = completion (ScoreSifter uses it as "the colour of done")
- Wine = recital/performance culture (warmer than the old navy)
- Slate = professional CRM (calm, serious, teacher-facing)
- Violet = technical audio analysis (scientific, precise)

### Previous palette (retired)
- RecitalAtlas was navy `#1A3F8F` — changed to wine April 2026
- AriaDesk was amber `#B85C1A` — changed to slate April 2026

---

## Per-app colour scales

### ScoreSifter — Teal
```
--ss-900: #062E22
--ss-800: #0D6E4A
--ss-700: #1D9E75   ← primary brand
--ss-600: #2DCE96
--ss-500: #5DCAA5
--ss-400: #A0FFE0
--ss-300: #9FE1CB
--ss-200: #D6F0E5
--ss-100: #EEF8F4
--ss-50:  #F5FBF8
```

### Recital Atlas — Wine
```
--ra-900: #3D1A20
--ra-800: #612E38
--ra-700: #7A3A46   ← primary brand
--ra-600: #9A5A66
--ra-500: #C4788A
--ra-400: #D9A0AC
--ra-300: #ECC4CC
--ra-200: #F5DDE2
--ra-100: #FBF0F2
--ra-50:  #FDF7F8
```
Dark mode accent: `#C4788A` (--ra-500, sufficient contrast on #1C1C1C)

### AriaDesk — Slate
```
--ad-900: #0F1E26
--ad-800: #1E3D50
--ad-700: #3D5A6C   ← primary brand
--ad-600: #5A7A8C
--ad-500: #7A9AAC
--ad-400: #A0BCC8
--ad-300: #C0D4DC
--ad-200: #DDE8EC
--ad-100: #EEF3F5
--ad-50:  #F5F8FA
```

### Vocemetry — Violet
```
--vm-900: #120828
--vm-800: #3A0878
--vm-700: #4A1A8F   ← primary brand
--vm-600: #A855F7
--vm-500: #7F77DD
--vm-400: #D4A0FF
--vm-300: #CECBF6
--vm-200: #E1DEFA
--vm-100: #EEEDFE
--vm-50:  #F7F6FE
```

---

## Typography

### App typography (desktop apps — Tauri)
| Role | Font | Notes |
|---|---|---|
| Display / wordmark | Instrument Serif | Bundled locally in each app |
| UI / body | Geist | Bundled locally in each app |
| Weights | 400 regular, 500 medium | No other weights |

### Website typography (v2 direction)
| Role | Font | Notes |
|---|---|---|
| Display / headings | Inter Tight | Google Fonts CDN |
| Labels / eyebrows / code | JetBrains Mono | Google Fonts CDN |
| Body | Inter Tight | Same as display |

The website uses a different stack from the apps deliberately — Inter Tight
gives the marketing sites a more editorial, Swiss feel appropriate for a
professional studio. Instrument Serif appears only in the Kairovo wordmark
and app icons on the marketing sites.

---

## Website design system (v2)

Established in Claude Design session, April 2026.
Reference files: `kairovo v2/` folder (Desktop).

### Core values
- Hairline Swiss with warmth
- Warm paper background `#F4F0E6` — not white, not grey
- Zero border radius throughout (`--radius: 0px`)
- Hairline borders (`1px solid var(--rule-soft)`)
- JetBrains Mono for all technical labels, eyebrows, metadata
- Per-app accent via `data-app` attribute on `<html>` element

### Key tokens (kairovo-system.css)
```css
--paper:     #F4F0E6   /* page background */
--paper-2:   #ECE7DA   /* section tint */
--ink:       #1C1B18   /* primary text */
--ink-2:     #44433E   /* secondary text */
--ink-3:     #777569   /* tertiary / labels */
--ink-4:     #A5A298   /* hint / faint */
--rule:      #302E28   /* strong border */
--rule-soft: #CFC9BB   /* standard border */
--radius:    0px       /* no rounded corners */
```

### Per-app accent activation
```css
html[data-app="scoresifter"]  { --accent: #1D9E75; }
html[data-app="recitalatlas"] { --accent: #7A3A46; }
html[data-app="ariadesk"]     { --accent: #3D5A6C; }
html[data-app="vocemetry"]    { --accent: #4A1A8F; }
```

Note: the v2 reference files used different accent values for some apps.
The values above are the SETTLED palette — use these, not the reference files.

---

## App icon system

Icons use the Kairovo corner-mark system: rounded square with app-specific
gradient background, italic Instrument Serif letter, small "K" corner mark.

Implemented as a React component: `design-system/app-icon.jsx`
Usage: `<KairovoAppIcon app="ss" size={200} />`

App codes: `ra` (Recital Atlas), `ss` (ScoreSifter), `ad` (AriaDesk), `vm` (Vocemetry)

---

## Design kit reference files

Stored in `~/Dev/kairovo-websites/design-system/` and on Desktop.

| File | Purpose |
|---|---|
| tokens.css | v1 system tokens — full --k-*, --ss-*, --ra-*, --ad-*, --vm-* scales |
| kairovo-system.css | v2 system — hairline Swiss tokens + per-app accents |
| components.css | v1 shared components |
| kit-pages.css | v1 kit page layouts |
| app-icon.jsx | App icon React component |

Claude Design session outputs (Desktop/kairovo v2/):
- `Kairovo v2.html` — studio homepage mockup
- `Site - Recital Atlas.html` — RA site mockup
- `Site - ScoreSifter.html` — ScoreSifter site (rename demo widget — keep this)
- `Site - AriaDesk.html` — AriaDesk site mockup
- `Site - Vocemetry.html` — Vocemetry site mockup

**Important:** The v2 reference files used old/wrong accent colours for
some apps. Always use the settled palette in this document, not the
reference file colours.

---

## What to avoid

Following the Kairovo voice guide:
- No "revolutionise your workflow"
- No "awesome tools for creators"
- No exclamation marks in marketing copy
- No emoji in UI or copy
- No gradients
- No rounded corners on the websites (zero radius is the v2 direction)
- No SaaS dashboard aesthetics
- No mandatory-cloud messaging

---

## Decisions log

| Date | Decision |
|---|---|
| 2026-04-24 | Suite palette settled: teal/wine/slate/violet |
| 2026-04-24 | RecitalAtlas colour changed from navy (#1A3F8F) to wine (#7A3A46) |
| 2026-04-24 | AriaDesk colour changed from amber (#B85C1A) to slate (#3D5A6C) |
| 2026-04-24 | Website direction: v2 hairline Swiss (Inter Tight + JetBrains Mono) |
| 2026-04-24 | All websites to be rebuilt from scratch using v2 system |
| 2026-04-24 | kairovo-websites monorepo created at github.com/7gill/kairovo-websites |
