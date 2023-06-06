[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / ArrayType

# Class: ArrayType

[Type](../modules/Type.md).ArrayType

This class defines arrays, an array is a type that contains a list of elements of a certain type.
```ts
const array = new ArrayType('array', STRING);
array.check(['hello', 'world']); // true
array.check(['hello', 1]); // false
```

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`ArrayType`**

## Table of contents

### Constructors

- [constructor](Type.ArrayType.md#constructor)

### Properties

- [\_](Type.ArrayType.md#_)
- [elementType](Type.ArrayType.md#elementtype)
- [name](Type.ArrayType.md#name)
- [catalog](Type.ArrayType.md#catalog)

### Methods

- [check](Type.ArrayType.md#check)
- [extends](Type.ArrayType.md#extends)
- [serialize](Type.ArrayType.md#serialize)
- [deserialize](Type.ArrayType.md#deserialize)

## Constructors

### constructor

• **new ArrayType**(`name`, `elementType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `elementType` | [`BaseType`](Type.BaseType.md) |

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:112](https://github.com/flowi-dev/core/blob/0ba00f6/src/classes/Type.ts#L112)

## Properties

### \_

• **\_**: `string` = `ArrayType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:111](https://github.com/flowi-dev/core/blob/0ba00f6/src/classes/Type.ts#L111)

___

### elementType

• `Readonly` **elementType**: [`BaseType`](Type.BaseType.md)

#### Defined in

[Type.ts:114](https://github.com/flowi-dev/core/blob/0ba00f6/src/classes/Type.ts#L114)

___

### name

• **name**: `string`

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:113](https://github.com/flowi-dev/core/blob/0ba00f6/src/classes/Type.ts#L113)

___

### catalog

▪ `Static` **catalog**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[BaseType](Type.BaseType.md).[catalog](Type.BaseType.md#catalog)

#### Defined in

[Serializable.ts:4](https://github.com/flowi-dev/core/blob/0ba00f6/src/classes/Serializable.ts#L4)

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

[Type.ts:119](https://github.com/flowi-dev/core/blob/0ba00f6/src/classes/Type.ts#L119)

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

[Type.ts:127](https://github.com/flowi-dev/core/blob/0ba00f6/src/classes/Type.ts#L127)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `elementType` | { `_`: `string` ; `name`: `string`  } |
| `elementType._` | `string` |
| `elementType.name` | `string` |
| `name` | `string` |

#### Overrides

[BaseType](Type.BaseType.md).[serialize](Type.BaseType.md#serialize)

#### Defined in

[Type.ts:139](https://github.com/flowi-dev/core/blob/0ba00f6/src/classes/Type.ts#L139)

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

[Serializable.ts:6](https://github.com/flowi-dev/core/blob/0ba00f6/src/classes/Serializable.ts#L6)
