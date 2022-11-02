import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import ProjectsList from '../components/projectsList'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectsList />
    </Layout>
  )
}
