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
      }
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      }
    },
    imageURL: {
      table: {
        disable: true
      }
    },
    userName: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const withImage = Template.bind({})

withImage.args = {
  size: 'md',
  variant: 'primary',
  imageURL: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
  userName: 'Salvador Dali'
}

export const anonymous = Template.bind({})

anonymous.args = {
  size: 'md',
  variant: 'neutral'
}
