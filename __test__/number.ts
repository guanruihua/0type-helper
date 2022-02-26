/* eslint-disable*/
import { rUtil, rFunction } from 'rh-js-methods'
import * as Type from '../src/index'

const onceLogGroup = rFunction.once(rUtil.logGroup)

console.log('---number---start---')
{
  // base type
  // type
  type typeA = Type.NumberLike
  let a: typeA = 0
  a = '1'

	type test_type = '-123' extends '123' ? true : false

	type type2 = Type.IsZero<'0'>
	type type3 = Type.IsZero<'4'>

	type type4 = Type.IsOverZero<'1'>
	type type5 = Type.IsOverZero<'-1'>
	type type6 = Type.IsOverZero<'0'>

	type type41 = Type.IsLessZero<'1'>
	type type51 = Type.IsLessZero<'-1'>
	type type61 = Type.IsLessZero<'0'>

	
}

console.log('---number---end---')
