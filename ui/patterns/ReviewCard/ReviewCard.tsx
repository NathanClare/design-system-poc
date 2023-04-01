import React from 'react'

import { Rating, Typography } from '@/ui/components'

interface ColoredCTACardProps {
  text?: string
  name?: string
  time?: string
}

const ColoredCTACard = ({ name, text, time }: ColoredCTACardProps) => {
  return (
    <div className={`container lg:mx-auto`}>
      <div className={`gap-md border rounded border-surface-40 container mx-auto`}>
        <div className={`flex-col w-full`}>
          <div className="p-lg">
            {name && (
              <Typography className="flex font-bold" size={'md'}>
                {name}
              </Typography>
            )}
            <div className="w-full flex pb-sm">
              <Rating rating={4} />
            </div>
            {text && (
              <Typography className="flex py-sm" size={'base'}>
                {text}
              </Typography>
            )}
            {time && (
              <Typography className="flex text-brand-mediumgrey" size={'sm'}>
                Beoordeeld: {time}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColoredCTACard
