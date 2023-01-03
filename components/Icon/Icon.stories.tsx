import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Icon size',
      control: {
        type: 'radio',
      }
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
      }
    }
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

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