# tailor-resume-for-role

Portable resume-tailoring skill package for Codex and Claude Code.

This repo also includes a shared `docx` skill under `skills/docx/` so tailored resumes can be delivered as validated Word documents when needed.

## What it does

- Analyzes a job description and a base resume
- Chooses one primary resume source when multiple variants are available, using a second source only as a narrow supplement when needed
- Gives a coach-style preflight read on fit, real risks, and likely hard stops
- Asks targeted follow-up questions to recover missing experience and turn it into resume-ready impact
- Chooses a credible narrative for the target role
- Rewrites bullets to be more relevant, ATS-friendly, and recruiter-readable
- Produces a tailored resume plus a short rationale
- Preserves truth by avoiding fabricated titles, metrics, tools, or scope
- Can generate the final tailored resume as a validated `.docx` file

## Install in Codex

Copy into your Codex skills directory:

```bash
./scripts/install_codex_skill.sh --copy
```

Or symlink the repo for easier local editing:

```bash
./scripts/install_codex_skill.sh --link
```

Default destination:

```bash
$CODEX_HOME/skills/tailor-resume-for-role
```

Fallback when `CODEX_HOME` is unset:

```bash
~/.codex/skills/tailor-resume-for-role
```

## Install in Claude Code

Copy the Claude-native skill package:

```bash
./scripts/install_claude_skill.sh --copy
```

Or symlink it for local iteration:

```bash
./scripts/install_claude_skill.sh --link
```

Default destination:

```bash
$CLAUDE_HOME/skills/tailor-resume-for-role
```

Fallback when `CLAUDE_HOME` is unset:

```bash
~/.claude/skills/tailor-resume-for-role
```

## Use

Provide:
- A target job description, usually pasted into the prompt
- A base resume as pasted text, an uploaded `.docx`, or a file path
- Any optional constraints like page target, output format, or "do not rename titles"

Codex example:

```text
Use $tailor-resume-for-role

job_description:
[paste JD]

resume:
[upload .docx or paste resume]

page_target: 1 page
non_negotiables:
- do not overstate my SQL depth
```

Claude Code example:

```text
/tailor-resume-for-role

job_description:
[paste JD]

resume:
[upload .docx, paste resume, or provide file path]

skip_preflight: no
```

If `skip_preflight` is omitted, the skill should default to preflight first and wait for approval.

The preflight is meant to feel like a strong career coach, not just a parser. It should:
- explain overall fit in plain English
- say whether a gap looks like a likely hard stop, a manageable risk, or just an interview topic
- ask short follow-up questions to uncover missing experience
- ask one more impact question when the experience is real but the result is still vague

Internally, the architecture should stay modular:
- `Intake`
- `Preflight Analyzer`
- `Gap Recovery`
- `Draft Builder`
- `Micro-QA Layer`
- `Controller QA`

But the user should experience one coach, not a chain of internal systems.

If the user wants a Word version of the final resume, the agent should:
- read `skills/docx/SKILL.md`
- create new `.docx` files with the `docx` npm library
- use the unpack -> edit XML -> repack workflow for edits to existing `.docx` files
- validate output with `skills/docx/scripts/office/validate.py`

Project-level docx rules in `CODEX.md` and `CLAUDE.md` further constrain resume formatting, including Lato typography, grayscale section dividers, US Letter page settings, and exact spacing/color conventions.

If the user provides both the job description and the resume, the skill should first produce a brief `Structure & Narrative Proposal` that calls out strengths, gaps, and the proposed approach, then wait for approval before generating the final `Tailored Resume` and `Rationale`.

That preflight should also surface borderline hard-screen items early, such as minimum years of experience, required domain depth, or required management scope, instead of saving those risks only for the final rationale.

For experienced candidates, the default resume order is usually:

```text
Summary
Experience
Projects (if relevant)
Core Skills
Education
```

The skill only moves `Core Skills` higher when keyword visibility clearly matters more than narrative flow, such as for early-career or career-transition resumes.

## Repo Layout

- `SKILL.md`: main Codex skill instructions
- `skills/docx/`: shared docx creation and editing skill used for Word resume output
- `agents/openai.yaml`: Codex UI metadata
- `references/`: shared workflow, constraints, and examples for the Codex package
- `assets/templates/`: shared output templates for the Codex package
- `.claude/skills/tailor-resume-for-role/`: self-contained Claude Code skill package
- `.claude/skills/docx/`: portable Claude-side copy of the docx skill
- `CLAUDE.md`: project-level Claude instructions
- `CODEX.md`: project-level Codex instructions
- `package.json`: npm dependency manifest for `docx`
- `scripts/install_codex_skill.sh`: installer for Codex
- `scripts/install_claude_skill.sh`: installer for Claude Code

## Notes

- The Codex and Claude Code packages share the same workflow and guardrails.
- The Claude package is self-contained so it can be copied directly into `~/.claude/skills/`.
- For `.docx` generation or editing, follow the authoritative instructions in [skills/docx/SKILL.md](skills/docx/SKILL.md).
- A portable copy of the docx skill also lives in `.claude/skills/docx` so the Claude package can be reused elsewhere without depending on this repo's `skills/` folder.
