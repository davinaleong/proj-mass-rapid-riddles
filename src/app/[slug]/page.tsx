import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Link from "next/link"
import LibConfig from "./../lib/config"
import HeaderComponent from "./../components/header"

import { getEntries } from "./../lib/contentful/sdk"
import CollapsibleContentComponent from "../components/collapsible"

export async function generateStaticParams() {
  const items = await getEntries()

  return items.map((item) => ({
    slug: item.fields.slug,
  }))
}

async function getData(slug: string) {
  const items = await getEntries(slug)
  return items[0]
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { fields } = await getData(slug)

  return (
    <>
      <HeaderComponent
        title={LibConfig.title}
        subtitle={LibConfig.copyright}
        showBackBtn={true}
      />

      <main className="app__main wrapper mx-auto py-4 flow">
        <section className="section flow">
          <h2 className="text-4xl font-bold">{`${fields.title}`}</h2>

          <p>Click on the headings to reveal the hints and answers.</p>

          <article className="article flow">
            <CollapsibleContentComponent
              title="Question"
              content={fields.question}
            />

            <CollapsibleContentComponent title="Hint" content={fields.hint} />

            <CollapsibleContentComponent
              title="Answer"
              content={fields.answer}
            />
          </article>
        </section>
      </main>
    </>
  )
}
