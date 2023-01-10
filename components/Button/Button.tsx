import Link from 'next/link'
import React from 'react'
import type { MouseEvent, ReactElement } from 'react'

/* TODO: Poss. move to own component? */
interface ConditionalLinkProps {
  children: ReactElement
}

interface ButtonProps {
  children: string
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'outlined' | 'text'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  href?: string
  target?: '_self' | '_blank'
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
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
    left: '[&>*+*]:ml-2 [&>*:first-child]:order-first',
    right: '[&>*+*]:mr-2 [&>*:first-child]:order-last'
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = 'lg', variant = 'filled', disabled, href, target, type = 'button', icon, iconPosition = 'left', ...props }, forwardedRef) => {
    const getState = () => {
      if (disabled) return 'disabled'

      return 'base'
    }

    const ConditionalLink = ({ children }: ConditionalLinkProps) => {
      if (href && !disabled) {
        // External link
        if (target) {
          return (
            <a href={href} target={target}>
              {children}
            </a>
          )
        }

        // Internal link
        return <Link href={href}>{children}</Link>
      }

      return children
    }

    return (
      <ConditionalLink>
        <button
          className={`
        inline-flex rounded-full transition-colors items-center focus:outline-none focus-visible:outline-none
        ${buttonFamilyClasses['size'][size]} 
        ${buttonFamilyClasses['variant'][variant][getState()]}
        ${buttonFamilyClasses['iconPosition'][iconPosition]}
      `}
          disabled={disabled}
          type={type}
          ref={forwardedRef}
          {...props}
        >
          {icon && <span>{icon}</span>}
          {children && <span>{children}</span>}
        </button>
      </ConditionalLink>
    )
  }
)

Button.displayName = 'Button'

export default Button
