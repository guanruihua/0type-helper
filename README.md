# 描述

> 参考 <https://juejin.cn/post/7061556434692997156#heading-60>
> 本仓库主要是学习使用

## 约束

> 首字母大写全为`type`或 `interface`

## 使用

### function

|type| 描述|
|:----|:----|
|`Noop`|任意 function|
|`GetAsyncFunctionReturnType<F extends Noop>`| 获取异步函数的返回值
|`GetFunctionLength<F extends Noop>`|获取参数长度
|`GetParams<Func extends Noop>` |获取 function 参数|
|`GetReturnType<Func extends Noop>`| 获取 function 返回值|

### number

|描述|type|
|:----|:----|
|可分配给 NumberLike 的类型| `` NumberLike = number \| `${number}` ``|
| number类型是否为0，判断 N 是否可分配给 0 \| "0" | `IsZero<N extends NumberLike>`

// number类型是否大于0，泛型类型有限制 NumberLike，所以它一定是个数或者由数字构成的字符串，将其转为字符串后，判断最前面是不是 -，如果不是，就是大于零
export type IsOverZero<N extends NumberLike> = IsZero<N> extends true
  ? false
  : CheckLeftIsExtendsRight<
      Stringify<N> extends `${'-'}${infer Rest}` ? Rest : never,
      never
    >

// number类型是否小于0，对上面 IsOverZero 的结果取反
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

|`IsNumberNotEqual<
  L extends NumberLike,
  R extends NumberLike,
  Strict extends boolean = true
>` | 数字不相等|

### 数组

|type|描述|
|:----|:----|
|`Pop<T extends unknown[]>`|去除数组最后一位|

### 位计算

|type|描述|
|:----|:----|
|`And<C1 extends boolean, C2 extends boolean>`|与|
|`Or<C1 extends boolean, C2 extends boolean>`|或|
|`Not<C extends boolean>`|非|
|`SumAggregate<T, U>`|并集|
