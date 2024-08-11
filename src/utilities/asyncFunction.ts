export function asyncFunction<T extends unknown[]>(func: (...args: T) => Promise<void>): (...args: T) => void {
    return (...args: T) => void (async () => await func(...args))();
}