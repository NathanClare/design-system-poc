import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Radiogroup from './Radiogroup'

export default {
  title: 'Components/Radio Group',
  component: Radiogroup,
  argTypes: {
    options: {
      table: {
        disable: true
      }
    },
    disabled: {
      name: 'disabled',
      description: 'If the radiobutton is disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    size: {
      name: 'size',
      description: 'Select the Logo size',
      control: {
        type: 'radio'
      },
      labels: {
        md: 'medium',
        lg: 'large'
      },
      options: ['md', 'lg'],
      defaultValue: 'md'
    }
  }
} as ComponentMeta<typeof Radiogroup>

const Template: ComponentStory<typeof Radiogroup> = args => {
  return (
    <div className="p-4">
      <Radiogroup {...args} />
    </div>
  )
}

export const Md = Template.bind({})

Md.args = {
  size: 'md',
  options: [
    {
      id: '1c',
      label: 'neutral option 1',
      value: 'default'
    },
    {
      id: '1f',
      label: 'neutral option 2',
      value: 'black'
    }
  ]
}

export const Lg = Template.bind({})

Lg.args = {
  size: 'lg',
  options: [
    {
      id: '1c',
      label: 'neutral option 1',
      value: 'default'
    },
    {
      id: '1f',
      label: 'neutral option 2',
      value: 'black'
    }
  ]
}
