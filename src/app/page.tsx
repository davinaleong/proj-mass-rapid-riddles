import Link from "next/link"
import LibConfig from "./lib/config"
import HeaderComponent from "./components/header"
import { getEntries } from "./lib/contentful/sdk"

async function getData() {
  return getEntries()
}

export default async function Home() {
  const riddles = await getData()

  return (
    <>
      <HeaderComponent
        title={LibConfig.title}
        subtitle={LibConfig.copyright}
        showBackBtn={false}
      />

      <main className="app__main wrapper mx-auto py-4 flow">
        <p className="italic">Click on the cards to see the riddle.</p>
        <section>
          {riddles.map((riddle: any, index: number) => {
            return (
              <Link
                key={riddle.sys.id}
                href={`${riddle.fields.slug}`}
                className="btn"
              >
                <h3 className="text-xl font-bold">
                  {index + 1}. {riddle.fields.title}
                </h3>
              </Link>
            )
          })}
        </section>
      </main>
    </>
  )
}
