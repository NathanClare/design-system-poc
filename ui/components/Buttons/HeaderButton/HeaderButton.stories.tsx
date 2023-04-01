import { HeartIcon } from '@heroicons/react/24/outline'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import HeaderButton from './HeaderButton'

export default {
  title: 'Components/Navigation/HeaderButton',
  component: HeaderButton,
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Select the variant type',
      control: {
        type: 'radio'
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
    icon: {
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
} as ComponentMeta<typeof HeaderButton>

const Template: ComponentStory<typeof HeaderButton> = args => (
  <div className="p-4">
    <HeaderButton {...args} />
  </div>
)

export const base = Template.bind({})

base.args = {
  icon: <HeartIcon className="h-4 w-4" />
}
