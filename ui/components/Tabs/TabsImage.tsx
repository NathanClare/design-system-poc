import * as RadixTabs from '@radix-ui/react-tabs'
import React, { useState } from 'react'

import Avatar from '../Avatar/Avatar'

interface ITabsOptions {
  id: string
  label: string
  value: string
}

interface TabsProps {
  options: Array<ITabsOptions>
  size?: 'desktop' | 'mobile'
}

interface ITabsFamilyClasses {
  size: Record<string, string>
}

const tabsFamilyClasses: ITabsFamilyClasses = {
  size: {
    mobile: 'text-xs py-xs px-xs',
    desktop: 'text-md py-sm px-sm'
  }
}

const TabsImage = ({ options, size = 'desktop' }: TabsProps) => {
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
                className={`bg-primary-white  flex items-center select-none data-[state=active]:border-surface-0 rounded text-brand-mediumgrey bg-brand-white data-[state=active]:text-brand-black hover:text-brand-black text-brand-mediumgrey font-bold border border-brand-mediumgrey hover:border-brand-black ${tabsFamilyClasses['size'][size]}`}
                value={value}
              >
                <span className={`z-10 inline-flex items-center justify-between gap-md [&>*:first-child]:order-first `}>
                  <Avatar size="xs" />
                  <span className="pl-xs">{label}</span>
                </span>
              </RadixTabs.Trigger>
            </div>
          ))}
        </RadixTabs.List>
      </RadixTabs.Root>
    </div>
  )
}

export default TabsImage
