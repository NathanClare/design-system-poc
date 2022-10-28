import React from 'react'
import styles from './Button.module.scss'
import classnames from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  size?: 'lg' | 'md' | 'sm'
  variant?: 'primary' | 'secondary'
}

const Button = ({children, size = 'md', variant = 'primary'}: ButtonProps) => {
  const classes = classnames(
    styles.Base,
    styles[`size-${size}`],
    styles[`variant-${variant}`]
  )

  return (
    <button className={classes}>
      {children}
    </button>
  )
}

export default Button