import { XMarkIcon } from '@heroicons/react/24/outline'
import * as RadixToast from '@radix-ui/react-toast'
import * as React from 'react'

import { Icon } from '../../components'

interface ToastProps {
  className?: string
  date?: unknown
  label?: string
  title?: string
  description?: string
  disabled?: boolean
  variant?: 'filled' | 'grey'
}

interface IToastFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const toastFamilyClasses: IToastFamilyClasses = {
  variant: {
    filled: {
      button: 'bg-primary-200 text-primary-400',
      buttonT: 'bg-primary-200 text-primary-400',
      title: 'text-primary-base',
      description: 'text-primary-400'
    },
    grey: {
      button: 'bg-neutral-200 text-neutral-400',
      buttonT: 'bg-neutral-200 text-neutral-400',
      title: 'text-neutral-base',
      description: 'text-neutral-400'
    }
  }
}

const Toast = ({ variant = 'filled', label, title, description, disabled }: ToastProps) => {
  const [open, setOpen] = React.useState(false)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <RadixToast.Provider swipeDirection="right">
      <button
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded font-medium font-base px-2.5 h-6 shadow disabled:bg-neutral-100 disabled:text-neutral-700 ${toastFamilyClasses['variant'][variant]['button']}`}
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        {label}
      </button>

      <RadixToast.Root
        className="bg-neutral-white rounded-lg shadow p-4 grid gap-x-3.5 items-center data-[state=open]:transition "
        open={open}
        onOpenChange={setOpen}
      >
        <RadixToast.Title className={`mb-1 font-medium text-base ${toastFamilyClasses['variant'][variant]['title']}`}>{title}</RadixToast.Title>
        <RadixToast.Description asChild>
          <time className={`m-0 text-xs py-4 ${toastFamilyClasses['variant'][variant]['description']}`} dateTime={eventDateRef.current.toISOString()}>
            {description}
          </time>
        </RadixToast.Description>
        <RadixToast.Action className="ToastAction" asChild altText="Goto schedule to undo">
          <button
            className={`inline-flex items-center justify-center rounded font-medium font-sm leading-6 shadow h-6 w-6 absolute top-10 right-10 p-1 ${toastFamilyClasses['variant'][variant]['buttonT']}`}
          >
            <Icon variant={'standard'} disabled={true}>
              <XMarkIcon className={`h-6 w-6 absolute top-0 right-0 p-1`} />
            </Icon>
          </button>
        </RadixToast.Action>
      </RadixToast.Root>
      <RadixToast.Viewport className="p-6 fixed bottom-0 right-0 flex flex-col gap-2.5 w-80 max-w-full m-0 list-none z-50 outline-none" />
    </RadixToast.Provider>
  )
}

export default Toast
