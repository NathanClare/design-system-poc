import * as RadixAccordion from '@radix-ui/react-accordion'
import React from 'react'

interface AccordionContentProps {
  className?: string
  children: React.ReactNode
}

export const RadixAccordionContent = ({ children }: AccordionContentProps) => {
  return (
    <RadixAccordion.Content className="overflow-hdden text-base text-neutral-600 bg-neutral-200 data-[state=open]:animate:scaleIn data-[state=closed]:animate:scaleIn">
      <div className="py-4 px-5">{children}</div>
    </RadixAccordion.Content>
  )
}
