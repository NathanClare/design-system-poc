import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      name: 'Label',
      description: 'Text',
      control: {
        type: 'text'
      }
    },
    error: {
      name: 'On Error',
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
      name: 'Checked',
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
      name: 'Disabled',
      description: '-',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} id={`c1`} />

export const primary = Template.bind({})

primary.args = {
  label: 'This is a checkbox',
  error: false,
  checked: true
}
