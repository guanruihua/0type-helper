// d.ts
declare module 'ever' {
  export let a: number
  export function b(): number
  export namespace c {
    let c: string
  }
}
// 引用
//  cosnt ever = require('ever)
//  ever.a = 100
//  ever.b = function() {
//      return 100 + 300
//  }

declare let A1: 1
declare let B2: 2
declare type TestType = { name: string }
declare namespace ComponentDomains {
  type TestType = { name: string }
  interface TestType2 {
    name: string
  }
}

// declare module '*.scss' {
//   const content: Record<string, string>
//   export default content
// }
// declare module 'react-intl';
// declare module 'react-intl/locale-data/zh';
// declare module 'react-intl/locale-data/en';
// declare module 'mockjs';
// declare module './routingGuard';
// declare module 'qs';
// declare module '@/assets/resource/image/favicon.ico';
