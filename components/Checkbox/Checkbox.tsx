import React from 'react';
import classNames from 'classnames';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';


interface CheckboxProps {
    children: React.ReactNode
    variant?: 'filled' | 'grey'
  }

const CheckboxClasses: Record<string, Record<string, string>> = {

  variant: {
    'filled': 'text-primary-50',
    'grey': 'text-neutral-50'
  }
}


const CheckboxComp = ({ children, variant = 'filled' }: CheckboxProps) => {
    const classesStatic = classNames('flex items-center')
    const classesVariant = classNames(CheckboxClasses['variant'][variant])
    
    return (
        <form>
            <div className={classesStatic}>
                <Checkbox.Root className="bg-primary-100 h-6 w-6 p-1 rounded flex items-center shadow focus:shadow-lg hover:text-primary-60" defaultChecked id="c1">
                    <Checkbox.Indicator className={classesVariant}>
                        <CheckIcon />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className="text-neutral-30 text-base pl-3.5" htmlFor="c1">
                    {children}
                </label>
            </div>
        </form>
    );
}


export default CheckboxComp;