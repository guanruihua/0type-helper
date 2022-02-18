import { IsZero, Or, Pop, IsNotEqual } from './index'

export type GetTupleHelper<
  Length extends number = 0,
  R extends unknown[] = []
> = R['length'] extends Length ? R : GetTupleHelper<Length, [...R, unknown]>

// 构造长度一定（Length）的元组
export type GetTuple<Length extends number = 0> = GetTupleHelper<Length>

export type IntAddSingleHepler<N1 extends number, N2 extends number> = [
  ...GetTuple<N1>,
  ...GetTuple<N2>
]['length']

// T 意为 Tuple 元组
export type CompareHelper<
  N1 extends number,
  N2 extends number,
  T1 extends unknown[] = GetTuple<N1>,
  T2 extends unknown[] = GetTuple<N2>
> = IsNotEqual<N1, N2, true> extends true
  ? Or<IsZero<T1['length']>, IsZero<T2['length']>> extends true
    ? IsZero<T1['length']> extends true
      ? false
      : true
    : CompareHelper<Pop<T1>['length'], Pop<T2>['length']>
  : false

// 比较两个数字类型大小
export type Compare<N1 extends number, N2 extends number> = CompareHelper<
  N1,
  N2
>

export type IntMinusSingleAbsHelper<
  N1 extends number,
  N2 extends number,
  T1 extends unknown[] = GetTuple<N1>,
  T2 extends unknown[] = GetTuple<N2>
> = IsNotEqual<N1, N2, true> extends true
  ? Or<IsZero<T1['length']>, IsZero<T2['length']>> extends true
    ? IsZero<T1['length']> extends true
      ? T2['length']
      : T1['length']
    : IntMinusSingleAbsHelper<Pop<T1>['length'], Pop<T2>['length']>
  : 0


