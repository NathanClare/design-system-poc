import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Separator from './Separator'

export default {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      name: 'orientation',
      description: 'Specify the orientation',
      control: {
        type: 'radio'
      },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
    },
    decorative: {
      name: 'decorative',
      description: 'If the element is purely decorative',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    variant: {
      name: 'variant',
      description: 'Select variant',
      control: {
        type: 'select'
      },
      options: ['primary', 'neutral'],
      defaultValue: 'primary'
    }
  }
} as ComponentMeta<typeof Separator>

const Template: ComponentStory<typeof Separator> = args => (
  <div className="p-4">
    <div className="flex h-4 w-[320px]">
      <Separator {...args} />
    </div>
  </div>
)

export const primary = Template.bind({})

primary.args = {
  variant: 'primary'
}

export const neutral = Template.bind({})

neutral.args = {
  variant: 'neutral'
}
