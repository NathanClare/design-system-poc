import React from 'react'
import type { ReactElement, ComponentPropsWithRef } from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'
import Loading from '@/ui/components/Loading/Loading'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'outlined' | 'text'
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
    sm: 'text-sm px-5 py-2',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-md px-8 py-3'
  },
  variant: {
    filled: {
      base: 'bg-primary-base text-primary-white hover:bg-primary-base hover:drop-shadow-10 focus:bg-primary-500 pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none',
      disabled: 'bg-neutral-100 text-neutral-400'
    },
    outlined: {
      base: 'bg-primary-white text-primary-base border border-primary-600 hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100',
      disabled: 'text-neutral-500 bg-primary-white border-neutral-300 border border-primary-600'
    },
    text: {
      base: 'bg-primary-transparent text-primary-base hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100',
      disabled: 'bg-primary-white text-neutral-500'
    }
  },
  iconPosition: {
    left: '[&>span+span]:ml-2 [&>*:first-child]:order-first',
    right: '[&>span+span]:mr-2 [&>*:first-child]:order-last'
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = 'lg', variant = 'filled', disabled, submitting, href, target, type = 'button', icon, iconPosition = 'left', ...props }, forwardedRef) => {
    const getState = () => {
      if (disabled) return 'disabled'

      return 'base'
    }

    return (
      <ConditionalLink href={href} target={target} disabled={disabled}>
        <button
          className={`rounded-full transition-colors items-center relative ${buttonFamilyClasses['size'][size]} ${
            buttonFamilyClasses['variant'][variant][getState()]
          }`}
          disabled={disabled}
          type={type}
          ref={forwardedRef}
          {...props}
        >
          {submitting && (
            <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-0`}>
              <Loading size={size} variant={variant === 'filled' ? `white` : `primary`} />
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
