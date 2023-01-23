import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import Videoplayer from './Videoplayer'

export default {
  title: 'Components/Videoplayer',
  component: Videoplayer,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Videoplayer size',
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
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4'
}

export const secondary = Template.bind({})

secondary.args = {
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'
}
