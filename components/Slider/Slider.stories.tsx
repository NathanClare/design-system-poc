import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SliderComp from './Slider'

export default {
  title: 'Components/Slider',
  component: SliderComp,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the SliderComp size',
      control: {
        type: 'radio',
      }
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
      }
    }
  },
} as ComponentMeta<typeof SliderComp>

const Template: ComponentStory<typeof SliderComp> = (args) => <SliderComp {...args} />

export const filled = Template.bind({})

filled.args = {
  variant: 'filled'
}

export const grey = Template.bind({})
grey.args = {
    variant: 'grey'
  }