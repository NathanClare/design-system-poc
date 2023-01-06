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
    variant: {
      name: 'variant',
      description: 'Select the variant type',
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
} as ComponentMeta<typeof Switchcomp>

const Template: ComponentStory<typeof Switchcomp> = args => <Switchcomp {...args} />

export const filled = Template.bind({})

filled.args = {
  size: 'md',
  variant: 'filled'
}

export const grey = Template.bind({})

grey.args = {
  size: 'md',
  variant: 'grey'
}