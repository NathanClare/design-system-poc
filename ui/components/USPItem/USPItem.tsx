import type { ReactElement, ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  variant?: 'base' | 'red'
  icon?: ReactElement
  className?: string
}

interface ITagFamilyClasses {
  variant: Record<string, string>
}

const tagFamilyClasses: ITagFamilyClasses = {
  variant: {
    base: 'text-xs px-sm py-0.5',
    red: 'text-xs px-sm py-0.5 text-brand-redprimary'
  }
}

const Tag = ({ variant = 'base', children, icon, className }: TagProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={className}>
      <div className={`relative inline-flex items-center justify-center transition-colors text-xs px-sm py-0.5 ${tagFamilyClasses['variant'][variant]}`}>
        <span className={`inline-flex items-center justify-center [&>span+span]:ml-xs [&>*:first-child]:order-first`}>
          {icon && <span>{icon}</span>}
          {children && <span>{children}</span>}
        </span>
      </div>
    </div>
  )
}

export default Tag
