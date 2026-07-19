# Time-Capture-Club Build Week Submission Packet

Date: 2026-07-19  
Status: Submission prep / not final submitted copy

## Project Name

Time-Capture-Club

## Track

Work and Productivity

## Repository

GitHub: https://github.com/finious/Time-Capture-Club

Branch: `main`

Latest verified local/GitHub commit: `a88019b Align Time-Capture-Club submission docs`

## One-Sentence Pitch

Time-Capture-Club preserves the invisible history of meaningful work by guiding a human through a release loop and generating a portable Markdown receipt.

## Short Description

Time-Capture-Club is a static Build Week prototype for creators and small teams who need work to remember how it became trustworthy. It captures the vision, structure, change review, smoke test, human release decision, release receipt, and return path for a piece of meaningful work.

The result is not another task dashboard. It is a governed release loop that keeps decisions, risks, unknowns, proof, and the next honest action visible.

## Problem

Modern tools preserve artifacts, but often lose the stewardship around the artifact:

- why the work changed
- where the source lives
- what was tested
- what failed
- what remains unknown
- who made the release decision
- where to return next

When that memory disappears, the human becomes the cache.

## Solution

Time-Capture-Club restores a lightweight stewardship layer:

1. Vision
2. Structure
3. Change Review
4. Smoke Test
5. Release Gate
6. Release Receipt
7. Return

The app generates a portable Markdown receipt so the release can travel outside the tool.

## Core CTA

Start a Release Loop

## Demo Promise

In under three minutes, a judge can watch a user start a release loop, load sample data, run through the gates, generate a Markdown receipt, and see how the invisible history of work becomes portable.

## Public Demo Route

Pending.

The smallest reliable judge-accessible route should serve the static app from:

`app/`

No build command is required.

## What Was Built During Build Week

- Static HTML/CSS/JS prototype.
- Local draft persistence with `localStorage`.
- Release-loop navigation.
- Vision and structure capture.
- Change review form.
- Honest smoke-test states: PASS, FAIL, NOT VERIFIED, NOT APPLICABLE.
- Human release gate.
- Markdown receipt generation.
- Copy fallback and prepared download link for receipt export.
- README and Codex build receipts.
- Demo script for under-three-minute video.
- Aircraft inspection report and smoke-test record.

## How Codex Was Used

Codex helped translate the GREEN Build Week governance brief into a working static prototype. It created the app shell, JavaScript receipt generator, README, demo script, submission packet, build log entries, and timestamped review receipts.

Codex also inspected the aircraft against the locked flight plan, smoke-tested the local demo path, patched refresh/export behavior, and recorded the known risks.

The human operator retained the product judgment: scope, boundaries, release language, what not to build, and whether the work is true enough to submit.

## Current Local Run Path

`app/index.html`

No build step is required.

## Current Smoke-Test Status

Local browser smoke test: **PASS WITH KNOWN LIMITATION**.

Verified locally:

- App loads.
- Seven-stage loop completes.
- Progress reaches `7/7 loop stages touched`.
- Required fields accept edits and persist.
- Refresh preserves saved loop state and release decision.
- Markdown receipt generates completely.
- Release decision appears accurately in the receipt.
- Clipboard-blocked fallback selects the full receipt text.
- Prepared download link appears after receipt generation.

## Known Limitations

- No authentication.
- No database.
- No payments.
- No GitHub API integration.
- No automatic deploy verification.
- Draft state is stored in the browser only.
- Public hosting is still pending.
- Demo video is still pending.
- Direct clipboard and download behavior may depend on browser permissions; visible fallback behavior is provided.

## Remaining Submission Blockers

- [ ] Create public or judge-accessible demo route.
- [ ] Smoke-test public route from clean browser tab.
- [ ] Run judge rehearsal under three minutes.
- [ ] Record demo video.
- [ ] Add Codex `/feedback` Session ID.
- [ ] Finalize Devpost submission fields.
- [ ] Submit before deadline.

## Completed Evidence

- [x] Local browser smoke-test app.
- [x] Test sample data.
- [x] Test manual edits.
- [x] Test smoke-test state changes.
- [x] Test release gate.
- [x] Test Markdown receipt generation.
- [x] Test copy fallback.
- [x] Prepare download link fallback.
- [x] Initialize/connect GitHub repo.
- [x] Push project.
- [x] File aircraft inspection report.
- [x] File timestamped Codex review receipts.

## Final Line

Professional work remembers how it became itself.
