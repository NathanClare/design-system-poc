import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Link from './Link'

export default {
  title: 'Components/Link',
  component: Link,
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
      description: 'Select the link size',
      control: {
        type: 'radio',
        labels: {
          lg: 'Large',
          md: 'Medium',
          sm: 'Small'
        }
      },
      options: ['lg', 'md', 'sm'],
      defaultValue: 'md'
    },
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
      },
      options: ['filled', 'outlined', 'text'],
      defaultValue: 'outlined'
    },
    href: {
      name: 'href',
      description: 'Decide link destination',
      control: {
        type: 'text'
      }
    },
    target: {
      name: 'target',
      description: 'Choose link target',
      control: {
        type: 'radio'
      },
      options: ['_blank', '_self'],
      defaultValue: '_self'
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
    },
    disabled: {
      name: 'disabled',
      description: 'If the Link is disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = args => (
  <div className="p-4">
    <Link {...args} />
  </div>
)

export const filled = Template.bind({})

filled.args = {
  children: 'This is a Link',
  href: 'https://youtube.com',
  variant: 'filled'
}

export const outlined = Template.bind({})

outlined.args = {
  children: 'This is a Link',
  href: 'https://youtube.com',
  variant: 'outlined'
}

export const text = Template.bind({})

text.args = {
  children: 'This is a Link',
  href: 'https://youtube.com',
  variant: 'text'
}
