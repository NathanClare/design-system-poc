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

const Template: ComponentStory<typeof Loading> = args => <Loading {...args} />

export const dots = Template.bind({})

dots.args = {
  size: 'md'
}
