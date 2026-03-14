
## Poke-Performanze

A small Pokémon daily‑catch game built with **Next.js 16 (App Router)**, **TypeScript**, **Prisma** and **PostgreSQL**, based on the challenge described in `exercise.md`.

The goal: catch the original **151 Pokémon**. Each day, a random Pokémon appears and you have **6 Pokéballs** to try and catch it.

---

## Project structure

```bash
pokemon-catch-game/
├── app
│   ├── (auth)              # Login / registration
│   ├── (dashboard)         # Pokédex home + /game
│   ├── api                 # Game, pokemon and user API routes
│   ├── components
│   │   ├── client          # Client components (GameBoard, UserProgress, skeletons…)
│   │   ├── server          # Server components (PokedexGrid, PokemonCard…)
│   │   └── ui              # Reusable UI primitives (button, card, alert…)
│   ├── lib
│   │   ├── db              # Prisma client + repositories
│   │   ├── game-engine     # Core game logic and service layer
│   │   └── pokemon-api.ts  # Sync script against PokéAPI
│   └── styles              # Global styles + fonts
├── prisma                  # Prisma schema
├── docker                  # App Dockerfile
├── tests
│   └── unit                # Vitest unit tests for the game engine
├── scripts                 # DB init / seed scripts
├── README.md
├── roadmap.md
├── package.json
└── docker-compose.yml
```

See `roadmap.md` for more implementation notes.

---

## Environment variables

Create an `.env` file at the project root:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/pokemon_game"
NODE_ENV="development"    # Optional: Next.js sets this automatically in dev
```

- **DATABASE_URL**: any PostgreSQL connection string.
  - For production you can use **Vercel Postgres**, **Supabase**, or any managed Postgres. Supabase works fine; just paste its connection string here.
- **NODE_ENV**: standard Node environment (`development` / `production` / `test`).  
  - Dev‑mode infinite games are enabled when `NODE_ENV="development"` (for example when running `pnpm dev`).

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

The backend checks `process.env.NODE_ENV`:

- When `NODE_ENV === "development"`:
  - The “one daily game” restriction is disabled.
  - Every time you open `/game`, a **new session** is created with a new Pokémon and your current maximum Pokéballs.
  - The `ResetTimer` component shows a `DEVMODE` badge instead of a countdown.

This is meant **only for development** so you can quickly iterate on game balance and UI.

In production (Vercel) you should **not** set `NODE_ENV`, so users keep the intended “one game per day” rule.

---

## Deployment on Vercel

1. **Database choice**
   - You can use:
     - [Vercel Postgres](https://vercel.com/postgres)
     - Any other managed PostgreSQL.

2. **Environment variables on Vercel**
   - `DATABASE_URL`: your production Postgres connection string.
   - (Optional) `NODE_ENV=production` is handled by Vercel automatically.
   - **Do not** override `NODE_ENV` to non‑standard values in production.

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
    - 6 Pokéballs per day.
    - 25% base catch chance (with difficulty adjustments).
    - “Come back tomorrow” rule enforced server‑side.
- Provides a **one‑command Docker setup** (`docker compose up --build`) and an easy pnpm workflow for local development.

Use this README as the source of truth for how to run the project locally, in Docker, and on Vercel.

---

## Running tests

Unit tests for the game engine live under `tests/unit/`.

With `pnpm`:

```bash
pnpm test
```

This uses `vitest` to run the suite and validates, among other things, that:

- The base catch rate is ~25%.
- Pokéballs are decremented correctly and never go below zero.
- The “no Pokéballs left” rule behaves as described in `exercise.md`.