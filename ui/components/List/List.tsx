/* eslint-disable react/no-array-index-key */
import { type ReactNode } from 'react'

interface ListProps {
  direction?: 'row' | 'column'
  children: ReactNode[] | ReactNode
}

interface IListFamilyClasses {
  direction: Record<string, string>
}

const listFamilyClasses: IListFamilyClasses = {
  direction: {
    column: 'flex-column justify-between',
    row: 'flex-row [&_li]:mt-2 [&_li]:w-full flex-wrap'
  }
}

const List = ({ direction = 'column', children }: ListProps) => {
  const childrenAsArray = Array.isArray(children) ? children.filter(Boolean) : [children].filter(Boolean)

  return (
    <ul className={`flex ${listFamilyClasses['direction'][direction]}`}>
      {childrenAsArray.map((child: ReactNode, index: number) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  )
}

export default List
