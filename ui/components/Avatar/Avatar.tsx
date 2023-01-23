import * as RadixAvatar from '@radix-ui/react-avatar'
import React from 'react'

interface AvatarProps {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'primary' | 'neutral'
  imageURL?: string
  userName?: string
}

interface IAvatarFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const iconFamilyClasses: IAvatarFamilyClasses = {
  size: {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  },
  variant: {
    primary: 'bg-primary-100 text-primary-600',
    neutral: 'bg-neutral-100 text-neutral-600'
  }
}

const Avatar = ({ size = 'md', variant = 'primary', imageURL, userName }: AvatarProps) => {
  return (
    <div className={`flex gap-2.5`}>
      <RadixAvatar.Root
        className={`flex items-center justify-center align-middle overflow-hidden select-none rounded-full bg-primary-10 ${iconFamilyClasses['size'][size]}`}
      >
        {imageURL && <RadixAvatar.Image className="w-full h-full object-cover rounded-full" src={imageURL} alt={userName || ''} />}
        <RadixAvatar.Fallback
          className={`w-full h-full flex items-center justify-center text-base font-medium ${iconFamilyClasses['variant'][variant]}`}
          delayMs={600}
        >
          ?
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
    </div>
  )
}

export default Avatar
