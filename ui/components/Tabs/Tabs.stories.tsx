import { BeakerIcon } from '@heroicons/react/24/solid'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Tabs from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    // variant: {
    //   name: 'variant',
    //   description: 'Select the variant type',
    //   control: {
    //     type: 'radio',
    //     labels: {
    //       line: 'line',
    //       softRounded: 'softRounded',
    //       solidRounded: 'solidRounded'
    //     }
    //   },
    //   options: ['line', 'softRounded', 'solidRounded'],
    //   defaultValue: 'line'
    // },

    options: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => {
  return (
    <div className="p-4">
      <Tabs {...args} />
    </div>
  )
}

export const v4 = Template.bind({})

v4.args = {
  variant: 'v4',
  options: [
    {
      id: 'Hexagon 1',
      label: 'Hexagon 1',
      value: 'tab 1'
    },
    {
      id: 'Hexagon 2',
      label: 'Hexagon 2',
      value: 'tab 2'
    }
  ]
}

export const v2 = Template.bind({})

v2.args = {
  icon: <BeakerIcon className="h-4 w-4" />,
  variant: 'v2',
  options: [
    {
      id: 'Hexagon 1',
      label: 'Hexagon 1',
      value: 'tab 1'
    },
    {
      id: 'Hexagon 2',
      label: 'Hexagon 2',
      value: 'tab 2'
    }
  ]
}
