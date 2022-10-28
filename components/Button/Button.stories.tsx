import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      description: 'Select the button size',
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
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'This is a button',
  size: 'md',
  variant: 'primary'
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'This is a button',
  size: 'md',
  variant: 'secondary'
}