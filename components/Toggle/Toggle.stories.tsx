import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Toggle from './Toggle'

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the button size',
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = args => <Toggle {...args} />

export const md = Template.bind({})

md.args = {
  size: 'md'
}

export const lg = Template.bind({})

lg.args = {
  size: 'lg'
}
