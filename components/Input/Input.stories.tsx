import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const filled = Template.bind({})

filled.args = {
  variant: 'filled'
}

export const grey = Template.bind({})

grey.args = {
  variant: 'grey'
}
