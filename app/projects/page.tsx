// import PocketBase from 'pocketbase'
import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'

async function getProjects() {
  //   const db = new PocketBase('http://127.0.0.1:8090')
  //   const data = await db.collection('projects').getList(1, 10)

  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/projects/records?page=1&perPage=30'
  )
  const data = await res.json()

  return data?.items as any[]
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  return (
    <div className="projects">
      <h1 className="heading">Projects</h1>
      <ul className="projectsList">
        {projects.map((project) => {
          return (
            <li key={project.id} className="projectItem">
              <Link href={`/projects/${project.slug}`}>
                <Image
                  src="https://www.svgrepo.com/download/120941/tomato.svg"
                  alt={project.slug}
                  width={212}
                  height={211}
                  className="borderRadius"
                ></Image>
              </Link>
              <div className="projectInfo contentContainer">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>{' '}
                <div className="techItems small">
                  {project.tools.map((tool: string) => (
                    <p key={project.tool}>{tool}</p>
                  ))}
                </div>
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
    </div>
  )
}
