import type { ComponentMeta, ComponentStory } from '@storybook/react'

import IconPay from './IconPay'

export default {
  title: 'Components/IconPay',
  component: IconPay,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
        labels: {
          paypal: 'Paypal',
          ideal: 'Ideal',
          maestro: 'Maestro',
          thuiswinkel: 'thuiswinkel',
          afterpay: 'Afterpay'
        }
      },
      options: ['paypal', 'ideal', 'thuiswinkel', 'afterpay', 'maestro'],
      defaultValue: 'paypal'
    },
    size: {
      name: 'size',
      description: 'Select the IconPay size',
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof IconPay>

const Template: ComponentStory<typeof IconPay> = args => (
  <div className="p-4">
    <IconPay {...args} />
  </div>
)

export const paypal = Template.bind({})

paypal.args = {
  variant: 'paypal',
  size: 'md'
}
