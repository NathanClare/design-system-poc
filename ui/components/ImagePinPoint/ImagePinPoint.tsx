import type { ComponentPropsWithRef } from 'react'
import React from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'

interface ImagePinPointProps extends ComponentPropsWithRef<'button'> {
  href?: string
  target?: '_self' | '_blank'

  size?: 'md' | 'sm'
}

interface IImagePinPointFamilyClasses {
  size: Record<string, string>
}

const imagePinPointFamilyClasses: IImagePinPointFamilyClasses = {
  size: {
    sm: 'h-sm w-sm p-2 hover:p-1.5 border-[6px] hover:border-[6px] border-surface-10 hover:border-surface-30',
    md: 'h-md w-md p-2.5 hover:p-2 border-[8px] hover:border-[10px] border-surface-10 hover:border-surface-30'
  }
}

const ImagePinPoint = React.forwardRef<HTMLButtonElement, ImagePinPointProps>(({ size = 'md', href, target, type = 'button', ...props }, forwardedRef) => {
  return (
    <ConditionalLink href={href} target={target}>
      <div className="h-5 w-5 flex items-center justify-center">
        <button
          className={`relative block items-center justify-center rounded-full transition-all bg-brand-redprimary ${imagePinPointFamilyClasses['size'][size]}`}
          type={type}
          ref={forwardedRef}
          {...props}
        />
      </div>
    </ConditionalLink>
  )
})

ImagePinPoint.displayName = 'ImagePinPoint'

export default ImagePinPoint
