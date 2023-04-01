import { Avatar, Button, Typography } from '@/ui/components'

interface TabsProps {
  size?: 'desktop' | 'tablet' | 'mobile'
  name: string
  description: string
}

const TabsImageV2 = ({ name, description }: TabsProps) => {
  return (
    <div className={`bg-surface-20 p-md `}>
      <div className="flex  gap-sm">
        <Avatar />
        <div className="flex flex-col gap-sm">
          {name && (
            <div className="text-left">
              <Typography className="font-bold text-brand-black" size={'md'}>
                {name}
              </Typography>
              <div className="h-xs w-2xl bg-brand-redprimary mt-px" />
            </div>
          )}
          {description && (
            <Typography className="font-normal text-left text-brand-mediumgrey" size={'md'}>
              {description}
            </Typography>
          )}
          <div className="flex">
            <Avatar size="xs" />
            <Button className="z-10" variant="secondary">
              test
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabsImageV2
