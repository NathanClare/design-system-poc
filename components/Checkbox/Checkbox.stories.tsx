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
    variant: {
      name: 'Variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      }
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
  variant: 'filled',
  checked: true
}
