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
    as: {
      name: 'as',
      description: 'Select typography element',
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
  <div className="p-4">
    <Typography {...args} />
  </div>
)

export const H1 = Template.bind({})

H1.args = {
  as: 'h1',
  children: 'Heading',
  size: 'xl'
}

export const H2 = Template.bind({})

H2.args = {
  as: 'h2',
  children: `Second heading`,
  size: 'md'
}
