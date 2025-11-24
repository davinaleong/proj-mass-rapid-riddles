"use client"

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

  // Split content by newlines and render as paragraphs
  const contentParagraphs = content.split('\n').filter(para => para.trim() !== '')

  return (
    <div className="article__collapsible" aria-hidden={thisToggle}>
      <h3 className="article__collapsible__heading text-2xl">
        {headingContent}
      </h3>

      <div className="article__collapsible__content flow">
        {contentParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default CollapsibleContentComponent
