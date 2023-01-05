import React from 'react-dom'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import ToastComp from './Toast'

export default {
  title: 'Components/Toast',
  component: ToastComp,
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
      },
      label: {
        name: 'tabel',
        description: 'Optional description',
        control: {
          type: 'text'
        },
        defaultValue: 'Add to calendar'
      },
      title: {
        name: 'title',
        description: 'Give title',
        control: {
          type: 'text'
        },
        defaultValue: 'Scheduled: Catch u'
      },
      disabled: {
        name: 'Disabled',
        description: 'Choose to disable component',
        control: {
          type: 'boolean'
        },
        defaultValue: false
      }
  }
} as ComponentMeta<typeof ToastComp>

const Template: ComponentStory<typeof ToastComp> = args => {
  return (
    <>
      <ToastComp {...args} />
    </>
  )
 }

export const filled = Template.bind({})

filled.args = {
    variant: 'filled',
    label: 'Add to calendar',
    title: 'Scheduled: Catch up'
}

export const grey = Template.bind({})

grey.args = {
    variant: 'grey',
    label: 'Add to calendar in grey',
    title: 'Scheduled: Catch up in grey'
}
