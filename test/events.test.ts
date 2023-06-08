import { Events } from './../src/classes/Events';
const testEvents = new Events<{
	'test-event': [string, number];
	'test-event-2': [string, number];
}>();

describe('Events', () => {

	it('should be able to add a listener', () => {
		const listener = jest.fn();
		testEvents.on('test-event', listener);

		expect(testEvents.listeners['test-event']).toContain(listener);
	});

	it('should be able to remove a listener', () => {
		const listener = jest.fn();
		testEvents.on('test-event', listener);
		testEvents.off('test-event', listener);

		expect(testEvents.listeners['test-event']).not.toContain(listener);
	});

	it('should be able to emit an event', () => {
		const listener = jest.fn();
		testEvents.on('test-event', listener);
		testEvents.emit('test-event', 'hello', 1);

		expect(listener).toHaveBeenCalledWith('hello', 1);
	});

	it('should return if there is no event with the given name and you are trying to remove it', () => {
		const listener = jest.fn();

		expect(() => {
			testEvents.off('abc' as any, listener);
		}).not.toThrow();

	});

	it('should return and not throw when emitting an event that does not exist', () => {
		const listener = jest.fn();

		expect(() => {
			testEvents.emit('abc' as any, listener);
		}).not.toThrow();

	});

	it("should be able to get all listeners for an event", () => {
		const listener = jest.fn();

		testEvents.on('test-event', listener);

		expect(testEvents.getListeners('test-event')).toContain(listener);
		expect(testEvents.getListeners('abc' as any)).toEqual([]);
	});


	it('should be able to emit an event with multiple listeners', () => {
		const listener = jest.fn();
		const listener2 = jest.fn();
		testEvents.on('test-event', listener);
		testEvents.on('test-event', listener2);
		testEvents.emit('test-event', 'hello', 1);

		expect(listener).toHaveBeenCalledWith('hello', 1);
		expect(listener2).toHaveBeenCalledWith('hello', 1);
	});

	it('should be able to emit an event with multiple arguments', () => {
		const listener = jest.fn();
		testEvents.on('test-event', listener);
		testEvents.emit('test-event', 'hello', 1);

		expect(listener).toHaveBeenCalledWith('hello', 1);
	});

	it('should be able to listen only once', () => {
		const listener = jest.fn();
		testEvents.once('test-event', listener);
		testEvents.emit('test-event', 'hello', 1);
		testEvents.emit('test-event', 'hello', 1);

		expect(listener).toHaveBeenCalledTimes(1);
	});

	it("should be able to clear all listeners", () => {
		const listener = jest.fn();
		testEvents.on('test-event', listener);
		testEvents.clear();

		expect(testEvents.listeners['test-event']).toBeUndefined();
	});

});