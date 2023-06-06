[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / UnionIntersectionType

# Class: UnionIntersectionType

[Type](../modules/Type.md).UnionIntersectionType

## Hierarchy

- [`UnionType`](Type.UnionType.md)

  ↳ **`UnionIntersectionType`**

## Table of contents

### Constructors

- [constructor](Type.UnionIntersectionType.md#constructor)

### Properties

- [\_](Type.UnionIntersectionType.md#_)
- [name](Type.UnionIntersectionType.md#name)
- [types](Type.UnionIntersectionType.md#types)
- [catalog](Type.UnionIntersectionType.md#catalog)

### Methods

- [check](Type.UnionIntersectionType.md#check)
- [extends](Type.UnionIntersectionType.md#extends)
- [serialize](Type.UnionIntersectionType.md#serialize)
- [deserialize](Type.UnionIntersectionType.md#deserialize)

## Constructors

### constructor

• **new UnionIntersectionType**(`name`, `types`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | [`UnionType`](Type.UnionType.md)[] |

#### Overrides

[UnionType](Type.UnionType.md).[constructor](Type.UnionType.md#constructor)

#### Defined in

[Type.ts:217](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L217)

## Properties

### \_

• **\_**: `string` = `UnionType.name`

#### Inherited from

[UnionType](Type.UnionType.md).[_](Type.UnionType.md#_)

#### Defined in

[Type.ts:37](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L37)

___

### name

• **name**: `string`

#### Inherited from

[UnionType](Type.UnionType.md).[name](Type.UnionType.md#name)

#### Defined in

[Type.ts:218](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L218)

___

### types

• `Readonly` **types**: [`BaseType`](Type.BaseType.md)[]

#### Inherited from

[UnionType](Type.UnionType.md).[types](Type.UnionType.md#types)

#### Defined in

[Type.ts:40](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L40)

___

### catalog

▪ `Static` **catalog**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[UnionType](Type.UnionType.md).[catalog](Type.UnionType.md#catalog)

#### Defined in

[Serializable.ts:4](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Serializable.ts#L4)

## Methods

### check

▸ **check**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Inherited from

[UnionType](Type.UnionType.md).[check](Type.UnionType.md#check)

#### Defined in

[Type.ts:54](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L54)

___

### extends

▸ **extends**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BaseType`](Type.BaseType.md) |

#### Returns

`boolean`

#### Inherited from

[UnionType](Type.UnionType.md).[extends](Type.UnionType.md#extends)

#### Defined in

[Type.ts:45](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L45)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `name` | `string` |

#### Inherited from

[UnionType](Type.UnionType.md).[serialize](Type.UnionType.md#serialize)

#### Defined in

[Serializable.ts:43](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Serializable.ts#L43)

___

### deserialize

▸ `Static` **deserialize**(`data`): [`Serializable`](Serializable.Serializable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data._` | `string` |
| `data.name` | `string` |

#### Returns

[`Serializable`](Serializable.Serializable.md)

#### Inherited from

[UnionType](Type.UnionType.md).[deserialize](Type.UnionType.md#deserialize)

#### Defined in

[Serializable.ts:6](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Serializable.ts#L6)
