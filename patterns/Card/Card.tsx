import React from 'react'
import { Typography, Button } from '../../components'
import styles from './Card.module.scss'

interface CardProps {
  title: string
  text: string
  buttonText: string
}

const Card = ({title, text, buttonText}: CardProps) => {
  return (
    <div className={styles.Base}>
      <Typography tag="h2">{ title }</Typography>
      <Typography tag="p">{ text }</Typography>
      <Button>{ buttonText }</Button>
    </div>
  )
}

export default Card