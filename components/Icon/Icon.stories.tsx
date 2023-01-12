import { Cog8ToothIcon } from '@heroicons/react/24/outline'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Icon from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Icon size',
      control: {
        type: 'radio'
      }
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      },
      options: ['filled', 'standard'],
      defaultValue: 'standard'
    },
    disabled: {
      name: 'disabled',
      description: '-',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    children: {
      table: {
        disable: true
      }
    },
    href: {
      table: {
        disable: true
      }
    },
    target: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => (
  <div className="p-4">
    <Icon {...args} />
  </div>
)

export const filled = Template.bind({})

filled.args = {
  size: 'md',
  variant: 'filled',
  children: <Cog8ToothIcon className="h-6 w-6" />
}

export const standard = Template.bind({})

standard.args = {
  size: 'md',
  variant: 'standard',
  children: <Cog8ToothIcon className="h-6 w-6" />
}
