import { CheckLeftIsExtendsRight, IsEqual } from './utils'
import { CanStringified } from './string'
import { And, Not, Or } from './calc'
import { IntAddSingle } from './number'

type IsTempEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T1
>() => T1 extends B ? 1 : 2
  ? true
  : false

// type FilterHelper<
//   T extends unknown[],
//   C,
//   Strict extends boolean,
//   Offset extends number = 0,
//   Cache extends unknown[] = []
// > = Offset extends T["length"]
//   ? Cache
//   : FilterHelper<
//       T,
//       C,
//       Strict,
//       IntAddSingle<Offset, 1>,
//       And<Strict, IsEqual<T[Offset], C>> extends true
//         ? Push<Cache, T[Offset]>
//         : And<
//             Not<Strict>,
//             CheckLeftIsExtendsRight<T[Offset], C>
//           > extends true
//         ? Push<Cache, T[Offset]>
//         : Cache
//     >

/**
 * 过滤出元组类型中符合条件的类型
 * @example
 * type Result = Filter<['1', '2', 3, any, 1], 1, true> // [1]
 */
export type Filter<
  T extends unknown[],
  C,
  Strict extends boolean = false
> = FilterHelper<T, C, Strict>

type FilterHelper<
  T extends unknown[],
  C,
  Strict extends boolean,
  Offset extends number = 0,
  Cache extends unknown[] = []
> = Offset extends T['length']
  ? Cache
  : FilterHelper<
      T,
      C,
      Strict,
      IntAddSingle<Offset, 1>,
      And<Strict, IsTempEqual<T[Offset], C>> extends true
        ? Push<Cache, T[Offset]>
        : And<Not<Strict>, CheckLeftIsExtendsRight<T[Offset], C>> extends true
        ? Push<Cache, T[Offset]>
        : Cache
    >

/**
 * 以指定类型填充元组类型
 * @example
 * type Result = Fill<['1', '2', 3, any], 1> // [1, 1, 1, 1]
 */
export type Fill<T extends unknown[], F = undefined> = FillHelper<T, F>
type FillHelper<
  T extends unknown[],
  F,
  Offset extends number = 0
> = T["length"] extends 0
  ? F[]
  : Offset extends T["length"]
  ? IsTempEqual<T, F[]> extends true /** any[] -> T[] */
    ? T
    : F[]
  : FillHelper<Push<Shift<T>, F>, F, IntAddSingle<Offset, 1>>

type SomeHelper<
  T extends unknown[],
  Check,
  Offset extends number = 0,
  CacheBool extends boolean = false
> = T['length'] extends Offset
  ? CacheBool
  : SomeHelper<
      T,
      Check,
      IntAddSingle<Offset, 1>,
      Or<CheckLeftIsExtendsRight<T[Offset], Check>, CacheBool>
    >

/**
 * 校验元组中是否有类型符合条件
 * @example
 * type Result = Every<['1', '2', 3], number> // true
 */
export type Some<T extends unknown[], Check> = SomeHelper<T, Check>

type EveryHelper<
  T extends unknown[],
  Check,
  Offset extends number = 0,
  CacheBool extends boolean = true
> = T['length'] extends Offset
  ? CacheBool
  : EveryHelper<
      T,
      Check,
      IntAddSingle<Offset, 1>,
      And<CheckLeftIsExtendsRight<T[Offset], Check>, CacheBool>
    >

/**
 * 校验元组中每个类型是否都符合条件
 * @example
 * type Result = Every<[1, 2, 3], number> // true
 */
export type Every<T extends unknown[], Check> = T['length'] extends 0
  ? false
  : EveryHelper<T, Check>

/*--- start ---*/
/**
 * @description 从数组类型构造联合型
 * [number, string] => number | string
 */

export type TupleToUnion<T extends unknown[]> = T[number]

/*--- end ---*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Pop<T extends unknown[]> = T extends [...infer rest, infer R]
  ? rest
  : never

/**
 * 在元组最后插入一位
 * @example
 * type Result = Push<[1, 2, 3], 4> // [1, 2, 3， 4]
 */
export type Push<T extends unknown[], Item> = [...T, Item]

/**
 * 去除元组最开始元素
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Shift<T extends unknown[]> = T extends [infer R, ...infer rest]
  ? rest
  : never
/**
 * 在元组最开始插入元素
 */
export type UnShift<T extends unknown[], Item> = [Item, ...T]

/*--- start ---*/

type GetTupleHelper<
  Length extends number = 0,
  R extends unknown[] = []
> = R['length'] extends Length ? R : GetTupleHelper<Length, [...R, unknown]>

/* 构造指定长度元组 */
export type GetTuple<Length extends number = 0> = GetTupleHelper<Length>

/*--- end ---*/

/*--- start ---*/

type SetHelper<
  T extends unknown[],
  Index extends number,
  Value,
  Offset extends number = 0,
  Cache extends unknown[] = []
> = Offset extends T['length']
  ? Cache
  : SetHelper<
      T,
      Index,
      Value,
      IntAddSingle<Offset, 1>,
      Push<Cache, Offset extends Index ? Value : T[Offset]>
    >

/**
 * 更改元组中指定索引位的类型
 * @example
 * type Result = ArraySet<[1, 2, 3], 2, 4> // [1, 2, 4]
 */
export type ArraySet<
  T extends unknown[],
  Index extends number,
  Value
> = SetHelper<T, Index, Value>

/*--- end ---*/

// 连接两个数组
export type Concat<T extends unknown[], R extends unknown[]> = [...T, ...R]

/**
 * 将元组类型拼接成字符串类型
 * @example
 * type Result = Join<[1, 2, 3]> // "1,2,3"
 */
export type Join<
  T extends CanStringified[],
  SplitStr extends CanStringified = ','
> = T['length'] extends 0
  ? ''
  : T extends [infer Left, ...infer RightRest]
  ? Left extends CanStringified
    ? RightRest extends CanStringified[]
      ? `${Left}${T['length'] extends 1 ? '' : SplitStr}${Join<
          RightRest,
          SplitStr
        >}`
      : never
    : never
  : never
