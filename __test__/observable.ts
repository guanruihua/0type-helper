// observable.ts
export class Observable<T> {
  // ... still no implementation ...
}

declare global {
  interface Array<T> {
    toObservable(): Observable<T>
  }
}

(Array as any).prototype.toObservable = function () {
  // ...
}
