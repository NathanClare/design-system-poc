import React from 'react'
import styles from './Typography.module.scss'

interface TypographyProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  children: React.ReactNode
}

const Typography = ({tag, children}: TypographyProps) => {
  const Element = tag

  return (
    <div className={styles.Base}>
      <Element>
        {children}
      </Element>
    </div>
  )
}

export default Typography