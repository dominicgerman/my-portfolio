import Link from 'next/link'
import Image from 'next/image'
// import daphnes_thumb from '../../public/images/daphnes_thumb.png'
// import headshot from '../../public/images/headshot.jpg'
// import torie from '../../public/images/torie.jpg'
// import tomato from '../../public/images/tomato.svg'
// import react from '../../public/images/react.png'

export async function getProjects() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/projects/records?expand=project_tools'
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
                  src={`http://localhost:8090/api/files/projects/${project.id}/${project.thumbnail}`}
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
