import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';

import React from 'react'

interface SelectItemProps {
    className?: string
    value: string
    children: React.ReactNode
    disabled?: boolean
   
}

export const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
    return (
      <Select.Item className={classnames(' text-sm text-primary-base rounded-sm flex items-center h-6 pt-0 pr-9 pb-0 pl-6 relative select-none data-[disabled]:text-neutral-60 data-[disabled]:pointer-events-none data-[highlighted]:bg-primary-70 data-[highlighted]:text-primary-30 data-[highlighted]:outline-none', className)} {...props}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  };