import React from 'react'
import styles from './Logo.module.scss'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className={styles.Base}>
      <Image src="/youwe-logo-white.svg" height={400} width={400} alt={`Youwe logo`} />
    </div>
  )
}

export default Logo