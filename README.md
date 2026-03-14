
## Poke-Performanze

A small Pokémon daily‑catch game built with **Next.js 16 (App Router)**, **TypeScript**, **Prisma** and **PostgreSQL**, based on the challenge described in `exercise.md`.

The goal: catch the original **151 Pokémon**. Each day, a random Pokémon appears and you have **6 Pokéballs** to try and catch it.

---

## Project structure

```bash
pokemon-catch-game/.
├── app
│   ├── api
│   │   ├── game
│   │   │   └── route.ts
│   │   ├── pokemon
│   │   │   └── route.ts
│   │   └── user
│   │       └── route.ts
│   ├── (auth)
│   │   └── login
│   │       └── page.tsx
│   ├── components
│   │   ├── client
│   │   │   ├── CatchAnimation.tsx
│   │   │   ├── GameBoard.tsx
│   │   │   ├── PokeballThrow.tsx
│   │   │   ├── skeletons
│   │   │   │   ├── index.ts
│   │   │   │   └── PokedexSkeleton.tsx
│   │   │   └── UserProgress.tsx
│   │   ├── server
│   │   │   ├── GameWrapper.tsx
│   │   │   ├── PokedexGrid.tsx
│   │   │   ├── PokemonCard.tsx
│   │   │   └── PokemonList.tsx
│   │   └── ui
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── form.tsx
│   │       ├── label.tsx
│   │       ├── pagination.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       └── sonner.tsx
│   ├── (dashboard)
│   │   ├── game
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── hooks
│   │   ├── useGameLogic.ts
│   │   └── usePokemonData.ts
│   ├── lib
│   │   ├── db
│   │   │   ├── generated
│   │   │   │   ├── default.d.ts
│   │   │   │   ├── default.js
│   │   │   │   ├── edge.d.ts
│   │   │   │   ├── edge.js
│   │   │   │   ├── index-browser.js
│   │   │   │   ├── index.d.ts
│   │   │   │   ├── index.js
│   │   │   │   ├── libquery_engine-debian-openssl-3.0.x.so.node
│   │   │   │   ├── package.json
│   │   │   │   ├── runtime
│   │   │   │   │   ├── edge-esm.js
│   │   │   │   │   ├── edge.js
│   │   │   │   │   ├── index-browser.d.ts
│   │   │   │   │   ├── index-browser.js
│   │   │   │   │   ├── library.d.ts
│   │   │   │   │   ├── library.js
│   │   │   │   │   ├── react-native.js
│   │   │   │   │   └── wasm.js
│   │   │   │   ├── schema.prisma
│   │   │   │   ├── wasm.d.ts
│   │   │   │   └── wasm.js
│   │   │   ├── index.ts
│   │   │   └── repositories
│   │   │       ├── game.repository.ts
│   │   │       ├── pokemon.repository.ts
│   │   │       └── user.repository.ts
│   │   ├── game-engine
│   │   │   ├── core.ts
│   │   │   ├── index.ts
│   │   │   ├── service.ts
│   │   │   ├── streaks.ts
│   │   │   └── types.ts
│   │   └── pokemon-api.ts
│   └── styles
│       ├── fonts
│       │   ├── Early-GameBoy.woff
│       │   ├── Early-GameBoy.woff2
│       │   └── stylesheet.css
│       └── globals.css
├── components.json
├── docker
│   └── Dockerfile
├── docker-compose.yml
├── eslint.config.mjs
├── exercise.md
├── lib
│   └── utils.ts
├── next.config.ts
├── next-env.d.ts
├── node_modules
│   ├── class-variance-authority -> .pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority
│   ├── clsx -> .pnpm/clsx@2.1.1/node_modules/clsx
│   ├── embla-carousel-react -> .pnpm/embla-carousel-react@8.6.0_react@19.2.3/node_modules/embla-carousel-react
│   ├── eslint -> .pnpm/eslint@9.39.4_jiti@2.6.1/node_modules/eslint
│   ├── eslint-config-next -> .pnpm/eslint-config-next@16.1.6_@typescript-eslint+parser@8.57.0_eslint@9.39.4_jiti@2.6.1__ty_46142b74aecc9699e70138bdb5fe6886/node_modules/eslint-config-next
│   ├── @hookform
│   │   └── resolvers -> ../.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.71.2_react@19.2.3_/node_modules/@hookform/resolvers
│   ├── lucide-react -> .pnpm/lucide-react@0.577.0_react@19.2.3/node_modules/lucide-react
│   ├── next -> .pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next
│   ├── next-themes -> .pnpm/next-themes@0.4.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next-themes
│   ├── postcss -> .pnpm/postcss@8.5.8/node_modules/postcss
│   ├── @prisma
│   │   └── client -> ../.pnpm/@prisma+client@5.22.0_prisma@5.22.0/node_modules/@prisma/client
│   ├── prisma -> .pnpm/prisma@5.22.0/node_modules/prisma
│   ├── @radix-ui
│   │   ├── react-avatar -> ../.pnpm/@radix-ui+react-avatar@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.14__@types+reac_5736c932d2582092c1d3b5e9eb2f965e/node_modules/@radix-ui/react-avatar
│   │   ├── react-label -> ../.pnpm/@radix-ui+react-label@2.1.8_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@_f43e16a9dccc728e3eeae98f92569367/node_modules/@radix-ui/react-label
│   │   ├── react-scroll-area -> ../.pnpm/@radix-ui+react-scroll-area@1.2.10_@types+react-dom@19.2.3_@types+react@19.2.14__@types_152d8d74323f031dbcfbb23202ab332f/node_modules/@radix-ui/react-scroll-area
│   │   ├── react-select -> ../.pnpm/@radix-ui+react-select@2.2.6_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react_59e27c923ffee0ae02caa79afc2da7e6/node_modules/@radix-ui/react-select
│   │   └── react-slot -> ../.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.14_react@19.2.3/node_modules/@radix-ui/react-slot
│   ├── radix-ui -> .pnpm/radix-ui@1.4.3_@types+react-dom@19.2.3_@types+react@19.2.14__@types+react@19.2.14_react_5d533b4983dc5c891c8cde1f5968d5b9/node_modules/radix-ui
│   ├── react -> .pnpm/react@19.2.3/node_modules/react
│   ├── react-dom -> .pnpm/react-dom@19.2.3_react@19.2.3/node_modules/react-dom
│   ├── react-hook-form -> .pnpm/react-hook-form@7.71.2_react@19.2.3/node_modules/react-hook-form
│   ├── shadcn -> .pnpm/shadcn@4.0.6_@types+node@20.19.37_typescript@5.9.3/node_modules/shadcn
│   ├── sonner -> .pnpm/sonner@2.0.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/sonner
│   ├── @tailwindcss
│   │   └── postcss -> ../.pnpm/@tailwindcss+postcss@4.2.1/node_modules/@tailwindcss/postcss
│   ├── tailwindcss -> .pnpm/tailwindcss@4.2.1/node_modules/tailwindcss
│   ├── tailwind-merge -> .pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge
│   ├── tw-animate-css -> .pnpm/tw-animate-css@1.4.0/node_modules/tw-animate-css
│   ├── @types
│   │   ├── node -> ../.pnpm/@types+node@20.19.37/node_modules/@types/node
│   │   ├── react -> ../.pnpm/@types+react@19.2.14/node_modules/@types/react
│   │   └── react-dom -> ../.pnpm/@types+react-dom@19.2.3_@types+react@19.2.14/node_modules/@types/react-dom
│   ├── typescript -> .pnpm/typescript@5.9.3/node_modules/typescript
│   ├── zod -> .pnpm/zod@4.3.6/node_modules/zod
│   └── zustand -> .pnpm/zustand@5.0.11_@types+react@19.2.14_react@19.2.3_use-sync-external-store@1.6.0_react@19.2.3_/node_modules/zustand
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── prisma
│   └── schema.prisma
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── roadmap.md
├── scripts
│   └── init-db.ts
├── tests
│   └── unit
│       └── game-engine.test.ts
├── tsconfig.json
├── tsconfig.tsbuildinfo
└── types
    ├── cache-life.d.ts
    ├── routes.d.ts
    └── validator.ts

71 directories, 92 files
```

See `roadmap.md` for more implementation notes.

---

## Environment variables

Create an `.env` file at the project root:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/pokemon_game"
NODE_ENV="development"
DEV_MODE="true"           # Optional: infinite daily games in dev
```

- **DATABASE_URL**: any PostgreSQL connection string.
  - For production you can use **Vercel Postgres**, **Supabase**, or any managed Postgres. Supabase works fine; just paste its connection string here.
- **NODE_ENV**: standard Node environment (`development` / `production` / `test`).
- **DEV_MODE**:
  - When `DEV_MODE="true"` the “one game per day” rule is **disabled**, so you can play the daily game repeatedly while debugging.
  - In production, simply **omit** this variable or set it to `"false"`.

---

## Running locally with pnpm

Requirements:
- Node.js 20+
- `pnpm` 8+
- Docker (only if you want to run the DB via `docker compose`)

Install dependencies:

```bash
pnpm install
```

Generate the Prisma client:

```bash
pnpm run db:generate
```

Run migrations and seed the database (151 Pokémon + achievements):

```bash
# Push schema and reset data (dev only)
pnpm run db:reset
# or, if you prefer migrations:
pnpm run db:migrate

# Seed (if not using db:reset, run explicitly)
pnpm run db:init
```

Start the dev server:

```bash
pnpm dev
```

Then open `http://localhost:3000`.

---

## Running with Docker

The repo includes `docker-compose.yml` + `docker/Dockerfile`.

```bash
docker compose up --build
```

This will:
- Start a PostgreSQL container with the DB defined in `docker-compose.yml`.
- Build and run the Next.js app container.

You still need to:
- Ensure `DATABASE_URL` in `.env` matches the Postgres service from Docker.
- Run migrations/seed once (either inside the app container or on your host) with:

```bash
pnpm run db:generate
pnpm run db:migrate
pnpm run db:init
```

---

## Daily game rules (from `exercise.md`)

- **Home (Pokédex)**: After logging in, you see your current collection of caught Pokémon.
- **Daily mini‑game**:
  - You can play a daily catch game from the home screen.
  - Each day, **one random Pokémon** (from the original 151) appears.
  - You have **6 Pokéballs** per day to try to catch it.
- **Catch mechanics**:
  - Each throw has a **25% success rate** (base), tweaked by Pokémon difficulty and your level.
  - If you run out of Pokéballs, the Pokémon escapes and you must wait until the next day.

This implementation adds:
- Experience and levels (more Pokéballs as you level up).
- Streak bonuses.
- Achievements (first catch, collector, legendary, streaks, etc.).

---

## Dev‑mode infinite games

The backend checks `process.env.DEV_MODE`:

- When `DEV_MODE="true"`:
  - The “one daily game” restriction is disabled.
  - Every time you open `/game`, a **new session** is created with a new Pokémon and your current maximum Pokéballs.
  - The `ResetTimer` component shows a `DEVMODE` badge instead of a countdown.

This is meant **only for development** so you can quickly iterate on game balance and UI.

In production (Vercel) you should **not** set `DEV_MODE`, so users keep the intended “one game per day” rule.

---

## Deployment on Vercel

1. **Database choice**
   - You can use:
     - [Vercel Postgres](https://vercel.com/postgres)
     - [Supabase](https://supabase.com/) Postgres
     - Any other managed PostgreSQL.
   - For Supabase, take the project connection string and set it as `DATABASE_URL` in Vercel Project Settings → Environment Variables.

2. **Environment variables on Vercel**
   - `DATABASE_URL`: your production Postgres connection string.
   - (Optional) `NODE_ENV=production` is handled by Vercel automatically.
   - **Do not** set `DEV_MODE` in production.

3. **Prisma in production**
   - `package.json` already has:

     ```json
     "postinstall": "prisma generate"
     ```

   - For schema changes you can:
     - Run `prisma migrate deploy` as part of a one‑off deploy or via a custom script; or
     - Run migrations manually against your production DB before deploying.

4. **Build & runtime**
   - Next.js 16 App Router with `proxy.ts` instead of `middleware.ts`.
   - Image optimization configured in `next.config.ts` for PokéAPI sprites and the local proxy route.
   - No special Vercel configuration is required beyond env vars and database.

---

## How it matches `exercise.md`

- Uses **TypeScript**, **Next.js (App Router)**, **React Server Components**, and **Prisma + PostgreSQL**.
- Fetches and stores the **original 151 Pokémon** from PokéAPI (filtered to the first generation).
- Implements:
  - Registration (simple email + trainer name + password, with hashed passwords).
  - Home Pokédex view listing caught Pokémon.
  - A **daily mini‑game** with:
    - One random Pokémon per day.
    - 6 Pokéballs per day (scaling with level).
    - 25% base catch chance (with difficulty adjustments).
    - “Come back tomorrow” rule enforced server‑side (unless `DEV_MODE=true`).
- Provides a **one‑command Docker setup** (`docker compose up --build`) and an easy pnpm workflow for local development.

Use this README as the source of truth for how to run the project locally, in Docker, and on Vercel.