import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import ProjectsList from '../components/projectsList'

export const daphnesURL = 'https://daphnes.fly.dev'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.welcome}>
        <div>
          <h1 className={styles.welcomeMsg}>👋🏻</h1>
          <h1 className={styles.welcomeMsg}>
            Hi, I’m Dominic. I am a self-taught web developer living in Chicago.
          </h1>
          <Link href="/resume.pdf" target="_blank">
            <button className={utilStyles.buttonLarge}>View resume</button>
          </Link>
        </div>
        <Image
          src="/images/headshot.jpg"
          alt="headshot"
          width={212}
          height={211}
        ></Image>
      </section>
      <section className={styles.about}>
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
          <Link href="/about" className={utilStyles.link}>
            Learn more
          </Link>
        </div>
        <h2>Tech I like</h2>
        <div className={`${styles.techItems} ${styles.contentContainer}`}>
          <p>Javascript</p>
          <p>React</p>
          <p>NextJS</p>
          <p>Express</p>
          <p>Node</p>
          <p>MongoDB</p>
          <p>CSS</p>
          <p>HTML</p>
        </div>
        <h2>Tools I like</h2>
        <div className={`${styles.techItems} ${styles.contentContainer}`}>
          <p>Typescript</p>
          <p>Redux</p>
          <p>Tailwind</p>
          <p>Jest</p>
          <p>Cypress</p>
          <p>Git</p>
        </div>
      </section>
      <ProjectsList home />
      <section className={`${styles.contactMe} ${styles.contentContainer}`}>
        <h2>Contact me</h2>
        <p>
          Want to get in touch? Feel free to reach out for project inquiries, or
          just to say hello.
        </p>
        <Link
          href="mailto:dominicgerman@gmail.com?"
          target="_blank"
          className={utilStyles.link}
        >
          Email
        </Link>
        &nbsp;
        <Link
          href="https://www.linkedin.com/in/dominic-german/"
          target="_blank"
          className={utilStyles.link}
        >
          LinkedIn
        </Link>
        &nbsp;
        <Link
          href="https://github.com/dominicgerman"
          target="_blank"
          className={utilStyles.link}
        >
          GitHub
        </Link>
        &nbsp;
      </section>
    </Layout>
  )
}
