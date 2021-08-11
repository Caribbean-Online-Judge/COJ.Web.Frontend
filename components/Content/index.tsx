import React from "react"

export default function Content(): JSX.Element {
  return (
    <div className="post">
      <div className="post-body">
        <div className="post-inner article">
          <h2 className="postheader">Welcome to Challenger Online Judge</h2>
          <div className="postcontent" />
          <div className="cleared" />
        </div>
        <div className="cleared" />
      </div>
    </div>
  )
}
