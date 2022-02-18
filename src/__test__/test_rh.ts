// import { Type } from '../index'
// type res = Type.Not<true>
// import { _Decorator, _Controller } from '../index'
// import { RH } from 'rh-js-methods'
// import { iAnyObject } from 'type'

// // console.log(_Decorator);
// {

// 	const { mixins, readonly } = _Decorator
// 	const log: iAnyObject = {
// 		log() { return 'log' }
// 	};
// 	const log2 = {
// 		log2() { return 'log2' }
// 	};

// 	@mixins(log, log2, {
// 		aaa: 'aaa',
// 		log3(): string { return 'log3' },
// 	})
// 	class A { }
// 	let a: A = new A();
// 	RH.logGroup('mixins',
// 		a.aaa,
// 		a.log(), // '这是一条日志输出'
// 		a.log2(), // '这是一条日志输出'
// 		a.log3(),
// 	)
// }
// {
// 	const { mixins, readonly } = _Decorator
// 	class Person {
// 		mname: string = 'my Name'
// 		@readonly
// 		name(): string { return `${this.mname}` }
// 	}
// 	let per = new Person()
// 	// 不可以修改
// 	// per.name = function () {
// 	// 	return '123' + this.mname
// 	// }
// 	RH.logGroup('readonly',
// 		per.name()
// 	)

// 	// readonly(Person.prototype, 'name', descriptor);
// 	// 类似于
// 	// Object.defineProperty(Person.prototype, 'name', descriptor);

// }

// {

// 	const { nonenumerable, enumerable } = _Decorator

// 	// console.log(nonenumerable)

// 	class Person {
// 		name:string|undefined
// 		sax:string|undefined
// 		sex:string | undefined
// 		cnt:string|undefined
// 		constructor(name: string, sex: string) {
// 			this.name = name;
// 			this.sex = sex;
// 		}

// 		@nonenumerable
// 		@enumerable(true)
// 		aaa(): string {
// 			return 'aaaaaaaaaaaaa'
// 		}

// 		ask(cnt: string): string {
// 			return this.name + "(" + this.sax + "):" + this.cnt
// 		}

// 	}
// 	let person = new Person("张三", "男");

// 	// for (let key  in person) {
// 		// console.log({ key })
// 	// }

// 	// getPerson.ask("你好")
// 	// getPerson.bind(person)().add("你好"); // 输出：张三(男)：你好
// 	RH.logGroup('',
// 		person,
// 	)
// }




















// // const {
// // 	f, g, sealed,
// // 	// enumerable,
// // 	configurable,
// // 	format, getFormat,
// // 	required, validate, validateT
// // } = _Decorator;
// // const {
// // 	Controller,
// // 	defaultValue,
// // 	enumerable,
// // 	logFunc, logParameter
// // } = _Controller
// // type Point = string;

// // // @sealed
// // @Controller
// // class C {

// // 	// @format('format_data, %s')
// // 	// _format: string;

// // 	// private _p0: Point;
// // 	// private _p1: Point;

// // 	// @validateT
// // 	// @Reflect.metadata("design:type", 'Point')
// // 	// set p0(value: Point) { this._p0 = value; }
// // 	// get p0() { return this._p0; }

// // 	// @validateT
// // 	// // @Reflect.metadata("design:type", Point)
// // 	// set p1(value: Point) { this._p1 = value; }
// // 	// get p1() { return this._p1; }


// // 	// @f()
// // 	// @g()
// // 	@defaultValue('null str')
// // 	greeting: string;

// // 	@logFunc('log装饰器')
// // 	sayHello2(@logParameter name: string) {
// // 		console.log(name + ' sayHello');
// // 	}

// // 	constructor(message: string) {
// // 		// this.greeting = message;
// // 	}

// // 	private _name: string = 'zzb';
// // 	private _age: number = 10;

// // 	@enumerable(true)
// // 	get name() {
// // 		return this._name;
// // 	}
// // 	@enumerable(true)
// // 	get name123f() {
// // 		return this._name;
// // 	}

// // 	set name(name: string) {
// // 		this._name = name;
// // 	}

// // 	@enumerable(false)
// // 	get age() {
// // 		return this._age;
// // 	}

// // 	set age(age: number) {
// // 		this._age = name;
// // 	}

// // 	// formatFn() {
// // 	// 	let formatString: string = getFormat(this, "greeting") || 'NULL'
// // 	// 	return formatString.replace('%s', this.greeting)
// // 	// }

// // 	// @validate
// // 	// validateFn(@required name: string) {
// // 	// 	return "Hello " + name;
// // 	// }

// // 	// @enumerable(false)
// // 	greet() {
// // 		return "Hello, " + this.greeting;
// // 	}

// // 	// @configurable(false)
// // 	// get x() { return this._x; }

// // 	// @configurable(false)
// // 	// get y() { return this._y; }

// // }

// // let c = new C('123')
// // // c.sayHello();
// // c.sayHello2();
// // // console.log(c.greeting);
// // // console.log(c.formatFn())
// // // console.log(c.validateFn("ruihuag"))
// // // console.log('Obj', Object.seal(c));
// // for (let prop in c) {
// // 	console.log(`property = ${prop}`)
// // }

