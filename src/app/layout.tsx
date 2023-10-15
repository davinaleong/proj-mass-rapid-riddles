import "./styles/app.scss"
import type { Metadata } from "next"
import { usePathname } from "next/navigation"
import { Montserrat } from "next/font/google"
import LibConfig from "./lib/config"
import HeaderComponent from "./components/header"

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
  const pathname = usePathname()

  return (
    <html lang="en">
      <body id="top" className={font.className}>
        <HeaderComponent
          title={LibConfig.title}
          subtitle={LibConfig.copyright}
          showBackBtn={pathname !== "/"}
        />

        <main className="wrapper mx-auto py-4">{children}</main>
      </body>
    </html>
  )
}
