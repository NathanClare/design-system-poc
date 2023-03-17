import { PlayIcon } from '@heroicons/react/24/outline'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import VideoButton from './VideoButton'

export default {
  title: 'Components/Navigation/VideoButton',
  component: VideoButton,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the size type',
      control: {
        type: 'radio'
      }
    },
    href: {
      table: {
        disable: true
      }
    },
    target: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof VideoButton>

const Template: ComponentStory<typeof VideoButton> = args => (
  <div className="p-4">
    <VideoButton {...args} />
  </div>
)

export const base = Template.bind({})

base.args = {
  icon: <PlayIcon className="h-4 w-4" />,
  title: 'Test title',
  time: '1:06',
  href: '/test'
}
