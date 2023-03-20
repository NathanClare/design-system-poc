import * as RadixAccordion from '@radix-ui/react-accordion'
import React from 'react'

interface AccordionContentProps {
  className?: string
  children: React.ReactNode
}

export const RadixAccordionContent = ({ children }: AccordionContentProps) => {
  return (
    <RadixAccordion.Content className="overflow-hdden text-base text-brand-black data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
      <div className="p-md">{children}</div>
    </RadixAccordion.Content>
  )
}
