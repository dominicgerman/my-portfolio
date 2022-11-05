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
          <p></p>
          <p>
            I converted the state management setup from useState to Redux, I
            incorporated Material UI for some rudimentary styling, and I used
            React Router for navigation. I also created separate views for
            individual blog posts and a view for listing all users.
          </p>
          <p>
            Some of these tasks were tedious but they were also incredibly
            educational. I'll be adding a comments section and more styling in
            the near future. I went with Material UI in these exercises because
            it was new to me and because I wanted experience working with a
            library of premade UI components.
          </p>
          <p></p>

          <Link
            href="https://github.com/dominicgerman/fullstackopen/tree/main/part7/blog-list"
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
