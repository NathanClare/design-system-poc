import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Breadcrumb from './Breadcrumb'

export default {
  title: 'Patterns/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    seperator: {
      name: 'seperator',
      description: 'Select which icon goes between the breadcrumbs',
      options: ['/', '>', '→'],
      defaultValue: '>'
    },
    options: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = args => {
  return (
    <div className="p-4">
      <Breadcrumb {...args} />
    </div>
  )
}

export const standard = Template.bind({})

standard.args = {
  seperator: '>',
  homeLinkLabel: 'standard',
  hrefHome: '/',
  breadcrumbs: [
    {
      id: '1c',
      label: 'page 1',
      href: '/'
    },
    {
      id: '1f',
      label: 'page 2',
      href: '/product'
    }
  ],
  currentUrl: '/product',
  backCallback: () => {
    return null
  }
}

export const odd = Template.bind({})

odd.args = {
  seperator: '/',
  homeLinkLabel: 'standard',
  hrefHome: '/',
  breadcrumbs: [
    {
      id: '1b',
      label: 'option 1',
      href: '/'
    },
    {
      id: '1c',
      label: 'option 2',
      href: '/'
    },
    {
      id: '1f',
      label: 'option 3',
      href: '/'
    }
  ]
}
