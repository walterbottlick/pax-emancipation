# Unofficial Pax Emancipation Fan Project

A browser-based digital table for a Pax Emancipation, built for **solo play** and **pass-and-play**. It tracks the complete game state, enforces the rules it knows about, and draws the board with simple, generic visuals.

> **Unofficial fan project, work in progress.** It is not affiliated with or endorsed by the game's publisher, and it is not a substitute for the original game. See [Content and legal notice](#content-and-legal-notice).

## Status

Early development. The board, the player areas and a rules-enforcing state engine are in place. The turn structure, most game actions, saving and automated tests are not built yet. The plan is in [ROADMAP.md](ROADMAP.md).

| Area | State |
|---|---|
| Board layout: map cards, ports, barrier chits, splays, market, player boards | Rendered with text-based placeholders |
| State model: admins, freedmen, dissidents, factories, ships and marines, barrier chits, splays, finance boards | Implemented |
| Piece limits and illegal-action guards | Implemented |
| Solo, two-player and three-player layouts | Implemented |
| Turn structure and phases | Not started |
| Game actions and card effects | Not started |
| Saving and loading | Not started |
| Automated tests | Not started |

## Scope

- **Solo and pass-and-play only.** One browser tab, one shared screen.
- **Runs locally.** There is no backend, no accounts and no hosted version.
- **Generic visuals.** Cards are shown as plain layouts of their information, without artwork or flavor text.

## Tech stack

- [React](https://react.dev) 19 and [TypeScript](https://www.typescriptlang.org) 6 in strict mode
- [Vite](https://vite.dev) 8 for development and builds
- [ESLint](https://eslint.org) 10 with `typescript-eslint`
- Plain CSS, with container-query units so splay and market cards match the map card size
- No runtime dependencies other than React

## Getting started

**Prerequisites:** Node.js `^20.19` or `>=22.12` (required by Vite 8) and npm.

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev
```

Open the local address that Vite prints (by default `http://localhost:5173`).

| Script | What it does |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Type-check with `tsc -b`, then create a production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Serve the production build locally |

There is no test script yet. Until tests exist, `npm run build` (type-check) and `npm run lint` are the project's safety checks.

## Project structure

```
src/
  game/       State container: action types, reducer, derived queries,
              and the React context that exposes them
  shared/     Vocabulary used across features: factions, freedoms, ops,
              impacts, dice, blood products, and the top-level GameState type
  features/   One folder per game component (MapCard, BarrierChit, Splay,
              Market, PlayerArea, FinanceBoard, RevolutionCard, ...)
  App.tsx     Page layout
```

Each feature folder follows the same pattern:

- `*.types.ts` holds the shapes and any small pure helpers.
- `*Definitions.ts` holds the static card or component data.
- `*.tsx` and `*.css` render it.

## Design notes

These are the decisions that shape the code.

- **One source of truth, everything else derived.** Piece pools are never stored. Agents, meeples and factories in a pool are computed as the faction's limit minus what is currently on the board, so a counter can't drift out of sync with the board.
- **Illegal actions do nothing.** The reducer rejects an action instead of corrupting state: placing on an occupied port, placing a piece with an empty pool, a second factory for one faction, a foreign agent on a non-Parliament finance board, and similar cases.
- **Invalid states are hard to express.** Discriminated unions tie extra data to the variants that need it. For example, an impact that targets a port can't be written without the port, and a barrier-claim impact can't be written without its color.
- **Data is validated when the app loads.** Cross-references in the card data, such as a card pointing at a port that doesn't exist, throw immediately with a clear message instead of failing mid-game.
- **Stable layouts.** A barrier chit's slot is computed from the card data, never from which chits are still present, so removing one leaves a gap instead of shifting its neighbors.
- **Game logic stays out of React.** The reducer, action types, queries and all card data and types are plain TypeScript. Only the small context wrapper (`GameContext.tsx`, `gameContexts.ts`, `useGame.ts`) touches React.
- **Readable state.** Enum-like values are `as const` objects whose values are readable strings, so logged state and debugging output make sense at a glance.

## Content and legal notice

- This is an independent, non-commercial, personal and educational project. It is not affiliated with, endorsed by, or sponsored by the publisher of the tabletop game it models.
- The game's name, trademarks, artwork, flavor text and rulebook belong to their respective owners. This repository does not contain scans or copies of artwork, flavor text, rulebook text or logos, and it won't. Card visuals are original and generic.
- Mechanical game data, such as card names and numeric values, is entered by hand so the rules can be modeled.
- The project is meant to be used alongside the original game, not instead of it.
- If you are a rights holder and have a concern about anything here, please open an issue and it will be addressed promptly.

## License

No license has been chosen yet. Until one is added, all rights are reserved by the author. Choosing a license for the code is tracked in the [roadmap](ROADMAP.md).
