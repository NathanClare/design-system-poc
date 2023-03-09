import type { ComponentMeta, ComponentStory } from '@storybook/react'

import DiscountRed from '../../../assets/svgs/discount-red.svg'
import Discount from '../../../assets/svgs/discount.svg'

import USPItem from './USPItem'

export default {
  title: 'Components/USPItem',
  component: USPItem,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text'
      },
      defaultValue: '10% off on your 1st order'
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      },
      labels: {
        red: 'Red',
        base: 'Base'
      },
      options: ['base', 'red']
    },
    icon: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof USPItem>

const Template: ComponentStory<typeof USPItem> = args => (
  <div className="p-4">
    <USPItem {...args} />
  </div>
)

export const base = Template.bind({})

base.args = {
  children: '10% off on your 1st order',
  variant: 'base',
  icon: <Discount className="h-4 w-4" />
}

export const red = Template.bind({})

red.args = {
  children: '10% off on your 1st order',
  variant: 'red',
  icon: <DiscountRed className="h-4 w-4" />
}
