import * as Label from '@radix-ui/react-label'
import React from 'react'

interface InputProps {
  variant?: 'filled' | 'grey'
}

interface IInputFamilyClasses {
  variant: Record<string, string>
}

const inputFamilyClasses: IInputFamilyClasses = {
  variant: {
    filled: 'bg-primary-80 text-primary-30',
    grey: 'bg-neutral-80 text-neutral-30'
  }
}

const InputComp = ({ variant = 'filled' }: InputProps) => {
  return (
    <div className={`flex items-center flex-wrap px-5 gap-4`}>
      <Label.Root className={`text-base text-neutral-40 select-none`} htmlFor="firstName">
        First name
      </Label.Root>
      <input
        className={`w-52 inline-flex items-center justify-center rounded px-2.5 text-base h-9 hover:shadow focus:shadow-lg ${inputFamilyClasses['variant'][variant]}`}
        type="text"
        id="firstName"
        defaultValue="Pedro Duarte"
      />
    </div>
  )
}

export default InputComp
