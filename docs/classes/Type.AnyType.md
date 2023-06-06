[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / AnyType

# Class: AnyType

[Type](../modules/Type.md).AnyType

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`AnyType`**

## Table of contents

### Constructors

- [constructor](Type.AnyType.md#constructor)

### Properties

- [\_](Type.AnyType.md#_)
- [name](Type.AnyType.md#name)
- [catalog](Type.AnyType.md#catalog)

### Methods

- [check](Type.AnyType.md#check)
- [extends](Type.AnyType.md#extends)
- [serialize](Type.AnyType.md#serialize)
- [deserialize](Type.AnyType.md#deserialize)

## Constructors

### constructor

• **new AnyType**()

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:107](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L107)

## Properties

### \_

• **\_**: `string` = `AnyType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:104](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L104)

___

### name

• **name**: `string` = `'any'`

#### Overrides

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:105](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L105)

___

### catalog

▪ `Static` **catalog**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[BaseType](Type.BaseType.md).[catalog](Type.BaseType.md#catalog)

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

#### Overrides

[BaseType](Type.BaseType.md).[check](Type.BaseType.md#check)

#### Defined in

[Type.ts:111](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L111)

___

### extends

▸ **extends**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BaseType`](Type.BaseType.md) |

#### Returns

`boolean`

#### Overrides

[BaseType](Type.BaseType.md).[extends](Type.BaseType.md#extends)

#### Defined in

[Type.ts:115](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L115)

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

[BaseType](Type.BaseType.md).[serialize](Type.BaseType.md#serialize)

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

[BaseType](Type.BaseType.md).[deserialize](Type.BaseType.md#deserialize)

#### Defined in

[Serializable.ts:6](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Serializable.ts#L6)
