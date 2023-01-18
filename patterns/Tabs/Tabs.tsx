import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import * as RadixTabs from '@radix-ui/react-tabs'
import React, { useState, useEffect } from 'react'

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

const useBreakpoint = (breakpoint: number) => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(currentWidth > breakpoint)

  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setIsAboveBreakpoint(currentWidth > breakpoint)
  }, [currentWidth, breakpoint])

  return isAboveBreakpoint
}

const Tabs = ({ size = 'md', variant = 'line', options, disabled }: TabsProps) => {
  const isAboveBreakpoint = useBreakpoint(768)
  const [currentTab, setCurrentTab] = useState(options[0].label)

  return (
    <div>
      {isAboveBreakpoint ? (
        <RadixTabs.Root className="flex shadow max-w-11/12 w-11/12" defaultValue="tab1">
          <RadixTabs.List className="flex absolute h-full w-full top-0 left:0 flex mx-2 font-medium" aria-label="Manage tabs">
            {options?.map(({ id, value, label }) => (
              <div key={id}>
                <RadixTabs.Trigger
                  onClick={() => setCurrentTab(label)}
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
      ) : (
        <RadixDropdownMenu.Root>
          <RadixDropdownMenu.Trigger asChild>
            <button
              className={`bg-primary-white px-5 h-11 flex bg-primary-25 items-center justify-center select-none ${tabsFamilyClasses['size'][size]} ${tabsFamilyClasses['variant'][variant]['trigger']}`}
              disabled={disabled}
            >
              {currentTab}
            </button>
          </RadixDropdownMenu.Trigger>

          <RadixDropdownMenu.Portal>
            <RadixDropdownMenu.Content className="min-w-[220px] bg-primary-white border-lg p-1 shadow" sideOffset={5}>
              {options?.map(({ id, value, label }) => (
                <div key={id}>
                  <RadixDropdownMenu.RadioItem
                    onClick={() => setCurrentTab(label)}
                    className="font-base text-primary-600 flex items-center h-6 p-1 relative pl-6 cursor-select outline-none"
                    value={value}
                  >
                    {label}
                  </RadixDropdownMenu.RadioItem>
                </div>
              ))}
            </RadixDropdownMenu.Content>
          </RadixDropdownMenu.Portal>
        </RadixDropdownMenu.Root>
      )}
    </div>
  )
}

export default Tabs
