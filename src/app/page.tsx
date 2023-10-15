import Link from "next/link"
import LibConfig from "./lib/config"
import HeaderComponent from "./components/header"

export default function Home() {
  return (
    <>
      <HeaderComponent
        title={LibConfig.title}
        subtitle={LibConfig.copyright}
        showBackBtn={false}
      />

      <main className="wrapper mx-auto py-4">
        <p>List riddles here.</p>
        <p>
          <Link href="/test">Go to Test.</Link>
        </p>
      </main>
    </>
  )
}
