import * as RadixProgress from '@radix-ui/react-progress'
import React from 'react'

interface ProgressProps {
  variant?: 'filled' | 'grey'
}

interface IProgressFamilyClasses {
  variant: Record<string, string>
}

const progressFamilyClasses: IProgressFamilyClasses = {
  variant: {
    filled: 'bg-primary-500',
    grey: 'bg-neutral-500'
  }
}

const Progress = ({ variant = 'grey' }: ProgressProps) => {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(78), 500)
    return () => clearTimeout(timer)
  }, [])

  /* TODO: Fix style error */
  return (
    <RadixProgress.Root className="relative overflow-hidden bg-neutral-200 rounded-full w-80 h-6" value={78}>
      <RadixProgress.Indicator
        className={`w-full h-full transition duration-1000 ${progressFamilyClasses['variant'][variant]}`}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </RadixProgress.Root>
  )
}

export default Progress
