import React from 'react'
import classNames from 'classnames'
import * as Switch from '@radix-ui/react-switch';

interface SwitchProps {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'grey'
}

const switchClasses: Record<string, Record<string, string>> = {
    size: {
        'sm': 'text-sm px-8 py-3',
        'md': 'text-md px-8 py-3',
        'lg': 'text-lg px-8 py-3',
    },
    variant: {
        'filled': 'data-[state=checked]:bg-primary-10 data-[state=unchecked]:bg-primary-50',
        'grey': 'data-[state=checked]:bg-neutral-30 data-[state=unchecked]:bg-neutral-60'
    }
}

const Switchcomp = ({ size = 'lg', variant = 'filled' }: SwitchProps) => {
  const classesStatic = classNames('flex items-center')
  const classesVariant = classNames('w-10 h-6  rounded-full relative focus:drop-shadow-lg focus:outline-primary-base focus:border-primary-20', switchClasses['variant'][variant])

  return (
    <form>
    <div className={classesStatic}>
      <Switch.Root className={classesVariant}>
        <Switch.Thumb className={"block w-5 h-5 bg-primary-100 rounded-full duration-100 translate-x-1 data-[state=checked]:translate-x-4"} />
      </Switch.Root>
    </div>
  </form>      
);
}

export default Switchcomp