# Project Instructions

## docx Skill

When creating or editing `.docx` files, always read `skills/docx/SKILL.md` before writing any code. It contains the authoritative patterns, critical rules, and validation steps for docx generation. Use the `docx` npm library for new documents. For editing existing `.docx` files, use the unpack -> edit XML -> repack workflow via the Python scripts in `skills/docx/scripts/office/`. Always validate output with `python skills/docx/scripts/office/validate.py output.docx`.

### CRITICAL

- Use Lato font, size 19 (9.5pt) for body text, and size 28 (14pt) for the candidate name.
- Never use unicode bullets directly in `TextRun`; use `LevelFormat.BULLET` with numbering config.
- Use `BorderStyle.SINGLE` on section headers for visual dividers.
- Set page size explicitly to US Letter: `12240 x 15840` DXA.
- Role headers should be one `Paragraph`: bold company, em dash, italic title, then normal date text.
