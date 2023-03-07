import { StarIcon } from '@heroicons/react/24/outline'

interface RatingProps {
  rating: number
}

interface IRatingFamilyClasses {
  variant: Record<string, string>
}

const ratingFamilyClasses: IRatingFamilyClasses = {
  variant: {
    filled: 'fill-primary-base stroke-primary-base',
    outline: 'fill-neutral-white stroke-primary-base'
  }
}

const TOTAL_STARS = 5

const Rating = ({ rating }: RatingProps) => {
  const fullStars = Math.floor(rating)
  const demiStar = (rating - fullStars) * 100

  return (
    <div className="inline-flex [&>*+*]:ml-0.5">
      {Array.from(Array(TOTAL_STARS).keys()).map(star => {
        return (
          <span className="relative" key={star}>
            <StarIcon className={`h-4 w-4 ${ratingFamilyClasses['variant'][star < fullStars ? 'filled' : 'outline']}`} />
            {star === fullStars && (
              <span className={`absolute left-0 top-0 overflow-hidden text-primary-600`} style={{ width: `${demiStar}%` }}>
                <StarIcon className={`h-4 w-4 ${ratingFamilyClasses['variant']['filled']}`} />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export default Rating
