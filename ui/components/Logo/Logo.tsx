import React from 'react'

import YouweLogo from '../../../assets/svgs/youwe-logo-neutral.svg'

type SVGComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

interface LogoProps {
  size?: 'lg' | 'md' | 'sm'
  variant: 'neutral'
}

interface ILogoFamilyClasses {
  size: Record<string, string>
  variant: Record<string, SVGComponent>
}

const logoFamilyClasses: ILogoFamilyClasses = {
  size: {
    sm: 'h-[50px] w-[50px]',
    md: 'h-[100px] w-[100px]',
    lg: 'h-[150px] w-[150px]'
  },
  variant: {
    neutral: YouweLogo
  }
}

const Logo = ({ size = 'md', variant = 'neutral' }: LogoProps) => {
  const SVGLogo = logoFamilyClasses['variant'][variant]

  return (
    <div className={`${logoFamilyClasses['size'][size]} [&>svg]:h-full [&>svg]:w-full`}>
      <SVGLogo />
    </div>
  )
}

export default Logo
