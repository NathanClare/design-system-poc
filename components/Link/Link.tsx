import React from 'react'
import type { MouseEvent, ReactElement } from 'react'

/* TODO: Poss. move to own component? */
interface ConditionalLinkProps {
  children: ReactElement
}

interface LinkProps {
  size?: 'lg' | 'md' | 'sm'
  children: string
  variant?: 'filled' | 'outlined' | 'text'
  disabled?: boolean
  href?: string
  target?: '_self' | '_blank'
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

interface ILinkFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
}

const linkFamilyClasses: ILinkFamilyClasses = {
  size: {
    sm: 'text-sm px-1 py-0.5',
    md: 'text-sm px-5 py-2',
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
  }
}

const Link = React.forwardRef<HTMLButtonElement, LinkProps>(
  ({ size = 'md', variant = 'filled', disabled, href, target = 'button', ...props }, forwardedRef) => {
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
      }

      return children
    }

    return (
      <ConditionalLink>
        <button
          className={`rounded-lg transition-colors items-center relative ${linkFamilyClasses['size'][size]} ${
            linkFamilyClasses['variant'][variant][getState()]
          }`}
          disabled={disabled}
          ref={forwardedRef}
          {...props}
        ></button>
      </ConditionalLink>
    )
  }
)

Link.displayName = 'Link'

export default Link
