import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'outlined' | 'text'
  disabled?: boolean
}

interface IButtonFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  size: {
    sm: 'text-sm px-6 py-3',
    md: 'text-md px-6 py-3',
    lg: 'text-md px-8 py-3'
  },
  variant: {
    filled: {
      base: 'bg-primary-base text-primary-white hover:bg-primary-500 hover:shadow-lg focus:bg-primary-500 pressed:bg-primary-500',
      disabled: 'bg-neutral-100 text-neutral-400'
    },
    outlined: {
      base: 'bg-primary-white text-primary-base border border-primary-600 hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100',
      disabled: 'text-neutral-500 bg-primary-white border-neutral-300 border border-primary-600'
    },
    text: {
      base: 'bg-primary-white text-primary-base hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100',
      disabled: 'bg-primary-white text-neutral-500'
    }
  }
}

const Button = ({ children, size = 'lg', variant = 'filled', disabled }: ButtonProps) => {
  const getState = () => {
    if (disabled) return 'disabled'

    return 'base'
  }

  return (
    <button
      className={`
        inline-flex rounded-full transition-colors 
        ${buttonFamilyClasses['size'][size]} 
        ${buttonFamilyClasses['variant'][variant][getState()]}
      `}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
