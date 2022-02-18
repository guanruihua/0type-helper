// 重载构造函数
export function Controller(target: any) {
  // console.log('hello Word!', target.prototype.constructor);
  // let tmp = new target.prototype.constructor('123');

  // console.log('tmp', tmp)
  return class extends target {
    sayHello() {
      console.log('hello')
    }
  }
}

// 属性装饰器
export function defaultValue<T>(value: T) {
  return function (target: any, propertyName: string) {
    target[propertyName] = value
  }
}

// 方法装饰器
export function logFunc<T>(params: T) {
  console.log({ params })
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    // target === HelloWordClass.prototype
    // propertyName === "sayHello"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(HelloWordClass.prototype, "sayHello")

    // console.log(params);
    // 被装饰的函数
    const method = descriptor.value

    descriptor.value = function (...args: any[]) {
      const start = new Date().valueOf()
      // 将 sayHello 的参数列表转换为字符串
      args = args.map((arg) => String(arg))
      // console.log('参数args = ' + args);
      try {
        return method.apply(this, args)
      } finally {
        const end = new Date().valueOf()
        console.log(`start: ${start} end: ${end} consume: ${end - start}`)
      }
    }
    return descriptor
  }
}

// 方法参数装饰器
export function logParameter(target: any, propertyName: string, index: number) {
  // 为相应方法生成元数据键，以储存被装饰的参数的位置
  const metadataKey = `log_${propertyName}_parameters`
  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index)
  } else {
    target[metadataKey] = [index]
  }
  // console.log(metadataKey, target)
}

// 访问器装饰器
export function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value
  }
}
