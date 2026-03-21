---
name: tailor-resume-for-role
description: Tailor an existing resume to a specific job description while staying truthful, ATS-friendly, and recruiter-readable. Use when a user wants a role-specific resume rewrite, a preflight narrative plan, or a rationale mapping their experience to a target role.
---

# Tailor Resume For Role

Use this skill when the user has a base resume and a target job description and wants a stronger, role-specific version without fabrication.

## What to collect

Required:
- Target job description
- Base resume in text or Markdown

Optional:
- One supplemental resume variant when it adds clearly missing evidence
- Target seniority
- Location or remote preference
- Page limit
- Non-negotiables such as "do not rename titles"

If either required input is missing, ask only for the missing artifact.

When multiple base resumes are available, do not blend them freely. Choose one **primary** base resume that best matches the target role and use at most one **supplemental** resume only to pull in clearly missing, non-conflicting evidence. Preserve the primary resume's chronology, voice, and narrative spine.

## Default workflow

1. If the user has provided both the target job description and the base resume, start with a brief `Structure & Narrative Proposal` before rewriting.
2. Parse the job description for must-haves, outcomes, scope, seniority, stakeholders, and domain cues.
3. In the preflight proposal, explicitly flag any borderline or missing hard requirements under `Open Questions`, especially minimum years of experience, required domain depth, people-management scope, or required technical background.
4. If multiple resumes are provided, select one primary source resume before drafting. Use a second resume only as targeted support for missing evidence, and state that choice in the preflight proposal.
5. Audit the chosen resume against those signals and note clear strengths, partial matches, and gaps.
6. Choose a credible narrative that frontloads the most relevant experience without changing facts.
7. Rewrite bullets so they are impact-first, concise, and role-aligned.
8. Run a mandatory hidden QA pass before showing the result. Check for:
   - bullet overlap or repeated ideas
   - generic phrasing that could fit many PM roles
   - weak JD coverage on the top 3 must-have signals
   - unflagged hard-screen risks that should have appeared in preflight
   - overuse of less relevant projects or older experience
   - claims that feel stronger than the source evidence
9. Produce:
   - `Tailored Resume`
   - `Rationale`

If the user explicitly wants the final rewrite immediately, you may skip the preflight and note that assumption. Otherwise, default to the preflight proposal plus approval check before producing the final rewrite.

## Non-negotiables

- Never fabricate or inflate titles, employers, dates, metrics, tools, or scope.
- Preserve chronology and employment details.
- Paraphrase naturally instead of mirroring the job description.
- Keep formatting ATS-friendly: simple headings, bullets, no tables, no images.
- Use numbers only when they are supported by the provided material.
- Do not merge multiple resume variants into a hybrid narrative unless one primary source remains clearly dominant.

## Writing rules

- Lead bullets with action and outcome.
- Prioritize relevance over completeness.
- Keep tense consistent: past for prior roles, present for current role.
- Avoid `responsible for`, buzzword chains, and keyword stuffing.
- Keep summaries to 2-3 lines and skills truthful.
- Default to recruiter-friendly ordering for experienced candidates: Heading, Summary, Experience, Projects (if relevant), Core Skills, Education, Certifications (if relevant).
- Move `Core Skills` above `Experience` only when the candidate is junior, changing functions, or needs hard-skill keywords surfaced immediately.
- Favor one sharp narrative over comprehensive coverage. If a good bullet does not help the target role, cut or shorten it.
- For role-specific tailoring, optimize the top third of the resume first: summary, most recent role, and first 3-5 bullets should make the target fit obvious within 10 seconds.
- Remove or rewrite bullets that communicate materially the same idea, even if both are individually strong.

## Output contract

When using the interactive flow, follow the structure in [./assets/templates/structure_check_template.md](./assets/templates/structure_check_template.md).

Final output should contain exactly these sections:
- `Tailored Resume`
- `Rationale`

Do not expose the hidden QA checklist unless the user asks how the resume was evaluated.

Use these packaged templates as needed:
- [./assets/templates/resume_template.md](./assets/templates/resume_template.md)
- [./assets/templates/rationale_template.md](./assets/templates/rationale_template.md)

If the user wants the final resume delivered as a `.docx` file, read `skills/docx/SKILL.md` before generating the document and follow its creation or editing workflow exactly.

## References

Read only what you need:
- [./references/workflow.md](./references/workflow.md) for the full decision process and quality checklist
- [./references/constraints.md](./references/constraints.md) for hard constraints, style rules, and failure modes
- [./references/examples.md](./references/examples.md) for narrative patterns and sample transformations
