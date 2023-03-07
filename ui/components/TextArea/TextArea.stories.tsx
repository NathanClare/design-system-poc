import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TextArea from './TextArea'

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    id: {
      table: {
        disable: true
      }
    },
    label: {
      name: 'label',
      description: 'Optional description',
      control: {
        type: 'text'
      },
      defaultValue: 'Label'
    },
    disabled: {
      name: 'disabled',
      description: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = args => (
  <div className={`p-4`}>
    <TextArea {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  id: '1',
  hint: 'Hint text',
  required: true,
  rows: 4
}
