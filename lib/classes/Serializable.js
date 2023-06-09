"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serializable = void 0;
var _Serializer = require("./Serializer");
/**
 * This class defines instances that can be serialized and deserialized.
*/
class Serializable {
  static register(deserialize) {
    _Serializer.Serializer.register(this, deserialize);
  }
  serialize() {
    return {
      _: this.constructor.name
    };
  }
}
exports.Serializable = Serializable;