import * as RadixSeparator from '@radix-ui/react-separator'
import React from 'react'

interface SwitchProps {
  variant?: 'primary' | 'neutral'
  orientation?: 'vertical' | 'horizontal'
  decorative?: boolean
}

const seperatorClasses: Record<string, Record<string, string>> = {
  variant: {
    primary: 'bg-primary-300',
    neutral: 'bg-neutral-300'
  }
}

const Separator = ({ variant = 'primary', orientation = 'horizontal', decorative = false }: SwitchProps) => {
  return (
    <RadixSeparator.Root
      className={`data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:h-full data-[orientation=vertical]:mx-3.5 data-[orientation=vertical]:min-h-max my-3.5 ${seperatorClasses['variant'][variant]}`}
      decorative={decorative}
      orientation={orientation}
    />
  )
}

export default Separator
