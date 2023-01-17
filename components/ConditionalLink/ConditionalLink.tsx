import Link from 'next/link'
import React from 'react'
import type { MouseEvent, ReactElement } from 'react'

interface ConditionalLinkProps {
  children: ReactElement
  disabled?: boolean
  href?: string
  target?: '_self' | '_blank'
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

const ConditionalLink = ({ disabled, href, target, children }: ConditionalLinkProps) => {
  if (href && !disabled) {
    // External link
    if (target) {
      return (
        <a href={href} target={target} rel="nofollow">
          {children}
        </a>
      )
    }

    //Internal link
    return <Link href={href}>{children}</Link>
  }

  return children
}

export default ConditionalLink
