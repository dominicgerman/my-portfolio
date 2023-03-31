import Link from 'next/link'
import Image from 'next/image'

export async function getProjects() {
  const res = await fetch(
    'https://twilight-sunset-5469.fly.dev/api/collections/projects/records?expand=project_tools'
  )
  const data = await res.json()

  return data?.items as any[]
}

export default async function ProjectsPage({ home }: { home: boolean }) {
  const projects = await getProjects()

  return (
    <div className="projects">
      <h2 className="heading">Projects</h2>
      <ul className="projectsList">
        {projects.map((project) => {
          return (
            <li key={project.id} className="projectItem">
              <Link href={`/projects/${project.slug}`}>
                <Image
                  src={`https://twilight-sunset-5469.fly.dev/api/files/projects/${project.id}/${project.image}`}
                  alt={project.slug}
                  width={212}
                  height={211}
                  className="borderRadius"
                ></Image>
              </Link>
              <div className="projectInfo contentContainer">
                <h3>{project.title}</h3>
                <p>{project.short_description}</p>{' '}
                <ul className="techItems small">
                  {project.expand.project_tools.map(
                    (tool: { id: string; name: string }) => (
                      <li key={tool.id}>{tool.name}</li>
                    )
                  )}
                </ul>
                <div className="projectLinks">
                  <Link href={`/projects/${project.slug}`}>
                    <button className="buttonLarge btnSmall">
                      View project
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      {!home ? (
        <h3 className="backToHome">
          <Link href="/">← Back to home</Link>
        </h3>
      ) : null}
    </div>
  )
}
