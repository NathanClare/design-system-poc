import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React from 'react'

interface AlertProps {
  label?: string
  ariaLabel?: string
  labelCloseOption1?: string
  ariaLabelCloseOption1?: string
  labelCloseOption2?: string
  ariaLabelCloseOption2?: string
  title?: string
  description?: string
  disabled?: boolean
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'grey'
}

interface IAlertFamilyClasses {
  size: Record<string, string>,
  variant: Record<string, Record<string, string>>
}


const alertFamilyClasses: IAlertFamilyClasses = {
  size: {
    sm: 'w-5/12',
    md: 'w-6/12',
    lg: 'w-11/12'
  },
  variant: {
    filled: {
      buttonOpen: 'bg-primary-200 text-primary-400 hover:bg-primary-300',
      buttonCloseOption1: 'bg-secondary-200 text-secondary-400 hover:bg-secondary-300',
      buttonCloseOption2: 'bg-primary-200 text-primary-400 hover:bg-primary-300',
      title: 'text-primary-700',
      description: 'text-primary-600',
      content: 'bg-primary-100',
      overlay: 'bg-primary-black/20 ring-primary-600'
    },
    grey: {
      buttonOpen: 'bg-neutral-200 text-neutral-400 hover:bg-neutral-300',
      buttonCloseOption1: 'bg-secondary-200 text-secondary-400 hover:bg-secondary-300',
      buttonCloseOption2: 'bg-neutral-200 text-neutral-400 hover:bg-neutral-300',
      title: 'text-neutral-700',
      description: 'text-neutral-600',
      content: 'bg-neutral-100',
      overlay: 'bg-neutral-black/20 ring-neutral-600'
    }
  }
}

const AlertComp = ({ size = 'md', variant = 'filled', label, ariaLabel, labelCloseOption1='close option1', ariaLabelCloseOption1='close option1', labelCloseOption2='close option2', ariaLabelCloseOption2='close option2', title, description, disabled }: AlertProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className={ ` inline-flex items-center justify-center rounded px-3.5 text-base font-medium h-8 focus:shadow-xl disabled:bg-neutral-100 disabled:text-neutral-700 ${alertFamilyClasses['variant'][variant]['buttonOpen']}` }
          disabled={disabled}
          aria-label={ariaLabel}>
          {label}
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={ ` fixed w-full h-full top-0 ring-inset  ${alertFamilyClasses['variant'][variant]['overlay']}` }/>
        <AlertDialog.Content className={ ` rounded-lg shadow fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 ${alertFamilyClasses['size'][size]} ${alertFamilyClasses['variant'][variant]['content']}` }>
          <AlertDialog.Title className={ ` text-lg m-0 ${alertFamilyClasses['variant'][variant]['title']}` }>{title}</AlertDialog.Title>
          <AlertDialog.Description className={ ` mt-2.5 mx-0 mb-5  ${alertFamilyClasses['variant'][variant]['description']}` }>
            {description}
          </AlertDialog.Description>
          <div className='flex mt-6 justify-end'>
            <AlertDialog.Cancel asChild>
              <button className={ ` inline-flex items-center justify-center rounded px-3.5 ml-2 text-base font-medium h-8 focus:shadow-xl disabled:bg-neutral-100 disabled:text-neutral-700 ${alertFamilyClasses['variant'][variant]['buttonCloseOption1']}` } aria-label={ariaLabelCloseOption1}>{labelCloseOption1}</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className={ ` inline-flex items-center justify-center rounded px-3.5 ml-2 text-base font-medium h-8 focus:shadow-xl disabled:bg-neutral-100 disabled:text-neutral-700 ${alertFamilyClasses['variant'][variant]['buttonCloseOption2']}` } aria-label={ariaLabelCloseOption2}>{labelCloseOption2}</button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default AlertComp










