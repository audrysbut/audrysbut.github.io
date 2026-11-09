import { useState, useEffect } from 'preact/hooks'
import { links } from './data/links'
import './app.css'

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

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
        </header>

        <div class="section-head">
          <h2 class="section-title">All projects</h2>
          <span class="section-count">{links.length} projects</span>
        </div>

        <div class="grid">
          {links.map((item, i) => (
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
