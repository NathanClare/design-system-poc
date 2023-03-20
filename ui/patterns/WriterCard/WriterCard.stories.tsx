import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import WriterCard from './WriterCard'

export default {
  title: 'Patterns/Cards/WriterCard',
  component: WriterCard,
  argTypes: {
    options: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof WriterCard>

const Template: ComponentStory<typeof WriterCard> = args => {
  return (
    <div className="p-4">
      <WriterCard {...args} />
    </div>
  )
}

export const base = Template.bind({})

base.args = {
  name: 'Written by Paulien',
  description: 'Paulien is interior designer. Her goal is to inspire like-minded professionals and support people to take the best design and styling choice'
}
