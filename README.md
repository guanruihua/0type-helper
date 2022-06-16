# 描述

- 参考 <https://juejin.cn/post/7061556434692997156#heading-60>
- 本仓库主要是学习使用

## 基础类型

| 类型             | 描述               | 预期                                   |
| :--------------- | :----------------- | :------------------------------------- |
| `NumberLike`     | 可转`number`的类型 | <code> number \| \`${number}\` </code> |
| `CanStringified` | 可转`string`的类型 | `string                                | number | bigint | boolean | null | undefined` |

## 泛型类型

### `And<C1, C2>`

- 与运算

```ts
 const a: And<true, false> = false
 const b: And<true, true> = true
 const c: And<false, true> = false
 const d: And<false, false> = false
```

### `Or<C1, C2>`

- 或运算

```ts
 const a: Or<true, false> = true
 const b: Or<true, true> = true
 const c: Or<false, true> = true
 const d: Or<false, false> = false
```

### `Not<C>`

- 非运算

```ts
 const a: Not<false> = true
 const b: Not<true> = false
```

### `Stringify<T>`

- 转换成`string`
- `T extends CanStringified`

```ts
 const t1: Stringify<1> = '1'
 const t2: Stringify<'2'> = '2'
 const t3: Stringify<9007199254740991> = '9007199254740991'
 const t4: Stringify<'true'> = 'true'
 const t5: Stringify<'false'> = 'false'
 const t6: Stringify<'null'> = 'null'
 const t7: Stringify<'undefined'> = 'undefined'
 const t8: Stringify<''> = ''
```

### `Is*Zero<T>`

- `IsLessZero<T>`:  小于零
- `IsZero<T>`: 等于零
- `IsOverZero<T>`: 大于零
- `T extends NumberLike`

```ts
 const t1: IsZero<'0'> = true
 const t2: IsZero<'4'> = false
 const t3: IsOverZero<'1'> = true
 const t4: IsOverZero<'-1'> = false
 const t5: IsOverZero<'0'> = false
 const t6: IsLessZero<'1'> = false
 const t7: IsLessZero<'-1'> = true
 const t8: IsLessZero<'0'> = true
```

### `GetChars<S>`

- 获取字符类型

```ts
 type tt1 = GetChars<'abc'>
 const t1: tt1 = 'a'
 const t2: tt1 = 'b'
 const t3: tt1 = 'c'
```

### `ChartAt<S, I>`

- 获取指定索引字符
- `S extends string`
- `I extends number`

```ts
 const t1: CharAt<'123',2> = '3'
 const t2: CharAt<'123',1> = '2'
```

### `Split<S, Spliter>`

- 切割字符串

```ts
 const t1: Split<'123456', '3'> = ['12', '456']
 const t2: Split<'123456', ''> = ['1', '2', '3', '4', '5', '6']
```

### `GetStringLength<S>`

- 获取字符串长度
- `S extends string`

```ts
 const t1: GetStringLength<'123'> = 3
 const t2: GetStringLength<'123ab'> = 5
```

### `ConcatString<S1,S2>`

- 拼接两个字符串
- `S1 extends string`
- `S2 extends string`

```ts
 const t1: ConcatString<'123', 'abc'> = '123abc'
 const t2: ConcatString<'12a', 'abc'> = '12aabc'
```

### `IncludeString<S1, S2>`

- 判断是否包含子串
- `S1 extends string`
- `S2 extends string`

```ts
 const t1: IncludeString<'123','12'> = true
 const t2: IncludeString<'123','1245'> = false
```

### `StartsWith<S1,S2>`

- 判断以子子串开头
- `S1 extends string`
- `S2 extends string`

```ts
 const t1: StartsWith<'123','1'> = true
 const t2: StartsWith<'123','13'> = false
```

### `EndsWith<S1,S2>`

- 判断以子子串结束
- `S1 extends string`
- `S2 extends string`

```ts
 const t1: EndsWith<'123','3'> = true
 const t2: EndsWith<'123','13'> = false
```

### `*IndexOf<S1 ,S2>`

- 查找子串位置
- `S1 extends string`
- `S2 extends string`
- `IndexOf`: 从左到右
- `LastIndexOf`: 从右到左

```ts
 const t1: IndexOf<'123abc', 'a'> = 3 
 const t2: LastIndexOf<"23123", "23"> = 3
```

### `Replace*<S,MatchStr,ReplaceStr>`

- 替换字串
- `S extends string`
- `MatchStr extends string`
- `ReplaceStr extends string`

```ts
 const t1: Replace<'123abc', 'a', '4'> = '1234bc'
 const t11: Replace<'123abca', 'a', '4'> = '1234bca'
 const t2: ReplaceAll<"23123", "23", '46'> = '46146'
 const t21: ReplaceAll<"2312323", "23", '46'> = '4614646'
```

### `Repeat<S,Times>`

- 重复Times次数字符串
- `S extends string`
- `Times extends number = 1`

```ts
 const t1: Repeat<"1", 5> = "11111"
```

### `Pad*<S,N,Fills>`

- 字符串填充
- `PadStart`: 开头填充
- `PadEnd`: 末尾填充
- `S extends string`
- `N extends number = 0`
- `FillS extends string = " "`

```ts
 const t1: PadStart<'123', 10> = '       123'
 const t2: PadStart<'123', 10, 'a'> = 'aaaaaaa123'
 const t3: PadEnd<'123', 10> = '123       '
 const t4: PadEnd<'123', 10, 'a'> = '123aaaaaaa'
```

### `Trim*<S>`

- 去除空格
- `S extends string`
- `Trim` : 左右空格
- `TrimLeft` : 左空格
- `TrimRight` : 右边空格

```ts
 const t1: Trim<' 123 '> = "123"
 const t2: TrimLeft<' 123 '> = "123 "
 const t3: TrimRight<' 123 '> = " 123"
```

### `To*Case<S>`

- 大小写转换
- `ToUpperCase`: 转大写
- `ToLowerCase`: 转小写
- `S extends string`

```ts
 const t1: ToUpperCase<'abc'> = 'ABC'
 const t2: ToLowerCase<'ABC'> = 'abc'
```

### `SubString<S,Start,End>`

### function

| type                                         | 描述                 |
| :------------------------------------------- | :------------------- |
| `Noop`                                       | 任意 function        |
| `GetAsyncFunctionReturnType<F extends Noop>` | 获取异步函数的返回值 |
| `GetFunctionLength<F extends Noop>`          | 获取参数长度         |
| `GetParams<Func extends Noop>`               | 获取 function 参数   |
| `GetReturnType<Func extends Noop>`           | 获取 function 返回值 |

## 待重做

- 构造指定长度元组: 不支持指定类型

```ts
type GetTupleHelper<
  Length extends number = 0,
  R extends unknown[] = []
> = R['length'] extends Length ? R : GetTupleHelper<Length, [...R, T]>

/* 构造指定长度元组 */
export type GetTuple<Length extends number = 0> = GetTupleHelper<Length>
// 是否为浮点型
/**
- number类型是否是小数
- @example
- type Result = IsFloat<1.2> // true
 */
export type IsFloat<
  N extends NumberLike,
  OnlyCheckPoint extends boolean = true
> = Stringify<N> extends `${infer Left}${"."}${infer Right}`
  ? OnlyCheckPoint extends true
    ? true
    : Not<Every<Split<Right>, "0">>
  : false

// 是否为整型
/**

- number类型是否是整数
- @example
- type Result = IsInt<1> // true
 */
export type IsInt<
  N extends NumberLike,
  OnlyCheckPoint extends boolean = true
> = Not<IsFloat<N, OnlyCheckPoint>>

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
```
