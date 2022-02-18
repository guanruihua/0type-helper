import 'reflect-metadata'

// const formatMetadataKey = Symbol('format')
// const requiredMetadataKey: unique symbol = Symbol('required')

/**
 * @title mixins
 * @description 给类添加方法
 * @param list Object[],需要添加的属性和方法
 * @returns
 */
export function mixins(...list: any[]): (target: any) => void {
  return function (target: any): void {
    Object.assign(target.prototype, ...list)
  }
}

/**
 *
 * @title readonly
 * @description 只读
 * @param target readonly
 * @param name
 * @param descriptor
 * @returns
 */
export function readonly(target: any, name: any, descriptor: any): any {
  descriptor.writable = false
  return descriptor
}

export function sealed(constructor: (...arg: any) => any) {
  console.log('fn', constructor.prototype)
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

export function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value
  }
}

export function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = value
  }
}

export function nonenumerable(target: any, name: any, descriptor: any): any {
  descriptor.enumerable = false
  return descriptor
}

/**
 * autobind
 * override
 * deprecate
 * @Unit,         // 单位转换装饰器
 * @Check,        // 类型检查装饰器，
 * @ServerName    // 数据字段映射装饰器，当前后端定义的字段名不一致的时候用
 */
// export function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
//     let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
//     existingRequiredParameters.push(parameterIndex);
//     Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
// }

// export function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
//     let method = descriptor.value;
//     descriptor.value = function () {
//         let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
//         if (requiredParameters) {
//             for (let parameterIndex of requiredParameters) {
//                 if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
//                     throw new Error("Missing required argument.");
//                 }
//             }
//         }

//         return method.apply(this, arguments);
//     }
// }

// export function validateT<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
//     let set = descriptor.set;
//     descriptor.set = function (value: T) {
//         let type = Reflect.getMetadata("design:type", target, propertyKey);
//         if (!(value instanceof type)) {
//             throw new TypeError("Invalid type.");
//         }
//         set(value);
//     }
// }

// export function format(formatString: string) {
// 	return Reflect.metadata(formatMetadataKey, formatString);
// }

// export function getFormat(target: any, propertyKey: string) {
// 	return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }

// export function f() {
// 	console.log("f(): evaluated");
// 	return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
// 		console.log("f(): called");
// 	}
// }

// export function g() {
// 	console.log("g(): evaluated");
// 	return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
// 		console.log("g(): called", target, propertyKey, descriptor);
// 		// return target
// 		// target.prototype[propertyKey] = '444'
// 	}
// }
