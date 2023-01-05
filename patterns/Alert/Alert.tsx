import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React from 'react'

interface AlertProps {
  size?: 'lg' | 'md' | 'sm'
  variant?: 'filled' | 'grey'
}

const alertClasses: Record<string, Record<string, string>> = {
  size: {
    sm: 'text-sm px-8 py-3',
    md: 'text-md px-8 py-3',
    lg: 'text-lg px-8 py-3'
  },
  variant: {
    filled: 'data-[state=checked]:bg-primary-10 data-[state=unchecked]:bg-primary-50',
    grey: 'data-[state=checked]:bg-neutral-30 data-[state=unchecked]:bg-neutral-60'
  }
}

const AlertDialogComp = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="Button violet">Delete account</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay bg-primary-30 fixed ring-inset" />
        <AlertDialog.Content className="AlertDialogContent bg-primary-100 rounded-lg shadow fixed left-2/4 top-1/2 w-11/12 p-6">
          <AlertDialog.Title className="AlertDialogTitle">Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </AlertDialog.Description>
          <div
            style={{
              display: 'flex',
              gap: 25,
              justifyContent: 'flex-end'
            }}
          >
            <AlertDialog.Cancel asChild>
              <button className="Button mauve">Cancel</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className="Button red">Yes, delete account</button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default AlertDialogComp
