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
