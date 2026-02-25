import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility to merge tailwind classes gracefully without style conflicts.
 * Uses clsx for conditional class merging and tailwind-merge to resolve
 * CSS cascading conflicts in utility classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}