# tamer-abdelaziz.github.io

Personal academic website. Static HTML, CSS, and JavaScript — **no build step, no dependencies**.

```
index.html                          page structure (one scrolling page)
assets/data/site.js                 ← ALL CONTENT. The only file you normally edit.
assets/css/style.css                design tokens + layout
assets/js/main.js                   rendering, filtering, theme, scroll-spy
assets/img/profile.jpg              profile photo (falls back to a monogram)

Tamer_Abdelaziz___Research_Statement.pdf ┐ kept at the site root because
Tamer_Abdelaziz___Teaching_Statement.pdf ┘ these URLs are live and indexed
google*.html                        Google Search Console verification — do not delete
sitemap.xml                         search-engine sitemap
.nojekyll                           serve files as-is, no Jekyll processing
```

## Deployment

Served from `Tamer-Abdelaziz/Tamer-Abdelaziz.github.io`, branch `main`, at
<https://tamer-abdelaziz.github.io/>.

**Pages must be set to "Deploy from a branch."** In the repository:
**Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`.**

There is no CI workflow. An earlier `jekyll-gh-pages.yml` ran `npm install && npm run
build` and published `./dist`, which cannot work for a site with no build step — it would
have failed on every push and deployed nothing. It was removed.

```bash
git add -A
git commit -m "Redesign site"
git push
```

## Structure

A single scrolling page with a sticky nav and anchor links, so everything is visible to a
first-time reader and indexable by search engines. Sections in order:

`hero` · `research` (the arc) · `vision` · `themes` · `publications` · `projects` ·
`experience` · `students` · `contact`

The **research arc** is the centrepiece: six stages of one research programme — Detect,
Measure, Monitor, Generalize, Prevent, Govern — each tied to a real output. It is driven by
the `arc` array in `site.js`. Each entry has a `state` of `published`, `review`, or
`ongoing`, which controls how the node is drawn (filled, outlined, or muted).

## Editing content

Everything is generated from `assets/data/site.js`. To add a publication, copy an existing
block in the `publications` array:

- `type` — `conference` | `journal` | `review` | `preprint` | `artifact` | `thesis`
  (filter buttons appear automatically for whichever types are present)
- `selected` — `true` marks the entry with a star
- `venue` — full venue string, shown in italics
- `note` — one- or two-sentence description, optional
- `links` — array of `{ label, href }`; **official publisher URLs only**

Appointments, education, teaching, awards, service, projects, and the research arc work the
same way. Adding an array item is enough; the renderer picks it up.

## Design

Original stylesheet — no third-party CSS framework. Design tokens live in `:root` at the
top of `style.css`; every colour is a variable, defined for light and redefined for dark.

- Type: **Instrument Serif** (display), **Inter** (body), **JetBrains Mono** (labels)
- Accent: a warm rust (`--accent`), used sparingly for kickers, links, and arc nodes
- Theme: follows the OS by default; the nav button overrides it and remembers the choice
  in `localStorage`
- Contrast: all text passes WCAG AA in both themes
- Responsive: single column below 780px; the arc turns vertical below 860px

Icons are Font Awesome 6.4 from cdnjs; fonts are from Google Fonts. Those are the only
third-party requests.

## Running locally

```bash
python3 -m http.server 8000
```

## Note on paper PDFs

Publications link **only to published URLs** — ACM DL, IEEE Xplore, USENIX, arXiv,
doi.org, ScholarBank, and the journal site. The site hosts no paper PDFs of its own. Work
under review carries no link, because there is nothing published to link to.

Copies previously hosted under `/papers/` and `/projects/` have been removed. Those URLs
now 404; if any turn out to matter, add small HTML redirect stubs at the old paths.
