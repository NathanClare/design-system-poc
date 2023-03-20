import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import VideoCard from './VideoCard'

export default {
  title: 'Patterns/Cards/VideoCard',
  component: VideoCard,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the VideoCard size',
      control: {
        type: 'select',
        labels: {
          lg: 'Large',
          md: 'Medium',
          sm: 'Small'
        }
      },
      options: ['lg', 'md', 'sm'],
      defaultValue: 'md'
    },
    controls: {
      name: 'controls',
      description: 'If the controls are shown.',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    loop: {
      name: 'loop',
      description: 'If the loop is disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    autplay: {
      name: 'autplay',
      description: 'If the autplay is disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    }
  }
} as ComponentMeta<typeof VideoCard>

const Template: ComponentStory<typeof VideoCard> = args => {
  return (
    <div className="p-4">
      <VideoCard {...args} />
    </div>
  )
}

export const primary = Template.bind({})

primary.args = {
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'
}

export const secondary = Template.bind({})

secondary.args = {
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'
}
