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
      labelTrigger: 'Is it accessible?',
      value: 'Yes. It adheres to the WAI-ARIA design pattern.'
    },
    {
      id: 'item-2',
      labelTrigger: 'Is it unstyled?',
      value: 'Yes. It is unstyled by default, giving you freedom over the look and feel.'
    },
    {
      id: 'item-3',
      labelTrigger: 'Can it be animated?',
      value: 'Yes! You can animate the Accordion with CSS or JavaScript.'
    }
  ]
}
