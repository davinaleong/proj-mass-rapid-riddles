import LibConfig from "./../lib/config"
import HeaderComponent from "./../components/header"
import CollapsibleContentComponent from "../components/collapsible"
import { getRiddleBySlug, getRiddleSlugs } from "../db/riddles"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return getRiddleSlugs().map((slug) => ({
    slug,
  }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const riddle = getRiddleBySlug(slug)

  if (!riddle) {
    notFound()
  }

  return (
    <>
      <HeaderComponent
        title={LibConfig.title}
        subtitle={LibConfig.copyright}
        showBackBtn={true}
      />

      <main className="app__main wrapper mx-auto p-4 flow">
        <section className="section flow">
          <h2 className="text-4xl font-bold">{riddle.title}</h2>

          <p className="italic">
            Click on the headings to reveal the hints and answers.
          </p>

          <article className="article flow">
            <CollapsibleContentComponent
              title="Question"
              content={riddle.question}
            />

            {riddle.hint && (
              <CollapsibleContentComponent
                title="Hint"
                content={riddle.hint}
                toggle={true}
                collapsed={true}
              />
            )}

            {riddle.answer && (
              <CollapsibleContentComponent
                title="Answer"
                content={riddle.answer}
                toggle={true}
                collapsed={true}
              />
            )}
          </article>
        </section>
      </main>
    </>
  )
}
