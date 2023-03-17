import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import swatch1 from '../../../assets/images/swatch1.png'
import swatch2 from '../../../assets/images/swatch2.png'

import TabsImageV2 from './TabsImageV2'

export default {
  title: 'Components/TabsImageV2',
  component: TabsImageV2,
  argTypes: {
    options: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof TabsImageV2>

const Template: ComponentStory<typeof TabsImageV2> = args => {
  return (
    <div className="p-4">
      <TabsImageV2 {...args} />
    </div>
  )
}

export const v4 = Template.bind({})

v4.args = {
  options: [
    {
      id: 'Hexagon 1',
      label: 'Hexagon 1',
      value: 'tab 1',
      name: 'Hexagon 1',
      description: 'tab 1',
      image: swatch1,
      showDescription: true
    },

    {
      id: 'Hexagon 2',
      label: 'Hexagon 2',
      value: 'tab 2',
      name: 'Hexagon 1',
      description: 'tab 1',
      image: swatch2,
      showDescription: false
    }
  ]
}
