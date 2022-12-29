import React from 'react';
import classNames from 'classnames'
import * as Separator from '@radix-ui/react-separator';


interface SwitchProps {
  variant?: 'filled' | 'grey'
}

const seperatorClasses: Record<string, Record<string, string>> = {
variant: {
    'filled': 'bg-primary-30',
    'grey': 'bg-neutral-30'
}
}

const SeparatorComp = ({variant = 'filled' }: SwitchProps) => {
  const seperatorRoot = classNames(seperatorClasses['variant'][variant], 'data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:h-full data-[orientation=vertical]:mx-3.5 my-3.5')
  

  return (
    <div className='w-full max-w-xs mx-3.5'>
      <div className="font-semibold text-neutral-30">
        Radix in combination with Youwe
      </div>
      <div className="text-neutral-30">Different data-orientation = different styling.</div>
      <Separator.Root className={seperatorRoot} />
      <div className='flex items-center h-5'>
        <div className="text-neutral-30">Fill 1</div>
        <Separator.Root
          className={seperatorRoot}
          decorative
          orientation="vertical"
        />
        <div className="text-neutral-30">Fill 2</div>
        <Separator.Root
          className={seperatorRoot}
          decorative
          orientation="vertical"
        />
        <div className="text-neutral-30">Fill 3</div>
      </div>
    </div>
  );
}

export default SeparatorComp;