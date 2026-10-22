import React from 'react'

export default function DevblogCard({devblogId, devblogTitle, devblogDesc="No Description", devblogDate}) {
  return (
    <div>
        <a href={`/devblogs/${devblogId}/`}><h1>{devblogTitle}</h1></a>
        <h2>{devblogDate}</h2>
        <p>{devblogDesc}</p>
    </div>
  )
}