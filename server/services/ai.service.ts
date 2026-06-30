import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// ─── 1. NATURAL LANGUAGE TASK PARSING ───────────────────────────────────────
export async function parseNaturalLanguageTask(input: string): Promise<ParsedTask> {
  const prompt = `You are a productivity AI. Parse this natural language input into structured data.

Input: "${input}"
Today's date: ${new Date().toISOString().split('T')[0]}

Extract and return ONLY valid JSON (no markdown, no explanation):
{
  "title": "short task title",
  "description": "detailed description if any",
  "deadline": "ISO date string or null",
  "estimatedMinutes": number or null,
  "priority": "CRITICAL|HIGH|MEDIUM|LOW",
  "priorityScore": number 0-100,
  "category": "ACADEMIC|CAREER|HEALTH|PERSONAL|FINANCIAL|LEARNING|OTHER",
  "isGoal": boolean,
  "suggestedSubtasks": ["subtask 1", "subtask 2", "subtask 3"]
}`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}

// ─── 2. GOAL DECOMPOSITION INTO DAY-BY-DAY PLAN ─────────────────────────────
export async function decomposeGoalIntoTasks(
  goalTitle: string,
  deadline: string,
  freeHoursPerDay: number,
  category: string
): Promise<GoalPlan> {
  const daysAvailable = Math.ceil(
    (new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  const prompt = `You are an expert productivity planner. Create a complete day-by-day execution plan.

Goal: "${goalTitle}"
Category: ${category}
Deadline: ${deadline} (${daysAvailable} days from today)
Free hours per day: ${freeHoursPerDay} hours
Today's date: ${new Date().toISOString().split('T')[0]}

Return ONLY valid JSON:
{
  "goalSummary": "one sentence summary",
  "totalEstimatedHours": number,
  "priority": "CRITICAL|HIGH|MEDIUM|LOW",
  "milestones": [
    { "title": "milestone title", "targetDay": number, "description": "what should be done by this day" }
  ],
  "days": [
    {
      "day": 1,
      "date": "YYYY-MM-DD",
      "tasks": [
        {
          "title": "task title",
          "estimatedMinutes": number,
          "subtasks": ["subtask 1", "subtask 2"],
          "priority": "HIGH|MEDIUM|LOW"
        }
      ]
    }
  ],
  "tips": ["practical tip 1", "practical tip 2", "practical tip 3"]
}

Rules:
- Each day's total tasks should not exceed ${freeHoursPerDay * 60} minutes
- Be specific and actionable, not vague
- Front-load harder tasks in the first 60% of days
- Leave the last 20% of days for revision and buffer`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}

// ─── 3. PRIORITY SCORE CALCULATION ──────────────────────────────────────────
export async function calculatePriorityScore(
  tasks: Array<{ id: string; title: string; deadline: string | null; status: string }>
): Promise<Array<{ id: string; priorityScore: number; priorityLabel: string; reason: string }>> {
  const prompt = `You are a priority scoring AI. Score each task on urgency and importance.

Tasks: ${JSON.stringify(tasks)}
Today: ${new Date().toISOString()}

Return ONLY valid JSON array:
[
  {
    "id": "task_id",
    "priorityScore": 0-100,
    "priorityLabel": "CRITICAL|HIGH|MEDIUM|LOW",
    "reason": "one sentence explanation"
  }
]

Scoring guide:
- CRITICAL (80-100): Due within 24 hours OR exam/interview/submission
- HIGH (60-79): Due within 3 days OR significant impact
- MEDIUM (40-59): Due within a week
- LOW (0-39): No deadline OR low impact`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}

// ─── 4. INTELLIGENT SCHEDULING ──────────────────────────────────────────────
export async function generateDailySchedule(
  tasks: Array<{ id: string; title: string; estimatedMinutes: number; priorityScore: number }>,
  freeTimeStart: string,
  freeTimeEnd: string,
  date: string
): Promise<ScheduleBlock[]> {
  const prompt = `You are a scheduling AI. Assign tasks to time blocks optimally.

Date: ${date}
Free time window: ${freeTimeStart} to ${freeTimeEnd}
Tasks to schedule: ${JSON.stringify(tasks)}

Rules:
- Higher priority tasks get earlier slots
- Include 10-minute breaks every 50 minutes (Pomodoro-style)
- Do not exceed the free time window
- If tasks don't fit, schedule only the highest priority ones

Return ONLY valid JSON array:
[
  {
    "taskId": "task_id or null for breaks",
    "title": "task title or 'Break'",
    "startTime": "HH:MM",
    "endTime": "HH:MM",
    "blockType": "TASK|BREAK"
  }
]`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}

// ─── 5. EVENING ACCOUNTABILITY COACH ────────────────────────────────────────
export async function generateCoachResponse(
  completedTasks: string[],
  plannedTasks: string[],
  remainingPlan: any[],
  daysUntilDeadline: number | null,
  userMessage?: string
): Promise<CoachResponse> {
  const completionPct = plannedTasks.length > 0
    ? Math.round((completedTasks.length / plannedTasks.length) * 100)
    : 0;

  const prompt = `You are a warm but firm AI accountability coach. The user just completed their day.

What they planned: ${JSON.stringify(plannedTasks)}
What they completed: ${JSON.stringify(completedTasks)}
Completion: ${completionPct}%
Days until next deadline: ${daysUntilDeadline ?? 'no deadline'}
User's message: "${userMessage || 'No message'}"
Remaining plan: ${JSON.stringify(remainingPlan.slice(0, 5))}

Be encouraging but honest. If they underperformed, acknowledge it directly but motivate.

Return ONLY valid JSON:
{
  "completionPct": ${completionPct},
  "coachMessage": "2-3 sentences: acknowledge what they did, one honest observation, one forward-looking motivation",
  "tomorrowTasks": [
    { "title": "task title", "estimatedMinutes": number, "reason": "why this is priority tomorrow" }
  ],
  "motivationScore": 1-10,
  "tip": "one specific actionable tip for tomorrow"
}`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}

// ─── 6. DEADLINE RISK DETECTION ─────────────────────────────────────────────
export async function detectDeadlineRisks(
  tasks: Array<{
    id: string;
    title: string;
    deadline: string;
    completionPct: number;
    estimatedMinutes: number;
    daysRemaining: number;
  }>
): Promise<Array<{ id: string; riskLevel: string; riskReason: string; recommendation: string }>> {
  const prompt = `You are a deadline risk AI. Analyze each task and flag risks.

Tasks: ${JSON.stringify(tasks)}
Today: ${new Date().toISOString()}

For each task, assess: given progress vs time remaining, will the user likely miss this deadline?

Return ONLY valid JSON array:
[
  {
    "id": "task_id",
    "riskLevel": "NONE|LOW|MEDIUM|HIGH|CRITICAL",
    "riskReason": "specific reason e.g. '30% complete with only 2 days left'",
    "recommendation": "specific action e.g. 'Study 4 hours today instead of 2'"
  }
]

Risk levels:
- CRITICAL: Will definitely miss deadline at current pace
- HIGH: Very likely to miss deadline
- MEDIUM: At risk if pace doesn't increase
- LOW: Slightly behind but recoverable
- NONE: On track`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}

// ─── 7. WEEKLY AI INSIGHTS ───────────────────────────────────────────────────
export async function generateWeeklyInsights(
  productivityLogs: any[],
  completionRates: number[],
  habitData: any[]
): Promise<AiInsight[]> {
  const prompt = `You are a productivity analytics AI. Generate personalized insights.

Last 7 days data:
Productivity logs: ${JSON.stringify(productivityLogs)}
Daily completion rates: ${JSON.stringify(completionRates)}
Habit data: ${JSON.stringify(habitData)}

Generate 3 insights. Return ONLY valid JSON array:
[
  {
    "type": "PATTERN|RECOMMENDATION|WARNING|ACHIEVEMENT",
    "title": "short insight title",
    "body": "2-3 sentences with specific data-backed insight"
  }
]

Examples:
- "You complete 73% more tasks on Tuesdays — consider scheduling your hardest work then"
- "Your habit streak dropped when you had more than 5 tasks in a day"
- "You hit 100% completion 3 days this week — your best streak yet!"`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}

// ─── 8. HABIT PATTERN ANALYSIS ───────────────────────────────────────────────
export async function analyzeHabitPattern(
  habitName: string,
  completionLog: Record<string, boolean>,
  scheduleBlocks: any[]
): Promise<{ bestTimePattern: string; insight: string }> {
  const prompt = `Analyze this habit completion pattern and find the best time for it.

Habit: "${habitName}"
Completion log (date: completed): ${JSON.stringify(completionLog)}
User's schedule blocks: ${JSON.stringify(scheduleBlocks.slice(0, 20))}

Return ONLY valid JSON:
{
  "bestTimePattern": "e.g. '8-10 PM' or 'morning before 9 AM'",
  "insight": "one specific insight about when/why this habit works best for this user"
}`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}

// TypeScript interfaces
interface ParsedTask {
  title: string;
  description: string;
  deadline: string | null;
  estimatedMinutes: number | null;
  priority: string;
  priorityScore: number;
  category: string;
  isGoal: boolean;
  suggestedSubtasks: string[];
}

interface GoalPlan {
  goalSummary: string;
  totalEstimatedHours: number;
  priority: string;
  milestones: Array<{ title: string; targetDay: number; description: string }>;
  days: Array<{ day: number; date: string; tasks: Array<{ title: string; estimatedMinutes: number; subtasks: string[]; priority: string }> }>;
  tips: string[];
}

interface ScheduleBlock {
  taskId: string | null;
  title: string;
  startTime: string;
  endTime: string;
  blockType: string;
}

interface CoachResponse {
  completionPct: number;
  coachMessage: string;
  tomorrowTasks: Array<{ title: string; estimatedMinutes: number; reason: string }>;
  motivationScore: number;
  tip: string;
}

interface AiInsight {
  type: string;
  title: string;
  body: string;
}
