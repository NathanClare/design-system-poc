import React from 'react'

import LogoWhite from '../../assets/svgs/Dark=Light.svg'
import LogoBlack from '../../assets/svgs/youwe-logo-rgb-allblack.svg'
import LogoRed from '../../assets/svgs/youwe-logo-rgb.svg'

interface LogoProps {
  size?: 'lg' | 'md' | 'sm'
}

interface ILogoFamilyClasses {
  size: Record<string, string>
  variant: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>>
}

const logoFamilyClasses: ILogoFamilyClasses = {
  size: {
    sm: 'w-[50px] h-[50px]',
    md: 'w-[100px] h-[100px]',
    lg: 'w-[200px] h-[200px]'
  },
  variant: {
    standard: LogoRed,
    white: LogoWhite,
    black: LogoBlack
  }
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const ConditionalLogo = ({ SVGElement }: { SVGElement: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }) => {
    return (
      <div>
        <SVGElement className={`block ${logoFamilyClasses['size'][size]}`} />
      </div>
    )
  }

  return (
    <div>
      <ConditionalLogo SVGElement={logoFamilyClasses['variant']['standard']} />
    </div>
  )
}

export default Logo
