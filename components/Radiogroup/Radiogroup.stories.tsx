import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Radiogroup from './Radiogroup'

export default {
  title: 'Components/Radiogroup',
  component: Radiogroup,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
      }
    }
  },
} as ComponentMeta<typeof Radiogroup>

const Template: ComponentStory<typeof Radiogroup> = (args) => <Radiogroup {...args} />

export const filled = Template.bind({})

filled.args = {
  variant: 'filled'
}

export const grey = Template.bind({})
grey.args = {
    variant: 'grey'
  }