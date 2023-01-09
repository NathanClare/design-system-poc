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
     labelCloseOption1: {
        name: 'Label closeOption1',
        description: 'Define labelCloseOption1',
        control: {
            type: 'text'
        },
        defaultValue: 'Safe changes'
        },
     ariaLabelCloseOption1: {
        name: 'AriaLabel closeOption1',
        description: 'Define ariaLabelCloseOption1',
        control: {
            type: 'text'
        },
        defaultValue: 'Save changes'
        },
    labelCloseOption2: {
        name: 'Label close',
        description: 'Define labelCloseOption2',
        control: {
            type: 'text'
        },
        defaultValue: 'Safe changes'
        },
        ariaLabelCloseOption2: {
        name: 'AriaLabel closeOption2',
        description: 'Define ariaLabelCloseOption2',
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
    variant: {
      name: 'Variant',
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
      }
  }
} as ComponentMeta<typeof AlertComp>

const Template: ComponentStory<typeof AlertComp> = args => {
  return (
    <>
      <AlertComp {...args} />
    </>
  )
}

export const filled = Template.bind({})

filled.args = {
    label: 'Delete account', 
    ariaLabel: 'delete account',
    labelCloseOption1: 'Cancel',
    ariaLabelCloseOption1: 'cancel',
    labelCloseOption2: 'Yes, delete account',
    ariaLabelCloseOption2: 'delete account',
    title: 'Are you absolutely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    disabled: false,
    size: 'md',
    variant: 'filled'
}

export const grey = Template.bind({})

grey.args = {
    label: 'Delete account in grey', 
    ariaLabel: 'delete account',
    labelCloseOption1: 'Cancel',
    ariaLabelCloseOption1: 'cancel',
    labelCloseOption2: 'Yes, delete account',
    ariaLabelCloseOption2: 'delete account',
    title: 'Are you absolutely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    disabled: false,
    size: 'md',
    variant: 'grey'
}
