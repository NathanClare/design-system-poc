import React from 'react'
import styles from './Typography.module.scss'
import classnames from 'classnames'

interface TypographyProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  children: React.ReactNode,
  variant?: 'sm' | 'md' | 'lg'
}

const Typography = ({tag, children, variant = 'md'}: TypographyProps) => {
  const Element = tag
  const classes = classnames(
    styles.Base,
    styles[`variant-${variant}`]
  )

  return (
    <div className={classes}>
      <Element>
        {children}
      </Element>
    </div>
  )
}

export default Typography