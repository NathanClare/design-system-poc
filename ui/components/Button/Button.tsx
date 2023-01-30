import React from 'react'
import type { ReactElement, ComponentPropsWithRef } from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'
import Loading from '@/ui/components/Loading/Loading'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: 'lg' | 'md'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
  disabled?: boolean
  submitting?: boolean
  href?: string
  target?: '_self' | '_blank'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
}

interface IButtonFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  size: {
    md: 'text-base px-6 py-2.5 font-bold',
    lg: 'text-lg px-6 py-3 font-bold'
  },
  variant: {
    primary: {
      base: 'bg-primary-base text-surface-white border border-primary-base hover:border-2 hover:border-primary-200  hover:drop-shadow-10 focus:border-primary-base pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none',
      disabled: 'bg-surface-200 border border-surface-200 text-surface-400'
    },
    secondary: {
      base: 'bg-surface-black text-surface-white border border-surface-black hover:border-2 hover:border-surface-300 hover:drop-shadow-10 focus:border-primary-base pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none',
      disabled: 'bg-surface-200 border border-surface-200 text-surface-400'
    },
    tertiary: {
      base: 'bg-surface-white text-surface-black border border-surface-black hover:border-2 hover:border-surface-black hover:drop-shadow-10 focus:border-primary-base pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none',
      disabled: 'bg-surface-200 border border-surface-200 text-surface-400'
    },
    ghost: {
      base: 'bg-surface-white text-primary-base border border-primary-base hover:border-2 hover:border-primary-base hover:drop-shadow-10 focus:border-primary-base pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none',
      disabled: 'bg-surface-200 border border-surface-200 text-surface-400'
    }
  },
  iconPosition: {
    left: '[&>span+span]:ml-2 [&>*:first-child]:order-first',
    right: '[&>span+span]:mr-2 [&>*:first-child]:order-last'
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, size = 'lg', variant = 'primary', disabled, submitting, href, target, type = 'button', icon, iconPosition = 'right', ...props },
    forwardedRef
  ) => {
    const getState = () => {
      if (disabled) return 'disabled'

      return 'base'
    }

    return (
      <ConditionalLink href={href} target={target} disabled={disabled}>
        <button
          className={`rounded transition-colors items-center relative m-px hover:m-0 ${buttonFamilyClasses['size'][size]} ${
            buttonFamilyClasses['variant'][variant][getState()]
          }`}
          disabled={disabled}
          type={type}
          ref={forwardedRef}
          {...props}
        >
          {submitting && (
            <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-0`}>
              <Loading size={size} variant={variant === 'primary' ? `white` : `primary`} />
            </span>
          )}
          <span className={`${submitting ? 'opacity-0' : 'opacity-100'} inline-flex ${buttonFamilyClasses['iconPosition'][iconPosition]}`}>
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
