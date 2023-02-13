import type { ComponentPropsWithRef, ReactElement } from 'react'
import React from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'
import Loading from '@/ui/components/Loading/Loading'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  submitting?: boolean
  href?: string
  target?: '_self' | '_blank'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  size?: string
}

interface IButtonFamilyClasses {
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
  loadingIcon: Record<string, 'primary' | 'white' | 'neutral'>
  size: Record<string, string>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  variant: {
    primary: {
      base: 'bg-primary-base text-secondary-white before:border-primary-base hover:bg-primary-700 before:hover:border-primary-700 before:focus:border-4 before:focus:bg-primary focus:text-secondary-white before:focus:border-primary-100',
      disabled: 'bg-secondary-200 text-secondary-400 before:border-0',
      loadingIcon: 'white'
    },
    secondary: {
      base: 'bg-secondary-white text-primary-base before:border-2 before:border-primary-base before:hover:border-4 before:hover:border-primary-base before:focus:border-4 before:focus:border-primary-100',
      disabled: 'bg-secondary-200 text-secondary-400 before:border-0',
      loadingIcon: 'primary'
    },
    tertiary: {
      base: 'bg-secondary-white text-secondary-black before:border-2 before:border-secondary-black before:hover:border-4 before:hover:border-secondary-black before:focus:border-4 before:focus:border-tertiary-500',
      disabled: 'bg-secondary-200 text-secondary-400 before:border-0',
      loadingIcon: 'neutral'
    }
  },
  iconPosition: {
    left: '[&>span+span]:ml-2 [&>*:first-child]:order-first',
    right: '[&>span+span]:mr-2 [&>*:first-child]:order-last'
  },
  loadingIcon: {
    primary: 'white',
    secondary: 'primary',
    tertiary: 'neutral'
  },
  size: {
    sm: 'text-sm py-sm px-sm',
    lg: 'text-md py-2.5 px-2.5'
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = 'primary', disabled, submitting, href, target, type = 'button', icon, iconPosition = 'right', size = 'lg', ...props },
    forwardedRef
  ) => {
    const getState = () => {
      if (disabled) return 'disabled'

      return 'base'
    }
    return (
      <ConditionalLink href={href} target={target} disabled={disabled}>
        <button
          className={` before:border-1 relative inline-flex items-center justify-center rounded text-base font-bold outline-none transition-colors before:absolute before:top-[0px] before:right-[0px] before:bottom-[0px] before:left-[0px] before:rounded before:border ${
            buttonFamilyClasses['size'][size]
          } ${buttonFamilyClasses['variant'][variant][getState()]}`}
          disabled={disabled}
          type={type}
          ref={forwardedRef}
          {...props}
        >
          {submitting && (
            <span className={`absolute left-1/2 top-1/2 ml-0 -translate-x-1/2 -translate-y-1/2`}>
              <Loading variant={disabled ? 'white' : buttonFamilyClasses['loadingIcon'][variant]} size={'md'} />
            </span>
          )}
          <span
            className={`${submitting ? 'opacity-0' : 'opacity-100'} z-10 inline-flex items-center justify-center ${
              buttonFamilyClasses['iconPosition'][iconPosition]
            } ${children ? 'px-2' : 'px-0'}`}
          >
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
