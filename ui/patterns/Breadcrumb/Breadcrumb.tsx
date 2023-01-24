import Link from 'next/link'
import React from 'react'

import { Button } from '@/ui/components'

interface ILink {
  id: string
  label: string
  href: string
}

interface BreadcrumbProps {
  homeLinkLabel?: string
  hrefHome: string
  seperator: '/' | '>' | '→'
  breadcrumbs: Array<ILink>
  currentUrl?: string
  backCallback: () => void
}

const Breadcrumb = ({ seperator = '/', breadcrumbs, homeLinkLabel = 'home', hrefHome, currentUrl, backCallback }: BreadcrumbProps) => {
  /* useRouter not supported in Storybook. It is recommended the following code is used by parent component to pass current route
  to Breadcrumb component.
  import { useRouter } from 'next/router'
  const { route: currentUrl, back: backCallback } = useRouter() */

  return (
    <div className="flex items-center [&>*+*]:ml-3">
      {backCallback && (
        <span className="block">
          <Button size={`sm`} onClick={backCallback} variant={`outlined`}>
            Back
          </Button>
        </span>
      )}
      <nav className="inline" aria-label="breadcrumbs">
        <ol>
          <li className="inline">
            <Link href={hrefHome}>{homeLinkLabel}</Link>
          </li>
          {breadcrumbs?.map(({ id, label, href }) => (
            <li className={`inline-block`} key={id}>
              <span className={`inline-block mx-3`} aria-hidden="true">
                {seperator}
              </span>
              <Link href={href} {...(currentUrl === href && { 'aria-current': 'location' })}>
                {label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
