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
          grey: 'grey'
        }
      },
      options: ['filled', 'grey'],
      defaultValue: 'grey'
    },
    label: {
      name: 'label',
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
      name: 'disabled',
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
    <div className="p-4">
      <ToastComp {...args} />
    </div>
  )
}

export const primary = Template.bind({})

primary.args = {
  variant: 'filled',
  label: 'Add to calendar',
  title: 'Scheduled: Catch up'
}

export const neutral = Template.bind({})

neutral.args = {
  variant: 'grey',
  label: 'Add to calendar in grey',
  title: 'Scheduled: Catch up in grey'
}
