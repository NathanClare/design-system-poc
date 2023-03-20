// import { BeakerIcon } from '@heroicons/react/24/outline'
// import type { ComponentMeta, ComponentStory } from '@storybook/react'

// import TestIcon from '../../../assets/svgs/brand-element.svg'

// import CategoryCard from './CategoryCard'

// export default {
//   title: 'Patterns/Cards/CategoryCard',
//   component: CategoryCard,
//   argTypes: {
//     size: {
//       name: 'size',
//       description: 'Select display size',
//       control: {
//         type: 'radio'
//       },
//       options: ['mobile', 'tablet', 'desktop'],
//       defaultValue: 'desktop'
//     },
//     title: {
//       name: 'title',
//       description: 'Title',
//       control: {
//         type: 'text'
//       },
//       defaultValue: 'Room'
//     },
//     alt: {
//       name: 'alt',
//       description: 'Alt text',
//       control: {
//         type: 'text'
//       },
//       defaultValue: 'CategoryCTA'
//     }
//   }
// } as ComponentMeta<typeof CategoryCard>

// const Template: ComponentStory<typeof CategoryCard> = args => {
//   const { size } = args

//   const setViewportWidth = () => {
//     if (size === 'desktop') {
//       return 'w-[343px]'
//     }
//     if (size === 'tablet') {
//       return 'w-[360px]'
//     }
//     if (size === 'mobile') {
//       return 'w-[308px]'
//     }
//   }

//   return (
//     // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//     <div className={`${setViewportWidth()} p-4`}>
//       <CategoryCard {...args} />
//     </div>
//   )
// }

// export const base = Template.bind({})

// base.args = {
//   title: 'Room',
//   href: '/',
//   children: <TestIcon />,
//   icon: <BeakerIcon className="h-4 w-4" />
// }
