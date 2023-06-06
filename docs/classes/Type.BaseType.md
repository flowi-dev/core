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
- [catalog](Type.BaseType.md#catalog)

### Methods

- [check](Type.BaseType.md#check)
- [extends](Type.BaseType.md#extends)
- [serialize](Type.BaseType.md#serialize)
- [deserialize](Type.BaseType.md#deserialize)

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

[Serializable.ts:39](https://github.com/flowi-dev/core/blob/0537423/src/classes/Serializable.ts#L39)

## Properties

### \_

• `Abstract` **\_**: `string`

#### Defined in

[Type.ts:8](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L8)

___

### name

• `Abstract` **name**: `string`

#### Defined in

[Type.ts:9](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L9)

___

### catalog

▪ `Static` **catalog**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[Serializable](Serializable.Serializable.md).[catalog](Serializable.Serializable.md#catalog)

#### Defined in

[Serializable.ts:4](https://github.com/flowi-dev/core/blob/0537423/src/classes/Serializable.ts#L4)

## Methods

### check

▸ `Abstract` **check**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Type.ts:11](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L11)

___

### extends

▸ `Abstract` **extends**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BaseType`](Type.BaseType.md) |

#### Returns

`boolean`

#### Defined in

[Type.ts:10](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L10)

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

[Serializable](Serializable.Serializable.md).[serialize](Serializable.Serializable.md#serialize)

#### Defined in

[Serializable.ts:43](https://github.com/flowi-dev/core/blob/0537423/src/classes/Serializable.ts#L43)

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

[Serializable](Serializable.Serializable.md).[deserialize](Serializable.Serializable.md#deserialize)

#### Defined in

[Serializable.ts:6](https://github.com/flowi-dev/core/blob/0537423/src/classes/Serializable.ts#L6)
