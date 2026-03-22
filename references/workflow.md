# Workflow Reference

Use this reference when you need the full reasoning flow for a resume-tailoring task.

## Inputs

- `job_description`: Full target role text, usually pasted by the user
- `base_resume`: Candidate resume as pasted text, uploaded `.docx`, or file path
- `supplemental_resume` (optional): a second resume variant used only for clearly missing evidence
- `preferences` (optional): target seniority, location, page limit, output format, constraints, `skip_preflight`

## Internal Pipeline

The skill should feel like one coach to the user, but internally it should use this pipeline:

1. `Intake`
2. `Preflight Analyzer`
3. `Gap Recovery`
4. `Draft Builder`
5. `Micro-QA Layer`
6. `Controller QA`

The user should not see this pipeline directly. The internal modules exist to improve quality, not to create a more complicated conversation.

## Step 0: Preflight Check-In

If both the job description and the base resume are available, begin with a short `Structure & Narrative Proposal` covering:
- A short `Coach's Read`
- Positioning for the role
- Key strengths, partial matches, and gaps
- Proposed rewrite approach
- Section order
- Emphasis and de-emphasis
- Tone
- Page limit
- Risk flags or open questions

The `Coach's Read` should help the user understand the role without needing to decode the full job description alone.

Include:
- overall fit, such as `strong`, `medium`, or `stretch`
- a simple fit score, for example `7/10`
- whether any gap looks like a likely hard stop, a real but manageable risk, or just an interview topic
- the biggest real risk
- what is probably fine
- the best application strategy

The `Open Questions` section should explicitly surface borderline hard-screen items before drafting, such as:
- minimum years of required experience
- required domain depth
- required people-management scope
- required technical background or degree signals

If multiple resumes are available, the preflight must also state:
- which resume is the **primary** source
- whether a second resume will be used as a narrow supplement
- why the primary source is the better narrative fit for the role

Wait for approval before drafting the final resume unless the user asks to skip or clearly wants the final rewrite immediately.

Treat `skip_preflight` as `no` when omitted. If the user explicitly sets `skip_preflight: yes`, you may draft immediately and should note that preflight was skipped by request.

If preflight finds a `borderline` or `does not meet` hard requirement, ask up to 3 short follow-up questions before drafting unless `skip_preflight: yes`. Use simple, everyday English and include examples when helpful to jog the user's memory.

Before the questions, briefly say why you are asking them.

Example:
- "I’m asking these so I can turn this into stronger resume bullets with clear impact."

Good memory-jogger question patterns:
- "Have you done anything like this, even if it had a different name at your company?"
- "Did you ever help set this up, improve it, or document it for other teams?"
- "Have you worked with customers, vendors, or partners in a way that shaped this area?"

Examples:
- Instead of asking "Do you have SDK experience?", ask "Have you ever built or shaped internal tools, templates, docs, or reusable patterns that helped engineers move faster, even if it was not called an SDK?"
- Instead of asking "Do you have ecosystem experience?", ask "Did you work with outside partners, vendors, customers, or field teams who influenced which integrations got built or fixed first?"
- Instead of asking "Do you meet the years requirement?", ask "Before your current PM role, did you do PM-like work such as setting priorities, writing requirements, or driving technical decisions?"

Only ask questions that could materially improve the resume truthfully. Keep the list short and focused.
Do not repeat the same follow-up block.

If the user gives relevant experience but the impact still sounds vague or task-based, ask 1 short impact follow-up before drafting.

Briefly say why you are asking, for example:
- "I’m asking this so the final bullets show impact, not just responsibilities."

Good impact follow-up patterns:
- "What changed because of that?"
- "Did it make onboarding faster, reduce confusion, cut repeat issues, or help teams self-serve?"
- "Even if you do not have numbers, what was the real result for users, partners, or internal teams?"

If there is no hard metric, use qualitative impact honestly instead of forcing numbers.

Good qualitative impact examples:
- "made onboarding easier for partner teams"
- "reduced confusion during setup"
- "helped engineers self-serve common workflows"
- "unblocked deployments faster"
- "surfaced recurring issues that informed product improvements"

## Step 1: JD Decomposition

Extract:
- Must-haves and nice-to-haves
- Outcomes the role owns
- Scope and level signals
- Domain, industry, and stakeholder cues
- Anti-signals, such as requirements the candidate clearly does not show yet

Build an ideal-candidate profile from those signals.

Also classify each hard requirement as:
- `meets`
- `borderline`
- `does not meet`

If any hard requirement is `borderline` or `does not meet`, it should be called out in preflight under `Open Questions` or `Risk Flags`, not saved only for the final rationale.

## Step 2: Resume Audit

If multiple resumes are provided, first choose a primary source resume:
- Prefer the version whose summary, recent experience, and strongest bullets already align most closely with the target role
- Use at most one supplemental resume to fill specific gaps such as domain exposure, metrics, or one missing project
- Do not average or blend narratives across multiple resumes

Map each role, project, and bullet to the target signals:
- `match`
- `partial`
- `gap`

Also identify:
- Weak bullets with vague verbs or no outcome
- Hidden strengths such as scale, metrics, stakeholder complexity, or cross-functional work
- Facts that should be preserved exactly because they create credibility

## Step 3: Narrative Choice

Choose one coherent positioning angle, for example:
- Growth PM instead of generic PM
- Support-ops-heavy success profile instead of people-manager framing

Then:
- Frontload the most relevant evidence
- Downplay unrelated noise without deleting the career story
- Keep skills aligned and truthful
- Decide how to handle real gaps in a credible way

## Step 4: Rewrite

Preferred bullet shape:
- Strong verb
- What changed or was improved
- Measurable or specific qualitative outcome
- Relevant context, scale, tooling, or stakeholders

Aim for concise, recruiter-readable bullets that prove role fit quickly.

When deciding what to keep:
- Prioritize the top 3-5 bullets from the current role that best match the target JD
- Drop or compress bullets that repeat the same theme
- Keep only the projects that materially strengthen the target narrative
- If two bullets are both strong but overlapping, keep the one with better JD coverage or clearer outcome

## Step 5: Assemble the Resume

Expected sections:
- Heading
- Summary
- Experience
- Projects, if relevant
- Core Skills
- Education
- Certifications, if relevant

Ordering guidance:
- For experienced candidates, default to `Summary -> Experience -> Projects (if relevant) -> Core Skills -> Education`.
- Move `Core Skills` above `Experience` only when early-career context, career transition, or ATS keyword visibility clearly justifies it.

Default page guidance:
- 1 page for early or mid-career candidates
- Up to 2 pages when scope or seniority clearly justifies it

## Step 6: Add Rationale

Include:
- Coverage map from JD requirements to resume evidence
- Major narrative choices and trade-offs
- Remaining gaps
- Risk flags to review before use

## Step 7: Micro-QA Layer

Run these internal QA checks after drafting. Each QA should have a narrow contract.

### Fit QA

Checks:
- Is the target role obvious within a 10-second scan?
- Are the top 3 JD requirements clearly covered?
- Does any missing requirement look like a likely hard stop, a manageable risk, or just an interview topic?
- Were borderline minimum requirements surfaced in preflight and handled honestly?
- Produce an internal fit assessment:
  - overall fit label, such as `strong`, `medium`, or `stretch`
  - simple fit score, for example `7/10`
  - short reason for the score

### Evidence QA

Checks:
- Does every strong claim remain anchored to the source material?
- Are metrics, scope, and tools supported?
- Did the draft bridge gaps honestly instead of inflating them?
- Did preflight recover missing evidence before labeling something a gap?

### Editorial QA

Checks:
- Is there one coherent story?
- Do any bullets repeat the same point with slightly different wording?
- Is any section taking up space without improving fit?
- Are lower-value sections or bullets still present just because they are good, even if they are not helping this role?

### Page QA

Checks:
- Is the top half doing enough work?
- Is the resume disciplined for the target page length?
- If space is tight, what should be cut first?
- Should projects or other lower-signal sections be removed before compressing core experience?

Micro-QAs should propose findings only. They should not talk to the user directly, revise the draft on their own, or invent separate user-facing scoring systems.

## Step 8: Controller QA

Run a controller after the micro-QAs.

The controller should:
- collect the findings
- resolve conflicts
- rank the issues by importance
- decide whether the draft needs revision
- decide whether one more clarification question is truly needed
- decide what should be surfaced to the user

The controller should always surface a fit read to the user.
- The fit read comes from `Fit QA`.
- The controller decides the final wording, but it should always include:
  - overall fit
  - simple fit score
  - short reason

The controller is the only layer allowed to decide whether to revise the draft, ask one more question, or return the result.

Internally, the controller should think in terms of:
- `decision`
- `priority_issues`
- `draft_changes`
- `user_surface`

The controller should keep the external experience clean: one coach, one response, no leaking internal module names into the user-facing message.

## Quality Checklist

Before finalizing, verify:
- The role fit is obvious within a 10-second scan
- Must-have keywords appear naturally
- No claims exceed the source material
- Bullets are concise, consistent, and outcome-oriented
- Remaining gaps are acknowledged instead of hidden
- Borderline minimum requirements were surfaced before drafting, not hidden until the rationale
- One primary source narrative remains intact when multiple resumes were provided
- No meaningful bullet overlap remains
