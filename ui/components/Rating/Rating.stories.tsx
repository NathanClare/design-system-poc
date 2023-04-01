import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Rating from './Rating'

export default {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    rating: {
      name: 'rating',
      description: 'Add rating (out of 5)',
      control: {
        type: 'number',
        step: 0.2
      },
      defaultValue: 3.8
    },
    text: {
      name: 'text',
      description: 'Add text next to the rating component',
      control: {
        type: 'text'
      },
      defaultValue: '18 reviews'
    },
    variant: {
      name: 'variant',
      description: 'Chose variant ',
      control: {
        type: 'radio'
      },
      labels: {
        green: 'Green',
        black: 'Black'
      },
      options: ['green', 'black'],
      defaultValue: 'green'
    }
  }
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = args => {
  return (
    <div className="p-4">
      <Rating {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  rating: 3.5,
  text: '18 reviews'
}
