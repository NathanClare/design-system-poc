import { StarIcon } from '@heroicons/react/24/outline'

import Typography from '../Typography/Typography'

interface RatingProps {
  variant?: 'green' | 'black'
  rating: number
  text?: string
}

interface IRatingFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const ratingFamilyClasses: IRatingFamilyClasses = {
  variant: {
    green: {
      filled: 'fill-green-base stroke-green-base',
      outline: 'fill-surface-30 stroke-white'
    },
    black: {
      filled: 'fill-black-base stroke-black-base',
      outline: 'fill-surface-30 stroke-white'
    }
  }
}

const TOTAL_STARS = 5

const Rating = ({ rating, variant = 'green', text }: RatingProps) => {
  const fullStars = Math.floor(rating)
  const demiStar = (rating - fullStars) * 100

  return (
    <div className="inline-flex [&>*+*]:ml-0.5">
      {Array.from(Array(TOTAL_STARS).keys()).map(star => {
        return (
          <span className="relative" key={star}>
            <StarIcon className={`h-md w-md ${ratingFamilyClasses['variant'][variant][star < fullStars ? 'filled' : 'outline']}`} />
            {star === fullStars && (
              <span className={`absolute left-0 top-0 overflow-hidden text-primary-600`} style={{ width: `${demiStar}%` }}>
                <StarIcon className={`h-md w-md ${ratingFamilyClasses['variant'][variant]['filled']}`} />
              </span>
            )}
          </span>
        )
      })}
      <Typography className="px-sm inline-flex items-center justify-center" size={'base'}>
        {text}
      </Typography>
    </div>
  )
}

export default Rating
