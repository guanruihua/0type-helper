import { IntAddSingle } from './number'
import { Compare } from './helper'
import { Push, Or, IsEqual, And3, Join } from './index'

// 将类型转为字符串有一定的限制，仅支持下面的类型
export type CanStringified = string
  | number
  | bigint
  | boolean
  | null
  | undefined

// 将支持的类型转化为字符串
export type Stringify<T extends CanStringified> = `${T}`


export type ToUpperCase<S extends string> = Uppercase<S> // 转大写
export type ToLowerCase<S extends string> = Lowercase<S> // 转小写

type SubStringHelper<
  S extends string,
  Start extends number,
  End extends number,
  Offset extends number = 0,
  Cache extends string[] = []
> = IsEqual<Offset, End> extends true
  ? Join<Cache, ''>
  : SubStringHelper<
      S,
      Start,
      End,
      IntAddSingle<Offset, 1>,
      And3<
        Or<Compare<Offset, Start>, IsEqual<Offset, Start>>,
        Or<Compare<End, Offset>, IsEqual<Offset, End>>,
        CharAt<S, Offset> extends string ? true : false
      > extends true
        ? Push<Cache, CharAt<S, Offset>>
        : Cache
    >

/**
 * 在字符串中抽取从 开始 下标开始的指定数目的字符
 * @example
 * type Result = SubStr<'123', 1, 3> // '23'
 */
export type SubString<
  S extends string,
  Start extends number,
  End extends number
> = SubStringHelper<S, Start, End>


export type SubStr<
  S extends string,
  Start extends number,
  Len extends number
> = SubStringHelper<S, Start, IntAddSingle<Start, Len>>



/**
 * 去除左空格
 */
export type TrimLeft<str extends string> = str extends `${| ' ' | '\t' | '\n' | '\n'}${infer rest}`
  ? TrimLeft<rest>
  : str

/**
 * 去除右空格
 */
export type TrimRight<str extends string> = str extends `${infer rest}${| ' ' | '\t' | '\n' | '\n'}`
  ? TrimRight<rest>
  : str

/**
 * 去除左右空格
 */
export type Trim<str extends string> = TrimLeft<TrimRight<str>>

type SplitHelper<
  S extends string,
  SplitStr extends string = '',
  T extends string[] = []
> = S extends `${infer Char}${SplitStr}${infer Rest}`
  ? SplitHelper<Rest, SplitStr, Push<T, Char>>
  : S extends string
  ? S extends ''
  ? T : Push<T, S>
  : never

/**
 * 拆分字符串变为一个元组
 * @example
 * type Result = Split<'1,2,3', ','> // [1, 2, 3]
 */
export type Split<S extends string, SplitStr extends string = ''> = SplitHelper<
  S,
  SplitStr
>

/**
 * 获取模板字符串类型中的字符
 */
export type GetChars<S> = GetCharsHelper<S, never>

type GetCharsHelper<S, Acc> = S extends `${infer Char}${infer Rest}` ? GetCharsHelper<Rest, Char | Acc> : Acc

/**
 * 获取字符串的长度
 * @example
 * type Result = GetStringLength<"123"> // 3
 */
export type GetStringLength<S extends string> = Split<S>['length']

/**
 * 获取字符串在索引位 I 下的 字符
 * @example
 * type Result = CharAt<"123", 1> // "2"
 */
export type CharAt<S extends string, I extends number> = Split<S>[I]

/**
 * 拼接两个字符串
 * @example
 * type Result = ConcatString<"123", "456"> // "123456"
 */
export type ConcatString<S1 extends string, S2 extends string> = `${S1}${S2}`

/**
 * 判断字符串是否包含子串
 * @example
 */
export type IncludeString<
  S1 extends string,
  S2 extends string
> = S1 extends `${infer Left}${S2}${infer Right}` ? true : false //  eslint-disable-line

/**
 * 判断字符串是否以子串为起始
 * @example
 * type Result = StartsWith<"123", "12"> // true
 */
export type StartsWith<
  S1 extends string,
  S2 extends string
> = S1 extends `${S2}${infer Right}` ? true : false // eslint-disable-line

/**
 * 判断字符串是否以子串为结束
 * @example
 * type Result = EndsWith<"123", "23"> // true
 */
export type EndsWith<
  S1 extends string,
  S2 extends string
> = S1 extends `${infer Left}${S2}` ? true : false // eslint-disable-line

type IndexOfHelper<
  S1 extends string,
  S2 extends string,
  Len1 extends number = GetStringLength<S1>,
  Len2 extends number = GetStringLength<S2>
> = Or<Compare<Len1, Len2>, IsEqual<Len1, Len2>> extends true
  ? S1 extends `${infer Left}${S2}${infer Right}` // eslint-disable-line
  ? GetStringLength<Left>
  : -1
  : -1

/**
 * 从左往右查找子串的位置
 * @example
 * type Result = IndexOf<"123", "23"> // 1
 */
export type IndexOf<S1 extends string, S2 extends string> = IndexOfHelper<
  S1,
  S2
>

/**
 * 在字符串中查找并替换一处子串
 * MatchStr 不支持 正则
 * @example
 * type Result = Replace<"23123", "23", "xx"> // "xx123"
 */
export type Replace<
  S extends string,
  MatchStr extends string,
  ReplaceStr extends string
> = S extends `${infer Left}${MatchStr}${infer Right}`
  ? `${Left}${ReplaceStr}${Right}`
  : S

/**
 * 在字符串中查找并替换所有子串
 * @example
 * type Result = Replace<"23123", "23", "xx"> // "xx1xx"
 */
export type ReplaceAll<
  S extends string,
  MatchStr extends string,
  ReplaceStr extends string
> = IncludeString<S, MatchStr> extends true
  ? ReplaceAll<Replace<S, MatchStr, ReplaceStr>, MatchStr, ReplaceStr>
  : S

type LastIndexOfHelper<
  S1 extends string,
  S2 extends string,
  Index extends number = -1 /** 当前从左往右匹配最大的值，匹配不到以后，上一次匹配的索引就是从右往左第一个的索引 */,
  AddOffset extends number = 0 /** 每次从左往右匹配并替换成空串后，下次循序需要累加的值 */
> = S1 extends `${infer Left}${S2}${infer Right}` // eslint-disable-line
  ? LastIndexOfHelper<
    Replace<S1, S2, ''>,
    S2,
    IntAddSingle<GetStringLength<Left>, AddOffset>,
    IntAddSingle<AddOffset, GetStringLength<S2>>
  >
  : Index

/**
 * 从右往左查找子串的位置
 * @example
 * type Result = LastIndexOf<"23123", "23"> // 3
 */
export type LastIndexOf<
  S1 extends string,
  S2 extends string
> = LastIndexOfHelper<S1, S2>


type RepeatHelper<
  S extends string,
  Times extends number,
  OriginStr extends string = S,
  Offset extends number = 1
> = Times extends 0
  ? ""
  : IsEqual<Times, Offset> extends true
  ? S
  : `${OriginStr}${RepeatHelper<
    S,
    Times,
    OriginStr,
    IntAddSingle<Offset, 1>
  >}`

/**
 * 重复 Times 次数的字符串
 * @example
 * type Result = Repeat<"1", 5> // "11111"
 */
export type Repeat<S extends string, Times extends number = 1> = RepeatHelper<S, Times>


type PadHelper<
  S extends string,
  N extends number = 0,
  FillS extends string = " ",
  IsStart extends boolean = true,
  Len extends number = GetStringLength<S>,
  Offset extends number = Len
> = Compare<N, Len> extends true
  ? IsEqual<N, Offset> extends true
  ? S
  : PadHelper<
    `${IsStart extends true ? FillS : ""}${S}${IsStart extends false
    ? FillS
    : ""}`,
    N,
    FillS,
    IsStart,
    Len,
    IntAddSingle<Offset, 1>
  >
  : S

/**
 * 当字符串不满足给定的长度时，在字符串前面填充使其满足长度
 * @example
 * type Result = PadStart<'0123', 10> // '      0123'
 */
export type PadStart<
  S extends string,
  N extends number = 0,
  FillS extends string = " "
> = PadHelper<S, N, FillS>


/**
 * 当字符串不满足给定的长度时，在字符串后面填充使其满足长度
 * @example
 * type Result = PadStart<'0123', 10> // '0123      '
 */
export type PadEnd<
  S extends string,
  N extends number = 0,
  FillS extends string = " "
> = PadHelper<S, N, FillS, false>
