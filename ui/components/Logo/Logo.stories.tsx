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
          neutral: 'Neutral'
        }
      },
      options: ['neutral'],
      defaultValue: 'neutral'
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

export const neutral = Template.bind({})

neutral.args = {
  variant: 'neutral',
  size: 'md'
}
