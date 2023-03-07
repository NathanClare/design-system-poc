/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'

import afterpay from '../../../assets/svgs/afterpay.svg'
import ideal from '../../../assets/svgs/ideal.svg'
import maestro from '../../../assets/svgs/maestro.svg'
import paypal from '../../../assets/svgs/paypal.svg'
import thuiswinkel from '../../../assets/svgs/thuiswinkel.svg'

type SVGComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

interface IconPayProps {
  size?: 'lg' | 'md' | 'sm'
  variant: 'afterpay' | 'paypal' | 'ideal' | 'maestro' | 'thuiswinkel'
}

interface IIconPayFamilyClasses {
  size: Record<string, string>
  variant: Record<string, SVGComponent>
}

const iconPayFamilyClasses: IIconPayFamilyClasses = {
  size: {
    sm: 'h-[24px] w-[24px]',
    md: 'h-[32px] w-[32px]',
    lg: 'h-[50px] w-[50px]'
  },
  variant: {
    afterpay: afterpay,
    paypal: paypal,
    ideal: ideal,
    thuiswinkel: thuiswinkel,
    maestro: maestro
  }
}

const IconPay = ({ size = 'md', variant = 'afterpay' }: IconPayProps) => {
  const SVGIconPay = iconPayFamilyClasses['variant'][variant]

  return (
    <div className={`inline-block rounded-full transition-colors ${iconPayFamilyClasses['size'][size]} [&>svg]:h-full [&>svg]:w-full`}>
      <SVGIconPay />
    </div>
  )
}

export default IconPay
