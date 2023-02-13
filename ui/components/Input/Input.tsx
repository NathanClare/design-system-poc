import { CheckIcon, EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState, type ComponentPropsWithoutRef, type ReactElement } from 'react'

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
  // eslint-disable-next-line no-unused-vars
  passwordIcon: (showPassword: boolean) => ReactElement
}

const inputFamilyClasses: IInputFamilyClasses = {
  state: {
    disabled: {
      wrapper: '[&_label]:text-surface-300',
      input: '[&_input]:bg-surface-200 [&_input]:border-surface-200 [&_input]:text-surface-400',
      hint: ''
    },
    error: {
      wrapper: '',
      input: '[&_input]:border-error-500 before:bg-error-500 before:opacity-25',
      hint: 'opacity-100 delay-600 text-error-500 -translate-y-0'
    },
    focused: {
      wrapper: '',
      input: '[&_input]:border-info-500 before:bg-info-500 before:opacity-10',
      hint: 'opacity-100 delay-600 -translate-y-0 text-surface-600'
    },
    success: {
      wrapper: '',
      input: '[&_input]:border-success-500 before:bg-success-500 before:opacity-10',
      hint: 'opacity-0 delay-300 -translate-y-0 text-surface-600'
    },
    default: {
      wrapper: '',
      input: 'before:opacity-0',
      hint: 'opacity-0 -translate-y-sm'
    }
  },
  icon: {
    error: <XMarkIcon className={`h-5 w-5 [&>path]:fill-error-500`} />,
    success: <CheckIcon className={`h-5 w-5 [&>path]:fill-success-500`} />,
    password: <EyeSlashIcon className={`h-5 w-5 cursor-pointer [&>path]:fill-surface-300`} />,
    passwordVisible: <EyeIcon className={`h-5 w-5 cursor-pointer [&>path]:fill-surface-300`} />
  },
  passwordIcon: (showPassword: boolean) => {
    return showPassword ? inputFamilyClasses.icon.passwordVisible : inputFamilyClasses.icon.password
  }
}

const Input = ({ label, id, type = 'text', disabled, required, hint, error, success, ...props }: InputProps) => {
  const [focus, setFocus] = useState<boolean>(false)
  const showIcon = (Boolean(error || success) && !disabled) || type === 'password'
  const [viewPassword, setViewPassword] = useState<boolean>(false)

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
    <div className={`[&>*+*]:mt-2 [&>*]:block ${inputFamilyClasses['state'][getState()]['wrapper']}`}>
      {label && (
        <label className={`display-block text-sm font-bold`} htmlFor={id}>
          {label}
          {required && !disabled && <span className="relative top-xs ml-1 h-2 text-md leading-3 text-primary">*</span>}
        </label>
      )}
      <div
        className={`before:delay-50 relative before:absolute before:-inset-1 before:block before:rounded-[4px] before:transition-all ${
          inputFamilyClasses['state'][getState()]['input']
        }`}
      >
        <input
          className={`bg-white z-1 relative inline-flex w-full items-center justify-center rounded-sm border border-surface-200 py-sm px-sm text-md outline-none transition-colors`}
          type={viewPassword ? 'text' : type}
          id={id}
          disabled={disabled}
          {...props}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...(hint && { 'aria-labelledby': `${id}-hint` })}
        />
        {showIcon && (
          <span className={`absolute top-1/2 right-0 block -translate-y-1/2 -translate-x-1/2`} onClick={() => setViewPassword(!viewPassword)}>
            {type === 'password' ? inputFamilyClasses.passwordIcon(viewPassword) : inputFamilyClasses['icon'][getState()]}
          </span>
        )}
      </div>
      {hint && (
        <span id={`${id}-hint`} className={`text-sm opacity-0 transition-all duration-200 ${inputFamilyClasses['state'][getState()]['hint']}`}>
          {hint}
        </span>
      )}
    </div>
  )
}

export default Input
