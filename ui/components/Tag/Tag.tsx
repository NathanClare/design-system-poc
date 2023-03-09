import type { ReactElement, ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  size?: 'lg' | 'md' | 'sm'
  variant?: 'v1' | 'v2' | 'icon'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  className?: string
}

interface ITagFamilyClasses {
  size: Record<string, Record<string, string>>
  variant: Record<string, Record<string, string>>
  iconPosition: Record<string, string>
}

const tagFamilyClasses: ITagFamilyClasses = {
  size: {
    sm: {
      base: 'text-xs px-sm py-0.5',
      icon: '[&>*]:h-3 [&>*]:w-3'
    },
    md: {
      base: 'text-base px-md py-1',
      icon: ''
    },
    lg: {
      base: 'text-lg px-md py-1',
      icon: '[&>*]:h-5 [&>*]:w-5'
    }
  },
  variant: {
    v1: {
      base: 'text-surface-0 font-bold'
    },
    v2: {
      base: 'bg-surface-30 text-surface-100 rounded-full'
    },
    icon: {
      base: 'font-bold text-surface-100'
    }
  },
  iconPosition: {
    left: '[&>span+span]:ml-xs [&>*:first-child]:order-first',
    right: '[&>span+span]:mr-xs [&>*:first-child]:order-last'
  }
}

const Tag = ({ children, size = 'lg', variant = 'icon', icon, iconPosition = 'left', className }: TagProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={className}>
      <div
        className={`relative inline-flex items-center justify-center transition-colors ${tagFamilyClasses['size'][size]['base']} ${tagFamilyClasses['variant'][variant]['base']}`}
      >
        <span className={`inline-flex items-center justify-center ${tagFamilyClasses['iconPosition'][iconPosition]}`}>
          {icon && <span className={`${tagFamilyClasses['size'][size]['icon']}`}>{icon}</span>}
          {children && <span>{children}</span>}
        </span>
      </div>
    </div>
  )
}

export default Tag
