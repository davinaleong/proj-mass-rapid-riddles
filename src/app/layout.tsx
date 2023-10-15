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
      <body id="top" className={font.className}>
        <header className="wrapper mx-auto py-4 flex gap-4 justify-between">
          <div className="flow">
            <h1 className="text-red-700 text-5xl font-black italic">
              {LibConfig.title}
            </h1>
            <p className="text-red-500 text-2xl font-black italic">
              {LibConfig.copyright}
            </p>
          </div>
          <div>
            <Link href="/" className="btn">
              Back
            </Link>
          </div>
        </header>

        <main className="wrapper mx-auto py-4">{children}</main>
      </body>
    </html>
  )
}
