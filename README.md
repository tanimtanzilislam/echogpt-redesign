# EchoGPT redesign

A focused redesign concept for EchoGPT: a calmer multi-model workspace and browser extension, presented through a responsive single-page marketing site.

## Project overview

This repository intentionally contains a partial product concept rather than a complete production app. The current slice focuses on communicating the product clearly and showing the core interaction model:

- A responsive landing page with hero, feature, models, extension preview, FAQ, and CTA sections.
- A product preview showing one prompt compared across GPT-4o, Claude 3.5, and Gemini 1.5.
- A browser extension concept with a compact side-panel flow.
- Responsive navigation and mobile layouts.
- Keyboard-friendly native links, buttons, and FAQ disclosure elements.
- Interactive prompt demo with local response state.
- Light/dark mode toggle, model selection, waitlist form, and extension preview modal.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build with:

```bash
npm run build
npm run start
```

## Technologies

- Next.js 14 App Router
- React 18
- TypeScript
- CSS with responsive media queries
- Lucide React icons

## Assumptions

- This is a design and frontend concept; model calls, authentication, billing, and persisted conversation data are not wired up.
- Product screenshots are represented with lightweight HTML/CSS mockups so the page stays self-contained and fast to load.
- The primary conversion is starting free or installing the Chrome extension.

## Additional features

- Dark ink / lavender visual system with coral accents.
- Mobile navigation drawer.
- Native FAQ accordions.
- Theme toggle with system-friendly reduced-motion behavior.
- Accessible skip link and visible focus states.
- Client-side prototype interactions without a backend dependency.
- Reduced-dependency implementation with no image assets required.
