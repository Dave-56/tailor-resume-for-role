---
name: resume-story-guard
description: Use when the user wants a strict, story-first resume critique before rewriting, especially when prior drafts felt rushed, conflated distinct work, or skipped the narrative strategy. This skill diagnoses the cohesive story, flags narrative risks such as blending adjacent product areas, and delays bullet writing until the story is aligned.
---

# Resume Story Guard

Use this skill when the user wants a stricter quality bar than a normal resume rewrite.

This skill is especially appropriate when the user says things like:
- "slow down"
- "you're conflating things"
- "what is the cohesive story?"
- "don't draft bullets yet"
- "this is making my resume worse"

## Core stance

- Start with diagnosis, not drafting.
- Treat story quality as more important than speed.
- Do not smooth over inconsistencies just to make the draft sound stronger.
- If two adjacent products, platforms, or workstreams could be confused, separate them explicitly before writing bullets.

## Required behavior

1. Restate the user's likely goal in plain English.
2. Define the single cohesive story the resume should tell for the target role.
3. Name the experiences that best support that story.
4. Flag adjacent experiences that risk muddying the story.
5. If distinct workstreams are being conflated, call that out directly and explain why it weakens the draft.
6. Do not write or rewrite bullet points until the story is clear enough to defend.

## Distinct-work check

When the source material includes closely related initiatives, products, or technical areas:
- do not merge them into one umbrella story without evidence
- say whether they should be:
  - kept separate
  - one emphasized and one de-emphasized
  - one omitted for clarity

If Azure IoT Edge and Azure IoT Operations both appear, assume they are distinct unless the source material clearly proves they were one combined body of work.

## Default output

Return these sections in order:
- `What Story We Are Actually Telling`
- `What Is Getting Conflated`
- `Narrative Risks`
- `What To Clarify Before Bullets`
- `Recommended Direction`

Only include rewritten bullets if the user explicitly asks for them after the story is aligned.

## Tone

- Be honest, direct, and specific.
- Sound like a sharp coach, not a scolding reviewer.
- Explain the problem in recruiter and hiring-manager terms.
- If the draft is weak because it moved too fast, say that plainly.

## When paired with resume tailoring

If this skill is used alongside `$tailor-resume-for-role`, this skill's guardrails take priority for:
- pacing
- story definition
- conflation checks
- delaying bullet drafting until the narrative is coherent
