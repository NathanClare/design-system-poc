import { ChevronRightIcon } from '@heroicons/react/24/solid'

import ConditionalLink from '@/ui/components/ConditionalLink/ConditionalLink'
import Typography from '@/ui/components/Typography/Typography'

export interface ILink {
  id: string
  label: string
  href: string
}

interface BreadcrumbsProps {
  breadcrumbs: Array<ILink>
  currentUrl?: string
}

const Breadcrumbs = ({ breadcrumbs, currentUrl }: BreadcrumbsProps) => {
  /* Get second from last breadcrumb as parent category */
  return (
    <div className="my-md flex items-center gap-md">
      <nav className="inline hidden leading-[100%] text-surface-black md:block [&_a:hover]:underline" aria-label="breadcrumbs">
        <ol>
          <Typography as="li" size="sm" className="inline">
            <ConditionalLink href="/">Home</ConditionalLink>
          </Typography>
          {breadcrumbs?.map(({ id, label, href }, index) => (
            <Typography as="li" size="sm" className="inline-block" key={id}>
              <span className="mx-sm inline-block text-surface-300" aria-hidden="true">
                <ChevronRightIcon className="inline h-3 w-3" />
              </span>
              <ConditionalLink
                href={href}
                {...(currentUrl === href && {
                  'aria-current': 'location'
                })}
              >
                <span className={index === breadcrumbs.length - 1 ? 'font-bold' : ''}>{label}</span>
              </ConditionalLink>
            </Typography>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumbs
