import type { ComponentPropsWithRef, ReactElement } from 'react'
import React, { forwardRef } from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'

interface IColorSwatchOptions {
  variant?: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  href?: string
  target?: '_self' | '_blank'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  size?: 'lg' | 'md' | 'sm'
  id: string
}

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  options: Array<IColorSwatchOptions>
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  return (
    <div>
      {options.map(({ id, children, variant = 'primary', href, target, type = 'button', icon, iconPosition = 'right', size = 'lg', ...rest }) => (
        <div key={id}>
          <ConditionalLink href={href} target={target} disabled={rest.disabled}>
            <button
              className={` relative inline-flex items-center justify-center rounded-full text-base font-bold outline-none transition-colors ${buttonFamilyClasses['size'][size]} ${buttonFamilyClasses['variant'][variant]['base']}`}
              type={type}
              ref={forwardedRef}
              {...rest}
            >
              <span
                className={`z-10 inline-flex items-center justify-center ${buttonFamilyClasses['iconPosition'][iconPosition]} ${children ? 'px-sm' : 'px-0'}`}
              >
                {icon && <span>{icon}</span>}
                {children && <span>{children}</span>}
              </span>
            </button>
          </ConditionalLink>
        </div>
      ))}
    </div>
  )
})

Button.displayName = 'Button'

export default Button
