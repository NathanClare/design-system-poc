import React from 'react'

import LogoBlack from '../../assets/svgs/youwe-logo-black.svg'
import LogoRedBlack from '../../assets/svgs/youwe-logo-standard-black.svg'
import LogoRedWhite from '../../assets/svgs/youwe-logo-standard-white.svg'
import LogoWhite from '../../assets/svgs/youwe-logo-white.svg'

interface LogoProps {
  size?: 'lg' | 'md' | 'sm'
  variant: 'standardWhite' | 'standardBlack' | 'white' | 'black'
}

interface ILogoFamilyClasses {
  size: Record<string, Record<string, string>>
  variant: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>>
}

const logoFamilyClasses: ILogoFamilyClasses = {
  size: {
    sm: {
      wrapper: 'h-[50px] w-[50px]',
      svg: '[&>svg]:h-full [&>svg]:w-full'
    },
    md: {
      wrapper: 'h-[100px] w-[100px]',
      svg: '[&>svg]:h-full [&>svg]:w-full'
    },
    lg: {
      wrapper: 'h-[150px] w-[150px]',
      svg: '[&>svg]:h-full [&>svg]:w-full'
    }
  },
  variant: {
    standardWhite: LogoRedWhite,
    standardBlack: LogoRedBlack,
    white: LogoWhite,
    black: LogoBlack
  }
}

const Logo = ({ size = 'md', variant = 'standardBlack' }: LogoProps) => {
  const ConditionalLogo = ({ SVGElement }: { SVGElement: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }) => {
    return <SVGElement className={`${logoFamilyClasses['size'][size]['svg']}`} />
  }

  return (
    <div className={`${logoFamilyClasses['size'][size]['wrapper']}`}>
      <ConditionalLogo SVGElement={logoFamilyClasses['variant'][variant]} />
    </div>
  )
}

export default Logo
