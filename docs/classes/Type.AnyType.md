[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / AnyType

# Class: AnyType

[Type](../modules/Type.md).AnyType

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

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`AnyType`**

## Table of contents

### Constructors

- [constructor](Type.AnyType.md#constructor)

### Properties

- [\_](Type.AnyType.md#_)
- [name](Type.AnyType.md#name)

### Methods

- [check](Type.AnyType.md#check)
- [extends](Type.AnyType.md#extends)
- [serialize](Type.AnyType.md#serialize)

## Constructors

### constructor

• **new AnyType**()

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:240](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L240)

## Properties

### \_

• **\_**: `string` = `AnyType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:237](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L237)

___

### name

• **name**: `string` = `'any'`

#### Overrides

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:238](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L238)

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

[BaseType](Type.BaseType.md).[check](Type.BaseType.md#check)

#### Defined in

[Type.ts:244](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L244)

___

### extends

▸ **extends**(`type`): `boolean`

Checks if this type extends the given type.

```ts
// Example, TRUE is in BOOLEAN, but BOOLEAN is not in TRUE.
TRUE.extends(BOOLEAN); // true
BOOLEAN.extends(TRUE); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BaseType`](Type.BaseType.md) |

#### Returns

`boolean`

#### Overrides

[BaseType](Type.BaseType.md).[extends](Type.BaseType.md#extends)

#### Defined in

[Type.ts:248](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L248)

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

[BaseType](Type.BaseType.md).[serialize](Type.BaseType.md#serialize)

#### Defined in

[Serializable.ts:115](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Serializable.ts#L115)
