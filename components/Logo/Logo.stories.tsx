import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Logo from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Logo size',
      control: {
        type: 'radio'
      }
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      },
      options: ['standard', 'white', 'black'],
      defaultValue: 'standard'
    }
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => (
  <div className="p-4">
    <Logo {...args} />
  </div>
)

export const standard = Template.bind({})

standard.args = {
  size: 'md',
  variant: 'standard'
}

export const white = Template.bind({})

white.args = {
  size: 'md',
  variant: 'white'
}

export const black = Template.bind({})

black.args = {
  size: 'md',
  variant: 'black'
}
