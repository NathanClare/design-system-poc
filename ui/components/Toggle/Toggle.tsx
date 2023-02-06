import { FontItalicIcon } from '@radix-ui/react-icons'
import * as RadixToggle from '@radix-ui/react-toggle'
import React from 'react'

interface ToggleProps {
  size?: 'md' | 'lg'
  disabled?: boolean
}

interface IToggleFamilyClasses {
  size: Record<string, string>
}

const toggleFamilyClasses: IToggleFamilyClasses = {
  size: {
    md: 'h-9 w-9',
    lg: 'h-12 w-12'
  }
}

const Toggle = ({ size = 'md', disabled }: ToggleProps) => {
  return (
    <RadixToggle.Root
      className={`bg-primary-white text-primary-base rounded text-base flex justify-center items-center shadow hover:bg-primary-200 data-[state=on]:bg-primary-100 data-[state=on]:text-primary-400 focus:shadow-xl disabled:bg-neutral-100 disabled:text-neutral-300 ${toggleFamilyClasses['size'][size]}`}
      aria-label="Toggle italic"
      disabled={disabled}
    >
      <FontItalicIcon />
    </RadixToggle.Root>
  )
}

export default Toggle
