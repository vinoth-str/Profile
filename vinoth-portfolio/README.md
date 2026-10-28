# Vinoth S Portfolio

Static site for GitHub Pages. No build step.

| File | What it is |
|---|---|
| `index.html` | Page layout, styles and animations. You normally never edit this. |
| `data.js` | All the content. Edit this to update the site. |
| `Vinoth_S_Resume.pdf` | Resume downloaded by the "Download resume" button. |

## Updating

Edit files directly on github.com: open the file, click the pencil icon, change it, click **Commit changes**. The live site updates in about 1 minute.

- **Experience years**: nothing to do. They increase every month from `experience.baseYears` (3.6 in Oct 2026).
- **Add a project**: in `data.js`, copy one block in `projects`, paste it at the end, change the text. Use `end: null` while it is ongoing. The BOM panel, project count and badges update automatically.
- **Finish a project**: set its `end` date, e.g. `end: "2026-12"`. The badge changes from Working to Released.
- **New resume**: upload the new PDF with the same name `Vinoth_S_Resume.pdf` (Add file → Upload files) so it replaces the old one.

Dates use the format `"YYYY-MM"`.
