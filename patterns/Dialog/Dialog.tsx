import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import React from 'react'

interface IDialogOptions {
  id: string
  label: string
  value: string
  defValue: string
}

interface DialogProps {
  label?: string
  ariaLabel?: string
  labelClose?: string
  ariaLabelClose?: string
  title?: string
  description?: string
  disabled?: boolean
  variant?: 'filled' | 'grey'
  options: Array<IDialogOptions>
}

interface IDialogFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const dialogFamilyClasses: IDialogFamilyClasses = {
  variant: {
    filled: {
      buttonStart: 'bg-primary-200 text-primary-400 hover:bg-primary-300',
      buttonEnd: 'bg-primary-200 text-primary-400 hover:bg-primary-300',
      title: 'text-primary-700',
      description: 'text-primary-600',
      content: 'bg-primary-100',
      overlay: 'bg-primary-black/20 ring-primary-600',
      label: 'text-primary-base',
      input: 'text-primary-base'
    },
    grey: {
      buttonStart: 'bg-neutral-200 text-neutral-400 hover:bg-neutral-300',
      buttonEnd: 'bg-neutral-200 text-neutral-400 hover:bg-neutral-300',
      title: 'text-neutral-700',
      description: 'text-neutral-600',
      content: 'bg-neutral-100',
      overlay: 'bg-neutral-black/20 ring-neutral-600',
      label: 'text-neutral-base',
      input: 'text-neutral-base'
    }
  }
}

const DialogComp = ({ variant = 'filled', label, ariaLabel, labelClose='close', ariaLabelClose='close dialog', title, description, disabled, options}: DialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`inline-flex items-center justify-center rounded px-3.5 text-base font-medium h-8 focus:shadow-xl disabled:bg-neutral-100 disabled:text-neutral-700 ${dialogFamilyClasses['variant'][variant]['buttonStart']}`}
          aria-label={ariaLabel}
          disabled={disabled}>
          {label}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={ `fixed w-full h-full top-0 ${dialogFamilyClasses['variant'][variant]['overlay']}` } />
        <Dialog.Content className={ `rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12 max-w-md p-6 focus:outline-none ${dialogFamilyClasses['variant'][variant]['content']}` }>
          <Dialog.Title className={ `text-lg m-0 ${dialogFamilyClasses['variant'][variant]['title']}` }>{title}</Dialog.Title>
          <Dialog.Description className={ `mt-2.5 mx-0 mb-5 ${dialogFamilyClasses['variant'][variant]['description']}` }>
            {description}
          </Dialog.Description>

          {options?.map(option => (
            <fieldset className="flex align-center mb-4 gap-5" key={option.id}>
              <label className={ `text-base text-right w-24 ${dialogFamilyClasses['variant'][variant]['label']}` } htmlFor={option.value}>
              {option.label}
              </label>
              <input
                className={ `w-11/12 inline-flex align-center justify-center rounded px-2.5 text-base h-9 shadow focus:shadow-xl ${dialogFamilyClasses['variant'][variant]['input']}` }
                id={option.id}
                defaultValue={option.defValue}
              />
            </fieldset>
          ))}

          <div className='flex mt-6 justify-end'>
            <Dialog.Close asChild>
              <button className={ `inline-flex items-center justify-center rounded px-3.5 text-base font-medium h-9 focus:shadow-xl ${dialogFamilyClasses['variant'][variant]['buttonEnd']}` }>
                {labelClose}
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="rounded-full h-6 w-6 inline-flex align-center justify-center text-primary-400 absolute top-5 right-3.5 focus:shadow-xl hover:shadow"
              aria-label={ariaLabelClose}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogComp






