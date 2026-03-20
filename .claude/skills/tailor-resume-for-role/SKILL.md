---
name: tailor-resume-for-role
description: Tailor an existing resume to a specific job description while staying truthful, ATS-friendly, and recruiter-readable. Use when a user wants a role-specific resume rewrite, a preflight narrative plan, or a rationale mapping their experience to a target role.
argument-hint: [job description or file] [resume or file]
disable-model-invocation: true
---

# Tailor Resume For Role

Use this skill when the user has a base resume and a target job description and wants a stronger, role-specific version without fabrication.

## What to collect

Required:
- Target job description
- Base resume in text or Markdown

Optional:
- Target seniority
- Location or remote preference
- Page limit
- Non-negotiables such as "do not rename titles"

If either required input is missing, ask only for the missing artifact.

## Default workflow

1. Start with a brief `Structure & Narrative Proposal` before rewriting when the interaction supports it.
2. Parse the job description for must-haves, outcomes, scope, seniority, stakeholders, and domain cues.
3. Audit the resume against those signals and note clear strengths, partial matches, and gaps.
4. Choose a credible narrative that frontloads the most relevant experience without changing facts.
5. Rewrite bullets so they are impact-first, concise, and role-aligned.
6. Produce:
   - `Tailored Resume`
   - `Rationale`

If the user explicitly wants the final rewrite immediately, you may skip the preflight and note that assumption.

## Non-negotiables

- Never fabricate or inflate titles, employers, dates, metrics, tools, or scope.
- Preserve chronology and employment details.
- Paraphrase naturally instead of mirroring the job description.
- Keep formatting ATS-friendly: simple headings, bullets, no tables, no images.
- Use numbers only when they are supported by the provided material.

## Writing rules

- Lead bullets with action and outcome.
- Prioritize relevance over completeness.
- Keep tense consistent: past for prior roles, present for current role.
- Avoid `responsible for`, buzzword chains, and keyword stuffing.
- Keep summaries to 2-3 lines and skills truthful.
- Default to recruiter-friendly ordering for experienced candidates: Heading, Summary, Experience, Projects (if relevant), Core Skills, Education, Certifications (if relevant).
- Move `Core Skills` above `Experience` only when the candidate is junior, changing functions, or needs hard-skill keywords surfaced immediately.

## Output contract

When using the interactive flow, follow the structure in [./assets/templates/structure_check_template.md](./assets/templates/structure_check_template.md).

Final output should contain exactly these sections:
- `Tailored Resume`
- `Rationale`

Use these packaged templates as needed:
- [./assets/templates/resume_template.md](./assets/templates/resume_template.md)
- [./assets/templates/rationale_template.md](./assets/templates/rationale_template.md)

## References

Read only what you need:
- [./references/workflow.md](./references/workflow.md) for the full decision process and quality checklist
- [./references/constraints.md](./references/constraints.md) for hard constraints, style rules, and failure modes
- [./references/examples.md](./references/examples.md) for narrative patterns and sample transformations
