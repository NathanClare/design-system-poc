import * as RadixAccordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import React from 'react'

interface AccordionItemProps {
  children: React.ReactNode
  disabled?: boolean
}

const RadixAccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionItemProps>(({ children, ...props }, forwardedRef) => {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        className="bg-transparent px-5 h-[45] flex-1 flex items-center justify-between text-base shadow text-neutral-base shadow-neutral-100 hover:bg-neutral-200 p-4 disabled:bg-neutral-400 disabled:text-neutral-800 data-[state=open]:[&>svg]:rotate-180"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="text-neutral-400 transition" aria-hidden />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
})

RadixAccordionTrigger.displayName = 'RadixAccordionTrigger'
export default RadixAccordionTrigger
