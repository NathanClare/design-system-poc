import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Breadcrumb from './Breadcrumb'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio',
        labels: {
          standard: 'standard',
          odd: 'odd'
        }
      },
      options: ['standard', 'odd'],
      defaultValue: 'odd'
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
  variant: 'standard',
  homeLinkLabel: 'standard',
  hrefHome: '/',
  options: [
    {
      id: '1c',
      label: '/  page 1',
      href: '/'
    },
    {
      id: '1f',
      label: '/  page 2',
      href: '/'
    }
  ]
}

export const odd = Template.bind({})

odd.args = {
  variant: 'odd',
  homeLinkLabel: 'standard',
  hrefHome: '/',
  options: [
    {
      id: '1b',
      label: '>  option 1',
      href: '/'
    },
    {
      id: '1c',
      label: '>  option 2',
      href: '/'
    },
    {
      id: '1f',
      label: '>  option 3',
      href: '/'
    }
  ]
}
