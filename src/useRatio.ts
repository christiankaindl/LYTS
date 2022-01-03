import { useLayoutEffect, useState } from "react"

/**
 * Parse ration string in the format `${number}/${number}`. Useful for flexGrow values.
 *
 * @param ratioString The ratio value
 * @returns An array with the parsed ratios
 */
export function useRatio (ratioString: string | boolean = false) {
  const [ratios, setRatios] = useState(() => parseRatioString(ratioString))
  useLayoutEffect(() => {
    setRatios(
      parseRatioString(ratioString)
    )
  }, [ratioString])
  return ratios
}

function parseRatioString (ratioString: string | boolean): string | string[] | undefined {
  if (ratioString === false) return undefined
  if (ratioString === true) return '1'
  return ratioString?.split('/')
}
