/**
 * @file This module provides a simuation of Haskell do notation.
 */
import { sequenceS } from 'fp-ts/lib/Apply'
import { HKT, Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from 'fp-ts/lib/HKT'
import { Monad, Monad1, Monad2, Monad2C, Monad3 } from 'fp-ts/lib/Monad'

type EnforceNonEmptyRecord<R> = keyof R extends never ? never : R

/**
 * @since 0.1.0
 */
export interface Do3<M extends URIS3, S extends object> {
  do: <U, L>(ma: Kind3<M, U, L, unknown>) => Do3C<M, S, U, L>
  doL: <U, L>(f: (s: S) => Kind3<M, U, L, unknown>) => Do3C<M, S, U, L>
  bind: <N extends string, A, U, L>(
    name: Exclude<N, keyof S>,
    ma: Kind3<M, U, L, A>
  ) => Do3C<M, S & { [K in N]: A }, U, L>
  bindL: <N extends string, A, U, L>(
    name: Exclude<N, keyof S>,
    f: (s: S) => Kind3<M, U, L, A>
  ) => Do3C<M, S & { [K in N]: A }, U, L>
  sequenceS: <U, L, R extends Record<string, Kind3<M, U, L, any>>>(
    r: EnforceNonEmptyRecord<R> & Record<string, Kind3<M, U, L, any>> & { [K in keyof S]?: never }
  ) => Do3C<M, S & { [K in keyof R]: [R[K]] extends [Kind3<M, any, any, infer A>] ? A : never }, U, L>
  sequenceSL: <U, L, R extends Record<string, Kind3<M, U, L, any>>>(
    f: (s: S) => EnforceNonEmptyRecord<R> & Record<string, Kind3<M, U, L, any>> & { [K in keyof S]?: never }
  ) => Do3C<M, S & { [K in keyof R]: [R[K]] extends [Kind3<M, any, any, infer A>] ? A : never }, U, L>
  return: <A, U, L>(f: (s: S) => A) => Kind3<M, U, L, A>
  done: <U, L>() => Kind3<M, U, L, S>
}

/**
 * @since 0.1.0
 */
export interface Do3C<M extends URIS3, S extends object, U, L> {
  do: (ma: Kind3<M, U, L, unknown>) => Do3C<M, S, U, L>
  doL: (f: (s: S) => Kind3<M, U, L, unknown>) => Do3C<M, S, U, L>
  bind: <N extends string, A>(name: Exclude<N, keyof S>, ma: Kind3<M, U, L, A>) => Do3C<M, S & { [K in N]: A }, U, L>
  bindL: <N extends string, A>(
    name: Exclude<N, keyof S>,
    f: (s: S) => Kind3<M, U, L, A>
  ) => Do3C<M, S & { [K in N]: A }, U, L>
  sequenceS: <R extends Record<string, Kind3<M, U, L, any>>>(
    r: EnforceNonEmptyRecord<R> & { [K in keyof S]?: never }
  ) => Do3C<M, S & { [K in keyof R]: [R[K]] extends [Kind3<M, any, any, infer A>] ? A : never }, U, L>
  sequenceSL: <R extends Record<string, Kind3<M, U, L, any>>>(
    f: (s: S) => EnforceNonEmptyRecord<R> & { [K in keyof S]?: never }
  ) => Do3C<M, S & { [K in keyof R]: [R[K]] extends [Kind3<M, any, any, infer A>] ? A : never }, U, L>
  return: <A>(f: (s: S) => A) => Kind3<M, U, L, A>
  done: () => Kind3<M, U, L, S>
}

/**
 * @since 0.1.0
 */
export interface Do2<M extends URIS2, S extends object> {
  do: <L>(ma: Kind2<M, L, unknown>) => Do2C<M, S, L>
  doL: <L>(f: (s: S) => Kind2<M, L, unknown>) => Do2C<M, S, L>
  bind: <N extends string, A, L>(name: Exclude<N, keyof S>, ma: Kind2<M, L, A>) => Do2C<M, S & { [K in N]: A }, L>
  bindL: <N extends string, A, L>(
    name: Exclude<N, keyof S>,
    f: (s: S) => Kind2<M, L, A>
  ) => Do2C<M, S & { [K in N]: A }, L>
  sequenceS: <L, R extends Record<string, Kind2<M, L, any>>>(
    r: EnforceNonEmptyRecord<R> & Record<string, Kind2<M, L, any>> & { [K in keyof S]?: never }
  ) => Do2C<M, S & { [K in keyof R]: [R[K]] extends [Kind2<M, any, infer A>] ? A : never }, L>
  sequenceSL: <L, R extends Record<string, Kind2<M, L, any>>>(
    f: (s: S) => EnforceNonEmptyRecord<R> & Record<string, Kind2<M, L, any>> & { [K in keyof S]?: never }
  ) => Do2C<M, S & { [K in keyof R]: [R[K]] extends [Kind2<M, any, infer A>] ? A : never }, L>
  return: <A, L>(f: (s: S) => A) => Kind2<M, L, A>
  done: <L>() => Kind2<M, L, S>
}

/**
 * @since 0.1.0
 */
export interface Do2C<M extends URIS2, S extends object, L> {
  do: (ma: Kind2<M, L, unknown>) => Do2C<M, S, L>
  doL: (f: (s: S) => Kind2<M, L, unknown>) => Do2C<M, S, L>
  bind: <N extends string, A>(name: Exclude<N, keyof S>, ma: Kind2<M, L, A>) => Do2C<M, S & { [K in N]: A }, L>
  bindL: <N extends string, A>(
    name: Exclude<N, keyof S>,
    f: (s: S) => Kind2<M, L, A>
  ) => Do2C<M, S & { [K in N]: A }, L>
  sequenceS: <R extends Record<string, Kind2<M, L, any>>>(
    r: EnforceNonEmptyRecord<R> & { [K in keyof S]?: never }
  ) => Do2C<M, S & { [K in keyof R]: [R[K]] extends [Kind2<M, any, infer A>] ? A : never }, L>
  sequenceSL: <R extends Record<string, Kind2<M, L, any>>>(
    f: (s: S) => EnforceNonEmptyRecord<R> & { [K in keyof S]?: never }
  ) => Do2C<M, S & { [K in keyof R]: [R[K]] extends [Kind2<M, any, infer A>] ? A : never }, L>
  return: <A>(f: (s: S) => A) => Kind2<M, L, A>
  done: () => Kind2<M, L, S>
}

/**
 * @since 0.1.0
 */
export interface Do1<M extends URIS, S extends object> {
  do: (ma: Kind<M, unknown>) => Do1<M, S>
  doL: (f: (s: S) => Kind<M, unknown>) => Do1<M, S>
  bind: <N extends string, A>(name: Exclude<N, keyof S>, ma: Kind<M, A>) => Do1<M, S & { [K in N]: A }>
  bindL: <N extends string, A>(name: Exclude<N, keyof S>, f: (s: S) => Kind<M, A>) => Do1<M, S & { [K in N]: A }>
  sequenceS: <R extends Record<string, Kind<M, any>>>(
    r: EnforceNonEmptyRecord<R> & { [K in keyof S]?: never }
  ) => Do1<M, S & { [K in keyof R]: [R[K]] extends [Kind<M, infer A>] ? A : never }>
  sequenceSL: <R extends Record<string, Kind<M, any>>>(
    f: (s: S) => EnforceNonEmptyRecord<R> & { [K in keyof S]?: never }
  ) => Do1<M, S & { [K in keyof R]: [R[K]] extends [Kind<M, infer A>] ? A : never }>
  return: <A>(f: (s: S) => A) => Kind<M, A>
  done: () => Kind<M, S>
}

/**
 * @since 0.1.0
 */
export interface Do0<M, S extends object> {
  do: (ma: HKT<M, unknown>) => Do0<M, S>
  doL: (f: (s: S) => HKT<M, unknown>) => Do0<M, S>
  bind: <N extends string, A>(name: Exclude<N, keyof S>, ma: HKT<M, A>) => Do0<M, S & { [K in N]: A }>
  bindL: <N extends string, A>(name: Exclude<N, keyof S>, f: (s: S) => HKT<M, A>) => Do0<M, S & { [K in N]: A }>
  sequenceS: <R extends Record<string, HKT<M, unknown>>>(
    r: EnforceNonEmptyRecord<R> & { [K in keyof S]?: never }
  ) => Do0<M, S & { [K in keyof R]: [R[K]] extends [HKT<M, infer A>] ? A : never }>
  sequenceSL: <R extends Record<string, HKT<M, unknown>>>(
    f: (s: S) => EnforceNonEmptyRecord<R> & { [K in keyof S]?: never }
  ) => Do0<M, S & { [K in keyof R]: [R[K]] extends [HKT<M, infer A>] ? A : never }>
  return: <A>(f: (s: S) => A) => HKT<M, A>
  done: () => HKT<M, S>
}

class DoClass<M> {
  constructor(readonly M: Monad<M>, private result: HKT<M, any>) {}
  do(action: HKT<M, unknown>): DoClass<M> {
    return new DoClass(
      this.M,
      this.M.chain(this.result, s => this.M.map(action, () => s))
    )
  }
  doL(f: (s: unknown) => HKT<M, unknown>): DoClass<M> {
    return new DoClass(
      this.M,
      this.M.chain(this.result, s => this.M.map(f(s), () => s))
    )
  }
  bind(name: string, action: HKT<M, unknown>): DoClass<M> {
    return new DoClass(
      this.M,
      this.M.chain(this.result, s =>
        this.M.map(action, b => {
          const s2 = Object.assign({}, s)
          s2[name] = b
          return s2
        })
      )
    )
  }
  bindL(name: string, f: (s: unknown) => HKT<M, unknown>): DoClass<M> {
    return new DoClass(
      this.M,
      this.M.chain(this.result, s =>
        this.M.map(f(s), b => {
          const s2 = Object.assign({}, s)
          s2[name] = b
          return s2
        })
      )
    )
  }
  sequenceS(r: Record<string, HKT<M, unknown>>): DoClass<M> {
    return new DoClass(
      this.M,
      this.M.chain(this.result, s => this.M.map(sequenceS(this.M)(r), r => Object.assign({}, s, r)))
    )
  }
  sequenceSL(f: (s: unknown) => Record<string, HKT<M, unknown>>): DoClass<M> {
    return new DoClass(
      this.M,
      this.M.chain(this.result, s => this.M.map(sequenceS(this.M)(f(s)), r => Object.assign({}, s, r)))
    )
  }
  return<B>(f: (s: unknown) => B): HKT<M, B> {
    return this.M.map(this.result, f)
  }
  done(): HKT<M, unknown> {
    return this.result
  }
}

const init = {}

/**
 * This function provides a simulation of Haskell do notation. The `bind` / `bindL` functions contributes to a threaded
 * scope that is available to each subsequent step. The `do` / `doL` functions can be used to perform computations that
 * add nothing to the scope. The `return` function lifts the given callback to the monad context. Finally the `done`
 * function returns the scope.
 *
 * @example
 * import { option, some } from 'fp-ts/lib/Option'
 * import { Do } from 'fp-ts-contrib/lib/Do'
 *
 * // x: Option<number>
 * const x = Do(option) // <- a monad instance
 *   .bindL('foo', () => some('bar'))
 *   .bindL('baz', () => some(4))
 *   .return(({ foo, baz }) => foo.length + baz)
 *
 * assert.deepStrictEqual(x, some(7))
 *
 * @since 0.0.2
 */
export function Do<M extends URIS3>(M: Monad3<M>): Do3<M, {}>
export function Do<M extends URIS2>(M: Monad2<M>): Do2<M, {}>
export function Do<M extends URIS2, L>(M: Monad2C<M, L>): Do2C<M, {}, L>
export function Do<M extends URIS>(M: Monad1<M>): Do1<M, {}>
export function Do<M>(M: Monad<M>): Do0<M, {}>
export function Do<M>(M: Monad<M>): any {
  return new DoClass(M, M.of(init))
}
