import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Toggle from './Toggle'

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the button size',
      control: {
        type: 'radio'
      }
    },
    disabled: {
      name: 'disabled',
      description: 'Choose to disable component',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = args => (
  <div className="p-4">
    <Toggle {...args} />
  </div>
)

export const medium = Template.bind({})

medium.args = {
  size: 'md'
}

export const large = Template.bind({})

large.args = {
  size: 'lg'
}
