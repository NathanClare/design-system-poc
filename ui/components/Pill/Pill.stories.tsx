import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Pill from './Pill'

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text'
      }
    },
    size: {
      name: 'size',
      description: 'Select the pill size',
      control: {
        type: 'select',
        labels: {
          md: 'Medium',
          sm: 'Small'
        }
      },
      options: ['md', 'sm'],
      defaultValue: 'md'
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    iconPosition: {
      control: {
        type: 'radio'
      },
      if: { arg: 'icon' }
    },
    type: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Pill>

const Template: ComponentStory<typeof Pill> = args => (
  <div className="p-4">
    <Pill {...args} />
  </div>
)

export const red = Template.bind({})

red.args = {
  children: 'Almost sold out',
  size: 'md',
  variant: 'red'
}

export const blue = Template.bind({})

blue.args = {
  children: 'Very popular',
  size: 'md',
  variant: 'blue'
}

export const mint = Template.bind({})

mint.args = {
  children: 'Only 3 left',
  size: 'md',
  variant: 'mint'
}
