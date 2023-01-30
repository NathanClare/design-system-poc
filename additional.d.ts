declare module '*.svg' {
  import { type FunctionComponent } from 'react'

  const content: FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default content
}
