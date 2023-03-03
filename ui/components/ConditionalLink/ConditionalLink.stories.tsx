import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ConditionalLink from './ConditionalLink'

export default {
    title: 'Components/Conditional Link',
    component: ConditionalLink,
    argTypes: {
        children: {
            name: 'text',
            description: 'Text',
            control: {
                type: 'text',
            },
        },
        href: {
            table: {
                disable: true,
            },
        },
        target: {
            table: {
                disable: true,
            },
        },
        disabled: {
            name: 'disabled',
            description: 'If the Link is disabled',
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
        onClick: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof ConditionalLink>

const Template: ComponentStory<typeof ConditionalLink> = (args) => (
    <div className='p-4'>
        <ConditionalLink {...args} />
    </div>
)

export const InternalLink = Template.bind({})

InternalLink.args = {
    children: <>This is a Link</>,
    href: '/',
}

export const ExternalLink = Template.bind({})

ExternalLink.args = {
    children: <>This is a Link</>,
    href: 'https://youtube.com',
    target: '_blank',
}
