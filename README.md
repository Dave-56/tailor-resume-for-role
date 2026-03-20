# tailor-resume-for-role

Portable resume-tailoring skill package for Codex and Claude Code.

This repo also includes a shared `docx` skill under `skills/docx/` so tailored resumes can be delivered as validated Word documents when needed.

## What it does

- Analyzes a job description and a base resume
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
- A target job description
- A base resume in text or Markdown
- Any constraints like page limit, location preference, or "do not rename titles"

Codex example:

```text
Use $tailor-resume-for-role to tailor my resume for this Senior Product Manager role. Keep it to one page and do not overstate my SQL depth.
```

Claude Code example:

```text
/tailor-resume-for-role path/to/job_description.md path/to/resume.md
```

If the user wants a Word version of the final resume, the agent should:
- read `skills/docx/SKILL.md`
- create new `.docx` files with the `docx` npm library
- use the unpack -> edit XML -> repack workflow for edits to existing `.docx` files
- validate output with `skills/docx/scripts/office/validate.py`

If the user provides both the job description and the resume, the skill should first produce a brief `Structure & Narrative Proposal` that calls out strengths, gaps, and the proposed approach, then wait for approval before generating the final `Tailored Resume` and `Rationale`.

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
