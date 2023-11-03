"use client"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useState } from "react"
import { CollapsibleComponentInterface } from "./interfaces"

function CollapsibleContentComponent({
  title,
  content,
  toggle,
  collapsed,
}: CollapsibleComponentInterface): JSX.Element {
  const [thisToggle, setThisToggle] = useState(collapsed)

  const headingContent: JSX.Element | string = toggle ? (
    <button
      className="btn btn-article"
      type="button"
      onClick={() => setThisToggle(!thisToggle)}
    >
      <span className="font-bold">{title}</span>{" "}
      <small>[click to toggle]</small>
    </button>
  ) : (
    <span className="font-bold">{title}</span>
  )

  return (
    <div className="article__collapsible" aria-hidden={thisToggle}>
      <h3 className="article__collapsible__heading text-2xl">
        {headingContent}
      </h3>

      <div className="article__collapsible__content flow">
        {documentToReactComponents(content)}
      </div>
    </div>
  )
}

export default CollapsibleContentComponent
