import { useState, type ComponentPropsWithoutRef } from 'react'

interface InputProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string
  id: string
  hint?: string
  disabled?: boolean
  required?: boolean
}

interface ITextAreaFamilyClasses {
  state: Record<string, Record<string, string>>
}

const textAreaFamilyClasses: ITextAreaFamilyClasses = {
  state: {
    disabled: {
      wrapper: '[&_label]:text-neutral-300',
      input: '[&_textarea]:bg-neutral-200 [&_textarea]:border-neutral-200',
      hint: ''
    },
    focused: {
      wrapper: '',
      input: '[&_textarea]:border-primary-500 before:bg-primary-500 before:opacity-10',
      hint: 'opacity-100 delay-600 -translate-y-0 text-neutral-600'
    },
    default: {
      wrapper: '',
      input: 'before:opacity-10',
      hint: '-translate-y-sm '
    }
  }
}

const TextArea = ({ label, id, disabled, required, hint, ...props }: InputProps) => {
  const [focus, setFocus] = useState<boolean>(false)

  const getState = () => {
    switch (true) {
      case focus:
        return 'focused'
      default:
        return 'default'
    }
  }

  return (
    <div className={`[&>*+*]:mt-2 [&>*]:block ${textAreaFamilyClasses['state'][getState()]['wrapper']}`}>
      {label && (
        <label className={`display-block text-sm font-bold`} htmlFor={id}>
          {label}
          {required && !disabled && <span className="relative top-xs ml-1 text-md leading-3 text-primary-base">*</span>}
        </label>
      )}
      <div
        className={`before:delay-50 relative before:absolute before:-inset-1 before:block before:rounded-[4px] before:transition-all ${
          textAreaFamilyClasses['state'][getState()]['input']
        }`}
      >
        <textarea
          className={`background-white z-1 transiton-colors relative inline-flex w-full items-center justify-center rounded-sm border border-neutral-200 py-sm px-sm text-md outline-none `}
          id={id}
          disabled={disabled}
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...(hint && { 'aria-labelledby': `${id}-hint` })}
        />
      </div>
      {hint && (
        <span id={`${id}-hint`} className={`text-sm opacity-0 transition-all duration-200 ${textAreaFamilyClasses['state'][getState()]['hint']}`}>
          {hint}
        </span>
      )}
    </div>
  )
}

export default TextArea
