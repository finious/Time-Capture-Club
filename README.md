# Time-Capture-Club

Time-Capture-Club preserves the invisible history of meaningful work.

## Repository

GitHub: https://github.com/finious/Time-Capture-Club

Branch: `main`

Latest verified local/GitHub commit: `a88019b Align Time-Capture-Club submission docs`

## Problem

Most tools show the finished artifact. They do not preserve the decisions, corrections, tests, release judgment, risks, and return path that made the artifact trustworthy.

## Solution

Time-Capture-Club guides a human through one governed release loop:

Vision → Structure → Change Review → Smoke Test → Release Gate → Release Receipt → Return

The prototype generates a portable Markdown receipt so the work can be inspected, trusted, taught, and continued.

## Demo Flow

1. Start a Release Loop.
2. Capture the project vision.
3. Record the source, project home, governing file, responsible human, and last known good state.
4. Review what changed and what should not be touched.
5. Run an honest smoke test using only PASS, FAIL, NOT VERIFIED, and NOT APPLICABLE.
6. Make a human release decision.
7. Generate, copy, or download the Markdown release receipt.
8. Return to the next honest action.

## How To Run Locally

Open `app/index.html` in a browser.

No build step is required. The prototype uses static HTML, CSS, JavaScript, localStorage, and client-side Markdown export.

## Current Smoke-Test Status

Local browser smoke test: **PASS WITH KNOWN LIMITATION**.

Verified locally:

- App loads.
- A user can complete the full seven-stage loop.
- Progress reaches `7/7 loop stages touched`.
- Required fields accept edits and persist.
- Refresh preserves saved loop state and release decision.
- Markdown receipt generates completely.
- Release decision appears in the receipt.
- Clipboard-blocked fallback selects the full receipt text.
- Prepared download link appears after receipt generation.

Known limitation:

- Direct clipboard and download behavior may depend on browser permissions. The app provides visible fallback behavior for receipt export.

## Public Hosting Status

Public demo route: **pending**.

The repository is ready for a static public route. The intended deployable app lives in:

`app/`

No build command is required.

## Demo Video Status

Demo video: **pending**.

Do not record final submission video until the public route passes the judge rehearsal.

## How Codex Was Used

Codex helped implement the static prototype from a governed build checklist. The human operator retained responsibility for scope, product decisions, release gate language, smoke-test states, and final submission judgment.

Codex also helped inspect the prototype, patch refresh/export behavior, maintain the build log, and file timestamped review receipts.

## What Was Built During Build Week

- Static Time-Capture-Club prototype.
- One complete release loop.
- Honest smoke-test states.
- Human release gate.
- Portable Markdown release receipt generation.
- Codex build log and timestamped receipts.
- Aircraft inspection report and smoke-test record.

## Known Limitations

- No authentication.
- No database.
- No payments.
- No full GitHub API integration.
- No automatic deployment verification.
- Local draft data is stored in the browser only.
- Public hosting and demo video still need to be completed before submission.

## Submission Track

Work and Productivity.
