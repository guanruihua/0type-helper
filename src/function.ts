// 任意function
export type AnyFunction = (...args:any)=>any
// 获取function参数
export type GetParams<Func extends AnyFunction > = Func extends (...args: infer args) => any ? args: never
// 获取function返回值
export type GetReturnType<Func extends AnyFunction > = Func extends (...args:any) => infer Return? Return : never
