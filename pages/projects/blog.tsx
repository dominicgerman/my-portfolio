import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Projects | Blog</title>
      </Head>

      <h1 className={utilStyles.heading}>Blog app</h1>
      <section className={utilStyles.about}>
        <div className={utilStyles.content}>
          <p>
            This is a blog app I built it with React and Redux. In the{' '}
            <Link
              href="https://fullstackopen.com/en/"
              target="_blank"
              className={utilStyles.link}
            >
              Full Stack Open
            </Link>{' '}
            online web development course, the final problem set involves
            refactoring an exisiting codebase, adding multiple features, and
            adding styles.
          </p>

          <p>
            I implemented Redux as a state management solution, incorporated
            Tailwind for styling, and used React Router for navigation. I also
            created separate views for individual blog posts and users, and I
            implemented a comments section.
          </p>
          <p>
            Many of these tasks were tedious but they were ultimately incredibly
            educational. I went with Tailwind in these exercises because it was
            new to me.
          </p>
          <p></p>

          <Link
            href="https://github.com/dominicgerman/blog-app"
            target="_blank"
          >
            <button className={utilStyles.buttonLarge}>Source code</button>
          </Link>
          <Link href="https://white-moon-7806.fly.dev/" target="_blank">
            <button className={utilStyles.buttonLarge}>View site</button>
          </Link>
        </div>

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="nextJS logo"
          width="400"
          height="400"
        ></img>
      </section>
      <h3 style={{ marginTop: '3rem' }}>
        <Link href="/projects">← Back to projects</Link>
      </h3>
    </Layout>
  )
}
