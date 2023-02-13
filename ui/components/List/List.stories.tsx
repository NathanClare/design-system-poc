import type { ComponentMeta, ComponentStory } from '@storybook/react'

import List from './List'

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    direction: {
      name: 'direction',
      description: 'Specify the direction of the list',
      control: {
        type: 'radio'
      },
      defaultValue: false
    }
  }
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = args => {
  return (
    <div className="w-96 p-4">
      <List {...args}>
        <span className="text-base">List item</span>
        <span className="text-base">List item</span>
        <span className="text-base">List item</span>
      </List>
    </div>
  )
}

export const primary = Template.bind({})

primary.args = {
  direction: 'column'
}
