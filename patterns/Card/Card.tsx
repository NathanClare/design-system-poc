import React from 'react'

import { Typography, Buttonv2 } from '../../components'

interface CardProps {
  title: string
  text: string
  buttonText: string
}

const Card = ({ title, text, buttonText }: CardProps) => {
  return (
    <div className={`drop-shadow-lg relative rounded-lg bg-indigo-300`}>
      <div className={`p-4`}>
        <Typography size="md" tag="h1">
          {title}
        </Typography>
        <Typography size="md" tag="p">
          {text}
        </Typography>
        <Buttonv2>{buttonText}</Buttonv2>
      </div>
    </div>
  )
}

export default Card
