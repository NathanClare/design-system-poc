import type { ComponentMeta, ComponentStory } from '@storybook/react'

import StockStatus from './StockStatus'

export default {
  title: 'Components/StockStatus',
  component: StockStatus,
  argTypes: {
    label: {
      name: 'label',
      description: 'Text',
      control: {
        type: 'text'
      },
      defaultValue: '10% off on your 1st order'
    },
    ariant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'select',
        labels: {
          success: 'success',
          warning: 'warning',
          error: 'error'
        }
      },
      options: ['success', 'warning', 'error'],
      defaultValue: 'success'
    }
  }
} as ComponentMeta<typeof StockStatus>

const Template: ComponentStory<typeof StockStatus> = args => (
  <div className="p-4">
    <StockStatus {...args} />
  </div>
)

export const success = Template.bind({})

success.args = {
  label: '10% off on your 1st order',
  variant: 'success'
}

export const warning = Template.bind({})

warning.args = {
  label: 'Almost out of stock',
  variant: 'warning'
}

export const error = Template.bind({})

error.args = {
  label: 'Out of stock',
  variant: 'error'
}
