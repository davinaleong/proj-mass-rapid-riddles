import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { CollapsibleComponentInterface } from "./interfaces"

function CollapsibleContentComponent({
  title,
  content,
}: CollapsibleComponentInterface): JSX.Element {
  return (
    <>
      <h3 className="article__heading text-2xl font-bold">
        <button className="btn btn-article" type="button">
          {title}
        </button>
      </h3>

      <div className="article__content flow">
        {documentToReactComponents(content)}
      </div>
    </>
  )
}

export default CollapsibleContentComponent
