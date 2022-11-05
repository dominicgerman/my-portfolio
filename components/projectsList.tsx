import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '/styles/utils.module.css'
import styles from '/styles/Home.module.css'

export default function ProjectsList({ home }: { home?: boolean }) {
  return (
    <section className={styles.projects}>
      {!home ? (
        <h1 className={utilStyles.heading}>Projects</h1>
      ) : (
        <h2>Projects</h2>
      )}
      <ul className={styles.projectsList}>
        <li className={styles.projectItem}>
          <Link href="/projects/daphnes">
            <Image
              src="/images/daphnes-bar.png"
              alt="daphnes bar logo"
              width={212}
              height={211}
              className={utilStyles.borderRadius}
            ></Image>
          </Link>
          <div className={`${styles.projectInfo} ${styles.contentContainer}`}>
            <h3>Daphne’s</h3>
            <p>
              A website for my home bar, named after my cat{' '}
              <Link
                href="https://www.instagram.com/realdaphnemoon/"
                target="_blank"
                className={utilStyles.link}
              >
                Daphne
              </Link>
              , and designed by my wife&nbsp;
              <Link
                href="https://www.victoriagerman.com/"
                target="_blank"
                className={utilStyles.link}
              >
                Victoria
              </Link>
              .
            </p>{' '}
            <div className={`${styles.techItems} ${styles.small}`}>
              <p>React</p>
              <p>Express</p>
              <p>Node</p>
              <p>MongoDB</p>
            </div>
            <div className={styles.projectLinks}>
              <Link href="/projects/daphnes">
                <button
                  className={`${utilStyles.buttonLarge} ${styles.btnSmall}`}
                >
                  View project
                </button>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.projectItem}>
          <Link href="/projects/portfolio">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
              alt="nextJS"
              width="212"
              height="211"
            ></img>
          </Link>
          <div className={`${styles.projectInfo} ${styles.contentContainer}`}>
            <h3>Portfolio</h3>
            <p>
              The website you are currently using. Built with the blazingly fast
              NextJS.
            </p>
            <div className={`${styles.techItems} ${styles.small}`}>
              <p>Typescript</p>
              <p>NextJS</p>
              <p>Vercel</p>
            </div>
            <div className={styles.projectLinks}>
              <Link href="/projects/portfolio">
                <button
                  className={`${utilStyles.buttonLarge} ${styles.btnSmall}`}
                >
                  View project
                </button>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.projectItem}>
          <Link href="/projects/blog">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react JS"
              width="212"
              height="211"
            ></img>
          </Link>
          <div className={`${styles.projectInfo} ${styles.contentContainer}`}>
            <h3>Blog app</h3>
            <p>A blog app built with create-react-app and Redux.</p>
            <div className={`${styles.techItems} ${styles.small}`}>
              <p>React</p>
              <p>Redux</p>
              <p>Material UI</p>
              <p>Express</p>
            </div>
            <div className={styles.projectLinks}>
              <Link href="/projects/blog">
                <button
                  className={`${utilStyles.buttonLarge} ${styles.btnSmall}`}
                >
                  View project
                </button>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}
