// 2.ts
import { AClass } from './1'

declare module './1' {
  interface AClass {
    test: (b: number) => number
  }
}

AClass.prototype.test = (b: number): number => {
  return b
}
