import { FontItalicIcon } from '@radix-ui/react-icons'
import * as RadixToggle from '@radix-ui/react-toggle'
import React from 'react'

interface ToggleProps {
  size?: 'md' | 'lg'
}

interface IToggleFamilyClasses {
  size: Record<string, string>
}

const toggleFamilyClasses: IToggleFamilyClasses = {
  size: {
    md: 'pl-2.5 h-9 w-9',
    lg: 'pl-4 h-12 w-12'
  }
}

const Toggle = ({ size = 'md' }: ToggleProps) => {
  return (
    <RadixToggle.Root
      className={`bg-primary-100 text-primary-base pl-2.5 h-9 w-9 rounded flex items-center text-base shadow hover:bg-primary-80 data-[state=on]:bg-primary-90 data-[state=on]:text-primary-60 focus:shadow-xl ${toggleFamilyClasses['size'][size]}`}
      aria-label="Toggle italic"
    >
      <FontItalicIcon />
    </RadixToggle.Root>
  )
}

export default Toggle
