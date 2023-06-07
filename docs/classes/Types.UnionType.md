[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Types](../modules/Types.md) / UnionType

# Class: UnionType<T\>

[Types](../modules/Types.md).UnionType

This class defines unions, just like in TypeScript, a union is a type that can be one of the types in the union.
```ts
const union = new UnionType('union', [STRING, NUMBER]);
union.check('hello'); // true
union.check(1); // true
union.check(true); // false
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly [`BaseType`](Types.BaseType.md)[] = readonly [`BaseType`](Types.BaseType.md)[] |

## Hierarchy

- [`BaseType`](Types.BaseType.md)

  ↳ **`UnionType`**

## Table of contents

### Constructors

- [constructor](Types.UnionType.md#constructor)

### Properties

- [\_](Types.UnionType.md#_)
- [name](Types.UnionType.md#name)
- [types](Types.UnionType.md#types)

### Methods

- [check](Types.UnionType.md#check)
- [extend](Types.UnionType.md#extend)
- [extends](Types.UnionType.md#extends)
- [serialize](Types.UnionType.md#serialize)
- [fromIntersect](Types.UnionType.md#fromintersect)

## Constructors

### constructor

• **new UnionType**<`T`\>(`name`, `types`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly [`BaseType`](Types.BaseType.md)[] = readonly [`BaseType`](Types.BaseType.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | `T` |

#### Overrides

[BaseType](Types.BaseType.md).[constructor](Types.BaseType.md#constructor)

#### Defined in

[Types.ts:134](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L134)

## Properties

### \_

• **\_**: `string`

The class name

#### Inherited from

[BaseType](Types.BaseType.md).[_](Types.BaseType.md#_)

#### Defined in

[Serialization.ts:77](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L77)

___

### name

• **name**: `string`

The identifier for the specific instance of the class

#### Inherited from

[BaseType](Types.BaseType.md).[name](Types.BaseType.md#name)

#### Defined in

[Types.ts:135](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L135)

___

### types

• `Readonly` **types**: `T`

#### Defined in

[Types.ts:136](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L136)

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

[BaseType](Types.BaseType.md).[check](Types.BaseType.md#check)

#### Defined in

[Types.ts:165](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L165)

___

### extend

▸ **extend**(`type`): [`UnionType`](Types.UnionType.md)<readonly [`BaseType`](Types.BaseType.md)[]\>

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
| `type` | [`BaseType`](Types.BaseType.md) |

#### Returns

[`UnionType`](Types.UnionType.md)<readonly [`BaseType`](Types.BaseType.md)[]\>

#### Defined in

[Types.ts:152](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L152)

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
| `type` | [`BaseType`](Types.BaseType.md) |

#### Returns

`boolean`

#### Overrides

[BaseType](Types.BaseType.md).[extends](Types.BaseType.md#extends)

#### Defined in

[Types.ts:156](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L156)

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

[BaseType](Types.BaseType.md).[serialize](Types.BaseType.md#serialize)

#### Defined in

[Serialization.ts:88](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L88)

___

### fromIntersect

▸ `Static` **fromIntersect**<`A`, `B`\>(`name`, `unions`): [`UnionType`](Types.UnionType.md)<[`BaseType`](Types.BaseType.md)[]\>

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

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`UnionType`](Types.UnionType.md)<readonly [`BaseType`](Types.BaseType.md)[], `A`\> |
| `B` | extends [`UnionType`](Types.UnionType.md)<readonly [`BaseType`](Types.BaseType.md)[], `B`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `unions` | [`A`, `B`] |

#### Returns

[`UnionType`](Types.UnionType.md)<[`BaseType`](Types.BaseType.md)[]\>

#### Defined in

[Types.ts:120](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L120)
