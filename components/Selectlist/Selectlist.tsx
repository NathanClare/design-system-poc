import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as RadixSelect from '@radix-ui/react-select'
import React from 'react'

interface SelectItemProps {
  className?: string
  value: string
  children: React.ReactNode
  disabled?: boolean
}

const SelectItem = ({ children, ...props }: SelectItemProps) => {
  return (
    <RadixSelect.Item {...props}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
}

const Select = () => (
  <RadixSelect.Root>
    <RadixSelect.Trigger className="SelectTrigger" aria-label="Food">
      <RadixSelect.Value placeholder="Select a fruit…" />
      <RadixSelect.Icon className="SelectIcon">
        <ChevronDownIcon />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content className="SelectContent">
        <RadixSelect.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="SelectViewport">
          <RadixSelect.Group>
            <RadixSelect.Label className="SelectLabel">Fruits</RadixSelect.Label>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </RadixSelect.Group>
          <RadixSelect.Separator className="SelectSeparator" />
          <RadixSelect.Group>
            <RadixSelect.Label className="SelectLabel">Vegetables</RadixSelect.Label>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" disabled>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">leek</SelectItem>
          </RadixSelect.Group>
          <RadixSelect.Separator className="SelectSeparator" />
          <RadixSelect.Group>
            <RadixSelect.Label className="SelectLabel">Meat</RadixSelect.Label>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </RadixSelect.Group>
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
)

export default Select
