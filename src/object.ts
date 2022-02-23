import { Nullable } from './utils'
// 对象类型所有键转联合类型
export type KeysToUnion<T> = keyof T

// 获取对象类型值构成的联合类型
export type Values<T> = T[KeysToUnion<T>]

// 获取对象来类型键构成的元组类型
export type KeysToTuple<T> = KeysToUnion<T>[]

// 过滤出符合类型V的属性
export type ExtractValues<T, V> = {
  [Key in keyof T as T[Key] extends V ? Key : never]: T[Key]
}

// 过滤出不符合类型V的属性
export type ExchudeValues<T, V> = {
  [Key in keyof T as T[Key] extends V ? Key : never]: T[Key]
}

// 向对象类型中添加get和set前缀
export type GetterSetterPrefix<T> = {
  [Key in keyof T as Key extends string ? `get${Capitalize<Key>}` : never]: {
    (): T[Key]
  }
} & {
  [Key in keyof T as Key extends string ? `set${Capitalize<Key>}` : never]: {
    (val: T[Key]): void
  }
} & T

// 将对象类型的每个属性转为 get 和 set 形式
export type Proxify<T> = {
  [P in keyof T]: {
    get(): T[P]
    set(v: T[P]): void
  }
}

// 将对象每个属性值转为可为空
export type NullableValue<T> = {
  [Key in keyof T]?: Nullable<T[Key]>
}

// 提取出符合类型U的键名称构造新的对象类型
export type ObjectIncludes<T extends object, U extends keyof any> = {
  [Key in keyof T as Key extends U ? Key : never]: T[Key]
}

// 将对象类型填充为类型T
export type ChangeRecordType<K, T = undefined> = {
  [P in keyof K]?: T
}

// 变为可重写类型
export type ObjectMutable<T> = {
  -readonly [P in keyof T]: T[P]
}

// 变为只读且可选
export type ReadonlyParial<T> = {
  readonly [P in keyof T]?: T[P]
}

// 将对象类型的所有属性转为可选
export type DeepPartial<T> = {
  [Key in keyof T]?: T[Key] extends object ? DeepPartial<T[Key]> : T[Key]
}

// 查找对象类型的所有路径
export type ChainedAccessUnion<T extends object> = ChainedAccessUnionHelper<T>

type ChainedAccessUnionHelper<
  T,
  A = {
    [Key in keyof T]: T[Key] extends string ? never : T[Key]
  },
  B = {
    [Key in keyof A]: A[Key] extends never
      ? never
      : A[Key] extends object
      ?
          | `${Extract<Key, string>}.${Extract<keyof A[Key], string>}`
          | (ChainedAccessUnionHelper<A[Key]> extends infer U
              ? `${Extract<Key, string>}.${Extract<U, string>}`
              : never)
      : never
  }
> = T extends object
  ? Exclude<keyof A | Exclude<Values<B>, never>, never>
  : never
