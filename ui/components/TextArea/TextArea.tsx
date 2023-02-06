import React, { type ComponentPropsWithoutRef, useState } from 'react'

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

const inputFamilyClasses: ITextAreaFamilyClasses = {
  state: {
    disabled: {
      wrapper: '[&_label]:text-neutral-200',
      input: '[&_textarea]:bg-neutral-50 [&_textarea]:border-neutral-50',
      hint: ''
    },
    error: {
      wrapper: '',
      input: '[&_textarea]:border-error-300 before:bg-error-200 before:opacity-40',
      hint: 'opacity-100 delay-600 text-error-base'
    },
    focused: {
      wrapper: '',
      input: '[&_textarea]:border-primary-300 before:bg-primary-200 before:opacity-10',
      hint: 'opacity-100 delay-600'
    },
    success: {
      wrapper: '',
      input: '[&_textarea]:border-primary-300 before:bg-primary-200 before:opacity-10',
      hint: 'opacity-0'
    },
    default: {
      wrapper: '',
      input: '',
      hint: ''
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
    <div className={`[&>*]:block [&>*+*]:mt-2 ${inputFamilyClasses['state'][getState()]['wrapper']}`}>
      {label && (
        <label className={`display-block text-sm`} htmlFor={id}>
          {label}
          {required && <span className="ml-1 text-xs">*</span>}
        </label>
      )}
      <div
        className={`before:block before:absolute before:-inset-1 transition-opacity relative before:rounded-sm ${
          inputFamilyClasses['state'][getState()]['input']
        }`}
      >
        <textarea
          className={`inline-flex outline-none items-center justify-center py-1.5 px-2 text-md background-white border rounded-sm border-neutral-100 w-full relative z-1 transiton-colors`}
          id={id}
          disabled={disabled}
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...(hint && { 'aria-labelledby': `${id}-hint` })}
        />
      </div>
      {hint && (
        <span id={`${id}-hint`} className={`text-xs opacity-0 transition-opacity ${inputFamilyClasses['state'][getState()]['hint']}`}>
          {hint}
        </span>
      )}
    </div>
  )
}

export default TextArea
