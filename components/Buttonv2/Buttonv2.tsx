import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  size: 'sm' | 'lg'
}

const buttonConfig: Record<string, Record<string, string>> = {
  font: {
    'sm': 'text-sm',
    'lg': 'text-lg',
  }
}

const Button = ({ size = 'sm' }: ButtonProps) => {
  const classes = classNames('inline-flex', buttonConfig['font'][size])

  return <button className={classes}>Click Me</button>
}

export default Button