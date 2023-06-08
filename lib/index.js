"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("reflect-metadata");
var _Attribute = require("./classes/Attribute");
Object.keys(_Attribute).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Attribute[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Attribute[key];
    }
  });
});
var _Block = require("./classes/Block");
Object.keys(_Block).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Block[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Block[key];
    }
  });
});
var _Events = require("./classes/Events");
Object.keys(_Events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Events[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Events[key];
    }
  });
});
var _Serializable = require("./classes/Serializable");
Object.keys(_Serializable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Serializable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Serializable[key];
    }
  });
});
var _Serializer = require("./classes/Serializer");
Object.keys(_Serializer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Serializer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Serializer[key];
    }
  });
});
var _Types = require("./classes/Types");
Object.keys(_Types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Types[key];
    }
  });
});
var _primitives = require("./primitives");
Object.keys(_primitives).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _primitives[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _primitives[key];
    }
  });
});