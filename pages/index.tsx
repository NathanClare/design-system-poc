import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

export default function Home() {
  return <Breadcrumb hrefHome="/" seperator={`/`} breadcrumbs={[{ href: '/', id: '1', label: 'w' }]} />
}
