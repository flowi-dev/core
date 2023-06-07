[@flowi-dev/core](../README.md) / [Modules](../modules.md) / [Type](../modules/Type.md) / ObjectType

# Class: ObjectType

[Type](../modules/Type.md).ObjectType

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

### Methods

- [check](Type.ObjectType.md#check)
- [extend](Type.ObjectType.md#extend)
- [extends](Type.ObjectType.md#extends)
- [serialize](Type.ObjectType.md#serialize)
- [fromIntersect](Type.ObjectType.md#fromintersect)

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

[Type.ts:328](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L328)

## Properties

### \_

• **\_**: `string` = `ObjectType.name`

#### Overrides

[BaseType](Type.BaseType.md).[_](Type.BaseType.md#_)

#### Defined in

[Type.ts:326](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L326)

___

### name

• **name**: `string`

#### Inherited from

[BaseType](Type.BaseType.md).[name](Type.BaseType.md#name)

#### Defined in

[Type.ts:329](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L329)

___

### properties

• **properties**: `Record`<`string`, [`BaseType`](Type.BaseType.md)\>

#### Defined in

[Type.ts:325](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L325)

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

[Type.ts:384](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L384)

___

### extend

▸ **extend**(`name`, `properties`): [`ObjectType`](Type.ObjectType.md)

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
| `properties` | `Record`<`string`, [`BaseType`](Type.BaseType.md)\> |

#### Returns

[`ObjectType`](Type.ObjectType.md)

#### Defined in

[Type.ts:356](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L356)

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

[Type.ts:363](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L363)

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

[BaseType](Type.BaseType.md).[serialize](Type.BaseType.md#serialize)

#### Defined in

[Type.ts:398](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L398)

___

### fromIntersect

▸ `Static` **fromIntersect**(`name`, `objects`): [`ObjectType`](Type.ObjectType.md)

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
| `objects` | [[`ObjectType`](Type.ObjectType.md), [`ObjectType`](Type.ObjectType.md)] |

#### Returns

[`ObjectType`](Type.ObjectType.md)

#### Defined in

[Type.ts:298](https://github.com/flowi-dev/core/blob/5b69dc5/src/classes/Type.ts#L298)
