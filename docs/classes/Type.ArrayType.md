[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / ArrayType

# Class: ArrayType

[Type](../modules/Type.md).ArrayType

This class defines arrays, an array is a type that contains a list of elements of a certain type.

**`Example`**

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

[Type.ts:87](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L87)

## Properties

### \_

• **\_**: `string` = `ArrayType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:86](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L86)

___

### elementType

• `Readonly` **elementType**: [`BaseType`](Type.BaseType.md)

#### Defined in

[Type.ts:89](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L89)

___

### name

• **name**: `string`

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:88](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L88)

___

### catalog

▪ `Static` **catalog**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[BaseType](Type.BaseType.md).[catalog](Type.BaseType.md#catalog)

#### Defined in

[Serializable.ts:4](https://github.com/flowi-dev/core/blob/0537423/src/classes/Serializable.ts#L4)

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

[Type.ts:94](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L94)

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

[Type.ts:102](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L102)

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

[Type.ts:114](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L114)

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

[Serializable.ts:6](https://github.com/flowi-dev/core/blob/0537423/src/classes/Serializable.ts#L6)
