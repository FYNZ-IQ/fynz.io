# FYNZ Marketing Site

Self-contained static site — no build step. Every page is a single HTML file
with inline CSS/JS (Google Fonts only external dependency).

## Structure
- `index.html` — homepage · `index-cinematic.html` — cinematic scroll concept (comparison)
- `platform.html` · `grow.html` · `schedule.html` · `shop.html` · `ops.html` — pillar hubs
- `ai.html` + `ai/` — FYNZ AI hub and agent subpages
- `industries.html` + `industries/` — Who's-it-for index and vertical pages
- `pricing.html` · `integrations.html` · `resources.html`

## Before launch
Search all files for `PLACEHOLDER` — pricing, testimonials, stats, and
telephony rates are provisional and flagged with visible comments.

Serve locally: `python3 -m http.server 8000`
