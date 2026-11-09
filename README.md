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
Pass `nav` (an array of `{ href, label, current }` from `@roastbook/ui/sites`)
to show the site's own sections as a row under the header.
Use `.page-intro` for a page title, description and actions, and
`.section-heading` for a section title with supporting text. `.lead`,
`.eyebrow` (breadcrumbs), `.facts` (a definition grid), `.table-scroll`,
`.actions` and `.badge[data-tone]` are shared too. These layouts wrap on small
screens; content-specific styles stay in each site.
Code blocks containing `<pre><code>` get a copy button with accessible
feedback and manual selection when clipboard access is unavailable. Add
`data-no-copy` to an ancestor to opt out.

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

## Checks and releases

Use Bun for installs and scripts. `bun run check` runs Biome formatting and lint,
TypeScript and Astro diagnostics. `bun test` runs component tests. Run
`bun run format` to apply safe formatting and lint fixes. Biome follows the
Roastbook app's rules; Astro templates are checked by Astro. CI also validates
GitHub Actions with actionlint and checks Conventional Commit PR titles.
Renovate inherits the organisation's shared preset and updates pinned actions.

`bun run pack` creates the npm tarball in `release/`. The package ships source
components, CSS and assets so consumers can compile them with their framework.

The `Publish GitHub package` workflow publishes `@roastbook/ui` to GitHub
Packages at `https://npm.pkg.github.com` when a GitHub release is published.
It also accepts an existing tag through workflow dispatch. The tag must match
`package.json` and point to a commit on `main`; checks and tests run before
publication. Authentication uses the workflow's `GITHUB_TOKEN` with
`packages: write`. No npm account, npm token or trusted publisher is needed.

GitHub initially publishes packages privately. An organisation owner can change
the package visibility to public in its GitHub package settings. Check inherited
repository access and grant consuming repositories Actions read access if the
package remains private.

To install a published version with Bun, configure the scope in `bunfig.toml`:

```toml
[install.scopes]
roastbook = { url = "https://npm.pkg.github.com", token = "$NPM_GITHUB_TOKEN" }
```

Pass a GitHub token with package read access as `NPM_GITHUB_TOKEN`, including
for public packages. In GitHub Actions, use `${{ github.token }}` with
`packages: read` and package access for the consuming repository. Never commit
the token. Consumers may also retain their public Git commit pins, which need
no registry authentication.

## Component showcase

Run `bun run dev` for the Astro showcase, or `bun run build:site` to generate
`site/dist/`. Open `/` locally. The page renders the actual shared React
components and hydrates their theme controls, dialog, tabs and sample form.
It includes six palette previews, semantic colour samples, form states and a
coffee journal example. The app remains the reference design.

CI builds the showcase for pull requests. Pushes to main build and deploy it
with GitHub Pages at <https://ui.roastbook.coffee/>. Enable GitHub Pages
with **GitHub Actions** as the source in repository Settings → Pages before
the first deployment. Configure `ui.roastbook.coffee` as its custom domain
and enable HTTPS when GitHub finishes issuing the certificate. Its DNS-only
CNAME is managed in `roastbook-infra/config/dns.json`. Showcase source and output are excluded from the npm
package through its explicit `files` list.
