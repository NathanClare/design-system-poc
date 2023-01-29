import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Switchcomp from './Switch'

export default {
  title: 'Components/Switch',
  component: Switchcomp,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the switch size',
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
} as ComponentMeta<typeof Switchcomp>

const Template: ComponentStory<typeof Switchcomp> = args => (
  <div className="p-4">
    <Switchcomp {...args} />
  </div>
)

export const primary = Template.bind({})

primary.args = {
  size: 'md'
}
