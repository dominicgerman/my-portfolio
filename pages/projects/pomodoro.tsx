import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'

export default function Pomodoro() {
  return (
    <Layout>
      <Head>
        <title>Projects | Pomodoro</title>
      </Head>

      <h1 className={utilStyles.heading}>Pomodoro timer</h1>
      <section className={utilStyles.about}>
        <div className={utilStyles.content}>
          <p>
            This is a pomodoro timer for increasing productivity and focus. I
            built it with React, Typescript, and Vite. Users can set a pomodoro
            timer as well as short & long break timers, customize the length of
            each timer, and see a circular progress bar that renders
            continuously.
          </p>
          <p>
            This design comes from frontendmentor.io, a service that challenges
            developers to build out projects to the design files provided. Read
            more about the pomodoro method{' '}
            <Link
              href="https://todoist.com/productivity-methods/pomodoro-technique"
              target="_blank"
              className={utilStyles.link}
            >
              here
            </Link>
            .
          </p>
          <p></p>

          <Link
            href="https://github.com/dominicgerman/pomodoro"
            target="_blank"
          >
            <button className={utilStyles.buttonLarge}>Source code</button>
          </Link>
          <Link
            href="https://pomodoro-dominicgerman.vercel.app/"
            target="_blank"
          >
            <button className={utilStyles.buttonLarge}>View app</button>
          </Link>
        </div>
        <img
          src="https://www.svgrepo.com/download/120941/tomato.svg"
          height="400"
          width="400"
          alt="tomato"
          className={utilStyles.img}
        />
      </section>
      <h3 style={{ marginTop: '3rem' }}>
        <Link href="/projects">← Back to projects</Link>
      </h3>
    </Layout>
  )
}
