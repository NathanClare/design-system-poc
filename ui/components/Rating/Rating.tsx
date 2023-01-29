import { StarIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface RatingProps {
  size?: 'sm' | 'md' | 'lg'
  rating: number
}

interface IRatingFamilyClasses {
  size: Record<string, string>
  variant: Record<string, string>
}

const ratingFamilyClasses: IRatingFamilyClasses = {
  variant: {
    primary: 'fill-primary-base stroke-primary-base',
    neutral: 'fill-surface-200 stroke-surface-200'
  },
  size: {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }
}

const TOTAL_STARS = 5

const Rating = ({ size = 'md', rating }: RatingProps) => {
  const fullStars = Math.floor(rating)
  const demiStar = (rating - fullStars) * 100

  return (
    <div className="inline-flex [&>*+*]:ml-0.5">
      {Array.from(Array(TOTAL_STARS).keys()).map(star => {
        return (
          <span className="relative" key={star}>
            <StarIcon className={`${ratingFamilyClasses['size'][size]} ${ratingFamilyClasses['variant'][star < fullStars ? 'primary' : 'neutral']}`} />
            {star === fullStars && (
              <span className={`overflow-hidden left-0 top-0 absolute`} style={{ width: `${demiStar}%` }}>
                <StarIcon className={`${ratingFamilyClasses['variant']['filled']} ${ratingFamilyClasses['size'][size]}`} />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export default Rating
