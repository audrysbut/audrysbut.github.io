export interface LinkItem {
  title: string
  url: string
  description: string
  emoji: string
  tag?: string
}

export const links: LinkItem[] = [
  {
    title: 'Guess the Words',
    url: 'https://audrysbut.github.io/guess-the-words/',
    description:
      'Multiplayer word-guessing game. Host a room, share a code, up to 10 players. Solo practice and PvP rounds. 500+ words across 5 themes, EN/LT.',
    emoji: '🔤',
    tag: 'Game',
  },
  {
    title: 'Goods Sort',
    url: 'https://audrysbut.github.io/goods-sort/',
    description:
      'Relaxing goods sorting puzzle. Match 3 identical items in a row to clear layers and win. Built with Bun, Preact, TypeScript and Vite.',
    emoji: '📦',
    tag: 'Puzzle',
  },
  {
    title: 'Tetris',
    url: 'https://audrysbut.github.io/tetris/',
    description:
      'Classic Tetris in the browser. Single player or 2-player P2P multiplayer over WebRTC (PeerJS) — no server required.',
    emoji: '🧱',
    tag: 'Game',
  },
  {
    title: 'Golden Mind',
    url: 'https://audrysbut.github.io/golden-mind/',
    description:
      'Multiplayer trivia quiz game. Create or join a room, answer questions across rounds, chat with players. P2P via PeerJS.',
    emoji: '🧠',
    tag: 'Quiz',
  },
  {
    title: 'Web Experiments',
    url: 'https://audrysbut.github.io/web-experiments/',
    description:
      'A journey to web development — collection of small experiments and demos built while learning.',
    emoji: '🧪',
    tag: 'Experiments',
  },
  {
    title: 'Family Stuff',
    url: 'https://audrysbut.github.io/family-stuff/',
    description: 'A small family-oriented web app.',
    emoji: '👨‍👩‍👧‍👦',
    tag: 'App',
  },
  {
    title: 'Personality Tools',
    url: 'https://audrysbut.github.io/personality/',
    description: 'Personality-related tools and assessments.',
    emoji: '🧩',
    tag: 'Tools',
  },
  {
    title: 'Node TS Boilerplate',
    url: 'https://audrysbut.github.io/node_typescript_project/',
    description:
      'Demo and boilerplate repository for setting up a Node project with TypeScript.',
    emoji: '⚙️',
    tag: 'Boilerplate',
  },
]
