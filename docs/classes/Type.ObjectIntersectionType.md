[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / ObjectIntersectionType

# Class: ObjectIntersectionType

[Type](../modules/Type.md).ObjectIntersectionType

## Hierarchy

- [`ObjectType`](Type.ObjectType.md)

  ↳ **`ObjectIntersectionType`**

## Table of contents

### Constructors

- [constructor](Type.ObjectIntersectionType.md#constructor)

### Properties

- [\_](Type.ObjectIntersectionType.md#_)
- [name](Type.ObjectIntersectionType.md#name)
- [properties](Type.ObjectIntersectionType.md#properties)
- [catalog](Type.ObjectIntersectionType.md#catalog)

### Methods

- [check](Type.ObjectIntersectionType.md#check)
- [extend](Type.ObjectIntersectionType.md#extend)
- [extends](Type.ObjectIntersectionType.md#extends)
- [serialize](Type.ObjectIntersectionType.md#serialize)
- [deserialize](Type.ObjectIntersectionType.md#deserialize)

## Constructors

### constructor

• **new ObjectIntersectionType**(`name`, `types`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | [`ObjectType`](Type.ObjectType.md)[] |

#### Overrides

[ObjectType](Type.ObjectType.md).[constructor](Type.ObjectType.md#constructor)

#### Defined in

[Type.ts:190](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L190)

## Properties

### \_

• **\_**: `string` = `ObjectType.name`

#### Inherited from

[ObjectType](Type.ObjectType.md).[_](Type.ObjectType.md#_)

#### Defined in

[Type.ts:122](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L122)

___

### name

• **name**: `string`

#### Inherited from

[ObjectType](Type.ObjectType.md).[name](Type.ObjectType.md#name)

#### Defined in

[Type.ts:191](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L191)

___

### properties

• **properties**: `Record`<`string`, [`BaseType`](Type.BaseType.md)\>

#### Inherited from

[ObjectType](Type.ObjectType.md).[properties](Type.ObjectType.md#properties)

#### Defined in

[Type.ts:121](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L121)

___

### catalog

▪ `Static` **catalog**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[ObjectType](Type.ObjectType.md).[catalog](Type.ObjectType.md#catalog)

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

[ObjectType](Type.ObjectType.md).[check](Type.ObjectType.md#check)

#### Defined in

[Type.ts:160](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L160)

___

### extend

▸ **extend**(`name`, `properties`): [`ObjectType`](Type.ObjectType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `properties` | `Record`<`string`, [`BaseType`](Type.BaseType.md)\> |

#### Returns

[`ObjectType`](Type.ObjectType.md)

#### Inherited from

[ObjectType](Type.ObjectType.md).[extend](Type.ObjectType.md#extend)

#### Defined in

[Type.ts:132](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L132)

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

[ObjectType](Type.ObjectType.md).[extends](Type.ObjectType.md#extends)

#### Defined in

[Type.ts:139](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L139)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `name` | `string` |
| `properties` | `Record`<`string`, { `_`: `string` ; `name`: `string`  }\> |

#### Inherited from

[ObjectType](Type.ObjectType.md).[serialize](Type.ObjectType.md#serialize)

#### Defined in

[Type.ts:174](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Type.ts#L174)

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

[ObjectType](Type.ObjectType.md).[deserialize](Type.ObjectType.md#deserialize)

#### Defined in

[Serializable.ts:6](https://github.com/flowi-dev/core/blob/4d374fd/src/classes/Serializable.ts#L6)
