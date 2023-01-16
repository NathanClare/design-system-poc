import * as RadixAccordion from '@radix-ui/react-accordion'
import React from 'react'

import { RadixAccordionContent } from './AccordionContent'
import RadixAccordionTrigger from './AccordionItem'

interface AccordionOption {
  id: string
  labelTrigger: string
  value: string
}

interface AccordionProps {
  options: Array<AccordionOption>
  disabled?: boolean
}

const Accordion = ({ disabled, options }: AccordionProps) => {
  return (
    <RadixAccordion.Root
      className="rounded-lg max-w-[300px] w-[80%] shadow shadow-primary-100 bg-neutral-100 disabled:bg-neutral-500"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {options?.map(option => (
        <RadixAccordion.Item
          key={option.id}
          className="overflow-hidden mt-px first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:shadow focus-within:neutral-200 focus-within:z-10"
          value={option.id}
          disabled={disabled}
        >
          <RadixAccordionTrigger>{option.labelTrigger}</RadixAccordionTrigger>
          <RadixAccordionContent>{option.value}</RadixAccordionContent>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}

export default Accordion
