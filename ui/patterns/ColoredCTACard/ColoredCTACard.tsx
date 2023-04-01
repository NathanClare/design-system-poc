import React from 'react'

import { useBreakpoints } from '@/lib/hooks/useBreakpoints'
import { Button, Typography } from '@/ui/components'

interface IRadioGroupOptions {
  id: string
  text: string
  title: string
  variant?: 'green' | 'brown' | 'blue' | 'grey'
  buttonText: string
}

interface ColoredCTACardProps {
  options: Array<IRadioGroupOptions>
  title: string
}

interface IColoredCTACardFamilyClasses {
  variant: Record<string, string>
}

const coloredCTACardFamilyClasses: IColoredCTACardFamilyClasses = {
  variant: {
    green: 'bg-terrace-basic',
    brown: 'bg-wall-basic',
    blue: 'bg-terrace-basic',
    grey: 'bg-wall-basic'
  }
}

const ColoredCTACard = ({ options, title }: ColoredCTACardProps) => {
  const { breakpointMd } = useBreakpoints()

  return (
    <div className="container mx-auto">
      <div className="">
        {title && (
          <Typography heading className="flex justify-center pb-xl" size={'2xl'}>
            {title}
          </Typography>
        )}
        <div className={`${!breakpointMd ? 'flex-col' : 'flex'} gap-md`}>
          {options?.map(({ id, text, title, variant = 'brown', buttonText }) => (
            <div
              key={id}
              className={`${coloredCTACardFamilyClasses['variant'][variant]} flex-col w-full  mb-sm
             items-center justify-between rounded`}
            >
              <div className="p-lg container">
                <div>
                  {title && (
                    <Typography heading className="flex justify-center py-sm" size={'md'}>
                      {title}
                    </Typography>
                  )}
                  {text && (
                    <Typography className="flex justify-center py-sm px-2xl" size={'base'}>
                      {text}
                    </Typography>
                  )}
                </div>
                <div className="w-full flex justify-center py-lg">
                  <Button variant="secondary">{buttonText}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColoredCTACard
