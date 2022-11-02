import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '/styles/utils.module.css'

export default function Daphnes() {
  return (
    <Layout>
      <Head>
        <title>Projects | Daphnes</title>
      </Head>

      <h1 className={utilStyles.heading}>Daphne&apos;s</h1>
      <section className={utilStyles.about}>
        <div className={utilStyles.content}>
          <p>
            Daphne&apos;s{' '}
            <Link
              href="https://daphnes.bar"
              className={utilStyles.link}
              target="_blank"
            >
              started as a Wordpress site
            </Link>{' '}
            where I hosted pictures and descriptions of the cocktails I liked to
            make. Once I started learning how to code, I graduated to a simple
            static site I made out of HTML and CSS with each cocktail being a
            separate HTML file.
          </p>

          <p>
            After I learned how to use Javascript, I made a single page app out
            of vanilla JS that could consume data from an API. My wife designed
            the site for me in Figma and I used those files to create the UI. I
            didn&apos;t want to use a third-party API so I learned how to create
            one using Node, Express and MongoDB with Mongoose.
          </p>

          <p>
            At this point, everything worked but it was far from optimal. Both
            codebases were overly complex and bloated. They were hosted
            separately and only interacted through API calls. The frontend also
            had SEO issues since almost all of the HTML was being generated
            dynamically.
          </p>

          <p>
            I rebuilt everything as a single codebase and served the frontend
            build folder as a static asset. I greatly simplified the backend and
            I rebuilt the UI in React with create-react-app. This made for a
            much faster, much more optimized solution. I also added a very
            rudimentary CMS where an administrator could log in, create new
            recipes, delete recipes, and upload photos for the recipes. I wrote
            some simple integration tests with Jest and some end-to-end tests
            with Cypress. I also set up a CI/CD pipeline with Github Actions.
          </p>
        </div>
        <div className={utilStyles.imageBox}>
          <Image
            src="/images/daphnes-bar2.png"
            alt="daphnes website screenshot"
            width={400}
            height={400}
          />
          <Link
            href="https://github.com/dominicgerman/daphnes_fullstack"
            target="_blank"
          >
            <button className={utilStyles.buttonLarge}>Source code</button>
          </Link>
          <Link href="https://daphnes.fly.dev" target="_blank">
            <button className={utilStyles.buttonLarge}>View site</button>
          </Link>
        </div>
      </section>
      <h3 style={{ marginTop: '3rem' }}>
        <Link href="/projects">← Back to projects</Link>
      </h3>
    </Layout>
  )
}
