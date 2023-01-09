import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import ProgressComp from './Progress'

export default {
  title: 'Components/Progress',
  component: ProgressComp,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      }
    },
    progress: {
      name: 'progress',
      description: 'Progress',
      control: {
        type: 'radio'
      },
      options: [10, 100],
      defaultValue: 10
    }
  }
} as ComponentMeta<typeof ProgressComp>

const Template: ComponentStory<typeof ProgressComp> = args => (
  <div className="w-48">
    <ProgressComp {...args} />
  </div>
)

export const filled = Template.bind({})

filled.args = {
  variant: 'filled'
}

export const neutral = Template.bind({})

neutral.args = {
  variant: 'neutral'
}
