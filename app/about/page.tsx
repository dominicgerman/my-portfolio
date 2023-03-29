async function getPages(slug: string) {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/pages/records?expand=page_links'
  )
  const data = await res.json()
  // console.log(data)
  return data?.items as any
  // .filter(
  //   (item: { slug: string }) => item.slug === slug)
}

type About = {
  id: string
  heading: string
  content: any
}

export default async function AboutPage() {
  const data = await getPages('about')
  const { id, heading, content } = data.filter(
    (item: any) => item.slug === 'about'
  )[0]

  console.log(id, heading)
  return (
    <div>
      <h1>{heading}</h1>
      <div dangerouslySetInnerHTML={{ __html: { content } }}></div>
    </div>
  )
}
