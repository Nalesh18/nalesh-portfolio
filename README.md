# Nalesh Kumar B — Portfolio

Personal portfolio for Nalesh Kumar B, Software Developer. Single-page React
application, dark-first, content driven entirely by typed data files.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · Lucide React

## Commands

```bash
npm install       # once
npm run dev       # local dev server
npm run lint      # oxlint
npm run typecheck # tsc only, writes nothing
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build
```

`dist/` is build output only — it is gitignored and safe to delete at any time.
Use `npm run typecheck` if you want to validate without generating it.

## Editing the content

All portfolio content lives in `src/data/` — no component needs to be touched
to update it.

| File              | Holds                                          |
| ----------------- | ---------------------------------------------- |
| `personal.ts`     | Name, role, hero intro, about copy, contact    |
| `experience.ts`   | Roles and responsibilities                     |
| `projects.ts`     | Projects, metrics, detail panels, architecture |
| `skills.ts`       | Skill categories                               |
| `education.ts`    | Institutions and dates                         |
| `certificates.ts` | Certificates                                   |
| `navigation.ts`   | Nav items (order defines the section order)    |

## Things to fill in

These are deliberately left unset rather than invented:

- **Profile photo** — `public/profile.png` (1023x1537, 1.7 MB). To swap it,
  replace that file or point `personal.photo.src` at a new one. Set `src` to
  `null` to show the "NB" monogram instead.
- **Resume PDF** — `public/resume.pdf` is in place and wired to the Resume
  links via `personal.resumeUrl`.
- **Project links** — every project has `github: null` and `live: null`. Set a
  URL to turn on the "Source" / "Live" buttons in the project modal.
- **Certificate credential** — `certificates[0].url` is `null`; set it to show a
  "View credential" link.
- **Contact form delivery** — there is no mail backend. Submitting opens the
  visitor's own mail client via `mailto:`, and the form says so. To use a
  provider later, replace `handleSubmit` in
  `src/components/ui/ContactForm.tsx` with a `fetch` to your endpoint.
- **Open Graph image** — no image is referenced. Add one to `public/` and an
  `og:image` meta tag in `index.html` if you want link previews.

## Structure

```text
src/
├── components/
│   ├── architecture/   CapabilityMap (signature visual), FlowDiagram
│   ├── navigation/     Navbar, Footer
│   ├── projects/       ProjectCard, ProjectModal
│   └── ui/             Button, Section, Tag, Terminal, ContactForm,
│                        Portrait, BrandIcons
├── data/               all portfolio content
├── hooks/              useActiveSection, useScrollTo
├── lib/                cn, motion variants
└── sections/           Hero, About, Experience, Projects, Skills,
                        Education, Certificate, Contact
```

## Notes

- The design system lives in `src/index.css` as Tailwind v4 `@theme` tokens.
- Motion respects `prefers-reduced-motion` in both CSS and Framer Motion
  (`MotionConfig reducedMotion="user"` in `App.tsx`).
- Lucide v1 no longer ships brand marks, so the GitHub and LinkedIn glyphs are
  inlined in `src/components/ui/BrandIcons.tsx`.
