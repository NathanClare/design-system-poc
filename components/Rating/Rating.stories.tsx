import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Rating from './Rating'

export default {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the size',
      control: {
        type: 'radio',
        labels: {
          sm: 'Small',
          md: 'Medium',
          lg: 'Large'
        }
      },
      defaultValue: 'md'
    },
    rating: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = args => {
  return (
    <div className="p-4">
      <Rating {...args} />
    </div>
  )
}

export const primary = Template.bind({})

primary.args = {
  size: 'md',
  rating: 3.4
}
