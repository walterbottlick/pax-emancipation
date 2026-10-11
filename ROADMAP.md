# Roadmap

This is the plan for taking the project from "board and state model" to a complete, tested, solo and pass-and-play game. Phases are ordered by dependency. Sizes are rough effort (S, M, L), not dates.

## Goals

- Implement the full rules accurately.
- Play solo or pass-and-play on one screen, entirely local.
- Save and resume a game without any server.
- Be a clean, well-tested codebase that is easy to read.

## Non-goals

- No backend, accounts or online multiplayer.
- No hosted public instance.
- No scanned artwork, flavor text, rulebook text or logos, and no monetization.

These may be revisited only with the rights holder's permission.

## Done so far

- [x] Board layout with text placeholders: map cards, ports, barrier chits, splays, market spaces, player boards
- [x] State model: port admins, freedmen, dissidents, factories, ships and marines, barrier chits, splays, finance boards
- [x] Piece limits (agents, meeples, factories) and guards against illegal actions
- [x] Solo, two-player and three-player layouts and current-player tracking
- [x] Load-time validation of card data cross-references

## Phase 0: Foundation (S)

- [x] Write `"strict": true` explicitly in `tsconfig.app.json` (TypeScript 6 already enforced it by default)
- [ ] Try `noUncheckedIndexedAccess`, which flags every `record[key]` lookup that could be `undefined`
- [ ] Add Vitest and an `npm test` script
- [ ] Unit-test the existing pure logic: reducer guards (supply limits, port occupancy, one factory per faction, disease eligibility, finance-board color rule), `portAdminCredit`, `barrierChitRows`, `playerBoardLayout`
- [ ] Add a GitHub Actions workflow that runs lint, type-check, tests and build on every push and pull request
- [ ] Choose a license for the code, and state clearly that it does not cover the game's content
- [ ] Settle on the public project title and apply it to the package name, page title and repository name
- [ ] Add `.gitignore` entries for any art folders and local save exports

**Done when:** CI is green on the main branch and the README links to it.

## Phase 1: Engine architecture (M)

Settle these before writing many rules, because they are expensive to retrofit.

- [ ] **Turns and phases.** State records whose turn it is, the current phase, and what is allowed.
- [ ] **Commands.** A player-level intent is validated, then expanded into the existing low-level actions. Validation returns a reason when it fails, so the UI can explain why.
- [ ] **Pending decisions.** State can record a choice that must be made mid-action, such as picking a target.
- [ ] **Seeded randomness.** Dice rolls and shuffles draw from a seed stored in state, so the reducer stays pure and a game can be replayed exactly.
- [ ] **Action log.** Every applied action is recorded. Undo, saving and bug reports all depend on it.
- [ ] **Keep the engine free of React.** Add a lint rule that stops game logic, types and card data importing React.
- [ ] **Hidden information.** Decide whether the rules have private hands. If so, pass-and-play needs a hand-off screen between players.

**Done when:** one simple action works end to end through these layers, with tests.

## Phase 2: Rules, in vertical slices (L)

This phase is driven by the rulebook, so it is the open-ended one. Treat each slice as complete only when its tests pass and it has been checked against the physical game.

For each slice:

1. Write the rule in your own words under `docs/rules/` (summarize, don't paste rulebook text).
2. Write the tests first.
3. Implement it in the engine.
4. Add the UI to trigger it.

Provisional slice list, to reorder from the rulebook:

- [ ] Setup
- [ ] Turn structure
- [ ] The seven op actions in the data
- [ ] The six impact types
- [ ] Barrier chit and dice resolution
- [ ] Revolution cards and engagement spots
- [ ] Flipping map cards from serfdom to modern
- [ ] Market, decks and splays
- [ ] Scoring and victory
- [ ] End of game

### Known gaps in the state model

- [ ] Idea-card syndications (agents on idea cards) are not tracked, so `agentsPlaced()` doesn't count them yet
- [ ] `meeplesPlaced()` only knows about port freedmen and dissidents; add any other meeple locations the rules introduce
- [ ] Market and deck contents, and drawing from them, are not modeled
- [ ] Finance-board state exists for all three factions even in two-player and solo games
- [ ] `RESET_GAME` always returns to the default three-player setup; there is no new-game setup flow yet

## Phase 3: Generic card faces and interaction (M)

- [ ] Original `CardFace` components for map, idea, revolution, starting splay and finance-board cards, plus chits: name and mechanical information in plain layouts, with no art or flavor text
- [ ] Own simple SVG icons for freedoms, ops, impacts and factions
- [ ] Never rely on color alone: chit colors, factions and legal targets also need a shape, label or pattern
- [ ] Highlight legal targets and show the reason when an action is illegal
- [ ] Current-player indicator and a hand-off screen for pass-and-play
- [ ] Responsive layout for a tablet in landscape, plus keyboard and screen-reader basics
- [ ] Remove the text-based testing displays

## Phase 4: Local save and load (S to M)

- [ ] Autosave the game to browser storage after every action. `localStorage` is enough at this size. Use IndexedDB if you want many save slots or very long logs.
- [ ] Save format: a schema version, the seed and the action log, optionally with a snapshot
- [ ] Validate on load and handle older versions gracefully, since the state shape will change during development
- [ ] Export and import a save as a JSON file, for backups and moving between devices
- [ ] A Continue / New game screen with multiple slots
- [ ] Undo and redo from the action log

**Done when:** reloading mid-game restores exactly where you were, and an exported save replays to an identical state (covered by a test).

## Phase 5: Quality and portfolio polish (M)

- [ ] Property-based tests with fast-check: no piece pool ever goes negative or exceeds its limit across random legal action sequences, and save then load then replay equals the live state
- [ ] Component tests with React Testing Library for each board area
- [ ] Playwright end-to-end tests: play several turns, save, reload and continue
- [ ] Accessibility checks with axe, and optional screenshot tests for the board layout
- [ ] Coverage report and coverage thresholds in CI
- [ ] README screenshots or a short GIF of the generic UI, plus an architecture diagram
- [ ] Short decision records under `docs/decisions/` for the main design choices
- [ ] Optional: make it an installable offline PWA, which suits a tablet at the table and stays local-only

## Stretch ideas

- A replay viewer that steps through the action log
- A rules reference panel written in your own words
- A bot that plays one faction in solo mode
- Tests that mutate the reducer (Stryker) to check that the test suite catches real bugs
