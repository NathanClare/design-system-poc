import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Logo from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'select',
        labels: {
          standardWhite: 'standardWhite',
          standardBlack: 'standardBlack',
          white: 'white',
          black: 'black'
        }
      },
      options: ['standardWhite', 'standardBlack', 'white', 'black'],
      defaultValue: 'success'
    },
    size: {
      name: 'size',
      description: 'Select the Logo size',
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => (
  <div className="p-4">
    <Logo {...args} />
  </div>
)

export const standardWhite = Template.bind({})

standardWhite.args = {
  variant: 'standardWhite',
  size: 'md'
}

export const standardBlack = Template.bind({})

standardBlack.args = {
  variant: 'standardBlack',
  size: 'md'
}

export const white = Template.bind({})

white.args = {
  variant: 'white',
  size: 'md'
}
export const black = Template.bind({})

black.args = {
  variant: 'black',
  size: 'md'
}
