import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import SelectlistComp from './Selectlist'

export default {
  title: 'Components/Select List',
  component: SelectlistComp,
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Select the variant type',
      control: {
        type: 'Radio',
        labels: {
          filled: 'filled',
          grey: 'grey'
        }
      },
      options: ['filled', 'grey'],
      defaultValue: 'grey'
    },
    placeholder: {
      name: 'Label',
      description: 'Provide the placeholder',
      control: {
        type: 'text'
      },
      defaultValue: 'select something..'
    },
    ariaholder: {
      name: 'Title',
      description: 'Provide the ariaholder',
      control: {
        type: 'text'
      },
      defaultValue: 'selector...'
    },
    disabled: {
      name: 'Disabled',
      description: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    options: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof SelectlistComp>

const Template: ComponentStory<typeof SelectlistComp> = args => {
  return (
    <div className="p-4">
      <SelectlistComp {...args} />
    </div>
  )
}

export const filled = Template.bind({})

filled.args = {
  variant: 'filled',
  options: [
    {
      id: '1c',
      values: ['green', 'blue', 'red', 'redred', 'bluelbue']
    },
    {
      id: '1f',
      values: ['orange']
    }
  ]
}

export const grey = Template.bind({})

grey.args = {
  variant: 'grey',
  options: [
    {
      id: '1c',
      values: ['red', 'black', 'yellow']
    },
    {
      id: '1f',
      values: ['pink']
    }
  ]
}
