[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Types](../modules/Types.md) / ArrayType

# Class: ArrayType<T\>

[Types](../modules/Types.md).ArrayType

This class defines arrays, an array is a type that contains a list of elements of a certain type.
```ts
const array = new ArrayType('array', STRING);
array.check(['hello', 'world']); // true
array.check(['hello', 1]); // false
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](Types.BaseType.md)[] = [`BaseType`](Types.BaseType.md)[] |

## Hierarchy

- [`BaseType`](Types.BaseType.md)

  ↳ **`ArrayType`**

## Table of contents

### Constructors

- [constructor](Types.ArrayType.md#constructor)

### Properties

- [\_](Types.ArrayType.md#_)
- [elementType](Types.ArrayType.md#elementtype)
- [name](Types.ArrayType.md#name)

### Methods

- [check](Types.ArrayType.md#check)
- [extends](Types.ArrayType.md#extends)
- [serialize](Types.ArrayType.md#serialize)

## Constructors

### constructor

• **new ArrayType**<`T`\>(`name`, `elementType`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](Types.BaseType.md)[] = [`BaseType`](Types.BaseType.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `elementType` | `T`[`number`] |

#### Overrides

[BaseType](Types.BaseType.md).[constructor](Types.BaseType.md#constructor)

#### Defined in

[Types.ts:181](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L181)

## Properties

### \_

• **\_**: `string`

The class name

#### Inherited from

[BaseType](Types.BaseType.md).[_](Types.BaseType.md#_)

#### Defined in

[Serialization.ts:77](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Serialization.ts#L77)

___

### elementType

• `Readonly` **elementType**: `T`[`number`]

#### Defined in

[Types.ts:183](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L183)

___

### name

• **name**: `string`

The identifier for the specific instance of the class

#### Inherited from

[BaseType](Types.BaseType.md).[name](Types.BaseType.md#name)

#### Defined in

[Types.ts:182](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L182)

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

[Types.ts:188](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L188)

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
| `type` | [`BaseType`](Types.BaseType.md) |

#### Returns

`boolean`

#### Overrides

[BaseType](Types.BaseType.md).[extends](Types.BaseType.md#extends)

#### Defined in

[Types.ts:196](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L196)

___

### serialize

▸ **serialize**(): `Object`

The fallback function for serialization. Most types will override this function.

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

[BaseType](Types.BaseType.md).[serialize](Types.BaseType.md#serialize)

#### Defined in

[Types.ts:208](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L208)
