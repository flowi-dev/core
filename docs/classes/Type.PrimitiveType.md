[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / PrimitiveType

# Class: PrimitiveType

[Type](../modules/Type.md).PrimitiveType

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

## Hierarchy

- [`BaseType`](Type.BaseType.md)

  ↳ **`PrimitiveType`**

## Table of contents

### Constructors

- [constructor](Type.PrimitiveType.md#constructor)

### Properties

- [\_](Type.PrimitiveType.md#_)
- [name](Type.PrimitiveType.md#name)
- [validator](Type.PrimitiveType.md#validator)

### Methods

- [check](Type.PrimitiveType.md#check)
- [extends](Type.PrimitiveType.md#extends)
- [serialize](Type.PrimitiveType.md#serialize)

## Constructors

### constructor

• **new PrimitiveType**(`name`, `validator`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `validator` | (`data`: `any`) => `boolean` |

#### Overrides

[BaseType](Type.BaseType.md).[constructor](Type.BaseType.md#constructor)

#### Defined in

[Type.ts:50](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Type.ts#L50)

## Properties

### \_

• **\_**: `string`

The class name

#### Inherited from

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Serializable.ts:122](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L122)

___

### name

• **name**: `string`

The identifier for the specific instance of the class

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:51](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Type.ts#L51)

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

[Type.ts:52](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Type.ts#L52)

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

[Type.ts:57](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Type.ts#L57)

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

[Type.ts:61](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Type.ts#L61)

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

[Serializable.ts:133](https://github.com/flowi-dev/core/blob/9f480f3/src/classes/Serializable.ts#L133)
