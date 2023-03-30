import Image from 'next/image'
import Link from 'next/link'

export async function getPages() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/pages/records?expand=page_links'
  )
  const data = await res.json()
  return data?.items as any
}

export default async function AboutPage() {
  const data = await getPages()
  const { heading, content } = data.filter(
    (item: { slug: string }) => item.slug === 'about'
  )[0]

  return (
    <div>
      <h1 className="heading">{heading}</h1>
      <div className="page">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <Image
          src="/images/about.jpg"
          alt="dominic seated with drink"
          width={300}
          height={450}
        />
      </div>

      <h3 className="backToHome">
        <Link href="/">← Back to home</Link>
      </h3>
    </div>
  )
}
