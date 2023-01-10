import { BeakerIcon } from '@heroicons/react/24/solid'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import AlertComp from './Alert'

export default {
  title: 'Patterns/Alert',
  component: AlertComp,
  argTypes: {
    label: {
      name: 'Label',
      description: 'Define label',
      control: {
        type: 'text'
      },
      defaultValue: 'Edit profile'
    },
    ariaLabel: {
      name: 'Arialabel',
      description: 'Define arialabel',
      control: {
        type: 'text'
      },
      defaultValue: 'Open dialog'
    },
    cancelButtonLabel: {
      name: 'Label cancelButton',
      description: 'Define cancelButtonLabel',
      control: {
        type: 'text'
      },
      defaultValue: 'Safe changes'
    },
    ariaLabelCancelButton: {
      name: 'ariaLabel cancelButton',
      description: 'Define ariaLabel cancelButton',
      control: {
        type: 'text'
      },
      defaultValue: 'Save changes'
    },
    actionButtonLabel: {
      name: 'Label actionButton',
      description: 'Define actionButtonLabel',
      control: {
        type: 'text'
      },
      defaultValue: 'Safe changes'
    },
    ariaLabelActionButton: {
      name: 'AriaLabel ActionButton',
      description: 'Define ariaLabel ActionButton',
      control: {
        type: 'text'
      },
      defaultValue: 'Save changes'
    },
    title: {
      name: 'Title',
      description: 'Give title',
      control: {
        type: 'text'
      },
      defaultValue: 'Edit profile'
    },
    description: {
      name: 'Description',
      description: 'Give description',
      control: {
        type: 'text'
      },
      defaultValue: 'Make changes to your profile here. Click save when you are done.'
    },
    size: {
      name: 'Size',
      description: 'Select the button size',
      control: {
        type: 'radio',
        labels: {
          sm: 'sm',
          md: 'md',
          lg: 'lg'
        }
      },
      options: ['lg', 'md', 'sm'],
      defaultValue: 'md'
    },
    disabled: {
      name: 'Disabled',
      description: 'Choose to disable component',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    icon: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof AlertComp>

const Template: ComponentStory<typeof AlertComp> = args => {
  return (
    <div className="p-3">
      <AlertComp {...args} />
    </div>
  )
}

export const filled = Template.bind({})

filled.args = {
  label: 'Launch alert',
  ariaLabel: 'Launch alert',
  cancelButtonLabel: 'Action 1',
  ariaLabelCancelButton: 'Action 1',
  actionButtonLabel: 'Action 2',
  ariaLabelActionButton: 'Action 2',
  title: 'Basic dialog title',
  description: 'A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.',
  disabled: false,
  size: 'md'
}

export const withIcon = Template.bind({})

withIcon.args = {
  label: 'Launch alert',
  ariaLabel: 'Launch alert',
  cancelButtonLabel: 'Action 1',
  ariaLabelCancelButton: 'Action 1',
  actionButtonLabel: 'Action 2',
  ariaLabelActionButton: 'Action 2',
  title: 'Basic dialog title',
  description: 'A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.',
  disabled: false,
  size: 'md',
  icon: <BeakerIcon className="h-7 w-7" />
}
