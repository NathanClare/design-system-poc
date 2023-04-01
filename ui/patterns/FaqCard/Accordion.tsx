import * as RadixAccordion from '@radix-ui/react-accordion'
import React from 'react'

import { RadixAccordionContent } from './AccordionContent'
import RadixAccordionTrigger from './AccordionItem'

interface AccordionOption {
  id: string
  labelTrigger: string
  value: string
}

interface FAQCardProps {
  options: Array<AccordionOption>
  size?: 'desktop' | 'tablet' | 'mobile'
  variant?: 'white' | 'grey'
}

interface IFAQCardFamilyClasses {
  variant: Record<string, string>
}

const fAQCardFamilyClasses: IFAQCardFamilyClasses = {
  variant: {
    white: 'bg-surface-0',
    grey: 'bg-surface-20'
  }
}

const FAQCard = ({ options, variant = 'white' }: FAQCardProps) => {
  return (
    <RadixAccordion.Root className={`rounded-lg w-full shadow ${fAQCardFamilyClasses['variant'][variant]}`} type="single" defaultValue="item-1" collapsible>
      {options?.map(option => (
        <RadixAccordion.Item
          key={option.id}
          className="overflow-hidden mt-px first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:shadow focus-within:surface-20 focus-within:z-10"
          value={option.id}
        >
          <RadixAccordionTrigger>{option.labelTrigger}</RadixAccordionTrigger>
          <RadixAccordionContent>{option.value}</RadixAccordionContent>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}

export default FAQCard
