"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = exports.Block = void 0;
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
exports.Vector = Vector;
class Block {
  constructor(position, size) {
    this.position = position;
    this.size = size;
  }
}
exports.Block = Block;