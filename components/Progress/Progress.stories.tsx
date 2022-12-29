import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProgressComp from './Progress'

export default {
  title: 'Components/Progress',
  component: ProgressComp,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
      }
    }
  },
} as ComponentMeta<typeof ProgressComp>

const Template: ComponentStory<typeof ProgressComp> = (args) => <ProgressComp {...args} />

export const filled = Template.bind({})

filled.args = {
  variant: 'filled'
}

export const grey = Template.bind({})
grey.args = {
    variant: 'grey'
  }