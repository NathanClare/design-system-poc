import * as Toast from '@radix-ui/react-toast'
import * as React from 'react'

interface ToastProps {
  className?: string
  date?: unknown
  label?: string
  title?: string
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

const ToastComp = ({ variant = 'filled', label, title, disabled }: ToastProps) => {
  const [open, setOpen] = React.useState(false)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <Toast.Provider swipeDirection="right">
      <button
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded font-medium font-base px-2.5 h-6 shadow disabled:bg-neutral-100 disabled:text-neutral-700 ${toastFamilyClasses['variant'][variant]['button']}`}
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        {label}
      </button>

      <Toast.Root
        className="bg-neutral-white rounded-lg shadow p-4 grid gap-x-3.5 items-center data-[state=open]:transition"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className={`mb-1 font-medium text-base ${toastFamilyClasses['variant'][variant]['title']}`}>{title}</Toast.Title>
        <Toast.Description asChild>
          <time className={`m-0 text-xs py-4 ${toastFamilyClasses['variant'][variant]['description']}`} dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </Toast.Description>
        <Toast.Action className="ToastAction" asChild altText="Goto schedule to undo">
          <button
            className={`inline-flex items-center justify-center rounded font-medium font-sm px-2.5 h-6 w-16 leading-6 shadow  ${toastFamilyClasses['variant'][variant]['buttonT']}`}
          >
            Undo
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="p-6 fixed bottom-0 right-0 flex flex-col gap-2.5 w-80 max-w-full m-0 list-none z-50 outline-none" />
    </Toast.Provider>
  )
}

function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}

function prettyDate(date: number | Date | undefined) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date)
}

export default ToastComp
