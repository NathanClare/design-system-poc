import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    error: {
      name: 'error',
      description: 'Set if invalid',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    id: {
      table: {
        disable: true
      }
    },
    checked: {
      table: {
        disable: true
      }
    },
    disabled: {
      name: 'disabled',
      description: '-',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    onChange: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    name: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    swatch: {
      table: {
        disable: true
      }
    },
    overrideClasses: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => (
  <div className="p-4">
    <Checkbox {...args} id={`c1`} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  error: false,
  checked: true
}
