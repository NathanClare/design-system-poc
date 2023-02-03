import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    id: {
      table: {
        disable: true
      }
    },
    label: {
      name: 'label',
      description: 'Optional description',
      control: {
        type: 'text'
      },
      defaultValue: 'Label'
    },
    disabled: {
      name: 'disabled',
      description: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    error: {
      name: 'error',
      description: 'Error',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    success: {
      name: 'success',
      description: 'Success',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => (
  <div className={`p-4`}>
    <Input {...args} />
  </div>
)

export const filled = Template.bind({})

filled.args = {
  id: '1',
  hint: 'Hint text',
  required: true
}

export const outlined = Template.bind({})

outlined.args = {
  label: 'Label',
  id: '1'
}
