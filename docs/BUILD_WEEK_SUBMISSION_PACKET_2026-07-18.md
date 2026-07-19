# Time-Capture-Club Build Week Submission Packet

Date: 2026-07-18  
Status: Submission prep / not final submitted copy

## Project Name

Time-Capture-Club

## Track

Work and Productivity

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

## What Was Built During Build Week

- Static HTML/CSS/JS prototype.
- Local draft persistence with `localStorage`.
- Release-loop navigation.
- Vision and structure capture.
- Change review form.
- Honest smoke-test states: PASS, FAIL, NOT VERIFIED, NOT APPLICABLE.
- Human release gate.
- Markdown receipt generation.
- Copy and download receipt actions.
- README and Codex build receipts.
- Demo script for under-three-minute video.

## How Codex Was Used

Codex helped translate the GREEN Build Week governance brief into a working static prototype. It created the app shell, JavaScript receipt generator, README, demo script, submission packet, build log entries, and timestamped review receipts.

The human operator retained the product judgment: scope, boundaries, release language, what not to build, and whether the work is true enough to submit.

## Current Local Run Path

`app/index.html`

No build step is required.

## Known Limitations

- No authentication.
- No database.
- No payments.
- No GitHub API integration.
- No automatic deploy verification.
- Draft state is stored in the browser only.
- Browser smoke test, GitHub repo setup, public hosting, and demo recording are still pending.

## Final Submission Checklist

- [ ] Browser smoke-test local app.
- [ ] Test sample data.
- [ ] Test manual edits.
- [ ] Test smoke-test state changes.
- [ ] Test release gate.
- [ ] Test Markdown receipt generation.
- [ ] Test copy receipt.
- [ ] Test download `.md`.
- [ ] Initialize or connect GitHub repo.
- [ ] Push project.
- [ ] Host or otherwise provide demo-accessible artifact.
- [ ] Record under-three-minute demo video.
- [ ] Finalize submission description.
- [ ] Submit before deadline.

## Final Line

Professional work remembers how it became itself.
