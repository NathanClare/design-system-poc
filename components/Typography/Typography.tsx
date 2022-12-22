import React from 'react'
import classNames from 'classnames'

interface TypographyProps {
  children: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'base'
}

const typographyClasses: Record<string, string> = {
  'xs': 'text-xs',
  'sm': 'text-sm',
  'base': 'text-base',
  'lg': 'text-lg',
  'xl': 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
}

const Typography = ({tag = 'span', size = 'base', children}: TypographyProps) => {
  const Element = tag
  const classes = classNames('block', typographyClasses[size])

  return <Element className={classes}>{children}</Element>
}

export default Typography