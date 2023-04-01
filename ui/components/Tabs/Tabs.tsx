import * as RadixTabs from '@radix-ui/react-tabs'
import type { ReactElement } from 'react'
import React, { useState } from 'react'

interface ITabsOptions {
  id: string
  label: string
  value: string
}

interface TabsProps {
  variant?: 'v1' | 'v1Mobile' | 'v2' | 'v3' | 'v4' | 'v4Mobile'
  options: Array<ITabsOptions>
  icon?: ReactElement
}

interface ITabsFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const tabsFamilyClasses: ITabsFamilyClasses = {
  variant: {
    v1: {
      trigger:
        'group rounded-full font-bold data-[state=active]:border-brand-black text-brand-mediumgrey  hover:text-brand-black data-[state=active]:text-primary-white hover:text-primary-600 border-2 border-surface-30 hover:border-brand-lightgrey p-sm',
      icon: 'group-data-[state=active]:text-brand-redprimary'
    },
    v1Mobile: {
      trigger:
        'group rounded-full font-bold data-[state=active]:border-brand-black text-brand-mediumgrey  hover:text-brand-black data-[state=active]:text-primary-white hover:text-primary-600 border-2 border-surface-30 hover:border-brand-lightgrey',
      icon: 'group-data-[state=active]:text-brand-redprimary'
    },
    v2: {
      trigger:
        'group rounded-full font-bold data-[state=active]:border-brand-black text-brand-mediumgrey  hover:text-brand-black data-[state=active]:text-primary-white hover:text-primary-600 border-2 border-surface-30 hover:border-surface-50',
      icon: 'group-data-[state=active]:text-brand-redprimary'
    },
    v3: {
      trigger:
        'group font-bold data-[state=active]:text-brand-redprimary text-brand-mediumgrey hover:text-brand-black data-[state=active]:text-primary-white hover:text-primary-600  hover:border-surface-50',
      icon: 'group-data-[state=active]:text-brand-redprimary'
    },
    v4: {
      trigger:
        'data-[state=active]:text-brand-redprimary text-brand-mediumgrey data-[state=active]:bg-brand-pink hover:bg-surface-10 hover:text-brand-black text-brand-mediumgrey font-bold border-b border-surface-10'
    },
    v4Mobile: {
      trigger:
        'data-[state=active]:text-brand-redprimary text-brand-mediumgrey hover:text-brand-black  data-[state=active]:bg-brand-pink data-[state=active]:border-brand-redprimary text-brand-mediumgrey font-bold border rounded-md border-surface-30'
    }
  }
}

const Tabs = ({ variant = 'v4', options, icon }: TabsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentTab, setCurrentTab] = useState(options[0].label)

  return (
    <div>
      <RadixTabs.Root className="flex w-full " defaultValue="tab1">
        <RadixTabs.List className="flex font-medium gap-md" aria-label="Manage tabs">
          {options?.map(({ id, value, label }) => (
            <div key={id}>
              <RadixTabs.Trigger
                onClick={() => setCurrentTab(label)}
                className={`bg-primary-white  flex items-center select-none ${tabsFamilyClasses['variant'][variant]['trigger']}`}
                value={value}
              >
                <span className={`z-10 inline-flex items-center justify-center [&>*:first-child]:order-first p-sm px-md`}>
                  {icon && <span className={`pr-sm ${tabsFamilyClasses['variant'][variant]['icon']}`}>{icon}</span>}
                  {label}
                </span>
              </RadixTabs.Trigger>
            </div>
          ))}
        </RadixTabs.List>
      </RadixTabs.Root>
    </div>
  )
}

export default Tabs
