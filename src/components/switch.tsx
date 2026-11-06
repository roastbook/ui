'use client'

import { Switch as SwitchPrimitive } from '@base-ui/react/switch'

import { cn } from '../lib/utils'

function Switch({
  className,
  size = 'default',
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: 'sm' | 'default'
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        'peer group/switch relative inline-flex h-6 w-10 shrink-0 items-center rounded-full border border-input/60 bg-muted px-0.5 align-middle outline-none transition-colors duration-150 after:absolute after:top-1/2 after:left-1/2 after:size-11 after:-translate-1/2 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=sm]:h-5 data-[size=sm]:w-8 data-checked:border-primary data-checked:bg-primary data-disabled:cursor-not-allowed data-disabled:opacity-50 motion-reduce:transition-none',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-[18px] shrink-0 rounded-full bg-card shadow-sm ring-1 ring-foreground/10 transition-[transform,background-color] duration-150 ease-out data-checked:translate-x-4 data-checked:bg-primary-foreground data-checked:ring-transparent dark:data-unchecked:bg-foreground group-data-[size=sm]/switch:size-3.5 group-data-[size=sm]/switch:data-checked:translate-x-3 motion-reduce:transition-none"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
