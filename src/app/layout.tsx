import "./styles/app.scss"
import type { Metadata } from "next"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import LibConfig from "./lib/config"
import { Providers } from "./components/providers"

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
    <html lang="en" suppressHydrationWarning>
      <body id="top" className={`${font.className} relative`}>
        <Providers>
          <Link href="#top" className="btn btn-top">
            Top
          </Link>

          <button type="button" className="btn btn-mode">
            Dark
          </button>

          {children}
        </Providers>
      </body>
    </html>
  )
}
