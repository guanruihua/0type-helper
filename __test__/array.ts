import { Filter } from '../src'


{
	// const t1:GetTuple<0> = []
	// const t2:GetTuple<1> = ['a']
	// const tt:[unknown, unknown] = [1,3]
}

{
	type a_filter = Filter<[1, 2, 3], 2, true>
	type b_filter = Filter<[1, 2, 3], 2, false>

	const aa: Array<string> = ['a', 'b']
	const aa1: Array<'a'> = ['a', 'a']
	const aa2: Array<'a' | 'b'> = ['a', 'b']
}