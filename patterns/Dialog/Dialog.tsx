import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import React, { type ReactNode } from 'react'

import { Button, Icon } from '../../components'

interface DialogProps {
  label?: string
  ariaLabel?: string
  labelClose?: string
  ariaLabelClose?: string
  title?: string
  description?: string
  disabled?: boolean
  variant?: 'filled' | 'grey'
  children: ReactNode
}

interface IDialogFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const dialogFamilyClasses: IDialogFamilyClasses = {
  variant: {
    filled: {
      buttonStart: 'bg-primary-200 text-primary-400 hover:bg-primary-300',
      buttonEnd: 'bg-primary-200 text-primary-400 hover:bg-primary-300',
      content: 'bg-primary-50 text-neutral-800',
      overlay: 'bg-primary-black/20 ring-primary-600',
      label: 'text-primary-base',
      input: 'text-primary-base'
    },
    grey: {
      buttonStart: 'bg-neutral-200 text-neutral-400 hover:bg-neutral-300',
      buttonEnd: 'bg-neutral-200 text-neutral-400 hover:bg-neutral-300',
      content: 'bg-neutral-100',
      overlay: 'bg-neutral-black/20 ring-neutral-600',
      label: 'text-neutral-base',
      input: 'text-neutral-base'
    }
  }
}

const DialogComp = ({
  variant = 'filled',
  label,
  ariaLabel,
  labelClose = 'close',
  ariaLabelClose = 'close dialog',
  title,
  description,
  disabled,
  children
}: DialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button aria-label={ariaLabel} disabled={disabled} variant={'filled'} size={`md`}>
          {label || ''}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed flex justify-center items-center w-full h-full top-0 data-[state=open]:animate-fadein data-[state=open]:bg-primary-white/70 ${dialogFamilyClasses['variant'][variant]['overlay']}`}
        >
          <Dialog.Content
            className={`relative rounded-[28px] data-[state=open]:animate-fadein h-fit p-6 max-w-[460px] w-[90%] focus:outline-none ${dialogFamilyClasses['variant'][variant]['content']}`}
          >
            <Dialog.Title className={`text-lg m-0 ${dialogFamilyClasses['variant'][variant]['title']}`}>{title}</Dialog.Title>
            <Dialog.Description className={`mt-2.5 mx-0 mb-5 ${dialogFamilyClasses['variant'][variant]['description']}`}>{description}</Dialog.Description>
            {children}
            <div className="flex mt-6 justify-end">
              <Dialog.Close asChild>
                <Button size={`md`}>{labelClose}</Button>
              </Dialog.Close>
            </div>
            <div className="absolute top-5 right-3.5">
              <Dialog.Close asChild>
                <Icon variant={`standard`} size={`sm`}>
                  <Cross2Icon />
                </Icon>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogComp
