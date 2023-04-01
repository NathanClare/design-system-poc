import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Price from './PriceTag'

export default {
  title: 'Components/PriceTag',
  component: Price,
  argTypes: {
    description: {
      name: 'description',
      description: 'Description text',
      control: {
        type: 'text'
      }
    },
    regularPrice: {
      name: 'regularPrice',
      description: 'Regular price',
      control: {
        type: 'number'
      }
    },
    variant: {
      name: 'variant',
      description: 'Select the Price variant',
      control: {
        type: 'select',
        labels: {
          square: 'Square',
          rectangle: 'Rectangle'
        }
      },
      options: ['rectangle', 'square'],
      defaultValue: 'square'
    },
    size: {
      name: 'size',
      description: 'Select the Price size',
      control: {
        type: 'select',
        labels: {
          lg: 'Large',
          md: 'Medium',
          sm: 'Small'
        }
      },
      options: ['lg', 'md', 'sm'],
      defaultValue: 'md'
    }
  }
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = args => (
  <div className="p-4">
    <Price {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  description: 'VAT incl.',
  euro: 35,
  cents: 99
}
