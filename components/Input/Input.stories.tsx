import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      name: 'variant',
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
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const filled = Template.bind({})

filled.args = {
  variant: 'filled'
}

export const outlined = Template.bind({})

outlined.args = {
  variant: 'filled',
  label: 'Label'
}
