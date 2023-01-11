import * as RadixProgress from '@radix-ui/react-progress'
import React from 'react'

interface ProgressProps {
  variant?: 'filled' | 'neutral'
  progress: number
}

interface IProgressFamilyClasses {
  variant: Record<string, string>
}

const progressFamilyClasses: IProgressFamilyClasses = {
  variant: {
    filled: 'bg-primary-500',
    neutral: 'bg-neutral-500'
  }
}

const Progress = ({ variant = 'filled', progress = 0 }: ProgressProps) => {
  return (
    <RadixProgress.Root className="relative overflow-hidden bg-neutral-200 rounded-full w-full h-1.5" value={progress}>
      <RadixProgress.Indicator className={`h-full transition-all duration-1000 ${progressFamilyClasses['variant'][variant]} w-[${progress}%] `} />
    </RadixProgress.Root>
  )
}

export default Progress
