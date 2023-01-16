import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      name: 'label',
      description: 'Text',
      control: {
        type: 'text'
      }
    },
    error: {
      name: 'on error',
      description: 'Set if invalid',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    id: {
      table: {
        disable: true
      }
    },
    checked: {
      name: 'checked',
      description: 'Set the checkbox state',
      control: {
        type: 'select',
        labels: {
          true: 'Checked',
          false: 'Unchecked',
          indeterminate: 'Indeterminate'
        }
      },
      options: [true, false, 'indeterminate'],
      defaultValue: 'md'
    },
    disabled: {
      name: 'disabled',
      description: '-',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => (
  <div className="p-4">
    <Checkbox {...args} id={`c1`} />
  </div>
)

export const primary = Template.bind({})

primary.args = {
  label: 'This is a checkbox',
  error: false,
  checked: true
}
