import { BeakerIcon } from '@heroicons/react/24/solid'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
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
      description: 'Select the button size',
      control: {
        type: 'select',
        labels: {
          lg: 'Large',
          md: 'Medium'
        }
      },
      options: ['lg', 'md'],
      defaultValue: 'md'
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      }
    },
    disabled: {
      name: 'disabled',
      description: 'If the button is disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    submitting: {
      name: 'submitting',
      description: 'Display a loading icon',
      control: {
        type: 'boolean'
      },
      defaultValue: false
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
    icon: {
      table: {
        disable: true
      }
    },
    iconPosition: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <div className="p-4">
    <Button {...args} />
  </div>
)

export const primary = Template.bind({})

primary.args = {
  children: 'Button CTA',
  size: 'md',
  variant: 'primary'
}

export const secondary = Template.bind({})

secondary.args = {
  children: 'Button CTA',
  size: 'md',
  variant: 'secondary'
}

export const tertiary = Template.bind({})

tertiary.args = {
  children: 'Button CTA',
  size: 'md',
  variant: 'tertiary'
}

export const ghost = Template.bind({})

ghost.args = {
  children: 'Button CTA',
  size: 'md',
  variant: 'ghost'
}

export const icon = Template.bind({})

icon.args = {
  children: 'Button CTA',
  size: 'md',
  variant: 'primary',
  icon: <BeakerIcon className="h-4 w-4" />,
  iconPosition: 'right'
}
