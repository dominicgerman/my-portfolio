import Image from 'next/image'
import Link from 'next/link'

async function getProjects() {
  const res = await fetch(
    'https://twilight-sunset-5469.fly.dev/api/collections/projects/records?expand=project_tools'
  )
  const data = await res.json()

  return data?.items as any[]
}

async function getTools() {
  const res = await fetch(
    'https://twilight-sunset-5469.fly.dev/api/collections/tools/records'
  )
  const data = await res.json()
  return data?.items as any
}

export default async function HomePage() {
  const tools = await getTools()
  const projects = await getProjects()

  return (
    <>
      <section className="welcome">
        <div className="flex">
          <h1 className="welcomeMsg">👋🏻</h1>
          <h1 className="welcomeMsg">
            Hi, I’m Dominic. I am a freelance web developer living in Chicago.
          </h1>
          <Link href="/resume.pdf" target="_blank">
            <button className="buttonLarge">View resume</button>
          </Link>
        </div>
        <Image
          src="/images/headshot.jpg"
          alt="headshot"
          width={212}
          height={211}
        ></Image>
      </section>

      {/* ////////////////// ABOUT ////////////////// */}
      <section className="about">
        <h2>About me</h2>
        <p>
          I am a professional singer turned software developer who enjoys
          building modern, accessible, and performant applications for the web.
          I’m half of{' '}
          <Link href="https://kodadesigns.dev" className="link" target="_blank">
            Koda Designs
          </Link>
          , a small dev shop run by{' '}
          <Link
            href="https://victoriagerman.com"
            className="link"
            target="_blank"
          >
            my wife
          </Link>{' '}
          and I.
        </p>
        <div
          style={{
            marginBottom: '6rem',
          }}
        >
          <Link href="/about" className="link">
            Learn more
          </Link>
        </div>
      </section>

      {/* ////////////////// TOOLS ////////////////// */}

      <section className="tools">
        <h2>Tools 🔧</h2>
        <ul className="techItems contentContainer">
          {tools?.map((tool: { id: string; name: string }) => {
            return <li key={tool.id}>{tool.name}</li>
          })}
        </ul>
      </section>

      {/* ////////////////// PROJECTS ////////////////// */}

      <div className="projects">
        <h2 className="heading">Projects</h2>
        <ul className="projectsList">
          {projects
            .sort(function (a, b) {
              return a.index - b.index
            })
            .map((project) => {
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
      </div>

      {/* ////////////////// CONTACT ////////////////// */}

      <section className="contactMe contentContainer">
        <h2>Contact me</h2>
        <p>
          Want to get in touch? Feel free to reach out for project inquiries, or
          just to say hello.
        </p>
        <Link
          href="mailto:dominicgerman@gmail.com?"
          target="_blank"
          className="link"
        >
          Email
        </Link>
        &nbsp;
        <Link
          href="https://www.linkedin.com/in/dominic-german/"
          target="_blank"
          className="link"
        >
          LinkedIn
        </Link>
        &nbsp;
        <Link
          href="https://github.com/dominicgerman"
          target="_blank"
          className="link"
        >
          GitHub
        </Link>
        &nbsp;
      </section>
    </>
  )
}
