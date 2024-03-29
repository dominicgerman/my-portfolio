import Link from 'next/link'
import Image from 'next/image'

async function getProjects() {
  const res = await fetch(
    'https://twilight-sunset-5469.fly.dev/api/collections/projects/records?expand=project_tools'
  )
  const data = await res.json()

  return data?.items as any[]
}

export async function generateStaticParams() {
  const projects = await getProjects()

  return projects.map((project) => ({ slug: project.slug }))
}

type Props = {
  params: { slug: string }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = params
  const data = await getProjects()
  const { title, long_description, source_code, live_site, id, image } =
    data?.filter((item: { slug: string }) => item.slug === slug)[0]

  const descriptionArr = long_description?.split(/\r?\n/)

  return (
    <div>
      <h1 className="heading">{title}</h1>
      <div className="page">
        <div className="content">
          {descriptionArr.map((el: string) => {
            if (el.length > 0) {
              return <p key={el.length}>{el}</p>
            }
          })}
          {source_code ? (
            <div>
              <Link href={source_code} target="_blank">
                <button className="buttonLarge">Source code</button>
              </Link>
            </div>
          ) : null}
          <div>
            <Link href={live_site} target="_blank">
              <button className="buttonLarge">View site</button>
            </Link>
          </div>
        </div>
        <Image
          src={`https://twilight-sunset-5469.fly.dev/api/files/projects/${id}/${image}`}
          height={400}
          width={400}
          alt={slug}
        />
      </div>
      <h3 style={{ marginTop: '3rem' }}>
        <Link href="/projects">← Back to projects</Link>
      </h3>
      <h3 className="backToHome">
        <Link href="/">← Back to home</Link>
      </h3>
    </div>
  )
}
