import { PlusIcon } from '@radix-ui/react-icons'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

interface TooltipProps {
  children: React.ReactNode
  size?: 'lg' | 'md' | 'sm'
  disabled?: boolean
}

interface ITooltipClasses {
  size: Record<string, string>
}

const tooltipClasses: ITooltipClasses = {
  size: {
    sm: 'py-0.5 px-2',
    md: 'py-1 px-4',
    lg: 'py-3 px-6'
  }
}

const Tooltip = ({ children, size = 'lg', disabled }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <button
            disabled={disabled}
            className="h-9 w-9 inline-flex items-center justify-center text-primary-base rounded-full shadow hover:bg-primary-200 focus:shadow-lg disabled:bg-neutral-100 disabled:text-neutral-400"
          >
            <PlusIcon />
          </button>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={`font-base shadow select-none text-primary-400 bg-primary-white duration-500 will-change-transform ${tooltipClasses['size'][size]}`}
            sideOffset={5}
          >
            {children}
            <RadixTooltip.Arrow className="fill-white" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export default Tooltip
