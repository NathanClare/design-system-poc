import React, { type ElementType, type ReactNode } from 'react'

type TypographyProps<C extends ElementType> = {
  children: ReactNode
  as?: C
  size: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | 'base'
  className?: string
} & React.ComponentPropsWithoutRef<C>

interface ITypographyFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const typographyFamilyClasses: ITypographyFamilyClasses = {
  variant: {
    heading: {
      xs: 'heading-mobile-xs md:heading-xs',
      sm: 'heading-mobile-sm md:heading-sm',
      base: 'heading-mobile-md md:heading-md',
      md: 'heading-mobile-md md:heading-md',
      lg: 'heading-mobile-lg md:heading-lg',
      xl: 'heading-mobile-md md:heading-xl',
      '2xl': 'heading-mobile-2xl md:heading-2xl'
    },
    text: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-md',
      md: 'text-md',
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

const Typography = <C extends ElementType = 'span'>({ as, size = 'md', children, className, ...props }: TypographyProps<C>) => {
  const Element = as || 'span'

  return (
    <Element
      className={`block ${typographyFamilyClasses['variant'][headingTags.includes(Element as string) ? 'heading' : 'text'][size]} ${className || ''}`}
      {...props}
    >
      {children}
    </Element>
  )
}

export default Typography
