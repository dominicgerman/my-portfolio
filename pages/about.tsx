import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      <h1 className={utilStyles.heading}>About me</h1>
      <section className={utilStyles.about}>
        <div className={utilStyles.content}>
          <p>
            I’m a self-taught web developer who enjoys building web apps with
            modern tools. I’m addicted to learning as much as possible about
            programming and technology.
          </p>

          <p>
            I spent the better part of my twenties as a full-time musician. I
            got used to constantly honing my skillsets and always trying to get
            better. Self-employment taught me a lot about dealing with clients,
            staying organized, and delivering products and services in a timely
            manner.
          </p>

          <p>
            When the pandemic hit, I got really into making cocktails. I started
            cataloging the recipes in my iPhone’s Notes app so that I could
            share them with guests when my wife and I would entertain. This led
            me to create a simple Wordpress site where I could store my recipes
            and create menus.
          </p>

          <p>
            My other pandemic hobby was reading popular science books. This lead
            to an interest in computers and how the internet works. In November
            of 2021, I started playing around with HTML and CSS and by January
            of 2022, I had decided to pursue web development as a career.
          </p>

          <p>
            I have since learned how to build fullstack web apps with
            Javascript. I learned React with the{' '}
            <Link
              href="https://fullstackopen.com/en/"
              className={utilStyles.link}
              target="_blank"
            >
              Full Stack Open
            </Link>{' '}
            online web development course through the University of Helsinki. It
            also inspired the design of my portfolio site. My main personal
            project has been a home-bar website called{' '}
            <Link
              href="https://daphnes.fly.dev"
              target="_blank"
              className={utilStyles.link}
            >
              Daphne’s
            </Link>
            . It has gone through several different iterations as I have
            progressively learned more about modern technologies and best
            practices.
          </p>

          <p>
            I am now addicted to learning new technologies by building things.
            For more info on my projects and the decisions that went into them,
            &nbsp;
            <Link href="/projects" className={utilStyles.link}>
              view them here
            </Link>
            .
          </p>
        </div>
        <Image
          src="/images/about.jpg"
          alt="dominic seated with drink"
          width={300}
          height={450}
        />
      </section>
    </Layout>
  )
}
