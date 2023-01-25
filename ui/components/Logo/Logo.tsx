/* eslint-disable @next/next/no-img-element */
import React from 'react'

import LogoBlack from '../../../assets/images/logoBaseBlack.png'
import LogoWhite from '../../../assets/images/logoBaseWhite.png'

interface LogoProps {
  size?: 'lg' | 'md' | 'sm'
  logoDark: boolean
}

interface ILogoFamilyClasses {
  size: Record<string, string>
}

const logoFamilyClasses: ILogoFamilyClasses = {
  size: {
    sm: 'h-[50px] w-[50px]',
    md: 'h-[100px] w-[100px]',
    lg: 'h-[150px] w-[150px]'
  }
}

const Logo = ({ size = 'md', logoDark = true }: LogoProps) => {
  if (logoDark) {
    return (
      <div className={`${logoFamilyClasses['size'][size]}`}>
        <div>
          <img src={LogoBlack} alt="Logo"></img>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${logoFamilyClasses['size'][size]}`}>
        <div>
          <img src={LogoWhite} alt="Logo"></img>
        </div>
      </div>
    )
  }
}

export default Logo
