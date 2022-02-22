import { NumberLike, Not, Stringify } from './index'
// type 类型 工具

// 可为空
export type Nullable<T> = T | null | undefined

// 获取types类型的key合集
export type Clothes<source, types> = {
  [K in keyof source]: source[K] extends types ? K : never
}[keyof source]

// 挑选指定类型成为新的类型
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 过滤类型
export type FilterType<Source, Types> = Pick<
  Source,
  {
    [K in keyof Source]: Source[K] extends Types ? K : never
  }[keyof Source]
>

/**
 *  T : 待编辑的基本类型
 *  K : 要删除的类型
 */
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

// 将属性变成可选
export type Partial<T> = {
  [P in keyof T]?: T[P]
}

// 删除类型集合
export type Exclude<T, U> = T extends U ? never : T

// 差异
export type Diff<T, C> = Exclude<T, C> | Exclude<C, T>

// 所有属性变成只读
export type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

// 获取函数 T 的返回类型
export type ReturnType<T = any> = T extends (...args: any) => infer R ? R : any

// 获取函数参数数组
export type Parameters<T> = T extends (...arg: infer P) => void ? P : string

// 判断左侧类型是否可以分配给右侧类型
export type CheckLeftIsExtendsRight<T, R> = T extends R ? true : false

// 判断左侧类型是否和右侧类型一致 // 修改
export type IsEqual<
  L extends NumberLike,
  R extends NumberLike,
  Strict extends boolean = true
> = Strict extends true
  ? CheckLeftIsExtendsRight<L, R>
  : CheckLeftIsExtendsRight<Stringify<L>, Stringify<R>>

// 判断左侧类型是否和右侧类型不一致
export type IsNotEqual<
  L extends NumberLike,
  R extends NumberLike,
  Strict extends boolean = true
> = Not<IsEqual<L, R, Strict>>

// 是否为Any
export type IsAny<T> = 0 extends 1 & T ? true : false
