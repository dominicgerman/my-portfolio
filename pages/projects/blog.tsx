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
            This is a very simple blog app that uses Redux as a state management
            solution. The frontend was bootstrapped with create-react-app and
            the backend is an Express server with a MongoDB database. Logged in
            users can view a list of blogs, create new blog posts, delete posts,
            view a list of users and like other posts.
          </p>
          <p>
            This project was part of the problem sets for the Full Stack Open
            online web development course. Refactoring from useState to Redux
            was part of the final problem set. I utilized Material UI for some
            rudimentary styling as well as React Router for navigation.
          </p>
          <p>
            I'll be adding a comments section and more styling in the near
            future. I went with Material UI in these exercises because it was
            new to me and because I wanted experience working with a library of
            premade UI components. You can log in with username 'kodathedog' and
            password 'barkbark'.
          </p>
          <p></p>

          <Link
            href="https://github.com/dominicgerman/blog-list"
            target="_blank"
          >
            <button className={utilStyles.buttonLarge}>Source code</button>
          </Link>
          <Link href="https://spring-firefly-2293.fly.dev/" target="_blank">
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
