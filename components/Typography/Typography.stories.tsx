import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typography from './Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    children: {
      name: 'text',
      description: '-',
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Heading = Template.bind({})

Heading.args = {
  tag: 'h1',
  children: 'Heading',
  size: '2xl'
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