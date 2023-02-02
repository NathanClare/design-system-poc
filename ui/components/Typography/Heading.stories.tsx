import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Typography from './Typography'

export default {
  title: 'Typography/Heading',
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
          h5: 'h5'
        }
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      defaultValue: 'h1'
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
  <div className="p-4 animation-delay-100">
    <Typography {...args} />
  </div>
)

export const h1 = Template.bind({})

h1.args = {
  tag: 'h1',
  children: 'Heading',
  size: 'xl'
}

export const h2 = Template.bind({})

h2.args = {
  tag: 'h2',
  children: `Second heading`,
  size: 'md'
}
