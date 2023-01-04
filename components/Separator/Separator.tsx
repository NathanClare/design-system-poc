import * as RadixSeparator from '@radix-ui/react-separator'
import React from 'react'

interface SwitchProps {
  variant?: 'filled' | 'grey'
  orientation?: 'vertical' | 'horizontal'
  decorative?: boolean
}

const seperatorClasses: Record<string, Record<string, string>> = {
  variant: {
    filled: 'bg-primary-700',
    grey: 'bg-neutral-700'
  }
}

const SeparatorComp = ({ variant = 'filled', orientation = 'horizontal', decorative = false }: SwitchProps) => {
  return (
    <RadixSeparator.Root
      className={`data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:h-full data-[orientation=vertical]:mx-3.5 my-3.5 ${seperatorClasses['variant'][variant]}`}
      decorative={decorative}
      orientation={orientation}
    />
  )
}

export default SeparatorComp
