import { Split } from './string'
// import { Every } from './array';
import { Not, Stringify, CheckLeftIsExtendsRight } from './index'
import { IntAddSingleHepler, IntMinusSingleAbsHelper } from './helper'

export type NumberLike = number | `${number}`

/**
 * 等于 0
 */ 
export type IsZero<N extends NumberLike> = CheckLeftIsExtendsRight<N, 0 | '0'>

/** 大于 0 */ 
export type IsOverZero<N extends NumberLike> = IsZero<N> extends true
  ? false
  : Stringify<N> extends `${'-'}${infer Rest}` ? false : true // eslint-disable-line
      
/** 小于 0 */
export type IsLessZero<N extends NumberLike> = Not<IsOverZero<N>>

// 是否为浮点型
/**
 * number类型是否是小数
 * @example
 * type Result = IsFloat<1.2> // true
 */
// export type IsFloat<
//   N extends NumberLike,
//   OnlyCheckPoint extends boolean = true
// > = Stringify<N> extends `${infer Left}${"."}${infer Right}`
//   ? OnlyCheckPoint extends true
//     ? true
//     : Not<Every<Split<Right>, "0">>
//   : false

// 是否为整型
/**
 * number类型是否是整数
 * @example
 * type Result = IsInt<1> // true
 */
// export type IsInt<
//   N extends NumberLike,
//   OnlyCheckPoint extends boolean = true
// > = Not<IsFloat<N, OnlyCheckPoint>>

// 正整数（和0）加法，T1，T2最大999
export type IntAddSingle<
  N1 extends number,
  N2 extends number
> = IntAddSingleHepler<N1, N2> extends number
  ? IntAddSingleHepler<N1, N2>
  : number

// 两个数字类型相减，得到绝对值
export type IntMinusSingleAbs<
  N1 extends number,
  N2 extends number
> = IntMinusSingleAbsHelper<N1, N2>

// 数字相等
export type IsNumberEqual<
  L extends NumberLike,
  R extends NumberLike,
  Strict extends boolean = true
> = Strict extends true
  ? CheckLeftIsExtendsRight<L, R>
  : CheckLeftIsExtendsRight<Stringify<L>, Stringify<R>>

// 数字不相等
export type IsNumberNotEqual<
  L extends NumberLike,
  R extends NumberLike,
  Strict extends boolean = true
> = Not<IsNumberEqual<L, R, Strict>>
