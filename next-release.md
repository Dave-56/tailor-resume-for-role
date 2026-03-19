# Next Release Plan

This document tracks enhancements planned for the next release.

## High-Impact Additions
- CLI/SDK to run locally (reads JD/resume files, applies SYSTEM_PROMPT.md, writes outputs to `output/`).
- Config options: tone, regional spelling (US/UK), page length, target seniority.
- Role-specific templates: PM (platform, growth), Support/Success, Engineering, Design.
- “Gap management” hints for cover letters and interview positioning.
- Optional anonymization: remove name, location, and demographic proxies for unbiased screening.

## Quality & Validation
- Validators to check: ATS headings present, no tables/images, bullet length and structure, tense consistency.
- Guardrails to detect obvious fabrication (titles, unseen tools, metrics not in base resume).
- CI pipeline (GitHub Actions): lint markdown, run validators, verify examples build.

## Documentation & Examples
- More examples across domains and seniorities (IC, Lead/Manager).
- Output gallery with before/after comparisons and rationale.
- Troubleshooting guide (common pitfalls and how to fix them).

## Tooling & Packaging
- GitHub Action for batch tailoring (JD+resume inputs → PR with outputs).
- Containerized runner (minimal image) for reproducibility.
- Optional minimal web UI for local use.

## Tracking
- Convert these into GitHub issues and a milestone once ready.
