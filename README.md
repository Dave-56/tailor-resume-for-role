# tailor_resume_for_role

You can have great experience and still get ignored—not because you’re unqualified, but because your resume doesn’t tell the right story for the role.

This project helps you translate your real experience into a role-specific narrative that aligns with what recruiters and ATS systems are looking for—so you get more callbacks and interviews.

## What It Does
- Analyzes a target job description and your base resume.
- Identifies the role’s ideal candidate signals (skills, outcomes, scope).
- Audits your resume against those signals to find strengths and gaps.
- Rewrites bullets for impact, relevance, and clarity—without fabricating.
- Produces a role-tailored, ATS-aware, recruiter-friendly resume plus a short rationale.

## Why It Exists
Generic resumes underperform. Recruiters and hiring managers need fast, credible signal. Automated tailoring—done thoughtfully—makes strong candidates easy to see without keyword stuffing or exaggeration.

## Who It’s For
- Job seekers tailoring resumes per application.
- Career coaches and university career centers.
- Recruiters/Hiring teams customizing internal referrals or pipelines.

## Design Principles
- Preserve truth: no fake titles, metrics, tools, or scope.
- Strategic tailoring over generic rewriting.
- Think like a ghostwriter + hiring manager + recruiter.
- Impact-first bullets; every line must earn its place.
- ATS-friendly formatting and human scanability.
- Natural keyword coverage—no stuffing.

## Example Workflow
1. Provide a target job description and a base resume (plain text/Markdown).
2. Preflight check-in (interactive): the skill proposes a Structure & Narrative plan (section order, positioning, tone, page limit, emphasis). You approve or adjust.
3. The skill extracts must-haves, outcomes, and seniority signals.
4. It maps your experience to those signals, finding the strongest evidence.
5. It rewrites bullets with impact-first language and relevant context.
6. It outputs a tailored resume plus a concise rationale and coverage map.

## Inputs / Outputs
- Inputs: Target job description (text), Base resume (text/Markdown), Optional preferences (location, remote, target seniority).
- Outputs: Structure & Narrative proposal (interactive), Tailored resume (Markdown or text), Rationale (coverage map, trade-offs, remaining gaps), Risk flags (potential credibility concerns).

## Interactive Mode
- First, you receive a concise Structure & Narrative Proposal to confirm section order (e.g., Core Skills at top vs bottom), positioning, tone, page limit, and emphasis.
- Reply APPROVE to proceed as proposed, or provide edits. After approval, the skill generates the final Tailored Resume and Rationale.

## Limitations
- No fabrication; results depend on your real experience.
- Works best with text-based resumes (no graphics).
- Does not submit applications or track outcomes.
- Requires final human review for tone and company norms.

## Roadmap
- Simple CLI/SDK to run locally.
- Configurable tone and regional spelling.
- Role-specific templates (PM, CS, Eng, Design).
- Gap management hints for cover letters.
- Optional anonymization for unbiased screening.

## Repository Structure
- `README.md`: Overview, goals, examples, roadmap.
- `SKILL_SPEC.md`: Formal spec: purpose, inputs, outputs, workflow, constraints, success criteria, failure modes.
- `SYSTEM_PROMPT.md`: The instruction prompt that powers the skill.
- `templates/`: Reusable output templates (resume layout, rationale report).
- `examples/`: Two curated examples (Product Manager, Customer Support/Success) with narrative choices and outputs.
- `test_cases/`: Minimal input/output cases to validate behavior.
- `output_samples/`: Example tailored resumes and rationales for reference.
- `scripts/` (optional): CLI or SDK stubs to invoke the skill.
