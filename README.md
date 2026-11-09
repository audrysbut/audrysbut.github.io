# audrysbut.github.io

Personal hub site listing links to my GitHub Pages projects. Built with Vite + Preact + TypeScript, run with Bun.

## Development

```sh
bun install
bun run dev      # Vite dev server on :4200 (strict port)
bun run build    # tsc -b && vite build -> dist/
bun run preview  # preview build on :4200
```

## Editing links

Project cards live in `src/data/links.ts`. Add/remove entries there (`title`, `url`, `description`, `emoji`, `tag`).

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Bun and deploys to GitHub Pages via `actions/deploy-pages`. Do not commit `dist/`.
