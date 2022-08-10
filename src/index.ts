import { legacyGapEnabled } from './gapFallback.css'

export const lytsId = Symbol('Identifier for LYTS React components')

export * from './Box/Box'
export * from './Stack/Stack'
export * from './Row/Row'
export * from './Clamp/Clamp'
export * from './Columns/Columns'
export * from './Grid/Grid'
export * from './Split/Split'
export * from './Breakout/Breakout'

export { toSelectorString } from './utils/toSelectorString'

let isSupported: boolean
/**
 * Implement flexbox `gap` feature detection
 * @param autoSet If true, automatically attaches the `legacyGapEnabled` className to the document body
 * @returns Whether or not the feature is supported
 * @see https://github.com/w3c/csswg-drafts/issues/3559#issuecomment-717515122
 */
export function checkFlexGapSupport(autoSet = true) {
  if (typeof window === 'undefined') {
    return undefined
  }

  // Use the cached value if it has been defined
	if (isSupported !== undefined) {
		return isSupported
	}

	// Create a flex container with row-gap set
	const flex = document.createElement('div')
	flex.style.display = 'flex'
	flex.style.flexDirection = 'column'
	flex.style.rowGap = '1px'
	flex.style.position = 'absolute'

	// Create two, elements inside it
	flex.appendChild(document.createElement('div'))
	flex.appendChild(document.createElement('div'))

	// Append to the DOM (needed to obtain scrollHeight)
	document.body.appendChild(flex)

  // Flex container should be 1px high due to the row-gap
	isSupported = flex.scrollHeight === 1

  // Remove element from the DOM after you are done with it
	flex.parentNode?.removeChild(flex)

  // Automatically enable fallback mode which uses margins instead of `gap`
  if (!isSupported && autoSet) {
    document.body.classList.add(legacyGapEnabled)
    console.info('[LYTS] Legacy gap fallback mode is used. Some features may not work 100% correctly.')
  } else {
    document.body.classList.remove(legacyGapEnabled)
  }
  
	return isSupported
}
