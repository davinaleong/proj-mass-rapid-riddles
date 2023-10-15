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

      <main className="app__main wrapper mx-auto py-4 flow">
        <p className="italic">Click on the cards to see the riddle.</p>
        <p>
          <Link href="/test">Go to Test.</Link>
        </p>
      </main>
    </>
  )
}
