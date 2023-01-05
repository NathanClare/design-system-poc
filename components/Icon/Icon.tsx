import * as Avatar from '@radix-ui/react-avatar'
import React from 'react'

interface IconProps {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'grey'
  color?: 'primary' | 'green'
}

interface IIconFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
}

const iconFamilyClasses: IIconFamilyClasses = {
  size: {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  },
  variant: {
    filled: {
      primary: 'bg-neutral-100 text-neutral-600',
      secondary: 'bg-neutral-100 text-neutral-600'
    },
    grey: {
      primary: 'bg-neutral-100 text-neutral-600',
      secondary: 'bg-neutral-100 text-neutral-600'
    }
  }
}

const Icon = ({ size = 'md', variant = 'filled', color = 'primary' }: IconProps) => {
  return (
    <div className={`flex gap-2.5`}>
      <Avatar.Root
        className={`flex items-center justify-center align-middle overflow-hidden select-none rounded-full px-2 bg-primary-10 ${iconFamilyClasses['size'][size]}`}
      >
        <Avatar.Image
          className="w-full h-full object-cover rounded-full"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <Avatar.Fallback
          className={`w-full h-full flex items-center justify-center text-base font-medium ${iconFamilyClasses['variant'][variant][color]}`}
          delayMs={600}
        >
          CT
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}

export default Icon
