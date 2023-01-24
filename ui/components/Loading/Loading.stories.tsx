import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Loading from './Loading'

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Icon size',
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof Loading>

const Template: ComponentStory<typeof Loading> = args => (
  <div className="p-4 flex align-items w-full h-full justify-center items-center">
    <Loading {...args} />
  </div>
)

export const dots = Template.bind({})

dots.args = {
  size: 'md'
}
