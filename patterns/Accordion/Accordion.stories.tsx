import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import Accordion from './Accordion'

export default {
  title: 'Patterns/Accordion',
  component: Accordion,
  argTypes: {
    disabled: {
      name: 'disabled',
      description: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    options: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = args => {
  return (
    <div className="p-4">
      <Accordion {...args} />
    </div>
  )
}

export const base = Template.bind({})

base.args = {
  options: [
    {
      id: 'item-1',
      labelTrigger: 'base option 1',
      value: 'grijurgurhguirhgiuh uhruhgru riuhgur een'
    },
    {
      id: 'item-2',
      labelTrigger: 'base option 2',
      value: 'rgbrug ruhgr uh egruuhg erugh'
    },
    {
      id: 'item-3',
      labelTrigger: 'base option 3',
      value: 'rgbrug ruhgr uh egruuhg erugh'
    }
  ]
}
