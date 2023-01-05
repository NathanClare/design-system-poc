import React from 'react'

interface TypographyProps {
  children: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'base'
}

const typographyFamilyClasses: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  'xxl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl'
}

const Typography = ({ tag = 'span', size = 'base', children }: TypographyProps) => {
  const Element = tag

  return <Element className={`block ${typographyFamilyClasses[size]}`}>{children}</Element>
}

export default Typography
