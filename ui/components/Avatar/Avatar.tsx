import * as RadixAvatar from '@radix-ui/react-avatar'
import React from 'react'

import Typography from '../Typography/Typography'

interface AvatarProps {
  size?: 'lg' | 'md' | 'sm' | 'xs'
  variant?: 'primary' | 'neutral'
  imageURL?: string
  userName?: string
  name?: string
  job?: string
  text?: boolean
}

interface IAvatarFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const iconFamilyClasses: IAvatarFamilyClasses = {
  size: {
    xs: 'w-10 h-10',
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16'
  },
  variant: {
    primary: 'bg-brand-redlight text-surface-0',
    neutral: 'bg-surface-20 text-surface-60'
  }
}

const Avatar = ({ size = 'md', variant = 'primary', imageURL, userName, name, job, text }: AvatarProps) => {
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

      {text && (
        <div className="flex flex-col  justify-center">
          <Typography className="font-bold" size={'sm'}>
            {name}
          </Typography>
          <Typography className="font-normal" size={'sm'}>
            {job}
          </Typography>
        </div>
      )}
    </div>
  )
}

export default Avatar
