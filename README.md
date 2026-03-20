# tailor-resume-for-role

Portable resume-tailoring skill package for Codex and Claude Code.

## What it does

- Analyzes a job description and a base resume
- Chooses a credible narrative for the target role
- Rewrites bullets to be more relevant, ATS-friendly, and recruiter-readable
- Produces a tailored resume plus a short rationale
- Preserves truth by avoiding fabricated titles, metrics, tools, or scope

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

The skill will usually start with a brief `Structure & Narrative Proposal` and then wait for approval before generating the final `Tailored Resume` and `Rationale`.

## Repo Layout

- `SKILL.md`: main Codex skill instructions
- `agents/openai.yaml`: Codex UI metadata
- `references/`: shared workflow, constraints, and examples for the Codex package
- `assets/templates/`: shared output templates for the Codex package
- `.claude/skills/tailor-resume-for-role/`: self-contained Claude Code skill package
- `scripts/install_codex_skill.sh`: installer for Codex
- `scripts/install_claude_skill.sh`: installer for Claude Code

## Notes

- The Codex and Claude Code packages share the same workflow and guardrails.
- The Claude package is self-contained so it can be copied directly into `~/.claude/skills/`.
