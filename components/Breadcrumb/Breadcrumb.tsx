import Link from 'next/link'
import React from 'react'

interface IBreadcrumbOptions {
  id: string
  label: string
  href: string
}

interface BreadcrumbProps {
  homeLinkLabel?: string
  hrefHome: string
  variant: 'standard' | 'odd'
  options: Array<IBreadcrumbOptions>
}

interface IBreadcrumbFamilyClasses {
  variant: Record<string, Record<string, string>>
}

const breadcrumbFamilyClasses: IBreadcrumbFamilyClasses = {
  variant: {
    standard: {
      base: 'mx-3'
    },
    odd: {
      base: 'ml-1'
    }
  }
}

// eslint-disable-next-line react/display-name
const Breadcrumb = React.forwardRef<HTMLButtonElement, BreadcrumbProps>(({ variant = 'standard', options, homeLinkLabel = 'home', hrefHome }) => {
  return (
    <div className="inline">
      <Link href={hrefHome}>{homeLinkLabel}</Link>
      {options?.map(({ id, label, href }) => (
        <div className={`inline-block ${breadcrumbFamilyClasses['variant'][variant]['base']}`} key={id}>
          <Link href={href}>{label}</Link>
        </div>
      ))}
    </div>
  )
})

export default Breadcrumb
