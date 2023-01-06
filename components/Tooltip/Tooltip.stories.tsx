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

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />

export const sm = Template.bind({})

sm.args = {
  children: 'This is a tooltip',
  size: 'sm'
}

export const md = Template.bind({})

md.args = {
  children: 'This is a tooltip',
  size: 'md',
  disabled: false
}

export const lg = Template.bind({})

lg.args = {
  children: 'This is a tooltip',
  size: 'lg',
  disabled: false
}
