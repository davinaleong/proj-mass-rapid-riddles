import LibConfig from "./lib/config"
import HeaderComponent from "./components/header"
import { getEntries } from "./lib/contentful/sdk"
import CardComponent from "./components/card"

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

      <main className="app__main wrapper mx-auto p-4 flow">
        <p className="italic">Click on the cards to see the riddle.</p>
        <section>
          <div className="btn-grid">
            {riddles.map((riddle: any, index: number) => (
              <CardComponent
                label={riddle.fields.title}
                href={`/${riddle.fields.slug}`}
                key={`r${index}`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
