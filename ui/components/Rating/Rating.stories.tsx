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
      }
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
  rating: 3.5
}
