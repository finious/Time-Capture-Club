# Time-Capture-Club Build Week Implementation Checklist

Date: 2026-07-18  
Status: Checklist gate / STAR review pending  
Source: `TIME_CAPTURE_CLUB_FOUNDING_HANDOFF_FOR_RAE_2026-07-17.md`

## Purpose

Define the smallest buildable Time-Capture-Club prototype before code begins.

This checklist is not a feature wishlist.

It exists to prove one complete loop:

**Vision → Structure → GitHub → Change Review → Smoke Test → Release Gate → Release Receipt → Return**

## Build Boundary

Build only the first complete loop.

Do not add:

- authentication
- payments
- database
- full GitHub API integration
- automatic deployment
- support for every host
- course platform features
- giant dashboard
- hidden AI magic
- extra doctrine screens
- unrelated site work

## Gate 1: Vision

The prototype must collect or display:

- site name
- purpose
- audience
- promise
- primary action
- live URL
- current condition

Pass condition:

The user can say what the project is, who it serves, what it promises, and what state it is currently in.

## Gate 2: Structure

The prototype must identify folder roles for:

- live source
- content
- assets
- documentation
- tests
- archive
- deploy-ready cargo

Pass condition:

Folder roles are visible and explainable. Exact names may vary, but roles may not remain ambiguous.

## Gate 3: GitHub

The prototype must represent:

- GitHub repository
- production branch
- local or working source
- host connection
- commit practice
- last known good commit

Pass condition:

The user can distinguish source folder, GitHub repo, branch, host connection, and last known good commit.

## Gate 4: Change Review

The prototype must show a human-readable change review that can include:

- files added
- files changed
- files removed
- risky paths
- routing changes
- form changes
- configuration changes
- change intent

Pass condition:

The user can understand what changed before approving release.

## Gate 5: Smoke Test

The prototype must use only honest test states:

- PASS
- FAIL
- NOT VERIFIED
- NOT APPLICABLE

The smoke test should cover:

- homepage
- mobile layout
- navigation
- primary action
- forms
- thank-you route
- internal links
- external links
- apex domain
- `www` redirect
- HTTPS
- metadata
- favicon
- placeholders
- deploy cargo
- intended commit vs live release

Pass condition:

The user can record what is proved, what failed, what was not checked, and what does not apply.

## Gate 6: Release Gate

The prototype must let the human choose:

- RELEASE APPROVED
- RELEASE BLOCKED
- RELEASE APPROVED WITH KNOWN RISKS

Pass condition:

Automation can provide evidence, but human judgment remains the release authority.

## Gate 7: Release Receipt

The prototype must generate or display a portable Markdown receipt with:

- project
- date
- commit
- change summary
- reason
- test results
- failures
- unknowns
- known risks
- live destination
- rollback point
- reviewer
- next action

Pass condition:

The release does not disappear into memory. The receipt can travel outside the app.

## Gate 8: Return

The prototype must end by showing:

- current status
- last verified release
- open risks
- recent receipts
- last known good commit
- next honest action

Pass condition:

The user is released from dashboard gravity and can return to the real work.

## Evidence Mode

The prototype may reference the three-site evidence set:

- `jimleyshon.com`
- `mywritingcompanion.ai`
- `mydecisionfactory.com`

These are evidence, not extra build targets.

Do not edit or inspect those sites during scaffold unless STAR explicitly opens that lane.

## STAR Review Questions

STAR should answer:

1. Does this checklist build one complete loop?
2. Does it protect human release judgment?
3. Does it avoid feature drift?
4. Does it keep GitHub as visible memory without requiring full API integration?
5. Does the release receipt contain enough proof to travel?
6. Does the return screen send the user back to meaningful work?
7. Is the prototype small enough to scaffold now?

## GREEN Condition

STAR may mark the checklist GREEN when:

- every loop stage is represented
- no disallowed feature is required
- release proof is portable
- human judgment is protected
- the next build action is one static prototype scaffold

## RED Condition

STAR should block scaffold if:

- the checklist requires hidden automation
- the dashboard becomes the product
- a feature outside the loop is required
- the release gate removes human judgment
- the receipt cannot travel
- site repair work is mixed into the prototype build

## Next Action

STAR reviews this checklist.

If GREEN, Jetty scaffolds only the approved static loop.

If RED, STAR names one correction.

## Stop Rule

No code before STAR review.

No feature expansion before the first complete loop exists.

## Final Line

Checklist first.

GREEN second.

Scaffold third.
