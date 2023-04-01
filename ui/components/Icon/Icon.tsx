import { type ReactNode } from 'react'

interface IconProps {
  size?: 'lg' | 'md' | 'sm'
  children: ReactNode
}

interface IIconFamilyClasses {
  size: Record<string, string>
}

const iconFamilyClasses: IIconFamilyClasses = {
  size: {
    sm: 'h-lg w-lg',
    md: 'h-xl w-xl',
    lg: 'h-[50px] w-[50px]'
  }
}

const Icon = ({ size = 'md', children }: IconProps) => {
  return <div className={`inline-block rounded-full transition-colors [&>svg]:h-full [&>svg]:w-full ${iconFamilyClasses['size'][size]}`}>{children}</div>
}

export default Icon
