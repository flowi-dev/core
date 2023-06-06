[@flowi-dev/core](../README.md) / [Exports](../modules.md) / UnionIntersectionType

# Class: UnionIntersectionType

## Hierarchy

- [`UnionType`](UnionType.md)

  ↳ **`UnionIntersectionType`**

## Table of contents

### Constructors

- [constructor](UnionIntersectionType.md#constructor)

### Properties

- [name](UnionIntersectionType.md#name)
- [types](UnionIntersectionType.md#types)

### Methods

- [check](UnionIntersectionType.md#check)
- [extends](UnionIntersectionType.md#extends)

## Constructors

### constructor

• **new UnionIntersectionType**(`name`, `types`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | [`UnionType`](UnionType.md)[] |

#### Overrides

[UnionType](UnionType.md).[constructor](UnionType.md#constructor)

#### Defined in

[Type.ts:134](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L134)

## Properties

### name

• **name**: `string`

#### Inherited from

[UnionType](UnionType.md).[name](UnionType.md#name)

#### Defined in

[Type.ts:135](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L135)

___

### types

• `Readonly` **types**: [`Type`](Type.md)[]

#### Inherited from

[UnionType](UnionType.md).[types](UnionType.md#types)

#### Defined in

[Type.ts:36](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L36)

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

[UnionType](UnionType.md).[check](UnionType.md#check)

#### Defined in

[Type.ts:50](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L50)

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

[UnionType](UnionType.md).[extends](UnionType.md#extends)

#### Defined in

[Type.ts:41](https://github.com/flowi-dev/core/blob/51677ec/src/classes/Type.ts#L41)
