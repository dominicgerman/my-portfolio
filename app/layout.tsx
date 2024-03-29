import Link from 'next/link'
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A portfolio site for Dominic German"
        />

        <link rel="icon" href="https://dominicgerman.com/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <title>Dominic German</title>
      </head>
      <body className="layout">
        <nav className="nav">
          <Link className="homeBtn" href="/">
            DG
          </Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume.pdf" target="_blank">
            Resume
          </Link>
          <Link className="contactLink" href="/contact">
            Contact
          </Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
