import Image from 'next/image'
import Link from 'next/link'
import ProjectsPage from './projects/page'

export default function HomePage() {
  return (
    <>
      <section className="welcome">
        <div className="flex">
          <h1 className="welcomeMsg">👋🏻</h1>
          <h1 className="welcomeMsg">
            Hi, I’m Dominic. I am a self-taught web developer living in Chicago.
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
      <section className="about">
        <h2>About me</h2>
        <p>
          I am a professional singer turned software developer who enjoys
          building modern, clean, and accessible applications for the web.
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
        <h2>Tech and Tools</h2>
        <div className="techItems contentContainer">
          <span>Javascript</span>
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Express</span>
          <span>GraphQL</span>
          <span>MongoDB</span>
          <span>Git</span>
          <span>Typescript</span>
          <span>NextJS</span>
          <span>Node</span>
          <span>Redux</span>
          <span>Jest</span>
          <span>Cypress</span>
          <span>Docker</span>
          <span>SQL</span>
        </div>
      </section>
      {/* @ts-expect-error Server Component */}
      <ProjectsPage />
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
