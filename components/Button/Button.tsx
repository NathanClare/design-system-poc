import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'outlined' | 'text'
  disabled?: boolean
}

interface IButtonFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  size: {
    sm: 'text-sm px-6 py-3',
    md: 'text-md px-6 py-3',
    lg: 'text-md px-8 py-3'
  },
  variant: {
    filled:
      'bg-primary-base text-primary-100 hover:bg-primary-50 hover:shadow-lg focus:bg-primary-50 pressed:bg-primary-50 disabled:bg-neutral-50 disabled:text-neutral-70 disabled:shadow-none',
    outlined:
      'bg-primary-100 text-primary-base border border-primary-60 hover:bg-primary-90 focus:bg-primary-90 pressed:bg-primary-90 disabled:text-neutral-50 disabled:bg-primary-100 disabled:border-neutral-30',
    text: 'bg-primary-100 text-primary-base hover:bg-primary-90 focus:bg-primary-90 pressed:bg-primary-90 disabled:text-neutral-50'
  }
}

const Button = ({ children, size = 'lg', variant = 'filled', disabled }: ButtonProps) => {
  return (
    <button
      className={`inline-flex rounded-full transition-colors ${buttonFamilyClasses['size'][size]} ${buttonFamilyClasses['variant'][variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
