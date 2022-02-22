// 任意 普通 function
// export type AnyFunction = (...args: any) => any

// 任意 普通 function
export type Noop = (...args: any) => any

// 获取异步函数的返回值
export type GetAsyncFunctionReturnType<F extends Noop> = Awaited<ReturnType<F>>

// 获取参数长度
export type GetFunctionLength<F extends Noop> = F extends (
  ...args: infer P
) => any
  ? P['length']
  : never

// 获取function参数
export type GetParams<Func extends Noop> = Func extends (
  ...args: infer args
) => any
  ? args
  : never

// 获取function返回值
export type GetReturnType<Func extends Noop> = Func extends (
  ...args: any
) => infer Return
  ? Return
  : never
