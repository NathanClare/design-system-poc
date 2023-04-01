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
      options: ['sm', 'md', 'lg'],
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

export const primaryRed = Template.bind({})

primaryRed.args = {
  children: 'Button CTA',
  variant: 'primaryRed'
}

export const primaryGreen = Template.bind({})

primaryGreen.args = {
  children: 'Button CTA',
  variant: 'primaryGreen'
}

export const primaryBlack = Template.bind({})

primaryBlack.args = {
  children: 'Button CTA',
  variant: 'primaryBlack'
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  children: 'Button CTA',
  variant: 'primaryRed',
  icon: <BeakerIcon className="h-4 w-4" />,
  iconPosition: 'right'
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

export const ghost = Template.bind({})

ghost.args = {
  children: 'Button CTA',
  variant: 'ghost'
}
