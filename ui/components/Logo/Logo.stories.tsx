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
  size: 'md'
}

export const standardBlack = Template.bind({})

standardBlack.args = {
  size: 'md'
}

export const white = Template.bind({})

white.args = {
  size: 'md'
}
export const black = Template.bind({})

black.args = {
  size: 'md'
}
