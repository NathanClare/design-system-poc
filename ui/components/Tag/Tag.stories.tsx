import type { ComponentMeta, ComponentStory } from '@storybook/react'

import BrandIcon from '../../../assets/svgs/brand-element.svg'

import Tag from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
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
      description: 'Select the Tag size',
      control: {
        type: 'select',
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
    type: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => (
  <div className="p-4">
    <Tag {...args} />
  </div>
)

export const v1 = Template.bind({})

v1.args = {
  children: 'Almost sold out',
  size: 'sm',
  variant: 'v1'
}

export const v2 = Template.bind({})

v2.args = {
  children: 'Very popular',
  size: 'sm',
  variant: 'v2'
}

export const Icon = Template.bind({})

Icon.args = {
  children: 'Only 3 left',
  size: 'sm',
  variant: 'icon',
  icon: <BrandIcon className="h-4 w-4" />,
  iconPosition: 'left'
}
