import Link from 'next/link'

async function getPages() {
  const res = await fetch(
    'https://twilight-sunset-5469.fly.dev/api/collections/pages/records?expand=page_links'
  )
  const data = await res.json()
  return data?.items as any
}

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
