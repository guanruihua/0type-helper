// C 意为 Condition，条件

// 与，即 C1，C2 同为真
export type And<C1 extends boolean, C2 extends boolean> = C1 extends true
  ? C2 extends true
    ? true
    : false
  : false

// 与，即 C1，C2 有一个为真
export type Or<C1 extends boolean, C2 extends boolean> = C1 extends true
  ? true
  : C2 extends true
  ? true
  : false

// 非，即反转 C 的真假状态
export type Not<C extends boolean> = C extends true ? false : true

// 并集
export type SumAggregate<T, U> = T | U
