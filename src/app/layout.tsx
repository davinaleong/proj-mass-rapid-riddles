import "./styles/app.scss"
import type { Metadata } from "next"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import LibConfig from "./lib/config"

const font = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: LibConfig.title,
  description: LibConfig.description,
  keywords: LibConfig.keywords,
  authors: [
    {
      name: LibConfig.author,
      url: LibConfig.url,
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id="top" className={`${font.className} app relative`}>
        <Link href="#top" className="btn btn-top">
          Top
        </Link>

        <button type="button" className="btn btn-mode">
          Dark
        </button>

        {children}
      </body>
    </html>
  )
}
