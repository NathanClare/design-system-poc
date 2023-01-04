import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'outlined' | 'text'
}

interface IButtonFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  size: {
    sm: 'text-sm px-8 py-3',
    md: 'text-md px-8 py-3',
    lg: 'text-lg px-8 py-3'
  },
  variant: {
    filled:
      'bg-primary-base text-primary-white hover:bg-primary-500 hover:shadow-lg focus:bg-primary-500 pressed:bg-primary-500 disabled:bg-neutral-500 disabled:text-neutral-300',
    outlined: 'bg-primary-white text-primary-base border hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100 disabled:text-neutral-500',
    text: 'bg-primary-white text-primary-base hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100 disabled:text-neutral-500'
  }
}

const Button = ({ children, size = 'lg', variant = 'filled' }: ButtonProps) => {
  return <button className={`inline-flex rounded-3xl ${buttonFamilyClasses['size'][size]} ${buttonFamilyClasses['variant'][variant]}`}>{children}</button>
}

export default Button
