import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Tooltip from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
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
      description: 'Select the tooltip size',
      control: {
        type: 'radio'
      }
    },
    disabled: {
      name: 'Disabled',
      description: 'Choose to disable component',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => (
  <div className="p-4">
    <Tooltip {...args} />
  </div>
)

export const small = Template.bind({})

small.args = {
  children: 'This is a tooltip',
  size: 'sm'
}

export const medium = Template.bind({})

medium.args = {
  children: 'This is a tooltip',
  size: 'md',
  disabled: false
}

export const large = Template.bind({})

large.args = {
  children: 'This is a tooltip',
  size: 'lg',
  disabled: false
}
