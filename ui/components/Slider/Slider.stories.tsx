import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import SliderComp from './Slider'

export default {
  title: 'Components/Slider',
  component: SliderComp,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the SliderComp size',
      control: {
        type: 'radio'
      }
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof SliderComp>

const Template: ComponentStory<typeof SliderComp> = args => (
  <div className="p-4">
    <SliderComp {...args} />
  </div>
)

export const primary = Template.bind({})

primary.args = {
  variant: 'filled'
}
