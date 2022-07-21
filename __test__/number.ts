/* eslint-disable*/
import {
	IsZero, IsOverZero, IsLessZero,
	IsNumberEqual, IsNumberNotEqual, IntAddSingle
} from '../src/index'


{
	const t1: IsZero<'0'> = true
	const t2: IsZero<'4'> = false
	const t3: IsOverZero<'1'> = true
	const t4: IsOverZero<'-1'> = false
	const t5: IsOverZero<'0'> = false
	const t6: IsLessZero<'1'> = false
	const t7: IsLessZero<'-1'> = true
	const t8: IsLessZero<'0'> = true

	const t9: IsNumberEqual<1, 3> = false
	const t10: IsNumberNotEqual<1, 3> = true

	const t11: IntAddSingle<3, 4> = 7
	const t13: IntAddSingle<3, 999>  = 1002
}

