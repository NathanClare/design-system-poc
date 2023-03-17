import { BeakerIcon } from '@heroicons/react/24/solid'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import CategoryButton from './CategoryButton'

export default {
  title: 'Components/Navigation/CategoryButton',
  component: CategoryButton,
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
        mobile: 'mobile',
        desktop: 'desktop'
      },
      options: ['mobile', 'desktop'],
      defaultValue: 'desktop'
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
} as ComponentMeta<typeof CategoryButton>

const Template: ComponentStory<typeof CategoryButton> = args => (
  <div className="p-4">
    <CategoryButton {...args} />
  </div>
)

export const floor = Template.bind({})

floor.args = {
  children: 'Button CTA',
  variant: 'floor',
  icon: <BeakerIcon className="h-4 w-4" />
}

export const wall = Template.bind({})

wall.args = {
  children: 'Button CTA',
  variant: 'wall',
  icon: <BeakerIcon className="h-4 w-4" />
}

export const outdoor = Template.bind({})

outdoor.args = {
  children: 'Button CTA',
  variant: 'outdoor',
  icon: <BeakerIcon className="h-4 w-4" />
}
