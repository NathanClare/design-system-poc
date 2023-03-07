/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'

import CMSNLTEXT from '../../../assets/svgs/cmsnl-letters.svg'
import CMSNLLOGO from '../../../assets/svgs/cmsnl-logo.svg'

type SVGComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

interface LogoProps {
  size?: 'lg' | 'md' | 'sm'
  variant: 'standard' | 'text'
}

interface ILogoFamilyClasses {
  size: Record<string, string>
  variant: Record<string, SVGComponent>
}

const logoFamilyClasses: ILogoFamilyClasses = {
  size: {
    sm: 'h-[50px] w-[50px]',
    md: 'h-[60px] w-[60px]',
    lg: 'h-[100px] w-[100px]'
  },
  variant: {
    standard: CMSNLLOGO,
    text: CMSNLTEXT
  }
}

const Logo = ({ size = 'md', variant = 'standard' }: LogoProps) => {
  const SVGLogo = logoFamilyClasses['variant'][variant]

  return (
    <div className={`${logoFamilyClasses['size'][size]} [&>svg]:h-full [&>svg]:w-full`}>
      <SVGLogo />
    </div>
  )
}

export default Logo
