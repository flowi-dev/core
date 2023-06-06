[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / UnionType

# Class: UnionType

[Type](../modules/Type.md).UnionType

This class defines unions, just like in TypeScript, a union is a type that can be one of the types in the union.

**`Example`**

```ts
const union = new UnionType('union', [STRING, NUMBER]);
union.check('hello'); // true
union.check(1); // true
union.check(true); // false
```

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`UnionType`**

## Table of contents

### Constructors

- [constructor](Type.UnionType.md#constructor)

### Properties

- [\_](Type.UnionType.md#_)
- [name](Type.UnionType.md#name)
- [types](Type.UnionType.md#types)
- [catalog](Type.UnionType.md#catalog)

### Methods

- [check](Type.UnionType.md#check)
- [extends](Type.UnionType.md#extends)
- [serialize](Type.UnionType.md#serialize)
- [deserialize](Type.UnionType.md#deserialize)

## Constructors

### constructor

• **new UnionType**(`name`, `types`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `types` | [`BaseType`](Type.BaseType.md)[] |

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:55](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L55)

## Properties

### \_

• **\_**: `string` = `UnionType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:54](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L54)

___

### name

• **name**: `string`

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:56](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L56)

___

### types

• `Readonly` **types**: [`BaseType`](Type.BaseType.md)[]

#### Defined in

[Type.ts:57](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L57)

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

[Type.ts:71](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L71)

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

[Type.ts:62](https://github.com/flowi-dev/core/blob/0537423/src/classes/Type.ts#L62)

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

[BaseType](Type.BaseType.md).[deserialize](Type.BaseType.md#deserialize)

#### Defined in

[Serializable.ts:6](https://github.com/flowi-dev/core/blob/0537423/src/classes/Serializable.ts#L6)
