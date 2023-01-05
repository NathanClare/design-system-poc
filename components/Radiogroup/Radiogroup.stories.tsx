import { Label } from '@radix-ui/react-label'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Radiogroup from './Radiogroup'

export default {
  title: 'Components/Radiogroup',
  component: Radiogroup,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
        labels: {
          filled: 'filled',
          grey: 'grey',
          
        }
      },
      options: ['filled', 'grey'],
      defaultValue: 'grey'
    }
  }
} as ComponentMeta<typeof Radiogroup>

const Template: ComponentStory<typeof Radiogroup> = args => {
  return (
    <>
      <Radiogroup {...args} />
    </>
  )
 }

export const filled = Template.bind({})

filled.args = {
  variant: 'filled',
  options: [
    {
      id: '1c',
      label: 'Filled option 1',
      value: 'default'
    },
    {
      id: '1f',
      label: 'Filled option 2',
      value: ''
    }
  ]
}

export const grey = Template.bind({})

grey.args = {
  variant: 'grey',
  options: [
    {
      id: '1b',
      label: 'Grey option 1',
      value: ''
    },
    {
      id: '1c',
      label: 'Grey option 2',
      value: 'default'
    },
    {
      id: '1f',
      label: 'Grey option 3',
      value: ''
    }
  ]
}
