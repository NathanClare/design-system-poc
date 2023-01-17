import { EyeIcon } from '@heroicons/react/24/solid'
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
          lg: 'Large',
          md: 'Medium',
          sm: 'Small'
        }
      },
      options: ['lg', 'md', 'sm'],
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

export const filled = Template.bind({})

filled.args = {
  children: 'This is a Pill',
  size: 'md',
  variant: 'filled'
}

export const outlined = Template.bind({})

outlined.args = {
  children: 'This is a Pill',
  size: 'md',
  variant: 'outlined'
}

export const text = Template.bind({})

text.args = {
  children: 'This is a Pill',
  size: 'md',
  variant: 'text'
}

export const icon = Template.bind({})

icon.args = {
  children: 'This is a Pill',
  size: 'md',
  variant: 'filled',
  icon: <EyeIcon className="h-4 w-4" />,
  iconPosition: 'left'
}
