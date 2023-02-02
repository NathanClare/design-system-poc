import React from 'react'

interface TypographyProps {
  children: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'base'
}

interface ITypographyFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const typographyFamilyClasses: ITypographyFamilyClasses = {
  variant: {
    heading: {
      xs: 'heading-xs',
      sm: 'heading-sm',
      base: 'heading-base',
      md: 'heading-base',
      lg: 'heading-lg',
      xl: 'heading-xl',
      '2xl': 'heading-2xl',
      '3xl': 'heading-3xl',
      '4xl': 'heading-4xl',
      '5xl': 'heading-5xl'
    },
    text: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl'
    }
  }
}

const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5']

const Typography = ({ tag = 'span', size = 'md', children }: TypographyProps) => {
  const Element = tag

  return (
    <Element className={`block break-word ${typographyFamilyClasses['variant'][headingTags.includes(tag) ? 'heading' : 'text'][size]}`}>{children}</Element>
  )
}

export default Typography
