# Mass Rapid Riddles

A collection of 38 original riddles based on Singapore's Mass Rapid Transit (MRT) subway stations. Each riddle is a playful wordplay puzzle inspired by station names.

Link to project: _coming soon_.

## Features

- 38 riddles sorted alphabetically
- Static site generation for fast performance
- Responsive design with TailwindCSS
- Collapsible hints and answers
- Type-safe TypeScript codebase

## Getting Started

Development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
src/app/
├── page.tsx              # Home page with riddle cards
├── [slug]/page.tsx       # Individual riddle pages
├── components/           # Reusable UI components
│   ├── card/            # Riddle card component
│   ├── collapsible/     # Collapsible content sections
│   └── header/          # Page header
├── db/
│   └── riddles.ts       # Static riddle database (38 riddles)
├── lib/                 # Utility libraries
└── styles/              # SCSS stylesheets
```

## Technology Stack

- **Framework:** Next.js 13.5.4 with App Router
- **Language:** TypeScript
- **Styling:** TailwindCSS and SASS
- **Data:** Static TypeScript database
- **Deployment:** Static site generation (SSG)
