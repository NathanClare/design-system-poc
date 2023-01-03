import React from 'react';
import classNames from 'classnames'
import * as Label from '@radix-ui/react-label';


interface InputProps {
    variant?: 'filled' | 'grey'
  }
  
  const inputClasses: Record<string, Record<string, string>> = {
      variant: {
          'filled': 'bg-primary-80 text-primary-30',
          'grey': 'bg-neutral-80 text-neutral-30'
      }
  }
  
const InputComp = ({variant = 'filled' }: InputProps) => {
    const classesStatic = classNames('flex items-center flex-wrap px-5 gap-4')
    const classesInputVariant = classNames('w-52 inline-flex items-center justify-center rounded px-2.5 text-base h-9 hover:shadow focus:shadow-lg', inputClasses['variant'][variant])
    const classesLabelVariant = classNames('text-base text-neutral-40 select-none')

    return (
        <div className={classesStatic}>
            <Label.Root className={classesLabelVariant} htmlFor="firstName">
                First name
            </Label.Root>
            <input className={classesInputVariant} type="text" id="firstName" defaultValue="Pedro Duarte" />
        </div>
    );
}

export default InputComp;