import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import PopoverComp from './Popover'

export default {
  title: 'Components/Popover',
  component: PopoverComp,
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
        labels: {
          filled: 'filled',
          grey: 'grey'
        }
      },
      options: ['filled', 'grey'],
      defaultValue: 'grey'
    },
    arialabel: {
      name: 'aria label',
      description: 'Give arialabel',
      control: {
        type: 'text'
      },
      defaultValue: 'Update something'
    },
    title: {
      name: 'title',
      description: 'Give title',
      control: {
        type: 'text'
      },
      defaultValue: 'Dimensions'
    },
    disabled: {
      name: 'disabled',
      description: 'Choose to disable component',
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
} as ComponentMeta<typeof PopoverComp>

const Template: ComponentStory<typeof PopoverComp> = args => (
  <div className="p-4">
    <PopoverComp {...args} />
  </div>
)

export const filled = Template.bind({})

filled.args = {
  variant: 'filled',
  options: [
    {
      id: '1c',
      label: 'Option 1'
    },
    {
      id: '1f',
      label: 'Option 2'
    }
  ]
}

export const grey = Template.bind({})

grey.args = {
  variant: 'grey',
  options: [
    {
      id: '1b',
      label: 'Option 1'
    },
    {
      id: '1c',
      label: 'Option 2'
    },
    {
      id: '1f',
      label: 'Option 3'
    },
    {
      id: '1g',
      label: 'Option 4'
    },
    {
      id: '1q',
      label: 'Option 5'
    }
  ]
}
