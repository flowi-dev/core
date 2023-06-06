[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / UnionType

# Class: UnionType

[Type](../modules/Type.md).UnionType

This class defines unions, just like in TypeScript, a union is a type that can be one of the types in the union.
```ts
const union = new UnionType('union', [STRING, NUMBER]);
union.check('hello'); // true
union.check(1); // true
union.check(true); // false
```

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`UnionType`**

## Table of contents

### Constructors

- [constructor](Type.UnionType.md#constructor)

### Properties

- [\_](Type.UnionType.md#_)
- [name](Type.UnionType.md#name)
- [types](Type.UnionType.md#types)
- [cache](Type.UnionType.md#cache)

### Methods

- [check](Type.UnionType.md#check)
- [extend](Type.UnionType.md#extend)
- [extends](Type.UnionType.md#extends)
- [serialize](Type.UnionType.md#serialize)
- [deserialize](Type.UnionType.md#deserialize)
- [fromIntersect](Type.UnionType.md#fromintersect)
- [remove](Type.UnionType.md#remove)

## Constructors

### constructor

• **new UnionType**(`name`, `types`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | [`BaseType`](Type.BaseType.md)[] |

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:130](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L130)

## Properties

### \_

• **\_**: `string` = `UnionType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:129](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L129)

___

### name

• **name**: `string`

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:131](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L131)

___

### types

• `Readonly` **types**: [`BaseType`](Type.BaseType.md)[]

#### Defined in

[Type.ts:132](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L132)

___

### cache

▪ `Static` `Protected` **cache**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[BaseType](Type.BaseType.md).[cache](Type.BaseType.md#cache)

#### Defined in

[Serializable.ts:97](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Serializable.ts#L97)

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

[Type.ts:161](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L161)

___

### extend

▸ **extend**(`type`): [`UnionType`](Type.UnionType.md)

Extends the union with a new type, this will return a new union with the new type added.
```ts
const union = new UnionType('union', [STRING, NUMBER]);
const extended = union.extend(BOOLEAN);

extended.check('hello'); // true
extended.check(1); // true
extended.check(true); // true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BaseType`](Type.BaseType.md) |

#### Returns

[`UnionType`](Type.UnionType.md)

#### Defined in

[Type.ts:148](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L148)

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

[Type.ts:152](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L152)

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

[BaseType](Type.BaseType.md).[serialize](Type.BaseType.md#serialize)

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

[BaseType](Type.BaseType.md).[deserialize](Type.BaseType.md#deserialize)

#### Defined in

[Serializable.ts:60](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Serializable.ts#L60)

___

### fromIntersect

▸ `Static` **fromIntersect**(`name`, `unions`): [`UnionType`](Type.UnionType.md)

Creates a union from the intersection of two unions.
```ts
const a = new UnionType('a', [STRING, TRUE]);
const b = new UnionType('b', [STRING, FALSE]);

const c = UnionType.fromIntersect('c', [a, b]);
c.check('hello'); // true
c.check(true); // false
c.check(false); // false

console.log(c.types); // [STRING] because TRUE and FALSE do not extend each other
```

```ts
const a = new UnionType('a', [STRING, BOOLEAN, NUMBER]);
const b = new UnionType('b', [TRUE, NULL]);

const c = UnionType.fromIntersect('c', [a, b]);
c.check('hello'); // false
c.check(true); // true
c.check(null); // false
c.check(1); // false

console.log(c.types); // [TRUE] because TRUE extends BOOLEAN
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `unions` | [[`UnionType`](Type.UnionType.md), [`UnionType`](Type.UnionType.md)] |

#### Returns

[`UnionType`](Type.UnionType.md)

#### Defined in

[Type.ts:115](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Type.ts#L115)

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

[Serializable.ts:93](https://github.com/flowi-dev/core/blob/59a2721/src/classes/Serializable.ts#L93)
