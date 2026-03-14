# 🗺️ Poke-Performanze – Roadmap & Development Notes

This document describes the current state of the project, what is still missing, and the technical guidelines used to implement the challenge from `exercise.md`. Top priorities: **performance, React Server Components, and CSS‑over‑JS.**

---

## 🛠️ Current Status
- **UI/Styles:** Base structure completed with Tailwind 4 and retro fonts. Premium GameBoy‑inspired look & feel.
- **Database:** Prisma schema defined and database seeded with the original 151 Pokémon.
- **Architecture:** Repositories, GameEngine and security Proxy (nonces / CSP) implemented.
- **Stability:** Image proxy configured to avoid CORS/Forbidden issues with PokéAPI.
- **Pending:** Finish test suite, add Error Boundaries, and final asset optimisation.

---

## 📋 Remaining Work (To‑Do)

### 1. ⚙️ Game Engine
- [x] **Data Sync:** Script/service to populate the DB with the original 151 Pokémon from PokéAPI (`app/lib/pokemon-api.ts`).
- [x] **Game Logic:** Implement `app/lib/game-engine/core.ts`.
- [x] **Repositories:** Wire `app/lib/db/repositories` to Prisma for persisting catches and sessions.

### 2. 📱 Views & Components
- [x] **Pokédex (Home):**
    - `PokedexGrid` and `PokemonCard` as efficient Server Components.
    - Visual states for "Caught" vs "Missing" (CSS filters).
- [x] **Catch Game (`/game`):**
    - `app/(dashboard)/game/page.tsx` uses RSC to load the daily Pokémon.
    - `GameBoard.tsx` is a minimal Client Component for interactivity.
    - **Animations:** CSS + `tw-animate-css` for Pokéball throw/catch, avoiding heavy JS libraries.

### 3. 🚀 Infrastructure, Security & Quality
- [x] **Security:** Strict CSP with nonces and `localPatterns` in Next.js for the image proxy.
- [x] **Stability:** Hydration issues fixed in client components (e.g. `UserProgress`).
- [ ] **Data Integrity:** Add Error Boundaries on main routes to handle network/API failures.
- [ ] **Testing:** Expand unit tests for the GameEngine in `tests/unit/`.
- [ ] **Docker:** Confirm one‑command reproducible environment.

---

## 💡 Guidelines

### 🏎️ Performance
- **Minimal JS:** Prefer CSS animations (`transition`, `keyframes`) over JS animation libraries.
- **Server‑first:** All data fetching happens in Server Components. The client only handles UI events such as "throw Pokéball".
- **Image Optimisation:** Use the local proxy `/api/pokemon/image?id=X` to avoid CSP and CORS issues.
- **Skeleton Screens:** Use existing skeleton components so LCP (Largest Contentful Paint) is effectively instant.

### 🎨 Aesthetics
- Keep the **Retro/GameBoy** look.
- Use color variables defined in `globals.css` (`--main`, `--secondary-background`, etc.).

---

## 🚀 Final Action Prompt

> *Ensure the app is resilient to network failures via try/catch in the Image Proxy and Error Boundaries in the layout. Keep a strict security policy with dynamic nonces while allowing local fonts and base64 media. The home page must load instantly and without hydration errors.*

---

## ✅ Errors (Resolved)

- ⚠ Middleware → Proxy migration warning fixed by using `proxy.ts`.
- Empty API routes (`app/api/pokemon/route.ts`, `app/api/user/route.ts`) removed.
- `app/api/game/route.ts` now uses `gameService.processAttempt` instead of a non‑existent `gameEngine` method.
- Auth/repository references to a non‑existing `lastIp` field removed.
- `streaks.ts` now imports `prisma` correctly and handles missing users.
- `types/validator.ts` is excluded from TypeScript build via `tsconfig.json`.
