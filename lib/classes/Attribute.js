"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecutionAttribute = exports.DataAttribute = exports.Attribute = void 0;
require("core-js/modules/es.symbol.description.js");
var _Events = require("./Events");
var _Serializable = require("./Serializable");
var _Serializer = require("./Serializer");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The direction of the attribute. Inputs sit on the left side of the block, and outputs sit on the right side of the block.
 */

/**
 * An attribute is a property of a block.
 *
 * ```ts
 * const attribute = new Attribute('myAttribute', {
 * 	label: 'My Attribute',
 * 	direction: 'input',
 * });
 *
 * // You can listen to events on the attribute.
 * attribute.events.on('change:label', (newLabel) => {
 * 	console.log(newLabel);
 * });
 *
 *
 */

class Attribute extends _Serializable.Serializable {
  /**
    * The direction of the attribute. This determines whether or not the attribute is an input or an output.
    */

  /**
    * Just like the label on a block, this is what the user sees, this cannot be changed by the user though.
    */
  get label() {
    return this._label;
  }
  set label(label) {
    this._label = label;
    this.events.emit('change:label', label);
  }

  /**
    * Whether or not to hide the label of the attribute. Can be used for attributes that have custom controllers that display the label.
    */

  /**
    * Whether or not to hide the pin of the attribute. Can be used when you only want to display the controller
    */

  /** @ignore */

  /**
   * Get the block that this attribute belongs to.
   */
  get parent() {
    return this._block;
  }

  /**
    * Stores a reference to the block that this attribute belongs to.
    */

  constructor(name, options) {
    var _options$label, _options$hideLabel, _options$hidePin;
    super();
    /**
      * This is used to emit and listen to events.
      */
    _defineProperty(this, "events", new _Events.Events());
    this.name = name;
    this._label = (_options$label = options.label) !== null && _options$label !== void 0 ? _options$label : name;
    this.direction = options.direction;
    this.hideLabel = (_options$hideLabel = options.hideLabel) !== null && _options$hideLabel !== void 0 ? _options$hideLabel : false;
    this.hidePin = (_options$hidePin = options.hidePin) !== null && _options$hidePin !== void 0 ? _options$hidePin : false;
  }
  setParent(block) {
    this._block = block;
  }
  serialize() {
    return _objectSpread(_objectSpread({}, super.serialize()), {}, {
      label: this.label,
      hideLabel: this.hideLabel,
      hidePin: this.hidePin,
      direction: this.direction
    });
  }
}
exports.Attribute = Attribute;
/**
 * An attribute that holds data.
 *
 * ```ts
 * const attribute = new DataAttribute('myAttribute', {
 * 	label: 'My Attribute',
 * 	direction: 'input',
 * 	datatype: Primitives.STRING,
 * });
 */
class DataAttribute extends Attribute {
  /**
    * The type of data that this attribute holds.
    */

  constructor(name, options) {
    super(name, options);
    this.datatype = options.datatype;
  }
  serialize() {
    return _objectSpread(_objectSpread({}, super.serialize()), {}, {
      datatype: this.datatype.serialize()
    });
  }
}
exports.DataAttribute = DataAttribute;
DataAttribute.register(data => new DataAttribute(data.label, {
  datatype: _Serializer.Serializer.deserialize(data.datatype),
  direction: data.direction,
  label: data.label,
  hideLabel: data.hideLabel,
  hidePin: data.hidePin
}));
/**
 * An attribute that executes code when its executed by another block.
 */
class ExecutionAttribute extends Attribute {}
exports.ExecutionAttribute = ExecutionAttribute;