"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetterAttribute = exports.ExecutionAttribute = exports.DataAttribute = exports.Attribute = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _Serialization = require("../Serialization");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * An attribute is a property of a block.
 */
class Attribute extends _Serialization.Serializable {
  /**
   * Just like the label on a block, this is what the user sees, this cannot be changed by the user though.
   */

  /**
   * Whether or not to hide the label of the attribute. Can be used for attributes that have custom controllers that display the label.
   */

  /**
   * Whether or not to hide the pin of the attribute. Can be used when you only want to display the controller
   */

  /**
   * Stores a reference to the block that this attribute belongs to.
   */

  constructor(name, options) {
    var _options$label, _options$hideLabel, _options$hidePin;
    super(name);
    this.name = name;
    this.label = (_options$label = options === null || options === void 0 ? void 0 : options.label) !== null && _options$label !== void 0 ? _options$label : name;
    this.hideLabel = (_options$hideLabel = options === null || options === void 0 ? void 0 : options.hideLabel) !== null && _options$hideLabel !== void 0 ? _options$hideLabel : false;
    this.hidePin = (_options$hidePin = options === null || options === void 0 ? void 0 : options.hidePin) !== null && _options$hidePin !== void 0 ? _options$hidePin : false;
  }
  setParent(block) {
    this._block = block;
  }
}
exports.Attribute = Attribute;
/**
 * An attribute that holds data.
 */
class DataAttribute extends Attribute {
  /**
   * The type of data that this attribute holds.
   */

  constructor(name, options) {
    super(name, options);
    this.datatype = options.datatype;
  }
}
exports.DataAttribute = DataAttribute;
/**
 * An attribute that executes code when its executed by another block.
 */
class ExecutionAttribute extends Attribute {
  constructor() {
    super(...arguments);
    _defineProperty(this, "_handler", () => {
      throw new Error('No handler defined');
    });
  }
  /**
   * This is the code that will be executed when the attribute is executed.
   */ // eslint-disable-next-line @typescript-eslint/member-ordering
  onExecute(handler) {
    this._handler = handler;
  }

  /**
   * This function is used by the engine to execute this attribute.
   */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  execute() {
    this._handler(...arguments);
  }
}
exports.ExecutionAttribute = ExecutionAttribute;
class GetterAttribute extends DataAttribute {
  constructor() {
    super(...arguments);
    _defineProperty(this, "_getter", () => {
      throw new Error('No getter defined');
    });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  onGet(handler) {
    this._getter = handler;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this._getter(...arguments);
  }
}
exports.GetterAttribute = GetterAttribute;