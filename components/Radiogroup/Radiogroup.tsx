import React from 'react';
import classNames from 'classnames'
import * as RadioGroup from '@radix-ui/react-radio-group';

interface RadiogroupProps {
    variant?: 'filled' | 'grey'
  }
  
  const radiogroupClasses: Record<string, Record<string, string>> = {
      variant: {
          'filled': 'after:bg-primary-70',
          'grey': 'after:bg-neutral-70',
      }
  }

const RadioGroupComp = ({variant = 'filled' }: RadiogroupProps) => {
    const classesStatic = classNames('flex items-center')
    const classesVariant = classNames('flex items-center justify-center w-full h-full relative after:block after:h-3 after:w-3 after:rounded-full', radiogroupClasses['variant'][variant])
   
  

    return (
        <form>
            <RadioGroup.Root className="flex flex-col gap-2.5" defaultValue="default" aria-label="View density">
                <div className={classesStatic}>
                    <RadioGroup.Item className="bg-neutral-100 w-6 h-6 rounded-full shadow hover:bg-neutral-90 focus:shadow-xl" value="default" id="r1">
                        <RadioGroup.Indicator className={classesVariant} />
                    </RadioGroup.Item>
                    <label className="pl-3.5 text-base select-none text-neutral-40" htmlFor="r1">
                        Default
                    </label>
                </div>
                <div className={classesStatic}>
                    <RadioGroup.Item className="bg-neutral-100 w-6 h-6 rounded-full shadow hover:bg-neutral-90 focus:shadow-xl" value="comfortable" id="r2">
                        <RadioGroup.Indicator className={classesVariant} />
                    </RadioGroup.Item>
                    <label className="pl-3.5 text-base select-none text-neutral-40" htmlFor="r2">
                        Comfortable
                    </label>
                </div>
                <div className={classesStatic}>
                    <RadioGroup.Item className="bg-neutral-100 w-6 h-6 rounded-full shadow hover:bg-neutral-90 focus:shadow-xl" value="compact" id="r3">
                        <RadioGroup.Indicator className={classesVariant} />
                    </RadioGroup.Item>
                    <label className="pl-3.5 text-base select-none text-neutral-40" htmlFor="r3">
                        Compact
                    </label>
                </div>
            </RadioGroup.Root>
        </form>
    );
}

export default RadioGroupComp;