import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import Toast from './Toast'

export default {
  title: 'Patterns/Toast',
  component: Toast,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'select',
        labels: {
          success: 'success',
          warning: 'warning',
          info: 'info',
          error: 'error',
          successFilled: 'successFilled',
          warningFilled: 'warningFilled',
          infoFilled: 'infoFilled',
          errorFilled: 'errorFilled'
        }
      },
      options: ['success', 'warning', 'info', 'error', 'successFilled', 'warningFilled', 'infoFilled', 'errorFilled'],
      defaultValue: 'success'
    },
    label: {
      name: 'label',
      description: 'Optional description',
      control: {
        type: 'text'
      },
      defaultValue: 'add label'
    },
    title: {
      name: 'title',
      description: 'Give title',
      control: {
        type: 'text'
      },
      defaultValue: 'Title'
    },
    description: {
      name: 'description',
      description: 'Give description',
      control: {
        type: 'text'
      },
      defaultValue: 'Something happened.'
    },
    altText: {
      name: 'altText',
      description: 'Give altText',
      control: {
        type: 'text'
      },
      defaultValue: 'Close Toast.'
    },
    disabled: {
      name: 'disabled',
      description: 'Choose to disable component',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    hasIcon: {
      table: {
        disable: true
      }
    },
    duration: {
      name: 'duration',
      description: 'Choose duration in millisecond',
      control: {
        type: 'number'
      },
      defaultValue: 5000
    }
  }
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = args => {
  return (
    <div className="p-4">
      <Toast {...args} />
    </div>
  )
}

export const success = Template.bind({})

success.args = {
  variant: 'success',
  label: 'Label',
  title: 'Title',
  altText: 'Close Toast',
  duration: 5000
}

export const warning = Template.bind({})

warning.args = {
  variant: 'warning',
  label: 'Label',
  title: 'Title',
  altText: 'Close Toast',
  duration: 5000
}

export const error = Template.bind({})

error.args = {
  variant: 'error',
  label: 'Label',
  title: 'Title',
  altText: 'Close Toast',
  duration: 5000
}

export const info = Template.bind({})

info.args = {
  variant: 'info',
  label: 'Label',
  title: 'Title',
  altText: 'Close Toast',
  duration: 5000
}

export const successFilled = Template.bind({})

successFilled.args = {
  variant: 'successFilled',
  label: 'Label',
  title: 'Title',
  altText: 'Close Toast',
  duration: 5000
}

export const warningFilled = Template.bind({})

warningFilled.args = {
  variant: 'warningFilled',
  label: 'Label',
  title: 'Title',
  altText: 'Close Toast',
  duration: 5000
}

export const errorFilled = Template.bind({})

errorFilled.args = {
  variant: 'errorFilled',
  label: 'Label',
  title: 'Title',
  altText: 'Close Toast',
  duration: 5000
}

export const infoFilled = Template.bind({})

infoFilled.args = {
  variant: 'infoFilled',
  label: 'Label',
  title: 'Title',
  altText: 'Close Toast',
  duration: 5000
}
