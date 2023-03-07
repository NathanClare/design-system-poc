import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Select from './Select'
import SelectOption from './SelectOption'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => (
  <div className="p-4">
    <Select {...args}>
      <SelectOption value="1">Option 1</SelectOption>
      <SelectOption value="2">Option 3</SelectOption>
      <SelectOption value="3">Option 2</SelectOption>
    </Select>
  </div>
)

export const Standard = Template.bind({})

Standard.args = {
  placeholder: 'Placeholder'
}
