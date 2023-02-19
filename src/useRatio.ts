/**
 * Parse ration string in the format `${number}/${number}`. Useful for flexGrow values.
 *
 * @param ratioString The ratio value
 * @returns An array with the parsed ratios
 */
export function useRatio (ratioString: string | boolean = false) {
  return parseRatioString(ratioString)
}

function parseRatioString (ratioString: string | boolean): string | string[] | undefined {
  if (ratioString === false) return undefined
  if (ratioString === true) return '1'
  return ratioString?.split('/')
}
