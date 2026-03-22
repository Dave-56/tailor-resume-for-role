---
name: tailor-resume-for-role
description: Tailor an existing resume to a specific job description while staying truthful, ATS-friendly, and recruiter-readable. Use when a user wants a role-specific resume rewrite, a preflight narrative plan, or a rationale mapping their experience to a target role.
argument-hint: [pasted job description] [resume text, upload, or file]
disable-model-invocation: true
---

# Tailor Resume For Role

Use this skill when the user has a base resume and a target job description and wants a stronger, role-specific version without fabrication.

## User interaction contract

Keep the user input simple.

Required:
- `job_description`: pasted text
- `resume`: pasted text, uploaded `.docx`, or file path

Optional:
- `page_target`
- `output_format`
- `skip_preflight`: `yes` or `no`
- `mode: preflight`
- `non_negotiables`

Default behavior:
- If `job_description` and `resume` are present, return a brief `Structure & Narrative Proposal` first and wait for approval before drafting.
- Treat `skip_preflight` as `no` when omitted.
- In preflight, act like a coach, not just a scanner. Help the user understand how strong the fit is, what is a real risk, and what can be handled with better framing.
- If preflight finds a borderline or missing hard requirement, ask up to 3 short follow-up questions before drafting to help the user remember relevant experience.
- If the user shares relevant experience but the impact is still unclear, ask 1 short follow-up question about what changed or what the result was.
- When asking follow-up questions, briefly say why you are asking them.
- Do not repeat the same follow-up block.

Overrides:
- If `skip_preflight: yes`, draft the final rewrite immediately and note that preflight was skipped by request.
- If `mode: preflight`, return only the preflight proposal and stop.

Do not require the user to provide both `skip_preflight` and approval flags. This skill uses only `skip_preflight`.

## What to collect

Required:
- Target job description as pasted text
- Base resume as pasted text, uploaded `.docx`, or file path

Optional:
- One supplemental resume variant when it adds clearly missing evidence
- Target seniority
- Location or remote preference
- Page target
- Output format
- `skip_preflight`: `yes` or `no`
- `mode: preflight`
- Non-negotiables such as "do not rename titles"

If either required input is missing, ask only for the missing artifact.

When multiple base resumes are available, do not blend them freely. Choose one **primary** base resume that best matches the target role and use at most one **supplemental** resume only to pull in clearly missing, non-conflicting evidence. Preserve the primary resume's chronology, voice, and narrative spine.

## Internal architecture

Keep the user experience simple: one coach on the surface.

Internally, use this flow:
1. `Intake`
2. `Preflight Analyzer`
3. `Gap Recovery`
4. `Draft Builder`
5. `Micro-QA Layer`
6. `Controller QA`

Do not expose the internal pipeline to the user. The user should experience one clear coach-like interaction, not a chain of internal systems.

## Default workflow

1. If the user has provided both the target job description and the base resume, start with a brief `Structure & Narrative Proposal` before rewriting.
2. Wait for approval before drafting unless the user explicitly set `skip_preflight: yes`.
3. Parse the job description for must-haves, outcomes, scope, seniority, stakeholders, and domain cues.
4. In the preflight proposal, include a short `Coach's Read` in everyday English.
   - Include:
     - overall fit, such as `strong`, `medium`, or `stretch`
     - a simple fit score, for example `7/10`
     - whether any gap looks like a likely hard stop or just an interview topic
     - the biggest real risk
     - the best strategy for the application
   - The fit score should come from `Fit QA`, and the final wording shown to the user should be surfaced by `Controller QA`.
   - Do not make the user decode the job description alone. Tell them what matters.
5. In the preflight proposal, explicitly flag any borderline or missing hard requirements under `Open Questions`, especially minimum years of experience, required domain depth, people-management scope, or required technical background.
6. If preflight finds a borderline or missing hard requirement, ask up to 3 short, specific follow-up questions before drafting. Use everyday English. The goal is to help the user remember relevant experience they may have left out, not to push them into stretching the truth.
   - Briefly explain why you are asking, for example: "I’m asking these so I can turn this into stronger resume bullets with clear impact."
   - Good question style:
     - "Have you ever built or shaped internal tools, templates, or docs that helped engineers move faster, even if it was not called an SDK?"
     - "Did you work with outside partners, vendors, or customers who influenced what integrations got built first?"
     - "Before your current PM role, did you do PM-like work such as setting priorities, writing requirements, or driving technical decisions?"
   - Keep the questions concrete and easy to answer.
   - Ask only questions that could materially improve the resume truthfully.
   - Do not repeat the same question set twice.
7. If the user gives relevant experience but the impact still sounds like a task list, ask 1 short impact follow-up before drafting.
   - Good impact follow-up style:
     - "What changed because of that?"
     - "Did it make onboarding faster, reduce confusion, cut repeat issues, or help teams self-serve?"
     - "Even if you do not have numbers, what was the real result for users, partners, or internal teams?"
   - If the user has no metric, use honest qualitative impact instead of forcing numbers.
   - Good qualitative impact examples:
     - "made onboarding easier for partner teams"
     - "reduced confusion during setup"
     - "helped engineers self-serve common workflows"
     - "unblocked deployments faster"
     - "surfaced recurring issues that informed product improvements"
   - Briefly explain why you are asking, for example: "I’m asking this so the final bullets show impact, not just responsibilities."
8. If multiple resumes are provided, select one primary source resume before drafting. Use a second resume only as targeted support for missing evidence, and state that choice in the preflight proposal.
9. Audit the chosen resume against those signals and note clear strengths, partial matches, and gaps.
10. Choose a credible narrative that frontloads the most relevant experience without changing facts.
11. Rewrite bullets so they are impact-first, concise, and role-aligned.
12. Run the internal `Micro-QA Layer`. Each QA has one narrow job:
   - `Fit QA`: JD coverage, fit strength, likely hard stops, top-requirement coverage
   - `Evidence QA`: truthfulness, supportability, honest gap-bridging, metric support
   - `Editorial QA`: narrative tightness, redundancy, section value, whether any section is taking up space without helping
   - `Page QA`: top-half strength, cut order, page discipline, whether projects or lower-signal sections should be removed first
13. Run `Controller QA` after the micro-QAs.
   - The controller collects findings from the micro-QAs, resolves conflicts, decides what needs revision, and determines what should be surfaced to the user.
   - The controller should always surface a fit read to the user, including overall fit, a simple fit score, and a short reason.
   - Micro-QAs should propose findings only. They should not speak to the user directly, ask their own extra questions, or revise the draft on their own.
   - The controller is the only layer that can decide whether to:
     - revise the draft
     - ask one more clarification question
     - return the result to the user
   - Internally, the controller should think in terms of:
     - `decision`
     - `priority_issues`
     - `draft_changes`
     - `user_surface`
14. Produce:
   - `Tailored Resume`
   - `Rationale`

If the user explicitly sets `skip_preflight: yes`, you may skip the preflight and note that instruction. Otherwise, default to the preflight proposal plus approval check before producing the final rewrite.

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

If the user wants the final resume delivered as a `.docx` file, read [../docx/SKILL.md](../docx/SKILL.md) before generating the document and follow its creation or editing workflow exactly.

## References

Read only what you need:
- [./references/workflow.md](./references/workflow.md) for the full decision process and quality checklist
- [./references/constraints.md](./references/constraints.md) for hard constraints, style rules, and failure modes
- [./references/examples.md](./references/examples.md) for narrative patterns and sample transformations
