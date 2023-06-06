[@flowi-dev/core](../README.md) / [Exports](../modules.md) / PrimitiveType

# Class: PrimitiveType

## Hierarchy

- [`Type`](Type.md)

  ↳ **`PrimitiveType`**

## Table of contents

### Constructors

- [constructor](PrimitiveType.md#constructor)

### Properties

- [name](PrimitiveType.md#name)
- [validator](PrimitiveType.md#validator)

### Methods

- [check](PrimitiveType.md#check)
- [extends](PrimitiveType.md#extends)

## Constructors

### constructor

• **new PrimitiveType**(`name`, `validator`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `validator` | (`data`: `any`) => `boolean` |

#### Overrides

[Type](Type.md).[constructor](Type.md#constructor)

#### Defined in

[Type.ts:9](https://github.com/flowi-dev/core/blob/6a60da7/src/classes/Type.ts#L9)

## Properties

### name

• **name**: `string`

#### Inherited from

[Type](Type.md).[name](Type.md#name)

#### Defined in

[Type.ts:10](https://github.com/flowi-dev/core/blob/6a60da7/src/classes/Type.ts#L10)

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

[Type.ts:11](https://github.com/flowi-dev/core/blob/6a60da7/src/classes/Type.ts#L11)

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

[Type](Type.md).[check](Type.md#check)

#### Defined in

[Type.ts:16](https://github.com/flowi-dev/core/blob/6a60da7/src/classes/Type.ts#L16)

___

### extends

▸ **extends**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](Type.md) |

#### Returns

`boolean`

#### Overrides

[Type](Type.md).[extends](Type.md#extends)

#### Defined in

[Type.ts:20](https://github.com/flowi-dev/core/blob/6a60da7/src/classes/Type.ts#L20)
