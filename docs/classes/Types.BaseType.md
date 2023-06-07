[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Types](../modules/Types.md) / BaseType

# Class: BaseType

[Types](../modules/Types.md).BaseType

The base class that all types extend from, this provides the basic functionality that all types need. Such as serialization and deserialization and type checking.
This class is abstract and should not be used directly.

## Hierarchy

- [`Serializable`](Serialization.Serializable.md)

  ↳ **`BaseType`**

  ↳↳ [`PrimitiveType`](Types.PrimitiveType.md)

  ↳↳ [`UnionType`](Types.UnionType.md)

  ↳↳ [`ArrayType`](Types.ArrayType.md)

  ↳↳ [`AnyType`](Types.AnyType.md)

  ↳↳ [`ObjectType`](Types.ObjectType.md)

## Table of contents

### Constructors

- [constructor](Types.BaseType.md#constructor)

### Properties

- [\_](Types.BaseType.md#_)
- [name](Types.BaseType.md#name)

### Methods

- [check](Types.BaseType.md#check)
- [extends](Types.BaseType.md#extends)
- [serialize](Types.BaseType.md#serialize)

## Constructors

### constructor

• **new BaseType**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Inherited from

[Serializable](Serialization.Serializable.md).[constructor](Serialization.Serializable.md#constructor)

#### Defined in

[Serialization.ts:79](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L79)

## Properties

### \_

• **\_**: `string`

The class name

#### Inherited from

[Serializable](Serialization.Serializable.md).[_](Serialization.Serializable.md#_)

#### Defined in

[Serialization.ts:77](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L77)

___

### name

• `Readonly` **name**: `string`

The identifier for the specific instance of the class

#### Inherited from

[Serializable](Serialization.Serializable.md).[name](Serialization.Serializable.md#name)

#### Defined in

[Serialization.ts:79](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L79)

## Methods

### check

▸ `Abstract` **check**(`data`): `boolean`

Checks if the given data is of this type.
```ts
STRING.check('hello'); // true
STRING.check(1); // false

BOOLEAN.check(true); // true
BOOLEAN.check(1); // false
BOOLEAN.check('hello'); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[Types.ts:32](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L32)

___

### extends

▸ `Abstract` **extends**(`type`): `boolean`

Checks if this type extends the given type.

```ts
// Example, TRUE is in BOOLEAN, but BOOLEAN is not in TRUE.
TRUE.extends(BOOLEAN); // true
BOOLEAN.extends(TRUE); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BaseType`](Types.BaseType.md) |

#### Returns

`boolean`

#### Defined in

[Types.ts:19](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L19)

___

### serialize

▸ **serialize**(): `Object`

The fallback function for serialization. Most types will override this function.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `name` | `string` |

#### Inherited from

[Serializable](Serialization.Serializable.md).[serialize](Serialization.Serializable.md#serialize)

#### Defined in

[Serialization.ts:88](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L88)
