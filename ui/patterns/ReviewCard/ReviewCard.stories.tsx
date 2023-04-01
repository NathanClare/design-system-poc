import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ReviewCard from './ReviewCard'

export default {
  title: 'Patterns/Cards/ReviewCard',
  component: ReviewCard,
  argTypes: {
    href: {
      table: {
        disable: true
      }
    },
    target: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof ReviewCard>

const Template: ComponentStory<typeof ReviewCard> = args => (
  <div className="p-4">
    <ReviewCard {...args} />
  </div>
)

export const base = Template.bind({})

base.args = {
  name: 'Ellen',
  text: 'Mooie, nette, schone accommodatie. Een hele aardige host. Rustige omgeving. Fijn om een paar dagen te ontspannen!',
  time: '19/08/2022'
}
