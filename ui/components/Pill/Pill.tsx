import React from 'react'

interface PillProps {
  children: string
  size?: 'lg' | 'md' | 'sm'
  variant?: 'red' | 'blue' | 'mint'
}

interface IPillFamilyClasses {
  size: Record<string, string>
  variant: Record<string, Record<string, string>>
}

const pillFamilyClasses: IPillFamilyClasses = {
  size: {
    sm: 'text-sm px-1 py-px',
    md: 'text-base font-bold px-3 py-2'
  },
  variant: {
    red: {
      base: 'bg-error-500 text-surface-white hover:bg-primary-base hover:drop-shadow-10 focus:bg-primary-500 pressed:bg-primary-500 pressed:drop-shadow-none focus:drop-shadow-none'
    },
    blue: {
      base: 'bg-info-500 text-surface-white border border-primary-600 hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100'
    },
    mint: {
      base: 'bg-success-500 text-surface-white hover:bg-primary-100 focus:bg-primary-100 pressed:bg-primary-100'
    }
  }
}

const Pill = ({ children, size = 'md', variant = 'red' }: PillProps) => {
  return (
    <div
      className={` inline-flex items-center justify-center transition-colors relative rounded ${pillFamilyClasses['size'][size]} ${pillFamilyClasses['variant'][variant]['base']}`}
    >
      <span className={`inline-flex h-5`}>{children && <span>{children}</span>}</span>
    </div>
  )
}

export default Pill
