[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / ObjectType

# Class: ObjectType

[Type](../modules/Type.md).ObjectType

This type defines an object, an object is a type that contains a list of properties, each property has a name and a type.

**`Example`**

```ts
const UserObjType = new ObjectType('User', {
name: STRING,
age: NUMBER,
});

UserObjType.check({ name: 'John', age: 1 }); // true
UserObjType.check({ name: 'John', age: '1' }); // false
```

Objects can also be nested.

**`Example`**

```ts
const UserObjType = new ObjectType('User', {
name: STRING,
age: NUMBER,
job: new ObjectType('Job', {
title: STRING,
salary: NUMBER,
}),
});
```

You can also create an intersection of two objects

**`Example`**

```ts
const a = new ObjectType('a', {
name: STRING,
age: NUMBER,
});

const b = new ObjectType('b', {
name: STRING,
job: STRING,
});

const intersection = ObjectType.fromIntersection('intersection', [a, b]);
console.log(intersection.properties); // { name: STRING }
```

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`ObjectType`**

## Table of contents

### Constructors

- [constructor](Type.ObjectType.md#constructor)

### Properties

- [\_](Type.ObjectType.md#_)
- [name](Type.ObjectType.md#name)
- [properties](Type.ObjectType.md#properties)
- [catalog](Type.ObjectType.md#catalog)

### Methods

- [check](Type.ObjectType.md#check)
- [extend](Type.ObjectType.md#extend)
- [extends](Type.ObjectType.md#extends)
- [serialize](Type.ObjectType.md#serialize)
- [deserialize](Type.ObjectType.md#deserialize)

## Constructors

### constructor

• **new ObjectType**(`name`, `properties`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `properties` | `Record`<`string`, [`BaseType`](Type.BaseType.md)\> |

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:222](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Type.ts#L222)

## Properties

### \_

• **\_**: `string` = `ObjectType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:220](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Type.ts#L220)

___

### name

• **name**: `string`

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:223](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Type.ts#L223)

___

### properties

• **properties**: `Record`<`string`, [`BaseType`](Type.BaseType.md)\>

#### Defined in

[Type.ts:219](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Type.ts#L219)

___

### catalog

▪ `Static` **catalog**: `Map`<`string`, [`Serializable`](Serializable.Serializable.md)\>

#### Inherited from

[BaseType](Type.BaseType.md).[catalog](Type.BaseType.md#catalog)

#### Defined in

[Serializable.ts:4](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Serializable.ts#L4)

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

[Type.ts:258](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Type.ts#L258)

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

#### Defined in

[Type.ts:230](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Type.ts#L230)

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

[Type.ts:237](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Type.ts#L237)

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

#### Overrides

[BaseType](Type.BaseType.md).[serialize](Type.BaseType.md#serialize)

#### Defined in

[Type.ts:272](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Type.ts#L272)

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

[Serializable.ts:6](https://github.com/flowi-dev/core/blob/cc87ffe/src/classes/Serializable.ts#L6)
