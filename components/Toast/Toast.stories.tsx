import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import Toast from './Toast'

export default {
  title: 'Components/Toast',
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
  title: 'Title'
}

export const warning = Template.bind({})

warning.args = {
  variant: 'warning',
  label: 'Label',
  title: 'Title'
}

export const error = Template.bind({})

error.args = {
  variant: 'error',
  label: 'Label',
  title: 'Title'
}

export const info = Template.bind({})

info.args = {
  variant: 'info',
  label: 'Label',
  title: 'Title'
}

export const successFilled = Template.bind({})

successFilled.args = {
  variant: 'successFilled',
  label: 'Label',
  title: 'Title'
}

export const warningFilled = Template.bind({})

warningFilled.args = {
  variant: 'warningFilled',
  label: 'Label',
  title: 'Title'
}

export const errorFilled = Template.bind({})

errorFilled.args = {
  variant: 'errorFilled',
  label: 'Label',
  title: 'Title'
}

export const infoFilled = Template.bind({})

infoFilled.args = {
  variant: 'infoFilled',
  label: 'Label',
  title: 'Title'
}
