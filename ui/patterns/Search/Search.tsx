import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import type { ChangeEvent, FormEvent } from 'react'

import { Button } from '@/ui/components'

interface SearchProps {
  searchTerm?: string
  className?: string
  placeholder?: string

  // eslint-disable-next-line no-unused-vars
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search = ({ searchTerm, className, onSubmit, onChange, placeholder }: SearchProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <form className={`flex ${className}`} onSubmit={onSubmit}>
      <input
        className="border-1 py-sm relative z-10 grow relative z-10 grow rounded-full border border-surface-200  text-surface-black placeholder:text-surface-500 focus:border-info-500 focus:outline focus:outline-4 focus:outline-info-500/20 rounded-full px-sm text-surface-black placeholder:text-surface-500 "
        type="text"
        placeholder={placeholder}
        defaultValue={searchTerm}
        onChange={onChange}
      ></input>
      <div className="absolute z-20 right-lg top-lg">
        <Button variant="search" size="sm" type={'submit'} title="test">
          <MagnifyingGlassIcon className="h-md w-md" />
        </Button>
      </div>
    </form>
  )
}

export default Search
