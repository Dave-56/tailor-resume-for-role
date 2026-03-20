# tailor-resume-for-role

Codex skill for tailoring an existing resume to a target role without fabricating experience.

## What it does

- Analyzes a job description and a base resume
- Chooses a credible narrative for the target role
- Rewrites bullets to be more relevant, ATS-friendly, and recruiter-readable
- Produces a tailored resume plus a short rationale

## Install in Codex

Option 1: copy into your Codex skills directory

```bash
./scripts/install_codex_skill.sh --copy
```

Option 2: symlink the repo for easier local editing

```bash
./scripts/install_codex_skill.sh --link
```

By default the script installs to:

```bash
$CODEX_HOME/skills/tailor-resume-for-role
```

If `CODEX_HOME` is not set, it falls back to:

```bash
~/.codex/skills/tailor-resume-for-role
```

## Use

Invoke the skill by name and provide:
- A target job description
- A base resume in text or Markdown
- Any constraints like page limit, location preference, or "do not rename titles"

Example:

```text
Use $tailor-resume-for-role to tailor my resume for this Senior Product Manager role. Keep it to one page and do not overstate my SQL depth.
```

## Repo layout

- `SKILL.md`: main Codex skill instructions
- `agents/openai.yaml`: Codex UI metadata
- `references/`: workflow, constraints, and examples
- `assets/templates/`: reusable output templates
- `scripts/install_codex_skill.sh`: local installer for Codex

## Notes

- This skill is optimized for Codex packaging.
- The underlying prompt and workflow can still be adapted for other assistants, but their packaging conventions differ.
