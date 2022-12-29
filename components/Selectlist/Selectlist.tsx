import React from 'react';
// import * as Select from '@radix-ui/react-select';
// import classNames from 'classnames';
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

// interface ButtonProps {
//   children: React.ReactNode
//   size?: 'lg' | 'md' | 'sm'
//   variant?: 'filled' | 'outlined' | 'text'
// }

// const selectClasses: Record<string, Record<string, string>> = {
//   size: {
//     'sm': 'text-sm px-8 py-3',
//     'md': 'text-md px-8 py-3',
//     'lg': 'text-lg px-8 py-3',
//   },
//   variant: {
//     'filled': 'bg-primary-base text-primary-100 hover:bg-primary-50 hover:shadow-lg focus:bg-primary-50 pressed:bg-primary-50 disabled:bg-neutral-50 disabled:text-neutral-70' ,
//     'outlined': 'bg-primary-100 text-primary-base border hover:bg-primary-90 focus:bg-primary-90 pressed:bg-primary-90 disabled:text-neutral-50',
//     'text':  'bg-primary-100 text-primary-base  hover:bg-primary-90 focus:bg-primary-90 pressed:bg-primary-90 disabled:text-neutral-50'
//   }
// }

// const SelectDemo = ({children, size = 'lg', variant = 'filled' }: ButtonProps) => {
//   const classes = classNames('inline-flex rounded-3xl', selectClasses['size'][size], selectClasses['variant'][variant])

//   return (
//     <Select.Root>
//     <Select.Trigger className="SelectTrigger" aria-label="Food">
//       <Select.Value placeholder="Select a fruit…" />
//       <Select.Icon className="SelectIcon">
//         <ChevronDownIcon />
//       </Select.Icon>
//     </Select.Trigger>
//     <Select.Portal>
//       <Select.Content className="SelectContent">
//         <Select.ScrollUpButton className="SelectScrollButton">
//           <ChevronUpIcon />
//         </Select.ScrollUpButton>
//         <Select.Viewport className="SelectViewport">
//           <Select.Group>
//             <Select.Label className="SelectLabel">Fruits</Select.Label>
//             <SelectItem value="apple">Apple</SelectItem>
//             <SelectItem value="banana">Banana</SelectItem>
//             <SelectItem value="blueberry">Blueberry</SelectItem>
//             <SelectItem value="grapes">Grapes</SelectItem>
//             <SelectItem value="pineapple">Pineapple</SelectItem>
//           </Select.Group>

//           <Select.Separator className="SelectSeparator" />

//           <Select.Group>
//             <Select.Label className="SelectLabel">Vegetables</Select.Label>
//             <SelectItem value="aubergine">Aubergine</SelectItem>
//             <SelectItem value="broccoli">Broccoli</SelectItem>
//             <SelectItem value="carrot" disabled>
//               Carrot
//             </SelectItem>
//             <SelectItem value="courgette">Courgette</SelectItem>
//             <SelectItem value="leek">leek</SelectItem>
//           </Select.Group>

//           <Select.Separator className="SelectSeparator" />

//           <Select.Group>
//             <Select.Label className="SelectLabel">Meat</Select.Label>
//             <SelectItem value="beef">Beef</SelectItem>
//             <SelectItem value="chicken">Chicken</SelectItem>
//             <SelectItem value="lamb">Lamb</SelectItem>
//             <SelectItem value="pork">Pork</SelectItem>
//           </Select.Group>
//         </Select.Viewport>
//         <Select.ScrollDownButton className="SelectScrollButton">
//           <ChevronDownIcon />
//         </Select.ScrollDownButton>
//       </Select.Content>
//     </Select.Portal>
//   </Select.Root>
// );
// }

  

// const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
//   return (
//     <Select.Item className={classNames('SelectItem', className)} {...props} ref={forwardedRef}>
//       <Select.ItemText>{children}</Select.ItemText>
//       <Select.ItemIndicator className="SelectItemIndicator">
//         <CheckIcon />
//       </Select.ItemIndicator>
//     </Select.Item>
//   );
// });

// export default SelectDemo;