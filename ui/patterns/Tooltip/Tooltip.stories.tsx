import { PlusIcon } from '@radix-ui/react-icons'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Tooltip from './Tooltip'

export default {
  title: 'Patterns/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text'
      }
    },
    size: {
      name: 'size',
      description: 'Select the tooltip size',
      control: {
        type: 'radio'
      }
    },
    icon: {
      table: {
        disable: true
      }
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
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => (
  <div className="p-4 flex align-items w-full h-full justify-center items-center">
    <Tooltip {...args} />
  </div>
)

export const small = Template.bind({})

small.args = {
  children: 'This is a tooltip',
  size: 'sm',
  icon: <PlusIcon className="!h-2 !w-2" />
}

export const medium = Template.bind({})

medium.args = {
  children: 'This is a tooltip',
  size: 'md',
  disabled: false,
  icon: <PlusIcon className="!h-3 !w-3" />
}

export const large = Template.bind({})

large.args = {
  children: 'This is a tooltip',
  size: 'lg',
  disabled: false,
  icon: <PlusIcon className="!h-4 !w-4" />
}
