/* eslint-disable*/
import { IsZero, IsOverZero, IsLessZero } from '../src/index'


{
	const t1: IsZero<'0'> = true
	const t2: IsZero<'4'> = false
	const t3: IsOverZero<'1'> = true
	const t4: IsOverZero<'-1'> = false
	const t5: IsOverZero<'0'> = false
	const t6: IsLessZero<'1'> = false
	const t7: IsLessZero<'-1'> = true
	const t8: IsLessZero<'0'> = true
}

