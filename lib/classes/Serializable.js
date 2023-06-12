"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serializable = void 0;
var _Serializer = require("./Serializer");
/**
 * This class defines instances that can be serialized and deserialized.
 *
 * ```ts
 * // The generic type defines what data is serialized.
 * class MySerializable extends Serializable<{
 * 	foo: string;
 * 	bar: number;
 * }> {
 * 	public constructor(
 * 		public readonly foo: string,
 * 		public readonly bar: number,
 * 	) {
 * 		super();
 * 	}
 *
 * 	// This method is called when the instance is serialized.
 * 	override serialize() {
 * 		return {
 * 			...super.serialize(),
 * 			foo: this.foo,
 * 			bar: this.bar,
 * 		};
 * 	}
 * }
 *
 * // This method is called when the instance is deserialized and returns an instance of the class.
 * MySerializable.register((data) => new MySerializable(data.foo, data.bar));
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