export const lytsId = Symbol('Identifier for LYTS React components')
console.log('lytsId', lytsId)

export interface BaseProps {
  /** Amount of space between elements */
  gap?: number | string
  /** Inspired by Radix UI's API */
  asChild?: boolean
  // bleed?: number | string
}
