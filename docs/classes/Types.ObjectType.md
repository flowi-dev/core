[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Types](../modules/Types.md) / ObjectType

# Class: ObjectType<T\>

[Types](../modules/Types.md).ObjectType

This type defines an object, an object is a type that contains a list of properties, each property has a name and a type.
```ts
const UserObjType = new ObjectType('User', {
	name: STRING,
	age: NUMBER,
});

UserObjType.check({ name: 'John', age: 1 }); // true
UserObjType.check({ name: 'John', age: '1' }); // false
```

Objects can also be nested.
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

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, [`BaseType`](Types.BaseType.md)\> = `Record`<`string`, [`BaseType`](Types.BaseType.md)\> |

## Hierarchy

- [`BaseType`](Types.BaseType.md)

  ↳ **`ObjectType`**

## Table of contents

### Constructors

- [constructor](Types.ObjectType.md#constructor)

### Properties

- [\_](Types.ObjectType.md#_)
- [name](Types.ObjectType.md#name)
- [properties](Types.ObjectType.md#properties)

### Methods

- [check](Types.ObjectType.md#check)
- [extend](Types.ObjectType.md#extend)
- [extends](Types.ObjectType.md#extends)
- [serialize](Types.ObjectType.md#serialize)
- [fromIntersect](Types.ObjectType.md#fromintersect)

## Constructors

### constructor

• **new ObjectType**<`T`\>(`name`, `properties`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, [`BaseType`](Types.BaseType.md)\> = `Record`<`string`, [`BaseType`](Types.BaseType.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `properties` | `T` |

#### Overrides

[BaseType](Types.BaseType.md).[constructor](Types.BaseType.md#constructor)

#### Defined in

[Types.ts:338](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Types.ts#L338)

## Properties

### \_

• **\_**: `string`

The class name

#### Inherited from

[BaseType](Types.BaseType.md).[_](Types.BaseType.md#_)

#### Defined in

[Serialization.ts:81](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Serialization.ts#L81)

___

### name

• **name**: `string`

The identifier for the specific instance of the class

#### Inherited from

[BaseType](Types.BaseType.md).[name](Types.BaseType.md#name)

#### Defined in

[Types.ts:339](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Types.ts#L339)

___

### properties

• **properties**: `T`

#### Defined in

[Types.ts:336](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Types.ts#L336)

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

[Types.ts:394](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Types.ts#L394)

___

### extend

▸ **extend**(`name`, `properties`): [`ObjectType`](Types.ObjectType.md)<`Record`<`string`, [`BaseType`](Types.BaseType.md)\>\>

Extend an object type with new properties.
```ts
const UserObjType = new ObjectType('User', {
	name: STRING,
	age: NUMBER,
});

const WorkingUserObjType = UserObjType.extend('WorkingUser', {
	job: STRING,
});

console.log(WorkingUserObjType.properties);
// {
// 	name: STRING,
// 	age: NUMBER,
// 	job: STRING,
// }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `properties` | `Record`<`string`, [`BaseType`](Types.BaseType.md)\> |

#### Returns

[`ObjectType`](Types.ObjectType.md)<`Record`<`string`, [`BaseType`](Types.BaseType.md)\>\>

#### Defined in

[Types.ts:366](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Types.ts#L366)

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

[Types.ts:373](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Types.ts#L373)

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
| `properties` | `Record`<`string`, { `_`: `string` ; `name`: `string`  }\> |

#### Overrides

[BaseType](Types.BaseType.md).[serialize](Types.BaseType.md#serialize)

#### Defined in

[Types.ts:408](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Types.ts#L408)

___

### fromIntersect

▸ `Static` **fromIntersect**(`name`, `objects`): [`ObjectType`](Types.ObjectType.md)<`Record`<`string`, [`BaseType`](Types.BaseType.md)\>\>

Create an object type from an intersection between two objects.
```ts
const a = new ObjectType('a', {
	name: STRING,
	age: NUMBER,
});

const b = new ObjectType('b', {
	name: STRING,
	job: STRING,
});

const c = ObjectType.fromIntersect('c', [a, b]);
console.log(c.properties);
// {
// 	name: STRING,
// }
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `objects` | [[`ObjectType`](Types.ObjectType.md)<`Record`<`string`, [`BaseType`](Types.BaseType.md)\>\>, [`ObjectType`](Types.ObjectType.md)<`Record`<`string`, [`BaseType`](Types.BaseType.md)\>\>] |

#### Returns

[`ObjectType`](Types.ObjectType.md)<`Record`<`string`, [`BaseType`](Types.BaseType.md)\>\>

#### Defined in

[Types.ts:309](https://github.com/flowi-dev/core/blob/2e969af/src/classes/Types.ts#L309)
