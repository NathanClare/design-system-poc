import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Typography } from './Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: { },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Primary = Template.bind({})

Primary.args = {
  tag: 'h1',
  children: 'Heading',
}

export const Secondary = Template.bind({})

Secondary.args = {
  tag: 'p',
  children: 'Lorem ipsum dolor',
}