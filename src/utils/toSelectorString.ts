/**
 * Convert a class name string as used in HTML's `class` attribute (separated by a space " ") to the CSS dot-notation, so that it can be used as a selector with other libraries like vanilla extract.
 * 
 * E.g. transforms "my-class-1 my-class-2" to ".my-class-1.my-class-2"
 * 
 * @param htmlClass The class names as applied to an HTML element (e.g. "my-class-1 my-class-2")
 * @returns A string which can be used as a CSS selector (e.g. ".my-class-1.my-class-2")
 */
export function toSelectorString (htmlClass: string): string {
  return `.${htmlClass.split(' ').join('.')}`
}
