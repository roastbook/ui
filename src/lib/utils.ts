import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalizeForComparison(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}
