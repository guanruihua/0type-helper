// 去掉数组的最后一位
// export type Pop<T extends unknown[]> = T extends [...infer LeftRest, infer Last]
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
export type Shift<T extends unknown[]> = T extends [infer R, ...infer rest] ? rest: never