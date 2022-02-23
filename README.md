# 描述

> 参考 <https://juejin.cn/post/7061556434692997156#heading-60>
> 本仓库主要是学习使用

## 约束

> 首字母大写全为`type`或 `interface`

## 使用

### function

|type| 描述|
|:----|:----|
|`AnyFunction`|任意 function|
|`GetParams<Func extends AnyFunction>` |获取 function 参数|
|`GetReturnType<Func extends AnyFunction>`| 获取 function 返回值|

### 数组

|type|描述|
|:----|:----|
|`Pop<T extends unknown[]>`|去除数组最后一位|

### 位计算

|type|描述|
|:----|:----|
|`<C1 extends boolean, C2 extends boolean>`|与|
|`Or<C1 extends boolean, C2 extends boolean>`|或|
|`Not<C extends boolean>`|非|
