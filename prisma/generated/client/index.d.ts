
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Subtask
 * 
 */
export type Subtask = $Result.DefaultSelection<Prisma.$SubtaskPayload>
/**
 * Model ScheduleBlock
 * 
 */
export type ScheduleBlock = $Result.DefaultSelection<Prisma.$ScheduleBlockPayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model Checkin
 * 
 */
export type Checkin = $Result.DefaultSelection<Prisma.$CheckinPayload>
/**
 * Model ProductivityLog
 * 
 */
export type ProductivityLog = $Result.DefaultSelection<Prisma.$ProductivityLogPayload>
/**
 * Model AiInsight
 * 
 */
export type AiInsight = $Result.DefaultSelection<Prisma.$AiInsightPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GoalCategory: {
  ACADEMIC: 'ACADEMIC',
  CAREER: 'CAREER',
  HEALTH: 'HEALTH',
  PERSONAL: 'PERSONAL',
  FINANCIAL: 'FINANCIAL',
  LEARNING: 'LEARNING',
  OTHER: 'OTHER'
};

export type GoalCategory = (typeof GoalCategory)[keyof typeof GoalCategory]


export const GoalStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  PAUSED: 'PAUSED',
  ABANDONED: 'ABANDONED'
};

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus]


export const Priority: {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const TaskStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  RESCHEDULED: 'RESCHEDULED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const RiskLevel: {
  NONE: 'NONE',
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const BlockType: {
  TASK: 'TASK',
  BREAK: 'BREAK',
  PERSONAL: 'PERSONAL',
  MEETING: 'MEETING'
};

export type BlockType = (typeof BlockType)[keyof typeof BlockType]


export const InsightType: {
  PATTERN: 'PATTERN',
  RECOMMENDATION: 'RECOMMENDATION',
  WARNING: 'WARNING',
  ACHIEVEMENT: 'ACHIEVEMENT'
};

export type InsightType = (typeof InsightType)[keyof typeof InsightType]

}

export type GoalCategory = $Enums.GoalCategory

export const GoalCategory: typeof $Enums.GoalCategory

export type GoalStatus = $Enums.GoalStatus

export const GoalStatus: typeof $Enums.GoalStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type BlockType = $Enums.BlockType

export const BlockType: typeof $Enums.BlockType

export type InsightType = $Enums.InsightType

export const InsightType: typeof $Enums.InsightType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.subtask`: Exposes CRUD operations for the **Subtask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtasks
    * const subtasks = await prisma.subtask.findMany()
    * ```
    */
  get subtask(): Prisma.SubtaskDelegate<ExtArgs>;

  /**
   * `prisma.scheduleBlock`: Exposes CRUD operations for the **ScheduleBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleBlocks
    * const scheduleBlocks = await prisma.scheduleBlock.findMany()
    * ```
    */
  get scheduleBlock(): Prisma.ScheduleBlockDelegate<ExtArgs>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs>;

  /**
   * `prisma.checkin`: Exposes CRUD operations for the **Checkin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkins
    * const checkins = await prisma.checkin.findMany()
    * ```
    */
  get checkin(): Prisma.CheckinDelegate<ExtArgs>;

  /**
   * `prisma.productivityLog`: Exposes CRUD operations for the **ProductivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductivityLogs
    * const productivityLogs = await prisma.productivityLog.findMany()
    * ```
    */
  get productivityLog(): Prisma.ProductivityLogDelegate<ExtArgs>;

  /**
   * `prisma.aiInsight`: Exposes CRUD operations for the **AiInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiInsights
    * const aiInsights = await prisma.aiInsight.findMany()
    * ```
    */
  get aiInsight(): Prisma.AiInsightDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'goal' | 'milestone' | 'task' | 'subtask' | 'scheduleBlock' | 'habit' | 'checkin' | 'productivityLog' | 'aiInsight' | 'notification'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>,
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>,
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Subtask: {
        payload: Prisma.$SubtaskPayload<ExtArgs>
        fields: Prisma.SubtaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubtaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubtaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          findFirst: {
            args: Prisma.SubtaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubtaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          findMany: {
            args: Prisma.SubtaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>[]
          }
          create: {
            args: Prisma.SubtaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          createMany: {
            args: Prisma.SubtaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubtaskCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>[]
          }
          delete: {
            args: Prisma.SubtaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          update: {
            args: Prisma.SubtaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          deleteMany: {
            args: Prisma.SubtaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubtaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubtaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>
          }
          aggregate: {
            args: Prisma.SubtaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubtask>
          }
          groupBy: {
            args: Prisma.SubtaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubtaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubtaskCountArgs<ExtArgs>,
            result: $Utils.Optional<SubtaskCountAggregateOutputType> | number
          }
        }
      }
      ScheduleBlock: {
        payload: Prisma.$ScheduleBlockPayload<ExtArgs>
        fields: Prisma.ScheduleBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleBlockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleBlockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          findFirst: {
            args: Prisma.ScheduleBlockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleBlockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          findMany: {
            args: Prisma.ScheduleBlockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>[]
          }
          create: {
            args: Prisma.ScheduleBlockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          createMany: {
            args: Prisma.ScheduleBlockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleBlockCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>[]
          }
          delete: {
            args: Prisma.ScheduleBlockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          update: {
            args: Prisma.ScheduleBlockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          deleteMany: {
            args: Prisma.ScheduleBlockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleBlockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleBlockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScheduleBlockPayload>
          }
          aggregate: {
            args: Prisma.ScheduleBlockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScheduleBlock>
          }
          groupBy: {
            args: Prisma.ScheduleBlockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleBlockCountArgs<ExtArgs>,
            result: $Utils.Optional<ScheduleBlockCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>,
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      Checkin: {
        payload: Prisma.$CheckinPayload<ExtArgs>
        fields: Prisma.CheckinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckinFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckinFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          findFirst: {
            args: Prisma.CheckinFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckinFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          findMany: {
            args: Prisma.CheckinFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>[]
          }
          create: {
            args: Prisma.CheckinCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          createMany: {
            args: Prisma.CheckinCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckinCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>[]
          }
          delete: {
            args: Prisma.CheckinDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          update: {
            args: Prisma.CheckinUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          deleteMany: {
            args: Prisma.CheckinDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CheckinUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CheckinUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CheckinPayload>
          }
          aggregate: {
            args: Prisma.CheckinAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCheckin>
          }
          groupBy: {
            args: Prisma.CheckinGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CheckinGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckinCountArgs<ExtArgs>,
            result: $Utils.Optional<CheckinCountAggregateOutputType> | number
          }
        }
      }
      ProductivityLog: {
        payload: Prisma.$ProductivityLogPayload<ExtArgs>
        fields: Prisma.ProductivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductivityLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductivityLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload>
          }
          findFirst: {
            args: Prisma.ProductivityLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductivityLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload>
          }
          findMany: {
            args: Prisma.ProductivityLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload>[]
          }
          create: {
            args: Prisma.ProductivityLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload>
          }
          createMany: {
            args: Prisma.ProductivityLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductivityLogCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload>[]
          }
          delete: {
            args: Prisma.ProductivityLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload>
          }
          update: {
            args: Prisma.ProductivityLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ProductivityLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductivityLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductivityLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductivityLogPayload>
          }
          aggregate: {
            args: Prisma.ProductivityLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductivityLog>
          }
          groupBy: {
            args: Prisma.ProductivityLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductivityLogCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductivityLogCountAggregateOutputType> | number
          }
        }
      }
      AiInsight: {
        payload: Prisma.$AiInsightPayload<ExtArgs>
        fields: Prisma.AiInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiInsightFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiInsightFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          findFirst: {
            args: Prisma.AiInsightFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiInsightFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          findMany: {
            args: Prisma.AiInsightFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>[]
          }
          create: {
            args: Prisma.AiInsightCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          createMany: {
            args: Prisma.AiInsightCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiInsightCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>[]
          }
          delete: {
            args: Prisma.AiInsightDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          update: {
            args: Prisma.AiInsightUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          deleteMany: {
            args: Prisma.AiInsightDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AiInsightUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AiInsightUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AiInsightPayload>
          }
          aggregate: {
            args: Prisma.AiInsightAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAiInsight>
          }
          groupBy: {
            args: Prisma.AiInsightGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AiInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiInsightCountArgs<ExtArgs>,
            result: $Utils.Optional<AiInsightCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tasks: number
    goals: number
    habits: number
    scheduleBlocks: number
    productivityLogs: number
    aiInsights: number
    checkins: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    habits?: boolean | UserCountOutputTypeCountHabitsArgs
    scheduleBlocks?: boolean | UserCountOutputTypeCountScheduleBlocksArgs
    productivityLogs?: boolean | UserCountOutputTypeCountProductivityLogsArgs
    aiInsights?: boolean | UserCountOutputTypeCountAiInsightsArgs
    checkins?: boolean | UserCountOutputTypeCountCheckinsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScheduleBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleBlockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInsightWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    tasks: number
    milestones: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | GoalCountOutputTypeCountTasksArgs
    milestones?: boolean | GoalCountOutputTypeCountMilestonesArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    subtasks: number
    scheduleBlocks: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtasks?: boolean | TaskCountOutputTypeCountSubtasksArgs
    scheduleBlocks?: boolean | TaskCountOutputTypeCountScheduleBlocksArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountScheduleBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleBlockWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    googleAccessToken: string | null
    googleRefreshToken: string | null
    googleTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    googleAccessToken: string | null
    googleRefreshToken: string | null
    googleTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    name: number
    avatarUrl: number
    preferences: number
    googleAccessToken: number
    googleRefreshToken: number
    googleTokenExpiry: number
    pushSubscription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    avatarUrl?: true
    googleAccessToken?: true
    googleRefreshToken?: true
    googleTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    avatarUrl?: true
    googleAccessToken?: true
    googleRefreshToken?: true
    googleTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    avatarUrl?: true
    preferences?: true
    googleAccessToken?: true
    googleRefreshToken?: true
    googleTokenExpiry?: true
    pushSubscription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    name: string
    avatarUrl: string | null
    preferences: JsonValue
    googleAccessToken: string | null
    googleRefreshToken: string | null
    googleTokenExpiry: Date | null
    pushSubscription: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    preferences?: boolean
    googleAccessToken?: boolean
    googleRefreshToken?: boolean
    googleTokenExpiry?: boolean
    pushSubscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    scheduleBlocks?: boolean | User$scheduleBlocksArgs<ExtArgs>
    productivityLogs?: boolean | User$productivityLogsArgs<ExtArgs>
    aiInsights?: boolean | User$aiInsightsArgs<ExtArgs>
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    preferences?: boolean
    googleAccessToken?: boolean
    googleRefreshToken?: boolean
    googleTokenExpiry?: boolean
    pushSubscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    scheduleBlocks?: boolean | User$scheduleBlocksArgs<ExtArgs>
    productivityLogs?: boolean | User$productivityLogsArgs<ExtArgs>
    aiInsights?: boolean | User$aiInsightsArgs<ExtArgs>
    checkins?: boolean | User$checkinsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      habits: Prisma.$HabitPayload<ExtArgs>[]
      scheduleBlocks: Prisma.$ScheduleBlockPayload<ExtArgs>[]
      productivityLogs: Prisma.$ProductivityLogPayload<ExtArgs>[]
      aiInsights: Prisma.$AiInsightPayload<ExtArgs>[]
      checkins: Prisma.$CheckinPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      name: string
      avatarUrl: string | null
      preferences: Prisma.JsonValue
      googleAccessToken: string | null
      googleRefreshToken: string | null
      googleTokenExpiry: Date | null
      pushSubscription: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findMany'> | Null>;

    habits<T extends User$habitsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'findMany'> | Null>;

    scheduleBlocks<T extends User$scheduleBlocksArgs<ExtArgs> = {}>(args?: Subset<T, User$scheduleBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'findMany'> | Null>;

    productivityLogs<T extends User$productivityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$productivityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    aiInsights<T extends User$aiInsightsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiInsightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'findMany'> | Null>;

    checkins<T extends User$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, User$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'findMany'> | Null>;

    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly preferences: FieldRef<"User", 'Json'>
    readonly googleAccessToken: FieldRef<"User", 'String'>
    readonly googleRefreshToken: FieldRef<"User", 'String'>
    readonly googleTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly pushSubscription: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.habits
   */
  export type User$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * User.scheduleBlocks
   */
  export type User$scheduleBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    where?: ScheduleBlockWhereInput
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    cursor?: ScheduleBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * User.productivityLogs
   */
  export type User$productivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    where?: ProductivityLogWhereInput
    orderBy?: ProductivityLogOrderByWithRelationInput | ProductivityLogOrderByWithRelationInput[]
    cursor?: ProductivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductivityLogScalarFieldEnum | ProductivityLogScalarFieldEnum[]
  }

  /**
   * User.aiInsights
   */
  export type User$aiInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    where?: AiInsightWhereInput
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    cursor?: AiInsightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * User.checkins
   */
  export type User$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    cursor?: CheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    estimatedHours: number | null
    completionPct: number | null
  }

  export type GoalSumAggregateOutputType = {
    estimatedHours: number | null
    completionPct: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    category: $Enums.GoalCategory | null
    targetDate: Date | null
    status: $Enums.GoalStatus | null
    estimatedHours: number | null
    completionPct: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    category: $Enums.GoalCategory | null
    targetDate: Date | null
    status: $Enums.GoalStatus | null
    estimatedHours: number | null
    completionPct: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    category: number
    targetDate: number
    status: number
    aiPlan: number
    estimatedHours: number
    completionPct: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    estimatedHours?: true
    completionPct?: true
  }

  export type GoalSumAggregateInputType = {
    estimatedHours?: true
    completionPct?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    category?: true
    targetDate?: true
    status?: true
    estimatedHours?: true
    completionPct?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    category?: true
    targetDate?: true
    status?: true
    estimatedHours?: true
    completionPct?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    category?: true
    targetDate?: true
    status?: true
    aiPlan?: true
    estimatedHours?: true
    completionPct?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    category: $Enums.GoalCategory
    targetDate: Date
    status: $Enums.GoalStatus
    aiPlan: JsonValue | null
    estimatedHours: number | null
    completionPct: number
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    targetDate?: boolean
    status?: boolean
    aiPlan?: boolean
    estimatedHours?: boolean
    completionPct?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    milestones?: boolean | Goal$milestonesArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    targetDate?: boolean
    status?: boolean
    aiPlan?: boolean
    estimatedHours?: boolean
    completionPct?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    milestones?: boolean | Goal$milestonesArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      category: $Enums.GoalCategory
      targetDate: Date
      status: $Enums.GoalStatus
      aiPlan: Prisma.JsonValue | null
      estimatedHours: number | null
      completionPct: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }


  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GoalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GoalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GoalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
    **/
    create<T extends GoalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GoalCreateArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends GoalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
    **/
    delete<T extends GoalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GoalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GoalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GoalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
    **/
    upsert<T extends GoalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>
    ): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    tasks<T extends Goal$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Goal$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    milestones<T extends Goal$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Goal$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Goal model
   */ 
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly description: FieldRef<"Goal", 'String'>
    readonly category: FieldRef<"Goal", 'GoalCategory'>
    readonly targetDate: FieldRef<"Goal", 'DateTime'>
    readonly status: FieldRef<"Goal", 'GoalStatus'>
    readonly aiPlan: FieldRef<"Goal", 'Json'>
    readonly estimatedHours: FieldRef<"Goal", 'Int'>
    readonly completionPct: FieldRef<"Goal", 'Int'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
  }

  /**
   * Goal.tasks
   */
  export type Goal$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Goal.milestones
   */
  export type Goal$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneAvgAggregateOutputType = {
    order: number | null
  }

  export type MilestoneSumAggregateOutputType = {
    order: number | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: string | null
    goalId: string | null
    title: string | null
    targetDate: Date | null
    completed: boolean | null
    completedAt: Date | null
    order: number | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: string | null
    goalId: string | null
    title: string | null
    targetDate: Date | null
    completed: boolean | null
    completedAt: Date | null
    order: number | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    goalId: number
    title: number
    targetDate: number
    completed: number
    completedAt: number
    order: number
    _all: number
  }


  export type MilestoneAvgAggregateInputType = {
    order?: true
  }

  export type MilestoneSumAggregateInputType = {
    order?: true
  }

  export type MilestoneMinAggregateInputType = {
    id?: true
    goalId?: true
    title?: true
    targetDate?: true
    completed?: true
    completedAt?: true
    order?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    goalId?: true
    title?: true
    targetDate?: true
    completed?: true
    completedAt?: true
    order?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    goalId?: true
    title?: true
    targetDate?: true
    completed?: true
    completedAt?: true
    order?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _avg?: MilestoneAvgAggregateInputType
    _sum?: MilestoneSumAggregateInputType
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: string
    goalId: string
    title: string
    targetDate: Date
    completed: boolean
    completedAt: Date | null
    order: number
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    goalId?: boolean
    title?: boolean
    targetDate?: boolean
    completed?: boolean
    completedAt?: boolean
    order?: boolean
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    goalId?: boolean
    title?: boolean
    targetDate?: boolean
    completed?: boolean
    completedAt?: boolean
    order?: boolean
  }


  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | GoalDefaultArgs<ExtArgs>
  }


  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      goal: Prisma.$GoalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      goalId: string
      title: string
      targetDate: Date
      completed: boolean
      completedAt: Date | null
      order: number
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }


  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MilestoneFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>
    ): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MilestoneFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>
    ): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MilestoneFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
    **/
    create<T extends MilestoneCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>
    ): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MilestoneCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
    **/
    delete<T extends MilestoneDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>
    ): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MilestoneUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>
    ): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MilestoneDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MilestoneUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
    **/
    upsert<T extends MilestoneUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>
    ): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    goal<T extends GoalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GoalDefaultArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Milestone model
   */ 
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'String'>
    readonly goalId: FieldRef<"Milestone", 'String'>
    readonly title: FieldRef<"Milestone", 'String'>
    readonly targetDate: FieldRef<"Milestone", 'DateTime'>
    readonly completed: FieldRef<"Milestone", 'Boolean'>
    readonly completedAt: FieldRef<"Milestone", 'DateTime'>
    readonly order: FieldRef<"Milestone", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    estimatedMinutes: number | null
    priorityScore: number | null
  }

  export type TaskSumAggregateOutputType = {
    estimatedMinutes: number | null
    priorityScore: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    title: string | null
    description: string | null
    aiExtracted: boolean | null
    estimatedMinutes: number | null
    priorityScore: number | null
    priorityLabel: $Enums.Priority | null
    status: $Enums.TaskStatus | null
    deadline: Date | null
    scheduledFor: Date | null
    completedAt: Date | null
    riskLevel: $Enums.RiskLevel | null
    riskReason: string | null
    isRecurring: boolean | null
    recurrenceRule: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    title: string | null
    description: string | null
    aiExtracted: boolean | null
    estimatedMinutes: number | null
    priorityScore: number | null
    priorityLabel: $Enums.Priority | null
    status: $Enums.TaskStatus | null
    deadline: Date | null
    scheduledFor: Date | null
    completedAt: Date | null
    riskLevel: $Enums.RiskLevel | null
    riskReason: string | null
    isRecurring: boolean | null
    recurrenceRule: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    userId: number
    goalId: number
    title: number
    description: number
    aiExtracted: number
    estimatedMinutes: number
    priorityScore: number
    priorityLabel: number
    status: number
    deadline: number
    scheduledFor: number
    completedAt: number
    riskLevel: number
    riskReason: number
    isRecurring: number
    recurrenceRule: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    estimatedMinutes?: true
    priorityScore?: true
  }

  export type TaskSumAggregateInputType = {
    estimatedMinutes?: true
    priorityScore?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    title?: true
    description?: true
    aiExtracted?: true
    estimatedMinutes?: true
    priorityScore?: true
    priorityLabel?: true
    status?: true
    deadline?: true
    scheduledFor?: true
    completedAt?: true
    riskLevel?: true
    riskReason?: true
    isRecurring?: true
    recurrenceRule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    title?: true
    description?: true
    aiExtracted?: true
    estimatedMinutes?: true
    priorityScore?: true
    priorityLabel?: true
    status?: true
    deadline?: true
    scheduledFor?: true
    completedAt?: true
    riskLevel?: true
    riskReason?: true
    isRecurring?: true
    recurrenceRule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    title?: true
    description?: true
    aiExtracted?: true
    estimatedMinutes?: true
    priorityScore?: true
    priorityLabel?: true
    status?: true
    deadline?: true
    scheduledFor?: true
    completedAt?: true
    riskLevel?: true
    riskReason?: true
    isRecurring?: true
    recurrenceRule?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    userId: string
    goalId: string | null
    title: string
    description: string | null
    aiExtracted: boolean
    estimatedMinutes: number | null
    priorityScore: number
    priorityLabel: $Enums.Priority
    status: $Enums.TaskStatus
    deadline: Date | null
    scheduledFor: Date | null
    completedAt: Date | null
    riskLevel: $Enums.RiskLevel
    riskReason: string | null
    isRecurring: boolean
    recurrenceRule: string | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    title?: boolean
    description?: boolean
    aiExtracted?: boolean
    estimatedMinutes?: boolean
    priorityScore?: boolean
    priorityLabel?: boolean
    status?: boolean
    deadline?: boolean
    scheduledFor?: boolean
    completedAt?: boolean
    riskLevel?: boolean
    riskReason?: boolean
    isRecurring?: boolean
    recurrenceRule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    scheduleBlocks?: boolean | Task$scheduleBlocksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    userId?: boolean
    goalId?: boolean
    title?: boolean
    description?: boolean
    aiExtracted?: boolean
    estimatedMinutes?: boolean
    priorityScore?: boolean
    priorityLabel?: boolean
    status?: boolean
    deadline?: boolean
    scheduledFor?: boolean
    completedAt?: boolean
    riskLevel?: boolean
    riskReason?: boolean
    isRecurring?: boolean
    recurrenceRule?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    scheduleBlocks?: boolean | Task$scheduleBlocksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      goal: Prisma.$GoalPayload<ExtArgs> | null
      subtasks: Prisma.$SubtaskPayload<ExtArgs>[]
      scheduleBlocks: Prisma.$ScheduleBlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      goalId: string | null
      title: string
      description: string | null
      aiExtracted: boolean
      estimatedMinutes: number | null
      priorityScore: number
      priorityLabel: $Enums.Priority
      status: $Enums.TaskStatus
      deadline: Date | null
      scheduledFor: Date | null
      completedAt: Date | null
      riskLevel: $Enums.RiskLevel
      riskReason: string | null
      isRecurring: boolean
      recurrenceRule: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }


  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    goal<T extends Task$goalArgs<ExtArgs> = {}>(args?: Subset<T, Task$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    subtasks<T extends Task$subtasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$subtasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    scheduleBlocks<T extends Task$scheduleBlocksArgs<ExtArgs> = {}>(args?: Subset<T, Task$scheduleBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly goalId: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly aiExtracted: FieldRef<"Task", 'Boolean'>
    readonly estimatedMinutes: FieldRef<"Task", 'Int'>
    readonly priorityScore: FieldRef<"Task", 'Int'>
    readonly priorityLabel: FieldRef<"Task", 'Priority'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly deadline: FieldRef<"Task", 'DateTime'>
    readonly scheduledFor: FieldRef<"Task", 'DateTime'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly riskLevel: FieldRef<"Task", 'RiskLevel'>
    readonly riskReason: FieldRef<"Task", 'String'>
    readonly isRecurring: FieldRef<"Task", 'Boolean'>
    readonly recurrenceRule: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.goal
   */
  export type Task$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * Task.subtasks
   */
  export type Task$subtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    where?: SubtaskWhereInput
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    cursor?: SubtaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * Task.scheduleBlocks
   */
  export type Task$scheduleBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    where?: ScheduleBlockWhereInput
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    cursor?: ScheduleBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Subtask
   */

  export type AggregateSubtask = {
    _count: SubtaskCountAggregateOutputType | null
    _avg: SubtaskAvgAggregateOutputType | null
    _sum: SubtaskSumAggregateOutputType | null
    _min: SubtaskMinAggregateOutputType | null
    _max: SubtaskMaxAggregateOutputType | null
  }

  export type SubtaskAvgAggregateOutputType = {
    order: number | null
  }

  export type SubtaskSumAggregateOutputType = {
    order: number | null
  }

  export type SubtaskMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    title: string | null
    completed: boolean | null
    completedAt: Date | null
    order: number | null
  }

  export type SubtaskMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    title: string | null
    completed: boolean | null
    completedAt: Date | null
    order: number | null
  }

  export type SubtaskCountAggregateOutputType = {
    id: number
    taskId: number
    title: number
    completed: number
    completedAt: number
    order: number
    _all: number
  }


  export type SubtaskAvgAggregateInputType = {
    order?: true
  }

  export type SubtaskSumAggregateInputType = {
    order?: true
  }

  export type SubtaskMinAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    completed?: true
    completedAt?: true
    order?: true
  }

  export type SubtaskMaxAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    completed?: true
    completedAt?: true
    order?: true
  }

  export type SubtaskCountAggregateInputType = {
    id?: true
    taskId?: true
    title?: true
    completed?: true
    completedAt?: true
    order?: true
    _all?: true
  }

  export type SubtaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtask to aggregate.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subtasks
    **/
    _count?: true | SubtaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubtaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubtaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtaskMaxAggregateInputType
  }

  export type GetSubtaskAggregateType<T extends SubtaskAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtask[P]>
      : GetScalarType<T[P], AggregateSubtask[P]>
  }




  export type SubtaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubtaskWhereInput
    orderBy?: SubtaskOrderByWithAggregationInput | SubtaskOrderByWithAggregationInput[]
    by: SubtaskScalarFieldEnum[] | SubtaskScalarFieldEnum
    having?: SubtaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtaskCountAggregateInputType | true
    _avg?: SubtaskAvgAggregateInputType
    _sum?: SubtaskSumAggregateInputType
    _min?: SubtaskMinAggregateInputType
    _max?: SubtaskMaxAggregateInputType
  }

  export type SubtaskGroupByOutputType = {
    id: string
    taskId: string
    title: string
    completed: boolean
    completedAt: Date | null
    order: number
    _count: SubtaskCountAggregateOutputType | null
    _avg: SubtaskAvgAggregateOutputType | null
    _sum: SubtaskSumAggregateOutputType | null
    _min: SubtaskMinAggregateOutputType | null
    _max: SubtaskMaxAggregateOutputType | null
  }

  type GetSubtaskGroupByPayload<T extends SubtaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubtaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtaskGroupByOutputType[P]>
            : GetScalarType<T[P], SubtaskGroupByOutputType[P]>
        }
      >
    >


  export type SubtaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    title?: boolean
    completed?: boolean
    completedAt?: boolean
    order?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subtask"]>

  export type SubtaskSelectScalar = {
    id?: boolean
    taskId?: boolean
    title?: boolean
    completed?: boolean
    completedAt?: boolean
    order?: boolean
  }


  export type SubtaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }


  export type $SubtaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subtask"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      title: string
      completed: boolean
      completedAt: Date | null
      order: number
    }, ExtArgs["result"]["subtask"]>
    composites: {}
  }


  type SubtaskGetPayload<S extends boolean | null | undefined | SubtaskDefaultArgs> = $Result.GetResult<Prisma.$SubtaskPayload, S>

  type SubtaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubtaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubtaskCountAggregateInputType | true
    }

  export interface SubtaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subtask'], meta: { name: 'Subtask' } }
    /**
     * Find zero or one Subtask that matches the filter.
     * @param {SubtaskFindUniqueArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubtaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskFindUniqueArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subtask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubtaskFindUniqueOrThrowArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubtaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subtask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskFindFirstArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubtaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskFindFirstArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subtask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskFindFirstOrThrowArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubtaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subtasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtasks
     * const subtasks = await prisma.subtask.findMany()
     * 
     * // Get first 10 Subtasks
     * const subtasks = await prisma.subtask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtaskWithIdOnly = await prisma.subtask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubtaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subtask.
     * @param {SubtaskCreateArgs} args - Arguments to create a Subtask.
     * @example
     * // Create one Subtask
     * const Subtask = await prisma.subtask.create({
     *   data: {
     *     // ... data to create a Subtask
     *   }
     * })
     * 
    **/
    create<T extends SubtaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskCreateArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subtasks.
     * @param {SubtaskCreateManyArgs} args - Arguments to create many Subtasks.
     * @example
     * // Create many Subtasks
     * const subtask = await prisma.subtask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SubtaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subtasks and returns the data saved in the database.
     * @param {SubtaskCreateManyAndReturnArgs} args - Arguments to create many Subtasks.
     * @example
     * // Create many Subtasks
     * const subtask = await prisma.subtask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subtasks and only return the `id`
     * const subtaskWithIdOnly = await prisma.subtask.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends SubtaskCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Subtask.
     * @param {SubtaskDeleteArgs} args - Arguments to delete one Subtask.
     * @example
     * // Delete one Subtask
     * const Subtask = await prisma.subtask.delete({
     *   where: {
     *     // ... filter to delete one Subtask
     *   }
     * })
     * 
    **/
    delete<T extends SubtaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskDeleteArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subtask.
     * @param {SubtaskUpdateArgs} args - Arguments to update one Subtask.
     * @example
     * // Update one Subtask
     * const subtask = await prisma.subtask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubtaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskUpdateArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subtasks.
     * @param {SubtaskDeleteManyArgs} args - Arguments to filter Subtasks to delete.
     * @example
     * // Delete a few Subtasks
     * const { count } = await prisma.subtask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubtaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtasks
     * const subtask = await prisma.subtask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubtaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subtask.
     * @param {SubtaskUpsertArgs} args - Arguments to update or create a Subtask.
     * @example
     * // Update or create a Subtask
     * const subtask = await prisma.subtask.upsert({
     *   create: {
     *     // ... data to create a Subtask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtask we want to update
     *   }
     * })
    **/
    upsert<T extends SubtaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskUpsertArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskCountArgs} args - Arguments to filter Subtasks to count.
     * @example
     * // Count the number of Subtasks
     * const count = await prisma.subtask.count({
     *   where: {
     *     // ... the filter for the Subtasks we want to count
     *   }
     * })
    **/
    count<T extends SubtaskCountArgs>(
      args?: Subset<T, SubtaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubtaskAggregateArgs>(args: Subset<T, SubtaskAggregateArgs>): Prisma.PrismaPromise<GetSubtaskAggregateType<T>>

    /**
     * Group by Subtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubtaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubtaskGroupByArgs['orderBy'] }
        : { orderBy?: SubtaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubtaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subtask model
   */
  readonly fields: SubtaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subtask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubtaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Subtask model
   */ 
  interface SubtaskFieldRefs {
    readonly id: FieldRef<"Subtask", 'String'>
    readonly taskId: FieldRef<"Subtask", 'String'>
    readonly title: FieldRef<"Subtask", 'String'>
    readonly completed: FieldRef<"Subtask", 'Boolean'>
    readonly completedAt: FieldRef<"Subtask", 'DateTime'>
    readonly order: FieldRef<"Subtask", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subtask findUnique
   */
  export type SubtaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where: SubtaskWhereUniqueInput
  }

  /**
   * Subtask findUniqueOrThrow
   */
  export type SubtaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where: SubtaskWhereUniqueInput
  }

  /**
   * Subtask findFirst
   */
  export type SubtaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtasks.
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtasks.
     */
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * Subtask findFirstOrThrow
   */
  export type SubtaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtasks.
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtasks.
     */
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * Subtask findMany
   */
  export type SubtaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtasks to fetch.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subtasks.
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[]
  }

  /**
   * Subtask create
   */
  export type SubtaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Subtask.
     */
    data: XOR<SubtaskCreateInput, SubtaskUncheckedCreateInput>
  }

  /**
   * Subtask createMany
   */
  export type SubtaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subtasks.
     */
    data: SubtaskCreateManyInput | SubtaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subtask createManyAndReturn
   */
  export type SubtaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The data used to create many Subtasks.
     */
    data: SubtaskCreateManyInput | SubtaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subtask update
   */
  export type SubtaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Subtask.
     */
    data: XOR<SubtaskUpdateInput, SubtaskUncheckedUpdateInput>
    /**
     * Choose, which Subtask to update.
     */
    where: SubtaskWhereUniqueInput
  }

  /**
   * Subtask updateMany
   */
  export type SubtaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subtasks.
     */
    data: XOR<SubtaskUpdateManyMutationInput, SubtaskUncheckedUpdateManyInput>
    /**
     * Filter which Subtasks to update
     */
    where?: SubtaskWhereInput
  }

  /**
   * Subtask upsert
   */
  export type SubtaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Subtask to update in case it exists.
     */
    where: SubtaskWhereUniqueInput
    /**
     * In case the Subtask found by the `where` argument doesn't exist, create a new Subtask with this data.
     */
    create: XOR<SubtaskCreateInput, SubtaskUncheckedCreateInput>
    /**
     * In case the Subtask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubtaskUpdateInput, SubtaskUncheckedUpdateInput>
  }

  /**
   * Subtask delete
   */
  export type SubtaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter which Subtask to delete.
     */
    where: SubtaskWhereUniqueInput
  }

  /**
   * Subtask deleteMany
   */
  export type SubtaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtasks to delete
     */
    where?: SubtaskWhereInput
  }

  /**
   * Subtask without action
   */
  export type SubtaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubtaskInclude<ExtArgs> | null
  }


  /**
   * Model ScheduleBlock
   */

  export type AggregateScheduleBlock = {
    _count: ScheduleBlockCountAggregateOutputType | null
    _min: ScheduleBlockMinAggregateOutputType | null
    _max: ScheduleBlockMaxAggregateOutputType | null
  }

  export type ScheduleBlockMinAggregateOutputType = {
    id: string | null
    userId: string | null
    taskId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    calendarEventId: string | null
    syncedToCalendar: boolean | null
    blockType: $Enums.BlockType | null
  }

  export type ScheduleBlockMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    taskId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    calendarEventId: string | null
    syncedToCalendar: boolean | null
    blockType: $Enums.BlockType | null
  }

  export type ScheduleBlockCountAggregateOutputType = {
    id: number
    userId: number
    taskId: number
    title: number
    startTime: number
    endTime: number
    calendarEventId: number
    syncedToCalendar: number
    blockType: number
    _all: number
  }


  export type ScheduleBlockMinAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    title?: true
    startTime?: true
    endTime?: true
    calendarEventId?: true
    syncedToCalendar?: true
    blockType?: true
  }

  export type ScheduleBlockMaxAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    title?: true
    startTime?: true
    endTime?: true
    calendarEventId?: true
    syncedToCalendar?: true
    blockType?: true
  }

  export type ScheduleBlockCountAggregateInputType = {
    id?: true
    userId?: true
    taskId?: true
    title?: true
    startTime?: true
    endTime?: true
    calendarEventId?: true
    syncedToCalendar?: true
    blockType?: true
    _all?: true
  }

  export type ScheduleBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleBlock to aggregate.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleBlocks
    **/
    _count?: true | ScheduleBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleBlockMaxAggregateInputType
  }

  export type GetScheduleBlockAggregateType<T extends ScheduleBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleBlock[P]>
      : GetScalarType<T[P], AggregateScheduleBlock[P]>
  }




  export type ScheduleBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleBlockWhereInput
    orderBy?: ScheduleBlockOrderByWithAggregationInput | ScheduleBlockOrderByWithAggregationInput[]
    by: ScheduleBlockScalarFieldEnum[] | ScheduleBlockScalarFieldEnum
    having?: ScheduleBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleBlockCountAggregateInputType | true
    _min?: ScheduleBlockMinAggregateInputType
    _max?: ScheduleBlockMaxAggregateInputType
  }

  export type ScheduleBlockGroupByOutputType = {
    id: string
    userId: string
    taskId: string | null
    title: string
    startTime: Date
    endTime: Date
    calendarEventId: string | null
    syncedToCalendar: boolean
    blockType: $Enums.BlockType
    _count: ScheduleBlockCountAggregateOutputType | null
    _min: ScheduleBlockMinAggregateOutputType | null
    _max: ScheduleBlockMaxAggregateOutputType | null
  }

  type GetScheduleBlockGroupByPayload<T extends ScheduleBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleBlockGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleBlockGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    taskId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    calendarEventId?: boolean
    syncedToCalendar?: boolean
    blockType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ScheduleBlock$taskArgs<ExtArgs>
  }, ExtArgs["result"]["scheduleBlock"]>

  export type ScheduleBlockSelectScalar = {
    id?: boolean
    userId?: boolean
    taskId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    calendarEventId?: boolean
    syncedToCalendar?: boolean
    blockType?: boolean
  }


  export type ScheduleBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | ScheduleBlock$taskArgs<ExtArgs>
  }


  export type $ScheduleBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleBlock"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      taskId: string | null
      title: string
      startTime: Date
      endTime: Date
      calendarEventId: string | null
      syncedToCalendar: boolean
      blockType: $Enums.BlockType
    }, ExtArgs["result"]["scheduleBlock"]>
    composites: {}
  }


  type ScheduleBlockGetPayload<S extends boolean | null | undefined | ScheduleBlockDefaultArgs> = $Result.GetResult<Prisma.$ScheduleBlockPayload, S>

  type ScheduleBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScheduleBlockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScheduleBlockCountAggregateInputType | true
    }

  export interface ScheduleBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleBlock'], meta: { name: 'ScheduleBlock' } }
    /**
     * Find zero or one ScheduleBlock that matches the filter.
     * @param {ScheduleBlockFindUniqueArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScheduleBlockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleBlockFindUniqueArgs<ExtArgs>>
    ): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ScheduleBlock that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScheduleBlockFindUniqueOrThrowArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScheduleBlockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleBlockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ScheduleBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockFindFirstArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScheduleBlockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleBlockFindFirstArgs<ExtArgs>>
    ): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ScheduleBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockFindFirstOrThrowArgs} args - Arguments to find a ScheduleBlock
     * @example
     * // Get one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScheduleBlockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleBlockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ScheduleBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleBlocks
     * const scheduleBlocks = await prisma.scheduleBlock.findMany()
     * 
     * // Get first 10 ScheduleBlocks
     * const scheduleBlocks = await prisma.scheduleBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleBlockWithIdOnly = await prisma.scheduleBlock.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScheduleBlockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleBlockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ScheduleBlock.
     * @param {ScheduleBlockCreateArgs} args - Arguments to create a ScheduleBlock.
     * @example
     * // Create one ScheduleBlock
     * const ScheduleBlock = await prisma.scheduleBlock.create({
     *   data: {
     *     // ... data to create a ScheduleBlock
     *   }
     * })
     * 
    **/
    create<T extends ScheduleBlockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleBlockCreateArgs<ExtArgs>>
    ): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ScheduleBlocks.
     * @param {ScheduleBlockCreateManyArgs} args - Arguments to create many ScheduleBlocks.
     * @example
     * // Create many ScheduleBlocks
     * const scheduleBlock = await prisma.scheduleBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ScheduleBlockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleBlockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleBlocks and returns the data saved in the database.
     * @param {ScheduleBlockCreateManyAndReturnArgs} args - Arguments to create many ScheduleBlocks.
     * @example
     * // Create many ScheduleBlocks
     * const scheduleBlock = await prisma.scheduleBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleBlocks and only return the `id`
     * const scheduleBlockWithIdOnly = await prisma.scheduleBlock.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ScheduleBlockCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleBlockCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ScheduleBlock.
     * @param {ScheduleBlockDeleteArgs} args - Arguments to delete one ScheduleBlock.
     * @example
     * // Delete one ScheduleBlock
     * const ScheduleBlock = await prisma.scheduleBlock.delete({
     *   where: {
     *     // ... filter to delete one ScheduleBlock
     *   }
     * })
     * 
    **/
    delete<T extends ScheduleBlockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleBlockDeleteArgs<ExtArgs>>
    ): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ScheduleBlock.
     * @param {ScheduleBlockUpdateArgs} args - Arguments to update one ScheduleBlock.
     * @example
     * // Update one ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScheduleBlockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleBlockUpdateArgs<ExtArgs>>
    ): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ScheduleBlocks.
     * @param {ScheduleBlockDeleteManyArgs} args - Arguments to filter ScheduleBlocks to delete.
     * @example
     * // Delete a few ScheduleBlocks
     * const { count } = await prisma.scheduleBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScheduleBlockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScheduleBlockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleBlocks
     * const scheduleBlock = await prisma.scheduleBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScheduleBlockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleBlockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScheduleBlock.
     * @param {ScheduleBlockUpsertArgs} args - Arguments to update or create a ScheduleBlock.
     * @example
     * // Update or create a ScheduleBlock
     * const scheduleBlock = await prisma.scheduleBlock.upsert({
     *   create: {
     *     // ... data to create a ScheduleBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleBlock we want to update
     *   }
     * })
    **/
    upsert<T extends ScheduleBlockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScheduleBlockUpsertArgs<ExtArgs>>
    ): Prisma__ScheduleBlockClient<$Result.GetResult<Prisma.$ScheduleBlockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ScheduleBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockCountArgs} args - Arguments to filter ScheduleBlocks to count.
     * @example
     * // Count the number of ScheduleBlocks
     * const count = await prisma.scheduleBlock.count({
     *   where: {
     *     // ... the filter for the ScheduleBlocks we want to count
     *   }
     * })
    **/
    count<T extends ScheduleBlockCountArgs>(
      args?: Subset<T, ScheduleBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleBlockAggregateArgs>(args: Subset<T, ScheduleBlockAggregateArgs>): Prisma.PrismaPromise<GetScheduleBlockAggregateType<T>>

    /**
     * Group by ScheduleBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleBlockGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleBlock model
   */
  readonly fields: ScheduleBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    task<T extends ScheduleBlock$taskArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleBlock$taskArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ScheduleBlock model
   */ 
  interface ScheduleBlockFieldRefs {
    readonly id: FieldRef<"ScheduleBlock", 'String'>
    readonly userId: FieldRef<"ScheduleBlock", 'String'>
    readonly taskId: FieldRef<"ScheduleBlock", 'String'>
    readonly title: FieldRef<"ScheduleBlock", 'String'>
    readonly startTime: FieldRef<"ScheduleBlock", 'DateTime'>
    readonly endTime: FieldRef<"ScheduleBlock", 'DateTime'>
    readonly calendarEventId: FieldRef<"ScheduleBlock", 'String'>
    readonly syncedToCalendar: FieldRef<"ScheduleBlock", 'Boolean'>
    readonly blockType: FieldRef<"ScheduleBlock", 'BlockType'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleBlock findUnique
   */
  export type ScheduleBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock findUniqueOrThrow
   */
  export type ScheduleBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock findFirst
   */
  export type ScheduleBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleBlocks.
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleBlocks.
     */
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * ScheduleBlock findFirstOrThrow
   */
  export type ScheduleBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlock to fetch.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleBlocks.
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleBlocks.
     */
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * ScheduleBlock findMany
   */
  export type ScheduleBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter, which ScheduleBlocks to fetch.
     */
    where?: ScheduleBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleBlocks to fetch.
     */
    orderBy?: ScheduleBlockOrderByWithRelationInput | ScheduleBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleBlocks.
     */
    cursor?: ScheduleBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleBlocks.
     */
    skip?: number
    distinct?: ScheduleBlockScalarFieldEnum | ScheduleBlockScalarFieldEnum[]
  }

  /**
   * ScheduleBlock create
   */
  export type ScheduleBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduleBlock.
     */
    data: XOR<ScheduleBlockCreateInput, ScheduleBlockUncheckedCreateInput>
  }

  /**
   * ScheduleBlock createMany
   */
  export type ScheduleBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleBlocks.
     */
    data: ScheduleBlockCreateManyInput | ScheduleBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleBlock createManyAndReturn
   */
  export type ScheduleBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * The data used to create many ScheduleBlocks.
     */
    data: ScheduleBlockCreateManyInput | ScheduleBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleBlock update
   */
  export type ScheduleBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduleBlock.
     */
    data: XOR<ScheduleBlockUpdateInput, ScheduleBlockUncheckedUpdateInput>
    /**
     * Choose, which ScheduleBlock to update.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock updateMany
   */
  export type ScheduleBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleBlocks.
     */
    data: XOR<ScheduleBlockUpdateManyMutationInput, ScheduleBlockUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleBlocks to update
     */
    where?: ScheduleBlockWhereInput
  }

  /**
   * ScheduleBlock upsert
   */
  export type ScheduleBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduleBlock to update in case it exists.
     */
    where: ScheduleBlockWhereUniqueInput
    /**
     * In case the ScheduleBlock found by the `where` argument doesn't exist, create a new ScheduleBlock with this data.
     */
    create: XOR<ScheduleBlockCreateInput, ScheduleBlockUncheckedCreateInput>
    /**
     * In case the ScheduleBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleBlockUpdateInput, ScheduleBlockUncheckedUpdateInput>
  }

  /**
   * ScheduleBlock delete
   */
  export type ScheduleBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
    /**
     * Filter which ScheduleBlock to delete.
     */
    where: ScheduleBlockWhereUniqueInput
  }

  /**
   * ScheduleBlock deleteMany
   */
  export type ScheduleBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleBlocks to delete
     */
    where?: ScheduleBlockWhereInput
  }

  /**
   * ScheduleBlock.task
   */
  export type ScheduleBlock$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * ScheduleBlock without action
   */
  export type ScheduleBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleBlock
     */
    select?: ScheduleBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleBlockInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
    totalCompletions: number | null
  }

  export type HabitSumAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
    totalCompletions: number | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    icon: string | null
    color: string | null
    currentStreak: number | null
    longestStreak: number | null
    totalCompletions: number | null
    bestTimePattern: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    icon: string | null
    color: string | null
    currentStreak: number | null
    longestStreak: number | null
    totalCompletions: number | null
    bestTimePattern: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    icon: number
    color: number
    currentStreak: number
    longestStreak: number
    totalCompletions: number
    completionLog: number
    bestTimePattern: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
    totalCompletions?: true
  }

  export type HabitSumAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
    totalCompletions?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    icon?: true
    color?: true
    currentStreak?: true
    longestStreak?: true
    totalCompletions?: true
    bestTimePattern?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    icon?: true
    color?: true
    currentStreak?: true
    longestStreak?: true
    totalCompletions?: true
    bestTimePattern?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    icon?: true
    color?: true
    currentStreak?: true
    longestStreak?: true
    totalCompletions?: true
    completionLog?: true
    bestTimePattern?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    icon: string
    color: string
    currentStreak: number
    longestStreak: number
    totalCompletions: number
    completionLog: JsonValue
    bestTimePattern: string | null
    createdAt: Date
    updatedAt: Date
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    totalCompletions?: boolean
    completionLog?: boolean
    bestTimePattern?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    totalCompletions?: boolean
    completionLog?: boolean
    bestTimePattern?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      icon: string
      color: string
      currentStreak: number
      longestStreak: number
      totalCompletions: number
      completionLog: Prisma.JsonValue
      bestTimePattern: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }


  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HabitFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>
    ): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HabitFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>
    ): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HabitFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
    **/
    create<T extends HabitCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HabitCreateArgs<ExtArgs>>
    ): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends HabitCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
    **/
    delete<T extends HabitDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>
    ): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HabitUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>
    ): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HabitDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HabitUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
    **/
    upsert<T extends HabitUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>
    ): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Habit model
   */ 
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly userId: FieldRef<"Habit", 'String'>
    readonly name: FieldRef<"Habit", 'String'>
    readonly description: FieldRef<"Habit", 'String'>
    readonly icon: FieldRef<"Habit", 'String'>
    readonly color: FieldRef<"Habit", 'String'>
    readonly currentStreak: FieldRef<"Habit", 'Int'>
    readonly longestStreak: FieldRef<"Habit", 'Int'>
    readonly totalCompletions: FieldRef<"Habit", 'Int'>
    readonly completionLog: FieldRef<"Habit", 'Json'>
    readonly bestTimePattern: FieldRef<"Habit", 'String'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit createManyAndReturn
   */
  export type HabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model Checkin
   */

  export type AggregateCheckin = {
    _count: CheckinCountAggregateOutputType | null
    _avg: CheckinAvgAggregateOutputType | null
    _sum: CheckinSumAggregateOutputType | null
    _min: CheckinMinAggregateOutputType | null
    _max: CheckinMaxAggregateOutputType | null
  }

  export type CheckinAvgAggregateOutputType = {
    completionPct: number | null
    motivationScore: number | null
  }

  export type CheckinSumAggregateOutputType = {
    completionPct: number | null
    motivationScore: number | null
  }

  export type CheckinMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    userMessage: string | null
    completionPct: number | null
    coachMessage: string | null
    motivationScore: number | null
  }

  export type CheckinMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    userMessage: string | null
    completionPct: number | null
    coachMessage: string | null
    motivationScore: number | null
  }

  export type CheckinCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    completedTaskIds: number
    userMessage: number
    completionPct: number
    coachMessage: number
    revisedPlan: number
    motivationScore: number
    _all: number
  }


  export type CheckinAvgAggregateInputType = {
    completionPct?: true
    motivationScore?: true
  }

  export type CheckinSumAggregateInputType = {
    completionPct?: true
    motivationScore?: true
  }

  export type CheckinMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    userMessage?: true
    completionPct?: true
    coachMessage?: true
    motivationScore?: true
  }

  export type CheckinMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    userMessage?: true
    completionPct?: true
    coachMessage?: true
    motivationScore?: true
  }

  export type CheckinCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    completedTaskIds?: true
    userMessage?: true
    completionPct?: true
    coachMessage?: true
    revisedPlan?: true
    motivationScore?: true
    _all?: true
  }

  export type CheckinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkin to aggregate.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkins
    **/
    _count?: true | CheckinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckinMaxAggregateInputType
  }

  export type GetCheckinAggregateType<T extends CheckinAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckin[P]>
      : GetScalarType<T[P], AggregateCheckin[P]>
  }




  export type CheckinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckinWhereInput
    orderBy?: CheckinOrderByWithAggregationInput | CheckinOrderByWithAggregationInput[]
    by: CheckinScalarFieldEnum[] | CheckinScalarFieldEnum
    having?: CheckinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckinCountAggregateInputType | true
    _avg?: CheckinAvgAggregateInputType
    _sum?: CheckinSumAggregateInputType
    _min?: CheckinMinAggregateInputType
    _max?: CheckinMaxAggregateInputType
  }

  export type CheckinGroupByOutputType = {
    id: string
    userId: string
    date: Date
    completedTaskIds: string[]
    userMessage: string | null
    completionPct: number
    coachMessage: string
    revisedPlan: JsonValue | null
    motivationScore: number | null
    _count: CheckinCountAggregateOutputType | null
    _avg: CheckinAvgAggregateOutputType | null
    _sum: CheckinSumAggregateOutputType | null
    _min: CheckinMinAggregateOutputType | null
    _max: CheckinMaxAggregateOutputType | null
  }

  type GetCheckinGroupByPayload<T extends CheckinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckinGroupByOutputType[P]>
            : GetScalarType<T[P], CheckinGroupByOutputType[P]>
        }
      >
    >


  export type CheckinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    completedTaskIds?: boolean
    userMessage?: boolean
    completionPct?: boolean
    coachMessage?: boolean
    revisedPlan?: boolean
    motivationScore?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkin"]>

  export type CheckinSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    completedTaskIds?: boolean
    userMessage?: boolean
    completionPct?: boolean
    coachMessage?: boolean
    revisedPlan?: boolean
    motivationScore?: boolean
  }


  export type CheckinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CheckinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      completedTaskIds: string[]
      userMessage: string | null
      completionPct: number
      coachMessage: string
      revisedPlan: Prisma.JsonValue | null
      motivationScore: number | null
    }, ExtArgs["result"]["checkin"]>
    composites: {}
  }


  type CheckinGetPayload<S extends boolean | null | undefined | CheckinDefaultArgs> = $Result.GetResult<Prisma.$CheckinPayload, S>

  type CheckinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckinFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckinCountAggregateInputType | true
    }

  export interface CheckinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkin'], meta: { name: 'Checkin' } }
    /**
     * Find zero or one Checkin that matches the filter.
     * @param {CheckinFindUniqueArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CheckinFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CheckinFindUniqueArgs<ExtArgs>>
    ): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Checkin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CheckinFindUniqueOrThrowArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CheckinFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckinFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Checkin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindFirstArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CheckinFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckinFindFirstArgs<ExtArgs>>
    ): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Checkin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindFirstOrThrowArgs} args - Arguments to find a Checkin
     * @example
     * // Get one Checkin
     * const checkin = await prisma.checkin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CheckinFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckinFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Checkins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkins
     * const checkins = await prisma.checkin.findMany()
     * 
     * // Get first 10 Checkins
     * const checkins = await prisma.checkin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkinWithIdOnly = await prisma.checkin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CheckinFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckinFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Checkin.
     * @param {CheckinCreateArgs} args - Arguments to create a Checkin.
     * @example
     * // Create one Checkin
     * const Checkin = await prisma.checkin.create({
     *   data: {
     *     // ... data to create a Checkin
     *   }
     * })
     * 
    **/
    create<T extends CheckinCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CheckinCreateArgs<ExtArgs>>
    ): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Checkins.
     * @param {CheckinCreateManyArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkin = await prisma.checkin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CheckinCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckinCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkins and returns the data saved in the database.
     * @param {CheckinCreateManyAndReturnArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkin = await prisma.checkin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkins and only return the `id`
     * const checkinWithIdOnly = await prisma.checkin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CheckinCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckinCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Checkin.
     * @param {CheckinDeleteArgs} args - Arguments to delete one Checkin.
     * @example
     * // Delete one Checkin
     * const Checkin = await prisma.checkin.delete({
     *   where: {
     *     // ... filter to delete one Checkin
     *   }
     * })
     * 
    **/
    delete<T extends CheckinDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CheckinDeleteArgs<ExtArgs>>
    ): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Checkin.
     * @param {CheckinUpdateArgs} args - Arguments to update one Checkin.
     * @example
     * // Update one Checkin
     * const checkin = await prisma.checkin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CheckinUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CheckinUpdateArgs<ExtArgs>>
    ): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Checkins.
     * @param {CheckinDeleteManyArgs} args - Arguments to filter Checkins to delete.
     * @example
     * // Delete a few Checkins
     * const { count } = await prisma.checkin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CheckinDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CheckinDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkins
     * const checkin = await prisma.checkin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CheckinUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CheckinUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Checkin.
     * @param {CheckinUpsertArgs} args - Arguments to update or create a Checkin.
     * @example
     * // Update or create a Checkin
     * const checkin = await prisma.checkin.upsert({
     *   create: {
     *     // ... data to create a Checkin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkin we want to update
     *   }
     * })
    **/
    upsert<T extends CheckinUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CheckinUpsertArgs<ExtArgs>>
    ): Prisma__CheckinClient<$Result.GetResult<Prisma.$CheckinPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinCountArgs} args - Arguments to filter Checkins to count.
     * @example
     * // Count the number of Checkins
     * const count = await prisma.checkin.count({
     *   where: {
     *     // ... the filter for the Checkins we want to count
     *   }
     * })
    **/
    count<T extends CheckinCountArgs>(
      args?: Subset<T, CheckinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckinAggregateArgs>(args: Subset<T, CheckinAggregateArgs>): Prisma.PrismaPromise<GetCheckinAggregateType<T>>

    /**
     * Group by Checkin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckinGroupByArgs['orderBy'] }
        : { orderBy?: CheckinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkin model
   */
  readonly fields: CheckinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Checkin model
   */ 
  interface CheckinFieldRefs {
    readonly id: FieldRef<"Checkin", 'String'>
    readonly userId: FieldRef<"Checkin", 'String'>
    readonly date: FieldRef<"Checkin", 'DateTime'>
    readonly completedTaskIds: FieldRef<"Checkin", 'String[]'>
    readonly userMessage: FieldRef<"Checkin", 'String'>
    readonly completionPct: FieldRef<"Checkin", 'Int'>
    readonly coachMessage: FieldRef<"Checkin", 'String'>
    readonly revisedPlan: FieldRef<"Checkin", 'Json'>
    readonly motivationScore: FieldRef<"Checkin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Checkin findUnique
   */
  export type CheckinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin findUniqueOrThrow
   */
  export type CheckinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin findFirst
   */
  export type CheckinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin findFirstOrThrow
   */
  export type CheckinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkin to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkins.
     */
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin findMany
   */
  export type CheckinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter, which Checkins to fetch.
     */
    where?: CheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkins to fetch.
     */
    orderBy?: CheckinOrderByWithRelationInput | CheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkins.
     */
    cursor?: CheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkins.
     */
    skip?: number
    distinct?: CheckinScalarFieldEnum | CheckinScalarFieldEnum[]
  }

  /**
   * Checkin create
   */
  export type CheckinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The data needed to create a Checkin.
     */
    data: XOR<CheckinCreateInput, CheckinUncheckedCreateInput>
  }

  /**
   * Checkin createMany
   */
  export type CheckinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkins.
     */
    data: CheckinCreateManyInput | CheckinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkin createManyAndReturn
   */
  export type CheckinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The data used to create many Checkins.
     */
    data: CheckinCreateManyInput | CheckinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkin update
   */
  export type CheckinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The data needed to update a Checkin.
     */
    data: XOR<CheckinUpdateInput, CheckinUncheckedUpdateInput>
    /**
     * Choose, which Checkin to update.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin updateMany
   */
  export type CheckinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkins.
     */
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyInput>
    /**
     * Filter which Checkins to update
     */
    where?: CheckinWhereInput
  }

  /**
   * Checkin upsert
   */
  export type CheckinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * The filter to search for the Checkin to update in case it exists.
     */
    where: CheckinWhereUniqueInput
    /**
     * In case the Checkin found by the `where` argument doesn't exist, create a new Checkin with this data.
     */
    create: XOR<CheckinCreateInput, CheckinUncheckedCreateInput>
    /**
     * In case the Checkin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckinUpdateInput, CheckinUncheckedUpdateInput>
  }

  /**
   * Checkin delete
   */
  export type CheckinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
    /**
     * Filter which Checkin to delete.
     */
    where: CheckinWhereUniqueInput
  }

  /**
   * Checkin deleteMany
   */
  export type CheckinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkins to delete
     */
    where?: CheckinWhereInput
  }

  /**
   * Checkin without action
   */
  export type CheckinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkin
     */
    select?: CheckinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckinInclude<ExtArgs> | null
  }


  /**
   * Model ProductivityLog
   */

  export type AggregateProductivityLog = {
    _count: ProductivityLogCountAggregateOutputType | null
    _avg: ProductivityLogAvgAggregateOutputType | null
    _sum: ProductivityLogSumAggregateOutputType | null
    _min: ProductivityLogMinAggregateOutputType | null
    _max: ProductivityLogMaxAggregateOutputType | null
  }

  export type ProductivityLogAvgAggregateOutputType = {
    tasksCompleted: number | null
    tasksPlanned: number | null
    focusMinutes: number | null
    completionRate: number | null
    weeklyScore: number | null
  }

  export type ProductivityLogSumAggregateOutputType = {
    tasksCompleted: number | null
    tasksPlanned: number | null
    focusMinutes: number | null
    completionRate: number | null
    weeklyScore: number | null
  }

  export type ProductivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    tasksCompleted: number | null
    tasksPlanned: number | null
    focusMinutes: number | null
    completionRate: number | null
    weeklyScore: number | null
  }

  export type ProductivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    tasksCompleted: number | null
    tasksPlanned: number | null
    focusMinutes: number | null
    completionRate: number | null
    weeklyScore: number | null
  }

  export type ProductivityLogCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    tasksCompleted: number
    tasksPlanned: number
    focusMinutes: number
    completionRate: number
    weeklyScore: number
    _all: number
  }


  export type ProductivityLogAvgAggregateInputType = {
    tasksCompleted?: true
    tasksPlanned?: true
    focusMinutes?: true
    completionRate?: true
    weeklyScore?: true
  }

  export type ProductivityLogSumAggregateInputType = {
    tasksCompleted?: true
    tasksPlanned?: true
    focusMinutes?: true
    completionRate?: true
    weeklyScore?: true
  }

  export type ProductivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    tasksCompleted?: true
    tasksPlanned?: true
    focusMinutes?: true
    completionRate?: true
    weeklyScore?: true
  }

  export type ProductivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    tasksCompleted?: true
    tasksPlanned?: true
    focusMinutes?: true
    completionRate?: true
    weeklyScore?: true
  }

  export type ProductivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    tasksCompleted?: true
    tasksPlanned?: true
    focusMinutes?: true
    completionRate?: true
    weeklyScore?: true
    _all?: true
  }

  export type ProductivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductivityLog to aggregate.
     */
    where?: ProductivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductivityLogs to fetch.
     */
    orderBy?: ProductivityLogOrderByWithRelationInput | ProductivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductivityLogs
    **/
    _count?: true | ProductivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductivityLogMaxAggregateInputType
  }

  export type GetProductivityLogAggregateType<T extends ProductivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateProductivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductivityLog[P]>
      : GetScalarType<T[P], AggregateProductivityLog[P]>
  }




  export type ProductivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductivityLogWhereInput
    orderBy?: ProductivityLogOrderByWithAggregationInput | ProductivityLogOrderByWithAggregationInput[]
    by: ProductivityLogScalarFieldEnum[] | ProductivityLogScalarFieldEnum
    having?: ProductivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductivityLogCountAggregateInputType | true
    _avg?: ProductivityLogAvgAggregateInputType
    _sum?: ProductivityLogSumAggregateInputType
    _min?: ProductivityLogMinAggregateInputType
    _max?: ProductivityLogMaxAggregateInputType
  }

  export type ProductivityLogGroupByOutputType = {
    id: string
    userId: string
    date: Date
    tasksCompleted: number
    tasksPlanned: number
    focusMinutes: number
    completionRate: number
    weeklyScore: number | null
    _count: ProductivityLogCountAggregateOutputType | null
    _avg: ProductivityLogAvgAggregateOutputType | null
    _sum: ProductivityLogSumAggregateOutputType | null
    _min: ProductivityLogMinAggregateOutputType | null
    _max: ProductivityLogMaxAggregateOutputType | null
  }

  type GetProductivityLogGroupByPayload<T extends ProductivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ProductivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ProductivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    tasksCompleted?: boolean
    tasksPlanned?: boolean
    focusMinutes?: boolean
    completionRate?: boolean
    weeklyScore?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productivityLog"]>

  export type ProductivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    tasksCompleted?: boolean
    tasksPlanned?: boolean
    focusMinutes?: boolean
    completionRate?: boolean
    weeklyScore?: boolean
  }


  export type ProductivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ProductivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      tasksCompleted: number
      tasksPlanned: number
      focusMinutes: number
      completionRate: number
      weeklyScore: number | null
    }, ExtArgs["result"]["productivityLog"]>
    composites: {}
  }


  type ProductivityLogGetPayload<S extends boolean | null | undefined | ProductivityLogDefaultArgs> = $Result.GetResult<Prisma.$ProductivityLogPayload, S>

  type ProductivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductivityLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductivityLogCountAggregateInputType | true
    }

  export interface ProductivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductivityLog'], meta: { name: 'ProductivityLog' } }
    /**
     * Find zero or one ProductivityLog that matches the filter.
     * @param {ProductivityLogFindUniqueArgs} args - Arguments to find a ProductivityLog
     * @example
     * // Get one ProductivityLog
     * const productivityLog = await prisma.productivityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductivityLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductivityLogFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductivityLogClient<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductivityLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductivityLogFindUniqueOrThrowArgs} args - Arguments to find a ProductivityLog
     * @example
     * // Get one ProductivityLog
     * const productivityLog = await prisma.productivityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductivityLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductivityLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductivityLogClient<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityLogFindFirstArgs} args - Arguments to find a ProductivityLog
     * @example
     * // Get one ProductivityLog
     * const productivityLog = await prisma.productivityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductivityLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductivityLogFindFirstArgs<ExtArgs>>
    ): Prisma__ProductivityLogClient<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityLogFindFirstOrThrowArgs} args - Arguments to find a ProductivityLog
     * @example
     * // Get one ProductivityLog
     * const productivityLog = await prisma.productivityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductivityLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductivityLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductivityLogClient<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductivityLogs
     * const productivityLogs = await prisma.productivityLog.findMany()
     * 
     * // Get first 10 ProductivityLogs
     * const productivityLogs = await prisma.productivityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productivityLogWithIdOnly = await prisma.productivityLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductivityLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductivityLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductivityLog.
     * @param {ProductivityLogCreateArgs} args - Arguments to create a ProductivityLog.
     * @example
     * // Create one ProductivityLog
     * const ProductivityLog = await prisma.productivityLog.create({
     *   data: {
     *     // ... data to create a ProductivityLog
     *   }
     * })
     * 
    **/
    create<T extends ProductivityLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductivityLogCreateArgs<ExtArgs>>
    ): Prisma__ProductivityLogClient<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductivityLogs.
     * @param {ProductivityLogCreateManyArgs} args - Arguments to create many ProductivityLogs.
     * @example
     * // Create many ProductivityLogs
     * const productivityLog = await prisma.productivityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProductivityLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductivityLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductivityLogs and returns the data saved in the database.
     * @param {ProductivityLogCreateManyAndReturnArgs} args - Arguments to create many ProductivityLogs.
     * @example
     * // Create many ProductivityLogs
     * const productivityLog = await prisma.productivityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductivityLogs and only return the `id`
     * const productivityLogWithIdOnly = await prisma.productivityLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ProductivityLogCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductivityLogCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ProductivityLog.
     * @param {ProductivityLogDeleteArgs} args - Arguments to delete one ProductivityLog.
     * @example
     * // Delete one ProductivityLog
     * const ProductivityLog = await prisma.productivityLog.delete({
     *   where: {
     *     // ... filter to delete one ProductivityLog
     *   }
     * })
     * 
    **/
    delete<T extends ProductivityLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductivityLogDeleteArgs<ExtArgs>>
    ): Prisma__ProductivityLogClient<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductivityLog.
     * @param {ProductivityLogUpdateArgs} args - Arguments to update one ProductivityLog.
     * @example
     * // Update one ProductivityLog
     * const productivityLog = await prisma.productivityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductivityLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductivityLogUpdateArgs<ExtArgs>>
    ): Prisma__ProductivityLogClient<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductivityLogs.
     * @param {ProductivityLogDeleteManyArgs} args - Arguments to filter ProductivityLogs to delete.
     * @example
     * // Delete a few ProductivityLogs
     * const { count } = await prisma.productivityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductivityLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductivityLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductivityLogs
     * const productivityLog = await prisma.productivityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductivityLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductivityLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductivityLog.
     * @param {ProductivityLogUpsertArgs} args - Arguments to update or create a ProductivityLog.
     * @example
     * // Update or create a ProductivityLog
     * const productivityLog = await prisma.productivityLog.upsert({
     *   create: {
     *     // ... data to create a ProductivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductivityLog we want to update
     *   }
     * })
    **/
    upsert<T extends ProductivityLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductivityLogUpsertArgs<ExtArgs>>
    ): Prisma__ProductivityLogClient<$Result.GetResult<Prisma.$ProductivityLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityLogCountArgs} args - Arguments to filter ProductivityLogs to count.
     * @example
     * // Count the number of ProductivityLogs
     * const count = await prisma.productivityLog.count({
     *   where: {
     *     // ... the filter for the ProductivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ProductivityLogCountArgs>(
      args?: Subset<T, ProductivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductivityLogAggregateArgs>(args: Subset<T, ProductivityLogAggregateArgs>): Prisma.PrismaPromise<GetProductivityLogAggregateType<T>>

    /**
     * Group by ProductivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ProductivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductivityLog model
   */
  readonly fields: ProductivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductivityLog model
   */ 
  interface ProductivityLogFieldRefs {
    readonly id: FieldRef<"ProductivityLog", 'String'>
    readonly userId: FieldRef<"ProductivityLog", 'String'>
    readonly date: FieldRef<"ProductivityLog", 'DateTime'>
    readonly tasksCompleted: FieldRef<"ProductivityLog", 'Int'>
    readonly tasksPlanned: FieldRef<"ProductivityLog", 'Int'>
    readonly focusMinutes: FieldRef<"ProductivityLog", 'Int'>
    readonly completionRate: FieldRef<"ProductivityLog", 'Float'>
    readonly weeklyScore: FieldRef<"ProductivityLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductivityLog findUnique
   */
  export type ProductivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityLog to fetch.
     */
    where: ProductivityLogWhereUniqueInput
  }

  /**
   * ProductivityLog findUniqueOrThrow
   */
  export type ProductivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityLog to fetch.
     */
    where: ProductivityLogWhereUniqueInput
  }

  /**
   * ProductivityLog findFirst
   */
  export type ProductivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityLog to fetch.
     */
    where?: ProductivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductivityLogs to fetch.
     */
    orderBy?: ProductivityLogOrderByWithRelationInput | ProductivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductivityLogs.
     */
    cursor?: ProductivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductivityLogs.
     */
    distinct?: ProductivityLogScalarFieldEnum | ProductivityLogScalarFieldEnum[]
  }

  /**
   * ProductivityLog findFirstOrThrow
   */
  export type ProductivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityLog to fetch.
     */
    where?: ProductivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductivityLogs to fetch.
     */
    orderBy?: ProductivityLogOrderByWithRelationInput | ProductivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductivityLogs.
     */
    cursor?: ProductivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductivityLogs.
     */
    distinct?: ProductivityLogScalarFieldEnum | ProductivityLogScalarFieldEnum[]
  }

  /**
   * ProductivityLog findMany
   */
  export type ProductivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ProductivityLogs to fetch.
     */
    where?: ProductivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductivityLogs to fetch.
     */
    orderBy?: ProductivityLogOrderByWithRelationInput | ProductivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductivityLogs.
     */
    cursor?: ProductivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductivityLogs.
     */
    skip?: number
    distinct?: ProductivityLogScalarFieldEnum | ProductivityLogScalarFieldEnum[]
  }

  /**
   * ProductivityLog create
   */
  export type ProductivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductivityLog.
     */
    data: XOR<ProductivityLogCreateInput, ProductivityLogUncheckedCreateInput>
  }

  /**
   * ProductivityLog createMany
   */
  export type ProductivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductivityLogs.
     */
    data: ProductivityLogCreateManyInput | ProductivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductivityLog createManyAndReturn
   */
  export type ProductivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * The data used to create many ProductivityLogs.
     */
    data: ProductivityLogCreateManyInput | ProductivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductivityLog update
   */
  export type ProductivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductivityLog.
     */
    data: XOR<ProductivityLogUpdateInput, ProductivityLogUncheckedUpdateInput>
    /**
     * Choose, which ProductivityLog to update.
     */
    where: ProductivityLogWhereUniqueInput
  }

  /**
   * ProductivityLog updateMany
   */
  export type ProductivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductivityLogs.
     */
    data: XOR<ProductivityLogUpdateManyMutationInput, ProductivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ProductivityLogs to update
     */
    where?: ProductivityLogWhereInput
  }

  /**
   * ProductivityLog upsert
   */
  export type ProductivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductivityLog to update in case it exists.
     */
    where: ProductivityLogWhereUniqueInput
    /**
     * In case the ProductivityLog found by the `where` argument doesn't exist, create a new ProductivityLog with this data.
     */
    create: XOR<ProductivityLogCreateInput, ProductivityLogUncheckedCreateInput>
    /**
     * In case the ProductivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductivityLogUpdateInput, ProductivityLogUncheckedUpdateInput>
  }

  /**
   * ProductivityLog delete
   */
  export type ProductivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
    /**
     * Filter which ProductivityLog to delete.
     */
    where: ProductivityLogWhereUniqueInput
  }

  /**
   * ProductivityLog deleteMany
   */
  export type ProductivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductivityLogs to delete
     */
    where?: ProductivityLogWhereInput
  }

  /**
   * ProductivityLog without action
   */
  export type ProductivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductivityLog
     */
    select?: ProductivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductivityLogInclude<ExtArgs> | null
  }


  /**
   * Model AiInsight
   */

  export type AggregateAiInsight = {
    _count: AiInsightCountAggregateOutputType | null
    _min: AiInsightMinAggregateOutputType | null
    _max: AiInsightMaxAggregateOutputType | null
  }

  export type AiInsightMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.InsightType | null
    title: string | null
    body: string | null
    generatedAt: Date | null
    seen: boolean | null
  }

  export type AiInsightMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.InsightType | null
    title: string | null
    body: string | null
    generatedAt: Date | null
    seen: boolean | null
  }

  export type AiInsightCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    body: number
    generatedAt: number
    seen: number
    _all: number
  }


  export type AiInsightMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    generatedAt?: true
    seen?: true
  }

  export type AiInsightMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    generatedAt?: true
    seen?: true
  }

  export type AiInsightCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    generatedAt?: true
    seen?: true
    _all?: true
  }

  export type AiInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInsight to aggregate.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiInsights
    **/
    _count?: true | AiInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiInsightMaxAggregateInputType
  }

  export type GetAiInsightAggregateType<T extends AiInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateAiInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiInsight[P]>
      : GetScalarType<T[P], AggregateAiInsight[P]>
  }




  export type AiInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiInsightWhereInput
    orderBy?: AiInsightOrderByWithAggregationInput | AiInsightOrderByWithAggregationInput[]
    by: AiInsightScalarFieldEnum[] | AiInsightScalarFieldEnum
    having?: AiInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiInsightCountAggregateInputType | true
    _min?: AiInsightMinAggregateInputType
    _max?: AiInsightMaxAggregateInputType
  }

  export type AiInsightGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.InsightType
    title: string
    body: string
    generatedAt: Date
    seen: boolean
    _count: AiInsightCountAggregateOutputType | null
    _min: AiInsightMinAggregateOutputType | null
    _max: AiInsightMaxAggregateOutputType | null
  }

  type GetAiInsightGroupByPayload<T extends AiInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiInsightGroupByOutputType[P]>
            : GetScalarType<T[P], AiInsightGroupByOutputType[P]>
        }
      >
    >


  export type AiInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    generatedAt?: boolean
    seen?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiInsight"]>

  export type AiInsightSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    generatedAt?: boolean
    seen?: boolean
  }


  export type AiInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AiInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiInsight"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.InsightType
      title: string
      body: string
      generatedAt: Date
      seen: boolean
    }, ExtArgs["result"]["aiInsight"]>
    composites: {}
  }


  type AiInsightGetPayload<S extends boolean | null | undefined | AiInsightDefaultArgs> = $Result.GetResult<Prisma.$AiInsightPayload, S>

  type AiInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AiInsightFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AiInsightCountAggregateInputType | true
    }

  export interface AiInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiInsight'], meta: { name: 'AiInsight' } }
    /**
     * Find zero or one AiInsight that matches the filter.
     * @param {AiInsightFindUniqueArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AiInsightFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AiInsightFindUniqueArgs<ExtArgs>>
    ): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AiInsight that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AiInsightFindUniqueOrThrowArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AiInsightFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AiInsightFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AiInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightFindFirstArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AiInsightFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AiInsightFindFirstArgs<ExtArgs>>
    ): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AiInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightFindFirstOrThrowArgs} args - Arguments to find a AiInsight
     * @example
     * // Get one AiInsight
     * const aiInsight = await prisma.aiInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AiInsightFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AiInsightFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AiInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiInsights
     * const aiInsights = await prisma.aiInsight.findMany()
     * 
     * // Get first 10 AiInsights
     * const aiInsights = await prisma.aiInsight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiInsightWithIdOnly = await prisma.aiInsight.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AiInsightFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AiInsightFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AiInsight.
     * @param {AiInsightCreateArgs} args - Arguments to create a AiInsight.
     * @example
     * // Create one AiInsight
     * const AiInsight = await prisma.aiInsight.create({
     *   data: {
     *     // ... data to create a AiInsight
     *   }
     * })
     * 
    **/
    create<T extends AiInsightCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AiInsightCreateArgs<ExtArgs>>
    ): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AiInsights.
     * @param {AiInsightCreateManyArgs} args - Arguments to create many AiInsights.
     * @example
     * // Create many AiInsights
     * const aiInsight = await prisma.aiInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AiInsightCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AiInsightCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiInsights and returns the data saved in the database.
     * @param {AiInsightCreateManyAndReturnArgs} args - Arguments to create many AiInsights.
     * @example
     * // Create many AiInsights
     * const aiInsight = await prisma.aiInsight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiInsights and only return the `id`
     * const aiInsightWithIdOnly = await prisma.aiInsight.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AiInsightCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AiInsightCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a AiInsight.
     * @param {AiInsightDeleteArgs} args - Arguments to delete one AiInsight.
     * @example
     * // Delete one AiInsight
     * const AiInsight = await prisma.aiInsight.delete({
     *   where: {
     *     // ... filter to delete one AiInsight
     *   }
     * })
     * 
    **/
    delete<T extends AiInsightDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AiInsightDeleteArgs<ExtArgs>>
    ): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AiInsight.
     * @param {AiInsightUpdateArgs} args - Arguments to update one AiInsight.
     * @example
     * // Update one AiInsight
     * const aiInsight = await prisma.aiInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AiInsightUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AiInsightUpdateArgs<ExtArgs>>
    ): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AiInsights.
     * @param {AiInsightDeleteManyArgs} args - Arguments to filter AiInsights to delete.
     * @example
     * // Delete a few AiInsights
     * const { count } = await prisma.aiInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AiInsightDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AiInsightDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiInsights
     * const aiInsight = await prisma.aiInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AiInsightUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AiInsightUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiInsight.
     * @param {AiInsightUpsertArgs} args - Arguments to update or create a AiInsight.
     * @example
     * // Update or create a AiInsight
     * const aiInsight = await prisma.aiInsight.upsert({
     *   create: {
     *     // ... data to create a AiInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiInsight we want to update
     *   }
     * })
    **/
    upsert<T extends AiInsightUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AiInsightUpsertArgs<ExtArgs>>
    ): Prisma__AiInsightClient<$Result.GetResult<Prisma.$AiInsightPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AiInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightCountArgs} args - Arguments to filter AiInsights to count.
     * @example
     * // Count the number of AiInsights
     * const count = await prisma.aiInsight.count({
     *   where: {
     *     // ... the filter for the AiInsights we want to count
     *   }
     * })
    **/
    count<T extends AiInsightCountArgs>(
      args?: Subset<T, AiInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiInsightAggregateArgs>(args: Subset<T, AiInsightAggregateArgs>): Prisma.PrismaPromise<GetAiInsightAggregateType<T>>

    /**
     * Group by AiInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiInsightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiInsightGroupByArgs['orderBy'] }
        : { orderBy?: AiInsightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiInsight model
   */
  readonly fields: AiInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AiInsight model
   */ 
  interface AiInsightFieldRefs {
    readonly id: FieldRef<"AiInsight", 'String'>
    readonly userId: FieldRef<"AiInsight", 'String'>
    readonly type: FieldRef<"AiInsight", 'InsightType'>
    readonly title: FieldRef<"AiInsight", 'String'>
    readonly body: FieldRef<"AiInsight", 'String'>
    readonly generatedAt: FieldRef<"AiInsight", 'DateTime'>
    readonly seen: FieldRef<"AiInsight", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AiInsight findUnique
   */
  export type AiInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight findUniqueOrThrow
   */
  export type AiInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight findFirst
   */
  export type AiInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInsights.
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInsights.
     */
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * AiInsight findFirstOrThrow
   */
  export type AiInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsight to fetch.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiInsights.
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiInsights.
     */
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * AiInsight findMany
   */
  export type AiInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter, which AiInsights to fetch.
     */
    where?: AiInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiInsights to fetch.
     */
    orderBy?: AiInsightOrderByWithRelationInput | AiInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiInsights.
     */
    cursor?: AiInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiInsights.
     */
    skip?: number
    distinct?: AiInsightScalarFieldEnum | AiInsightScalarFieldEnum[]
  }

  /**
   * AiInsight create
   */
  export type AiInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a AiInsight.
     */
    data: XOR<AiInsightCreateInput, AiInsightUncheckedCreateInput>
  }

  /**
   * AiInsight createMany
   */
  export type AiInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiInsights.
     */
    data: AiInsightCreateManyInput | AiInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiInsight createManyAndReturn
   */
  export type AiInsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The data used to create many AiInsights.
     */
    data: AiInsightCreateManyInput | AiInsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiInsight update
   */
  export type AiInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a AiInsight.
     */
    data: XOR<AiInsightUpdateInput, AiInsightUncheckedUpdateInput>
    /**
     * Choose, which AiInsight to update.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight updateMany
   */
  export type AiInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiInsights.
     */
    data: XOR<AiInsightUpdateManyMutationInput, AiInsightUncheckedUpdateManyInput>
    /**
     * Filter which AiInsights to update
     */
    where?: AiInsightWhereInput
  }

  /**
   * AiInsight upsert
   */
  export type AiInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the AiInsight to update in case it exists.
     */
    where: AiInsightWhereUniqueInput
    /**
     * In case the AiInsight found by the `where` argument doesn't exist, create a new AiInsight with this data.
     */
    create: XOR<AiInsightCreateInput, AiInsightUncheckedCreateInput>
    /**
     * In case the AiInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiInsightUpdateInput, AiInsightUncheckedUpdateInput>
  }

  /**
   * AiInsight delete
   */
  export type AiInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
    /**
     * Filter which AiInsight to delete.
     */
    where: AiInsightWhereUniqueInput
  }

  /**
   * AiInsight deleteMany
   */
  export type AiInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiInsights to delete
     */
    where?: AiInsightWhereInput
  }

  /**
   * AiInsight without action
   */
  export type AiInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiInsight
     */
    select?: AiInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiInsightInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    type: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
  }


  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      type: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }


  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GoalScalarFieldEnum: {
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

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    goalId: 'goalId',
    title: 'title',
    targetDate: 'targetDate',
    completed: 'completed',
    completedAt: 'completedAt',
    order: 'order'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const TaskScalarFieldEnum: {
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

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SubtaskScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    title: 'title',
    completed: 'completed',
    completedAt: 'completedAt',
    order: 'order'
  };

  export type SubtaskScalarFieldEnum = (typeof SubtaskScalarFieldEnum)[keyof typeof SubtaskScalarFieldEnum]


  export const ScheduleBlockScalarFieldEnum: {
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

  export type ScheduleBlockScalarFieldEnum = (typeof ScheduleBlockScalarFieldEnum)[keyof typeof ScheduleBlockScalarFieldEnum]


  export const HabitScalarFieldEnum: {
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

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const CheckinScalarFieldEnum: {
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

  export type CheckinScalarFieldEnum = (typeof CheckinScalarFieldEnum)[keyof typeof CheckinScalarFieldEnum]


  export const ProductivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    tasksCompleted: 'tasksCompleted',
    tasksPlanned: 'tasksPlanned',
    focusMinutes: 'focusMinutes',
    completionRate: 'completionRate',
    weeklyScore: 'weeklyScore'
  };

  export type ProductivityLogScalarFieldEnum = (typeof ProductivityLogScalarFieldEnum)[keyof typeof ProductivityLogScalarFieldEnum]


  export const AiInsightScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    body: 'body',
    generatedAt: 'generatedAt',
    seen: 'seen'
  };

  export type AiInsightScalarFieldEnum = (typeof AiInsightScalarFieldEnum)[keyof typeof AiInsightScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GoalCategory'
   */
  export type EnumGoalCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalCategory'>
    


  /**
   * Reference to a field of type 'GoalCategory[]'
   */
  export type ListEnumGoalCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalCategory[]'>
    


  /**
   * Reference to a field of type 'GoalStatus'
   */
  export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>
    


  /**
   * Reference to a field of type 'GoalStatus[]'
   */
  export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'RiskLevel[]'
   */
  export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>
    


  /**
   * Reference to a field of type 'BlockType'
   */
  export type EnumBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlockType'>
    


  /**
   * Reference to a field of type 'BlockType[]'
   */
  export type ListEnumBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlockType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'InsightType'
   */
  export type EnumInsightTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InsightType'>
    


  /**
   * Reference to a field of type 'InsightType[]'
   */
  export type ListEnumInsightTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InsightType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    preferences?: JsonFilter<"User">
    googleAccessToken?: StringNullableFilter<"User"> | string | null
    googleRefreshToken?: StringNullableFilter<"User"> | string | null
    googleTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    pushSubscription?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tasks?: TaskListRelationFilter
    goals?: GoalListRelationFilter
    habits?: HabitListRelationFilter
    scheduleBlocks?: ScheduleBlockListRelationFilter
    productivityLogs?: ProductivityLogListRelationFilter
    aiInsights?: AiInsightListRelationFilter
    checkins?: CheckinListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    preferences?: SortOrder
    googleAccessToken?: SortOrderInput | SortOrder
    googleRefreshToken?: SortOrderInput | SortOrder
    googleTokenExpiry?: SortOrderInput | SortOrder
    pushSubscription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    habits?: HabitOrderByRelationAggregateInput
    scheduleBlocks?: ScheduleBlockOrderByRelationAggregateInput
    productivityLogs?: ProductivityLogOrderByRelationAggregateInput
    aiInsights?: AiInsightOrderByRelationAggregateInput
    checkins?: CheckinOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    preferences?: JsonFilter<"User">
    googleAccessToken?: StringNullableFilter<"User"> | string | null
    googleRefreshToken?: StringNullableFilter<"User"> | string | null
    googleTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    pushSubscription?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tasks?: TaskListRelationFilter
    goals?: GoalListRelationFilter
    habits?: HabitListRelationFilter
    scheduleBlocks?: ScheduleBlockListRelationFilter
    productivityLogs?: ProductivityLogListRelationFilter
    aiInsights?: AiInsightListRelationFilter
    checkins?: CheckinListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    preferences?: SortOrder
    googleAccessToken?: SortOrderInput | SortOrder
    googleRefreshToken?: SortOrderInput | SortOrder
    googleTokenExpiry?: SortOrderInput | SortOrder
    pushSubscription?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    preferences?: JsonWithAggregatesFilter<"User">
    googleAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    pushSubscription?: JsonNullableWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    category?: EnumGoalCategoryFilter<"Goal"> | $Enums.GoalCategory
    targetDate?: DateTimeFilter<"Goal"> | Date | string
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    aiPlan?: JsonNullableFilter<"Goal">
    estimatedHours?: IntNullableFilter<"Goal"> | number | null
    completionPct?: IntFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    milestones?: MilestoneListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    aiPlan?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    completionPct?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    milestones?: MilestoneOrderByRelationAggregateInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    userId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    category?: EnumGoalCategoryFilter<"Goal"> | $Enums.GoalCategory
    targetDate?: DateTimeFilter<"Goal"> | Date | string
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    aiPlan?: JsonNullableFilter<"Goal">
    estimatedHours?: IntNullableFilter<"Goal"> | number | null
    completionPct?: IntFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    milestones?: MilestoneListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    aiPlan?: SortOrderInput | SortOrder
    estimatedHours?: SortOrderInput | SortOrder
    completionPct?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    userId?: StringWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    description?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    category?: EnumGoalCategoryWithAggregatesFilter<"Goal"> | $Enums.GoalCategory
    targetDate?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    status?: EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus
    aiPlan?: JsonNullableWithAggregatesFilter<"Goal">
    estimatedHours?: IntNullableWithAggregatesFilter<"Goal"> | number | null
    completionPct?: IntWithAggregatesFilter<"Goal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: StringFilter<"Milestone"> | string
    goalId?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    targetDate?: DateTimeFilter<"Milestone"> | Date | string
    completed?: BoolFilter<"Milestone"> | boolean
    completedAt?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    order?: IntFilter<"Milestone"> | number
    goal?: XOR<GoalRelationFilter, GoalWhereInput>
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    goal?: GoalOrderByWithRelationInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    goalId?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    targetDate?: DateTimeFilter<"Milestone"> | Date | string
    completed?: BoolFilter<"Milestone"> | boolean
    completedAt?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    order?: IntFilter<"Milestone"> | number
    goal?: XOR<GoalRelationFilter, GoalWhereInput>
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _avg?: MilestoneAvgOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
    _sum?: MilestoneSumOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Milestone"> | string
    goalId?: StringWithAggregatesFilter<"Milestone"> | string
    title?: StringWithAggregatesFilter<"Milestone"> | string
    targetDate?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    completed?: BoolWithAggregatesFilter<"Milestone"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"Milestone"> | Date | string | null
    order?: IntWithAggregatesFilter<"Milestone"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    goalId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    aiExtracted?: BoolFilter<"Task"> | boolean
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    priorityScore?: IntFilter<"Task"> | number
    priorityLabel?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    deadline?: DateTimeNullableFilter<"Task"> | Date | string | null
    scheduledFor?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    riskLevel?: EnumRiskLevelFilter<"Task"> | $Enums.RiskLevel
    riskReason?: StringNullableFilter<"Task"> | string | null
    isRecurring?: BoolFilter<"Task"> | boolean
    recurrenceRule?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableRelationFilter, GoalWhereInput> | null
    subtasks?: SubtaskListRelationFilter
    scheduleBlocks?: ScheduleBlockListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    aiExtracted?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    priorityScore?: SortOrder
    priorityLabel?: SortOrder
    status?: SortOrder
    deadline?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    riskLevel?: SortOrder
    riskReason?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    goal?: GoalOrderByWithRelationInput
    subtasks?: SubtaskOrderByRelationAggregateInput
    scheduleBlocks?: ScheduleBlockOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    userId?: StringFilter<"Task"> | string
    goalId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    aiExtracted?: BoolFilter<"Task"> | boolean
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    priorityScore?: IntFilter<"Task"> | number
    priorityLabel?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    deadline?: DateTimeNullableFilter<"Task"> | Date | string | null
    scheduledFor?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    riskLevel?: EnumRiskLevelFilter<"Task"> | $Enums.RiskLevel
    riskReason?: StringNullableFilter<"Task"> | string | null
    isRecurring?: BoolFilter<"Task"> | boolean
    recurrenceRule?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableRelationFilter, GoalWhereInput> | null
    subtasks?: SubtaskListRelationFilter
    scheduleBlocks?: ScheduleBlockListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    aiExtracted?: SortOrder
    estimatedMinutes?: SortOrderInput | SortOrder
    priorityScore?: SortOrder
    priorityLabel?: SortOrder
    status?: SortOrder
    deadline?: SortOrderInput | SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    riskLevel?: SortOrder
    riskReason?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    userId?: StringWithAggregatesFilter<"Task"> | string
    goalId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    aiExtracted?: BoolWithAggregatesFilter<"Task"> | boolean
    estimatedMinutes?: IntNullableWithAggregatesFilter<"Task"> | number | null
    priorityScore?: IntWithAggregatesFilter<"Task"> | number
    priorityLabel?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    deadline?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"Task"> | $Enums.RiskLevel
    riskReason?: StringNullableWithAggregatesFilter<"Task"> | string | null
    isRecurring?: BoolWithAggregatesFilter<"Task"> | boolean
    recurrenceRule?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type SubtaskWhereInput = {
    AND?: SubtaskWhereInput | SubtaskWhereInput[]
    OR?: SubtaskWhereInput[]
    NOT?: SubtaskWhereInput | SubtaskWhereInput[]
    id?: StringFilter<"Subtask"> | string
    taskId?: StringFilter<"Subtask"> | string
    title?: StringFilter<"Subtask"> | string
    completed?: BoolFilter<"Subtask"> | boolean
    completedAt?: DateTimeNullableFilter<"Subtask"> | Date | string | null
    order?: IntFilter<"Subtask"> | number
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }

  export type SubtaskOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type SubtaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubtaskWhereInput | SubtaskWhereInput[]
    OR?: SubtaskWhereInput[]
    NOT?: SubtaskWhereInput | SubtaskWhereInput[]
    taskId?: StringFilter<"Subtask"> | string
    title?: StringFilter<"Subtask"> | string
    completed?: BoolFilter<"Subtask"> | boolean
    completedAt?: DateTimeNullableFilter<"Subtask"> | Date | string | null
    order?: IntFilter<"Subtask"> | number
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }, "id">

  export type SubtaskOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: SubtaskCountOrderByAggregateInput
    _avg?: SubtaskAvgOrderByAggregateInput
    _max?: SubtaskMaxOrderByAggregateInput
    _min?: SubtaskMinOrderByAggregateInput
    _sum?: SubtaskSumOrderByAggregateInput
  }

  export type SubtaskScalarWhereWithAggregatesInput = {
    AND?: SubtaskScalarWhereWithAggregatesInput | SubtaskScalarWhereWithAggregatesInput[]
    OR?: SubtaskScalarWhereWithAggregatesInput[]
    NOT?: SubtaskScalarWhereWithAggregatesInput | SubtaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subtask"> | string
    taskId?: StringWithAggregatesFilter<"Subtask"> | string
    title?: StringWithAggregatesFilter<"Subtask"> | string
    completed?: BoolWithAggregatesFilter<"Subtask"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"Subtask"> | Date | string | null
    order?: IntWithAggregatesFilter<"Subtask"> | number
  }

  export type ScheduleBlockWhereInput = {
    AND?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    OR?: ScheduleBlockWhereInput[]
    NOT?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    id?: StringFilter<"ScheduleBlock"> | string
    userId?: StringFilter<"ScheduleBlock"> | string
    taskId?: StringNullableFilter<"ScheduleBlock"> | string | null
    title?: StringFilter<"ScheduleBlock"> | string
    startTime?: DateTimeFilter<"ScheduleBlock"> | Date | string
    endTime?: DateTimeFilter<"ScheduleBlock"> | Date | string
    calendarEventId?: StringNullableFilter<"ScheduleBlock"> | string | null
    syncedToCalendar?: BoolFilter<"ScheduleBlock"> | boolean
    blockType?: EnumBlockTypeFilter<"ScheduleBlock"> | $Enums.BlockType
    user?: XOR<UserRelationFilter, UserWhereInput>
    task?: XOR<TaskNullableRelationFilter, TaskWhereInput> | null
  }

  export type ScheduleBlockOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    calendarEventId?: SortOrderInput | SortOrder
    syncedToCalendar?: SortOrder
    blockType?: SortOrder
    user?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type ScheduleBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    OR?: ScheduleBlockWhereInput[]
    NOT?: ScheduleBlockWhereInput | ScheduleBlockWhereInput[]
    userId?: StringFilter<"ScheduleBlock"> | string
    taskId?: StringNullableFilter<"ScheduleBlock"> | string | null
    title?: StringFilter<"ScheduleBlock"> | string
    startTime?: DateTimeFilter<"ScheduleBlock"> | Date | string
    endTime?: DateTimeFilter<"ScheduleBlock"> | Date | string
    calendarEventId?: StringNullableFilter<"ScheduleBlock"> | string | null
    syncedToCalendar?: BoolFilter<"ScheduleBlock"> | boolean
    blockType?: EnumBlockTypeFilter<"ScheduleBlock"> | $Enums.BlockType
    user?: XOR<UserRelationFilter, UserWhereInput>
    task?: XOR<TaskNullableRelationFilter, TaskWhereInput> | null
  }, "id">

  export type ScheduleBlockOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    calendarEventId?: SortOrderInput | SortOrder
    syncedToCalendar?: SortOrder
    blockType?: SortOrder
    _count?: ScheduleBlockCountOrderByAggregateInput
    _max?: ScheduleBlockMaxOrderByAggregateInput
    _min?: ScheduleBlockMinOrderByAggregateInput
  }

  export type ScheduleBlockScalarWhereWithAggregatesInput = {
    AND?: ScheduleBlockScalarWhereWithAggregatesInput | ScheduleBlockScalarWhereWithAggregatesInput[]
    OR?: ScheduleBlockScalarWhereWithAggregatesInput[]
    NOT?: ScheduleBlockScalarWhereWithAggregatesInput | ScheduleBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleBlock"> | string
    userId?: StringWithAggregatesFilter<"ScheduleBlock"> | string
    taskId?: StringNullableWithAggregatesFilter<"ScheduleBlock"> | string | null
    title?: StringWithAggregatesFilter<"ScheduleBlock"> | string
    startTime?: DateTimeWithAggregatesFilter<"ScheduleBlock"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"ScheduleBlock"> | Date | string
    calendarEventId?: StringNullableWithAggregatesFilter<"ScheduleBlock"> | string | null
    syncedToCalendar?: BoolWithAggregatesFilter<"ScheduleBlock"> | boolean
    blockType?: EnumBlockTypeWithAggregatesFilter<"ScheduleBlock"> | $Enums.BlockType
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    userId?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    icon?: StringFilter<"Habit"> | string
    color?: StringFilter<"Habit"> | string
    currentStreak?: IntFilter<"Habit"> | number
    longestStreak?: IntFilter<"Habit"> | number
    totalCompletions?: IntFilter<"Habit"> | number
    completionLog?: JsonFilter<"Habit">
    bestTimePattern?: StringNullableFilter<"Habit"> | string | null
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrder
    color?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    totalCompletions?: SortOrder
    completionLog?: SortOrder
    bestTimePattern?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    userId?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    icon?: StringFilter<"Habit"> | string
    color?: StringFilter<"Habit"> | string
    currentStreak?: IntFilter<"Habit"> | number
    longestStreak?: IntFilter<"Habit"> | number
    totalCompletions?: IntFilter<"Habit"> | number
    completionLog?: JsonFilter<"Habit">
    bestTimePattern?: StringNullableFilter<"Habit"> | string | null
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrder
    color?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    totalCompletions?: SortOrder
    completionLog?: SortOrder
    bestTimePattern?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    userId?: StringWithAggregatesFilter<"Habit"> | string
    name?: StringWithAggregatesFilter<"Habit"> | string
    description?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    icon?: StringWithAggregatesFilter<"Habit"> | string
    color?: StringWithAggregatesFilter<"Habit"> | string
    currentStreak?: IntWithAggregatesFilter<"Habit"> | number
    longestStreak?: IntWithAggregatesFilter<"Habit"> | number
    totalCompletions?: IntWithAggregatesFilter<"Habit"> | number
    completionLog?: JsonWithAggregatesFilter<"Habit">
    bestTimePattern?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
  }

  export type CheckinWhereInput = {
    AND?: CheckinWhereInput | CheckinWhereInput[]
    OR?: CheckinWhereInput[]
    NOT?: CheckinWhereInput | CheckinWhereInput[]
    id?: StringFilter<"Checkin"> | string
    userId?: StringFilter<"Checkin"> | string
    date?: DateTimeFilter<"Checkin"> | Date | string
    completedTaskIds?: StringNullableListFilter<"Checkin">
    userMessage?: StringNullableFilter<"Checkin"> | string | null
    completionPct?: IntFilter<"Checkin"> | number
    coachMessage?: StringFilter<"Checkin"> | string
    revisedPlan?: JsonNullableFilter<"Checkin">
    motivationScore?: IntNullableFilter<"Checkin"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CheckinOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    completedTaskIds?: SortOrder
    userMessage?: SortOrderInput | SortOrder
    completionPct?: SortOrder
    coachMessage?: SortOrder
    revisedPlan?: SortOrderInput | SortOrder
    motivationScore?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CheckinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckinWhereInput | CheckinWhereInput[]
    OR?: CheckinWhereInput[]
    NOT?: CheckinWhereInput | CheckinWhereInput[]
    userId?: StringFilter<"Checkin"> | string
    date?: DateTimeFilter<"Checkin"> | Date | string
    completedTaskIds?: StringNullableListFilter<"Checkin">
    userMessage?: StringNullableFilter<"Checkin"> | string | null
    completionPct?: IntFilter<"Checkin"> | number
    coachMessage?: StringFilter<"Checkin"> | string
    revisedPlan?: JsonNullableFilter<"Checkin">
    motivationScore?: IntNullableFilter<"Checkin"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CheckinOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    completedTaskIds?: SortOrder
    userMessage?: SortOrderInput | SortOrder
    completionPct?: SortOrder
    coachMessage?: SortOrder
    revisedPlan?: SortOrderInput | SortOrder
    motivationScore?: SortOrderInput | SortOrder
    _count?: CheckinCountOrderByAggregateInput
    _avg?: CheckinAvgOrderByAggregateInput
    _max?: CheckinMaxOrderByAggregateInput
    _min?: CheckinMinOrderByAggregateInput
    _sum?: CheckinSumOrderByAggregateInput
  }

  export type CheckinScalarWhereWithAggregatesInput = {
    AND?: CheckinScalarWhereWithAggregatesInput | CheckinScalarWhereWithAggregatesInput[]
    OR?: CheckinScalarWhereWithAggregatesInput[]
    NOT?: CheckinScalarWhereWithAggregatesInput | CheckinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Checkin"> | string
    userId?: StringWithAggregatesFilter<"Checkin"> | string
    date?: DateTimeWithAggregatesFilter<"Checkin"> | Date | string
    completedTaskIds?: StringNullableListFilter<"Checkin">
    userMessage?: StringNullableWithAggregatesFilter<"Checkin"> | string | null
    completionPct?: IntWithAggregatesFilter<"Checkin"> | number
    coachMessage?: StringWithAggregatesFilter<"Checkin"> | string
    revisedPlan?: JsonNullableWithAggregatesFilter<"Checkin">
    motivationScore?: IntNullableWithAggregatesFilter<"Checkin"> | number | null
  }

  export type ProductivityLogWhereInput = {
    AND?: ProductivityLogWhereInput | ProductivityLogWhereInput[]
    OR?: ProductivityLogWhereInput[]
    NOT?: ProductivityLogWhereInput | ProductivityLogWhereInput[]
    id?: StringFilter<"ProductivityLog"> | string
    userId?: StringFilter<"ProductivityLog"> | string
    date?: DateTimeFilter<"ProductivityLog"> | Date | string
    tasksCompleted?: IntFilter<"ProductivityLog"> | number
    tasksPlanned?: IntFilter<"ProductivityLog"> | number
    focusMinutes?: IntFilter<"ProductivityLog"> | number
    completionRate?: FloatFilter<"ProductivityLog"> | number
    weeklyScore?: IntNullableFilter<"ProductivityLog"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProductivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    tasksCompleted?: SortOrder
    tasksPlanned?: SortOrder
    focusMinutes?: SortOrder
    completionRate?: SortOrder
    weeklyScore?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProductivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: ProductivityLogUserIdDateCompoundUniqueInput
    AND?: ProductivityLogWhereInput | ProductivityLogWhereInput[]
    OR?: ProductivityLogWhereInput[]
    NOT?: ProductivityLogWhereInput | ProductivityLogWhereInput[]
    userId?: StringFilter<"ProductivityLog"> | string
    date?: DateTimeFilter<"ProductivityLog"> | Date | string
    tasksCompleted?: IntFilter<"ProductivityLog"> | number
    tasksPlanned?: IntFilter<"ProductivityLog"> | number
    focusMinutes?: IntFilter<"ProductivityLog"> | number
    completionRate?: FloatFilter<"ProductivityLog"> | number
    weeklyScore?: IntNullableFilter<"ProductivityLog"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type ProductivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    tasksCompleted?: SortOrder
    tasksPlanned?: SortOrder
    focusMinutes?: SortOrder
    completionRate?: SortOrder
    weeklyScore?: SortOrderInput | SortOrder
    _count?: ProductivityLogCountOrderByAggregateInput
    _avg?: ProductivityLogAvgOrderByAggregateInput
    _max?: ProductivityLogMaxOrderByAggregateInput
    _min?: ProductivityLogMinOrderByAggregateInput
    _sum?: ProductivityLogSumOrderByAggregateInput
  }

  export type ProductivityLogScalarWhereWithAggregatesInput = {
    AND?: ProductivityLogScalarWhereWithAggregatesInput | ProductivityLogScalarWhereWithAggregatesInput[]
    OR?: ProductivityLogScalarWhereWithAggregatesInput[]
    NOT?: ProductivityLogScalarWhereWithAggregatesInput | ProductivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductivityLog"> | string
    userId?: StringWithAggregatesFilter<"ProductivityLog"> | string
    date?: DateTimeWithAggregatesFilter<"ProductivityLog"> | Date | string
    tasksCompleted?: IntWithAggregatesFilter<"ProductivityLog"> | number
    tasksPlanned?: IntWithAggregatesFilter<"ProductivityLog"> | number
    focusMinutes?: IntWithAggregatesFilter<"ProductivityLog"> | number
    completionRate?: FloatWithAggregatesFilter<"ProductivityLog"> | number
    weeklyScore?: IntNullableWithAggregatesFilter<"ProductivityLog"> | number | null
  }

  export type AiInsightWhereInput = {
    AND?: AiInsightWhereInput | AiInsightWhereInput[]
    OR?: AiInsightWhereInput[]
    NOT?: AiInsightWhereInput | AiInsightWhereInput[]
    id?: StringFilter<"AiInsight"> | string
    userId?: StringFilter<"AiInsight"> | string
    type?: EnumInsightTypeFilter<"AiInsight"> | $Enums.InsightType
    title?: StringFilter<"AiInsight"> | string
    body?: StringFilter<"AiInsight"> | string
    generatedAt?: DateTimeFilter<"AiInsight"> | Date | string
    seen?: BoolFilter<"AiInsight"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AiInsightOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    generatedAt?: SortOrder
    seen?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AiInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiInsightWhereInput | AiInsightWhereInput[]
    OR?: AiInsightWhereInput[]
    NOT?: AiInsightWhereInput | AiInsightWhereInput[]
    userId?: StringFilter<"AiInsight"> | string
    type?: EnumInsightTypeFilter<"AiInsight"> | $Enums.InsightType
    title?: StringFilter<"AiInsight"> | string
    body?: StringFilter<"AiInsight"> | string
    generatedAt?: DateTimeFilter<"AiInsight"> | Date | string
    seen?: BoolFilter<"AiInsight"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AiInsightOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    generatedAt?: SortOrder
    seen?: SortOrder
    _count?: AiInsightCountOrderByAggregateInput
    _max?: AiInsightMaxOrderByAggregateInput
    _min?: AiInsightMinOrderByAggregateInput
  }

  export type AiInsightScalarWhereWithAggregatesInput = {
    AND?: AiInsightScalarWhereWithAggregatesInput | AiInsightScalarWhereWithAggregatesInput[]
    OR?: AiInsightScalarWhereWithAggregatesInput[]
    NOT?: AiInsightScalarWhereWithAggregatesInput | AiInsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiInsight"> | string
    userId?: StringWithAggregatesFilter<"AiInsight"> | string
    type?: EnumInsightTypeWithAggregatesFilter<"AiInsight"> | $Enums.InsightType
    title?: StringWithAggregatesFilter<"AiInsight"> | string
    body?: StringWithAggregatesFilter<"AiInsight"> | string
    generatedAt?: DateTimeWithAggregatesFilter<"AiInsight"> | Date | string
    seen?: BoolWithAggregatesFilter<"AiInsight"> | boolean
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightCreateNestedManyWithoutUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUpdateManyWithoutUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
    milestones?: MilestoneCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
    milestones?: MilestoneUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateInput = {
    id?: string
    title: string
    targetDate: Date | string
    completed?: boolean
    completedAt?: Date | string | null
    order: number
    goal: GoalCreateNestedOneWithoutMilestonesInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: string
    goalId: string
    title: string
    targetDate: Date | string
    completed?: boolean
    completedAt?: Date | string | null
    order: number
  }

  export type MilestoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    goal?: GoalUpdateOneRequiredWithoutMilestonesNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneCreateManyInput = {
    id?: string
    goalId: string
    title: string
    targetDate: Date | string
    completed?: boolean
    completedAt?: Date | string | null
    order: number
  }

  export type MilestoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    goal?: GoalCreateNestedOneWithoutTasksInput
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    userId: string
    goalId?: string | null
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    goal?: GoalUpdateOneWithoutTasksNestedInput
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    userId: string
    goalId?: string | null
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubtaskCreateInput = {
    id?: string
    title: string
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
    task: TaskCreateNestedOneWithoutSubtasksInput
  }

  export type SubtaskUncheckedCreateInput = {
    id?: string
    taskId: string
    title: string
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
  }

  export type SubtaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutSubtasksNestedInput
  }

  export type SubtaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SubtaskCreateManyInput = {
    id?: string
    taskId: string
    title: string
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
  }

  export type SubtaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SubtaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleBlockCreateInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    calendarEventId?: string | null
    syncedToCalendar?: boolean
    blockType?: $Enums.BlockType
    user: UserCreateNestedOneWithoutScheduleBlocksInput
    task?: TaskCreateNestedOneWithoutScheduleBlocksInput
  }

  export type ScheduleBlockUncheckedCreateInput = {
    id?: string
    userId: string
    taskId?: string | null
    title: string
    startTime: Date | string
    endTime: Date | string
    calendarEventId?: string | null
    syncedToCalendar?: boolean
    blockType?: $Enums.BlockType
  }

  export type ScheduleBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    user?: UserUpdateOneRequiredWithoutScheduleBlocksNestedInput
    task?: TaskUpdateOneWithoutScheduleBlocksNestedInput
  }

  export type ScheduleBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
  }

  export type ScheduleBlockCreateManyInput = {
    id?: string
    userId: string
    taskId?: string | null
    title: string
    startTime: Date | string
    endTime: Date | string
    calendarEventId?: string | null
    syncedToCalendar?: boolean
    blockType?: $Enums.BlockType
  }

  export type ScheduleBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
  }

  export type ScheduleBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
  }

  export type HabitCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string
    color?: string
    currentStreak?: number
    longestStreak?: number
    totalCompletions?: number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    icon?: string
    color?: string
    currentStreak?: number
    longestStreak?: number
    totalCompletions?: number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    totalCompletions?: IntFieldUpdateOperationsInput | number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    totalCompletions?: IntFieldUpdateOperationsInput | number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    icon?: string
    color?: string
    currentStreak?: number
    longestStreak?: number
    totalCompletions?: number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    totalCompletions?: IntFieldUpdateOperationsInput | number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    totalCompletions?: IntFieldUpdateOperationsInput | number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckinCreateInput = {
    id?: string
    date?: Date | string
    completedTaskIds?: CheckinCreatecompletedTaskIdsInput | string[]
    userMessage?: string | null
    completionPct: number
    coachMessage: string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: number | null
    user: UserCreateNestedOneWithoutCheckinsInput
  }

  export type CheckinUncheckedCreateInput = {
    id?: string
    userId: string
    date?: Date | string
    completedTaskIds?: CheckinCreatecompletedTaskIdsInput | string[]
    userMessage?: string | null
    completionPct: number
    coachMessage: string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: number | null
  }

  export type CheckinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTaskIds?: CheckinUpdatecompletedTaskIdsInput | string[]
    userMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completionPct?: IntFieldUpdateOperationsInput | number
    coachMessage?: StringFieldUpdateOperationsInput | string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type CheckinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTaskIds?: CheckinUpdatecompletedTaskIdsInput | string[]
    userMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completionPct?: IntFieldUpdateOperationsInput | number
    coachMessage?: StringFieldUpdateOperationsInput | string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CheckinCreateManyInput = {
    id?: string
    userId: string
    date?: Date | string
    completedTaskIds?: CheckinCreatecompletedTaskIdsInput | string[]
    userMessage?: string | null
    completionPct: number
    coachMessage: string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: number | null
  }

  export type CheckinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTaskIds?: CheckinUpdatecompletedTaskIdsInput | string[]
    userMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completionPct?: IntFieldUpdateOperationsInput | number
    coachMessage?: StringFieldUpdateOperationsInput | string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CheckinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTaskIds?: CheckinUpdatecompletedTaskIdsInput | string[]
    userMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completionPct?: IntFieldUpdateOperationsInput | number
    coachMessage?: StringFieldUpdateOperationsInput | string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductivityLogCreateInput = {
    id?: string
    date: Date | string
    tasksCompleted?: number
    tasksPlanned?: number
    focusMinutes?: number
    completionRate?: number
    weeklyScore?: number | null
    user: UserCreateNestedOneWithoutProductivityLogsInput
  }

  export type ProductivityLogUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    tasksCompleted?: number
    tasksPlanned?: number
    focusMinutes?: number
    completionRate?: number
    weeklyScore?: number | null
  }

  export type ProductivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksPlanned?: IntFieldUpdateOperationsInput | number
    focusMinutes?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutProductivityLogsNestedInput
  }

  export type ProductivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksPlanned?: IntFieldUpdateOperationsInput | number
    focusMinutes?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductivityLogCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    tasksCompleted?: number
    tasksPlanned?: number
    focusMinutes?: number
    completionRate?: number
    weeklyScore?: number | null
  }

  export type ProductivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksPlanned?: IntFieldUpdateOperationsInput | number
    focusMinutes?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksPlanned?: IntFieldUpdateOperationsInput | number
    focusMinutes?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AiInsightCreateInput = {
    id?: string
    type: $Enums.InsightType
    title: string
    body: string
    generatedAt?: Date | string
    seen?: boolean
    user: UserCreateNestedOneWithoutAiInsightsInput
  }

  export type AiInsightUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.InsightType
    title: string
    body: string
    generatedAt?: Date | string
    seen?: boolean
  }

  export type AiInsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInsightTypeFieldUpdateOperationsInput | $Enums.InsightType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAiInsightsNestedInput
  }

  export type AiInsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumInsightTypeFieldUpdateOperationsInput | $Enums.InsightType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AiInsightCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.InsightType
    title: string
    body: string
    generatedAt?: Date | string
    seen?: boolean
  }

  export type AiInsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInsightTypeFieldUpdateOperationsInput | $Enums.InsightType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AiInsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumInsightTypeFieldUpdateOperationsInput | $Enums.InsightType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type ScheduleBlockListRelationFilter = {
    every?: ScheduleBlockWhereInput
    some?: ScheduleBlockWhereInput
    none?: ScheduleBlockWhereInput
  }

  export type ProductivityLogListRelationFilter = {
    every?: ProductivityLogWhereInput
    some?: ProductivityLogWhereInput
    none?: ProductivityLogWhereInput
  }

  export type AiInsightListRelationFilter = {
    every?: AiInsightWhereInput
    some?: AiInsightWhereInput
    none?: AiInsightWhereInput
  }

  export type CheckinListRelationFilter = {
    every?: CheckinWhereInput
    some?: CheckinWhereInput
    none?: CheckinWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiInsightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    preferences?: SortOrder
    googleAccessToken?: SortOrder
    googleRefreshToken?: SortOrder
    googleTokenExpiry?: SortOrder
    pushSubscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    googleAccessToken?: SortOrder
    googleRefreshToken?: SortOrder
    googleTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    googleAccessToken?: SortOrder
    googleRefreshToken?: SortOrder
    googleTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGoalCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalCategory | EnumGoalCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.GoalCategory[] | ListEnumGoalCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalCategory[] | ListEnumGoalCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalCategoryFilter<$PrismaModel> | $Enums.GoalCategory
  }

  export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    aiPlan?: SortOrder
    estimatedHours?: SortOrder
    completionPct?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    estimatedHours?: SortOrder
    completionPct?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    estimatedHours?: SortOrder
    completionPct?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    targetDate?: SortOrder
    status?: SortOrder
    estimatedHours?: SortOrder
    completionPct?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    estimatedHours?: SortOrder
    completionPct?: SortOrder
  }

  export type EnumGoalCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalCategory | EnumGoalCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.GoalCategory[] | ListEnumGoalCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalCategory[] | ListEnumGoalCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalCategoryWithAggregatesFilter<$PrismaModel> | $Enums.GoalCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalCategoryFilter<$PrismaModel>
    _max?: NestedEnumGoalCategoryFilter<$PrismaModel>
  }

  export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GoalRelationFilter = {
    is?: GoalWhereInput
    isNot?: GoalWhereInput
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
  }

  export type MilestoneAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    targetDate?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
  }

  export type MilestoneSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type GoalNullableRelationFilter = {
    is?: GoalWhereInput | null
    isNot?: GoalWhereInput | null
  }

  export type SubtaskListRelationFilter = {
    every?: SubtaskWhereInput
    some?: SubtaskWhereInput
    none?: SubtaskWhereInput
  }

  export type SubtaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    aiExtracted?: SortOrder
    estimatedMinutes?: SortOrder
    priorityScore?: SortOrder
    priorityLabel?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    scheduledFor?: SortOrder
    completedAt?: SortOrder
    riskLevel?: SortOrder
    riskReason?: SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    priorityScore?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    aiExtracted?: SortOrder
    estimatedMinutes?: SortOrder
    priorityScore?: SortOrder
    priorityLabel?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    scheduledFor?: SortOrder
    completedAt?: SortOrder
    riskLevel?: SortOrder
    riskReason?: SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    aiExtracted?: SortOrder
    estimatedMinutes?: SortOrder
    priorityScore?: SortOrder
    priorityLabel?: SortOrder
    status?: SortOrder
    deadline?: SortOrder
    scheduledFor?: SortOrder
    completedAt?: SortOrder
    riskLevel?: SortOrder
    riskReason?: SortOrder
    isRecurring?: SortOrder
    recurrenceRule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    estimatedMinutes?: SortOrder
    priorityScore?: SortOrder
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type SubtaskCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
  }

  export type SubtaskAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SubtaskMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
  }

  export type SubtaskMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    completed?: SortOrder
    completedAt?: SortOrder
    order?: SortOrder
  }

  export type SubtaskSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeFilter<$PrismaModel> | $Enums.BlockType
  }

  export type TaskNullableRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type ScheduleBlockCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    calendarEventId?: SortOrder
    syncedToCalendar?: SortOrder
    blockType?: SortOrder
  }

  export type ScheduleBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    calendarEventId?: SortOrder
    syncedToCalendar?: SortOrder
    blockType?: SortOrder
  }

  export type ScheduleBlockMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    calendarEventId?: SortOrder
    syncedToCalendar?: SortOrder
    blockType?: SortOrder
  }

  export type EnumBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.BlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumBlockTypeFilter<$PrismaModel>
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    totalCompletions?: SortOrder
    completionLog?: SortOrder
    bestTimePattern?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    totalCompletions?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    totalCompletions?: SortOrder
    bestTimePattern?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    totalCompletions?: SortOrder
    bestTimePattern?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    totalCompletions?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CheckinCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    completedTaskIds?: SortOrder
    userMessage?: SortOrder
    completionPct?: SortOrder
    coachMessage?: SortOrder
    revisedPlan?: SortOrder
    motivationScore?: SortOrder
  }

  export type CheckinAvgOrderByAggregateInput = {
    completionPct?: SortOrder
    motivationScore?: SortOrder
  }

  export type CheckinMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    userMessage?: SortOrder
    completionPct?: SortOrder
    coachMessage?: SortOrder
    motivationScore?: SortOrder
  }

  export type CheckinMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    userMessage?: SortOrder
    completionPct?: SortOrder
    coachMessage?: SortOrder
    motivationScore?: SortOrder
  }

  export type CheckinSumOrderByAggregateInput = {
    completionPct?: SortOrder
    motivationScore?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductivityLogUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type ProductivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    tasksCompleted?: SortOrder
    tasksPlanned?: SortOrder
    focusMinutes?: SortOrder
    completionRate?: SortOrder
    weeklyScore?: SortOrder
  }

  export type ProductivityLogAvgOrderByAggregateInput = {
    tasksCompleted?: SortOrder
    tasksPlanned?: SortOrder
    focusMinutes?: SortOrder
    completionRate?: SortOrder
    weeklyScore?: SortOrder
  }

  export type ProductivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    tasksCompleted?: SortOrder
    tasksPlanned?: SortOrder
    focusMinutes?: SortOrder
    completionRate?: SortOrder
    weeklyScore?: SortOrder
  }

  export type ProductivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    tasksCompleted?: SortOrder
    tasksPlanned?: SortOrder
    focusMinutes?: SortOrder
    completionRate?: SortOrder
    weeklyScore?: SortOrder
  }

  export type ProductivityLogSumOrderByAggregateInput = {
    tasksCompleted?: SortOrder
    tasksPlanned?: SortOrder
    focusMinutes?: SortOrder
    completionRate?: SortOrder
    weeklyScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumInsightTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InsightType | EnumInsightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InsightType[] | ListEnumInsightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsightType[] | ListEnumInsightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInsightTypeFilter<$PrismaModel> | $Enums.InsightType
  }

  export type AiInsightCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    generatedAt?: SortOrder
    seen?: SortOrder
  }

  export type AiInsightMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    generatedAt?: SortOrder
    seen?: SortOrder
  }

  export type AiInsightMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    generatedAt?: SortOrder
    seen?: SortOrder
  }

  export type EnumInsightTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InsightType | EnumInsightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InsightType[] | ListEnumInsightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsightType[] | ListEnumInsightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInsightTypeWithAggregatesFilter<$PrismaModel> | $Enums.InsightType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInsightTypeFilter<$PrismaModel>
    _max?: NestedEnumInsightTypeFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type HabitCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type ScheduleBlockCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput> | ScheduleBlockCreateWithoutUserInput[] | ScheduleBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutUserInput | ScheduleBlockCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleBlockCreateManyUserInputEnvelope
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
  }

  export type ProductivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductivityLogCreateWithoutUserInput, ProductivityLogUncheckedCreateWithoutUserInput> | ProductivityLogCreateWithoutUserInput[] | ProductivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductivityLogCreateOrConnectWithoutUserInput | ProductivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ProductivityLogCreateManyUserInputEnvelope
    connect?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
  }

  export type AiInsightCreateNestedManyWithoutUserInput = {
    create?: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput> | AiInsightCreateWithoutUserInput[] | AiInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutUserInput | AiInsightCreateOrConnectWithoutUserInput[]
    createMany?: AiInsightCreateManyUserInputEnvelope
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
  }

  export type CheckinCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type ScheduleBlockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput> | ScheduleBlockCreateWithoutUserInput[] | ScheduleBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutUserInput | ScheduleBlockCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleBlockCreateManyUserInputEnvelope
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
  }

  export type ProductivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductivityLogCreateWithoutUserInput, ProductivityLogUncheckedCreateWithoutUserInput> | ProductivityLogCreateWithoutUserInput[] | ProductivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductivityLogCreateOrConnectWithoutUserInput | ProductivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ProductivityLogCreateManyUserInputEnvelope
    connect?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
  }

  export type AiInsightUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput> | AiInsightCreateWithoutUserInput[] | AiInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutUserInput | AiInsightCreateOrConnectWithoutUserInput[]
    createMany?: AiInsightCreateManyUserInputEnvelope
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
  }

  export type CheckinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type HabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type ScheduleBlockUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput> | ScheduleBlockCreateWithoutUserInput[] | ScheduleBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutUserInput | ScheduleBlockCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleBlockUpsertWithWhereUniqueWithoutUserInput | ScheduleBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleBlockCreateManyUserInputEnvelope
    set?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    disconnect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    delete?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    update?: ScheduleBlockUpdateWithWhereUniqueWithoutUserInput | ScheduleBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleBlockUpdateManyWithWhereWithoutUserInput | ScheduleBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
  }

  export type ProductivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductivityLogCreateWithoutUserInput, ProductivityLogUncheckedCreateWithoutUserInput> | ProductivityLogCreateWithoutUserInput[] | ProductivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductivityLogCreateOrConnectWithoutUserInput | ProductivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ProductivityLogUpsertWithWhereUniqueWithoutUserInput | ProductivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductivityLogCreateManyUserInputEnvelope
    set?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
    disconnect?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
    delete?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
    connect?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
    update?: ProductivityLogUpdateWithWhereUniqueWithoutUserInput | ProductivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductivityLogUpdateManyWithWhereWithoutUserInput | ProductivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductivityLogScalarWhereInput | ProductivityLogScalarWhereInput[]
  }

  export type AiInsightUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput> | AiInsightCreateWithoutUserInput[] | AiInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutUserInput | AiInsightCreateOrConnectWithoutUserInput[]
    upsert?: AiInsightUpsertWithWhereUniqueWithoutUserInput | AiInsightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiInsightCreateManyUserInputEnvelope
    set?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    disconnect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    delete?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    update?: AiInsightUpdateWithWhereUniqueWithoutUserInput | AiInsightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiInsightUpdateManyWithWhereWithoutUserInput | AiInsightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
  }

  export type CheckinUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutUserInput | CheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutUserInput | CheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutUserInput | CheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput> | ScheduleBlockCreateWithoutUserInput[] | ScheduleBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutUserInput | ScheduleBlockCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleBlockUpsertWithWhereUniqueWithoutUserInput | ScheduleBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleBlockCreateManyUserInputEnvelope
    set?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    disconnect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    delete?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    update?: ScheduleBlockUpdateWithWhereUniqueWithoutUserInput | ScheduleBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleBlockUpdateManyWithWhereWithoutUserInput | ScheduleBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
  }

  export type ProductivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductivityLogCreateWithoutUserInput, ProductivityLogUncheckedCreateWithoutUserInput> | ProductivityLogCreateWithoutUserInput[] | ProductivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductivityLogCreateOrConnectWithoutUserInput | ProductivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ProductivityLogUpsertWithWhereUniqueWithoutUserInput | ProductivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductivityLogCreateManyUserInputEnvelope
    set?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
    disconnect?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
    delete?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
    connect?: ProductivityLogWhereUniqueInput | ProductivityLogWhereUniqueInput[]
    update?: ProductivityLogUpdateWithWhereUniqueWithoutUserInput | ProductivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductivityLogUpdateManyWithWhereWithoutUserInput | ProductivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductivityLogScalarWhereInput | ProductivityLogScalarWhereInput[]
  }

  export type AiInsightUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput> | AiInsightCreateWithoutUserInput[] | AiInsightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiInsightCreateOrConnectWithoutUserInput | AiInsightCreateOrConnectWithoutUserInput[]
    upsert?: AiInsightUpsertWithWhereUniqueWithoutUserInput | AiInsightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiInsightCreateManyUserInputEnvelope
    set?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    disconnect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    delete?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    connect?: AiInsightWhereUniqueInput | AiInsightWhereUniqueInput[]
    update?: AiInsightUpdateWithWhereUniqueWithoutUserInput | AiInsightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiInsightUpdateManyWithWhereWithoutUserInput | AiInsightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
  }

  export type CheckinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput> | CheckinCreateWithoutUserInput[] | CheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CheckinCreateOrConnectWithoutUserInput | CheckinCreateOrConnectWithoutUserInput[]
    upsert?: CheckinUpsertWithWhereUniqueWithoutUserInput | CheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CheckinCreateManyUserInputEnvelope
    set?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    disconnect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    delete?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    connect?: CheckinWhereUniqueInput | CheckinWhereUniqueInput[]
    update?: CheckinUpdateWithWhereUniqueWithoutUserInput | CheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CheckinUpdateManyWithWhereWithoutUserInput | CheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type MilestoneCreateNestedManyWithoutGoalInput = {
    create?: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput> | MilestoneCreateWithoutGoalInput[] | MilestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutGoalInput | MilestoneCreateOrConnectWithoutGoalInput[]
    createMany?: MilestoneCreateManyGoalInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput> | MilestoneCreateWithoutGoalInput[] | MilestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutGoalInput | MilestoneCreateOrConnectWithoutGoalInput[]
    createMany?: MilestoneCreateManyGoalInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type EnumGoalCategoryFieldUpdateOperationsInput = {
    set?: $Enums.GoalCategory
  }

  export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type TaskUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type MilestoneUpdateManyWithoutGoalNestedInput = {
    create?: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput> | MilestoneCreateWithoutGoalInput[] | MilestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutGoalInput | MilestoneCreateOrConnectWithoutGoalInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutGoalInput | MilestoneUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: MilestoneCreateManyGoalInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutGoalInput | MilestoneUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutGoalInput | MilestoneUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput> | MilestoneCreateWithoutGoalInput[] | MilestoneUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutGoalInput | MilestoneCreateOrConnectWithoutGoalInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutGoalInput | MilestoneUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: MilestoneCreateManyGoalInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutGoalInput | MilestoneUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutGoalInput | MilestoneUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type GoalCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<GoalCreateWithoutMilestonesInput, GoalUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: GoalCreateOrConnectWithoutMilestonesInput
    connect?: GoalWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GoalUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<GoalCreateWithoutMilestonesInput, GoalUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: GoalCreateOrConnectWithoutMilestonesInput
    upsert?: GoalUpsertWithoutMilestonesInput
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutMilestonesInput, GoalUpdateWithoutMilestonesInput>, GoalUncheckedUpdateWithoutMilestonesInput>
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutTasksInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    connect?: GoalWhereUniqueInput
  }

  export type SubtaskCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput> | SubtaskCreateWithoutTaskInput[] | SubtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubtaskCreateOrConnectWithoutTaskInput | SubtaskCreateOrConnectWithoutTaskInput[]
    createMany?: SubtaskCreateManyTaskInputEnvelope
    connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
  }

  export type ScheduleBlockCreateNestedManyWithoutTaskInput = {
    create?: XOR<ScheduleBlockCreateWithoutTaskInput, ScheduleBlockUncheckedCreateWithoutTaskInput> | ScheduleBlockCreateWithoutTaskInput[] | ScheduleBlockUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutTaskInput | ScheduleBlockCreateOrConnectWithoutTaskInput[]
    createMany?: ScheduleBlockCreateManyTaskInputEnvelope
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
  }

  export type SubtaskUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput> | SubtaskCreateWithoutTaskInput[] | SubtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubtaskCreateOrConnectWithoutTaskInput | SubtaskCreateOrConnectWithoutTaskInput[]
    createMany?: SubtaskCreateManyTaskInputEnvelope
    connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
  }

  export type ScheduleBlockUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<ScheduleBlockCreateWithoutTaskInput, ScheduleBlockUncheckedCreateWithoutTaskInput> | ScheduleBlockCreateWithoutTaskInput[] | ScheduleBlockUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutTaskInput | ScheduleBlockCreateOrConnectWithoutTaskInput[]
    createMany?: ScheduleBlockCreateManyTaskInputEnvelope
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type GoalUpdateOneWithoutTasksNestedInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    upsert?: GoalUpsertWithoutTasksInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutTasksInput, GoalUpdateWithoutTasksInput>, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type SubtaskUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput> | SubtaskCreateWithoutTaskInput[] | SubtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubtaskCreateOrConnectWithoutTaskInput | SubtaskCreateOrConnectWithoutTaskInput[]
    upsert?: SubtaskUpsertWithWhereUniqueWithoutTaskInput | SubtaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubtaskCreateManyTaskInputEnvelope
    set?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    disconnect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    delete?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    update?: SubtaskUpdateWithWhereUniqueWithoutTaskInput | SubtaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubtaskUpdateManyWithWhereWithoutTaskInput | SubtaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[]
  }

  export type ScheduleBlockUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ScheduleBlockCreateWithoutTaskInput, ScheduleBlockUncheckedCreateWithoutTaskInput> | ScheduleBlockCreateWithoutTaskInput[] | ScheduleBlockUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutTaskInput | ScheduleBlockCreateOrConnectWithoutTaskInput[]
    upsert?: ScheduleBlockUpsertWithWhereUniqueWithoutTaskInput | ScheduleBlockUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ScheduleBlockCreateManyTaskInputEnvelope
    set?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    disconnect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    delete?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    update?: ScheduleBlockUpdateWithWhereUniqueWithoutTaskInput | ScheduleBlockUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ScheduleBlockUpdateManyWithWhereWithoutTaskInput | ScheduleBlockUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
  }

  export type SubtaskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput> | SubtaskCreateWithoutTaskInput[] | SubtaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubtaskCreateOrConnectWithoutTaskInput | SubtaskCreateOrConnectWithoutTaskInput[]
    upsert?: SubtaskUpsertWithWhereUniqueWithoutTaskInput | SubtaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubtaskCreateManyTaskInputEnvelope
    set?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    disconnect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    delete?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[]
    update?: SubtaskUpdateWithWhereUniqueWithoutTaskInput | SubtaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubtaskUpdateManyWithWhereWithoutTaskInput | SubtaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[]
  }

  export type ScheduleBlockUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ScheduleBlockCreateWithoutTaskInput, ScheduleBlockUncheckedCreateWithoutTaskInput> | ScheduleBlockCreateWithoutTaskInput[] | ScheduleBlockUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ScheduleBlockCreateOrConnectWithoutTaskInput | ScheduleBlockCreateOrConnectWithoutTaskInput[]
    upsert?: ScheduleBlockUpsertWithWhereUniqueWithoutTaskInput | ScheduleBlockUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ScheduleBlockCreateManyTaskInputEnvelope
    set?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    disconnect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    delete?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    connect?: ScheduleBlockWhereUniqueInput | ScheduleBlockWhereUniqueInput[]
    update?: ScheduleBlockUpdateWithWhereUniqueWithoutTaskInput | ScheduleBlockUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ScheduleBlockUpdateManyWithWhereWithoutTaskInput | ScheduleBlockUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutSubtasksInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutSubtasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    upsert?: TaskUpsertWithoutSubtasksInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubtasksInput, TaskUpdateWithoutSubtasksInput>, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type UserCreateNestedOneWithoutScheduleBlocksInput = {
    create?: XOR<UserCreateWithoutScheduleBlocksInput, UserUncheckedCreateWithoutScheduleBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutScheduleBlocksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutScheduleBlocksInput = {
    create?: XOR<TaskCreateWithoutScheduleBlocksInput, TaskUncheckedCreateWithoutScheduleBlocksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutScheduleBlocksInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumBlockTypeFieldUpdateOperationsInput = {
    set?: $Enums.BlockType
  }

  export type UserUpdateOneRequiredWithoutScheduleBlocksNestedInput = {
    create?: XOR<UserCreateWithoutScheduleBlocksInput, UserUncheckedCreateWithoutScheduleBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutScheduleBlocksInput
    upsert?: UserUpsertWithoutScheduleBlocksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScheduleBlocksInput, UserUpdateWithoutScheduleBlocksInput>, UserUncheckedUpdateWithoutScheduleBlocksInput>
  }

  export type TaskUpdateOneWithoutScheduleBlocksNestedInput = {
    create?: XOR<TaskCreateWithoutScheduleBlocksInput, TaskUncheckedCreateWithoutScheduleBlocksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutScheduleBlocksInput
    upsert?: TaskUpsertWithoutScheduleBlocksInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutScheduleBlocksInput, TaskUpdateWithoutScheduleBlocksInput>, TaskUncheckedUpdateWithoutScheduleBlocksInput>
  }

  export type UserCreateNestedOneWithoutHabitsInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    upsert?: UserUpsertWithoutHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitsInput, UserUpdateWithoutHabitsInput>, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type CheckinCreatecompletedTaskIdsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    connect?: UserWhereUniqueInput
  }

  export type CheckinUpdatecompletedTaskIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckinsInput
    upsert?: UserUpsertWithoutCheckinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckinsInput, UserUpdateWithoutCheckinsInput>, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type UserCreateNestedOneWithoutProductivityLogsInput = {
    create?: XOR<UserCreateWithoutProductivityLogsInput, UserUncheckedCreateWithoutProductivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProductivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutProductivityLogsInput, UserUncheckedCreateWithoutProductivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductivityLogsInput
    upsert?: UserUpsertWithoutProductivityLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductivityLogsInput, UserUpdateWithoutProductivityLogsInput>, UserUncheckedUpdateWithoutProductivityLogsInput>
  }

  export type UserCreateNestedOneWithoutAiInsightsInput = {
    create?: XOR<UserCreateWithoutAiInsightsInput, UserUncheckedCreateWithoutAiInsightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiInsightsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumInsightTypeFieldUpdateOperationsInput = {
    set?: $Enums.InsightType
  }

  export type UserUpdateOneRequiredWithoutAiInsightsNestedInput = {
    create?: XOR<UserCreateWithoutAiInsightsInput, UserUncheckedCreateWithoutAiInsightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiInsightsInput
    upsert?: UserUpsertWithoutAiInsightsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiInsightsInput, UserUpdateWithoutAiInsightsInput>, UserUncheckedUpdateWithoutAiInsightsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGoalCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalCategory | EnumGoalCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.GoalCategory[] | ListEnumGoalCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalCategory[] | ListEnumGoalCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalCategoryFilter<$PrismaModel> | $Enums.GoalCategory
  }

  export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type NestedEnumGoalCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalCategory | EnumGoalCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.GoalCategory[] | ListEnumGoalCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalCategory[] | ListEnumGoalCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalCategoryWithAggregatesFilter<$PrismaModel> | $Enums.GoalCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalCategoryFilter<$PrismaModel>
    _max?: NestedEnumGoalCategoryFilter<$PrismaModel>
  }

  export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type NestedEnumBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeFilter<$PrismaModel> | $Enums.BlockType
  }

  export type NestedEnumBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlockType | EnumBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlockType[] | ListEnumBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.BlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumBlockTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumInsightTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InsightType | EnumInsightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InsightType[] | ListEnumInsightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsightType[] | ListEnumInsightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInsightTypeFilter<$PrismaModel> | $Enums.InsightType
  }

  export type NestedEnumInsightTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InsightType | EnumInsightTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InsightType[] | ListEnumInsightTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InsightType[] | ListEnumInsightTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInsightTypeWithAggregatesFilter<$PrismaModel> | $Enums.InsightType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInsightTypeFilter<$PrismaModel>
    _max?: NestedEnumInsightTypeFilter<$PrismaModel>
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goal?: GoalCreateNestedOneWithoutTasksInput
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    goalId?: string | null
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutGoalInput
    milestones?: MilestoneCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string
    color?: string
    currentStreak?: number
    longestStreak?: number
    totalCompletions?: number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string
    color?: string
    currentStreak?: number
    longestStreak?: number
    totalCompletions?: number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateOrConnectWithoutUserInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitCreateManyUserInputEnvelope = {
    data: HabitCreateManyUserInput | HabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleBlockCreateWithoutUserInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    calendarEventId?: string | null
    syncedToCalendar?: boolean
    blockType?: $Enums.BlockType
    task?: TaskCreateNestedOneWithoutScheduleBlocksInput
  }

  export type ScheduleBlockUncheckedCreateWithoutUserInput = {
    id?: string
    taskId?: string | null
    title: string
    startTime: Date | string
    endTime: Date | string
    calendarEventId?: string | null
    syncedToCalendar?: boolean
    blockType?: $Enums.BlockType
  }

  export type ScheduleBlockCreateOrConnectWithoutUserInput = {
    where: ScheduleBlockWhereUniqueInput
    create: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput>
  }

  export type ScheduleBlockCreateManyUserInputEnvelope = {
    data: ScheduleBlockCreateManyUserInput | ScheduleBlockCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductivityLogCreateWithoutUserInput = {
    id?: string
    date: Date | string
    tasksCompleted?: number
    tasksPlanned?: number
    focusMinutes?: number
    completionRate?: number
    weeklyScore?: number | null
  }

  export type ProductivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    tasksCompleted?: number
    tasksPlanned?: number
    focusMinutes?: number
    completionRate?: number
    weeklyScore?: number | null
  }

  export type ProductivityLogCreateOrConnectWithoutUserInput = {
    where: ProductivityLogWhereUniqueInput
    create: XOR<ProductivityLogCreateWithoutUserInput, ProductivityLogUncheckedCreateWithoutUserInput>
  }

  export type ProductivityLogCreateManyUserInputEnvelope = {
    data: ProductivityLogCreateManyUserInput | ProductivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AiInsightCreateWithoutUserInput = {
    id?: string
    type: $Enums.InsightType
    title: string
    body: string
    generatedAt?: Date | string
    seen?: boolean
  }

  export type AiInsightUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.InsightType
    title: string
    body: string
    generatedAt?: Date | string
    seen?: boolean
  }

  export type AiInsightCreateOrConnectWithoutUserInput = {
    where: AiInsightWhereUniqueInput
    create: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput>
  }

  export type AiInsightCreateManyUserInputEnvelope = {
    data: AiInsightCreateManyUserInput | AiInsightCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CheckinCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    completedTaskIds?: CheckinCreatecompletedTaskIdsInput | string[]
    userMessage?: string | null
    completionPct: number
    coachMessage: string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: number | null
  }

  export type CheckinUncheckedCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    completedTaskIds?: CheckinCreatecompletedTaskIdsInput | string[]
    userMessage?: string | null
    completionPct: number
    coachMessage: string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: number | null
  }

  export type CheckinCreateOrConnectWithoutUserInput = {
    where: CheckinWhereUniqueInput
    create: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput>
  }

  export type CheckinCreateManyUserInputEnvelope = {
    data: CheckinCreateManyUserInput | CheckinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    goalId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    aiExtracted?: BoolFilter<"Task"> | boolean
    estimatedMinutes?: IntNullableFilter<"Task"> | number | null
    priorityScore?: IntFilter<"Task"> | number
    priorityLabel?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    deadline?: DateTimeNullableFilter<"Task"> | Date | string | null
    scheduledFor?: DateTimeNullableFilter<"Task"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    riskLevel?: EnumRiskLevelFilter<"Task"> | $Enums.RiskLevel
    riskReason?: StringNullableFilter<"Task"> | string | null
    isRecurring?: BoolFilter<"Task"> | boolean
    recurrenceRule?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    description?: StringNullableFilter<"Goal"> | string | null
    category?: EnumGoalCategoryFilter<"Goal"> | $Enums.GoalCategory
    targetDate?: DateTimeFilter<"Goal"> | Date | string
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    aiPlan?: JsonNullableFilter<"Goal">
    estimatedHours?: IntNullableFilter<"Goal"> | number | null
    completionPct?: IntFilter<"Goal"> | number
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type HabitUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
  }

  export type HabitUpdateManyWithWhereWithoutUserInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: StringFilter<"Habit"> | string
    userId?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    icon?: StringFilter<"Habit"> | string
    color?: StringFilter<"Habit"> | string
    currentStreak?: IntFilter<"Habit"> | number
    longestStreak?: IntFilter<"Habit"> | number
    totalCompletions?: IntFilter<"Habit"> | number
    completionLog?: JsonFilter<"Habit">
    bestTimePattern?: StringNullableFilter<"Habit"> | string | null
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
  }

  export type ScheduleBlockUpsertWithWhereUniqueWithoutUserInput = {
    where: ScheduleBlockWhereUniqueInput
    update: XOR<ScheduleBlockUpdateWithoutUserInput, ScheduleBlockUncheckedUpdateWithoutUserInput>
    create: XOR<ScheduleBlockCreateWithoutUserInput, ScheduleBlockUncheckedCreateWithoutUserInput>
  }

  export type ScheduleBlockUpdateWithWhereUniqueWithoutUserInput = {
    where: ScheduleBlockWhereUniqueInput
    data: XOR<ScheduleBlockUpdateWithoutUserInput, ScheduleBlockUncheckedUpdateWithoutUserInput>
  }

  export type ScheduleBlockUpdateManyWithWhereWithoutUserInput = {
    where: ScheduleBlockScalarWhereInput
    data: XOR<ScheduleBlockUpdateManyMutationInput, ScheduleBlockUncheckedUpdateManyWithoutUserInput>
  }

  export type ScheduleBlockScalarWhereInput = {
    AND?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
    OR?: ScheduleBlockScalarWhereInput[]
    NOT?: ScheduleBlockScalarWhereInput | ScheduleBlockScalarWhereInput[]
    id?: StringFilter<"ScheduleBlock"> | string
    userId?: StringFilter<"ScheduleBlock"> | string
    taskId?: StringNullableFilter<"ScheduleBlock"> | string | null
    title?: StringFilter<"ScheduleBlock"> | string
    startTime?: DateTimeFilter<"ScheduleBlock"> | Date | string
    endTime?: DateTimeFilter<"ScheduleBlock"> | Date | string
    calendarEventId?: StringNullableFilter<"ScheduleBlock"> | string | null
    syncedToCalendar?: BoolFilter<"ScheduleBlock"> | boolean
    blockType?: EnumBlockTypeFilter<"ScheduleBlock"> | $Enums.BlockType
  }

  export type ProductivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductivityLogWhereUniqueInput
    update: XOR<ProductivityLogUpdateWithoutUserInput, ProductivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ProductivityLogCreateWithoutUserInput, ProductivityLogUncheckedCreateWithoutUserInput>
  }

  export type ProductivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductivityLogWhereUniqueInput
    data: XOR<ProductivityLogUpdateWithoutUserInput, ProductivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ProductivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ProductivityLogScalarWhereInput
    data: XOR<ProductivityLogUpdateManyMutationInput, ProductivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductivityLogScalarWhereInput = {
    AND?: ProductivityLogScalarWhereInput | ProductivityLogScalarWhereInput[]
    OR?: ProductivityLogScalarWhereInput[]
    NOT?: ProductivityLogScalarWhereInput | ProductivityLogScalarWhereInput[]
    id?: StringFilter<"ProductivityLog"> | string
    userId?: StringFilter<"ProductivityLog"> | string
    date?: DateTimeFilter<"ProductivityLog"> | Date | string
    tasksCompleted?: IntFilter<"ProductivityLog"> | number
    tasksPlanned?: IntFilter<"ProductivityLog"> | number
    focusMinutes?: IntFilter<"ProductivityLog"> | number
    completionRate?: FloatFilter<"ProductivityLog"> | number
    weeklyScore?: IntNullableFilter<"ProductivityLog"> | number | null
  }

  export type AiInsightUpsertWithWhereUniqueWithoutUserInput = {
    where: AiInsightWhereUniqueInput
    update: XOR<AiInsightUpdateWithoutUserInput, AiInsightUncheckedUpdateWithoutUserInput>
    create: XOR<AiInsightCreateWithoutUserInput, AiInsightUncheckedCreateWithoutUserInput>
  }

  export type AiInsightUpdateWithWhereUniqueWithoutUserInput = {
    where: AiInsightWhereUniqueInput
    data: XOR<AiInsightUpdateWithoutUserInput, AiInsightUncheckedUpdateWithoutUserInput>
  }

  export type AiInsightUpdateManyWithWhereWithoutUserInput = {
    where: AiInsightScalarWhereInput
    data: XOR<AiInsightUpdateManyMutationInput, AiInsightUncheckedUpdateManyWithoutUserInput>
  }

  export type AiInsightScalarWhereInput = {
    AND?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
    OR?: AiInsightScalarWhereInput[]
    NOT?: AiInsightScalarWhereInput | AiInsightScalarWhereInput[]
    id?: StringFilter<"AiInsight"> | string
    userId?: StringFilter<"AiInsight"> | string
    type?: EnumInsightTypeFilter<"AiInsight"> | $Enums.InsightType
    title?: StringFilter<"AiInsight"> | string
    body?: StringFilter<"AiInsight"> | string
    generatedAt?: DateTimeFilter<"AiInsight"> | Date | string
    seen?: BoolFilter<"AiInsight"> | boolean
  }

  export type CheckinUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckinWhereUniqueInput
    update: XOR<CheckinUpdateWithoutUserInput, CheckinUncheckedUpdateWithoutUserInput>
    create: XOR<CheckinCreateWithoutUserInput, CheckinUncheckedCreateWithoutUserInput>
  }

  export type CheckinUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckinWhereUniqueInput
    data: XOR<CheckinUpdateWithoutUserInput, CheckinUncheckedUpdateWithoutUserInput>
  }

  export type CheckinUpdateManyWithWhereWithoutUserInput = {
    where: CheckinScalarWhereInput
    data: XOR<CheckinUpdateManyMutationInput, CheckinUncheckedUpdateManyWithoutUserInput>
  }

  export type CheckinScalarWhereInput = {
    AND?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
    OR?: CheckinScalarWhereInput[]
    NOT?: CheckinScalarWhereInput | CheckinScalarWhereInput[]
    id?: StringFilter<"Checkin"> | string
    userId?: StringFilter<"Checkin"> | string
    date?: DateTimeFilter<"Checkin"> | Date | string
    completedTaskIds?: StringNullableListFilter<"Checkin">
    userMessage?: StringNullableFilter<"Checkin"> | string | null
    completionPct?: IntFilter<"Checkin"> | number
    coachMessage?: StringFilter<"Checkin"> | string
    revisedPlan?: JsonNullableFilter<"Checkin">
    motivationScore?: IntNullableFilter<"Checkin"> | number | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightCreateNestedManyWithoutUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type TaskCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutGoalInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutGoalInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskCreateManyGoalInputEnvelope = {
    data: TaskCreateManyGoalInput | TaskCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type MilestoneCreateWithoutGoalInput = {
    id?: string
    title: string
    targetDate: Date | string
    completed?: boolean
    completedAt?: Date | string | null
    order: number
  }

  export type MilestoneUncheckedCreateWithoutGoalInput = {
    id?: string
    title: string
    targetDate: Date | string
    completed?: boolean
    completedAt?: Date | string | null
    order: number
  }

  export type MilestoneCreateOrConnectWithoutGoalInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput>
  }

  export type MilestoneCreateManyGoalInputEnvelope = {
    data: MilestoneCreateManyGoalInput | MilestoneCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUpdateManyWithoutUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
  }

  export type TaskUpdateManyWithWhereWithoutGoalInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutGoalInput>
  }

  export type MilestoneUpsertWithWhereUniqueWithoutGoalInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutGoalInput, MilestoneUncheckedUpdateWithoutGoalInput>
    create: XOR<MilestoneCreateWithoutGoalInput, MilestoneUncheckedCreateWithoutGoalInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutGoalInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutGoalInput, MilestoneUncheckedUpdateWithoutGoalInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutGoalInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutGoalInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: StringFilter<"Milestone"> | string
    goalId?: StringFilter<"Milestone"> | string
    title?: StringFilter<"Milestone"> | string
    targetDate?: DateTimeFilter<"Milestone"> | Date | string
    completed?: BoolFilter<"Milestone"> | boolean
    completedAt?: DateTimeNullableFilter<"Milestone"> | Date | string | null
    order?: IntFilter<"Milestone"> | number
  }

  export type GoalCreateWithoutMilestonesInput = {
    id?: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutMilestonesInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutMilestonesInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutMilestonesInput, GoalUncheckedCreateWithoutMilestonesInput>
  }

  export type GoalUpsertWithoutMilestonesInput = {
    update: XOR<GoalUpdateWithoutMilestonesInput, GoalUncheckedUpdateWithoutMilestonesInput>
    create: XOR<GoalCreateWithoutMilestonesInput, GoalUncheckedCreateWithoutMilestonesInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutMilestonesInput, GoalUncheckedUpdateWithoutMilestonesInput>
  }

  export type GoalUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutMilestonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightCreateNestedManyWithoutUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type GoalCreateWithoutTasksInput = {
    id?: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    milestones?: MilestoneCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutTasksInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    milestones?: MilestoneUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutTasksInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
  }

  export type SubtaskCreateWithoutTaskInput = {
    id?: string
    title: string
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
  }

  export type SubtaskUncheckedCreateWithoutTaskInput = {
    id?: string
    title: string
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
  }

  export type SubtaskCreateOrConnectWithoutTaskInput = {
    where: SubtaskWhereUniqueInput
    create: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput>
  }

  export type SubtaskCreateManyTaskInputEnvelope = {
    data: SubtaskCreateManyTaskInput | SubtaskCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleBlockCreateWithoutTaskInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    calendarEventId?: string | null
    syncedToCalendar?: boolean
    blockType?: $Enums.BlockType
    user: UserCreateNestedOneWithoutScheduleBlocksInput
  }

  export type ScheduleBlockUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    calendarEventId?: string | null
    syncedToCalendar?: boolean
    blockType?: $Enums.BlockType
  }

  export type ScheduleBlockCreateOrConnectWithoutTaskInput = {
    where: ScheduleBlockWhereUniqueInput
    create: XOR<ScheduleBlockCreateWithoutTaskInput, ScheduleBlockUncheckedCreateWithoutTaskInput>
  }

  export type ScheduleBlockCreateManyTaskInputEnvelope = {
    data: ScheduleBlockCreateManyTaskInput | ScheduleBlockCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUpdateManyWithoutUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoalUpsertWithoutTasksInput = {
    update: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutTasksInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type GoalUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    milestones?: MilestoneUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    milestones?: MilestoneUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type SubtaskUpsertWithWhereUniqueWithoutTaskInput = {
    where: SubtaskWhereUniqueInput
    update: XOR<SubtaskUpdateWithoutTaskInput, SubtaskUncheckedUpdateWithoutTaskInput>
    create: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput>
  }

  export type SubtaskUpdateWithWhereUniqueWithoutTaskInput = {
    where: SubtaskWhereUniqueInput
    data: XOR<SubtaskUpdateWithoutTaskInput, SubtaskUncheckedUpdateWithoutTaskInput>
  }

  export type SubtaskUpdateManyWithWhereWithoutTaskInput = {
    where: SubtaskScalarWhereInput
    data: XOR<SubtaskUpdateManyMutationInput, SubtaskUncheckedUpdateManyWithoutTaskInput>
  }

  export type SubtaskScalarWhereInput = {
    AND?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[]
    OR?: SubtaskScalarWhereInput[]
    NOT?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[]
    id?: StringFilter<"Subtask"> | string
    taskId?: StringFilter<"Subtask"> | string
    title?: StringFilter<"Subtask"> | string
    completed?: BoolFilter<"Subtask"> | boolean
    completedAt?: DateTimeNullableFilter<"Subtask"> | Date | string | null
    order?: IntFilter<"Subtask"> | number
  }

  export type ScheduleBlockUpsertWithWhereUniqueWithoutTaskInput = {
    where: ScheduleBlockWhereUniqueInput
    update: XOR<ScheduleBlockUpdateWithoutTaskInput, ScheduleBlockUncheckedUpdateWithoutTaskInput>
    create: XOR<ScheduleBlockCreateWithoutTaskInput, ScheduleBlockUncheckedCreateWithoutTaskInput>
  }

  export type ScheduleBlockUpdateWithWhereUniqueWithoutTaskInput = {
    where: ScheduleBlockWhereUniqueInput
    data: XOR<ScheduleBlockUpdateWithoutTaskInput, ScheduleBlockUncheckedUpdateWithoutTaskInput>
  }

  export type ScheduleBlockUpdateManyWithWhereWithoutTaskInput = {
    where: ScheduleBlockScalarWhereInput
    data: XOR<ScheduleBlockUpdateManyMutationInput, ScheduleBlockUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutSubtasksInput = {
    id?: string
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    goal?: GoalCreateNestedOneWithoutTasksInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubtasksInput = {
    id?: string
    userId: string
    goalId?: string | null
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubtasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
  }

  export type TaskUpsertWithoutSubtasksInput = {
    update: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubtasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type TaskUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    goal?: GoalUpdateOneWithoutTasksNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserCreateWithoutScheduleBlocksInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightCreateNestedManyWithoutUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScheduleBlocksInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScheduleBlocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScheduleBlocksInput, UserUncheckedCreateWithoutScheduleBlocksInput>
  }

  export type TaskCreateWithoutScheduleBlocksInput = {
    id?: string
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    goal?: GoalCreateNestedOneWithoutTasksInput
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutScheduleBlocksInput = {
    id?: string
    userId: string
    goalId?: string | null
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutScheduleBlocksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutScheduleBlocksInput, TaskUncheckedCreateWithoutScheduleBlocksInput>
  }

  export type UserUpsertWithoutScheduleBlocksInput = {
    update: XOR<UserUpdateWithoutScheduleBlocksInput, UserUncheckedUpdateWithoutScheduleBlocksInput>
    create: XOR<UserCreateWithoutScheduleBlocksInput, UserUncheckedCreateWithoutScheduleBlocksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScheduleBlocksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScheduleBlocksInput, UserUncheckedUpdateWithoutScheduleBlocksInput>
  }

  export type UserUpdateWithoutScheduleBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUpdateManyWithoutUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScheduleBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutScheduleBlocksInput = {
    update: XOR<TaskUpdateWithoutScheduleBlocksInput, TaskUncheckedUpdateWithoutScheduleBlocksInput>
    create: XOR<TaskCreateWithoutScheduleBlocksInput, TaskUncheckedCreateWithoutScheduleBlocksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutScheduleBlocksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutScheduleBlocksInput, TaskUncheckedUpdateWithoutScheduleBlocksInput>
  }

  export type TaskUpdateWithoutScheduleBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    goal?: GoalUpdateOneWithoutTasksNestedInput
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutScheduleBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserCreateWithoutHabitsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightCreateNestedManyWithoutUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
  }

  export type UserUpsertWithoutHabitsInput = {
    update: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type UserUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUpdateManyWithoutUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCheckinsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCheckinsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCheckinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
  }

  export type UserUpsertWithoutCheckinsInput = {
    update: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
    create: XOR<UserCreateWithoutCheckinsInput, UserUncheckedCreateWithoutCheckinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckinsInput, UserUncheckedUpdateWithoutCheckinsInput>
  }

  export type UserUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProductivityLogsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightCreateNestedManyWithoutUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductivityLogsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductivityLogsInput, UserUncheckedCreateWithoutProductivityLogsInput>
  }

  export type UserUpsertWithoutProductivityLogsInput = {
    update: XOR<UserUpdateWithoutProductivityLogsInput, UserUncheckedUpdateWithoutProductivityLogsInput>
    create: XOR<UserCreateWithoutProductivityLogsInput, UserUncheckedCreateWithoutProductivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductivityLogsInput, UserUncheckedUpdateWithoutProductivityLogsInput>
  }

  export type UserUpdateWithoutProductivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUpdateManyWithoutUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAiInsightsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogCreateNestedManyWithoutUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiInsightsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogUncheckedCreateNestedManyWithoutUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiInsightsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiInsightsInput, UserUncheckedCreateWithoutAiInsightsInput>
  }

  export type UserUpsertWithoutAiInsightsInput = {
    update: XOR<UserUpdateWithoutAiInsightsInput, UserUncheckedUpdateWithoutAiInsightsInput>
    create: XOR<UserCreateWithoutAiInsightsInput, UserUncheckedCreateWithoutAiInsightsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiInsightsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiInsightsInput, UserUncheckedUpdateWithoutAiInsightsInput>
  }

  export type UserUpdateWithoutAiInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUpdateManyWithoutUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUncheckedUpdateManyWithoutUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightCreateNestedManyWithoutUserInput
    checkins?: CheckinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    clerkId: string
    email: string
    name: string
    avatarUrl?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    scheduleBlocks?: ScheduleBlockUncheckedCreateNestedManyWithoutUserInput
    productivityLogs?: ProductivityLogUncheckedCreateNestedManyWithoutUserInput
    aiInsights?: AiInsightUncheckedCreateNestedManyWithoutUserInput
    checkins?: CheckinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUpdateManyWithoutUserNestedInput
    checkins?: CheckinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pushSubscription?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutUserNestedInput
    productivityLogs?: ProductivityLogUncheckedUpdateManyWithoutUserNestedInput
    aiInsights?: AiInsightUncheckedUpdateManyWithoutUserNestedInput
    checkins?: CheckinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateManyUserInput = {
    id?: string
    goalId?: string | null
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    category: $Enums.GoalCategory
    targetDate: Date | string
    status?: $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: number | null
    completionPct?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string
    color?: string
    currentStreak?: number
    longestStreak?: number
    totalCompletions?: number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleBlockCreateManyUserInput = {
    id?: string
    taskId?: string | null
    title: string
    startTime: Date | string
    endTime: Date | string
    calendarEventId?: string | null
    syncedToCalendar?: boolean
    blockType?: $Enums.BlockType
  }

  export type ProductivityLogCreateManyUserInput = {
    id?: string
    date: Date | string
    tasksCompleted?: number
    tasksPlanned?: number
    focusMinutes?: number
    completionRate?: number
    weeklyScore?: number | null
  }

  export type AiInsightCreateManyUserInput = {
    id?: string
    type: $Enums.InsightType
    title: string
    body: string
    generatedAt?: Date | string
    seen?: boolean
  }

  export type CheckinCreateManyUserInput = {
    id?: string
    date?: Date | string
    completedTaskIds?: CheckinCreatecompletedTaskIdsInput | string[]
    userMessage?: string | null
    completionPct: number
    coachMessage: string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: number | null
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneWithoutTasksNestedInput
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutGoalNestedInput
    milestones?: MilestoneUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumGoalCategoryFieldUpdateOperationsInput | $Enums.GoalCategory
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    aiPlan?: NullableJsonNullValueInput | InputJsonValue
    estimatedHours?: NullableIntFieldUpdateOperationsInput | number | null
    completionPct?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    totalCompletions?: IntFieldUpdateOperationsInput | number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    totalCompletions?: IntFieldUpdateOperationsInput | number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    totalCompletions?: IntFieldUpdateOperationsInput | number
    completionLog?: JsonNullValueInput | InputJsonValue
    bestTimePattern?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleBlockUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    task?: TaskUpdateOneWithoutScheduleBlocksNestedInput
  }

  export type ScheduleBlockUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
  }

  export type ScheduleBlockUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
  }

  export type ProductivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksPlanned?: IntFieldUpdateOperationsInput | number
    focusMinutes?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksPlanned?: IntFieldUpdateOperationsInput | number
    focusMinutes?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksPlanned?: IntFieldUpdateOperationsInput | number
    focusMinutes?: IntFieldUpdateOperationsInput | number
    completionRate?: FloatFieldUpdateOperationsInput | number
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AiInsightUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInsightTypeFieldUpdateOperationsInput | $Enums.InsightType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AiInsightUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInsightTypeFieldUpdateOperationsInput | $Enums.InsightType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AiInsightUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInsightTypeFieldUpdateOperationsInput | $Enums.InsightType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CheckinUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTaskIds?: CheckinUpdatecompletedTaskIdsInput | string[]
    userMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completionPct?: IntFieldUpdateOperationsInput | number
    coachMessage?: StringFieldUpdateOperationsInput | string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CheckinUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTaskIds?: CheckinUpdatecompletedTaskIdsInput | string[]
    userMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completionPct?: IntFieldUpdateOperationsInput | number
    coachMessage?: StringFieldUpdateOperationsInput | string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CheckinUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completedTaskIds?: CheckinUpdatecompletedTaskIdsInput | string[]
    userMessage?: NullableStringFieldUpdateOperationsInput | string | null
    completionPct?: IntFieldUpdateOperationsInput | number
    coachMessage?: StringFieldUpdateOperationsInput | string
    revisedPlan?: NullableJsonNullValueInput | InputJsonValue
    motivationScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyGoalInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    aiExtracted?: boolean
    estimatedMinutes?: number | null
    priorityScore?: number
    priorityLabel?: $Enums.Priority
    status?: $Enums.TaskStatus
    deadline?: Date | string | null
    scheduledFor?: Date | string | null
    completedAt?: Date | string | null
    riskLevel?: $Enums.RiskLevel
    riskReason?: string | null
    isRecurring?: boolean
    recurrenceRule?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MilestoneCreateManyGoalInput = {
    id?: string
    title: string
    targetDate: Date | string
    completed?: boolean
    completedAt?: Date | string | null
    order: number
  }

  export type TaskUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput
    scheduleBlocks?: ScheduleBlockUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtasks?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput
    scheduleBlocks?: ScheduleBlockUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    aiExtracted?: BoolFieldUpdateOperationsInput | boolean
    estimatedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    priorityScore?: IntFieldUpdateOperationsInput | number
    priorityLabel?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    riskReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrenceRule?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    targetDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SubtaskCreateManyTaskInput = {
    id?: string
    title: string
    completed?: boolean
    completedAt?: Date | string | null
    order?: number
  }

  export type ScheduleBlockCreateManyTaskInput = {
    id?: string
    userId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    calendarEventId?: string | null
    syncedToCalendar?: boolean
    blockType?: $Enums.BlockType
  }

  export type SubtaskUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SubtaskUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SubtaskUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleBlockUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
    user?: UserUpdateOneRequiredWithoutScheduleBlocksNestedInput
  }

  export type ScheduleBlockUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
  }

  export type ScheduleBlockUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    syncedToCalendar?: BoolFieldUpdateOperationsInput | boolean
    blockType?: EnumBlockTypeFieldUpdateOperationsInput | $Enums.BlockType
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoalCountOutputTypeDefaultArgs instead
     */
    export type GoalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoalDefaultArgs instead
     */
    export type GoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GoalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MilestoneDefaultArgs instead
     */
    export type MilestoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MilestoneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubtaskDefaultArgs instead
     */
    export type SubtaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubtaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScheduleBlockDefaultArgs instead
     */
    export type ScheduleBlockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScheduleBlockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HabitDefaultArgs instead
     */
    export type HabitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HabitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckinDefaultArgs instead
     */
    export type CheckinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckinDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductivityLogDefaultArgs instead
     */
    export type ProductivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductivityLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AiInsightDefaultArgs instead
     */
    export type AiInsightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiInsightDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}