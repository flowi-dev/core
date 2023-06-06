[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / PrimitiveType

# Class: PrimitiveType

[Type](../modules/Type.md).PrimitiveType

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`PrimitiveType`**

## Table of contents

### Constructors

- [constructor](Type.PrimitiveType.md#constructor)

### Properties

- [\_](Type.PrimitiveType.md#_)
- [name](Type.PrimitiveType.md#name)
- [validator](Type.PrimitiveType.md#validator)
- [catalog](Type.PrimitiveType.md#catalog)

### Methods

- [check](Type.PrimitiveType.md#check)
- [extends](Type.PrimitiveType.md#extends)
- [serialize](Type.PrimitiveType.md#serialize)
- [deserialize](Type.PrimitiveType.md#deserialize)

## Constructors

### constructor

• **new PrimitiveType**(`name`, `validator`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `validator` | (`data`: `any`) => `boolean` |

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:12](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L12)

## Properties

### \_

• **\_**: `string` = `PrimitiveType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:11](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L11)

___

### name

• **name**: `string`

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:13](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L13)

___

### validator

• `Private` `Readonly` **validator**: (`data`: `any`) => `boolean`

#### Type declaration

▸ (`data`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`boolean`

#### Defined in

[Type.ts:14](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L14)

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

[Type.ts:19](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L19)

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

[Type.ts:23](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L23)

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
