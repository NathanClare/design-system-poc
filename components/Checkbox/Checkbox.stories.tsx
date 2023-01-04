import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text'
      }
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />

export const filled = Template.bind({})

filled.args = {
  children: 'This is a checkbox',
  variant: 'filled'
}

export const grey = Template.bind({})

grey.args = {
  children: 'This is a checkbox',
  variant: 'grey'
}
