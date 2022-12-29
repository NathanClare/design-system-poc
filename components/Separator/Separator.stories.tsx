import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SeparatorComp from './Separator'

export default {
  title: 'Components/Separator',
  component: SeparatorComp,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
      }
    }
  },
} as ComponentMeta<typeof SeparatorComp>

const Template: ComponentStory<typeof SeparatorComp> = (args) => <SeparatorComp {...args} />

export const filled = Template.bind({})

filled.args = {
  variant: 'filled'
}

export const grey = Template.bind({})
grey.args = {
    variant: 'grey'
  }