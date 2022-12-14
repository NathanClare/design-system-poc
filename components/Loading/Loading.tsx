import React from 'react'

interface LoadingProps {
  size: 'sm' | 'md' | 'lg'
  variant: 'primary' | 'neutral' | 'white'
}

interface ILoadingFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const loadingFamilyClasses: ILoadingFamilyClasses = {
  size: {
    sm: '[&>span]:w-1 [&>span]:h-1',
    md: '[&>span]:w-1.5 [&>span]:h-1.5',
    lg: '[&>span]:w-2 [&>span]:h-2'
  },
  variant: {
    primary: '[&>span]:bg-primary-400',
    neutral: '[&>span]:bg-neutral-200',
    white: '[&>span]:bg-primary-white'
  }
}

const Loading = ({ size = 'md', variant = 'primary' }: LoadingProps) => {
  return (
    <div
      className={`flex [&>span]:inline-block [&>span+span]:ml-2 [&>span]:rounded-full 
      [&>span]:animate-bounce [&>span:last-child]:animation-delay-200 
      [&>span:nth-child(2)]:animation-delay-100 
      ${loadingFamilyClasses['size'][size]} 
      ${loadingFamilyClasses['variant'][variant]}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Loading
