/* eslint-disable*/
import { And, Or, Not } from "calc";
{
	const a: And<true, false> = false
	const b: And<true, true> = true
	const c: And<false, true> = false
	const d: And<false, false> = false
}


{
	const a: Or<true, false> = true
	const b: Or<true, true> = true
	const c: Or<false, true> = true
	const d: Or<false, false> = false
}

{
	const a: Not<false> = true
	const b: Not<true> = false
}