import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';

interface IPopoverOptions {
  id: string
  label: string
}

interface PopoverProps {
  arialabel?: string
  title?: string
  disabled?: boolean
  variant?: 'filled' | 'grey'
  options: Array<IPopoverOptions>
}

interface IPopoverFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const popoverFamilyClasses: IPopoverFamilyClasses = {
  variant: {
    filled: {
      button: 'text-primary-500 bg-primary-white shadow shadow-primary-100 hover:bg-primary-100',
      content: 'bg-primary-white',
      title: 'text-primary-black',
      label: 'text-primary-600',
      input: 'text-primary-600',
      close: 'text-primary-400 hover:bg-primary-100',
      arrow: 'fill-white'
    },
    grey: {
      button: 'text-neutral-500 bg-neutral-100 shadow shadow-neutral-100 hover:bg-neutral-200',
      content: 'bg-neutral-100',
      title: 'text-primary-black',
      label: 'text-neutral-600',
      input: 'text-neutral-600',
      close: 'text-neutral-400 hover:bg-neutral-200',
      arrow: 'fill-neutral-100'
    }
  }
}

const PopoverComp = ({ variant = 'filled',arialabel, title, options, disabled }: PopoverProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className={ `rounded-full h-9 w-9 inline-flex items-center justify-center focus:shadow-xl disabled:bg-neutral-200 disabled:text-neutral-700 ${popoverFamilyClasses['variant'][variant]['button']}` } aria-label={arialabel} disabled={disabled}>
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={ `rounded p-5 w-[300px] shadow will-change-transform focus:shadow-lg focus:shadow-primary-500 ${popoverFamilyClasses['variant'][variant]['content']}` } sideOffset={5}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p className={ `m-0 text-base font-medium ${popoverFamilyClasses['variant'][variant]['title']}` } style={{ marginBottom: 10 }}>
              {title}
            </p>

            {options?.map(option => (
            <fieldset className="flex gap-5 items-center" key={option.id}>
              <label className={ `text-base w-[95px] ${popoverFamilyClasses['variant'][variant]['label']}` } htmlFor={option.id}>
                {option.label}
              </label>
              <input className={ `w-full inline-flex justify-center flex-1 rounded px-2.5 text-base text-primary-600 shadow h-6 focus:shadow-lg ${popoverFamilyClasses['variant'][variant]['input']}` } id={option.id} />
            </fieldset>
            ))}

          </div>
          <Popover.Close className={ `rounded-full h-6 w-6 items-center justify-center absolute top-1 right-1 focus:shadow-xl ${popoverFamilyClasses['variant'][variant]['close']}` } aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className={ `fill-white ${popoverFamilyClasses['variant'][variant]['arrow']}` } />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default PopoverComp;
