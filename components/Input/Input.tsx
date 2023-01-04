import * as Label from '@radix-ui/react-label'
import React from 'react'

interface InputProps {
  variant?: 'filled'
  label?: string
  id: string
  type: 'text' | 'email' | 'password' | 'search' | 'number'
  disabled?: boolean
}

interface IInputFamilyClasses {
  variant: {
    filled: Record<string, string>
  }
  returnMapper: () => string
}

const inputFamilyClasses: IInputFamilyClasses = {
  variant: {
    filled: {
      base: 'flex'
    }
  },
  returnMapper: () => {
    return 'd'
  }
}

const Input = ({ variant = 'filled', label, id, type = 'text', disabled }: InputProps) => {
  return (
    <div className={`flex items-center flex-wrap px-5 gap-4`}>
      {label && (
        <Label.Root className={`text-base text-neutral-40 select-none`} htmlFor={id}>
          {label}
        </Label.Root>
      )}
      <input
        className={`w-52 inline-flex items-center justify-center rounded px-2.5 text-base h-9 hover:shadow focus:shadow-lg`}
        type={type}
        id={id}
        defaultValue="Pedro Duarte"
        disabled={disabled}
      />
    </div>
  )
}

export default Input
