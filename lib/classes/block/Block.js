"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _Events = require("../Events");
var _Serializable = require("../Serialization/Serializable");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * This class defines the base block. Each block then has attributes, which can have pins, types, controllers, etc.
 *
 * ```ts
 * const block = new Block('my-block');
 * ```
 *
 * You can optionally pass in a label to the block.
 * ```ts
 * const block = new Block('my-block', {label: 'My Block'});
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types
class Block extends _Serializable.Serializable {
  /**
   * The label is what is shown to the user, this can also be changed at runtime.
   */
  get label() {
    return this._label;
  }
  set label(label) {
    this._label = label;
    this.events.emit('change:label', label);
  }

  /** @ignore */

  constructor(name, options) {
    var _options$label;
    super(name);
    /**
     * A typed map of attributes that belong to this block.
     */
    _defineProperty(this, "attributes", {});
    /**
     * This is used to emit and listen to events.
     */
    _defineProperty(this, "events", new _Events.Events());
    this._label = (_options$label = options === null || options === void 0 ? void 0 : options.label) !== null && _options$label !== void 0 ? _options$label : name;
  }

  /**
   * Used to add an attribute to the block.
   *
   *```ts
   * const block = new Block('my-block');
   * const attribute = new DataAttribute('my-attribute', {datatype: Primitives.STRING, direction: 'input'});
   *
   * block.addAttribute(attribute);
   * block.removeAttribute(attribute);
   * ```
   */
  addAttribute(attribute) {
    this.attributes = _objectSpread(_objectSpread({}, this.attributes), {}, {
      [attribute.name]: attribute
    });
    attribute.setParent(this);
    this.events.emit('attribute:add', attribute);
    return this;
  }

  /**
   * Used to remove an attribute from the block.
   *
   * ```ts
   * const block = new Block('my-block');
   * const attribute = new DataAttribute('my-attribute', {datatype: Primitives.STRING, direction: 'input'});
   *
   * block.addAttribute(attribute);
   * block.removeAttribute(attribute);
   * ```
   */
  removeAttribute(attribute) {
    this.attributes = Object.fromEntries(Object.entries(this.attributes).filter(_ref => {
      let [key] = _ref;
      return key !== attribute.name;
    }));
    attribute.setParent(undefined);
    this.events.emit('attribute:remove', attribute);
    return this;
  }
}
exports.Block = Block;