import { CheckIcon, XMarkIcon, EyeIcon } from '@heroicons/react/24/solid'
import React, { type ComponentPropsWithoutRef, type ReactElement, useState } from 'react'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string
  id: string
  type: 'text' | 'email' | 'password' | 'search' | 'number'
  disabled?: boolean
  required?: boolean
  hint?: string
  error?: boolean
  success?: boolean
}

interface IInputFamilyClasses {
  state: Record<string, Record<string, string>>
  icon: Record<string, ReactElement>
}

const inputFamilyClasses: IInputFamilyClasses = {
  state: {
    disabled: {
      wrapper: '[&_label]:text-neutral-200',
      input: '[&_input]:bg-neutral-50 [&_input]:border-neutral-50',
      hint: ''
    },
    error: {
      wrapper: '',
      input: '[&_input]:border-error-300 before:bg-error-200 before:opacity-40',
      hint: 'opacity-100 delay-600 text-error-base'
    },
    focused: {
      wrapper: '',
      input: '[&_input]:border-primary-300 before:bg-primary-200 before:opacity-10',
      hint: 'opacity-100 delay-600'
    },
    success: {
      wrapper: '',
      input: '[&_input]:border-primary-300 before:bg-primary-200 before:opacity-10',
      hint: 'opacity-0'
    },
    default: {
      wrapper: '',
      input: '',
      hint: ''
    }
  },
  icon: {
    error: <XMarkIcon className={`w-5 h-5 [&>path]:fill-error-500`} />,
    success: <CheckIcon className={`w-5 h-5 [&>path]:fill-primary-500`} />,
    password: <EyeIcon className={`w-5 h-5 [&>path]:fill-neutral-300 cursor-pointer`} />
  }
}

const Input = ({ label, id, type = 'text', disabled, required, hint, error, success, ...props }: InputProps) => {
  const [focus, setFocus] = useState<boolean>(false)
  const showIcon = (Boolean(error || success) && !disabled) || type === 'password'

  const getState = () => {
    switch (true) {
      case disabled:
        return 'disabled'
      case error:
        return 'error'
      case success:
        return 'success'
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
        <input
          className={`inline-flex outline-none items-center justify-center py-1.5 px-2 text-md background-white border rounded-sm border-neutral-100 w-full relative z-1 transiton-colors`}
          type={type}
          id={id}
          disabled={disabled}
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {showIcon && (
          <span className={`absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 block`}>
            {inputFamilyClasses['icon'][type === 'password' ? 'password' : getState()]}
          </span>
        )}
      </div>
      {hint && <span className={`text-xs opacity-0 transition-opacity ${inputFamilyClasses['state'][getState()]['hint']}`}>{hint}</span>}
    </div>
  )
}

export default Input
