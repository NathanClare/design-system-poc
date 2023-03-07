import { BeakerIcon } from '@heroicons/react/24/solid'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

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
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      }
    },
    size: {
      name: 'size',
      description: 'Select the size',
      control: {
        type: 'radio'
      },
      labels: {
        sm: 'small',
        lg: 'large'
      },
      options: ['sm', 'lg'],
      defaultValue: 'lg'
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
      control: {
        type: 'radio'
      },
      if: { arg: 'icon' }
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
  variant: 'primary'
}

export const secondary = Template.bind({})

secondary.args = {
  children: 'Button CTA',
  variant: 'secondary'
}

export const tertiary = Template.bind({})

tertiary.args = {
  children: 'Button CTA',
  variant: 'tertiary'
}

export const icon = Template.bind({})

icon.args = {
  children: 'Button CTA',
  variant: 'primary',
  icon: <BeakerIcon className="h-4 w-4" />,
  iconPosition: 'right'
}
