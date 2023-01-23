import React from 'react'
import type { ReactElement } from 'react'

interface PillProps {
  children: string
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'outlined' | 'text'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
}

interface IPillFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
}

const pillFamilyClasses: IPillFamilyClasses = {
  size: {
    sm: 'text-sm px-2 py-1',
    md: 'text-sm px-3 py-2',
    lg: 'text-md px-4 py-2.5'
  },
  variant: {
    filled: {
      base: 'bg-primary-base text-primary-white hover:bg-primary-base hover:drop-shadow-10 focus:bg-primary-500 pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none'
    },
    outlined: {
      base: 'bg-primary-white text-primary-base border border-primary-600 hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100'
    },
    text: {
      base: 'bg-primary-transparent text-primary-base hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100'
    }
  },
  iconPosition: {
    left: '[&>span+span]:ml-2 [&>*:first-child]:order-first',
    right: '[&>span+span]:mr-2 [&>*:first-child]:order-last'
  }
}

const Pill = ({ children, size = 'lg', variant = 'filled', icon, iconPosition = 'left' }: PillProps) => {
  return (
    <div
      className={` inline-flex items-center justify-center rounded-full transition-colors relative ${pillFamilyClasses['size'][size]} ${pillFamilyClasses['variant'][variant]['base']}`}
    >
      <span className={`inline-flex ${pillFamilyClasses['iconPosition'][iconPosition]}`}>
        {icon && <span>{icon}</span>}
        {children && <span>{children}</span>}
      </span>
    </div>
  )
}

export default Pill
