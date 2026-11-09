# AGENTS.md

Personal hub site (audrysbut.github.io) listing links to the author's GitHub Pages projects.

## Commands

- Install: `bun install`
- Dev server: `bun run dev` (Vite, port **4200**, strict)
- Preview build: `bun run preview` (port 4200, strict)
- Production build: `bun run build` = `tsc -b && vite build` (outputs `dist/`)
- No test/lint scripts are defined; verification is `bun run build` (typecheck + bundle).

Use Bun, not npm (lockfile is `bun.lock`).

## Structure

- `src/data/links.ts` — array of project cards (`title`, `url`, `description`, `emoji`, `tag`). Add/remove entries here.
- `src/app.tsx` — main component (theme toggle, card grid).
- `src/app.css`, `src/index.css` — styling (CSS variables, dark/light via `data-theme`).
- `vite.config.ts` — Preact plugin + port 4200.

## Conventions

- Framework is **Preact**, not React. `tsconfig.app.json` maps `react`/`react-dom` to `preact/compat` and sets `jsxImportSource: preact`. Keep imports from `preact`/`preact/hooks`.
- TypeScript uses project references (`tsconfig.json` references `tsconfig.app.json` and `tsconfig.node.json`); `tsc -b` builds both. `noUnusedLocals`/`noUnusedParameters` are on.
- `dist/` and `node_modules/` are gitignored.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds with Bun and deploys to GitHub Pages on push to `main` (single `build-and-deploy` job, `actions/deploy-pages@v4`). Do not commit `dist/`. Keep the workflow identical in structure to the working ones in sibling repos (guess-the-words, goods-sort); trailing newline differences have caused parse failures before.
