import type { ComponentMeta, ComponentStory } from '@storybook/react'

import InstaLogo from '../../../assets/social/instagram.svg'
import TestIcon from '../../../assets/svgs/brand-element.svg'
import LogoblackIcon from '../../../assets/svgs/logo-black.svg'
import LogoRedIcon from '../../../assets/svgs/logo-red.svg'
import LogoWhiteIcon from '../../../assets/svgs/logo-white.svg'

import Icon from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: {
      name: 'size',
      description: 'Select the Icon size',
      control: {
        type: 'radio'
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => (
  <div className="p-4">
    <Icon {...args} />
  </div>
)

export const base = Template.bind({})

base.args = {
  size: 'md',
  children: <TestIcon />
}

export const instagram = Template.bind({})

instagram.args = {
  size: 'md',
  children: <InstaLogo />
}

export const logo = Template.bind({})

logo.args = {
  size: 'md',
  children: <LogoRedIcon />
}

export const logoBlack = Template.bind({})

logoBlack.args = {
  size: 'md',
  children: <LogoblackIcon />
}
export const logoWhite = Template.bind({})

logoWhite.args = {
  size: 'md',
  children: <LogoWhiteIcon />
}
