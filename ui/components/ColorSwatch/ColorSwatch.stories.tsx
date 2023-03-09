import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ColorSwatch from './ColorSwatch'

export default {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  argTypes: {
    label: {
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
      description: 'If the ColorSwatch is disabled',
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
} as ComponentMeta<typeof ColorSwatch>

const Template: ComponentStory<typeof ColorSwatch> = args => (
  <div className="p-4">
    <ColorSwatch {...args} />
  </div>
)

export const base = Template.bind({})

base.args = {
  options: [
    {
      id: '1c',
      value: 'default'
    },
    {
      id: '1f',
      value: 'black'
    }
  ]
}
