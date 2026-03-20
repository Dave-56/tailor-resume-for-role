# Skill: tailor_resume_for_role

## Purpose
Produce a role-tailored, ATS-aware, recruiter-friendly resume that maximizes credibility and relevance to a specific job description—without inventing or inflating experience.

## Target User
- Job seekers applying to specific roles.
- Career services tailoring for students/alumni.
- Recruiters aligning internal candidates to roles.

## Inputs
- Target Job Description (required): Full text (title, responsibilities, requirements).
- Base Resume (required): Plain text or Markdown (experience, projects, education).
- Optional Context:
  - Target seniority (e.g., IC3/IC4, Lead).
  - Location/remote preference.
  - Page limit and format preferences.
  - Non-negotiables (e.g., do not rename job titles).

## Outputs
- Structure & Narrative Proposal (interactive):
  - Concise plan for section order, positioning, emphasis, tone, page limit, and open questions to confirm before writing.
- Tailored Resume (Markdown/text):
  - Header, Role-aligned summary, Core skills, Experience (rewritten bullets), Projects (if relevant), Education, Certifications (optional).
- Rationale (Markdown/text):
  - Coverage map (JD requirements ↔ evidence bullets).
  - Narrative choices and trade-offs.
  - Remaining gaps and interview positioning notes.
  - Risk flags (e.g., ambiguous metrics, title alignment).
- Metadata:
  - Version info, date, role title used, page length.

## Workflow / Reasoning Steps
0. Preflight Check-In (interactive)
   - Draft a Structure & Narrative Proposal (see Outputs) and ask the user to approve or adjust. If approved or skipped, proceed.
1. Parse JD
   - Extract must-haves, nice-to-haves, responsibilities, outcomes, and level signals.
   - Identify domain/industry cues and anti-signals.
   - Build an ideal candidate profile (skills, scope, outcomes, stakeholders).
2. Audit Resume
   - Map each experience bullet to JD signals (match, partial, or gap).
   - Detect weak bullets (vague verbs, task-only, no outcome, irrelevant tools).
   - Surface hidden strengths (transferable achievements, scale, cross-functional work).
   - Gather verifiable metrics and context (team size, revenue, latency, NPS/churn).
3. Choose Narrative
   - Decide positioning (e.g., platform PM vs. growth PM; Support IC vs. CS Ops).
   - Prioritize experiences and reorder bullets to frontload relevance.
   - Decide core skills aligned to JD while strictly truthful.
   - Address gaps via adjacent experience without exaggeration.
4. Rewrite Bullets
   - Structure: Action → Outcome → Context (quantify when real).
   - Emphasize relevance to JD outcomes and scope.
   - Avoid keyword stuffing; use natural, role-appropriate wording.
   - Maintain factual accuracy; no invented tools, metrics, or titles.
5. Construct Resume
   - ATS-friendly layout: clean headings, no tables/graphics.
   - Role-aligned summary: 2–3 lines highlighting outcomes and scope.
   - Core skills: truthful and aligned; grouped by category.
   - Experience: strongest, most relevant bullets first.
   - Length targets: 1 page (early/mid), up to 2 pages if justified.
6. Output With Rationale
   - Coverage map of JD requirements to resume evidence.
   - Explain narrative choices and deliberate omissions.
   - Note remaining gaps and recommended interview positioning.

## Hard Constraints
- No fabrication or inflation: titles, dates, tools, metrics, scope.
- Preserve chronology and employment details.
- Quantify only when supported by the resume or known truth; otherwise qualitative.
- Avoid copying JD phrasing verbatim; paraphrase with substance.
- Maintain consistent voice, tense, punctuation, and capitalization.
- Ensure ATS compatibility: standard section headers, simple bullet formatting.

## Style Rules
- Bullets: strong verbs; avoid “responsible for”.
- Impact-first: outcome/scale before detail; concise context.
- Clarity: short, scannable lines; avoid buzzword chains.
- Relevance: lead with bullets that prove JD outcomes.
- Credibility: concrete numbers only when true; otherwise specific qualitative outcomes.
- Consistency: past tense for prior roles; present for current role.

## Success Criteria
- Clear alignment to the target role within 10 seconds of scanning.
- Natural coverage of ATS keywords without stuffing.
- Stronger, more specific, impact-first bullets.
- Coherent narrative matching the seniority and scope of the JD.
- No fabricated or inflated experience; no contradictions.
- Core skills and summary reflect the role’s needs, truthfully.
- When interactive, user confirms structure and narrative before final output.

## Failure Modes / What To Avoid
- Keyword mirroring without substance.
- Invented metrics/tools/titles or exaggerated scope.
- Overlong, vague, or task-only bullets.
- Copying JD bullets into resume.
- Mismatched seniority or confusing chronology.
- Formatting that breaks ATS parsing (tables, images).
- Ignoring gaps without offering positioning guidance.
