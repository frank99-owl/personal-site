import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Conditionally merge Tailwind CSS classes, deduplicating and handling
 * conflicting utility classes correctly.
 *
 * Uses `clsx` for conditional joining and `tailwind-merge` for conflict
 * resolution.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
