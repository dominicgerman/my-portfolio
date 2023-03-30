import Link from 'next/link'
import { getPages } from '../about/page'

export default async function ContactPage() {
  const data = await getPages()
  const { heading, subheading, expand } = data.filter(
    (item: { slug: string }) => item.slug === 'contact'
  )[0]

  return (
    <div className="contactContainer">
      <h1>{heading}</h1>
      <p>{subheading}</p>
      <div className="contactLinks">
        {expand.page_links.map((link: any) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              target="_blank"
              className="link"
            >
              {link.link_text}
            </Link>
          )
        })}
      </div>

      <h3 className="backToHome">
        <Link href="/">← Back to home</Link>
      </h3>
    </div>
  )
}
