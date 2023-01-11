import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import classNames from 'classnames'
import React from 'react'

interface AccordionItemProps {
  className?: string
  value: string
  children: React.ReactNode
  disabled?: boolean
}

export const AccordionTrigger = React.forwardRef, AccordionItemProps(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger className={classNames('bg-transparent px-5 h-[45] flex-1 flex items-center justify-between text-base text-primary-base shadow shadow-primary-base hover:bg-primary-100', className)} {...props} ref={forwardedRef}>
      {children}
      <ChevronDownIcon className="text-primary-500" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
))

export const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content className={classNames('overflow-hdden text-base text-primary-600 bg-primary-100', className)} {...props} ref={forwardedRef}>
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
))


export const AccordionTrigger = React.forwardRef, ButtonProps(
    ({ children, size = 'lg', variant = 'filled', disabled, submitting, href, target, type = 'button', icon, iconPosition = 'left', ...props }, forwardedRef) => {