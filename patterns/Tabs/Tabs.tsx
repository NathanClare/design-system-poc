import * as RadixTabs from '@radix-ui/react-tabs'
import React from 'react'

interface ITabsOptions {
  id: string
  label: string
  value: string
}

interface TabsProps {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'line' | 'softRounded' | 'solidRounded'
  disabled?: boolean
  options: Array<ITabsOptions>
}

interface ITabsFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
}

const tabsFamilyClasses: ITabsFamilyClasses = {
  size: {
    sm: 'text-sm',
    md: 'text-md'
  },
  variant: {
    line: {
      trigger:
        'data-[state=active]:border-b-4 data-[state=active]:text-primary-500 hover:text-primary-300 focus:relative disabled:bg-neutral-50 disabled:text:neutral-500 disabled:mx-px'
    },
    softRounded: {
      trigger:
        'rounded-full data-[state=active]:bg-primary-100 data-[state=active]:text-primary-600 hover:text-primary-300 focus:relative focus:shadow-lg disabled:bg-neutral-50 disabled:text:neutral-500'
    },
    solidRounded: {
      trigger:
        'rounded-full data-[state=active]:bg-primary-600 data-[state=active]:text-primary-white hover:text-primary-600 focus:relative focus:shadow-lg disabled:bg-neutral-50 disabled:text:neutral-500'
    }
  }
}

const Tabs = ({ size = 'md', variant = 'line', options, disabled }: TabsProps) => {
  return (
    <RadixTabs.Root className="flex md:flex-col shadow max-w-11/12 w-11/12" defaultValue="tab1">
      <RadixTabs.List className=" flex absolute h-full w-full top-0 left:0 flex mx-2 font-medium" aria-label="Manage tabs">
        {options?.map(({ id, value, label }) => (
          <div key={id}>
            <RadixTabs.Trigger
              className={`bg-primary-white px-5 h-11 flex items-center justify-center select-none ${tabsFamilyClasses['size'][size]} ${tabsFamilyClasses['variant'][variant]['trigger']}`}
              value={value}
              disabled={disabled}
            >
              {label}
            </RadixTabs.Trigger>
          </div>
        ))}
      </RadixTabs.List>
    </RadixTabs.Root>
  )
}

export default Tabs
