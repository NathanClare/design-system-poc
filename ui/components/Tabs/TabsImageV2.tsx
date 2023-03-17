/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as RadixTabs from '@radix-ui/react-tabs'
import type { StaticImageData } from 'next/image'
import React, { useState } from 'react'

import Typography from '../Typography/Typography'

interface ITabsOptions {
  id: string
  label: string
  value: string
  name: string
  description: string
  showDescription: boolean
  image: StaticImageData
}

interface TabsProps {
  options: Array<ITabsOptions>
  size?: 'desktop' | 'mobile'
  variant?: 'one' | 'two'
  description: boolean
}

interface ITabsFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const tabsFamilyClasses: ITabsFamilyClasses = {
  variant: {
    one: 'bg-primary-white select-none text-brand-lightgrey bg-brand-white data-[state=active]:text-brand-black hover:text-brand-mediumgrey text-brand-mediumgrey font-bold hover:border-brand-black',
    two: 'rounded bg-primary-white select-none text-brand-lightgrey bg-brand-white data-[state=active]:text-brand-black data-[state=active]:border-brand-black data-[state=active]:bg-surface-30 hover:bg-surface-30 hover:text-brand-mediumgrey text-brand-mediumgrey font-bold border border-surface-0'
  },
  size: {
    mobile: 'text-sm',
    desktop: 'text-md'
  }
}

const TabsImageV2 = ({ options, size = 'desktop', variant = 'two' }: TabsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentTab, setCurrentTab] = useState(options[0].label)

  return (
    <div>
      <RadixTabs.Root className="flex w-full " defaultValue="tab1">
        <RadixTabs.List className="flex font-medium gap-md" aria-label="Manage tabs">
          {options?.map(({ id, value, label, name, description, showDescription = 'true', image }) => (
            <div key={id}>
              <RadixTabs.Trigger
                onClick={() => setCurrentTab(label)}
                className={` flex items-center ${tabsFamilyClasses['variant'][variant]} ${tabsFamilyClasses['size'][size]} pr-sm`}
                value={value}
              >
                <div className="flex items-center gap-sm">
                  <div className={`w-xl h-xl sm:w-[48px] sm:h-[48px] rounded`} style={{ backgroundImage: `url(${image})` }}></div>
                  <div className="flex flex-col">
                    <Typography className="font-bold" size={'md'}>
                      {name}
                    </Typography>
                    {showDescription && (
                      <Typography className="font-normal text-left" size={'md'}>
                        {description}
                      </Typography>
                    )}
                  </div>
                </div>
              </RadixTabs.Trigger>
            </div>
          ))}
        </RadixTabs.List>
      </RadixTabs.Root>
    </div>
  )
}

export default TabsImageV2
