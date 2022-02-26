/* eslint-disable*/
import { rUtil, rFunction } from 'rh-js-methods'
import * as Type from '../src/index'

const onceLogGroup = rFunction.once(rUtil.logGroup)

console.log('---function---start---')
{
	// base type
  type functionType = (name: string, age: number, sex: string) => string
  type asyncfunctionType = (name: string, age: number, sex: string) => Promise<string>
	// type 
	type AsyncReturnType = Type.GetAsyncFunctionReturnType<asyncfunctionType>
	type ReturnType = Type.GetReturnType<functionType>
	type len = Type.GetFunctionLength<functionType>
	type params = Type.GetParams<functionType>
}

console.log('---function---end---')
