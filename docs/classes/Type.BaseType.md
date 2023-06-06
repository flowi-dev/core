[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / BaseType

# Class: BaseType

[Type](../modules/Type.md).BaseType

The base class that all types extend from, this provides the basic functionality that all types need. Such as serialization and deserialization and type checking.
This class is abstract and should not be used directly.

## Hierarchy

- [`Serializable`](Serializable.Serializable.md)

  ↳ **`BaseType`**

  ↳↳ [`PrimitiveType`](Type.PrimitiveType.md)

  ↳↳ [`UnionType`](Type.UnionType.md)

  ↳↳ [`ArrayType`](Type.ArrayType.md)

  ↳↳ [`AnyType`](Type.AnyType.md)

  ↳↳ [`ObjectType`](Type.ObjectType.md)

## Table of contents

### Constructors

- [constructor](Type.BaseType.md#constructor)

### Properties

- [\_](Type.BaseType.md#_)
- [name](Type.BaseType.md#name)
- [cache](Type.BaseType.md#cache)

### Methods

- [check](Type.BaseType.md#check)
- [extends](Type.BaseType.md#extends)
- [serialize](Type.BaseType.md#serialize)
- [deserialize](Type.BaseType.md#deserialize)
- [remove](Type.BaseType.md#remove)

## Constructors

### constructor

• **new BaseType**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Inherited from

[Serializable](Serializable.Serializable.md).[constructor](Serializable.Serializable.md#constructor)

#### Defined in

[Serializable.ts:99](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Serializable.ts#L99)

## Properties

### \_

• `Abstract` **\_**: `string`

#### Defined in

[Type.ts:8](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L8)

___

### name

• `Abstract` **name**: `string`

#### Defined in

[Type.ts:9](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L9)

___

### cache

▪ `Static` `Protected` **cache**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[Serializable](Serializable.Serializable.md).[cache](Serializable.Serializable.md#cache)

#### Defined in

[Serializable.ts:97](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Serializable.ts#L97)

## Methods

### check

▸ `Abstract` **check**(`data`): `boolean`

Checks if the given data is of this type.
```ts
STRING.check('hello'); // true
STRING.check(1); // false

BOOLEAN.check(true); // true
BOOLEAN.check(1); // false
BOOLEAN.check('hello'); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Type.ts:33](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L33)

___

### extends

▸ `Abstract` **extends**(`type`): `boolean`

Checks if this type extends the given type.

```ts
// Example, TRUE is in BOOLEAN, but BOOLEAN is not in TRUE.
TRUE.extends(BOOLEAN); // true
BOOLEAN.extends(TRUE); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BaseType`](Type.BaseType.md) |

#### Returns

`boolean`

#### Defined in

[Type.ts:20](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L20)

___

### serialize

▸ **serialize**(): `Object`

The fallback function for serialization. Most types will override this function.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `name` | `string` |

#### Inherited from

[Serializable](Serializable.Serializable.md).[serialize](Serializable.Serializable.md#serialize)

#### Defined in

[Serializable.ts:106](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Serializable.ts#L106)

___

### deserialize

▸ `Static` **deserialize**(`data`): [`Serializable`](Serializable.Serializable.md)

Deserialize a type from a serialized object.

```json
{
	"name": "object",
	"_": "ObjectType",
	"properties": {
	  "username": {
	    "name": "string",
	    "_": "PrimitiveType",
	  },
	  "password": {
	    "name": "string",
	    "_": "PrimitiveType",
	  },
	  "age": {
	    "name": "integer",
	    "_": "PrimitiveType",
	  },
	  "address": { ... }
 }
```

```ts
const deserialized = Serializable.deserialize({...});
console.log(deserialized);
// ObjectType {
//   name: 'object',
//   properties: {
//     username: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
//     password: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
//     age: PrimitiveType { name: 'integer', validator: [Function (anonymous)] },
//     address: ObjectType {
//       name: 'address',
//       properties: {
//         street: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
//         city: PrimitiveType { name: 'string', validator: [Function (anonymous)] },
//         coordinates: ArrayType {
//           name: 'coordinates',
//           elementType: PrimitiveType { name: 'number', validator: [Function (anonymous)] }
//         }
//       }
//     }
//   }
// }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data._` | `string` |
| `data.name` | `string` |

#### Returns

[`Serializable`](Serializable.Serializable.md)

#### Inherited from

[Serializable](Serializable.Serializable.md).[deserialize](Serializable.Serializable.md#deserialize)

#### Defined in

[Serializable.ts:60](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Serializable.ts#L60)

___

### remove

▸ `Static` **remove**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[Serializable](Serializable.Serializable.md).[remove](Serializable.Serializable.md#remove)

#### Defined in

[Serializable.ts:93](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Serializable.ts#L93)
