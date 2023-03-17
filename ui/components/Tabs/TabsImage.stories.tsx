import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import TabsImage from './TabsImage'

export default {
  title: 'Components/TabsImage',
  component: TabsImage,
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
} as ComponentMeta<typeof TabsImage>

const Template: ComponentStory<typeof TabsImage> = args => {
  return (
    <div className="p-4">
      <TabsImage {...args} />
    </div>
  )
}

export const v4 = Template.bind({})

v4.args = {
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
