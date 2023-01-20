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
  variant: '/' | '>' | '→'
  options: Array<IBreadcrumbOptions>
}

const Breadcrumb = ({ variant = '/', options, homeLinkLabel = 'home', hrefHome }: BreadcrumbProps) => {
  return (
    <nav className="inline" aria-label="breadcrumbs">
      <ol>
        <li className="inline">
          <Link href={hrefHome}>{homeLinkLabel}</Link>
        </li>
        {options?.map(({ id, label, href }) => (
          <li className={`inline-block`} key={id}>
            <span className={`inline-block mx-3`} aria-hidden="true">
              {variant}
            </span>
            <Link aria-current="location" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
