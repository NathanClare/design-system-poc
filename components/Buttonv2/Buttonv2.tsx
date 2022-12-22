import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'outlined' | 'text'
}

const buttonClasses: Record<string, Record<string, string>> = {
  size: {
    'sm': 'text-sm px-8 py-3',
    'md': 'text-md px-8 py-3',
    'lg': 'text-lg px-8 py-3',
  },
  variant: {
    'filled': 'bg-primary-base text-primary-100 hover:bg-primary-50 hover:shadow-lg focus:bg-primary-50 pressed:bg-primary-50 disabled:bg-neutral-50 disabled:text-neutral-70' ,
    'outlined': 'bg-primary-100 text-primary-base border hover:bg-primary-90 focus:bg-primary-90 pressed:bg-primary-90 disabled:text-neutral-50',
    'text':  'bg-primary-100 text-primary-base  hover:bg-primary-90 focus:bg-primary-90 pressed:bg-primary-90 disabled:text-neutral-50'
  }
}

const Buttonv2 = ({children, size = 'lg', variant = 'filled' }: ButtonProps) => {
  const classes = classNames('inline-flex rounded-3xl', buttonClasses['size'][size], buttonClasses['variant'][variant])

  return (
    <button className={classes}>
      {children}
    </button>
  )
}

export default Buttonv2