import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from './Card'

export default {
  title: 'Patterns/Card',
  component: Card,
  argTypes: {  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue magna felis.',
  buttonText: 'Click me'
}