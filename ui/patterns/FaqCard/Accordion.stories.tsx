import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react-dom'

import Accordion from './Accordion'

export default {
  title: 'Patterns/Cards/FAQCard',
  component: Accordion,
  argTypes: {
    options: {
      table: {
        disable: true
      }
    },
    size: {
      name: 'size',
      description: 'Select display size',
      control: {
        type: 'radio'
      },
      options: ['mobile', 'tablet', 'desktop'],
      defaultValue: 'desktop'
    },
    variant: {
      name: 'variant',
      description: 'Select display variant',
      control: {
        type: 'radio'
      },
      options: ['grey', 'white'],
      defaultValue: 'white'
    }
  }
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = args => {
  const { size } = args

  const setViewportWidth = () => {
    if (size === 'desktop') {
      return 'w-[640px]'
    }
    if (size === 'tablet') {
      return 'w-[568px]'
    }
    if (size === 'mobile') {
      return 'w-[345px]'
    }
  }
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={`${setViewportWidth()} p-4`}>
      <Accordion {...args} />
    </div>
  )
}

export const base = Template.bind({})

base.args = {
  options: [
    {
      id: 'item-1',
      labelTrigger: 'Is it accessible?',
      value: 'Yes. It adheres to the WAI-ARIA design pattern.'
    }
  ]
}

export const baseMutliple = Template.bind({})

baseMutliple.args = {
  options: [
    {
      id: 'item-1',
      labelTrigger: 'Is it accessible?',
      value: 'Yes. It adheres to the WAI-ARIA design pattern.'
    },
    {
      id: 'item-2',
      labelTrigger: 'Is it unstyled?',
      value: 'Yes. It is unstyled by default, giving you freedom over the look and feel.'
    },
    {
      id: 'item-3',
      labelTrigger: 'Can it be animated?',
      value: 'Yes! You can animate the Accordion with CSS or JavaScript.'
    }
  ]
}
