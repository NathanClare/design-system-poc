import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Typography from './Typography'

export default {
  title: 'Typography/Text',
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
          p: 'p',
          span: 'span'
        }
      },
      options: ['p', 'span'],
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
          '2xl': 'Extra extra large',
          base: 'Base'
        }
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'base'],
      defaultValue: 'base'
    }
  }
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => (
  <div className="p-4">
    <Typography {...args} />
  </div>
)

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
