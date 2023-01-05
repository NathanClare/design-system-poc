import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import React from 'react'

const DialogComp = ({}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center justify-center rounded px-3.5 text-base font-medium h-8 bg-primary-200 text-primary-400 hover:bg-primary-300 focus:shadow-xl">
          Edit profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-primary-white/50 fixed ring-inset ring-primary-600 transition" />
        <Dialog.Content className="bg-primary-100 rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12 max-w-md p-6 focus:outline-none">
          <Dialog.Title className="DialogTitle text-lg m-0 text-primary-700">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription mt-2.5 mx-0 mb-5 text-primary-600">
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>
          <fieldset className="flex align-center mb-4 gap-5">
            <label className="text-base text-right text-primary-base w-24" htmlFor="name">
              Name
            </label>
            <input
              className="w-11/12 inline-flex align-center justify-center rounded px-2.5 text-base text-primary-base h-9 shadow focus:shadow-xl"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="flex align-center mb-4 gap-5">
            <label className="text-base text-right text-primary-base w-24" htmlFor="username">
              Username
            </label>
            <input
              className="w-11/12 inline-flex align-center justify-center rounded px-2.5 text-base text-primary-base h-9 shadow focus:shadow-xl"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button className="inline-flex items-center justify-center rounded px-3.5 text-base font-medium h-9 bg-primary-200 text-primary-400 hover:bg-primary-70 focus:shadow-xl">
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="rounded-full h-6 w-6 inline-flex align-center justify-center text-primary-400 absolute top-5 right-3.5 focus:shadow-xl hover:shadow"
              aria-label="Close"
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
