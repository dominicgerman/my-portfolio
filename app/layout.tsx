import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <html>
      <head>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="description"
          content="A portfolio site for Dominic German"
        />
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
        {!home && (
          <h3 className="backToHome">
            <Link href="/">← Back to home</Link>
          </h3>
        )}
      </body>
    </html>
  )
}
