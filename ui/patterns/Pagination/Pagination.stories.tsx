import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Pagination from './Pagination'

export default {
  title: 'Patterns/Pagination',
  component: Pagination,
  argTypes: {
    totalPages: {
      name: 'totalPages',
      description: 'Select the total pages',
      control: {
        type: 'select'
      },
      options: [1, 2, 10],
      defaultValue: 10
    },
    pageNumbersToShow: {
      name: 'pageNumbersToShow',
      description: 'Select the number of pages to show. Hint: Set to 1 for mobile view.',
      control: {
        type: 'select'
      },
      options: [1, 2, 3],
      defaultValue: 3
    },
    currentIndex: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = args => {
  return (
    <div className="p-4">
      <Pagination {...args} />
    </div>
  )
}

export const primary = Template.bind({})

primary.args = {
  totalPages: 10
}
