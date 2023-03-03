import type { ComponentPropsWithRef, ReactElement } from 'react'
import React from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  href?: string
  target?: '_self' | '_blank'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  size?: 'lg' | 'md' | 'sm'
}

interface IButtonFamilyClasses {
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
  size: Record<string, string>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  variant: {
    primary: {
      base: 'bg-red-base text-surface-0 hover:bg-red-hover',
      disabled: 'bg-disabled-button text-disabled-text'
    },
    secondary: {
      base: 'bg-green-base text-surface-0 hover:bg-green-hover',
      disabled: 'bg-disabled-button text-disabled-text'
    },
    tertiary: {
      base: 'bg-black-base text-surface-0 hover:bg-black-hover',
      disabled: 'bg-disabled-button text-disabled-text'
    }
  },
  iconPosition: {
    left: '[&>span+span]:ml-2 [&>*:first-child]:order-first',
    right: '[&>span+span]:mr-2 [&>*:first-child]:order-last'
  },
  size: {
    sm: 'text-xs py-xs px-xs',
    md: 'text-sm py-sm px-sm',
    lg: 'text-md py-2.5 px-2.5'
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', disabled, href, target, type = 'button', icon, iconPosition = 'right', size = 'lg', ...props }, forwardedRef) => {
    const getState = () => {
      if (disabled) return 'disabled'

      return 'base'
    }

    return (
      <ConditionalLink href={href} target={target} disabled={disabled}>
        <button
          className={` relative inline-flex items-center justify-center rounded-full text-base font-bold outline-none transition-colors ${
            buttonFamilyClasses['size'][size]
          } ${buttonFamilyClasses['variant'][variant][getState()]}`}
          disabled={disabled}
          type={type}
          ref={forwardedRef}
          {...props}
        >
          <span className={`z-10 inline-flex items-center justify-center ${buttonFamilyClasses['iconPosition'][iconPosition]} ${children ? 'px-sm' : 'px-0'}`}>
            {icon && <span>{icon}</span>}
            {children && <span>{children}</span>}
          </span>
        </button>
      </ConditionalLink>
    )
  }
)

Button.displayName = 'Button'

export default Button
