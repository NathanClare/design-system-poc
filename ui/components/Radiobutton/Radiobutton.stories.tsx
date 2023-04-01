import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Radiogroup from './Radiobutton'

export default {
  title: 'Components/Radiobutton',
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

export const base = Template.bind({})

base.args = {
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
