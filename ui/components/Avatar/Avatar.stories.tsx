import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Avatar from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the avatar size',
      control: {
        type: 'radio'
      },
      labels: {
        xs: 'Extra small',
        sm: 'Small',
        md: 'Medium',
        lg: 'Large'
      },
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      },
      if: { arg: 'variant' }
    },
    imageURL: {
      table: {
        disable: true
      }
    },
    userName: {
      name: 'userName',
      description: 'Add username for the avatar',
      control: {
        type: 'text'
      },
      defaultValue: 'Jane Doe'
    },
    text: {
      name: 'text',
      description: 'Show text or not',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    name: {
      name: 'name',
      description: 'Add name next to the avatar',
      control: {
        type: 'text'
      },
      defaultValue: 'Jane Doe'
    },
    job: {
      name: 'job',
      description: 'Add the function next to the avatar',
      control: {
        type: 'text'
      },
      defaultValue: 'Interieur Designer'
    }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => (
  <div className="p-4">
    <Avatar {...args} />
  </div>
)

export const withImage = Template.bind({})

withImage.args = {
  size: 'md',
  imageURL: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  userName: 'Jane Doe',
  text: false
}

export const withImageAndName = Template.bind({})

withImage.args = {
  size: 'md',
  imageURL: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  userName: 'Jane Doe',
  text: false
}

export const anonymous = Template.bind({})

anonymous.args = {
  size: 'md',
  variant: 'neutral',
  text: false
}
