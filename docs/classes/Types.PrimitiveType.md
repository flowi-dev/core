[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Types](../modules/Types.md) / PrimitiveType

# Class: PrimitiveType<_\>

[Types](../modules/Types.md).PrimitiveType

This class defines primitive types, such as string, number, boolean, etc.

```ts
const string = new PrimitiveType('string', (data: any) => typeof data === 'string');
string.check('hello'); // true
string.check(1); // false
```

You can create your own by defining a name and a validator function.
```ts
const myType = new PrimitiveType('myType', (data: any) => data === 'hello');
myType.check('hello'); // true
myType.check('world'); // false
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `_` | `any` |

## Hierarchy

- [`BaseType`](Types.BaseType.md)

  ↳ **`PrimitiveType`**

## Table of contents

### Constructors

- [constructor](Types.PrimitiveType.md#constructor)

### Properties

- [\_](Types.PrimitiveType.md#_)
- [name](Types.PrimitiveType.md#name)
- [validator](Types.PrimitiveType.md#validator)

### Methods

- [check](Types.PrimitiveType.md#check)
- [extends](Types.PrimitiveType.md#extends)
- [serialize](Types.PrimitiveType.md#serialize)

## Constructors

### constructor

• **new PrimitiveType**<`_`\>(`name`, `validator`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `_` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `validator` | (`data`: `any`) => `boolean` |

#### Overrides

[BaseType](Types.BaseType.md).[constructor](Types.BaseType.md#constructor)

#### Defined in

[Types.ts:55](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L55)

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

• **name**: `string`

The identifier for the specific instance of the class

#### Inherited from

[BaseType](Types.BaseType.md).[name](Types.BaseType.md#name)

#### Defined in

[Types.ts:56](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L56)

___

### validator

• `Private` `Readonly` **validator**: (`data`: `any`) => `boolean`

#### Type declaration

▸ (`data`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`boolean`

#### Defined in

[Types.ts:57](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L57)

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

[Types.ts:62](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L62)

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

[Types.ts:66](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L66)

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
