import type { ComponentPropsWithRef, ReactElement } from 'react'
import React from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'floor' | 'wall' | 'outdoor'
  href?: string
  target?: '_self' | '_blank'
  icon?: ReactElement
  size?: 'desktop' | 'mobile'
}

interface IButtonFamilyClasses {
  variant: Record<string, Record<string, string>>
  size: Record<string, Record<string, string>>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  variant: {
    floor: {
      base: 'bg-floor-classic text-surface-0 hover:bg-floor-basic group-hover:bg-floor-basic',
      icon: 'bg-floor-basic group-hover:bg-surface-0'
    },
    wall: {
      base: 'bg-wall-classic text-surface-0 hover:bg-wall-basic group-hover:bg-wall-basic',
      icon: 'bg-wall-basic group-hover:bg-surface-0'
    },
    outdoor: {
      base: 'bg-terrace-classic text-surface-0 hover:bg-terrace-basic group-hover:bg-terrace-basic',
      icon: 'bg-terrace-basic group-hover:bg-surface-0'
    }
  },

  size: {
    desktop: {
      base: 'text-md py-2.5 px-2.5',
      icon: 'py-[11px] px-2.5'
    },
    mobile: {
      base: 'text-sm py-sm px-sm',
      icon: 'py-sm px-sm'
    }
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'floor', href, target, type = 'button', icon, size = 'lg', ...props }, forwardedRef) => {
    return (
      <div className="flex group">
        <ConditionalLink href={href} target={target}>
          <span
            className={`absolute z-10 inline-flex items-center justify-center rounded ${buttonFamilyClasses['variant'][variant]['icon']} ${buttonFamilyClasses['size'][size]['icon']}`}
          >
            {icon}
          </span>
          <button
            className={`pl-2xl mx-xs inline-flex items-center justify-center rounded text-base font-bold outline-none transition-colors ${buttonFamilyClasses['size'][size]['base']} ${buttonFamilyClasses['variant'][variant]['base']}`}
            type={type}
            ref={forwardedRef}
            {...props}
          >
            {children && <span>{children}</span>}
          </button>
        </ConditionalLink>
      </div>
    )
  }
)

Button.displayName = 'Button'

export default Button

{
  /* <button className="relative inline-flex items-center justify-center rounded text-base font-bold outline-none transition-colors group">
  <span className="relative z-10 inline-flex items-center justify-center ml-2">
    <span className="absolute inset-0 rounded-full bg-white opacity-60 group-hover:opacity-100 transition-opacity"></span>
    {icon}
  </span>
  {children && <span>{children}</span>}
</button> */
}
