# Status — Kairovo websites

_Updated 2026-11-01. Taken from the git log, the branches and worktrees,
and "Where things stand" in ScoreSifterMac's `docs/SWIFT_PORT_PLAN.md`.
`WEBSITES.md` is out of date: it was last updated 2026-04-24 and still
says "not yet deployed". Trust this file and the git log over it. Update
this file at the end of every session._

## Live
- **scoresifter.com**: the Score Sifter 2.0 soft launch, live from `main`.
  - The download is `downloads.scoresifter.com/ScoreSifter.dmg`, always
    the newest version. Since 2026-11-01 the page says "the latest
    version" and names no version number, so the text needs no edit per
    release.
  - It has the interactive demo, which autoplays on phones too, the full
    icon set and a real `/favicon.ico`.
- **kairovo.com**: rebuilt for the soft launch (2026-10-30). It has the
  studio mark (EB Garamond Italic K on the bronze triangle), Score Sifter's
  card "FREE · MAC", and the policy wording Derek approved 2026-10-29.
- **recitalatlas.com, ariadesk.com, vocemetry.com**: one-page placeholders
  since 2026-04-29.

## In progress
- Nothing. Every draft branch (`kairovo-2026`, `scoresifter-2.0`,
  `scoresifter-demo-cue`, `scoresifter-latest-download`) is merged into
  `main`.

## Waiting on Derek
- Nothing open in this repo.

## Queued
- recitalatlas.com, ariadesk.com and the Vocemetry site: built when each
  app is ready.
- `WEBSITES.md` needs bringing up to date (site status, deployment).

## Know first
- How a change goes in: draft on a branch, previewed from a worktree on
  the scratch drive (`/Volumes/1TB Music/scratch/kairovo-websites-preview/<branch>`,
  quoted). Commit it as "draft for Derek, not main". Merge to `main` only
  once Derek approves. `main` is what's live.
- The preview worktrees for the four merged branches still exist on the
  scratch drive. They're harmless, and can be removed when Derek says.
- Site design rules are in `BRANDING.md` and `design-system/`.
