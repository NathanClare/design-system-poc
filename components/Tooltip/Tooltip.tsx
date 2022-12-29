import React from 'react';
import classNames from 'classnames';
import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';


interface TooltipProps {
    children: React.ReactNode
    size?: 'lg' | 'md' | 'sm'
  }
  
  const tooltipClasses: Record<string, Record<string, string>> = {

      size: {
        'sm': 'py-0.5 px-2',
        'md': 'py-1 px-4',
        'lg': 'py-3 px-6'
    }
  }


const TooltipComp = ({children, size = 'lg'}: TooltipProps) => {
const classes = classNames('TooltipContent font-base shadow select-none text-primary-base bg-primary-100 duration-500 will-change-transform', tooltipClasses['size'][size])
  
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="IconButton h-9 w-9 inline-flex items-center justify-center text-primary-base rounded-full shadow hover:bg-primary-80 focus:shadow-lg">
            <PlusIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={classes} sideOffset={5}>
            {children}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipComp;