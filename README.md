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
