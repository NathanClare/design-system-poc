import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React, { type ReactElement } from 'react'

import { Button, Typography } from '../../components'

interface AlertProps {
  label: string
  ariaLabel?: string
  cancelButtonLabel?: string
  ariaLabelCancelButton?: string
  actionButtonLabel?: string
  ariaLabelActionButton?: string
  title?: string
  description?: string
  disabled?: boolean
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'grey'
  icon?: ReactElement
}

interface IAlertFamilyClasses {
  size: Record<string, string>
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
      title: 'text-neutral-800',
      description: 'text-neutral-800',
      content: 'bg-primary-50',
      overlay: 'ring-primary-600'
    }
  }
}

const AlertComp = ({
  size = 'md',
  variant = 'filled',
  label,
  ariaLabel,
  cancelButtonLabel = 'Cancel',
  ariaLabelCancelButton = 'Cancel',
  actionButtonLabel = 'Confirm',
  ariaLabelActionButton = 'Confirm',
  title,
  description,
  disabled,
  icon
}: AlertProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button aria-label={ariaLabel} disabled={disabled} variant={'filled'} size={`md`}>
          {label}
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className={`fixed flex justify-center items-center w-full h-full top-0 ring-inset data-[state=open]:animate-fadein bg-primary-black/90 data-[state=open]:bg-primary-white/70 ${alertFamilyClasses['variant'][variant]['overlay']}`}
        >
          <AlertDialog.Content
            className={`rounded-[28px] data-[state=open]:animate-fadein h-fit data-[state=open]:animate-scalein p-6 max-w-[420px] w-[90%] [&>*+*]:mt-4 ${alertFamilyClasses['size'][size]} ${alertFamilyClasses['variant'][variant]['content']}`}
          >
            {icon && <div className="[&>*]:mx-auto">{icon}</div>}
            <AlertDialog.Title className={`text-lg m-0 ${alertFamilyClasses['variant'][variant]['title']}`}>{title}</AlertDialog.Title>
            {description && (
              <AlertDialog.Description className={`mt-2.5 mx-0 mb-5 ${alertFamilyClasses['variant'][variant]['description']}`} asChild>
                <Typography tag={`p`} size={`sm`}>
                  {description}
                </Typography>
              </AlertDialog.Description>
            )}
            <div className="flex justify-end [&>button+button]:ml-2">
              <AlertDialog.Cancel asChild>
                <Button aria-label={ariaLabelCancelButton} variant={`text`} size={`sm`}>
                  {cancelButtonLabel}
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button aria-label={ariaLabelActionButton} variant={`text`} size={`sm`}>
                  {actionButtonLabel}
                </Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default AlertComp
