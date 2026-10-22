import React from 'react'

export default function DevblogCard({devblogId, devblogTitle, devblogDesc="No Description", devblogDate}) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-zinc-950 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-zinc-900/80">
      <time className="mb-4 font-mono text-s uppercase tracking-widest text-emerald-400">
        {devblogDate}
      </time>
      <h2 className="text-4xl font-semibold tracking-tight text-white">
        <a href={`/devblogs/${devblogId}/`} className="after:absolute after:inset-0">
          {devblogTitle}
        </a>
      </h2>
      <p className="mt-3 flex-1 text-m leading-6 text-zinc-400">{devblogDesc}</p>
      <span className="mt-6 text-sm font-medium text-zinc-300 transition group-hover:text-emerald-300">
        Read entry <span aria-hidden="true">→</span>
      </span>
    </article>
  )
}
