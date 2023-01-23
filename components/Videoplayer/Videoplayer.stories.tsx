import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import Videoplayer from './Videoplayer'

export default {
  title: 'Components/Videoplayer',
  component: Videoplayer,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the videoplayer size',
      control: {
        type: 'radio'
      }
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      },
      options: ['primary', 'secondary'],
      defaultValue: 'primary'
    }
  }
} as ComponentMeta<typeof Videoplayer>

const Template: ComponentStory<typeof Videoplayer> = args => {
  return (
    <div className="p-4">
      <Videoplayer {...args} />
    </div>
  )
}

export const primary = Template.bind({})

primary.args = {
  variant: 'primary',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'
}

export const secondary = Template.bind({})

secondary.args = {
  variant: 'secondary',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'
}
