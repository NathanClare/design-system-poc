import type { ComponentPropsWithRef, ReactElement } from 'react'
import React from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'default' | 'black'
  href?: string
  target?: '_self' | '_blank'
  icon?: ReactElement
}

interface IButtonFamilyClasses {
  variant: Record<string, string>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  variant: {
    default: 'text-surface-0 hover:bg-brand-redprimary',
    black: 'text-surface-100 hover:text-brand-redprimary'
  }
}

const HeaderButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', href, target, type = 'button', icon, ...props }, forwardedRef) => {
    return (
      <ConditionalLink href={href} target={target}>
        <button
          className={` relative inline-flex items-center justify-center rounded-full text-base font-bold outline-none transition-colors py-sm px-sm ${buttonFamilyClasses['variant'][variant]} `}
          type={type}
          ref={forwardedRef}
          {...props}
        >
          <span className={`z-10 inline-flex items-center justify-center px-0'`}>{icon && <span>{icon}</span>}</span>
        </button>
      </ConditionalLink>
    )
  }
)

HeaderButton.displayName = 'HeaderButton'

export default HeaderButton
