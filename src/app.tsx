import { useState, useEffect, useMemo } from 'preact/hooks'
import { links, type LinkItem } from './data/links'
import './app.css'

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const filtered: LinkItem[] = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return links
    return links.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q) ||
        (l.tag || '').toLowerCase().includes(q),
    )
  }, [query])

  return (
    <>
      <div class="bg-blobs" aria-hidden="true">
        <div class="blob blob-1" />
        <div class="blob blob-2" />
        <div class="blob blob-3" />
      </div>

      <div class="container">
        <nav class="nav">
          <div class="brand">
            <span class="brand-dot" />
            audrysbut.github.io
          </div>
          <button
            class="theme-toggle"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </nav>

        <header class="hero">
          <span class="eyebrow">
            <span class="eyebrow-dot" />
            Personal hub · GitHub Pages
          </span>
          <h1 class="hero-title">My Projects</h1>
          <p class="hero-sub">
            A curated collection of my web experiments, games and tools. Each one
            is a live GitHub Page — click a card to open it.
          </p>

          <div class="search-wrap">
            <span class="search-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <input
              class="search-input"
              type="search"
              placeholder="Search projects…"
              value={query}
              onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            />
          </div>
        </header>

        <div class="section-head">
          <h2 class="section-title">All projects</h2>
          <span class="section-count">
            {filtered.length} of {links.length}
          </span>
        </div>

        {filtered.length === 0 ? (
          <p class="empty">No projects match "{query}".</p>
        ) : (
          <div class="grid">
            {filtered.map((item, i) => (
              <a
                class="card"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${i * 60}ms` }}
                key={item.url}
              >
                <div class="card-top">
                  <span class="emoji" aria-hidden="true">
                    {item.emoji}
                  </span>
                  {item.tag && <span class="tag">{item.tag}</span>}
                </div>
                <h3 class="card-title">{item.title}</h3>
                <p class="card-desc">{item.description}</p>
                <span class="card-link">
                  Visit site
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        )}

        <footer class="footer">
          Built with Vite, Preact & TypeScript ·{' '}
          <a href="https://github.com/audrysbut" target="_blank" rel="noopener noreferrer">
            @audrysbut on GitHub
          </a>
        </footer>
      </div>
    </>
  )
}
