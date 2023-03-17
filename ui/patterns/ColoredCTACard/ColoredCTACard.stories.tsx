import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ColoredCTACard from './ColoredCTACard'

export default {
  title: 'Patterns/Cards/ColoredCTACard',
  component: ColoredCTACard,
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
} as ComponentMeta<typeof ColoredCTACard>

const Template: ComponentStory<typeof ColoredCTACard> = args => (
  <div className="p-4">
    <ColoredCTACard {...args} />
  </div>
)

export const base = Template.bind({})

base.args = {
  title: 'this is big title',
  options: [
    {
      id: '1',
      title: 'title',
      text: 'test',
      variant: 'brown',
      buttonText: 'butttttooon'
    },
    {
      id: '2',
      title: 'title',
      text: 'test testtesttesttest test test testtesttesttest testtest testtesttesttest testtest testtesttesttest testtest testtesttesttest testtest testtesttesttest testtest testtesttesttest testtest testtesttesttest testtest testtesttesttest testtest testtesttesttest testtest testtesttesttest testtest testtesttesttest testtest testtesttesttest test',
      variant: 'green',
      buttonText: 'butttttooon'
    }
  ]
}
