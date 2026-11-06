# Roastbook UI

- The shared component implementation belongs in `src/components/`. Start from
  the existing shadcn Base UI conventions; do not create a second component set.
- Keep components independent of app state, routing and server modules. Pass
  preferences such as the toast theme through props.
- Semantic colours and all app themes belong in `src/styles/tokens.css`.
  Tailwind mappings belong in `src/styles/tailwind.css`; Astro layout styles
  belong in `src/astro/`. Document scrolling belongs to each application.
- Preserve Next.js client boundaries and per-component exports.
- Use Bun and commit `bun.lock`. Run `bun run check` and `bun test`, then build
  affected consumers before publishing changes.

- Run `bun run format` before publishing. CI enforces the app-derived Biome
  rules, workflow validation and package checks.
- Package releases use `.github/workflows/publish.yml` and GitHub Packages
  with the workflow GITHUB_TOKEN.
  Keep the release tag aligned with `package.json` and never add registry tokens
  to source or replace managed GitHub authentication.
