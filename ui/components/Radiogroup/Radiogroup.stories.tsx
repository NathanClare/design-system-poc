import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Radiogroup from './Radiogroup'

export default {
  title: 'Components/Radio Group',
  component: Radiogroup,
  argTypes: {
    options: {
      table: {
        disable: true
      }
    },
    disabled: {
      name: 'disabled',
      description: 'If the radiobutton is disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Radiogroup>

const Template: ComponentStory<typeof Radiogroup> = args => {
  return (
    <div className="p-4">
      <Radiogroup {...args} />
    </div>
  )
}

export const neutral = Template.bind({})

neutral.args = {
  options: [
    {
      id: '1c',
      label: 'neutral option 1',
      value: 'default'
    },
    {
      id: '1f',
      label: 'neutral option 2',
      value: 'black'
    }
  ]
}
