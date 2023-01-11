import * as Accordion from '@radix-ui/react-accordion'
import React from 'react'

import { AccordionTrigger, AccordionContent } from './AccordionItem'

const AccordionDemo = () => (
  <Accordion.Root className="rounded-lg w-[300px] bg-primary-200 shadow shadow-primary-100" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item
      className="overflow-hidden mt-px first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:shadow focus-within:primary-200 focus-within:z-10"
      value="item-1"
    >
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>Yes. It is unstyled by default, giving you freedom over the look and feel.</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">Yes! You can animate the Accordion with CSS or JavaScript.</div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
)

export default AccordionDemo
