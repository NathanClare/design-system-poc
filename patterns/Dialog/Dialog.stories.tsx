import React from 'react-dom'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import DialogComp from './Dialog'

export default {
  title: 'Patterns/Dialog',
  component: DialogComp,
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
        name: 'label',
        description: 'Define label',
        control: {
          type: 'text'
        },
        defaultValue: 'Edit profile'
      },
      arialabel: {
        name: 'arialabel',
        description: 'Define arialabel',
        control: {
          type: 'text'
        },
        defaultValue: 'Open dialog'
      },
      labelclose: {
        name: 'labelclose',
        description: 'Define labelclose',
        control: {
          type: 'text'
        },
        defaultValue: 'Safe changes'
      },
      arialabelclose: {
        name: 'arialabelclose',
        description: 'Define arialabelclose',
        control: {
          type: 'text'
        },
        defaultValue: 'Save changes'
      },
      title: {
        name: 'title',
        description: 'Give title',
        control: {
          type: 'text'
        },
        defaultValue: 'Edit profile'
      },
      description: {
        name: 'description',
        description: 'Give description',
        control: {
          type: 'text'
        },
        defaultValue: 'Make changes to your profile here. Click save when you are done.'
      },
      disabled: {
        name: 'Disabled',
        description: 'Choose to disable component',
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
} as ComponentMeta<typeof DialogComp>

const Template: ComponentStory<typeof DialogComp> = args => {
  return (
      <DialogComp {...args} />
  )
 }

 export const filled = Template.bind({})

 filled.args = {
 variant: 'filled',
 label: 'Edit profile',
 labelclose: 'Save changes',
 arialabel: 'Open dialog',
 arialabelclose: 'Save changes',
 title: 'Edit profile',
 description: 'Make changes to your profile here. Click save when you are done.',
   options: [
     {
       id: '1c',
       label: 'Name',
       value: 'default',
       defvalue: 'Pedro Duarte'
     },
     {
       id: '1f',
       label: 'Username',
       value: '',
       defvalue: '@peduarte'
     }
   ]
 }
 
 export const grey = Template.bind({})
 
 grey.args = {
    variant: 'grey',
    label: 'Edit profile',
    labelclose: 'Save changes',
    arialabel: 'Open dialog',
    arialabelclose: 'Save changes',
    title: 'Edit profile',
    description: 'Make changes to your profile here. Click save when you are done.',
      options: [
        {
          id: '1c',
          label: 'Name',
          value: 'default',
          defvalue: 'Pedro Duarte grey'
        },
        {
          id: '1f',
          label: 'Username',
          value: '',
          defvalue: '@peduartegrey'
        }
      ]
    }
 