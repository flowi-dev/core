[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / ArrayType

# Class: ArrayType

[Type](../modules/Type.md).ArrayType

This class defines arrays, an array is a type that contains a list of elements of a certain type.
```ts
const array = new ArrayType('array', STRING);
array.check(['hello', 'world']); // true
array.check(['hello', 1]); // false
```

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`ArrayType`**

## Table of contents

### Constructors

- [constructor](Type.ArrayType.md#constructor)

### Properties

- [\_](Type.ArrayType.md#_)
- [elementType](Type.ArrayType.md#elementtype)
- [name](Type.ArrayType.md#name)
- [cache](Type.ArrayType.md#cache)

### Methods

- [check](Type.ArrayType.md#check)
- [extends](Type.ArrayType.md#extends)
- [serialize](Type.ArrayType.md#serialize)
- [deserialize](Type.ArrayType.md#deserialize)
- [remove](Type.ArrayType.md#remove)

## Constructors

### constructor

• **new ArrayType**(`name`, `elementType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `elementType` | [`BaseType`](Type.BaseType.md) |

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:176](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Type.ts#L176)

## Properties

### \_

• **\_**: `string` = `ArrayType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:175](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Type.ts#L175)

___

### elementType

• `Readonly` **elementType**: [`BaseType`](Type.BaseType.md)

#### Defined in

[Type.ts:178](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Type.ts#L178)

___

### name

• **name**: `string`

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:177](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Type.ts#L177)

___

### cache

▪ `Static` `Protected` **cache**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[BaseType](Type.BaseType.md).[cache](Type.BaseType.md#cache)

#### Defined in

[Serializable.ts:97](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Serializable.ts#L97)

## Methods

### check

▸ **check**(`data`): `boolean`

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

#### Overrides

[BaseType](Type.BaseType.md).[check](Type.BaseType.md#check)

#### Defined in

[Type.ts:183](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Type.ts#L183)

___

### extends

▸ **extends**(`type`): `boolean`

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

#### Overrides

[BaseType](Type.BaseType.md).[extends](Type.BaseType.md#extends)

#### Defined in

[Type.ts:191](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Type.ts#L191)

___

### serialize

▸ **serialize**(): `Object`

The fallback function for serialization. Most types will override this function.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `elementType` | { `_`: `string` ; `name`: `string`  } |
| `elementType._` | `string` |
| `elementType.name` | `string` |
| `name` | `string` |

#### Overrides

[BaseType](Type.BaseType.md).[serialize](Type.BaseType.md#serialize)

#### Defined in

[Type.ts:203](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Type.ts#L203)

___

### deserialize

▸ `Static` **deserialize**(`data`): [`Serializable`](Serializable.Serializable.md)

Deserialize a type from a serialized object.

```json
{
 	name: 'object',
 	_: 'ObjectType',
 	properties: {
 	  username: {
 	    name: 'string',
 	    _: 'PrimitiveType',
 	  },
 	  password: {
 	    name: 'string',
 	    _: 'PrimitiveType',
 	  },
 	  age: {
 	    name: 'integer',
 	    _: 'PrimitiveType',
 	  },
 	  address: { ... }
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

[BaseType](Type.BaseType.md).[deserialize](Type.BaseType.md#deserialize)

#### Defined in

[Serializable.ts:60](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Serializable.ts#L60)

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

[BaseType](Type.BaseType.md).[remove](Type.BaseType.md#remove)

#### Defined in

[Serializable.ts:93](https://github.com/flowi-dev/core/blob/92e489f/src/classes/Serializable.ts#L93)
