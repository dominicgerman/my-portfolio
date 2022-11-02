import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Dominic German | Developer'

export default function Layout({
  children,
  home,
}: {
  children: any
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="description"
          content="A portfolio site for Dominic German"
        />
      </Head>
      <header className={styles.nav}>
        <Link className={styles.homeBtn} href="/">
          DG
        </Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume.pdf" target="_blank">
          Resume
        </Link>
        <Link href="/contact">Contact</Link>
      </header>
      <main>{children}</main>
      {!home && (
        <h3 className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </h3>
      )}
    </div>
  )
}
