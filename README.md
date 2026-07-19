# Time-Capture-Club

Time-Capture-Club preserves the invisible history of meaningful work.

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

## How Codex Was Used

Codex helped implement the static prototype from a governed build checklist. The human operator retained responsibility for scope, product decisions, release gate language, smoke-test states, and final submission judgment.

## What Was Built During Build Week

- Static Time-Capture-Club prototype.
- One complete release loop.
- Honest smoke-test states.
- Human release gate.
- Portable Markdown release receipt generation.
- Codex build log and timestamped receipts.

## Known Limitations

- No authentication.
- No database.
- No payments.
- No full GitHub API integration.
- No automatic deployment.
- Local draft data is stored in the browser only.
- GitHub repo, public hosting, browser smoke test, and demo video still need to be completed before submission.

## Submission Track

Work and Productivity.
