// import Image from 'next/image'
// import Link from 'next/link'
// import type { ReactElement, ReactNode } from 'react'
// import React from 'react'

// // import { useBreakpoints } from '@/lib/hooks/useBreakpoints'
// import { Button } from '@/ui/components'

// import image from '../../../assets/images/testimage.png'
// // import brandSVGIcon from '../../../assets/svgs/brand-element.svg'

// interface CategoryCardProps {
//   href: string
//   alt: string
//   title: string
//   description: string
//   size?: 'desktop' | 'tablet' | 'mobile'
//   children: ReactNode
//   icon?: ReactElement
// }

// const CategoryCard = ({ title, href, alt, children, description }: CategoryCardProps) => {
//   //   const { breakpointMd } = useBreakpoints()

//   return (
//     <Link href={href}>
//       <a className="group">
//         <div>
//           <span className="relative block h-full w-full transition group-hover:border-primary-base">
//             <Image alt={alt} className="object-cover" width={50} height={50} src={image} />
//           </span>
//           <div className="flex items-center gap-sm">
//             <span className="h-md w-md">{children}</span>
//             <span className="w-full font-bold transition group-hover:border-primary-base">{title}</span>
//             <Button variant="ghost">text</Button>
//           </div>
//           <span className="w-full font-bold transition group-hover:border-primary-base">{description}</span>
//         </div>
//       </a>
//     </Link>
//   )
// }

// export default CategoryCard
