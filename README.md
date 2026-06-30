# 🚀 ExecAI

> **Your AI-Powered Desktop Execution Companion**
>
> Plan smarter. Prioritize intelligently. Execute consistently.

ExecAI is an AI-powered desktop productivity companion designed to help students, professionals, and entrepreneurs **plan, prioritize, schedule, and complete work before deadlines are missed.**

Unlike traditional productivity apps that rely on passive reminders, ExecAI stays with you as a **desktop companion**, proactively helping you stay focused—even when the main application is closed.

---

## ✨ Why ExecAI?

Most productivity tools wait for you to open them.

**ExecAI comes to you.**

Its always-on desktop companion acts like your personal AI secretary, continuously helping you manage your day without interrupting your workflow.

Whether you're preparing for exams, building a startup, managing projects, or simply organizing your daily tasks, ExecAI transforms goals into actionable execution plans.

---

# 🖥️ MVP – AI Desktop Companion

The Desktop Companion is the core innovation of ExecAI.

Even after closing the dashboard, the companion remains available on your desktop, allowing you to:

- 📌 Add tasks instantly
- 🔔 Receive smart reminders
- 📅 View today's schedule
- ⚡ Get proactive deadline alerts
- 🤖 Chat with your AI assistant
- 🎯 Stay focused without opening the website

Instead of reminding you after it's too late, ExecAI helps you finish work before deadlines arrive.

---

# 🧠 AI Features

- **AI Goal Planning**
  - Converts goals into structured roadmaps
  - Generates milestones and subtasks
  - Creates execution timelines

- **Intelligent Task Prioritization**
  - Sorts work by urgency, importance, deadlines, and workload

- **Dynamic AI Scheduling**
  - Builds personalized schedules
  - Automatically regenerates plans when availability changes

- **Context-Aware Reminders**
  - Smart notifications based on urgency and user activity

- **Deadline Risk Prediction**
  - Detects high-risk tasks before deadlines are missed

- **Daily Check-ins**
  - Tracks completed work
  - Suggests improvements
  - Updates future schedules automatically

- **Goal & Habit Tracking**
  - Monitor productivity streaks
  - Track long-term progress

- **AI Insights**
  - Personalized productivity recommendations
  - Daily execution analysis

---

# 📅 Calendar Integration

ExecAI automatically syncs:

- Deadlines
- Meetings
- Milestones
- Scheduled work sessions
- Daily plans

---

# 🛠 Tech Stack

### Frontend

- Next.js 14
- React
- Tailwind CSS
- TypeScript
- Clerk Authentication

### Backend

- Node.js
- Express
- Prisma ORM
- PostgreSQL (Supabase)

### AI

- Google Gemini API
- Local AI fallbacks

### Desktop

- Electron

---

# 📂 Project Structure

```
ExecAI/
│
├── app/                 # Next.js App Router
├── components/          # UI Components
├── electron/            # Electron Desktop Companion
├── prisma/              # Database Schema
├── public/
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── jobs/
│   └── middleware/
│
└── main.js              # Electron Entry
```

---

# ✅ Implemented Features

- Electron Desktop Companion
- Next.js Dashboard
- Clerk Authentication
- Express + TypeScript Backend
- Prisma Database
- Gemini AI Integration
- Goal Management
- Task Management
- AI Scheduling
- Daily Check-ins
- Habit Tracking
- Analytics Dashboard
- Background Jobs
- Push Notification Foundation
- Calendar Integration APIs

---

# 🔑 Required Environment Variables

### Root `.env.local`

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### `server/.env`

```env
DATABASE_URL=postgresql://...
CLERK_SECRET_KEY=...
CLERK_PUBLISHABLE_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
GEMINI_API_KEY=...
PORT=3001
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> **Note:** Use the **Supabase PostgreSQL Transaction Pooler URI (port 6543)**, not the dashboard URL.

---

# 🚀 Getting Started

Install dependencies:

```bash
npm install

cd server
npm install
cd ..
```

Generate Prisma client:

```bash
npx prisma generate --schema=prisma/schema.prisma
```

Build the project:

```bash
npm run build

cd server
npm run build
cd ..
```

Launch ExecAI:

```bash
npm run execai
```

The launcher automatically finds free frontend and backend ports if `3000` or `3001` are already in use.

---

# ❤️ Health Check

```bash
curl http://localhost:3001/health
```

Expected response:

```
OK
```

---

# 📌 Current Status

✅ Frontend Build

✅ Backend Build

✅ Prisma Generation

✅ Electron Integration

✅ AI Services

✅ Authentication

✅ Desktop Companion

⚠️ **Known Issue**

If authenticated routes fail, verify your Supabase `DATABASE_URL`.

Use the **Transaction Pooler PostgreSQL URI** from:

**Supabase → Project Settings → Database → Connection String**

---

# 🎯 Vision

We believe productivity shouldn't depend on remembering to open another app.

ExecAI is building the future of intelligent productivity—where an AI companion stays by your side, understands your priorities, adapts to your schedule, and helps you execute your goals before deadlines slip.

---

# 👥 Team

Built with ❤️ for modern productivity.

**ExecAI — Plan Smarter. Execute Better.**
