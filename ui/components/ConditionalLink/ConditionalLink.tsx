import classNames from 'classnames'
import Link from 'next/link'
import { type ComponentPropsWithoutRef } from 'react'

interface ConditionalLinkProps extends ComponentPropsWithoutRef<'a'> {
  disabled?: boolean
}

const ConditionalLink = ({ disabled, href, target, children, onClick, ...props }: ConditionalLinkProps) => {
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
    return (
      <Link href={href} {...props} legacyBehavior>
        {children}
      </Link>
    )
  }

  if (onClick && !disabled)
    return (
      <span className={classNames({ 'cursor-pointer': onClick })} onClick={onClick} {...props}>
        {children}
      </span>
    )

  return <>{children}</>
}

export default ConditionalLink
