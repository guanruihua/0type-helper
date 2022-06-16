import { Stringify, GetChars, Split, GetStringLength, ConcatString, IncludeString, CharAt, StartsWith, EndsWith, Repeat, IndexOf, LastIndexOf, Replace, ReplaceAll, PadStart, SubString, PadEnd, Trim, TrimLeft, TrimRight, ToUpperCase, ToLowerCase } from '../src'

{
	const t1: SubString<'123', 1, 3> = '23'
	const t2: SubString<'123', 0, 2> = '12'
	const t3: SubString<'123', 0, 3> = '123'
	// const t4: SubStr<'123', 1, 1> = '2'
	// const t5: SubStr<'123', 0, 1> = '1'
	// const t6: SubStr<'123', 2, 3> = '3'
}

{
	const t1: ToUpperCase<'abc'> = 'ABC'
	const t2: ToLowerCase<'ABC'> = 'abc'
}

{
	const t1: Trim<' 123 '> = "123"
	const t2: TrimLeft<' 123 '> = "123 "
	const t3: TrimRight<' 123 '> = " 123"
}

{
	const t1: PadStart<'123', 10> = '       123'
	const t2: PadStart<'123', 10, 'a'> = 'aaaaaaa123'
	const t3: PadEnd<'123', 10> = '123       '
	const t4: PadEnd<'123', 10, 'a'> = '123aaaaaaa'

}

{
	const t1: Repeat<"1", 5> = "11111"

}
{
	const t1: Replace<'123abc', 'a', '4'> = '1234bc'
	const t11: Replace<'123abca', 'a', '4'> = '1234bca'
	const t2: ReplaceAll<"23123", "23", '46'> = '46146'
	const t21: ReplaceAll<"2312323", "23", '46'> = '4614646'
}
{
	const t1: IndexOf<'123abc', 'a'> = 3
	const t2: LastIndexOf<"23123", "23"> = 3
}

{
	const t1: EndsWith<'123', '3'> = true
	const t2: EndsWith<'123', '13'> = false
}

{
	const t1: StartsWith<'123', '1'> = true
	const t2: StartsWith<'123', '13'> = false
}
{
	const t1: CharAt<'123', 2> = '3'
	const t2: CharAt<'123', 1> = '2'
}

{
	const t1: IncludeString<'123', '12'> = true
	const t2: IncludeString<'123', '1245'> = false
}

{
	const t1: ConcatString<'123', 'abc'> = '123abc'
	const t2: ConcatString<'12a', 'abc'> = '12aabc'
}

{
	const t1: GetStringLength<'123'> = 3
	const t2: GetStringLength<'123ab'> = 5
}


{
	const t1: Split<'123456', '3'> = ['12', '456']
	const t2: Split<'123456', ''> = ['1', '2', '3', '4', '5', '6']
}

{
	type tt1 = GetChars<'abc'>
	const t1: tt1 = 'a'
	const t2: tt1 = 'b'
	const t3: tt1 = 'c'
}

{
	const a: Stringify<1> = '1'
	const a2: Stringify<'2'> = '2'
	const a3: Stringify<9007199254740991> = '9007199254740991'
	const a4: Stringify<'true'> = 'true'
	const a5: Stringify<'false'> = 'false'
	const a6: Stringify<'null'> = 'null'
	const a7: Stringify<'undefined'> = 'undefined'
	const a8: Stringify<''> = ''
}