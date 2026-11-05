import { test, expect } from 'bun:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Card, CardContent } from './src/components/card'
import { cn } from './src/lib/utils'

test('cards retain semantic slots and accept consumer styling', () => {
  const html = renderToStaticMarkup(createElement(Card, { size: 'sm', className: 'bg-secondary' }, createElement(CardContent, null, 'Coffee')))
  expect(html).toContain('data-slot="card"')
  expect(html).toContain('data-size="sm"')
  expect(html).toContain('data-slot="card-content"')
  expect(html).toContain('bg-secondary')
  expect(html).not.toMatch(/\bbg-card\b/)
  expect(html).toContain('Coffee')
})

test('consumer classes override conflicting shared utilities', () => {
  expect(cn('h-11 rounded-full', 'h-12')).toBe('rounded-full h-12')
})
