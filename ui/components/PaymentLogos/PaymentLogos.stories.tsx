import type { ComponentMeta, ComponentStory } from '@storybook/react'

import PaymentLogos from './PaymentLogos'

export default {
  title: 'Components/PaymentLogos',
  component: PaymentLogos,
  argTypes: {}
} as ComponentMeta<typeof PaymentLogos>

const Template: ComponentStory<typeof PaymentLogos> = () => {
  return (
    <div className={`!mt-8 p-4`}>
      <PaymentLogos />
    </div>
  )
}

export const Base = Template.bind({})

Base.args = {}
