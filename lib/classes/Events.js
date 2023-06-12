"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
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
class Events {
  constructor() {
    this.listeners = {};
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
  on(event, listener) {
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
  off(event, listener) {
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
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
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
  once(event, listener) {
    var _this = this;
    const onceListener = function onceListener() {
      _this.off(event, onceListener);
      listener(...arguments);
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
  clear() {
    this.listeners = {};
  }
  getListeners(event) {
    var _this$listeners$event;
    return (_this$listeners$event = this.listeners[event]) !== null && _this$listeners$event !== void 0 ? _this$listeners$event : [];
  }
}
exports.Events = Events;