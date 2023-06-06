[@flowi-dev/core](../README.md) / [Exports](../modules.md) / ObjectType

# Class: ObjectType

## Hierarchy

- [`Type`](Type.md)

  ↳ **`ObjectType`**

  ↳↳ [`IntersectionType`](IntersectionType.md)

## Table of contents

### Constructors

- [constructor](ObjectType.md#constructor)

### Properties

- [name](ObjectType.md#name)
- [properties](ObjectType.md#properties)

### Methods

- [check](ObjectType.md#check)
- [extend](ObjectType.md#extend)
- [extends](ObjectType.md#extends)

## Constructors

### constructor

• **new ObjectType**(`name`, `properties`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `properties` | `Record`<`string`, [`Type`](Type.md)\> |

#### Overrides

[Type](Type.md).[constructor](Type.md#constructor)

#### Defined in

[Type.ts:56](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L56)

## Properties

### name

• **name**: `string`

#### Inherited from

[Type](Type.md).[name](Type.md#name)

#### Defined in

[Type.ts:57](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L57)

___

### properties

• `Readonly` **properties**: `Record`<`string`, [`Type`](Type.md)\>

#### Defined in

[Type.ts:58](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L58)

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

[Type.ts:91](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L91)

___

### extend

▸ **extend**(`name`, `properties`): [`ObjectType`](ObjectType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `properties` | `Record`<`string`, [`Type`](Type.md)\> |

#### Returns

[`ObjectType`](ObjectType.md)

#### Defined in

[Type.ts:63](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L63)

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

[Type.ts:70](https://github.com/flowi-dev/core/blob/dca7728/src/classes/Type.ts#L70)
