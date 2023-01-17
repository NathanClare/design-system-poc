import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Tabs from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
        labels: {
          line: 'line',
          softRounded: 'softRounded',
          solidRounded: 'solidRounded'
        }
      },
      options: ['line', 'softRounded', 'solidRounded'],
      defaultValue: 'line'
    },
    size: {
      name: 'size',
      description: 'Select the tab size',
      control: {
        type: 'radio',
        labels: {
          md: 'Medium',
          sm: 'Small'
        }
      },
      options: ['md', 'sm'],
      defaultValue: 'md'
    },
    options: {
      table: {
        disable: true
      }
    },
    disabled: {
      name: 'disabled',
      description: 'If Tabs is disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => {
  return (
    <div className="p-4">
      <Tabs {...args} />
    </div>
  )
}

export const softRounded = Template.bind({})

softRounded.args = {
  variant: 'softRounded',
  options: [
    {
      id: 'tab1',
      label: 'softRounded 1',
      value: 'softRounded 1'
    },
    {
      id: 'tab2',
      label: 'softRounded 2',
      value: 'softRounded 2'
    },
    {
      id: 'tab3',
      label: 'softRounded 3',
      value: 'softRounded 3'
    },
    {
      id: 'tab4',
      label: 'softRounded 4',
      value: 'softRounded 4'
    },
    {
      id: 'tab5',
      label: 'softRounded 5',
      value: 'softRounded 5'
    },
    {
      id: 'tab6',
      label: 'softRounded 6',
      value: 'softRounded 6'
    },
    {
      id: 'tab7',
      label: 'softRounded 7',
      value: 'softRounded 7'
    }
  ]
}

export const solidRounded = Template.bind({})

solidRounded.args = {
  variant: 'solidRounded',
  options: [
    {
      id: 'tab1',
      label: 'solidRounded 1',
      value: 'password'
    },
    {
      id: 'tab2',
      label: 'solidRounded 2',
      value: 'username'
    }
  ]
}

export const line = Template.bind({})

line.args = {
  variant: 'line',
  options: [
    {
      id: 'tab1',
      label: 'line 1',
      value: 'password'
    },
    {
      id: 'tab2',
      label: 'line 2',
      value: 'username'
    }
  ]
}
