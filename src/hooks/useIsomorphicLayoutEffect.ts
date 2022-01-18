import { useEffect, useLayoutEffect } from 'react'

// See https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
export default typeof document !== 'undefined' ? useLayoutEffect : useEffect
