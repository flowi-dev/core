[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Types](../modules/Types.md) / AnyType

# Class: AnyType<_\>

[Types](../modules/Types.md).AnyType

This type simply acts as the `any` type in typescript, it will always return true when checking data.
```ts
const any = new AnyType();
any.check('hello'); // true
any.check(1); // true
any.check(true); // true
```
This type is useful when you want to allow any type of data.
```ts
const type = new ObjectType('type', {
	name: STRING,
	job: new AnyType(),
});
type.check({ name: 'John', job: 'Developer' }); // true
type.check({ name: 'John', job: 1 }); // true
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `_` | `any` |

## Hierarchy

- [`BaseType`](Types.BaseType.md)

  ↳ **`AnyType`**

## Table of contents

### Constructors

- [constructor](Types.AnyType.md#constructor)

### Properties

- [\_](Types.AnyType.md#_)
- [name](Types.AnyType.md#name)

### Methods

- [check](Types.AnyType.md#check)
- [extends](Types.AnyType.md#extends)
- [serialize](Types.AnyType.md#serialize)

## Constructors

### constructor

• **new AnyType**<`_`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `_` | `any` |

#### Overrides

[BaseType](Types.BaseType.md).[constructor](Types.BaseType.md#constructor)

#### Defined in

[Types.ts:247](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L247)

## Properties

### \_

• **\_**: `string`

The class name

#### Inherited from

[BaseType](Types.BaseType.md).[_](Types.BaseType.md#_)

#### Defined in

[Serialization.ts:77](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L77)

___

### name

• **name**: `string` = `'any'`

The identifier for the specific instance of the class

#### Overrides

[BaseType](Types.BaseType.md).[name](Types.BaseType.md#name)

#### Defined in

[Types.ts:245](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L245)

## Methods

### check

▸ **check**(`data`): `boolean`

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

#### Overrides

[BaseType](Types.BaseType.md).[check](Types.BaseType.md#check)

#### Defined in

[Types.ts:251](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L251)

___

### extends

▸ **extends**(`data`): `boolean`

Checks if this type extends the given type.

```ts
// Example, TRUE is in BOOLEAN, but BOOLEAN is not in TRUE.
TRUE.extends(BOOLEAN); // true
BOOLEAN.extends(TRUE); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BaseType`](Types.BaseType.md) |

#### Returns

`boolean`

#### Overrides

[BaseType](Types.BaseType.md).[extends](Types.BaseType.md#extends)

#### Defined in

[Types.ts:255](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L255)

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

[BaseType](Types.BaseType.md).[serialize](Types.BaseType.md#serialize)

#### Defined in

[Serialization.ts:88](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L88)
