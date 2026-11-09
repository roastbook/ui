export const SITES = {
  schema: 'https://schema.roastbook.coffee/',
  data: 'https://data.roastbook.coffee/',
  schemaRepo: 'https://github.com/Roastbook/open-coffee-schema',
  dataRepo: 'https://github.com/Roastbook/open-coffee-data',
  roastbook: 'https://roastbook.coffee/',
} as const

/** One entry of a site's own navigation, shown under the shared header. */
export interface NavLink {
  href: string
  label: string
  current?: boolean
}

/** Deep link to a field's definition in the Schema Explorer, e.g. fieldUrl("serving.filter"). */
export const fieldUrl = (
  path: string,
  version = 'latest',
  family = 'coffee-places',
) => `${SITES.schema}${family}/${version}/#field-${path}`
