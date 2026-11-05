'use client'

import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group'
import type { Toggle as TogglePrimitive } from '@base-ui/react/toggle'
import type { VariantProps } from 'class-variance-authority'

import { Toggle, type toggleVariants } from './toggle'
import { cn } from '../lib/utils'

function ToggleGroup<Value extends string>({
  className,
  ...props
}: ToggleGroupPrimitive.Props<Value>) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      className={cn('flex flex-wrap gap-2', className)}
      {...props}
    />
  )
}

function ToggleGroupItem({
  variant = 'pill',
  size = 'touch',
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <Toggle
      data-slot="toggle-group-item"
      variant={variant}
      size={size}
      {...props}
    />
  )
}

export { ToggleGroup, ToggleGroupItem }
