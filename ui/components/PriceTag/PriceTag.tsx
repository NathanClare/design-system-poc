import Typography from '@/ui/components/Typography/Typography'

interface PriceProps {
  euro?: number
  cents?: number
  description?: string
  variant: 'square' | 'rectangle'
  size: 'lg' | 'md' | 'sm'
}

interface IPriceFamilyClasses {
  variant: Record<string, string>
  size: Record<string, string>
}

const priceFamilyClasses: IPriceFamilyClasses = {
  variant: {
    square: 'flex flex-col',
    rectangle: 'inline-flex gap-md'
  },
  size: {
    lg: 'text-[40px]',
    md: 'text-[32px]',
    sm: 'text-[24px]'
  }
}

const Price = ({ description, euro, cents, variant = 'square', size = 'md' }: PriceProps) => {
  return (
    <div className={`p-md inline-flex items-center justify-center text-md bg-brand-redprimary text-surface-0 ${priceFamilyClasses['variant'][variant]}`}>
      <Typography as={`span`} size={`md`} className={`${priceFamilyClasses['size'][size]} font-bold`}>
        <span className="!text-[18px]">€</span>
        <span className="!text-[40px] md:text-[32px] xs:text-[24px]">{euro}</span>
        {variant === 'square' && <span className="!text-[18px]">,{cents}</span>}
        {variant === 'rectangle' && <span className="!text-[18px] absolute top-[37px]">,{cents}</span>}
      </Typography>

      {variant === 'square' && (
        <div className="flex items-center justify-center flex-col ">
          <span className="flex !text-[16px] font-normal">/m2</span>
          {description && <span className="flex !text-[16px] font-normal">{description}</span>}
        </div>
      )}
      {variant === 'rectangle' && (
        <div className="flex flex-col pl-md">
          <span className="!text-[16px] font-normal">/m2</span>
          {description && <span className="!text-[16px] font-normal">{description}</span>}
        </div>
      )}
    </div>
  )
}

export default Price
