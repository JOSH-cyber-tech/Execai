
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  clerkId: 'clerkId',
  email: 'email',
  name: 'name',
  avatarUrl: 'avatarUrl',
  preferences: 'preferences',
  googleAccessToken: 'googleAccessToken',
  googleRefreshToken: 'googleRefreshToken',
  googleTokenExpiry: 'googleTokenExpiry',
  pushSubscription: 'pushSubscription',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GoalScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  description: 'description',
  category: 'category',
  targetDate: 'targetDate',
  status: 'status',
  aiPlan: 'aiPlan',
  estimatedHours: 'estimatedHours',
  completionPct: 'completionPct',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MilestoneScalarFieldEnum = {
  id: 'id',
  goalId: 'goalId',
  title: 'title',
  targetDate: 'targetDate',
  completed: 'completed',
  completedAt: 'completedAt',
  order: 'order'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  goalId: 'goalId',
  title: 'title',
  description: 'description',
  aiExtracted: 'aiExtracted',
  estimatedMinutes: 'estimatedMinutes',
  priorityScore: 'priorityScore',
  priorityLabel: 'priorityLabel',
  status: 'status',
  deadline: 'deadline',
  scheduledFor: 'scheduledFor',
  completedAt: 'completedAt',
  riskLevel: 'riskLevel',
  riskReason: 'riskReason',
  isRecurring: 'isRecurring',
  recurrenceRule: 'recurrenceRule',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubtaskScalarFieldEnum = {
  id: 'id',
  taskId: 'taskId',
  title: 'title',
  completed: 'completed',
  completedAt: 'completedAt',
  order: 'order'
};

exports.Prisma.ScheduleBlockScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  taskId: 'taskId',
  title: 'title',
  startTime: 'startTime',
  endTime: 'endTime',
  calendarEventId: 'calendarEventId',
  syncedToCalendar: 'syncedToCalendar',
  blockType: 'blockType'
};

exports.Prisma.HabitScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  description: 'description',
  icon: 'icon',
  color: 'color',
  currentStreak: 'currentStreak',
  longestStreak: 'longestStreak',
  totalCompletions: 'totalCompletions',
  completionLog: 'completionLog',
  bestTimePattern: 'bestTimePattern',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CheckinScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  date: 'date',
  completedTaskIds: 'completedTaskIds',
  userMessage: 'userMessage',
  completionPct: 'completionPct',
  coachMessage: 'coachMessage',
  revisedPlan: 'revisedPlan',
  motivationScore: 'motivationScore'
};

exports.Prisma.ProductivityLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  date: 'date',
  tasksCompleted: 'tasksCompleted',
  tasksPlanned: 'tasksPlanned',
  focusMinutes: 'focusMinutes',
  completionRate: 'completionRate',
  weeklyScore: 'weeklyScore'
};

exports.Prisma.AiInsightScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  title: 'title',
  body: 'body',
  generatedAt: 'generatedAt',
  seen: 'seen'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  message: 'message',
  type: 'type',
  isRead: 'isRead',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.GoalCategory = exports.$Enums.GoalCategory = {
  ACADEMIC: 'ACADEMIC',
  CAREER: 'CAREER',
  HEALTH: 'HEALTH',
  PERSONAL: 'PERSONAL',
  FINANCIAL: 'FINANCIAL',
  LEARNING: 'LEARNING',
  OTHER: 'OTHER'
};

exports.GoalStatus = exports.$Enums.GoalStatus = {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  PAUSED: 'PAUSED',
  ABANDONED: 'ABANDONED'
};

exports.Priority = exports.$Enums.Priority = {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

exports.TaskStatus = exports.$Enums.TaskStatus = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  RESCHEDULED: 'RESCHEDULED'
};

exports.RiskLevel = exports.$Enums.RiskLevel = {
  NONE: 'NONE',
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

exports.BlockType = exports.$Enums.BlockType = {
  TASK: 'TASK',
  BREAK: 'BREAK',
  PERSONAL: 'PERSONAL',
  MEETING: 'MEETING'
};

exports.InsightType = exports.$Enums.InsightType = {
  PATTERN: 'PATTERN',
  RECOMMENDATION: 'RECOMMENDATION',
  WARNING: 'WARNING',
  ACHIEVEMENT: 'ACHIEVEMENT'
};

exports.Prisma.ModelName = {
  User: 'User',
  Goal: 'Goal',
  Milestone: 'Milestone',
  Task: 'Task',
  Subtask: 'Subtask',
  ScheduleBlock: 'ScheduleBlock',
  Habit: 'Habit',
  Checkin: 'Checkin',
  ProductivityLog: 'ProductivityLog',
  AiInsight: 'AiInsight',
  Notification: 'Notification'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
