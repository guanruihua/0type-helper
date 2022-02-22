/* eslint-disable*/
import { rUtil, rFunction } from 'rh-js-methods'
import * as Type from '../src/index'
import { Pop } from '../src/index'

const onceLogGroup = rFunction.once(rUtil.logGroup)

interface Example {
  name: string
  height: number
  home: string
}

interface Angus {
  name: string
  height: number
  wight: number
}

interface Person {
  name: string
  sex: string
}

{
  console.log('array')
  // type t = Type.TupleToUnion<[string, number, 'ruihuag']>
  type t = Type.TupleToUnion<['1', '3', 'ruihuag']>
  let a: t = '1'
  type t2 = Type.Join<[1, 4, 5],'-'>
  let a2: t2 = '1-4-5'
}

{
  console.log('string')
  type t = Type.ToUpperCase<'RUIuihuag'>
}

{
  type t = Type.TrimLeft<'   aa   '>
  type t1 = Type.TrimRight<'   aa   '>
  type t2 = Type.Trim<'   aa   '>
  type t3 = Type.Replace<'   aa   ', ' ', 'b'>
}
{
  onceLogGroup('array')
  type t = Type.Pop<[1, 3, 4]>
  type t2 = Type.Push<[1, 3, 4], 3>
  type t3 = Type.Shift<[1, 3, 4]>
}

{
  type Example1 = Type.Stringify<0> // "0"
  type Example2 = Type.Stringify<-1> // "-1"
  type Example3 = Type.Stringify<0.1> // "0.1"
  type Example4 = Type.Stringify<'0.2'> // "0.2"
}

{
  type a = Type.And<true, false>
  type b = Type.Or<true, false>
  type c = Type.Not<true>
}

{
  type iaa = (name: string, age: number) => void
  type newType = Type.Parameters<iaa>
  const a: newType = ['ruihuag', 123]
  const a1: newType[0] = 'ruihuag'
  const a2: newType[1] = 123
  onceLogGroup('Parameters', a, a1, a2)
}

{
  type T0 = Type.ReturnType<() => string> // string
  type T1 = Type.ReturnType<(s: string) => void> // void
  type T2 = Type.ReturnType<() => {}> // {}
  type T3 = Type.ReturnType<() => number[]> // number[]
  type T4 = Type.ReturnType // any
  type T5 = Type.ReturnType // any
  type T6 = Type.ReturnType // Error
  type T7 = Type.ReturnType // Error
  const a: T0 = 'str'
  onceLogGroup('ReturnType', a)
}

{
  type newType = Type.Readonly<Person>
  const a: newType = {
    name: 'ruihuag',
    sex: 'man'
  }
  // a.sex = 'woman'// 会出问题
  onceLogGroup('Readonly', a)
}

{
  type a = string | number
  type newPerson = Type.Exclude<a, string>
  const aa: newPerson = 123
  onceLogGroup('iExclude', aa)
}

{
  type newType = Type.Partial<Person>
  const a: newType = {}
  const b: newType = { name: 'ruihuag' }
  const c: newType = { sex: 'man' }
  const d: newType = { name: 'ruihuag', sex: 'man' }
  onceLogGroup('Partail', a, b, c, d)
}

{
  type newType = Type.Omit<Person, 'name'>
  const a: newType = {
    sex: 'man'
  }
  onceLogGroup('Omit', a)
}

{
  type newType = Type.FilterType<Example, string>
  const a: newType = {
    name: 'ruihuag',
    home: 'home'
    // home: 'home'
  }
  onceLogGroup('FilterType', a)
}

{
  type newAngus = Type.Pick<Angus, 'name' | 'height'> //{name:string;height:number}
  const a: newAngus = {
    height: 123,
    name: 'ruihuag'
  }
  onceLogGroup('Pick', a)
}

{
  type newType = Type.Clothes<Example, string> // type newType = "name | home"
  const a: newType = 'home'
  const b: newType = 'name'
  onceLogGroup('Clothes', a, b)
}
