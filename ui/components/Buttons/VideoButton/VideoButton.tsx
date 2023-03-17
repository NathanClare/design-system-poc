import type { ComponentPropsWithRef, ReactElement } from 'react'
import React from 'react'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'

import Typography from '../../Typography/Typography'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: 'sm' | 'lg'
  href?: string
  target?: '_self' | '_blank'
  icon?: ReactElement
  title: string
  time: string
}

interface IButtonFamilyClasses {
  size: Record<string, string>
}

const buttonFamilyClasses: IButtonFamilyClasses = {
  size: {
    sm: 'p-sm',
    lg: 'p-md'
  }
}

const HeaderButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = 'md', title, time, href, target, type = 'button', icon, ...props }, forwardedRef) => {
    return (
      <ConditionalLink href={href} target={target}>
        <div className="flex gap-md">
          <button
            className={`flex items-center rounded-full text-base font-bold outline-none transition-colors bg-brand-redprimary text-surface-0 ${buttonFamilyClasses['size'][size]} `}
            type={type}
            ref={forwardedRef}
            {...props}
          >
            <span className="z-10 inline-flex items-center justify-center px-0">{icon && <span>{icon}</span>}</span>
          </button>
          <div className="flex flex-col justify-center">
            <Typography className="font-bold" size={'sm'}>
              {title}
            </Typography>
            <Typography className="font-normal" size={'sm'}>
              {time}
            </Typography>
          </div>
        </div>
      </ConditionalLink>
    )
  }
)

HeaderButton.displayName = 'HeaderButton'

export default HeaderButton
