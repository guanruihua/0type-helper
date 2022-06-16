// 1.ts
export class AClass {
  public a: string
  constructor(a: string) {
    this.a = a
  }
}

export type a = Record<'string'|'a',string>
const a1:a = {
  'string':'',
  'a': '123'
}