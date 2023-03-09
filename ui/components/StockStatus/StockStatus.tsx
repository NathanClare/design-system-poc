import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React, { type ComponentProps } from 'react'

import { Icon, Typography } from '@/ui/components'

interface StockstatusProps {
  label?: string
  variant?: 'success' | 'warning' | 'error'
}

type SVGElementType = (props: ComponentProps<'svg'>) => JSX.Element

interface IStockstatusFamilyClasses {
  variant: Record<string, Record<string, string>>
  icon: Record<string, SVGElementType>
}

const stockstatusFamilyClasses: IStockstatusFamilyClasses = {
  variant: {
    success: {
      text: 'text-success-500',
      icon: 'text-success-500'
    },
    warning: {
      text: 'text-warning-500',
      icon: 'text-warning-500'
    },
    error: {
      text: 'text-error-500',
      icon: 'text-error-500'
    }
  },
  icon: {
    success: CheckCircleIcon,
    warning: CheckCircleIcon,
    error: CheckCircleIcon
  }
}

// Templating
const Stockstatus = ({ variant = 'error', label }: StockstatusProps) => {
  const ConditionalIcon = ({ SVGElement }: { SVGElement: SVGElementType }) => {
    return (
      <Icon>
        <SVGElement className={`inline h-2 w-2 p-1 m-0 ${stockstatusFamilyClasses['variant'][variant]['icon']}`} />
      </Icon>
    )
  }

  return (
    <div>
      <ConditionalIcon SVGElement={stockstatusFamilyClasses['icon']['success']} />
      <Typography
        className={`inline-flex items-center justify-center rounded font-medium font-base px-2.5 h-6  ${stockstatusFamilyClasses['variant'][variant]['text']}`}
        size={'base'}
      >
        {label}
      </Typography>
    </div>
  )
}

export default Stockstatus
