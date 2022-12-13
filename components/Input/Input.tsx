import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
  placeholder: string
}

const Input = ({placeholder}: InputProps) => {
  return (
    <div className={styles.Base}>
      <input type={`text`} placeholder={placeholder} />
    </div>
  )
}

export default Input