import React from 'react'
import type { ReactElement, MouseEvent } from 'react'

interface IconProps {
  size?: 'lg' | 'md' | 'sm'
  variant: 'filled' | 'standard'
  children: ReactElement
  disabled?: boolean
  href?: string
  target?: '_self' | '_blank'
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

interface IIconFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
}

const iconFamilyClasses: IIconFamilyClasses = {
  size: {
    sm: '[&>svg]:w-3 [&>svg]:h-3 p-1',
    md: '[&>svg]:w-6 [&>svg]:h-6 p-2',
    lg: '[&>svg]:w-8 [&>svg]:h-8 p-2'
  },
  variant: {
    filled: {
      disabled: '[&>svg]:fill-neutral-50 [&>svg]:stroke-neutral-400 bg-neutral-50',
      base: 'cursor-pointer [&>svg]:fill-primary-base [&>svg]:stroke-primary-white bg-primary-base'
    },
    standard: {
      disabled: '[&>svg]:fill-transparent [&>svg]:stroke-neutral-400 bg-transparent',
      base: 'cursor-pointer [&>svg]:fill-transparent [&>svg]:stroke-neutral-base bg-transparent hover:bg-neutral-50 active:bg-neutral-100 focus:bg-neutral-100'
    }
  }
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(({ size = 'md', variant = 'filled', children, disabled, ...props }, forwardedRef) => {
  const getState = () => {
    if (disabled) return 'disabled'

    return 'base'
  }

  return (
    <div
      className={`inline-block rounded-full transition-colors ${iconFamilyClasses['size'][size]} ${iconFamilyClasses['variant'][variant][getState()]}`}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </div>
  )
})

Icon.displayName = 'Icon'

export default Icon
