import { XMarkIcon, ExclamationCircleIcon, InformationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import * as RadixToast from '@radix-ui/react-toast'
import React from 'react'

import { Icon } from '../../components'

interface ToastProps {
  label?: string
  title?: string
  description?: string
  disabled?: boolean
  hasIcon?: boolean
  variant?: 'success' | 'warning' | 'error' | 'info' | 'successFilled' | 'warningFilled' | 'errorFilled' | 'infoFilled'
  duration: number
  altText: string
}

type SVGElementType = (props: React.ComponentProps<'svg'>) => JSX.Element

interface IToastFamilyClasses {
  variant: Record<string, Record<string, string>>
  icon: Record<string, SVGElementType>
}

const toastFamilyClasses: IToastFamilyClasses = {
  variant: {
    success: {
      button: 'bg-primary-200 text-primary-400',
      buttonExit: 'text-primary-400 hover:bg-primary-100 hover:shadow',
      title: 'text-primary-base',
      description: 'text-primary-400',
      root: 'bg-primary-50',
      icon: 'text-primary-600'
    },
    warning: {
      button: 'bg-secondary-200 text-secondary-400',
      buttonExit: 'text-secondary-400 hover:bg-secondary-100 hover:shadow',
      title: 'text-secondary-base',
      description: 'text-secondary-400',
      root: 'bg-secondary-50',
      icon: 'text-secondary-600'
    },
    error: {
      button: 'bg-error-200 text-error-400',
      buttonExit: 'text-error-400 hover:bg-error-100 hover:shadow',
      title: 'text-error-base',
      description: 'text-error-400',
      root: 'bg-error-50',
      icon: 'text-error-600'
    },
    info: {
      button: 'bg-tertiary-200 text-tertiary-400',
      buttonExit: 'text-tertiary-400 hover:bg-tertiary-100 hover:shadow',
      title: 'text-tertiary-base',
      description: 'text-tertiary-400',
      root: 'bg-tertiary-50',
      icon: 'text-tertiary-600'
    },
    successFilled: {
      button: 'bg-primary-200 text-primary-400',
      buttonExit: 'text-primary-white hover:bg-primary-500 hover:shadow focus:shadow',
      title: 'text-primary-white',
      description: 'text-primary-white',
      root: 'bg-primary-base',
      icon: 'text-primary-white'
    },
    warningFilled: {
      button: 'bg-secondary-200 text-secondary-400',
      buttonExit: 'text-secondary-white hover:bg-secondary-500 hover:shadow focus:shadow',
      title: 'text-secondary-white',
      description: 'text-secondary-white',
      root: 'bg-secondary-base',
      icon: 'text-secondary-white'
    },
    errorFilled: {
      button: 'bg-error-200 text-error-400',
      buttonExit: 'text-error-white hover:bg-error-500 hover:shadow focus:shadow',
      title: 'text-error-white',
      description: 'text-error-white',
      root: 'bg-error-base',
      icon: 'text-error-white'
    },
    infoFilled: {
      button: 'bg-tertiary-200 text-tertiary-400',
      buttonExit: 'text-tertiary-white hover:bg-tertiary-500 hover:shadow focus:shadow',
      title: 'text-tertiary-white',
      description: 'text-tertiary-white',
      root: 'bg-tertiary-base',
      icon: 'text-tertiary-white'
    }
  },
  icon: {
    success: CheckCircleIcon,
    warning: XMarkIcon,
    error: ExclamationCircleIcon,
    info: InformationCircleIcon
  }
}

// Templating
const Toast = ({ variant = 'success', label, title, description, disabled, hasIcon = true, duration = 5000, altText = 'Close' }: ToastProps) => {
  const [open, setOpen] = React.useState(false)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const ConditionalIcon = ({ SVGElement }: { SVGElement: SVGElementType }) => {
    if (hasIcon) {
      return (
        <Icon variant={'standard'} disabled={true}>
          <SVGElement className={`inline h-2 w-2 p-1 m-0 ${toastFamilyClasses['variant'][variant]['icon']}`} />
        </Icon>
      )
    }

    return null
  }

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
        duration={duration}
        className={`rounded-lg shadow p-4 grid gap-x-3.5 items-center data-[state=open]:transition data-[state=open]:animate-fadein data-[state=closed]:animate-fadeout ${toastFamilyClasses['variant'][variant]['root']}`}
        open={open}
        onOpenChange={setOpen}
      >
        <RadixToast.Title className={`mb-1 font-medium text-base break-all ${toastFamilyClasses['variant'][variant]['title']}`}>
          <ConditionalIcon SVGElement={toastFamilyClasses['icon']['success']} />
          {title}
        </RadixToast.Title>
        <RadixToast.Description asChild>
          <time
            className={`m-0 text-xs py-1 pl-3.5 break-all ${toastFamilyClasses['variant'][variant]['description']}`}
            dateTime={eventDateRef.current.toISOString()}
          >
            {description}
          </time>
        </RadixToast.Description>
        <RadixToast.Action className="ToastAction" asChild altText={altText}>
          <button
            className={`inline-flex items-center justify-center rounded font-medium font-sm leading-6 h-6 w-6 absolute top-12 right-10 p-1 ${toastFamilyClasses['variant'][variant]['buttonExit']}`}
          >
            <Icon variant={'standard'} disabled={true}>
              <XMarkIcon className={`h-6 w-6 absolute top-0 right-0 p-1`} />
            </Icon>
          </button>
        </RadixToast.Action>
      </RadixToast.Root>
      <RadixToast.Viewport className="p-6 fixed bottom-0 right-0 flex flex-col gap-2.5 w-11/12 max-w-[500px] m-0 list-none z-50 outline-none" />
    </RadixToast.Provider>
  )
}

export default Toast
