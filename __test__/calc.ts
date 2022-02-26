/* eslint-disable*/
import { rUtil, rFunction } from 'rh-js-methods'
import * as Type from '../src/index'

const onceLogGroup = rFunction.once(rUtil.logGroup)
console.log('---calc---start---')
{
	// base type
	type tTrue = true
	type tFalse = false
	// type 
	type t_and = Type.And<tTrue, tFalse>
	type t_or = Type.Or<tTrue, tFalse>
	type t_not = Type.Not<tTrue>
	type t_sum = Type.SumAggregate<'a','b'>
}

console.log('---calc---end---')
