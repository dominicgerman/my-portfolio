import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '/styles/utils.module.css'

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Projects | Portfolio</title>
      </Head>

      <h1 className={utilStyles.heading}>Portfolio site</h1>
      <section className={utilStyles.about}>
        <div className={utilStyles.content}>
          <p>
            This is my portfolio site. I built it with NextJS and Vercel. The
            look and feel are very much based on the{' '}
            <Link
              href="https://fullstackopen.com/en/"
              target="_blank"
              className={utilStyles.link}
            >
              Full Stack Open
            </Link>{' '}
            online web development course. My wife was kind enough to design the
            site in Figma so that I could practice creating a pixel-perfect
            version.
          </p>

          <p>
            The first version of this site was a sinlge HTML page that resembled
            the current home page. I had just learned Flexbox and Grid layouts
            in CSS and needed to put those skills to the test. After I became
            comfortable with React, I decided to rebuild my portfolio. I used it
            as an opportunity to dive into NextJS with CSS modules. I'm glad I
            did. NextJS is an outstanding framework from my point of view.
          </p>
          <p>
            I also used Typescript on this project. I am new to Typescript but
            I'm already a huge fan. It's a very powerful tool and I'm looking
            forward to using it more.
          </p>
          <p></p>

          <Link
            href="https://github.com/dominicgerman/my-portfolio"
            target="_blank"
          >
            <button className={utilStyles.buttonLarge}>Source code</button>
          </Link>
          <Link href="/" target="_blank">
            <button className={utilStyles.buttonLarge}>View site</button>
          </Link>
        </div>

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
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
