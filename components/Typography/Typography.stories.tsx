import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Typography from './Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    children: {
      name: 'text',
      description: 'Fill in your own text',
      control: {
        type: 'text'
      }
    },
    tag: {
      name: 'tag',
      description: 'Select typography tag',
      control: {
        type: 'select',
        labels: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          p: 'p',
          span: 'span'
        }
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span'],
      defaultValue: 'p'
    },
    size: {
      name: 'size',
      description: 'Select the typography size',
      control: {
        type: 'select',
        labels: {
          xs: 'Extra small',
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
          xl: 'Extra large',
          xxl: 'Extra extra large',
          base: 'Base'
        }
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'base'],
      defaultValue: 'base'
    },
    animate: {
      name: 'animation',
      description: 'Select the animation type',
      defaultValue: 'base'
    }
  }
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => (
  <div className="p-4">
    <Typography {...args} />
  </div>
)

export const Heading = Template.bind({})

Heading.args = {
  tag: 'h1',
  children: 'Heading',
  size: 'xl'
}

export const Paragraph = Template.bind({})

Paragraph.args = {
  tag: 'p',
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Fusce congue magna felis, non interdum sapien lacinia blandit. Morbi dui augue, 
  auctor id est nec, cursus viverra ipsum. In ut ex iaculis, 
  euismod mi id, blandit lacus. Integer eu lectus mi. A
  liquam tempus justo sed tortor molestie, sed vulputate 
  leo tempus. Praesent eget ex sapien. Pellentesque sit amet scelerisque augue. Proin at sem nulla.`,
  size: 'md'
}
