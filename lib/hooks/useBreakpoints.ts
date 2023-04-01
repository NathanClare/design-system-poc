import { useEffect, useState } from 'react'

export const useBreakpoints = () => {
  const [breakpointSm, setBreakpointSm] = useState<boolean>(true)
  const [breakpointMd, setBreakpointMd] = useState<boolean>(false)
  const [breakpointLg, setBreakpointLg] = useState<boolean>(false)
  const [breakpointXl, setBreakpointXl] = useState<boolean>(false)

  const breakpoint = {
    sm: `375px`,
    md: `768px`,
    lg: `1024px`,
    xl: `1440px`
  }

  let sm: MediaQueryList | undefined, md: MediaQueryList | undefined, lg: MediaQueryList | undefined, xl: MediaQueryList | undefined

  if (typeof window !== 'undefined') {
    sm = window.matchMedia(`(min-width: ${breakpoint.sm})`)
    md = window.matchMedia(`(min-width: ${breakpoint.md})`)
    lg = window.matchMedia(`(min-width: ${breakpoint.lg})`)
    xl = window.matchMedia(`(min-width: ${breakpoint.xl})`)

    sm.onchange = e => setBreakpointSm(e.matches)
    md.onchange = e => setBreakpointMd(e.matches)
    lg.onchange = e => setBreakpointLg(e.matches)
    xl.onchange = e => setBreakpointXl(e.matches)
  }

  useEffect(() => {
    if (sm) setBreakpointSm(sm.matches)
    if (md) setBreakpointMd(md.matches)
    if (lg) setBreakpointLg(lg.matches)
    if (xl) setBreakpointXl(xl.matches)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    breakpoint,
    breakpointSm,
    breakpointMd,
    breakpointLg,
    breakpointXl
  }
}
