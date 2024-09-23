type ReFn = (...args: unknown[]) => void
type ThFn = (fn: ReFn, timer: number) => ReFn

export const throttle: ThFn = (fn, timer) => {
  let time: NodeJS.Timeout | null = null
  const _throttle = (...args: unknown[]) => {
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      fn.apply(this, args)
    }, timer);
  }
  return _throttle
}
