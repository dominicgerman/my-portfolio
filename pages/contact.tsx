import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '/styles/utils.module.css'

export default function Projects() {
  const container: Object = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '2.4rem',
    gap: '4.4rem',
  }
  const links: Object = {
    display: 'flex',
    fontSize: '2.4rem',
    gap: '4.4rem',
    marginBottom: '6rem',
  }

  return (
    <Layout>
      <Head>
        <title>Contact me</title>
      </Head>
      <div style={container}>
        <h1>Contact me</h1>
        <p>
          Want to get in touch? Feel free to reach out for project inquiries, or
          just to say hello.
        </p>
        <div style={links}>
          <Link
            href="https://www.linkedin.com/in/dominic-german/"
            target="_blank"
            className={utilStyles.link}
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:dominicgerman@gmail.com?"
            target="_blank"
            className={utilStyles.link}
          >
            Email
          </Link>
          <Link
            href="https://github.com/dominicgerman"
            target="_blank"
            className={utilStyles.link}
          >
            GitHub
          </Link>
        </div>
      </div>
    </Layout>
  )
}
