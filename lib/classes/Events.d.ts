/**
 * A simple event emitter. Takes a generic type that defines the events that can be emitted.
 *
 * ```ts
 * type MyEvents = {
 * 	'event-1': [string, number];
 *  'event-2': [boolean];
 * };
 *
 * const events = new Events<MyEvents>();
 * ```
 */
export declare class Events<T extends Record<string, any[]>> {
    listeners: {
        [key in keyof T]: Array<(...args: T[key]) => void>;
    };
    constructor();
    /**
     * Add a listener to an event.
     *
     * ```ts
     * const listener = (arg1: string, arg2: number) => {
     * 	console.log(arg1, arg2);
     * };
     *
     * events.on('event-1', listener);
     * ```
     */
    on<K extends keyof T>(event: K, listener: (...args: T[K]) => void): void;
    /**
     * Remove a listener from an event.
     *
     * ```ts
     * events.off('event-1', listener);
     */
    off<K extends keyof T>(event: K, listener: (...args: T[K]) => void): void;
    /**
     * Emit an event with the given arguments.
     *
     * ```ts
     * events.emit('event-1', 'hello', 1);
     * ```
     */
    emit<K extends keyof T>(event: K, ...args: T[K]): void;
    /**
     * Add a listener to an event that will only be called once.
     *
     * ```ts
     * events.once('event-1', listener);
     *
     * events.emit('event-1', 'hello', 1); // listener is called
     * events.emit('event-1', 'hello', 1); // listener is not called
     * ```
     */
    once<K extends keyof T>(event: K, listener: (...args: T[K]) => void): void;
    /**
     * Clear all listeners.
     * ```ts
     * events.emit('event-1', 'hello', 1); // listeners are called
     * events.clear();
     * events.emit('event-1', 'hello', 1); // listeners are not called
     * ```
     */
    clear(): void;
    getListeners<K extends keyof T>(event: K): { [key in keyof T]: ((...args: T[key]) => void)[]; }[K];
}
//# sourceMappingURL=Events.d.ts.map