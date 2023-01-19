import React from 'react'

interface TypographyProps {
  children: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'base'
  animate: 'slide' | 'slideup' | 'zoomin' | 'base'
}

interface ITypographyFamilyClasses {
  size: Record<string, string>
  animate: Record<string, string>
}

const typographyFamilyClasses: ITypographyFamilyClasses = {
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl: 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  },
  animate: {
    slide: 'transition animate-slideinLg',
    slideup: 'transition animate-slideup',
    zoomin: 'transition animate-zoomin',
    base: ''
  }
}

const Typography = ({ tag = 'span', size = 'base', animate = 'slide', children }: TypographyProps) => {
  const Element = tag

  return (
    <div className="overflow-hidden">
      <Element className={`block ${typographyFamilyClasses['animate'][animate]} ${typographyFamilyClasses['size'][size]}`}>{children}</Element>
    </div>
  )
}

export default Typography
