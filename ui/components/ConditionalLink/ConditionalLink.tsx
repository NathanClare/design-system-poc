import Link from 'next/link'
import React, { type ComponentPropsWithoutRef } from 'react'

interface ConditionalLinkProps extends ComponentPropsWithoutRef<'a'> {
  disabled?: boolean
}

const ConditionalLink = ({ disabled, href, target, children, ...props }: ConditionalLinkProps) => {
  if (href && !disabled) {
    // External link
    if (target) {
      return (
        <a href={href} target={target} rel="nofollow" {...props}>
          {children}
        </a>
      )
    }

    //Internal link
    return <Link href={href}>{children}</Link>
  }

  return <>{children}</>
}

export default ConditionalLink
