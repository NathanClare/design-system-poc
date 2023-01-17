import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import ConditionalLink from './ConditionalLink'

export default {
  title: 'Components/Conditional Link',
  component: ConditionalLink,
  argTypes: {
    children: {
      name: 'text',
      description: 'Text',
      control: {
        type: 'text'
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
    disabled: {
      name: 'disabled',
      description: 'If the Link is disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof ConditionalLink>

const Template: ComponentStory<typeof ConditionalLink> = args => (
  <div className="p-4">
    <ConditionalLink {...args} />
  </div>
)

export const internalLink = Template.bind({})

internalLink.args = {
  children: <>This is a Link</>,
  href: '/'
}

export const externalLink = Template.bind({})

externalLink.args = {
  children: <>This is a Link</>,
  href: 'https://youtube.com',
  target: '_blank'
}
