import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Breadcrumbs from './Breadcrumbs'

export default {
  title: 'Patterns/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    breadcrumbs: {
      table: {
        disable: true
      }
    },
    backCallback: {
      table: {
        disable: true
      }
    },
    currentUrl: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = args => {
  return (
    <div className={`p-4`}>
      <Breadcrumbs {...args} />
    </div>
  )
}

const breadcrumbs = [
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
]

export const Base = Template.bind({})

Base.args = {
  breadcrumbs: breadcrumbs,
  currentUrl: '/'
}
