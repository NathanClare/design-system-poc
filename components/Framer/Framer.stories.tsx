import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Framer from './Framer'

export default {
  title: 'Components/Framer',
  component: Framer,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'select'
      },
      options: ['rotate', 'wiggle', 'jump', 'drop', 'shake', 'base'],
      defaultValue: 'base'
    },
    extend: {
      name: 'extend',
      description: 'Select the if component has a extended animation',
      control: {
        type: 'radio'
      },
      options: ['ping', 'pulse', 'bounce', 'no'],
      defaultValue: 'no'
    }
  }
} as ComponentMeta<typeof Framer>

const Template: ComponentStory<typeof Framer> = args => {
  return (
    <div className="p-4">
      <Framer {...args} />
    </div>
  )
}

export const primary = Template.bind({})

primary.args = {
  variant: 'rotate',
  extend: 'no'
}
