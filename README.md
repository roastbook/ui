# Roastbook UI

Shared shadcn/ui components based on Base UI, extracted from the Roastbook app.
The app's components and themes are the starting point. Changes now belong here.
The initial extraction comes from app commit `5f65b4b3215be0d3e5d0770f6e3c42fa675ca475`.

## React

Install `@roastbook/ui` from this repository at a pinned commit. Import individual
components so an application bundles only the controls it uses:

```tsx
import { Button } from '@roastbook/ui/button'
import { Input } from '@roastbook/ui/input'
```

With Tailwind CSS 4, import the shared theme after Tailwind:

```css
@import "tailwindcss";
@import "@roastbook/ui/tailwind.css";
```

This registers the package's component sources with Tailwind and loads the app's
semantic tokens and six themes. Applications own fonts, document scrolling,
page layouts and feature logic. React entry points that use hooks or Base UI
carry `use client` for Next.js. Add `transpilePackages: ['@roastbook/ui']`
to the Next.js configuration so it compiles the TypeScript package sources. Pass the current theme to `Toaster` from the app.
Copy assets from `@roastbook/ui/assets/*` to the public root when using textures.

## Astro

```astro
---
import Layout from '@roastbook/ui/astro/Layout.astro';
---
<Layout title="Coffee places" site="data"><slot /></Layout>
```

The Open Coffee layout, header, footer, mark and site links live here too. Its
styles use the same semantic palette as the React components, with self-hosted
fonts and ordinary CSS. Astro consumers do not need React hydration.

## Development

```sh
bun install --frozen-lockfile
bun run check
bun test
```

Use the app's existing Storybook stories to exercise the shared React controls.
Add or update shadcn primitives here rather than copying them into a consumer.
Consumers pin a tested Git commit; `publishConfig` also supports GitHub Packages
when a release workflow is enabled. No registry credential is needed for the
public Git dependency.

## Design source

The Roastbook app is the reference design. `foundation.css` supplies its Hanken
body text, Bricolage headings, paper textures and reduced-motion defaults.
`tailwind.css` includes these foundations for React consumers; the Astro layout
loads the same file. Consumers own document scrolling and content layout.

Native Astro controls follow the shared Button, Input and Card treatments.
When changing those treatments, update the Astro adapter in the same change.
Do not introduce a separate site palette or font system.
