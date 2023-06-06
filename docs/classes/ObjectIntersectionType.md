[@flowi-dev/core](../README.md) / [Exports](../modules.md) / ObjectIntersectionType

# Class: ObjectIntersectionType

## Hierarchy

- [`ObjectType`](ObjectType.md)

  ↳ **`ObjectIntersectionType`**

## Table of contents

### Constructors

- [constructor](ObjectIntersectionType.md#constructor)

### Properties

- [name](ObjectIntersectionType.md#name)
- [properties](ObjectIntersectionType.md#properties)

### Methods

- [check](ObjectIntersectionType.md#check)
- [extend](ObjectIntersectionType.md#extend)
- [extends](ObjectIntersectionType.md#extends)

## Constructors

### constructor

• **new ObjectIntersectionType**(`name`, `types`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | [`ObjectType`](ObjectType.md)[] |

#### Overrides

[ObjectType](ObjectType.md).[constructor](ObjectType.md#constructor)

#### Defined in

[Type.ts:107](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L107)

## Properties

### name

• **name**: `string`

#### Inherited from

[ObjectType](ObjectType.md).[name](ObjectType.md#name)

#### Defined in

[Type.ts:108](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L108)

___

### properties

• `Readonly` **properties**: `Record`<`string`, [`Type`](Type.md)\>

#### Inherited from

[ObjectType](ObjectType.md).[properties](ObjectType.md#properties)

#### Defined in

[Type.ts:58](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L58)

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

[ObjectType](ObjectType.md).[check](ObjectType.md#check)

#### Defined in

[Type.ts:91](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L91)

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

#### Inherited from

[ObjectType](ObjectType.md).[extend](ObjectType.md#extend)

#### Defined in

[Type.ts:63](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L63)

___

### extends

▸ **extends**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Type`](Type.md) |

#### Returns

`boolean`

#### Inherited from

[ObjectType](ObjectType.md).[extends](ObjectType.md#extends)

#### Defined in

[Type.ts:70](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L70)
