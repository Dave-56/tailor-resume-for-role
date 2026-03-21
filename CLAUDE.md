# Project Instructions

## docx Skill

When creating or editing `.docx` files, always read `skills/docx/SKILL.md` before writing any code. It contains the authoritative patterns, critical rules, and validation steps for docx generation. Use the `docx` npm library for new documents. For editing existing `.docx` files, use the unpack -> edit XML -> repack workflow via the Python scripts in `skills/docx/scripts/office/`. Always validate output with `python skills/docx/scripts/office/validate.py output.docx`.

### CRITICAL

- Font: Lato everywhere. Body size `19` (9.5pt), name size `28` (14pt), section headers size `20` (10pt).
- Section header borders: light gray only. Use color `999999`, `BorderStyle.SINGLE`, size `1`. Never use blue, teal, or any colored borders.
- Bullets: use `LevelFormat.BULLET` with numbering config and text `•`. Never use unicode bullets in `TextRun`.
- Spacing: `after: 60` for body paragraphs and bullets; `before: 240` and `after: 80` for section headers.
- Colors: black `000000` for headers and bold text, dark `333333` for body text, link `0563C1` for hyperlinks only.
- Role headers: bold company + em dash (`—`) + italic title + normal location/date, all in one `Paragraph`.
- Role sub-description line under the role header: italic, size `19`, color `333333`.
- Subsection headers within a role: italic + bold, size `19`, color `333333`.
- Page: US Letter `12240 x 15840` DXA, margins `720` top/bottom and `900` left/right.
- Always validate with `python skills/docx/scripts/office/validate.py output.docx`.
