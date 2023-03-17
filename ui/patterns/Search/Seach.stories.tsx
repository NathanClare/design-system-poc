import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Search from './Search'

export default {
  title: 'Patterns/Search',
  component: Search,
  argTypes: {
    placeholder: {
      defaultValue: 'What are you looking for'
    },
    options: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = args => (
  <div className="p-4">
    <Search {...args} />
  </div>
)

export const Base = Template.bind({})

Base.args = {}
