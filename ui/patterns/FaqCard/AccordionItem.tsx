import * as RadixAccordion from '@radix-ui/react-accordion'
import React from 'react'

import TestIcon from '../../../assets/svgs/brand-element.svg'

interface AccordionItemProps {
  children: React.ReactNode
}

const RadixAccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionItemProps>(({ children, ...props }, forwardedRef) => {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        className="hover:border-b-2 data-[state=open]:border-b-2 hover:border-brand-redprimary hover:text-brand-redprimary flex-1 flex items-center justify-between text-base shadow p-md data-[state=open]:border-brand-redprimary data-[state=open]:text-brand-redprimary group transition-all"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <TestIcon className="h-md w-md transition group-data-[state=open]:rotate-90" aria-hidden />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
})

RadixAccordionTrigger.displayName = 'RadixAccordionTrigger'
export default RadixAccordionTrigger
