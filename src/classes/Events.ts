
/**
 * A simple event emitter. Takes a generic type that defines the events that can be emitted.
 *
 * ```ts
 * type MyEvents = {
 * 	'event-1': [string, number];
 * 	'event-2': [boolean];
 * };
 *
 * const events = new Events<MyEvents>();
 * ```
 */
export class Events<T extends Record<string, any[] >> {
	public listeners: {
		[key in keyof T]: Array<(...args: T[key]) => void>;
	};

	constructor() {
		this.listeners = {} as unknown as typeof this.listeners;
	}

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
	public on<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event].push(listener);
	}

	/**
	 * Remove a listener from an event.
	 *
	 * ```ts
	 * events.off('event-1', listener);
	 */
	public off<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
		if (!this.listeners[event]) {
			return;
		}

		this.listeners[event] = this.listeners[event].filter(l => l !== listener);
	}

	/**
	 * Emit an event with the given arguments.
	 *
	 * ```ts
	 * events.emit('event-1', 'hello', 1);
	 * ```
	 */
	public emit<K extends keyof T>(event: K, ...args: T[K]) {
		if (!this.listeners[event]) {
			return;
		}

		this.listeners[event].forEach(listener => {
			listener(...args);
		});
	}

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
	public once<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
		const onceListener = (...args: T[K]) => {
			this.off(event, onceListener);
			listener(...args);
		};

		this.on(event, onceListener);
	}

	/**
	 * Clear all listeners.
	 * ```ts
	 * events.emit('event-1', 'hello', 1); // listeners are called
	 * events.clear();
	 * events.emit('event-1', 'hello', 1); // listeners are not called
	 * ```
	 */
	public clear() {
		this.listeners = {} as unknown as typeof this.listeners;
	}

	public getListeners<K extends keyof T>(event: K) {
		return this.listeners[event] ?? [];
	}
}
