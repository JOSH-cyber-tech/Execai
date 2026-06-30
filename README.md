# ExecAI

AI-powered desktop execution assistant for planning, prioritizing, scheduling, tracking, and completing work before deadlines slip.

## Implemented

- Electron desktop shell (`main.js`) that launches the Next.js frontend and Express backend.
- Next.js 14 dashboard with Today, Goals, Tasks, Schedule, Check-in, Habits, and Analytics pages.
- Clerk-protected frontend routes and backend API routes.
- Express + TypeScript backend with Tasks, Goals, Check-in, Schedule, Habits, Analytics, Notifications, and Calendar status APIs.
- Gemini-backed AI service with local fallbacks when `GEMINI_API_KEY` is absent.
- Prisma schema for users, tasks, subtasks, goals, milestones, schedule blocks, habits, check-ins, productivity logs, AI insights, and notifications.
- Background risk detection and evening check-in jobs.
- PWA manifest and push-notification service worker foundation.

## Required Environment

Root `.env.local`:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Backend `server/.env`:

```bash
DATABASE_URL=postgresql://postgres.<project-ref>:<db-password>@aws-0-<region>.pooler.supabase.com:6543/postgres
CLERK_SECRET_KEY=...
CLERK_PUBLISHABLE_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
GEMINI_API_KEY=...
PORT=3001
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Use the Supabase Database connection string, not the dashboard URL. For Supabase pooler mode, use the transaction pooler URI on port `6543`.

## Run

```bash
npm install
cd server && npm install
cd ..
npx prisma generate --schema=prisma/schema.prisma
npm run build
cd server && npm run build
cd ..
npm run execai
```

`npm run execai` automatically picks free frontend/backend ports if `3000` or `3001` are already occupied, then passes the chosen frontend URL into Electron.

Backend health check:

```bash
curl -s http://localhost:3001/health
```

## Verification Status

- `npx prisma generate --schema=prisma/schema.prisma` passes.
- `npm run build` passes for the frontend.
- `cd server && npm run build` passes for the backend.
- Backend starts and `/health` returns OK.

Current blocker for authenticated data routes: the configured Supabase `DATABASE_URL` is rejected by Supabase with `tenant/user postgres.ngvwgacqzxnlbocdngwl not found`. Replace it with the correct transaction-pooler PostgreSQL URI from Supabase Project Settings.
# Execai
# Execai
# Execai
