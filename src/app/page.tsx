import LibConfig from "./lib/config"
import HeaderComponent from "./components/header"
import CardComponent from "./components/card"
import { getAllRiddles } from "./db/riddles"

export default function Home() {
  const riddles = getAllRiddles()

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
            {riddles.map((riddle, index: number) => (
              <CardComponent
                label={riddle.title}
                href={`/${riddle.slug}`}
                key={`r${index}`}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
