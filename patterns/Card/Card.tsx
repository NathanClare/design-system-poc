import classNames from 'classnames'
import React from 'react'
import { Typography, Buttonv2 } from '../../components'

interface CardProps {
  title: string
  text: string
  buttonText: string

}

const cardClasses: Record<string, Record<string, string>> = {
    size: {
        'sm': 'text-sm px-8 py-3',
        'md': 'text-md px-8 py-3',
        'lg': 'text-lg px-8 py-3',
    }
}
  
const Card = ({ title, text, buttonText}: CardProps) => {
    const classes = classNames('drop-shadow-lg relative rounded-lg bg-indigo-300')
    const classesInner = classNames('p-4')

  return (
    <div className={classes}>
      <div className={classesInner}>
        <Typography size='md' tag="h1">{ title }</Typography>
        <Typography size='md' tag="p">{ text }</Typography>
        <Buttonv2>{ buttonText }</Buttonv2>
      </div>
    </div>
  )
}

export default Card