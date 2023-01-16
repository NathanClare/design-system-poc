import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import SelectlistComp from './Selectlist'

export default {
  title: 'Components/Select List',
  component: SelectlistComp,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
        labels: {
          filled: 'filled',
          grey: 'grey'
        }
      },
      options: ['filled', 'grey'],
      defaultValue: 'grey'
    },
    placeholder: {
      name: 'tabel',
      description: 'Provide the placeholder',
      control: {
        type: 'text'
      },
      defaultValue: 'select something..'
    },
    ariaholder: {
      name: 'title',
      description: 'Provide the ariaholder',
      control: {
        type: 'text'
      },
      defaultValue: 'selector...'
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
      label: 'Filled option 1',
      values: ['green', 'blue', 'red']
    },
    {
      id: '1f',
      label: 'Filled option 2',
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
      label: 'Grey option 1',
      values: ['red', 'black', 'yellow']
    },
    {
      id: '1f',
      label: 'Grey option 2',
      values: ['pink']
    }
  ]
}
