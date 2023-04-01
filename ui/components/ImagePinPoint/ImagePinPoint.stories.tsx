import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ImagePinPoint from './ImagePinPoint'

export default {
  title: 'Components/ImagePinPoint',
  component: ImagePinPoint,
  argTypes: {
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
      options: ['sm', 'md'],
      defaultValue: 'md'
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
} as ComponentMeta<typeof ImagePinPoint>

const Template: ComponentStory<typeof ImagePinPoint> = args => (
  <div className="p-4 flex justify-center items-center">
    <ImagePinPoint {...args} />
  </div>
)

export const base = Template.bind({})

base.args = {}
