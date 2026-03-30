
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
 * Model Pokemon
 * 
 */
export type Pokemon = $Result.DefaultSelection<Prisma.$PokemonPayload>
/**
 * Model CaughtPokemon
 * 
 */
export type CaughtPokemon = $Result.DefaultSelection<Prisma.$CaughtPokemonPayload>
/**
 * Model GameSession
 * 
 */
export type GameSession = $Result.DefaultSelection<Prisma.$GameSessionPayload>
/**
 * Model DailyLog
 * 
 */
export type DailyLog = $Result.DefaultSelection<Prisma.$DailyLogPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model UserAchievement
 * 
 */
export type UserAchievement = $Result.DefaultSelection<Prisma.$UserAchievementPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.pokemon`: Exposes CRUD operations for the **Pokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pokemon
    * const pokemon = await prisma.pokemon.findMany()
    * ```
    */
  get pokemon(): Prisma.PokemonDelegate<ExtArgs>;

  /**
   * `prisma.caughtPokemon`: Exposes CRUD operations for the **CaughtPokemon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaughtPokemon
    * const caughtPokemon = await prisma.caughtPokemon.findMany()
    * ```
    */
  get caughtPokemon(): Prisma.CaughtPokemonDelegate<ExtArgs>;

  /**
   * `prisma.gameSession`: Exposes CRUD operations for the **GameSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSessions
    * const gameSessions = await prisma.gameSession.findMany()
    * ```
    */
  get gameSession(): Prisma.GameSessionDelegate<ExtArgs>;

  /**
   * `prisma.dailyLog`: Exposes CRUD operations for the **DailyLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyLogs
    * const dailyLogs = await prisma.dailyLog.findMany()
    * ```
    */
  get dailyLog(): Prisma.DailyLogDelegate<ExtArgs>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs>;

  /**
   * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAchievements
    * const userAchievements = await prisma.userAchievement.findMany()
    * ```
    */
  get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    Pokemon: 'Pokemon',
    CaughtPokemon: 'CaughtPokemon',
    GameSession: 'GameSession',
    DailyLog: 'DailyLog',
    Achievement: 'Achievement',
    UserAchievement: 'UserAchievement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "pokemon" | "caughtPokemon" | "gameSession" | "dailyLog" | "achievement" | "userAchievement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pokemon: {
        payload: Prisma.$PokemonPayload<ExtArgs>
        fields: Prisma.PokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findFirst: {
            args: Prisma.PokemonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          findMany: {
            args: Prisma.PokemonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          create: {
            args: Prisma.PokemonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          createMany: {
            args: Prisma.PokemonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>[]
          }
          delete: {
            args: Prisma.PokemonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          update: {
            args: Prisma.PokemonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          deleteMany: {
            args: Prisma.PokemonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PokemonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonPayload>
          }
          aggregate: {
            args: Prisma.PokemonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemon>
          }
          groupBy: {
            args: Prisma.PokemonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonCountAggregateOutputType> | number
          }
        }
      }
      CaughtPokemon: {
        payload: Prisma.$CaughtPokemonPayload<ExtArgs>
        fields: Prisma.CaughtPokemonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaughtPokemonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaughtPokemonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload>
          }
          findFirst: {
            args: Prisma.CaughtPokemonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaughtPokemonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload>
          }
          findMany: {
            args: Prisma.CaughtPokemonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload>[]
          }
          create: {
            args: Prisma.CaughtPokemonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload>
          }
          createMany: {
            args: Prisma.CaughtPokemonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaughtPokemonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload>[]
          }
          delete: {
            args: Prisma.CaughtPokemonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload>
          }
          update: {
            args: Prisma.CaughtPokemonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload>
          }
          deleteMany: {
            args: Prisma.CaughtPokemonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaughtPokemonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CaughtPokemonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaughtPokemonPayload>
          }
          aggregate: {
            args: Prisma.CaughtPokemonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaughtPokemon>
          }
          groupBy: {
            args: Prisma.CaughtPokemonGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaughtPokemonGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaughtPokemonCountArgs<ExtArgs>
            result: $Utils.Optional<CaughtPokemonCountAggregateOutputType> | number
          }
        }
      }
      GameSession: {
        payload: Prisma.$GameSessionPayload<ExtArgs>
        fields: Prisma.GameSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findFirst: {
            args: Prisma.GameSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findMany: {
            args: Prisma.GameSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          create: {
            args: Prisma.GameSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          createMany: {
            args: Prisma.GameSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          delete: {
            args: Prisma.GameSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          update: {
            args: Prisma.GameSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          deleteMany: {
            args: Prisma.GameSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          aggregate: {
            args: Prisma.GameSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSession>
          }
          groupBy: {
            args: Prisma.GameSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSessionCountArgs<ExtArgs>
            result: $Utils.Optional<GameSessionCountAggregateOutputType> | number
          }
        }
      }
      DailyLog: {
        payload: Prisma.$DailyLogPayload<ExtArgs>
        fields: Prisma.DailyLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findFirst: {
            args: Prisma.DailyLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findMany: {
            args: Prisma.DailyLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          create: {
            args: Prisma.DailyLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          createMany: {
            args: Prisma.DailyLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          delete: {
            args: Prisma.DailyLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          update: {
            args: Prisma.DailyLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          deleteMany: {
            args: Prisma.DailyLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          aggregate: {
            args: Prisma.DailyLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyLog>
          }
          groupBy: {
            args: Prisma.DailyLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyLogCountArgs<ExtArgs>
            result: $Utils.Optional<DailyLogCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      UserAchievement: {
        payload: Prisma.$UserAchievementPayload<ExtArgs>
        fields: Prisma.UserAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findFirst: {
            args: Prisma.UserAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          findMany: {
            args: Prisma.UserAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          create: {
            args: Prisma.UserAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          createMany: {
            args: Prisma.UserAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>[]
          }
          delete: {
            args: Prisma.UserAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          update: {
            args: Prisma.UserAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          deleteMany: {
            args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAchievementPayload>
          }
          aggregate: {
            args: Prisma.UserAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAchievement>
          }
          groupBy: {
            args: Prisma.UserAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<UserAchievementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    caughtPokemon: number
    dailyLogs: number
    gameSessions: number
    achievements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caughtPokemon?: boolean | UserCountOutputTypeCountCaughtPokemonArgs
    dailyLogs?: boolean | UserCountOutputTypeCountDailyLogsArgs
    gameSessions?: boolean | UserCountOutputTypeCountGameSessionsArgs
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs
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
  export type UserCountOutputTypeCountCaughtPokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaughtPokemonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }


  /**
   * Count Type PokemonCountOutputType
   */

  export type PokemonCountOutputType = {
    caughtBy: number
    dailyLogs: number
    gameSessions: number
    dailyForUsers: number
  }

  export type PokemonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caughtBy?: boolean | PokemonCountOutputTypeCountCaughtByArgs
    dailyLogs?: boolean | PokemonCountOutputTypeCountDailyLogsArgs
    gameSessions?: boolean | PokemonCountOutputTypeCountGameSessionsArgs
    dailyForUsers?: boolean | PokemonCountOutputTypeCountDailyForUsersArgs
  }

  // Custom InputTypes
  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonCountOutputType
     */
    select?: PokemonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountCaughtByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaughtPokemonWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountDailyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountGameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }

  /**
   * PokemonCountOutputType without action
   */
  export type PokemonCountOutputTypeCountDailyForUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    unlockedBy: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unlockedBy?: boolean | AchievementCountOutputTypeCountUnlockedByArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountUnlockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    level: number | null
    experience: number | null
    pokeballs: number | null
    maxPokeballs: number | null
    dailyPokemonId: number | null
    dailyAttempts: number | null
    currentStreak: number | null
    maxStreak: number | null
    totalCatches: number | null
  }

  export type UserSumAggregateOutputType = {
    level: number | null
    experience: number | null
    pokeballs: number | null
    maxPokeballs: number | null
    dailyPokemonId: number | null
    dailyAttempts: number | null
    currentStreak: number | null
    maxStreak: number | null
    totalCatches: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    nickname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    level: number | null
    experience: number | null
    pokeballs: number | null
    maxPokeballs: number | null
    lastGameDate: Date | null
    dailyPokemonId: number | null
    dailyAttempts: number | null
    caughtToday: boolean | null
    currentStreak: number | null
    maxStreak: number | null
    totalCatches: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    nickname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    level: number | null
    experience: number | null
    pokeballs: number | null
    maxPokeballs: number | null
    lastGameDate: Date | null
    dailyPokemonId: number | null
    dailyAttempts: number | null
    caughtToday: boolean | null
    currentStreak: number | null
    maxStreak: number | null
    totalCatches: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    nickname: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    level: number
    experience: number
    pokeballs: number
    maxPokeballs: number
    lastGameDate: number
    dailyPokemonId: number
    dailyAttempts: number
    caughtToday: number
    currentStreak: number
    maxStreak: number
    totalCatches: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    level?: true
    experience?: true
    pokeballs?: true
    maxPokeballs?: true
    dailyPokemonId?: true
    dailyAttempts?: true
    currentStreak?: true
    maxStreak?: true
    totalCatches?: true
  }

  export type UserSumAggregateInputType = {
    level?: true
    experience?: true
    pokeballs?: true
    maxPokeballs?: true
    dailyPokemonId?: true
    dailyAttempts?: true
    currentStreak?: true
    maxStreak?: true
    totalCatches?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    nickname?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    level?: true
    experience?: true
    pokeballs?: true
    maxPokeballs?: true
    lastGameDate?: true
    dailyPokemonId?: true
    dailyAttempts?: true
    caughtToday?: true
    currentStreak?: true
    maxStreak?: true
    totalCatches?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    nickname?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    level?: true
    experience?: true
    pokeballs?: true
    maxPokeballs?: true
    lastGameDate?: true
    dailyPokemonId?: true
    dailyAttempts?: true
    caughtToday?: true
    currentStreak?: true
    maxStreak?: true
    totalCatches?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    nickname?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    level?: true
    experience?: true
    pokeballs?: true
    maxPokeballs?: true
    lastGameDate?: true
    dailyPokemonId?: true
    dailyAttempts?: true
    caughtToday?: true
    currentStreak?: true
    maxStreak?: true
    totalCatches?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    nickname: string | null
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    level: number
    experience: number
    pokeballs: number
    maxPokeballs: number
    lastGameDate: Date | null
    dailyPokemonId: number | null
    dailyAttempts: number
    caughtToday: boolean
    currentStreak: number
    maxStreak: number
    totalCatches: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    nickname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean
    experience?: boolean
    pokeballs?: boolean
    maxPokeballs?: boolean
    lastGameDate?: boolean
    dailyPokemonId?: boolean
    dailyAttempts?: boolean
    caughtToday?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    totalCatches?: boolean
    caughtPokemon?: boolean | User$caughtPokemonArgs<ExtArgs>
    dailyLogs?: boolean | User$dailyLogsArgs<ExtArgs>
    gameSessions?: boolean | User$gameSessionsArgs<ExtArgs>
    dailyPokemon?: boolean | User$dailyPokemonArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    nickname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean
    experience?: boolean
    pokeballs?: boolean
    maxPokeballs?: boolean
    lastGameDate?: boolean
    dailyPokemonId?: boolean
    dailyAttempts?: boolean
    caughtToday?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    totalCatches?: boolean
    dailyPokemon?: boolean | User$dailyPokemonArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    nickname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    level?: boolean
    experience?: boolean
    pokeballs?: boolean
    maxPokeballs?: boolean
    lastGameDate?: boolean
    dailyPokemonId?: boolean
    dailyAttempts?: boolean
    caughtToday?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    totalCatches?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caughtPokemon?: boolean | User$caughtPokemonArgs<ExtArgs>
    dailyLogs?: boolean | User$dailyLogsArgs<ExtArgs>
    gameSessions?: boolean | User$gameSessionsArgs<ExtArgs>
    dailyPokemon?: boolean | User$dailyPokemonArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPokemon?: boolean | User$dailyPokemonArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      caughtPokemon: Prisma.$CaughtPokemonPayload<ExtArgs>[]
      dailyLogs: Prisma.$DailyLogPayload<ExtArgs>[]
      gameSessions: Prisma.$GameSessionPayload<ExtArgs>[]
      dailyPokemon: Prisma.$PokemonPayload<ExtArgs> | null
      achievements: Prisma.$UserAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      nickname: string | null
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      level: number
      experience: number
      pokeballs: number
      maxPokeballs: number
      lastGameDate: Date | null
      dailyPokemonId: number | null
      dailyAttempts: number
      caughtToday: boolean
      currentStreak: number
      maxStreak: number
      totalCatches: number
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caughtPokemon<T extends User$caughtPokemonArgs<ExtArgs> = {}>(args?: Subset<T, User$caughtPokemonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "findMany"> | Null>
    dailyLogs<T extends User$dailyLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany"> | Null>
    gameSessions<T extends User$gameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$gameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany"> | Null>
    dailyPokemon<T extends User$dailyPokemonArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyPokemonArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    achievements<T extends User$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly level: FieldRef<"User", 'Int'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly pokeballs: FieldRef<"User", 'Int'>
    readonly maxPokeballs: FieldRef<"User", 'Int'>
    readonly lastGameDate: FieldRef<"User", 'DateTime'>
    readonly dailyPokemonId: FieldRef<"User", 'Int'>
    readonly dailyAttempts: FieldRef<"User", 'Int'>
    readonly caughtToday: FieldRef<"User", 'Boolean'>
    readonly currentStreak: FieldRef<"User", 'Int'>
    readonly maxStreak: FieldRef<"User", 'Int'>
    readonly totalCatches: FieldRef<"User", 'Int'>
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
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
   * User.caughtPokemon
   */
  export type User$caughtPokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    where?: CaughtPokemonWhereInput
    orderBy?: CaughtPokemonOrderByWithRelationInput | CaughtPokemonOrderByWithRelationInput[]
    cursor?: CaughtPokemonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaughtPokemonScalarFieldEnum | CaughtPokemonScalarFieldEnum[]
  }

  /**
   * User.dailyLogs
   */
  export type User$dailyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    cursor?: DailyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * User.gameSessions
   */
  export type User$gameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * User.dailyPokemon
   */
  export type User$dailyPokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    where?: PokemonWhereInput
  }

  /**
   * User.achievements
   */
  export type User$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
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
   * Model Pokemon
   */

  export type AggregatePokemon = {
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  export type PokemonAvgAggregateOutputType = {
    id: number | null
    height: number | null
    weight: number | null
    baseExperience: number | null
    captureRate: number | null
  }

  export type PokemonSumAggregateOutputType = {
    id: number | null
    height: number | null
    weight: number | null
    baseExperience: number | null
    captureRate: number | null
  }

  export type PokemonMinAggregateOutputType = {
    id: number | null
    name: string | null
    sprite: string | null
    spriteShiny: string | null
    height: number | null
    weight: number | null
    baseExperience: number | null
    isLegendary: boolean | null
    captureRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PokemonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sprite: string | null
    spriteShiny: string | null
    height: number | null
    weight: number | null
    baseExperience: number | null
    isLegendary: boolean | null
    captureRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PokemonCountAggregateOutputType = {
    id: number
    name: number
    sprite: number
    spriteShiny: number
    types: number
    height: number
    weight: number
    baseExperience: number
    isLegendary: number
    captureRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PokemonAvgAggregateInputType = {
    id?: true
    height?: true
    weight?: true
    baseExperience?: true
    captureRate?: true
  }

  export type PokemonSumAggregateInputType = {
    id?: true
    height?: true
    weight?: true
    baseExperience?: true
    captureRate?: true
  }

  export type PokemonMinAggregateInputType = {
    id?: true
    name?: true
    sprite?: true
    spriteShiny?: true
    height?: true
    weight?: true
    baseExperience?: true
    isLegendary?: true
    captureRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PokemonMaxAggregateInputType = {
    id?: true
    name?: true
    sprite?: true
    spriteShiny?: true
    height?: true
    weight?: true
    baseExperience?: true
    isLegendary?: true
    captureRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PokemonCountAggregateInputType = {
    id?: true
    name?: true
    sprite?: true
    spriteShiny?: true
    types?: true
    height?: true
    weight?: true
    baseExperience?: true
    isLegendary?: true
    captureRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to aggregate.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pokemon
    **/
    _count?: true | PokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonMaxAggregateInputType
  }

  export type GetPokemonAggregateType<T extends PokemonAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemon[P]>
      : GetScalarType<T[P], AggregatePokemon[P]>
  }




  export type PokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonWhereInput
    orderBy?: PokemonOrderByWithAggregationInput | PokemonOrderByWithAggregationInput[]
    by: PokemonScalarFieldEnum[] | PokemonScalarFieldEnum
    having?: PokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonCountAggregateInputType | true
    _avg?: PokemonAvgAggregateInputType
    _sum?: PokemonSumAggregateInputType
    _min?: PokemonMinAggregateInputType
    _max?: PokemonMaxAggregateInputType
  }

  export type PokemonGroupByOutputType = {
    id: number
    name: string
    sprite: string
    spriteShiny: string | null
    types: string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary: boolean
    captureRate: number | null
    createdAt: Date
    updatedAt: Date
    _count: PokemonCountAggregateOutputType | null
    _avg: PokemonAvgAggregateOutputType | null
    _sum: PokemonSumAggregateOutputType | null
    _min: PokemonMinAggregateOutputType | null
    _max: PokemonMaxAggregateOutputType | null
  }

  type GetPokemonGroupByPayload<T extends PokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonGroupByOutputType[P]>
        }
      >
    >


  export type PokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sprite?: boolean
    spriteShiny?: boolean
    types?: boolean
    height?: boolean
    weight?: boolean
    baseExperience?: boolean
    isLegendary?: boolean
    captureRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    caughtBy?: boolean | Pokemon$caughtByArgs<ExtArgs>
    dailyLogs?: boolean | Pokemon$dailyLogsArgs<ExtArgs>
    gameSessions?: boolean | Pokemon$gameSessionsArgs<ExtArgs>
    dailyForUsers?: boolean | Pokemon$dailyForUsersArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sprite?: boolean
    spriteShiny?: boolean
    types?: boolean
    height?: boolean
    weight?: boolean
    baseExperience?: boolean
    isLegendary?: boolean
    captureRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pokemon"]>

  export type PokemonSelectScalar = {
    id?: boolean
    name?: boolean
    sprite?: boolean
    spriteShiny?: boolean
    types?: boolean
    height?: boolean
    weight?: boolean
    baseExperience?: boolean
    isLegendary?: boolean
    captureRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caughtBy?: boolean | Pokemon$caughtByArgs<ExtArgs>
    dailyLogs?: boolean | Pokemon$dailyLogsArgs<ExtArgs>
    gameSessions?: boolean | Pokemon$gameSessionsArgs<ExtArgs>
    dailyForUsers?: boolean | Pokemon$dailyForUsersArgs<ExtArgs>
    _count?: boolean | PokemonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PokemonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pokemon"
    objects: {
      caughtBy: Prisma.$CaughtPokemonPayload<ExtArgs>[]
      dailyLogs: Prisma.$DailyLogPayload<ExtArgs>[]
      gameSessions: Prisma.$GameSessionPayload<ExtArgs>[]
      dailyForUsers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sprite: string
      spriteShiny: string | null
      types: string[]
      height: number
      weight: number
      baseExperience: number
      isLegendary: boolean
      captureRate: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pokemon"]>
    composites: {}
  }

  type PokemonGetPayload<S extends boolean | null | undefined | PokemonDefaultArgs> = $Result.GetResult<Prisma.$PokemonPayload, S>

  type PokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PokemonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PokemonCountAggregateInputType | true
    }

  export interface PokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pokemon'], meta: { name: 'Pokemon' } }
    /**
     * Find zero or one Pokemon that matches the filter.
     * @param {PokemonFindUniqueArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonFindUniqueArgs>(args: SelectSubset<T, PokemonFindUniqueArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pokemon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PokemonFindUniqueOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonFindFirstArgs>(args?: SelectSubset<T, PokemonFindFirstArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindFirstOrThrowArgs} args - Arguments to find a Pokemon
     * @example
     * // Get one Pokemon
     * const pokemon = await prisma.pokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pokemon
     * const pokemon = await prisma.pokemon.findMany()
     * 
     * // Get first 10 Pokemon
     * const pokemon = await prisma.pokemon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonFindManyArgs>(args?: SelectSubset<T, PokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pokemon.
     * @param {PokemonCreateArgs} args - Arguments to create a Pokemon.
     * @example
     * // Create one Pokemon
     * const Pokemon = await prisma.pokemon.create({
     *   data: {
     *     // ... data to create a Pokemon
     *   }
     * })
     * 
     */
    create<T extends PokemonCreateArgs>(args: SelectSubset<T, PokemonCreateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pokemon.
     * @param {PokemonCreateManyArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonCreateManyArgs>(args?: SelectSubset<T, PokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pokemon and returns the data saved in the database.
     * @param {PokemonCreateManyAndReturnArgs} args - Arguments to create many Pokemon.
     * @example
     * // Create many Pokemon
     * const pokemon = await prisma.pokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pokemon and only return the `id`
     * const pokemonWithIdOnly = await prisma.pokemon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pokemon.
     * @param {PokemonDeleteArgs} args - Arguments to delete one Pokemon.
     * @example
     * // Delete one Pokemon
     * const Pokemon = await prisma.pokemon.delete({
     *   where: {
     *     // ... filter to delete one Pokemon
     *   }
     * })
     * 
     */
    delete<T extends PokemonDeleteArgs>(args: SelectSubset<T, PokemonDeleteArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pokemon.
     * @param {PokemonUpdateArgs} args - Arguments to update one Pokemon.
     * @example
     * // Update one Pokemon
     * const pokemon = await prisma.pokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonUpdateArgs>(args: SelectSubset<T, PokemonUpdateArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pokemon.
     * @param {PokemonDeleteManyArgs} args - Arguments to filter Pokemon to delete.
     * @example
     * // Delete a few Pokemon
     * const { count } = await prisma.pokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonDeleteManyArgs>(args?: SelectSubset<T, PokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pokemon
     * const pokemon = await prisma.pokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonUpdateManyArgs>(args: SelectSubset<T, PokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pokemon.
     * @param {PokemonUpsertArgs} args - Arguments to update or create a Pokemon.
     * @example
     * // Update or create a Pokemon
     * const pokemon = await prisma.pokemon.upsert({
     *   create: {
     *     // ... data to create a Pokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pokemon we want to update
     *   }
     * })
     */
    upsert<T extends PokemonUpsertArgs>(args: SelectSubset<T, PokemonUpsertArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonCountArgs} args - Arguments to filter Pokemon to count.
     * @example
     * // Count the number of Pokemon
     * const count = await prisma.pokemon.count({
     *   where: {
     *     // ... the filter for the Pokemon we want to count
     *   }
     * })
    **/
    count<T extends PokemonCountArgs>(
      args?: Subset<T, PokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PokemonAggregateArgs>(args: Subset<T, PokemonAggregateArgs>): Prisma.PrismaPromise<GetPokemonAggregateType<T>>

    /**
     * Group by Pokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonGroupByArgs} args - Group by arguments.
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
      T extends PokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonGroupByArgs['orderBy'] }
        : { orderBy?: PokemonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pokemon model
   */
  readonly fields: PokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caughtBy<T extends Pokemon$caughtByArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$caughtByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "findMany"> | Null>
    dailyLogs<T extends Pokemon$dailyLogsArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$dailyLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany"> | Null>
    gameSessions<T extends Pokemon$gameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$gameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany"> | Null>
    dailyForUsers<T extends Pokemon$dailyForUsersArgs<ExtArgs> = {}>(args?: Subset<T, Pokemon$dailyForUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pokemon model
   */ 
  interface PokemonFieldRefs {
    readonly id: FieldRef<"Pokemon", 'Int'>
    readonly name: FieldRef<"Pokemon", 'String'>
    readonly sprite: FieldRef<"Pokemon", 'String'>
    readonly spriteShiny: FieldRef<"Pokemon", 'String'>
    readonly types: FieldRef<"Pokemon", 'String[]'>
    readonly height: FieldRef<"Pokemon", 'Int'>
    readonly weight: FieldRef<"Pokemon", 'Int'>
    readonly baseExperience: FieldRef<"Pokemon", 'Int'>
    readonly isLegendary: FieldRef<"Pokemon", 'Boolean'>
    readonly captureRate: FieldRef<"Pokemon", 'Int'>
    readonly createdAt: FieldRef<"Pokemon", 'DateTime'>
    readonly updatedAt: FieldRef<"Pokemon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pokemon findUnique
   */
  export type PokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findUniqueOrThrow
   */
  export type PokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon findFirst
   */
  export type PokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findFirstOrThrow
   */
  export type PokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pokemon.
     */
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon findMany
   */
  export type PokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter, which Pokemon to fetch.
     */
    where?: PokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pokemon to fetch.
     */
    orderBy?: PokemonOrderByWithRelationInput | PokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pokemon.
     */
    cursor?: PokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pokemon.
     */
    skip?: number
    distinct?: PokemonScalarFieldEnum | PokemonScalarFieldEnum[]
  }

  /**
   * Pokemon create
   */
  export type PokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a Pokemon.
     */
    data: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
  }

  /**
   * Pokemon createMany
   */
  export type PokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon createManyAndReturn
   */
  export type PokemonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pokemon.
     */
    data: PokemonCreateManyInput | PokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pokemon update
   */
  export type PokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a Pokemon.
     */
    data: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
    /**
     * Choose, which Pokemon to update.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon updateMany
   */
  export type PokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pokemon.
     */
    data: XOR<PokemonUpdateManyMutationInput, PokemonUncheckedUpdateManyInput>
    /**
     * Filter which Pokemon to update
     */
    where?: PokemonWhereInput
  }

  /**
   * Pokemon upsert
   */
  export type PokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the Pokemon to update in case it exists.
     */
    where: PokemonWhereUniqueInput
    /**
     * In case the Pokemon found by the `where` argument doesn't exist, create a new Pokemon with this data.
     */
    create: XOR<PokemonCreateInput, PokemonUncheckedCreateInput>
    /**
     * In case the Pokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonUpdateInput, PokemonUncheckedUpdateInput>
  }

  /**
   * Pokemon delete
   */
  export type PokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
    /**
     * Filter which Pokemon to delete.
     */
    where: PokemonWhereUniqueInput
  }

  /**
   * Pokemon deleteMany
   */
  export type PokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pokemon to delete
     */
    where?: PokemonWhereInput
  }

  /**
   * Pokemon.caughtBy
   */
  export type Pokemon$caughtByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    where?: CaughtPokemonWhereInput
    orderBy?: CaughtPokemonOrderByWithRelationInput | CaughtPokemonOrderByWithRelationInput[]
    cursor?: CaughtPokemonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaughtPokemonScalarFieldEnum | CaughtPokemonScalarFieldEnum[]
  }

  /**
   * Pokemon.dailyLogs
   */
  export type Pokemon$dailyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    cursor?: DailyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * Pokemon.gameSessions
   */
  export type Pokemon$gameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * Pokemon.dailyForUsers
   */
  export type Pokemon$dailyForUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Pokemon without action
   */
  export type PokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pokemon
     */
    select?: PokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PokemonInclude<ExtArgs> | null
  }


  /**
   * Model CaughtPokemon
   */

  export type AggregateCaughtPokemon = {
    _count: CaughtPokemonCountAggregateOutputType | null
    _avg: CaughtPokemonAvgAggregateOutputType | null
    _sum: CaughtPokemonSumAggregateOutputType | null
    _min: CaughtPokemonMinAggregateOutputType | null
    _max: CaughtPokemonMaxAggregateOutputType | null
  }

  export type CaughtPokemonAvgAggregateOutputType = {
    pokemonId: number | null
    experience: number | null
  }

  export type CaughtPokemonSumAggregateOutputType = {
    pokemonId: number | null
    experience: number | null
  }

  export type CaughtPokemonMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pokemonId: number | null
    caughtAt: Date | null
    critical: boolean | null
    experience: number | null
  }

  export type CaughtPokemonMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pokemonId: number | null
    caughtAt: Date | null
    critical: boolean | null
    experience: number | null
  }

  export type CaughtPokemonCountAggregateOutputType = {
    id: number
    userId: number
    pokemonId: number
    caughtAt: number
    critical: number
    experience: number
    _all: number
  }


  export type CaughtPokemonAvgAggregateInputType = {
    pokemonId?: true
    experience?: true
  }

  export type CaughtPokemonSumAggregateInputType = {
    pokemonId?: true
    experience?: true
  }

  export type CaughtPokemonMinAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    caughtAt?: true
    critical?: true
    experience?: true
  }

  export type CaughtPokemonMaxAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    caughtAt?: true
    critical?: true
    experience?: true
  }

  export type CaughtPokemonCountAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    caughtAt?: true
    critical?: true
    experience?: true
    _all?: true
  }

  export type CaughtPokemonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaughtPokemon to aggregate.
     */
    where?: CaughtPokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaughtPokemon to fetch.
     */
    orderBy?: CaughtPokemonOrderByWithRelationInput | CaughtPokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaughtPokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaughtPokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaughtPokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaughtPokemon
    **/
    _count?: true | CaughtPokemonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaughtPokemonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaughtPokemonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaughtPokemonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaughtPokemonMaxAggregateInputType
  }

  export type GetCaughtPokemonAggregateType<T extends CaughtPokemonAggregateArgs> = {
        [P in keyof T & keyof AggregateCaughtPokemon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaughtPokemon[P]>
      : GetScalarType<T[P], AggregateCaughtPokemon[P]>
  }




  export type CaughtPokemonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaughtPokemonWhereInput
    orderBy?: CaughtPokemonOrderByWithAggregationInput | CaughtPokemonOrderByWithAggregationInput[]
    by: CaughtPokemonScalarFieldEnum[] | CaughtPokemonScalarFieldEnum
    having?: CaughtPokemonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaughtPokemonCountAggregateInputType | true
    _avg?: CaughtPokemonAvgAggregateInputType
    _sum?: CaughtPokemonSumAggregateInputType
    _min?: CaughtPokemonMinAggregateInputType
    _max?: CaughtPokemonMaxAggregateInputType
  }

  export type CaughtPokemonGroupByOutputType = {
    id: string
    userId: string
    pokemonId: number
    caughtAt: Date
    critical: boolean
    experience: number
    _count: CaughtPokemonCountAggregateOutputType | null
    _avg: CaughtPokemonAvgAggregateOutputType | null
    _sum: CaughtPokemonSumAggregateOutputType | null
    _min: CaughtPokemonMinAggregateOutputType | null
    _max: CaughtPokemonMaxAggregateOutputType | null
  }

  type GetCaughtPokemonGroupByPayload<T extends CaughtPokemonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaughtPokemonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaughtPokemonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaughtPokemonGroupByOutputType[P]>
            : GetScalarType<T[P], CaughtPokemonGroupByOutputType[P]>
        }
      >
    >


  export type CaughtPokemonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pokemonId?: boolean
    caughtAt?: boolean
    critical?: boolean
    experience?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caughtPokemon"]>

  export type CaughtPokemonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pokemonId?: boolean
    caughtAt?: boolean
    critical?: boolean
    experience?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caughtPokemon"]>

  export type CaughtPokemonSelectScalar = {
    id?: boolean
    userId?: boolean
    pokemonId?: boolean
    caughtAt?: boolean
    critical?: boolean
    experience?: boolean
  }

  export type CaughtPokemonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CaughtPokemonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CaughtPokemonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaughtPokemon"
    objects: {
      pokemon: Prisma.$PokemonPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pokemonId: number
      caughtAt: Date
      critical: boolean
      experience: number
    }, ExtArgs["result"]["caughtPokemon"]>
    composites: {}
  }

  type CaughtPokemonGetPayload<S extends boolean | null | undefined | CaughtPokemonDefaultArgs> = $Result.GetResult<Prisma.$CaughtPokemonPayload, S>

  type CaughtPokemonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CaughtPokemonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CaughtPokemonCountAggregateInputType | true
    }

  export interface CaughtPokemonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaughtPokemon'], meta: { name: 'CaughtPokemon' } }
    /**
     * Find zero or one CaughtPokemon that matches the filter.
     * @param {CaughtPokemonFindUniqueArgs} args - Arguments to find a CaughtPokemon
     * @example
     * // Get one CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaughtPokemonFindUniqueArgs>(args: SelectSubset<T, CaughtPokemonFindUniqueArgs<ExtArgs>>): Prisma__CaughtPokemonClient<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CaughtPokemon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CaughtPokemonFindUniqueOrThrowArgs} args - Arguments to find a CaughtPokemon
     * @example
     * // Get one CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaughtPokemonFindUniqueOrThrowArgs>(args: SelectSubset<T, CaughtPokemonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaughtPokemonClient<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CaughtPokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaughtPokemonFindFirstArgs} args - Arguments to find a CaughtPokemon
     * @example
     * // Get one CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaughtPokemonFindFirstArgs>(args?: SelectSubset<T, CaughtPokemonFindFirstArgs<ExtArgs>>): Prisma__CaughtPokemonClient<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CaughtPokemon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaughtPokemonFindFirstOrThrowArgs} args - Arguments to find a CaughtPokemon
     * @example
     * // Get one CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaughtPokemonFindFirstOrThrowArgs>(args?: SelectSubset<T, CaughtPokemonFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaughtPokemonClient<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CaughtPokemon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaughtPokemonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.findMany()
     * 
     * // Get first 10 CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caughtPokemonWithIdOnly = await prisma.caughtPokemon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaughtPokemonFindManyArgs>(args?: SelectSubset<T, CaughtPokemonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CaughtPokemon.
     * @param {CaughtPokemonCreateArgs} args - Arguments to create a CaughtPokemon.
     * @example
     * // Create one CaughtPokemon
     * const CaughtPokemon = await prisma.caughtPokemon.create({
     *   data: {
     *     // ... data to create a CaughtPokemon
     *   }
     * })
     * 
     */
    create<T extends CaughtPokemonCreateArgs>(args: SelectSubset<T, CaughtPokemonCreateArgs<ExtArgs>>): Prisma__CaughtPokemonClient<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CaughtPokemon.
     * @param {CaughtPokemonCreateManyArgs} args - Arguments to create many CaughtPokemon.
     * @example
     * // Create many CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaughtPokemonCreateManyArgs>(args?: SelectSubset<T, CaughtPokemonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaughtPokemon and returns the data saved in the database.
     * @param {CaughtPokemonCreateManyAndReturnArgs} args - Arguments to create many CaughtPokemon.
     * @example
     * // Create many CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaughtPokemon and only return the `id`
     * const caughtPokemonWithIdOnly = await prisma.caughtPokemon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaughtPokemonCreateManyAndReturnArgs>(args?: SelectSubset<T, CaughtPokemonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CaughtPokemon.
     * @param {CaughtPokemonDeleteArgs} args - Arguments to delete one CaughtPokemon.
     * @example
     * // Delete one CaughtPokemon
     * const CaughtPokemon = await prisma.caughtPokemon.delete({
     *   where: {
     *     // ... filter to delete one CaughtPokemon
     *   }
     * })
     * 
     */
    delete<T extends CaughtPokemonDeleteArgs>(args: SelectSubset<T, CaughtPokemonDeleteArgs<ExtArgs>>): Prisma__CaughtPokemonClient<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CaughtPokemon.
     * @param {CaughtPokemonUpdateArgs} args - Arguments to update one CaughtPokemon.
     * @example
     * // Update one CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaughtPokemonUpdateArgs>(args: SelectSubset<T, CaughtPokemonUpdateArgs<ExtArgs>>): Prisma__CaughtPokemonClient<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CaughtPokemon.
     * @param {CaughtPokemonDeleteManyArgs} args - Arguments to filter CaughtPokemon to delete.
     * @example
     * // Delete a few CaughtPokemon
     * const { count } = await prisma.caughtPokemon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaughtPokemonDeleteManyArgs>(args?: SelectSubset<T, CaughtPokemonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaughtPokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaughtPokemonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaughtPokemonUpdateManyArgs>(args: SelectSubset<T, CaughtPokemonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CaughtPokemon.
     * @param {CaughtPokemonUpsertArgs} args - Arguments to update or create a CaughtPokemon.
     * @example
     * // Update or create a CaughtPokemon
     * const caughtPokemon = await prisma.caughtPokemon.upsert({
     *   create: {
     *     // ... data to create a CaughtPokemon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaughtPokemon we want to update
     *   }
     * })
     */
    upsert<T extends CaughtPokemonUpsertArgs>(args: SelectSubset<T, CaughtPokemonUpsertArgs<ExtArgs>>): Prisma__CaughtPokemonClient<$Result.GetResult<Prisma.$CaughtPokemonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CaughtPokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaughtPokemonCountArgs} args - Arguments to filter CaughtPokemon to count.
     * @example
     * // Count the number of CaughtPokemon
     * const count = await prisma.caughtPokemon.count({
     *   where: {
     *     // ... the filter for the CaughtPokemon we want to count
     *   }
     * })
    **/
    count<T extends CaughtPokemonCountArgs>(
      args?: Subset<T, CaughtPokemonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaughtPokemonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaughtPokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaughtPokemonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaughtPokemonAggregateArgs>(args: Subset<T, CaughtPokemonAggregateArgs>): Prisma.PrismaPromise<GetCaughtPokemonAggregateType<T>>

    /**
     * Group by CaughtPokemon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaughtPokemonGroupByArgs} args - Group by arguments.
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
      T extends CaughtPokemonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaughtPokemonGroupByArgs['orderBy'] }
        : { orderBy?: CaughtPokemonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaughtPokemonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaughtPokemonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaughtPokemon model
   */
  readonly fields: CaughtPokemonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaughtPokemon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaughtPokemonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CaughtPokemon model
   */ 
  interface CaughtPokemonFieldRefs {
    readonly id: FieldRef<"CaughtPokemon", 'String'>
    readonly userId: FieldRef<"CaughtPokemon", 'String'>
    readonly pokemonId: FieldRef<"CaughtPokemon", 'Int'>
    readonly caughtAt: FieldRef<"CaughtPokemon", 'DateTime'>
    readonly critical: FieldRef<"CaughtPokemon", 'Boolean'>
    readonly experience: FieldRef<"CaughtPokemon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CaughtPokemon findUnique
   */
  export type CaughtPokemonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    /**
     * Filter, which CaughtPokemon to fetch.
     */
    where: CaughtPokemonWhereUniqueInput
  }

  /**
   * CaughtPokemon findUniqueOrThrow
   */
  export type CaughtPokemonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    /**
     * Filter, which CaughtPokemon to fetch.
     */
    where: CaughtPokemonWhereUniqueInput
  }

  /**
   * CaughtPokemon findFirst
   */
  export type CaughtPokemonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    /**
     * Filter, which CaughtPokemon to fetch.
     */
    where?: CaughtPokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaughtPokemon to fetch.
     */
    orderBy?: CaughtPokemonOrderByWithRelationInput | CaughtPokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaughtPokemon.
     */
    cursor?: CaughtPokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaughtPokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaughtPokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaughtPokemon.
     */
    distinct?: CaughtPokemonScalarFieldEnum | CaughtPokemonScalarFieldEnum[]
  }

  /**
   * CaughtPokemon findFirstOrThrow
   */
  export type CaughtPokemonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    /**
     * Filter, which CaughtPokemon to fetch.
     */
    where?: CaughtPokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaughtPokemon to fetch.
     */
    orderBy?: CaughtPokemonOrderByWithRelationInput | CaughtPokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaughtPokemon.
     */
    cursor?: CaughtPokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaughtPokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaughtPokemon.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaughtPokemon.
     */
    distinct?: CaughtPokemonScalarFieldEnum | CaughtPokemonScalarFieldEnum[]
  }

  /**
   * CaughtPokemon findMany
   */
  export type CaughtPokemonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    /**
     * Filter, which CaughtPokemon to fetch.
     */
    where?: CaughtPokemonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaughtPokemon to fetch.
     */
    orderBy?: CaughtPokemonOrderByWithRelationInput | CaughtPokemonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaughtPokemon.
     */
    cursor?: CaughtPokemonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaughtPokemon from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaughtPokemon.
     */
    skip?: number
    distinct?: CaughtPokemonScalarFieldEnum | CaughtPokemonScalarFieldEnum[]
  }

  /**
   * CaughtPokemon create
   */
  export type CaughtPokemonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    /**
     * The data needed to create a CaughtPokemon.
     */
    data: XOR<CaughtPokemonCreateInput, CaughtPokemonUncheckedCreateInput>
  }

  /**
   * CaughtPokemon createMany
   */
  export type CaughtPokemonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaughtPokemon.
     */
    data: CaughtPokemonCreateManyInput | CaughtPokemonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaughtPokemon createManyAndReturn
   */
  export type CaughtPokemonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CaughtPokemon.
     */
    data: CaughtPokemonCreateManyInput | CaughtPokemonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaughtPokemon update
   */
  export type CaughtPokemonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    /**
     * The data needed to update a CaughtPokemon.
     */
    data: XOR<CaughtPokemonUpdateInput, CaughtPokemonUncheckedUpdateInput>
    /**
     * Choose, which CaughtPokemon to update.
     */
    where: CaughtPokemonWhereUniqueInput
  }

  /**
   * CaughtPokemon updateMany
   */
  export type CaughtPokemonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaughtPokemon.
     */
    data: XOR<CaughtPokemonUpdateManyMutationInput, CaughtPokemonUncheckedUpdateManyInput>
    /**
     * Filter which CaughtPokemon to update
     */
    where?: CaughtPokemonWhereInput
  }

  /**
   * CaughtPokemon upsert
   */
  export type CaughtPokemonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    /**
     * The filter to search for the CaughtPokemon to update in case it exists.
     */
    where: CaughtPokemonWhereUniqueInput
    /**
     * In case the CaughtPokemon found by the `where` argument doesn't exist, create a new CaughtPokemon with this data.
     */
    create: XOR<CaughtPokemonCreateInput, CaughtPokemonUncheckedCreateInput>
    /**
     * In case the CaughtPokemon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaughtPokemonUpdateInput, CaughtPokemonUncheckedUpdateInput>
  }

  /**
   * CaughtPokemon delete
   */
  export type CaughtPokemonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
    /**
     * Filter which CaughtPokemon to delete.
     */
    where: CaughtPokemonWhereUniqueInput
  }

  /**
   * CaughtPokemon deleteMany
   */
  export type CaughtPokemonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaughtPokemon to delete
     */
    where?: CaughtPokemonWhereInput
  }

  /**
   * CaughtPokemon without action
   */
  export type CaughtPokemonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaughtPokemon
     */
    select?: CaughtPokemonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaughtPokemonInclude<ExtArgs> | null
  }


  /**
   * Model GameSession
   */

  export type AggregateGameSession = {
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  export type GameSessionAvgAggregateOutputType = {
    pokemonId: number | null
    attempts: number | null
    pokeballsUsed: number | null
  }

  export type GameSessionSumAggregateOutputType = {
    pokemonId: number | null
    attempts: number | null
    pokeballsUsed: number | null
  }

  export type GameSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pokemonId: number | null
    startedAt: Date | null
    endedAt: Date | null
    attempts: number | null
    pokeballsUsed: number | null
    success: boolean | null
  }

  export type GameSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pokemonId: number | null
    startedAt: Date | null
    endedAt: Date | null
    attempts: number | null
    pokeballsUsed: number | null
    success: boolean | null
  }

  export type GameSessionCountAggregateOutputType = {
    id: number
    userId: number
    pokemonId: number
    startedAt: number
    endedAt: number
    attempts: number
    pokeballsUsed: number
    success: number
    _all: number
  }


  export type GameSessionAvgAggregateInputType = {
    pokemonId?: true
    attempts?: true
    pokeballsUsed?: true
  }

  export type GameSessionSumAggregateInputType = {
    pokemonId?: true
    attempts?: true
    pokeballsUsed?: true
  }

  export type GameSessionMinAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    startedAt?: true
    endedAt?: true
    attempts?: true
    pokeballsUsed?: true
    success?: true
  }

  export type GameSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    startedAt?: true
    endedAt?: true
    attempts?: true
    pokeballsUsed?: true
    success?: true
  }

  export type GameSessionCountAggregateInputType = {
    id?: true
    userId?: true
    pokemonId?: true
    startedAt?: true
    endedAt?: true
    attempts?: true
    pokeballsUsed?: true
    success?: true
    _all?: true
  }

  export type GameSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSession to aggregate.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSessions
    **/
    _count?: true | GameSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSessionMaxAggregateInputType
  }

  export type GetGameSessionAggregateType<T extends GameSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSession[P]>
      : GetScalarType<T[P], AggregateGameSession[P]>
  }




  export type GameSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithAggregationInput | GameSessionOrderByWithAggregationInput[]
    by: GameSessionScalarFieldEnum[] | GameSessionScalarFieldEnum
    having?: GameSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSessionCountAggregateInputType | true
    _avg?: GameSessionAvgAggregateInputType
    _sum?: GameSessionSumAggregateInputType
    _min?: GameSessionMinAggregateInputType
    _max?: GameSessionMaxAggregateInputType
  }

  export type GameSessionGroupByOutputType = {
    id: string
    userId: string
    pokemonId: number
    startedAt: Date
    endedAt: Date | null
    attempts: number
    pokeballsUsed: number
    success: boolean
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  type GetGameSessionGroupByPayload<T extends GameSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
        }
      >
    >


  export type GameSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pokemonId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    attempts?: boolean
    pokeballsUsed?: boolean
    success?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pokemonId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    attempts?: boolean
    pokeballsUsed?: boolean
    success?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    pokemonId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    attempts?: boolean
    pokeballsUsed?: boolean
    success?: boolean
  }

  export type GameSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameSession"
    objects: {
      pokemon: Prisma.$PokemonPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pokemonId: number
      startedAt: Date
      endedAt: Date | null
      attempts: number
      pokeballsUsed: number
      success: boolean
    }, ExtArgs["result"]["gameSession"]>
    composites: {}
  }

  type GameSessionGetPayload<S extends boolean | null | undefined | GameSessionDefaultArgs> = $Result.GetResult<Prisma.$GameSessionPayload, S>

  type GameSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GameSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GameSessionCountAggregateInputType | true
    }

  export interface GameSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSession'], meta: { name: 'GameSession' } }
    /**
     * Find zero or one GameSession that matches the filter.
     * @param {GameSessionFindUniqueArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameSessionFindUniqueArgs>(args: SelectSubset<T, GameSessionFindUniqueArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GameSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GameSessionFindUniqueOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GameSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameSessionFindFirstArgs>(args?: SelectSubset<T, GameSessionFindFirstArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GameSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSessions
     * const gameSessions = await prisma.gameSession.findMany()
     * 
     * // Get first 10 GameSessions
     * const gameSessions = await prisma.gameSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameSessionFindManyArgs>(args?: SelectSubset<T, GameSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GameSession.
     * @param {GameSessionCreateArgs} args - Arguments to create a GameSession.
     * @example
     * // Create one GameSession
     * const GameSession = await prisma.gameSession.create({
     *   data: {
     *     // ... data to create a GameSession
     *   }
     * })
     * 
     */
    create<T extends GameSessionCreateArgs>(args: SelectSubset<T, GameSessionCreateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GameSessions.
     * @param {GameSessionCreateManyArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSession = await prisma.gameSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameSessionCreateManyArgs>(args?: SelectSubset<T, GameSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameSessions and returns the data saved in the database.
     * @param {GameSessionCreateManyAndReturnArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSession = await prisma.gameSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameSessions and only return the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GameSession.
     * @param {GameSessionDeleteArgs} args - Arguments to delete one GameSession.
     * @example
     * // Delete one GameSession
     * const GameSession = await prisma.gameSession.delete({
     *   where: {
     *     // ... filter to delete one GameSession
     *   }
     * })
     * 
     */
    delete<T extends GameSessionDeleteArgs>(args: SelectSubset<T, GameSessionDeleteArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GameSession.
     * @param {GameSessionUpdateArgs} args - Arguments to update one GameSession.
     * @example
     * // Update one GameSession
     * const gameSession = await prisma.gameSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameSessionUpdateArgs>(args: SelectSubset<T, GameSessionUpdateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GameSessions.
     * @param {GameSessionDeleteManyArgs} args - Arguments to filter GameSessions to delete.
     * @example
     * // Delete a few GameSessions
     * const { count } = await prisma.gameSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameSessionDeleteManyArgs>(args?: SelectSubset<T, GameSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSessions
     * const gameSession = await prisma.gameSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameSessionUpdateManyArgs>(args: SelectSubset<T, GameSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameSession.
     * @param {GameSessionUpsertArgs} args - Arguments to update or create a GameSession.
     * @example
     * // Update or create a GameSession
     * const gameSession = await prisma.gameSession.upsert({
     *   create: {
     *     // ... data to create a GameSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSession we want to update
     *   }
     * })
     */
    upsert<T extends GameSessionUpsertArgs>(args: SelectSubset<T, GameSessionUpsertArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionCountArgs} args - Arguments to filter GameSessions to count.
     * @example
     * // Count the number of GameSessions
     * const count = await prisma.gameSession.count({
     *   where: {
     *     // ... the filter for the GameSessions we want to count
     *   }
     * })
    **/
    count<T extends GameSessionCountArgs>(
      args?: Subset<T, GameSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameSessionAggregateArgs>(args: Subset<T, GameSessionAggregateArgs>): Prisma.PrismaPromise<GetGameSessionAggregateType<T>>

    /**
     * Group by GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionGroupByArgs} args - Group by arguments.
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
      T extends GameSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSessionGroupByArgs['orderBy'] }
        : { orderBy?: GameSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSession model
   */
  readonly fields: GameSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameSession model
   */ 
  interface GameSessionFieldRefs {
    readonly id: FieldRef<"GameSession", 'String'>
    readonly userId: FieldRef<"GameSession", 'String'>
    readonly pokemonId: FieldRef<"GameSession", 'Int'>
    readonly startedAt: FieldRef<"GameSession", 'DateTime'>
    readonly endedAt: FieldRef<"GameSession", 'DateTime'>
    readonly attempts: FieldRef<"GameSession", 'Int'>
    readonly pokeballsUsed: FieldRef<"GameSession", 'Int'>
    readonly success: FieldRef<"GameSession", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GameSession findUnique
   */
  export type GameSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findUniqueOrThrow
   */
  export type GameSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findFirst
   */
  export type GameSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findFirstOrThrow
   */
  export type GameSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findMany
   */
  export type GameSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSessions to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession create
   */
  export type GameSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameSession.
     */
    data: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
  }

  /**
   * GameSession createMany
   */
  export type GameSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameSession createManyAndReturn
   */
  export type GameSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSession update
   */
  export type GameSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameSession.
     */
    data: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
    /**
     * Choose, which GameSession to update.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession updateMany
   */
  export type GameSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSessions.
     */
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyInput>
    /**
     * Filter which GameSessions to update
     */
    where?: GameSessionWhereInput
  }

  /**
   * GameSession upsert
   */
  export type GameSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameSession to update in case it exists.
     */
    where: GameSessionWhereUniqueInput
    /**
     * In case the GameSession found by the `where` argument doesn't exist, create a new GameSession with this data.
     */
    create: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
    /**
     * In case the GameSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
  }

  /**
   * GameSession delete
   */
  export type GameSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter which GameSession to delete.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession deleteMany
   */
  export type GameSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSessions to delete
     */
    where?: GameSessionWhereInput
  }

  /**
   * GameSession without action
   */
  export type GameSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
  }


  /**
   * Model DailyLog
   */

  export type AggregateDailyLog = {
    _count: DailyLogCountAggregateOutputType | null
    _avg: DailyLogAvgAggregateOutputType | null
    _sum: DailyLogSumAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  export type DailyLogAvgAggregateOutputType = {
    pokemonId: number | null
    attempts: number | null
    pokeballsLeft: number | null
  }

  export type DailyLogSumAggregateOutputType = {
    pokemonId: number | null
    attempts: number | null
    pokeballsLeft: number | null
  }

  export type DailyLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    pokemonId: number | null
    attempts: number | null
    caught: boolean | null
    pokeballsLeft: number | null
  }

  export type DailyLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    pokemonId: number | null
    attempts: number | null
    caught: boolean | null
    pokeballsLeft: number | null
  }

  export type DailyLogCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    pokemonId: number
    attempts: number
    caught: number
    pokeballsLeft: number
    _all: number
  }


  export type DailyLogAvgAggregateInputType = {
    pokemonId?: true
    attempts?: true
    pokeballsLeft?: true
  }

  export type DailyLogSumAggregateInputType = {
    pokemonId?: true
    attempts?: true
    pokeballsLeft?: true
  }

  export type DailyLogMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    pokemonId?: true
    attempts?: true
    caught?: true
    pokeballsLeft?: true
  }

  export type DailyLogMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    pokemonId?: true
    attempts?: true
    caught?: true
    pokeballsLeft?: true
  }

  export type DailyLogCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    pokemonId?: true
    attempts?: true
    caught?: true
    pokeballsLeft?: true
    _all?: true
  }

  export type DailyLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLog to aggregate.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyLogs
    **/
    _count?: true | DailyLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyLogMaxAggregateInputType
  }

  export type GetDailyLogAggregateType<T extends DailyLogAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyLog[P]>
      : GetScalarType<T[P], AggregateDailyLog[P]>
  }




  export type DailyLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithAggregationInput | DailyLogOrderByWithAggregationInput[]
    by: DailyLogScalarFieldEnum[] | DailyLogScalarFieldEnum
    having?: DailyLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyLogCountAggregateInputType | true
    _avg?: DailyLogAvgAggregateInputType
    _sum?: DailyLogSumAggregateInputType
    _min?: DailyLogMinAggregateInputType
    _max?: DailyLogMaxAggregateInputType
  }

  export type DailyLogGroupByOutputType = {
    id: string
    userId: string
    date: Date
    pokemonId: number
    attempts: number
    caught: boolean
    pokeballsLeft: number
    _count: DailyLogCountAggregateOutputType | null
    _avg: DailyLogAvgAggregateOutputType | null
    _sum: DailyLogSumAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  type GetDailyLogGroupByPayload<T extends DailyLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
            : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
        }
      >
    >


  export type DailyLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    pokemonId?: boolean
    attempts?: boolean
    caught?: boolean
    pokeballsLeft?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    pokemonId?: boolean
    attempts?: boolean
    caught?: boolean
    pokeballsLeft?: boolean
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    pokemonId?: boolean
    attempts?: boolean
    caught?: boolean
    pokeballsLeft?: boolean
  }

  export type DailyLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pokemon?: boolean | PokemonDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyLog"
    objects: {
      pokemon: Prisma.$PokemonPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      pokemonId: number
      attempts: number
      caught: boolean
      pokeballsLeft: number
    }, ExtArgs["result"]["dailyLog"]>
    composites: {}
  }

  type DailyLogGetPayload<S extends boolean | null | undefined | DailyLogDefaultArgs> = $Result.GetResult<Prisma.$DailyLogPayload, S>

  type DailyLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyLogCountAggregateInputType | true
    }

  export interface DailyLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyLog'], meta: { name: 'DailyLog' } }
    /**
     * Find zero or one DailyLog that matches the filter.
     * @param {DailyLogFindUniqueArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyLogFindUniqueArgs>(args: SelectSubset<T, DailyLogFindUniqueArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyLogFindUniqueOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyLogFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyLogFindFirstArgs>(args?: SelectSubset<T, DailyLogFindFirstArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyLogFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany()
     * 
     * // Get first 10 DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyLogFindManyArgs>(args?: SelectSubset<T, DailyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyLog.
     * @param {DailyLogCreateArgs} args - Arguments to create a DailyLog.
     * @example
     * // Create one DailyLog
     * const DailyLog = await prisma.dailyLog.create({
     *   data: {
     *     // ... data to create a DailyLog
     *   }
     * })
     * 
     */
    create<T extends DailyLogCreateArgs>(args: SelectSubset<T, DailyLogCreateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyLogs.
     * @param {DailyLogCreateManyArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyLogCreateManyArgs>(args?: SelectSubset<T, DailyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyLogs and returns the data saved in the database.
     * @param {DailyLogCreateManyAndReturnArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyLogs and only return the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyLogCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyLog.
     * @param {DailyLogDeleteArgs} args - Arguments to delete one DailyLog.
     * @example
     * // Delete one DailyLog
     * const DailyLog = await prisma.dailyLog.delete({
     *   where: {
     *     // ... filter to delete one DailyLog
     *   }
     * })
     * 
     */
    delete<T extends DailyLogDeleteArgs>(args: SelectSubset<T, DailyLogDeleteArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyLog.
     * @param {DailyLogUpdateArgs} args - Arguments to update one DailyLog.
     * @example
     * // Update one DailyLog
     * const dailyLog = await prisma.dailyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyLogUpdateArgs>(args: SelectSubset<T, DailyLogUpdateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyLogs.
     * @param {DailyLogDeleteManyArgs} args - Arguments to filter DailyLogs to delete.
     * @example
     * // Delete a few DailyLogs
     * const { count } = await prisma.dailyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyLogDeleteManyArgs>(args?: SelectSubset<T, DailyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyLogs
     * const dailyLog = await prisma.dailyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyLogUpdateManyArgs>(args: SelectSubset<T, DailyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyLog.
     * @param {DailyLogUpsertArgs} args - Arguments to update or create a DailyLog.
     * @example
     * // Update or create a DailyLog
     * const dailyLog = await prisma.dailyLog.upsert({
     *   create: {
     *     // ... data to create a DailyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyLog we want to update
     *   }
     * })
     */
    upsert<T extends DailyLogUpsertArgs>(args: SelectSubset<T, DailyLogUpsertArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogCountArgs} args - Arguments to filter DailyLogs to count.
     * @example
     * // Count the number of DailyLogs
     * const count = await prisma.dailyLog.count({
     *   where: {
     *     // ... the filter for the DailyLogs we want to count
     *   }
     * })
    **/
    count<T extends DailyLogCountArgs>(
      args?: Subset<T, DailyLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyLogAggregateArgs>(args: Subset<T, DailyLogAggregateArgs>): Prisma.PrismaPromise<GetDailyLogAggregateType<T>>

    /**
     * Group by DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogGroupByArgs} args - Group by arguments.
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
      T extends DailyLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyLogGroupByArgs['orderBy'] }
        : { orderBy?: DailyLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyLog model
   */
  readonly fields: DailyLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pokemon<T extends PokemonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PokemonDefaultArgs<ExtArgs>>): Prisma__PokemonClient<$Result.GetResult<Prisma.$PokemonPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyLog model
   */ 
  interface DailyLogFieldRefs {
    readonly id: FieldRef<"DailyLog", 'String'>
    readonly userId: FieldRef<"DailyLog", 'String'>
    readonly date: FieldRef<"DailyLog", 'DateTime'>
    readonly pokemonId: FieldRef<"DailyLog", 'Int'>
    readonly attempts: FieldRef<"DailyLog", 'Int'>
    readonly caught: FieldRef<"DailyLog", 'Boolean'>
    readonly pokeballsLeft: FieldRef<"DailyLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyLog findUnique
   */
  export type DailyLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findUniqueOrThrow
   */
  export type DailyLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findFirst
   */
  export type DailyLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findFirstOrThrow
   */
  export type DailyLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findMany
   */
  export type DailyLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLogs to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog create
   */
  export type DailyLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyLog.
     */
    data: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
  }

  /**
   * DailyLog createMany
   */
  export type DailyLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyLog createManyAndReturn
   */
  export type DailyLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyLog update
   */
  export type DailyLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyLog.
     */
    data: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
    /**
     * Choose, which DailyLog to update.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog updateMany
   */
  export type DailyLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyLogs.
     */
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyInput>
    /**
     * Filter which DailyLogs to update
     */
    where?: DailyLogWhereInput
  }

  /**
   * DailyLog upsert
   */
  export type DailyLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyLog to update in case it exists.
     */
    where: DailyLogWhereUniqueInput
    /**
     * In case the DailyLog found by the `where` argument doesn't exist, create a new DailyLog with this data.
     */
    create: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
    /**
     * In case the DailyLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
  }

  /**
   * DailyLog delete
   */
  export type DailyLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter which DailyLog to delete.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog deleteMany
   */
  export type DailyLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLogs to delete
     */
    where?: DailyLogWhereInput
  }

  /**
   * DailyLog without action
   */
  export type DailyLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    condition: string | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    condition: string | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    condition: number
    reward: number
    _all: number
  }


  export type AchievementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    condition?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    condition?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    condition?: true
    reward?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    name: string
    description: string
    icon: string
    condition: string
    reward: JsonValue
    _count: AchievementCountAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    condition?: boolean
    reward?: boolean
    unlockedBy?: boolean | Achievement$unlockedByArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    condition?: boolean
    reward?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    condition?: boolean
    reward?: boolean
  }

  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unlockedBy?: boolean | Achievement$unlockedByArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      unlockedBy: Prisma.$UserAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      icon: string
      condition: string
      reward: Prisma.JsonValue
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
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
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unlockedBy<T extends Achievement$unlockedByArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$unlockedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achievement model
   */ 
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly icon: FieldRef<"Achievement", 'String'>
    readonly condition: FieldRef<"Achievement", 'String'>
    readonly reward: FieldRef<"Achievement", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
  }

  /**
   * Achievement.unlockedBy
   */
  export type Achievement$unlockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    cursor?: UserAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model UserAchievement
   */

  export type AggregateUserAchievement = {
    _count: UserAchievementCountAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  export type UserAchievementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    unlockedAt: Date | null
  }

  export type UserAchievementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    achievementId: string | null
    unlockedAt: Date | null
  }

  export type UserAchievementCountAggregateOutputType = {
    id: number
    userId: number
    achievementId: number
    unlockedAt: number
    _all: number
  }


  export type UserAchievementMinAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    unlockedAt?: true
  }

  export type UserAchievementMaxAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    unlockedAt?: true
  }

  export type UserAchievementCountAggregateInputType = {
    id?: true
    userId?: true
    achievementId?: true
    unlockedAt?: true
    _all?: true
  }

  export type UserAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievement to aggregate.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAchievements
    **/
    _count?: true | UserAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAchievementMaxAggregateInputType
  }

  export type GetUserAchievementAggregateType<T extends UserAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAchievement[P]>
      : GetScalarType<T[P], AggregateUserAchievement[P]>
  }




  export type UserAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAchievementWhereInput
    orderBy?: UserAchievementOrderByWithAggregationInput | UserAchievementOrderByWithAggregationInput[]
    by: UserAchievementScalarFieldEnum[] | UserAchievementScalarFieldEnum
    having?: UserAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAchievementCountAggregateInputType | true
    _min?: UserAchievementMinAggregateInputType
    _max?: UserAchievementMaxAggregateInputType
  }

  export type UserAchievementGroupByOutputType = {
    id: string
    userId: string
    achievementId: string
    unlockedAt: Date
    _count: UserAchievementCountAggregateOutputType | null
    _min: UserAchievementMinAggregateOutputType | null
    _max: UserAchievementMaxAggregateOutputType | null
  }

  type GetUserAchievementGroupByPayload<T extends UserAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], UserAchievementGroupByOutputType[P]>
        }
      >
    >


  export type UserAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    unlockedAt?: boolean
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    unlockedAt?: boolean
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAchievement"]>

  export type UserAchievementSelectScalar = {
    id?: boolean
    userId?: boolean
    achievementId?: boolean
    unlockedAt?: boolean
  }

  export type UserAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAchievement"
    objects: {
      achievement: Prisma.$AchievementPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      achievementId: string
      unlockedAt: Date
    }, ExtArgs["result"]["userAchievement"]>
    composites: {}
  }

  type UserAchievementGetPayload<S extends boolean | null | undefined | UserAchievementDefaultArgs> = $Result.GetResult<Prisma.$UserAchievementPayload, S>

  type UserAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAchievementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserAchievementCountAggregateInputType | true
    }

  export interface UserAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAchievement'], meta: { name: 'UserAchievement' } }
    /**
     * Find zero or one UserAchievement that matches the filter.
     * @param {UserAchievementFindUniqueArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAchievementFindUniqueArgs>(args: SelectSubset<T, UserAchievementFindUniqueArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserAchievement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAchievementFindUniqueOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAchievementFindFirstArgs>(args?: SelectSubset<T, UserAchievementFindFirstArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindFirstOrThrowArgs} args - Arguments to find a UserAchievement
     * @example
     * // Get one UserAchievement
     * const userAchievement = await prisma.userAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany()
     * 
     * // Get first 10 UserAchievements
     * const userAchievements = await prisma.userAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAchievementFindManyArgs>(args?: SelectSubset<T, UserAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserAchievement.
     * @param {UserAchievementCreateArgs} args - Arguments to create a UserAchievement.
     * @example
     * // Create one UserAchievement
     * const UserAchievement = await prisma.userAchievement.create({
     *   data: {
     *     // ... data to create a UserAchievement
     *   }
     * })
     * 
     */
    create<T extends UserAchievementCreateArgs>(args: SelectSubset<T, UserAchievementCreateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserAchievements.
     * @param {UserAchievementCreateManyArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAchievementCreateManyArgs>(args?: SelectSubset<T, UserAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAchievements and returns the data saved in the database.
     * @param {UserAchievementCreateManyAndReturnArgs} args - Arguments to create many UserAchievements.
     * @example
     * // Create many UserAchievements
     * const userAchievement = await prisma.userAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAchievements and only return the `id`
     * const userAchievementWithIdOnly = await prisma.userAchievement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserAchievement.
     * @param {UserAchievementDeleteArgs} args - Arguments to delete one UserAchievement.
     * @example
     * // Delete one UserAchievement
     * const UserAchievement = await prisma.userAchievement.delete({
     *   where: {
     *     // ... filter to delete one UserAchievement
     *   }
     * })
     * 
     */
    delete<T extends UserAchievementDeleteArgs>(args: SelectSubset<T, UserAchievementDeleteArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserAchievement.
     * @param {UserAchievementUpdateArgs} args - Arguments to update one UserAchievement.
     * @example
     * // Update one UserAchievement
     * const userAchievement = await prisma.userAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAchievementUpdateArgs>(args: SelectSubset<T, UserAchievementUpdateArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserAchievements.
     * @param {UserAchievementDeleteManyArgs} args - Arguments to filter UserAchievements to delete.
     * @example
     * // Delete a few UserAchievements
     * const { count } = await prisma.userAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAchievementDeleteManyArgs>(args?: SelectSubset<T, UserAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAchievements
     * const userAchievement = await prisma.userAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAchievementUpdateManyArgs>(args: SelectSubset<T, UserAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAchievement.
     * @param {UserAchievementUpsertArgs} args - Arguments to update or create a UserAchievement.
     * @example
     * // Update or create a UserAchievement
     * const userAchievement = await prisma.userAchievement.upsert({
     *   create: {
     *     // ... data to create a UserAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAchievement we want to update
     *   }
     * })
     */
    upsert<T extends UserAchievementUpsertArgs>(args: SelectSubset<T, UserAchievementUpsertArgs<ExtArgs>>): Prisma__UserAchievementClient<$Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementCountArgs} args - Arguments to filter UserAchievements to count.
     * @example
     * // Count the number of UserAchievements
     * const count = await prisma.userAchievement.count({
     *   where: {
     *     // ... the filter for the UserAchievements we want to count
     *   }
     * })
    **/
    count<T extends UserAchievementCountArgs>(
      args?: Subset<T, UserAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAchievementAggregateArgs>(args: Subset<T, UserAchievementAggregateArgs>): Prisma.PrismaPromise<GetUserAchievementAggregateType<T>>

    /**
     * Group by UserAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAchievementGroupByArgs} args - Group by arguments.
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
      T extends UserAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAchievementGroupByArgs['orderBy'] }
        : { orderBy?: UserAchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAchievement model
   */
  readonly fields: UserAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAchievement model
   */ 
  interface UserAchievementFieldRefs {
    readonly id: FieldRef<"UserAchievement", 'String'>
    readonly userId: FieldRef<"UserAchievement", 'String'>
    readonly achievementId: FieldRef<"UserAchievement", 'String'>
    readonly unlockedAt: FieldRef<"UserAchievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAchievement findUnique
   */
  export type UserAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findUniqueOrThrow
   */
  export type UserAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement findFirst
   */
  export type UserAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findFirstOrThrow
   */
  export type UserAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievement to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAchievements.
     */
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement findMany
   */
  export type UserAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter, which UserAchievements to fetch.
     */
    where?: UserAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAchievements to fetch.
     */
    orderBy?: UserAchievementOrderByWithRelationInput | UserAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAchievements.
     */
    cursor?: UserAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAchievements.
     */
    skip?: number
    distinct?: UserAchievementScalarFieldEnum | UserAchievementScalarFieldEnum[]
  }

  /**
   * UserAchievement create
   */
  export type UserAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAchievement.
     */
    data: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
  }

  /**
   * UserAchievement createMany
   */
  export type UserAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAchievement createManyAndReturn
   */
  export type UserAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserAchievements.
     */
    data: UserAchievementCreateManyInput | UserAchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAchievement update
   */
  export type UserAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAchievement.
     */
    data: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
    /**
     * Choose, which UserAchievement to update.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement updateMany
   */
  export type UserAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAchievements.
     */
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyInput>
    /**
     * Filter which UserAchievements to update
     */
    where?: UserAchievementWhereInput
  }

  /**
   * UserAchievement upsert
   */
  export type UserAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAchievement to update in case it exists.
     */
    where: UserAchievementWhereUniqueInput
    /**
     * In case the UserAchievement found by the `where` argument doesn't exist, create a new UserAchievement with this data.
     */
    create: XOR<UserAchievementCreateInput, UserAchievementUncheckedCreateInput>
    /**
     * In case the UserAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAchievementUpdateInput, UserAchievementUncheckedUpdateInput>
  }

  /**
   * UserAchievement delete
   */
  export type UserAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
    /**
     * Filter which UserAchievement to delete.
     */
    where: UserAchievementWhereUniqueInput
  }

  /**
   * UserAchievement deleteMany
   */
  export type UserAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAchievements to delete
     */
    where?: UserAchievementWhereInput
  }

  /**
   * UserAchievement without action
   */
  export type UserAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: UserAchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAchievementInclude<ExtArgs> | null
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
    username: 'username',
    nickname: 'nickname',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    level: 'level',
    experience: 'experience',
    pokeballs: 'pokeballs',
    maxPokeballs: 'maxPokeballs',
    lastGameDate: 'lastGameDate',
    dailyPokemonId: 'dailyPokemonId',
    dailyAttempts: 'dailyAttempts',
    caughtToday: 'caughtToday',
    currentStreak: 'currentStreak',
    maxStreak: 'maxStreak',
    totalCatches: 'totalCatches'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PokemonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sprite: 'sprite',
    spriteShiny: 'spriteShiny',
    types: 'types',
    height: 'height',
    weight: 'weight',
    baseExperience: 'baseExperience',
    isLegendary: 'isLegendary',
    captureRate: 'captureRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PokemonScalarFieldEnum = (typeof PokemonScalarFieldEnum)[keyof typeof PokemonScalarFieldEnum]


  export const CaughtPokemonScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pokemonId: 'pokemonId',
    caughtAt: 'caughtAt',
    critical: 'critical',
    experience: 'experience'
  };

  export type CaughtPokemonScalarFieldEnum = (typeof CaughtPokemonScalarFieldEnum)[keyof typeof CaughtPokemonScalarFieldEnum]


  export const GameSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pokemonId: 'pokemonId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    attempts: 'attempts',
    pokeballsUsed: 'pokeballsUsed',
    success: 'success'
  };

  export type GameSessionScalarFieldEnum = (typeof GameSessionScalarFieldEnum)[keyof typeof GameSessionScalarFieldEnum]


  export const DailyLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    pokemonId: 'pokemonId',
    attempts: 'attempts',
    caught: 'caught',
    pokeballsLeft: 'pokeballsLeft'
  };

  export type DailyLogScalarFieldEnum = (typeof DailyLogScalarFieldEnum)[keyof typeof DailyLogScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    condition: 'condition',
    reward: 'reward'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const UserAchievementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    achievementId: 'achievementId',
    unlockedAt: 'unlockedAt'
  };

  export type UserAchievementScalarFieldEnum = (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    level?: IntFilter<"User"> | number
    experience?: IntFilter<"User"> | number
    pokeballs?: IntFilter<"User"> | number
    maxPokeballs?: IntFilter<"User"> | number
    lastGameDate?: DateTimeNullableFilter<"User"> | Date | string | null
    dailyPokemonId?: IntNullableFilter<"User"> | number | null
    dailyAttempts?: IntFilter<"User"> | number
    caughtToday?: BoolFilter<"User"> | boolean
    currentStreak?: IntFilter<"User"> | number
    maxStreak?: IntFilter<"User"> | number
    totalCatches?: IntFilter<"User"> | number
    caughtPokemon?: CaughtPokemonListRelationFilter
    dailyLogs?: DailyLogListRelationFilter
    gameSessions?: GameSessionListRelationFilter
    dailyPokemon?: XOR<PokemonNullableRelationFilter, PokemonWhereInput> | null
    achievements?: UserAchievementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    nickname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    pokeballs?: SortOrder
    maxPokeballs?: SortOrder
    lastGameDate?: SortOrderInput | SortOrder
    dailyPokemonId?: SortOrderInput | SortOrder
    dailyAttempts?: SortOrder
    caughtToday?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    totalCatches?: SortOrder
    caughtPokemon?: CaughtPokemonOrderByRelationAggregateInput
    dailyLogs?: DailyLogOrderByRelationAggregateInput
    gameSessions?: GameSessionOrderByRelationAggregateInput
    dailyPokemon?: PokemonOrderByWithRelationInput
    achievements?: UserAchievementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    nickname?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    level?: IntFilter<"User"> | number
    experience?: IntFilter<"User"> | number
    pokeballs?: IntFilter<"User"> | number
    maxPokeballs?: IntFilter<"User"> | number
    lastGameDate?: DateTimeNullableFilter<"User"> | Date | string | null
    dailyPokemonId?: IntNullableFilter<"User"> | number | null
    dailyAttempts?: IntFilter<"User"> | number
    caughtToday?: BoolFilter<"User"> | boolean
    currentStreak?: IntFilter<"User"> | number
    maxStreak?: IntFilter<"User"> | number
    totalCatches?: IntFilter<"User"> | number
    caughtPokemon?: CaughtPokemonListRelationFilter
    dailyLogs?: DailyLogListRelationFilter
    gameSessions?: GameSessionListRelationFilter
    dailyPokemon?: XOR<PokemonNullableRelationFilter, PokemonWhereInput> | null
    achievements?: UserAchievementListRelationFilter
  }, "id" | "username" | "nickname" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    nickname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    pokeballs?: SortOrder
    maxPokeballs?: SortOrder
    lastGameDate?: SortOrderInput | SortOrder
    dailyPokemonId?: SortOrderInput | SortOrder
    dailyAttempts?: SortOrder
    caughtToday?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    totalCatches?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    level?: IntWithAggregatesFilter<"User"> | number
    experience?: IntWithAggregatesFilter<"User"> | number
    pokeballs?: IntWithAggregatesFilter<"User"> | number
    maxPokeballs?: IntWithAggregatesFilter<"User"> | number
    lastGameDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    dailyPokemonId?: IntNullableWithAggregatesFilter<"User"> | number | null
    dailyAttempts?: IntWithAggregatesFilter<"User"> | number
    caughtToday?: BoolWithAggregatesFilter<"User"> | boolean
    currentStreak?: IntWithAggregatesFilter<"User"> | number
    maxStreak?: IntWithAggregatesFilter<"User"> | number
    totalCatches?: IntWithAggregatesFilter<"User"> | number
  }

  export type PokemonWhereInput = {
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    id?: IntFilter<"Pokemon"> | number
    name?: StringFilter<"Pokemon"> | string
    sprite?: StringFilter<"Pokemon"> | string
    spriteShiny?: StringNullableFilter<"Pokemon"> | string | null
    types?: StringNullableListFilter<"Pokemon">
    height?: IntFilter<"Pokemon"> | number
    weight?: IntFilter<"Pokemon"> | number
    baseExperience?: IntFilter<"Pokemon"> | number
    isLegendary?: BoolFilter<"Pokemon"> | boolean
    captureRate?: IntNullableFilter<"Pokemon"> | number | null
    createdAt?: DateTimeFilter<"Pokemon"> | Date | string
    updatedAt?: DateTimeFilter<"Pokemon"> | Date | string
    caughtBy?: CaughtPokemonListRelationFilter
    dailyLogs?: DailyLogListRelationFilter
    gameSessions?: GameSessionListRelationFilter
    dailyForUsers?: UserListRelationFilter
  }

  export type PokemonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
    spriteShiny?: SortOrderInput | SortOrder
    types?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    baseExperience?: SortOrder
    isLegendary?: SortOrder
    captureRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    caughtBy?: CaughtPokemonOrderByRelationAggregateInput
    dailyLogs?: DailyLogOrderByRelationAggregateInput
    gameSessions?: GameSessionOrderByRelationAggregateInput
    dailyForUsers?: UserOrderByRelationAggregateInput
  }

  export type PokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PokemonWhereInput | PokemonWhereInput[]
    OR?: PokemonWhereInput[]
    NOT?: PokemonWhereInput | PokemonWhereInput[]
    sprite?: StringFilter<"Pokemon"> | string
    spriteShiny?: StringNullableFilter<"Pokemon"> | string | null
    types?: StringNullableListFilter<"Pokemon">
    height?: IntFilter<"Pokemon"> | number
    weight?: IntFilter<"Pokemon"> | number
    baseExperience?: IntFilter<"Pokemon"> | number
    isLegendary?: BoolFilter<"Pokemon"> | boolean
    captureRate?: IntNullableFilter<"Pokemon"> | number | null
    createdAt?: DateTimeFilter<"Pokemon"> | Date | string
    updatedAt?: DateTimeFilter<"Pokemon"> | Date | string
    caughtBy?: CaughtPokemonListRelationFilter
    dailyLogs?: DailyLogListRelationFilter
    gameSessions?: GameSessionListRelationFilter
    dailyForUsers?: UserListRelationFilter
  }, "id" | "name">

  export type PokemonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
    spriteShiny?: SortOrderInput | SortOrder
    types?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    baseExperience?: SortOrder
    isLegendary?: SortOrder
    captureRate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PokemonCountOrderByAggregateInput
    _avg?: PokemonAvgOrderByAggregateInput
    _max?: PokemonMaxOrderByAggregateInput
    _min?: PokemonMinOrderByAggregateInput
    _sum?: PokemonSumOrderByAggregateInput
  }

  export type PokemonScalarWhereWithAggregatesInput = {
    AND?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    OR?: PokemonScalarWhereWithAggregatesInput[]
    NOT?: PokemonScalarWhereWithAggregatesInput | PokemonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pokemon"> | number
    name?: StringWithAggregatesFilter<"Pokemon"> | string
    sprite?: StringWithAggregatesFilter<"Pokemon"> | string
    spriteShiny?: StringNullableWithAggregatesFilter<"Pokemon"> | string | null
    types?: StringNullableListFilter<"Pokemon">
    height?: IntWithAggregatesFilter<"Pokemon"> | number
    weight?: IntWithAggregatesFilter<"Pokemon"> | number
    baseExperience?: IntWithAggregatesFilter<"Pokemon"> | number
    isLegendary?: BoolWithAggregatesFilter<"Pokemon"> | boolean
    captureRate?: IntNullableWithAggregatesFilter<"Pokemon"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Pokemon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pokemon"> | Date | string
  }

  export type CaughtPokemonWhereInput = {
    AND?: CaughtPokemonWhereInput | CaughtPokemonWhereInput[]
    OR?: CaughtPokemonWhereInput[]
    NOT?: CaughtPokemonWhereInput | CaughtPokemonWhereInput[]
    id?: StringFilter<"CaughtPokemon"> | string
    userId?: StringFilter<"CaughtPokemon"> | string
    pokemonId?: IntFilter<"CaughtPokemon"> | number
    caughtAt?: DateTimeFilter<"CaughtPokemon"> | Date | string
    critical?: BoolFilter<"CaughtPokemon"> | boolean
    experience?: IntFilter<"CaughtPokemon"> | number
    pokemon?: XOR<PokemonRelationFilter, PokemonWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CaughtPokemonOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    caughtAt?: SortOrder
    critical?: SortOrder
    experience?: SortOrder
    pokemon?: PokemonOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CaughtPokemonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_pokemonId?: CaughtPokemonUserIdPokemonIdCompoundUniqueInput
    AND?: CaughtPokemonWhereInput | CaughtPokemonWhereInput[]
    OR?: CaughtPokemonWhereInput[]
    NOT?: CaughtPokemonWhereInput | CaughtPokemonWhereInput[]
    userId?: StringFilter<"CaughtPokemon"> | string
    pokemonId?: IntFilter<"CaughtPokemon"> | number
    caughtAt?: DateTimeFilter<"CaughtPokemon"> | Date | string
    critical?: BoolFilter<"CaughtPokemon"> | boolean
    experience?: IntFilter<"CaughtPokemon"> | number
    pokemon?: XOR<PokemonRelationFilter, PokemonWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_pokemonId">

  export type CaughtPokemonOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    caughtAt?: SortOrder
    critical?: SortOrder
    experience?: SortOrder
    _count?: CaughtPokemonCountOrderByAggregateInput
    _avg?: CaughtPokemonAvgOrderByAggregateInput
    _max?: CaughtPokemonMaxOrderByAggregateInput
    _min?: CaughtPokemonMinOrderByAggregateInput
    _sum?: CaughtPokemonSumOrderByAggregateInput
  }

  export type CaughtPokemonScalarWhereWithAggregatesInput = {
    AND?: CaughtPokemonScalarWhereWithAggregatesInput | CaughtPokemonScalarWhereWithAggregatesInput[]
    OR?: CaughtPokemonScalarWhereWithAggregatesInput[]
    NOT?: CaughtPokemonScalarWhereWithAggregatesInput | CaughtPokemonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CaughtPokemon"> | string
    userId?: StringWithAggregatesFilter<"CaughtPokemon"> | string
    pokemonId?: IntWithAggregatesFilter<"CaughtPokemon"> | number
    caughtAt?: DateTimeWithAggregatesFilter<"CaughtPokemon"> | Date | string
    critical?: BoolWithAggregatesFilter<"CaughtPokemon"> | boolean
    experience?: IntWithAggregatesFilter<"CaughtPokemon"> | number
  }

  export type GameSessionWhereInput = {
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    id?: StringFilter<"GameSession"> | string
    userId?: StringFilter<"GameSession"> | string
    pokemonId?: IntFilter<"GameSession"> | number
    startedAt?: DateTimeFilter<"GameSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    attempts?: IntFilter<"GameSession"> | number
    pokeballsUsed?: IntFilter<"GameSession"> | number
    success?: BoolFilter<"GameSession"> | boolean
    pokemon?: XOR<PokemonRelationFilter, PokemonWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GameSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    pokeballsUsed?: SortOrder
    success?: SortOrder
    pokemon?: PokemonOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GameSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    userId?: StringFilter<"GameSession"> | string
    pokemonId?: IntFilter<"GameSession"> | number
    startedAt?: DateTimeFilter<"GameSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    attempts?: IntFilter<"GameSession"> | number
    pokeballsUsed?: IntFilter<"GameSession"> | number
    success?: BoolFilter<"GameSession"> | boolean
    pokemon?: XOR<PokemonRelationFilter, PokemonWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type GameSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    attempts?: SortOrder
    pokeballsUsed?: SortOrder
    success?: SortOrder
    _count?: GameSessionCountOrderByAggregateInput
    _avg?: GameSessionAvgOrderByAggregateInput
    _max?: GameSessionMaxOrderByAggregateInput
    _min?: GameSessionMinOrderByAggregateInput
    _sum?: GameSessionSumOrderByAggregateInput
  }

  export type GameSessionScalarWhereWithAggregatesInput = {
    AND?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    OR?: GameSessionScalarWhereWithAggregatesInput[]
    NOT?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameSession"> | string
    userId?: StringWithAggregatesFilter<"GameSession"> | string
    pokemonId?: IntWithAggregatesFilter<"GameSession"> | number
    startedAt?: DateTimeWithAggregatesFilter<"GameSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"GameSession"> | Date | string | null
    attempts?: IntWithAggregatesFilter<"GameSession"> | number
    pokeballsUsed?: IntWithAggregatesFilter<"GameSession"> | number
    success?: BoolWithAggregatesFilter<"GameSession"> | boolean
  }

  export type DailyLogWhereInput = {
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    id?: StringFilter<"DailyLog"> | string
    userId?: StringFilter<"DailyLog"> | string
    date?: DateTimeFilter<"DailyLog"> | Date | string
    pokemonId?: IntFilter<"DailyLog"> | number
    attempts?: IntFilter<"DailyLog"> | number
    caught?: BoolFilter<"DailyLog"> | boolean
    pokeballsLeft?: IntFilter<"DailyLog"> | number
    pokemon?: XOR<PokemonRelationFilter, PokemonWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DailyLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    pokemonId?: SortOrder
    attempts?: SortOrder
    caught?: SortOrder
    pokeballsLeft?: SortOrder
    pokemon?: PokemonOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DailyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyLogUserIdDateCompoundUniqueInput
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    userId?: StringFilter<"DailyLog"> | string
    date?: DateTimeFilter<"DailyLog"> | Date | string
    pokemonId?: IntFilter<"DailyLog"> | number
    attempts?: IntFilter<"DailyLog"> | number
    caught?: BoolFilter<"DailyLog"> | boolean
    pokeballsLeft?: IntFilter<"DailyLog"> | number
    pokemon?: XOR<PokemonRelationFilter, PokemonWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    pokemonId?: SortOrder
    attempts?: SortOrder
    caught?: SortOrder
    pokeballsLeft?: SortOrder
    _count?: DailyLogCountOrderByAggregateInput
    _avg?: DailyLogAvgOrderByAggregateInput
    _max?: DailyLogMaxOrderByAggregateInput
    _min?: DailyLogMinOrderByAggregateInput
    _sum?: DailyLogSumOrderByAggregateInput
  }

  export type DailyLogScalarWhereWithAggregatesInput = {
    AND?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    OR?: DailyLogScalarWhereWithAggregatesInput[]
    NOT?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyLog"> | string
    userId?: StringWithAggregatesFilter<"DailyLog"> | string
    date?: DateTimeWithAggregatesFilter<"DailyLog"> | Date | string
    pokemonId?: IntWithAggregatesFilter<"DailyLog"> | number
    attempts?: IntWithAggregatesFilter<"DailyLog"> | number
    caught?: BoolWithAggregatesFilter<"DailyLog"> | boolean
    pokeballsLeft?: IntWithAggregatesFilter<"DailyLog"> | number
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    icon?: StringFilter<"Achievement"> | string
    condition?: StringFilter<"Achievement"> | string
    reward?: JsonFilter<"Achievement">
    unlockedBy?: UserAchievementListRelationFilter
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    condition?: SortOrder
    reward?: SortOrder
    unlockedBy?: UserAchievementOrderByRelationAggregateInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    description?: StringFilter<"Achievement"> | string
    icon?: StringFilter<"Achievement"> | string
    condition?: StringFilter<"Achievement"> | string
    reward?: JsonFilter<"Achievement">
    unlockedBy?: UserAchievementListRelationFilter
  }, "id" | "name">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    condition?: SortOrder
    reward?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    name?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    icon?: StringWithAggregatesFilter<"Achievement"> | string
    condition?: StringWithAggregatesFilter<"Achievement"> | string
    reward?: JsonWithAggregatesFilter<"Achievement">
  }

  export type UserAchievementWhereInput = {
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    achievement?: XOR<AchievementRelationFilter, AchievementWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserAchievementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
    achievement?: AchievementOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_achievementId?: UserAchievementUserIdAchievementIdCompoundUniqueInput
    AND?: UserAchievementWhereInput | UserAchievementWhereInput[]
    OR?: UserAchievementWhereInput[]
    NOT?: UserAchievementWhereInput | UserAchievementWhereInput[]
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeFilter<"UserAchievement"> | Date | string
    achievement?: XOR<AchievementRelationFilter, AchievementWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_achievementId">

  export type UserAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
    _count?: UserAchievementCountOrderByAggregateInput
    _max?: UserAchievementMaxOrderByAggregateInput
    _min?: UserAchievementMinOrderByAggregateInput
  }

  export type UserAchievementScalarWhereWithAggregatesInput = {
    AND?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    OR?: UserAchievementScalarWhereWithAggregatesInput[]
    NOT?: UserAchievementScalarWhereWithAggregatesInput | UserAchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAchievement"> | string
    userId?: StringWithAggregatesFilter<"UserAchievement"> | string
    achievementId?: StringWithAggregatesFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeWithAggregatesFilter<"UserAchievement"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionCreateNestedManyWithoutUserInput
    dailyPokemon?: PokemonCreateNestedOneWithoutDailyForUsersInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyPokemonId?: number | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonUncheckedCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUpdateManyWithoutUserNestedInput
    dailyPokemon?: PokemonUpdateOneWithoutDailyForUsersNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUncheckedUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyPokemonId?: number | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
  }

  export type PokemonCreateInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caughtBy?: CaughtPokemonCreateNestedManyWithoutPokemonInput
    dailyLogs?: DailyLogCreateNestedManyWithoutPokemonInput
    gameSessions?: GameSessionCreateNestedManyWithoutPokemonInput
    dailyForUsers?: UserCreateNestedManyWithoutDailyPokemonInput
  }

  export type PokemonUncheckedCreateInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caughtBy?: CaughtPokemonUncheckedCreateNestedManyWithoutPokemonInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutPokemonInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutPokemonInput
    dailyForUsers?: UserUncheckedCreateNestedManyWithoutDailyPokemonInput
  }

  export type PokemonUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caughtBy?: CaughtPokemonUpdateManyWithoutPokemonNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutPokemonNestedInput
    gameSessions?: GameSessionUpdateManyWithoutPokemonNestedInput
    dailyForUsers?: UserUpdateManyWithoutDailyPokemonNestedInput
  }

  export type PokemonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caughtBy?: CaughtPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutPokemonNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutPokemonNestedInput
    dailyForUsers?: UserUncheckedUpdateManyWithoutDailyPokemonNestedInput
  }

  export type PokemonCreateManyInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PokemonUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaughtPokemonCreateInput = {
    id?: string
    caughtAt?: Date | string
    critical?: boolean
    experience?: number
    pokemon: PokemonCreateNestedOneWithoutCaughtByInput
    user: UserCreateNestedOneWithoutCaughtPokemonInput
  }

  export type CaughtPokemonUncheckedCreateInput = {
    id?: string
    userId: string
    pokemonId: number
    caughtAt?: Date | string
    critical?: boolean
    experience?: number
  }

  export type CaughtPokemonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
    pokemon?: PokemonUpdateOneRequiredWithoutCaughtByNestedInput
    user?: UserUpdateOneRequiredWithoutCaughtPokemonNestedInput
  }

  export type CaughtPokemonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type CaughtPokemonCreateManyInput = {
    id?: string
    userId: string
    pokemonId: number
    caughtAt?: Date | string
    critical?: boolean
    experience?: number
  }

  export type CaughtPokemonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type CaughtPokemonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type GameSessionCreateInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    attempts?: number
    pokeballsUsed?: number
    success?: boolean
    pokemon: PokemonCreateNestedOneWithoutGameSessionsInput
    user: UserCreateNestedOneWithoutGameSessionsInput
  }

  export type GameSessionUncheckedCreateInput = {
    id?: string
    userId: string
    pokemonId: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    attempts?: number
    pokeballsUsed?: number
    success?: boolean
  }

  export type GameSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    pokemon?: PokemonUpdateOneRequiredWithoutGameSessionsNestedInput
    user?: UserUpdateOneRequiredWithoutGameSessionsNestedInput
  }

  export type GameSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionCreateManyInput = {
    id?: string
    userId: string
    pokemonId: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    attempts?: number
    pokeballsUsed?: number
    success?: boolean
  }

  export type GameSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyLogCreateInput = {
    id?: string
    date?: Date | string
    attempts?: number
    caught?: boolean
    pokeballsLeft?: number
    pokemon: PokemonCreateNestedOneWithoutDailyLogsInput
    user: UserCreateNestedOneWithoutDailyLogsInput
  }

  export type DailyLogUncheckedCreateInput = {
    id?: string
    userId: string
    date?: Date | string
    pokemonId: number
    attempts?: number
    caught?: boolean
    pokeballsLeft?: number
  }

  export type DailyLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
    pokemon?: PokemonUpdateOneRequiredWithoutDailyLogsNestedInput
    user?: UserUpdateOneRequiredWithoutDailyLogsNestedInput
  }

  export type DailyLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogCreateManyInput = {
    id?: string
    userId: string
    date?: Date | string
    pokemonId: number
    attempts?: number
    caught?: boolean
    pokeballsLeft?: number
  }

  export type DailyLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
  }

  export type AchievementCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    condition: string
    reward: JsonNullValueInput | InputJsonValue
    unlockedBy?: UserAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    condition: string
    reward: JsonNullValueInput | InputJsonValue
    unlockedBy?: UserAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    reward?: JsonNullValueInput | InputJsonValue
    unlockedBy?: UserAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    reward?: JsonNullValueInput | InputJsonValue
    unlockedBy?: UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
    id?: string
    name: string
    description: string
    icon: string
    condition: string
    reward: JsonNullValueInput | InputJsonValue
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    reward?: JsonNullValueInput | InputJsonValue
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    reward?: JsonNullValueInput | InputJsonValue
  }

  export type UserAchievementCreateInput = {
    id?: string
    unlockedAt?: Date | string
    achievement: AchievementCreateNestedOneWithoutUnlockedByInput
    user: UserCreateNestedOneWithoutAchievementsInput
  }

  export type UserAchievementUncheckedCreateInput = {
    id?: string
    userId: string
    achievementId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutUnlockedByNestedInput
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementCreateManyInput = {
    id?: string
    userId: string
    achievementId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CaughtPokemonListRelationFilter = {
    every?: CaughtPokemonWhereInput
    some?: CaughtPokemonWhereInput
    none?: CaughtPokemonWhereInput
  }

  export type DailyLogListRelationFilter = {
    every?: DailyLogWhereInput
    some?: DailyLogWhereInput
    none?: DailyLogWhereInput
  }

  export type GameSessionListRelationFilter = {
    every?: GameSessionWhereInput
    some?: GameSessionWhereInput
    none?: GameSessionWhereInput
  }

  export type PokemonNullableRelationFilter = {
    is?: PokemonWhereInput | null
    isNot?: PokemonWhereInput | null
  }

  export type UserAchievementListRelationFilter = {
    every?: UserAchievementWhereInput
    some?: UserAchievementWhereInput
    none?: UserAchievementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CaughtPokemonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    pokeballs?: SortOrder
    maxPokeballs?: SortOrder
    lastGameDate?: SortOrder
    dailyPokemonId?: SortOrder
    dailyAttempts?: SortOrder
    caughtToday?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    totalCatches?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    pokeballs?: SortOrder
    maxPokeballs?: SortOrder
    dailyPokemonId?: SortOrder
    dailyAttempts?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    totalCatches?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    pokeballs?: SortOrder
    maxPokeballs?: SortOrder
    lastGameDate?: SortOrder
    dailyPokemonId?: SortOrder
    dailyAttempts?: SortOrder
    caughtToday?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    totalCatches?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    level?: SortOrder
    experience?: SortOrder
    pokeballs?: SortOrder
    maxPokeballs?: SortOrder
    lastGameDate?: SortOrder
    dailyPokemonId?: SortOrder
    dailyAttempts?: SortOrder
    caughtToday?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    totalCatches?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    level?: SortOrder
    experience?: SortOrder
    pokeballs?: SortOrder
    maxPokeballs?: SortOrder
    dailyPokemonId?: SortOrder
    dailyAttempts?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    totalCatches?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PokemonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
    spriteShiny?: SortOrder
    types?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    baseExperience?: SortOrder
    isLegendary?: SortOrder
    captureRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokemonAvgOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    baseExperience?: SortOrder
    captureRate?: SortOrder
  }

  export type PokemonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
    spriteShiny?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    baseExperience?: SortOrder
    isLegendary?: SortOrder
    captureRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokemonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sprite?: SortOrder
    spriteShiny?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    baseExperience?: SortOrder
    isLegendary?: SortOrder
    captureRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PokemonSumOrderByAggregateInput = {
    id?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    baseExperience?: SortOrder
    captureRate?: SortOrder
  }

  export type PokemonRelationFilter = {
    is?: PokemonWhereInput
    isNot?: PokemonWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CaughtPokemonUserIdPokemonIdCompoundUniqueInput = {
    userId: string
    pokemonId: number
  }

  export type CaughtPokemonCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    caughtAt?: SortOrder
    critical?: SortOrder
    experience?: SortOrder
  }

  export type CaughtPokemonAvgOrderByAggregateInput = {
    pokemonId?: SortOrder
    experience?: SortOrder
  }

  export type CaughtPokemonMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    caughtAt?: SortOrder
    critical?: SortOrder
    experience?: SortOrder
  }

  export type CaughtPokemonMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    caughtAt?: SortOrder
    critical?: SortOrder
    experience?: SortOrder
  }

  export type CaughtPokemonSumOrderByAggregateInput = {
    pokemonId?: SortOrder
    experience?: SortOrder
  }

  export type GameSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    attempts?: SortOrder
    pokeballsUsed?: SortOrder
    success?: SortOrder
  }

  export type GameSessionAvgOrderByAggregateInput = {
    pokemonId?: SortOrder
    attempts?: SortOrder
    pokeballsUsed?: SortOrder
  }

  export type GameSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    attempts?: SortOrder
    pokeballsUsed?: SortOrder
    success?: SortOrder
  }

  export type GameSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pokemonId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    attempts?: SortOrder
    pokeballsUsed?: SortOrder
    success?: SortOrder
  }

  export type GameSessionSumOrderByAggregateInput = {
    pokemonId?: SortOrder
    attempts?: SortOrder
    pokeballsUsed?: SortOrder
  }

  export type DailyLogUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type DailyLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    pokemonId?: SortOrder
    attempts?: SortOrder
    caught?: SortOrder
    pokeballsLeft?: SortOrder
  }

  export type DailyLogAvgOrderByAggregateInput = {
    pokemonId?: SortOrder
    attempts?: SortOrder
    pokeballsLeft?: SortOrder
  }

  export type DailyLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    pokemonId?: SortOrder
    attempts?: SortOrder
    caught?: SortOrder
    pokeballsLeft?: SortOrder
  }

  export type DailyLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    pokemonId?: SortOrder
    attempts?: SortOrder
    caught?: SortOrder
    pokeballsLeft?: SortOrder
  }

  export type DailyLogSumOrderByAggregateInput = {
    pokemonId?: SortOrder
    attempts?: SortOrder
    pokeballsLeft?: SortOrder
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

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    condition?: SortOrder
    reward?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    condition?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    condition?: SortOrder
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

  export type AchievementRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type UserAchievementUserIdAchievementIdCompoundUniqueInput = {
    userId: string
    achievementId: string
  }

  export type UserAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
  }

  export type UserAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
  }

  export type UserAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    achievementId?: SortOrder
    unlockedAt?: SortOrder
  }

  export type CaughtPokemonCreateNestedManyWithoutUserInput = {
    create?: XOR<CaughtPokemonCreateWithoutUserInput, CaughtPokemonUncheckedCreateWithoutUserInput> | CaughtPokemonCreateWithoutUserInput[] | CaughtPokemonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaughtPokemonCreateOrConnectWithoutUserInput | CaughtPokemonCreateOrConnectWithoutUserInput[]
    createMany?: CaughtPokemonCreateManyUserInputEnvelope
    connect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
  }

  export type DailyLogCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type GameSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput> | GameSessionCreateWithoutUserInput[] | GameSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutUserInput | GameSessionCreateOrConnectWithoutUserInput[]
    createMany?: GameSessionCreateManyUserInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type PokemonCreateNestedOneWithoutDailyForUsersInput = {
    create?: XOR<PokemonCreateWithoutDailyForUsersInput, PokemonUncheckedCreateWithoutDailyForUsersInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutDailyForUsersInput
    connect?: PokemonWhereUniqueInput
  }

  export type UserAchievementCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type CaughtPokemonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CaughtPokemonCreateWithoutUserInput, CaughtPokemonUncheckedCreateWithoutUserInput> | CaughtPokemonCreateWithoutUserInput[] | CaughtPokemonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaughtPokemonCreateOrConnectWithoutUserInput | CaughtPokemonCreateOrConnectWithoutUserInput[]
    createMany?: CaughtPokemonCreateManyUserInputEnvelope
    connect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
  }

  export type DailyLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput> | GameSessionCreateWithoutUserInput[] | GameSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutUserInput | GameSessionCreateOrConnectWithoutUserInput[]
    createMany?: GameSessionCreateManyUserInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CaughtPokemonUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaughtPokemonCreateWithoutUserInput, CaughtPokemonUncheckedCreateWithoutUserInput> | CaughtPokemonCreateWithoutUserInput[] | CaughtPokemonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaughtPokemonCreateOrConnectWithoutUserInput | CaughtPokemonCreateOrConnectWithoutUserInput[]
    upsert?: CaughtPokemonUpsertWithWhereUniqueWithoutUserInput | CaughtPokemonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaughtPokemonCreateManyUserInputEnvelope
    set?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    disconnect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    delete?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    connect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    update?: CaughtPokemonUpdateWithWhereUniqueWithoutUserInput | CaughtPokemonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaughtPokemonUpdateManyWithWhereWithoutUserInput | CaughtPokemonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaughtPokemonScalarWhereInput | CaughtPokemonScalarWhereInput[]
  }

  export type DailyLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutUserInput | DailyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutUserInput | DailyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutUserInput | DailyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type GameSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput> | GameSessionCreateWithoutUserInput[] | GameSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutUserInput | GameSessionCreateOrConnectWithoutUserInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutUserInput | GameSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameSessionCreateManyUserInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutUserInput | GameSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutUserInput | GameSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type PokemonUpdateOneWithoutDailyForUsersNestedInput = {
    create?: XOR<PokemonCreateWithoutDailyForUsersInput, PokemonUncheckedCreateWithoutDailyForUsersInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutDailyForUsersInput
    upsert?: PokemonUpsertWithoutDailyForUsersInput
    disconnect?: PokemonWhereInput | boolean
    delete?: PokemonWhereInput | boolean
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutDailyForUsersInput, PokemonUpdateWithoutDailyForUsersInput>, PokemonUncheckedUpdateWithoutDailyForUsersInput>
  }

  export type UserAchievementUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CaughtPokemonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaughtPokemonCreateWithoutUserInput, CaughtPokemonUncheckedCreateWithoutUserInput> | CaughtPokemonCreateWithoutUserInput[] | CaughtPokemonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaughtPokemonCreateOrConnectWithoutUserInput | CaughtPokemonCreateOrConnectWithoutUserInput[]
    upsert?: CaughtPokemonUpsertWithWhereUniqueWithoutUserInput | CaughtPokemonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaughtPokemonCreateManyUserInputEnvelope
    set?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    disconnect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    delete?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    connect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    update?: CaughtPokemonUpdateWithWhereUniqueWithoutUserInput | CaughtPokemonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaughtPokemonUpdateManyWithWhereWithoutUserInput | CaughtPokemonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaughtPokemonScalarWhereInput | CaughtPokemonScalarWhereInput[]
  }

  export type DailyLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutUserInput | DailyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutUserInput | DailyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutUserInput | DailyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput> | GameSessionCreateWithoutUserInput[] | GameSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutUserInput | GameSessionCreateOrConnectWithoutUserInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutUserInput | GameSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameSessionCreateManyUserInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutUserInput | GameSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutUserInput | GameSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput> | UserAchievementCreateWithoutUserInput[] | UserAchievementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutUserInput | UserAchievementCreateOrConnectWithoutUserInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutUserInput | UserAchievementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAchievementCreateManyUserInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutUserInput | UserAchievementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutUserInput | UserAchievementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type PokemonCreatetypesInput = {
    set: string[]
  }

  export type CaughtPokemonCreateNestedManyWithoutPokemonInput = {
    create?: XOR<CaughtPokemonCreateWithoutPokemonInput, CaughtPokemonUncheckedCreateWithoutPokemonInput> | CaughtPokemonCreateWithoutPokemonInput[] | CaughtPokemonUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: CaughtPokemonCreateOrConnectWithoutPokemonInput | CaughtPokemonCreateOrConnectWithoutPokemonInput[]
    createMany?: CaughtPokemonCreateManyPokemonInputEnvelope
    connect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
  }

  export type DailyLogCreateNestedManyWithoutPokemonInput = {
    create?: XOR<DailyLogCreateWithoutPokemonInput, DailyLogUncheckedCreateWithoutPokemonInput> | DailyLogCreateWithoutPokemonInput[] | DailyLogUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutPokemonInput | DailyLogCreateOrConnectWithoutPokemonInput[]
    createMany?: DailyLogCreateManyPokemonInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type GameSessionCreateNestedManyWithoutPokemonInput = {
    create?: XOR<GameSessionCreateWithoutPokemonInput, GameSessionUncheckedCreateWithoutPokemonInput> | GameSessionCreateWithoutPokemonInput[] | GameSessionUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutPokemonInput | GameSessionCreateOrConnectWithoutPokemonInput[]
    createMany?: GameSessionCreateManyPokemonInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDailyPokemonInput = {
    create?: XOR<UserCreateWithoutDailyPokemonInput, UserUncheckedCreateWithoutDailyPokemonInput> | UserCreateWithoutDailyPokemonInput[] | UserUncheckedCreateWithoutDailyPokemonInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDailyPokemonInput | UserCreateOrConnectWithoutDailyPokemonInput[]
    createMany?: UserCreateManyDailyPokemonInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CaughtPokemonUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<CaughtPokemonCreateWithoutPokemonInput, CaughtPokemonUncheckedCreateWithoutPokemonInput> | CaughtPokemonCreateWithoutPokemonInput[] | CaughtPokemonUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: CaughtPokemonCreateOrConnectWithoutPokemonInput | CaughtPokemonCreateOrConnectWithoutPokemonInput[]
    createMany?: CaughtPokemonCreateManyPokemonInputEnvelope
    connect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
  }

  export type DailyLogUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<DailyLogCreateWithoutPokemonInput, DailyLogUncheckedCreateWithoutPokemonInput> | DailyLogCreateWithoutPokemonInput[] | DailyLogUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutPokemonInput | DailyLogCreateOrConnectWithoutPokemonInput[]
    createMany?: DailyLogCreateManyPokemonInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutPokemonInput = {
    create?: XOR<GameSessionCreateWithoutPokemonInput, GameSessionUncheckedCreateWithoutPokemonInput> | GameSessionCreateWithoutPokemonInput[] | GameSessionUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutPokemonInput | GameSessionCreateOrConnectWithoutPokemonInput[]
    createMany?: GameSessionCreateManyPokemonInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDailyPokemonInput = {
    create?: XOR<UserCreateWithoutDailyPokemonInput, UserUncheckedCreateWithoutDailyPokemonInput> | UserCreateWithoutDailyPokemonInput[] | UserUncheckedCreateWithoutDailyPokemonInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDailyPokemonInput | UserCreateOrConnectWithoutDailyPokemonInput[]
    createMany?: UserCreateManyDailyPokemonInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PokemonUpdatetypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CaughtPokemonUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<CaughtPokemonCreateWithoutPokemonInput, CaughtPokemonUncheckedCreateWithoutPokemonInput> | CaughtPokemonCreateWithoutPokemonInput[] | CaughtPokemonUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: CaughtPokemonCreateOrConnectWithoutPokemonInput | CaughtPokemonCreateOrConnectWithoutPokemonInput[]
    upsert?: CaughtPokemonUpsertWithWhereUniqueWithoutPokemonInput | CaughtPokemonUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: CaughtPokemonCreateManyPokemonInputEnvelope
    set?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    disconnect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    delete?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    connect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    update?: CaughtPokemonUpdateWithWhereUniqueWithoutPokemonInput | CaughtPokemonUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: CaughtPokemonUpdateManyWithWhereWithoutPokemonInput | CaughtPokemonUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: CaughtPokemonScalarWhereInput | CaughtPokemonScalarWhereInput[]
  }

  export type DailyLogUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<DailyLogCreateWithoutPokemonInput, DailyLogUncheckedCreateWithoutPokemonInput> | DailyLogCreateWithoutPokemonInput[] | DailyLogUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutPokemonInput | DailyLogCreateOrConnectWithoutPokemonInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutPokemonInput | DailyLogUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: DailyLogCreateManyPokemonInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutPokemonInput | DailyLogUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutPokemonInput | DailyLogUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type GameSessionUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<GameSessionCreateWithoutPokemonInput, GameSessionUncheckedCreateWithoutPokemonInput> | GameSessionCreateWithoutPokemonInput[] | GameSessionUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutPokemonInput | GameSessionCreateOrConnectWithoutPokemonInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutPokemonInput | GameSessionUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: GameSessionCreateManyPokemonInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutPokemonInput | GameSessionUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutPokemonInput | GameSessionUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDailyPokemonNestedInput = {
    create?: XOR<UserCreateWithoutDailyPokemonInput, UserUncheckedCreateWithoutDailyPokemonInput> | UserCreateWithoutDailyPokemonInput[] | UserUncheckedCreateWithoutDailyPokemonInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDailyPokemonInput | UserCreateOrConnectWithoutDailyPokemonInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDailyPokemonInput | UserUpsertWithWhereUniqueWithoutDailyPokemonInput[]
    createMany?: UserCreateManyDailyPokemonInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDailyPokemonInput | UserUpdateWithWhereUniqueWithoutDailyPokemonInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDailyPokemonInput | UserUpdateManyWithWhereWithoutDailyPokemonInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CaughtPokemonUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<CaughtPokemonCreateWithoutPokemonInput, CaughtPokemonUncheckedCreateWithoutPokemonInput> | CaughtPokemonCreateWithoutPokemonInput[] | CaughtPokemonUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: CaughtPokemonCreateOrConnectWithoutPokemonInput | CaughtPokemonCreateOrConnectWithoutPokemonInput[]
    upsert?: CaughtPokemonUpsertWithWhereUniqueWithoutPokemonInput | CaughtPokemonUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: CaughtPokemonCreateManyPokemonInputEnvelope
    set?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    disconnect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    delete?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    connect?: CaughtPokemonWhereUniqueInput | CaughtPokemonWhereUniqueInput[]
    update?: CaughtPokemonUpdateWithWhereUniqueWithoutPokemonInput | CaughtPokemonUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: CaughtPokemonUpdateManyWithWhereWithoutPokemonInput | CaughtPokemonUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: CaughtPokemonScalarWhereInput | CaughtPokemonScalarWhereInput[]
  }

  export type DailyLogUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<DailyLogCreateWithoutPokemonInput, DailyLogUncheckedCreateWithoutPokemonInput> | DailyLogCreateWithoutPokemonInput[] | DailyLogUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutPokemonInput | DailyLogCreateOrConnectWithoutPokemonInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutPokemonInput | DailyLogUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: DailyLogCreateManyPokemonInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutPokemonInput | DailyLogUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutPokemonInput | DailyLogUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutPokemonNestedInput = {
    create?: XOR<GameSessionCreateWithoutPokemonInput, GameSessionUncheckedCreateWithoutPokemonInput> | GameSessionCreateWithoutPokemonInput[] | GameSessionUncheckedCreateWithoutPokemonInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutPokemonInput | GameSessionCreateOrConnectWithoutPokemonInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutPokemonInput | GameSessionUpsertWithWhereUniqueWithoutPokemonInput[]
    createMany?: GameSessionCreateManyPokemonInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutPokemonInput | GameSessionUpdateWithWhereUniqueWithoutPokemonInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutPokemonInput | GameSessionUpdateManyWithWhereWithoutPokemonInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDailyPokemonNestedInput = {
    create?: XOR<UserCreateWithoutDailyPokemonInput, UserUncheckedCreateWithoutDailyPokemonInput> | UserCreateWithoutDailyPokemonInput[] | UserUncheckedCreateWithoutDailyPokemonInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDailyPokemonInput | UserCreateOrConnectWithoutDailyPokemonInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDailyPokemonInput | UserUpsertWithWhereUniqueWithoutDailyPokemonInput[]
    createMany?: UserCreateManyDailyPokemonInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDailyPokemonInput | UserUpdateWithWhereUniqueWithoutDailyPokemonInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDailyPokemonInput | UserUpdateManyWithWhereWithoutDailyPokemonInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PokemonCreateNestedOneWithoutCaughtByInput = {
    create?: XOR<PokemonCreateWithoutCaughtByInput, PokemonUncheckedCreateWithoutCaughtByInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutCaughtByInput
    connect?: PokemonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCaughtPokemonInput = {
    create?: XOR<UserCreateWithoutCaughtPokemonInput, UserUncheckedCreateWithoutCaughtPokemonInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaughtPokemonInput
    connect?: UserWhereUniqueInput
  }

  export type PokemonUpdateOneRequiredWithoutCaughtByNestedInput = {
    create?: XOR<PokemonCreateWithoutCaughtByInput, PokemonUncheckedCreateWithoutCaughtByInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutCaughtByInput
    upsert?: PokemonUpsertWithoutCaughtByInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutCaughtByInput, PokemonUpdateWithoutCaughtByInput>, PokemonUncheckedUpdateWithoutCaughtByInput>
  }

  export type UserUpdateOneRequiredWithoutCaughtPokemonNestedInput = {
    create?: XOR<UserCreateWithoutCaughtPokemonInput, UserUncheckedCreateWithoutCaughtPokemonInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaughtPokemonInput
    upsert?: UserUpsertWithoutCaughtPokemonInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCaughtPokemonInput, UserUpdateWithoutCaughtPokemonInput>, UserUncheckedUpdateWithoutCaughtPokemonInput>
  }

  export type PokemonCreateNestedOneWithoutGameSessionsInput = {
    create?: XOR<PokemonCreateWithoutGameSessionsInput, PokemonUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutGameSessionsInput
    connect?: PokemonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGameSessionsInput = {
    create?: XOR<UserCreateWithoutGameSessionsInput, UserUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type PokemonUpdateOneRequiredWithoutGameSessionsNestedInput = {
    create?: XOR<PokemonCreateWithoutGameSessionsInput, PokemonUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutGameSessionsInput
    upsert?: PokemonUpsertWithoutGameSessionsInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutGameSessionsInput, PokemonUpdateWithoutGameSessionsInput>, PokemonUncheckedUpdateWithoutGameSessionsInput>
  }

  export type UserUpdateOneRequiredWithoutGameSessionsNestedInput = {
    create?: XOR<UserCreateWithoutGameSessionsInput, UserUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameSessionsInput
    upsert?: UserUpsertWithoutGameSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameSessionsInput, UserUpdateWithoutGameSessionsInput>, UserUncheckedUpdateWithoutGameSessionsInput>
  }

  export type PokemonCreateNestedOneWithoutDailyLogsInput = {
    create?: XOR<PokemonCreateWithoutDailyLogsInput, PokemonUncheckedCreateWithoutDailyLogsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutDailyLogsInput
    connect?: PokemonWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDailyLogsInput = {
    create?: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyLogsInput
    connect?: UserWhereUniqueInput
  }

  export type PokemonUpdateOneRequiredWithoutDailyLogsNestedInput = {
    create?: XOR<PokemonCreateWithoutDailyLogsInput, PokemonUncheckedCreateWithoutDailyLogsInput>
    connectOrCreate?: PokemonCreateOrConnectWithoutDailyLogsInput
    upsert?: PokemonUpsertWithoutDailyLogsInput
    connect?: PokemonWhereUniqueInput
    update?: XOR<XOR<PokemonUpdateToOneWithWhereWithoutDailyLogsInput, PokemonUpdateWithoutDailyLogsInput>, PokemonUncheckedUpdateWithoutDailyLogsInput>
  }

  export type UserUpdateOneRequiredWithoutDailyLogsNestedInput = {
    create?: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyLogsInput
    upsert?: UserUpsertWithoutDailyLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyLogsInput, UserUpdateWithoutDailyLogsInput>, UserUncheckedUpdateWithoutDailyLogsInput>
  }

  export type UserAchievementCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
  }

  export type UserAchievementUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput> | UserAchievementCreateWithoutAchievementInput[] | UserAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: UserAchievementCreateOrConnectWithoutAchievementInput | UserAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: UserAchievementUpsertWithWhereUniqueWithoutAchievementInput | UserAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: UserAchievementCreateManyAchievementInputEnvelope
    set?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    disconnect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    delete?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    connect?: UserAchievementWhereUniqueInput | UserAchievementWhereUniqueInput[]
    update?: UserAchievementUpdateWithWhereUniqueWithoutAchievementInput | UserAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: UserAchievementUpdateManyWithWhereWithoutAchievementInput | UserAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
  }

  export type AchievementCreateNestedOneWithoutUnlockedByInput = {
    create?: XOR<AchievementCreateWithoutUnlockedByInput, AchievementUncheckedCreateWithoutUnlockedByInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUnlockedByInput
    connect?: AchievementWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type AchievementUpdateOneRequiredWithoutUnlockedByNestedInput = {
    create?: XOR<AchievementCreateWithoutUnlockedByInput, AchievementUncheckedCreateWithoutUnlockedByInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutUnlockedByInput
    upsert?: AchievementUpsertWithoutUnlockedByInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutUnlockedByInput, AchievementUpdateWithoutUnlockedByInput>, AchievementUncheckedUpdateWithoutUnlockedByInput>
  }

  export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    upsert?: UserUpsertWithoutAchievementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAchievementsInput, UserUpdateWithoutAchievementsInput>, UserUncheckedUpdateWithoutAchievementsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CaughtPokemonCreateWithoutUserInput = {
    id?: string
    caughtAt?: Date | string
    critical?: boolean
    experience?: number
    pokemon: PokemonCreateNestedOneWithoutCaughtByInput
  }

  export type CaughtPokemonUncheckedCreateWithoutUserInput = {
    id?: string
    pokemonId: number
    caughtAt?: Date | string
    critical?: boolean
    experience?: number
  }

  export type CaughtPokemonCreateOrConnectWithoutUserInput = {
    where: CaughtPokemonWhereUniqueInput
    create: XOR<CaughtPokemonCreateWithoutUserInput, CaughtPokemonUncheckedCreateWithoutUserInput>
  }

  export type CaughtPokemonCreateManyUserInputEnvelope = {
    data: CaughtPokemonCreateManyUserInput | CaughtPokemonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyLogCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    attempts?: number
    caught?: boolean
    pokeballsLeft?: number
    pokemon: PokemonCreateNestedOneWithoutDailyLogsInput
  }

  export type DailyLogUncheckedCreateWithoutUserInput = {
    id?: string
    date?: Date | string
    pokemonId: number
    attempts?: number
    caught?: boolean
    pokeballsLeft?: number
  }

  export type DailyLogCreateOrConnectWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput>
  }

  export type DailyLogCreateManyUserInputEnvelope = {
    data: DailyLogCreateManyUserInput | DailyLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameSessionCreateWithoutUserInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    attempts?: number
    pokeballsUsed?: number
    success?: boolean
    pokemon: PokemonCreateNestedOneWithoutGameSessionsInput
  }

  export type GameSessionUncheckedCreateWithoutUserInput = {
    id?: string
    pokemonId: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    attempts?: number
    pokeballsUsed?: number
    success?: boolean
  }

  export type GameSessionCreateOrConnectWithoutUserInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput>
  }

  export type GameSessionCreateManyUserInputEnvelope = {
    data: GameSessionCreateManyUserInput | GameSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PokemonCreateWithoutDailyForUsersInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caughtBy?: CaughtPokemonCreateNestedManyWithoutPokemonInput
    dailyLogs?: DailyLogCreateNestedManyWithoutPokemonInput
    gameSessions?: GameSessionCreateNestedManyWithoutPokemonInput
  }

  export type PokemonUncheckedCreateWithoutDailyForUsersInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caughtBy?: CaughtPokemonUncheckedCreateNestedManyWithoutPokemonInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutPokemonInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutPokemonInput
  }

  export type PokemonCreateOrConnectWithoutDailyForUsersInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutDailyForUsersInput, PokemonUncheckedCreateWithoutDailyForUsersInput>
  }

  export type UserAchievementCreateWithoutUserInput = {
    id?: string
    unlockedAt?: Date | string
    achievement: AchievementCreateNestedOneWithoutUnlockedByInput
  }

  export type UserAchievementUncheckedCreateWithoutUserInput = {
    id?: string
    achievementId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementCreateManyUserInputEnvelope = {
    data: UserAchievementCreateManyUserInput | UserAchievementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CaughtPokemonUpsertWithWhereUniqueWithoutUserInput = {
    where: CaughtPokemonWhereUniqueInput
    update: XOR<CaughtPokemonUpdateWithoutUserInput, CaughtPokemonUncheckedUpdateWithoutUserInput>
    create: XOR<CaughtPokemonCreateWithoutUserInput, CaughtPokemonUncheckedCreateWithoutUserInput>
  }

  export type CaughtPokemonUpdateWithWhereUniqueWithoutUserInput = {
    where: CaughtPokemonWhereUniqueInput
    data: XOR<CaughtPokemonUpdateWithoutUserInput, CaughtPokemonUncheckedUpdateWithoutUserInput>
  }

  export type CaughtPokemonUpdateManyWithWhereWithoutUserInput = {
    where: CaughtPokemonScalarWhereInput
    data: XOR<CaughtPokemonUpdateManyMutationInput, CaughtPokemonUncheckedUpdateManyWithoutUserInput>
  }

  export type CaughtPokemonScalarWhereInput = {
    AND?: CaughtPokemonScalarWhereInput | CaughtPokemonScalarWhereInput[]
    OR?: CaughtPokemonScalarWhereInput[]
    NOT?: CaughtPokemonScalarWhereInput | CaughtPokemonScalarWhereInput[]
    id?: StringFilter<"CaughtPokemon"> | string
    userId?: StringFilter<"CaughtPokemon"> | string
    pokemonId?: IntFilter<"CaughtPokemon"> | number
    caughtAt?: DateTimeFilter<"CaughtPokemon"> | Date | string
    critical?: BoolFilter<"CaughtPokemon"> | boolean
    experience?: IntFilter<"CaughtPokemon"> | number
  }

  export type DailyLogUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    update: XOR<DailyLogUpdateWithoutUserInput, DailyLogUncheckedUpdateWithoutUserInput>
    create: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput>
  }

  export type DailyLogUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    data: XOR<DailyLogUpdateWithoutUserInput, DailyLogUncheckedUpdateWithoutUserInput>
  }

  export type DailyLogUpdateManyWithWhereWithoutUserInput = {
    where: DailyLogScalarWhereInput
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyLogScalarWhereInput = {
    AND?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    OR?: DailyLogScalarWhereInput[]
    NOT?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    id?: StringFilter<"DailyLog"> | string
    userId?: StringFilter<"DailyLog"> | string
    date?: DateTimeFilter<"DailyLog"> | Date | string
    pokemonId?: IntFilter<"DailyLog"> | number
    attempts?: IntFilter<"DailyLog"> | number
    caught?: BoolFilter<"DailyLog"> | boolean
    pokeballsLeft?: IntFilter<"DailyLog"> | number
  }

  export type GameSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutUserInput, GameSessionUncheckedUpdateWithoutUserInput>
    create: XOR<GameSessionCreateWithoutUserInput, GameSessionUncheckedCreateWithoutUserInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutUserInput, GameSessionUncheckedUpdateWithoutUserInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutUserInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type GameSessionScalarWhereInput = {
    AND?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    OR?: GameSessionScalarWhereInput[]
    NOT?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    id?: StringFilter<"GameSession"> | string
    userId?: StringFilter<"GameSession"> | string
    pokemonId?: IntFilter<"GameSession"> | number
    startedAt?: DateTimeFilter<"GameSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    attempts?: IntFilter<"GameSession"> | number
    pokeballsUsed?: IntFilter<"GameSession"> | number
    success?: BoolFilter<"GameSession"> | boolean
  }

  export type PokemonUpsertWithoutDailyForUsersInput = {
    update: XOR<PokemonUpdateWithoutDailyForUsersInput, PokemonUncheckedUpdateWithoutDailyForUsersInput>
    create: XOR<PokemonCreateWithoutDailyForUsersInput, PokemonUncheckedCreateWithoutDailyForUsersInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutDailyForUsersInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutDailyForUsersInput, PokemonUncheckedUpdateWithoutDailyForUsersInput>
  }

  export type PokemonUpdateWithoutDailyForUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caughtBy?: CaughtPokemonUpdateManyWithoutPokemonNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutPokemonNestedInput
    gameSessions?: GameSessionUpdateManyWithoutPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutDailyForUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caughtBy?: CaughtPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutPokemonNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutPokemonNestedInput
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
    create: XOR<UserAchievementCreateWithoutUserInput, UserAchievementUncheckedCreateWithoutUserInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutUserInput, UserAchievementUncheckedUpdateWithoutUserInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutUserInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAchievementScalarWhereInput = {
    AND?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    OR?: UserAchievementScalarWhereInput[]
    NOT?: UserAchievementScalarWhereInput | UserAchievementScalarWhereInput[]
    id?: StringFilter<"UserAchievement"> | string
    userId?: StringFilter<"UserAchievement"> | string
    achievementId?: StringFilter<"UserAchievement"> | string
    unlockedAt?: DateTimeFilter<"UserAchievement"> | Date | string
  }

  export type CaughtPokemonCreateWithoutPokemonInput = {
    id?: string
    caughtAt?: Date | string
    critical?: boolean
    experience?: number
    user: UserCreateNestedOneWithoutCaughtPokemonInput
  }

  export type CaughtPokemonUncheckedCreateWithoutPokemonInput = {
    id?: string
    userId: string
    caughtAt?: Date | string
    critical?: boolean
    experience?: number
  }

  export type CaughtPokemonCreateOrConnectWithoutPokemonInput = {
    where: CaughtPokemonWhereUniqueInput
    create: XOR<CaughtPokemonCreateWithoutPokemonInput, CaughtPokemonUncheckedCreateWithoutPokemonInput>
  }

  export type CaughtPokemonCreateManyPokemonInputEnvelope = {
    data: CaughtPokemonCreateManyPokemonInput | CaughtPokemonCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type DailyLogCreateWithoutPokemonInput = {
    id?: string
    date?: Date | string
    attempts?: number
    caught?: boolean
    pokeballsLeft?: number
    user: UserCreateNestedOneWithoutDailyLogsInput
  }

  export type DailyLogUncheckedCreateWithoutPokemonInput = {
    id?: string
    userId: string
    date?: Date | string
    attempts?: number
    caught?: boolean
    pokeballsLeft?: number
  }

  export type DailyLogCreateOrConnectWithoutPokemonInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutPokemonInput, DailyLogUncheckedCreateWithoutPokemonInput>
  }

  export type DailyLogCreateManyPokemonInputEnvelope = {
    data: DailyLogCreateManyPokemonInput | DailyLogCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type GameSessionCreateWithoutPokemonInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    attempts?: number
    pokeballsUsed?: number
    success?: boolean
    user: UserCreateNestedOneWithoutGameSessionsInput
  }

  export type GameSessionUncheckedCreateWithoutPokemonInput = {
    id?: string
    userId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    attempts?: number
    pokeballsUsed?: number
    success?: boolean
  }

  export type GameSessionCreateOrConnectWithoutPokemonInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutPokemonInput, GameSessionUncheckedCreateWithoutPokemonInput>
  }

  export type GameSessionCreateManyPokemonInputEnvelope = {
    data: GameSessionCreateManyPokemonInput | GameSessionCreateManyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDailyPokemonInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionCreateNestedManyWithoutUserInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyPokemonInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonUncheckedCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyPokemonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyPokemonInput, UserUncheckedCreateWithoutDailyPokemonInput>
  }

  export type UserCreateManyDailyPokemonInputEnvelope = {
    data: UserCreateManyDailyPokemonInput | UserCreateManyDailyPokemonInput[]
    skipDuplicates?: boolean
  }

  export type CaughtPokemonUpsertWithWhereUniqueWithoutPokemonInput = {
    where: CaughtPokemonWhereUniqueInput
    update: XOR<CaughtPokemonUpdateWithoutPokemonInput, CaughtPokemonUncheckedUpdateWithoutPokemonInput>
    create: XOR<CaughtPokemonCreateWithoutPokemonInput, CaughtPokemonUncheckedCreateWithoutPokemonInput>
  }

  export type CaughtPokemonUpdateWithWhereUniqueWithoutPokemonInput = {
    where: CaughtPokemonWhereUniqueInput
    data: XOR<CaughtPokemonUpdateWithoutPokemonInput, CaughtPokemonUncheckedUpdateWithoutPokemonInput>
  }

  export type CaughtPokemonUpdateManyWithWhereWithoutPokemonInput = {
    where: CaughtPokemonScalarWhereInput
    data: XOR<CaughtPokemonUpdateManyMutationInput, CaughtPokemonUncheckedUpdateManyWithoutPokemonInput>
  }

  export type DailyLogUpsertWithWhereUniqueWithoutPokemonInput = {
    where: DailyLogWhereUniqueInput
    update: XOR<DailyLogUpdateWithoutPokemonInput, DailyLogUncheckedUpdateWithoutPokemonInput>
    create: XOR<DailyLogCreateWithoutPokemonInput, DailyLogUncheckedCreateWithoutPokemonInput>
  }

  export type DailyLogUpdateWithWhereUniqueWithoutPokemonInput = {
    where: DailyLogWhereUniqueInput
    data: XOR<DailyLogUpdateWithoutPokemonInput, DailyLogUncheckedUpdateWithoutPokemonInput>
  }

  export type DailyLogUpdateManyWithWhereWithoutPokemonInput = {
    where: DailyLogScalarWhereInput
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyWithoutPokemonInput>
  }

  export type GameSessionUpsertWithWhereUniqueWithoutPokemonInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutPokemonInput, GameSessionUncheckedUpdateWithoutPokemonInput>
    create: XOR<GameSessionCreateWithoutPokemonInput, GameSessionUncheckedCreateWithoutPokemonInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutPokemonInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutPokemonInput, GameSessionUncheckedUpdateWithoutPokemonInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutPokemonInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutPokemonInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDailyPokemonInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDailyPokemonInput, UserUncheckedUpdateWithoutDailyPokemonInput>
    create: XOR<UserCreateWithoutDailyPokemonInput, UserUncheckedCreateWithoutDailyPokemonInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDailyPokemonInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDailyPokemonInput, UserUncheckedUpdateWithoutDailyPokemonInput>
  }

  export type UserUpdateManyWithWhereWithoutDailyPokemonInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDailyPokemonInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    level?: IntFilter<"User"> | number
    experience?: IntFilter<"User"> | number
    pokeballs?: IntFilter<"User"> | number
    maxPokeballs?: IntFilter<"User"> | number
    lastGameDate?: DateTimeNullableFilter<"User"> | Date | string | null
    dailyPokemonId?: IntNullableFilter<"User"> | number | null
    dailyAttempts?: IntFilter<"User"> | number
    caughtToday?: BoolFilter<"User"> | boolean
    currentStreak?: IntFilter<"User"> | number
    maxStreak?: IntFilter<"User"> | number
    totalCatches?: IntFilter<"User"> | number
  }

  export type PokemonCreateWithoutCaughtByInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyLogs?: DailyLogCreateNestedManyWithoutPokemonInput
    gameSessions?: GameSessionCreateNestedManyWithoutPokemonInput
    dailyForUsers?: UserCreateNestedManyWithoutDailyPokemonInput
  }

  export type PokemonUncheckedCreateWithoutCaughtByInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutPokemonInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutPokemonInput
    dailyForUsers?: UserUncheckedCreateNestedManyWithoutDailyPokemonInput
  }

  export type PokemonCreateOrConnectWithoutCaughtByInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutCaughtByInput, PokemonUncheckedCreateWithoutCaughtByInput>
  }

  export type UserCreateWithoutCaughtPokemonInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionCreateNestedManyWithoutUserInput
    dailyPokemon?: PokemonCreateNestedOneWithoutDailyForUsersInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCaughtPokemonInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyPokemonId?: number | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCaughtPokemonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCaughtPokemonInput, UserUncheckedCreateWithoutCaughtPokemonInput>
  }

  export type PokemonUpsertWithoutCaughtByInput = {
    update: XOR<PokemonUpdateWithoutCaughtByInput, PokemonUncheckedUpdateWithoutCaughtByInput>
    create: XOR<PokemonCreateWithoutCaughtByInput, PokemonUncheckedCreateWithoutCaughtByInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutCaughtByInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutCaughtByInput, PokemonUncheckedUpdateWithoutCaughtByInput>
  }

  export type PokemonUpdateWithoutCaughtByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyLogs?: DailyLogUpdateManyWithoutPokemonNestedInput
    gameSessions?: GameSessionUpdateManyWithoutPokemonNestedInput
    dailyForUsers?: UserUpdateManyWithoutDailyPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutCaughtByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutPokemonNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutPokemonNestedInput
    dailyForUsers?: UserUncheckedUpdateManyWithoutDailyPokemonNestedInput
  }

  export type UserUpsertWithoutCaughtPokemonInput = {
    update: XOR<UserUpdateWithoutCaughtPokemonInput, UserUncheckedUpdateWithoutCaughtPokemonInput>
    create: XOR<UserCreateWithoutCaughtPokemonInput, UserUncheckedCreateWithoutCaughtPokemonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCaughtPokemonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCaughtPokemonInput, UserUncheckedUpdateWithoutCaughtPokemonInput>
  }

  export type UserUpdateWithoutCaughtPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUpdateManyWithoutUserNestedInput
    dailyPokemon?: PokemonUpdateOneWithoutDailyForUsersNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCaughtPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PokemonCreateWithoutGameSessionsInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caughtBy?: CaughtPokemonCreateNestedManyWithoutPokemonInput
    dailyLogs?: DailyLogCreateNestedManyWithoutPokemonInput
    dailyForUsers?: UserCreateNestedManyWithoutDailyPokemonInput
  }

  export type PokemonUncheckedCreateWithoutGameSessionsInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caughtBy?: CaughtPokemonUncheckedCreateNestedManyWithoutPokemonInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutPokemonInput
    dailyForUsers?: UserUncheckedCreateNestedManyWithoutDailyPokemonInput
  }

  export type PokemonCreateOrConnectWithoutGameSessionsInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutGameSessionsInput, PokemonUncheckedCreateWithoutGameSessionsInput>
  }

  export type UserCreateWithoutGameSessionsInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    dailyPokemon?: PokemonCreateNestedOneWithoutDailyForUsersInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGameSessionsInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyPokemonId?: number | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonUncheckedCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGameSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameSessionsInput, UserUncheckedCreateWithoutGameSessionsInput>
  }

  export type PokemonUpsertWithoutGameSessionsInput = {
    update: XOR<PokemonUpdateWithoutGameSessionsInput, PokemonUncheckedUpdateWithoutGameSessionsInput>
    create: XOR<PokemonCreateWithoutGameSessionsInput, PokemonUncheckedCreateWithoutGameSessionsInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutGameSessionsInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutGameSessionsInput, PokemonUncheckedUpdateWithoutGameSessionsInput>
  }

  export type PokemonUpdateWithoutGameSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caughtBy?: CaughtPokemonUpdateManyWithoutPokemonNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutPokemonNestedInput
    dailyForUsers?: UserUpdateManyWithoutDailyPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutGameSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caughtBy?: CaughtPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutPokemonNestedInput
    dailyForUsers?: UserUncheckedUpdateManyWithoutDailyPokemonNestedInput
  }

  export type UserUpsertWithoutGameSessionsInput = {
    update: XOR<UserUpdateWithoutGameSessionsInput, UserUncheckedUpdateWithoutGameSessionsInput>
    create: XOR<UserCreateWithoutGameSessionsInput, UserUncheckedCreateWithoutGameSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameSessionsInput, UserUncheckedUpdateWithoutGameSessionsInput>
  }

  export type UserUpdateWithoutGameSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    dailyPokemon?: PokemonUpdateOneWithoutDailyForUsersNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGameSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUncheckedUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PokemonCreateWithoutDailyLogsInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caughtBy?: CaughtPokemonCreateNestedManyWithoutPokemonInput
    gameSessions?: GameSessionCreateNestedManyWithoutPokemonInput
    dailyForUsers?: UserCreateNestedManyWithoutDailyPokemonInput
  }

  export type PokemonUncheckedCreateWithoutDailyLogsInput = {
    id: number
    name: string
    sprite: string
    spriteShiny?: string | null
    types?: PokemonCreatetypesInput | string[]
    height: number
    weight: number
    baseExperience: number
    isLegendary?: boolean
    captureRate?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    caughtBy?: CaughtPokemonUncheckedCreateNestedManyWithoutPokemonInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutPokemonInput
    dailyForUsers?: UserUncheckedCreateNestedManyWithoutDailyPokemonInput
  }

  export type PokemonCreateOrConnectWithoutDailyLogsInput = {
    where: PokemonWhereUniqueInput
    create: XOR<PokemonCreateWithoutDailyLogsInput, PokemonUncheckedCreateWithoutDailyLogsInput>
  }

  export type UserCreateWithoutDailyLogsInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionCreateNestedManyWithoutUserInput
    dailyPokemon?: PokemonCreateNestedOneWithoutDailyForUsersInput
    achievements?: UserAchievementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyLogsInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyPokemonId?: number | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonUncheckedCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutUserInput
    achievements?: UserAchievementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
  }

  export type PokemonUpsertWithoutDailyLogsInput = {
    update: XOR<PokemonUpdateWithoutDailyLogsInput, PokemonUncheckedUpdateWithoutDailyLogsInput>
    create: XOR<PokemonCreateWithoutDailyLogsInput, PokemonUncheckedCreateWithoutDailyLogsInput>
    where?: PokemonWhereInput
  }

  export type PokemonUpdateToOneWithWhereWithoutDailyLogsInput = {
    where?: PokemonWhereInput
    data: XOR<PokemonUpdateWithoutDailyLogsInput, PokemonUncheckedUpdateWithoutDailyLogsInput>
  }

  export type PokemonUpdateWithoutDailyLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caughtBy?: CaughtPokemonUpdateManyWithoutPokemonNestedInput
    gameSessions?: GameSessionUpdateManyWithoutPokemonNestedInput
    dailyForUsers?: UserUpdateManyWithoutDailyPokemonNestedInput
  }

  export type PokemonUncheckedUpdateWithoutDailyLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sprite?: StringFieldUpdateOperationsInput | string
    spriteShiny?: NullableStringFieldUpdateOperationsInput | string | null
    types?: PokemonUpdatetypesInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    baseExperience?: IntFieldUpdateOperationsInput | number
    isLegendary?: BoolFieldUpdateOperationsInput | boolean
    captureRate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caughtBy?: CaughtPokemonUncheckedUpdateManyWithoutPokemonNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutPokemonNestedInput
    dailyForUsers?: UserUncheckedUpdateManyWithoutDailyPokemonNestedInput
  }

  export type UserUpsertWithoutDailyLogsInput = {
    update: XOR<UserUpdateWithoutDailyLogsInput, UserUncheckedUpdateWithoutDailyLogsInput>
    create: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyLogsInput, UserUncheckedUpdateWithoutDailyLogsInput>
  }

  export type UserUpdateWithoutDailyLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUpdateManyWithoutUserNestedInput
    dailyPokemon?: PokemonUpdateOneWithoutDailyForUsersNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUncheckedUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAchievementCreateWithoutAchievementInput = {
    id?: string
    unlockedAt?: Date | string
    user: UserCreateNestedOneWithoutAchievementsInput
  }

  export type UserAchievementUncheckedCreateWithoutAchievementInput = {
    id?: string
    userId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementCreateOrConnectWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementCreateManyAchievementInputEnvelope = {
    data: UserAchievementCreateManyAchievementInput | UserAchievementCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type UserAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    update: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
    create: XOR<UserAchievementCreateWithoutAchievementInput, UserAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type UserAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: UserAchievementWhereUniqueInput
    data: XOR<UserAchievementUpdateWithoutAchievementInput, UserAchievementUncheckedUpdateWithoutAchievementInput>
  }

  export type UserAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: UserAchievementScalarWhereInput
    data: XOR<UserAchievementUpdateManyMutationInput, UserAchievementUncheckedUpdateManyWithoutAchievementInput>
  }

  export type AchievementCreateWithoutUnlockedByInput = {
    id?: string
    name: string
    description: string
    icon: string
    condition: string
    reward: JsonNullValueInput | InputJsonValue
  }

  export type AchievementUncheckedCreateWithoutUnlockedByInput = {
    id?: string
    name: string
    description: string
    icon: string
    condition: string
    reward: JsonNullValueInput | InputJsonValue
  }

  export type AchievementCreateOrConnectWithoutUnlockedByInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutUnlockedByInput, AchievementUncheckedCreateWithoutUnlockedByInput>
  }

  export type UserCreateWithoutAchievementsInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionCreateNestedManyWithoutUserInput
    dailyPokemon?: PokemonCreateNestedOneWithoutDailyForUsersInput
  }

  export type UserUncheckedCreateWithoutAchievementsInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyPokemonId?: number | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
    caughtPokemon?: CaughtPokemonUncheckedCreateNestedManyWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
  }

  export type AchievementUpsertWithoutUnlockedByInput = {
    update: XOR<AchievementUpdateWithoutUnlockedByInput, AchievementUncheckedUpdateWithoutUnlockedByInput>
    create: XOR<AchievementCreateWithoutUnlockedByInput, AchievementUncheckedCreateWithoutUnlockedByInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutUnlockedByInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutUnlockedByInput, AchievementUncheckedUpdateWithoutUnlockedByInput>
  }

  export type AchievementUpdateWithoutUnlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    reward?: JsonNullValueInput | InputJsonValue
  }

  export type AchievementUncheckedUpdateWithoutUnlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    reward?: JsonNullValueInput | InputJsonValue
  }

  export type UserUpsertWithoutAchievementsInput = {
    update: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUpdateManyWithoutUserNestedInput
    dailyPokemon?: PokemonUpdateOneWithoutDailyForUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPokemonId?: NullableIntFieldUpdateOperationsInput | number | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUncheckedUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CaughtPokemonCreateManyUserInput = {
    id?: string
    pokemonId: number
    caughtAt?: Date | string
    critical?: boolean
    experience?: number
  }

  export type DailyLogCreateManyUserInput = {
    id?: string
    date?: Date | string
    pokemonId: number
    attempts?: number
    caught?: boolean
    pokeballsLeft?: number
  }

  export type GameSessionCreateManyUserInput = {
    id?: string
    pokemonId: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    attempts?: number
    pokeballsUsed?: number
    success?: boolean
  }

  export type UserAchievementCreateManyUserInput = {
    id?: string
    achievementId: string
    unlockedAt?: Date | string
  }

  export type CaughtPokemonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
    pokemon?: PokemonUpdateOneRequiredWithoutCaughtByNestedInput
  }

  export type CaughtPokemonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type CaughtPokemonUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
    pokemon?: PokemonUpdateOneRequiredWithoutDailyLogsNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
  }

  export type GameSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    pokemon?: PokemonUpdateOneRequiredWithoutGameSessionsNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemonId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAchievementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutUnlockedByNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaughtPokemonCreateManyPokemonInput = {
    id?: string
    userId: string
    caughtAt?: Date | string
    critical?: boolean
    experience?: number
  }

  export type DailyLogCreateManyPokemonInput = {
    id?: string
    userId: string
    date?: Date | string
    attempts?: number
    caught?: boolean
    pokeballsLeft?: number
  }

  export type GameSessionCreateManyPokemonInput = {
    id?: string
    userId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    attempts?: number
    pokeballsUsed?: number
    success?: boolean
  }

  export type UserCreateManyDailyPokemonInput = {
    id?: string
    username: string
    nickname?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    level?: number
    experience?: number
    pokeballs?: number
    maxPokeballs?: number
    lastGameDate?: Date | string | null
    dailyAttempts?: number
    caughtToday?: boolean
    currentStreak?: number
    maxStreak?: number
    totalCatches?: number
  }

  export type CaughtPokemonUpdateWithoutPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCaughtPokemonNestedInput
  }

  export type CaughtPokemonUncheckedUpdateWithoutPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type CaughtPokemonUncheckedUpdateManyWithoutPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    caughtAt?: DateTimeFieldUpdateOperationsInput | Date | string
    critical?: BoolFieldUpdateOperationsInput | boolean
    experience?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogUpdateWithoutPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDailyLogsNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
  }

  export type DailyLogUncheckedUpdateManyWithoutPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    caught?: BoolFieldUpdateOperationsInput | boolean
    pokeballsLeft?: IntFieldUpdateOperationsInput | number
  }

  export type GameSessionUpdateWithoutPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGameSessionsNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionUncheckedUpdateManyWithoutPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: IntFieldUpdateOperationsInput | number
    pokeballsUsed?: IntFieldUpdateOperationsInput | number
    success?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpdateWithoutDailyPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
    caughtPokemon?: CaughtPokemonUncheckedUpdateManyWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    gameSessions?: GameSessionUncheckedUpdateManyWithoutUserNestedInput
    achievements?: UserAchievementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDailyPokemonInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    pokeballs?: IntFieldUpdateOperationsInput | number
    maxPokeballs?: IntFieldUpdateOperationsInput | number
    lastGameDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyAttempts?: IntFieldUpdateOperationsInput | number
    caughtToday?: BoolFieldUpdateOperationsInput | boolean
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    totalCatches?: IntFieldUpdateOperationsInput | number
  }

  export type UserAchievementCreateManyAchievementInput = {
    id?: string
    userId: string
    unlockedAt?: Date | string
  }

  export type UserAchievementUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type UserAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    unlockedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PokemonCountOutputTypeDefaultArgs instead
     */
    export type PokemonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PokemonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AchievementCountOutputTypeDefaultArgs instead
     */
    export type AchievementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AchievementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PokemonDefaultArgs instead
     */
    export type PokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PokemonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CaughtPokemonDefaultArgs instead
     */
    export type CaughtPokemonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CaughtPokemonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GameSessionDefaultArgs instead
     */
    export type GameSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GameSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyLogDefaultArgs instead
     */
    export type DailyLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AchievementDefaultArgs instead
     */
    export type AchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AchievementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAchievementDefaultArgs instead
     */
    export type UserAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAchievementDefaultArgs<ExtArgs>

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