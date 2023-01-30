import React from 'react'
import type { ReactElement, ComponentPropsWithRef } from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'
import Loading from '@/ui/components/Loading/Loading'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: 'lg' | 'md'
  variant?: 'primary' | 'secondary'
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
      base: 'bg-primary-base text-surface-white border border-primary-base hover:border-primary-700 hover:bg-primary-700 hover:drop-shadow-10 focus:border-primary-150 focus:border-4 pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none border-4 outline-offset-[-4px] outline-none',
      disabled: 'bg-surface-200 border border-surface-200 text-surface-400'
    },
    secondary: {
      base: 'bg-surface-white text-primary-base border border-primary-base hover:border-primary-base hover:bg-surface-50 hover:drop-shadow-10 focus:border-primary-base pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none focus:outline-[3px] outline-offset-[-1px] outline-primary-base',
      disabled: 'bg-surface-200 border border-surface-200 text-surface-400',
      label: 'p-[3px]'
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
          className={`peer rounded transition-colors items-center relative ${buttonFamilyClasses['size'][size]} ${
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
            {children && <span className={`${buttonFamilyClasses['variant'][variant]['label']} `}>{children}</span>}
          </span>
        </button>
      </ConditionalLink>
    )
  }
)

Button.displayName = 'Button'

export default Button
