[@flowi-dev/core](../README.md) / [Modules](../modules.md) / Types

# Module: Types

## Table of contents

### Classes

- [AnyType](../classes/Types.AnyType.md)
- [ArrayType](../classes/Types.ArrayType.md)
- [BaseType](../classes/Types.BaseType.md)
- [ObjectType](../classes/Types.ObjectType.md)
- [PrimitiveType](../classes/Types.PrimitiveType.md)
- [UnionType](../classes/Types.UnionType.md)

### Type Aliases

- [AnyTypeToLiteral](Types.md#anytypetoliteral)
- [ArrayTypeToLiteral](Types.md#arraytypetoliteral)
- [ObjectTypeToLiteral](Types.md#objecttypetoliteral)
- [PrimitiveTypeToLiteral](Types.md#primitivetypetoliteral)
- [TypeToLiteral](Types.md#typetoliteral)
- [UnionTypeToLiteral](Types.md#uniontypetoliteral)

## Type Aliases

### AnyTypeToLiteral

Ƭ **AnyTypeToLiteral**: `any`

#### Defined in

[Types.ts:223](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L223)

___

### ArrayTypeToLiteral

Ƭ **ArrayTypeToLiteral**<`T`\>: `T` extends [`ArrayType`](../classes/Types.ArrayType.md)<infer U\> ? `U` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ArrayType`](../classes/Types.ArrayType.md) |

#### Defined in

[Types.ts:170](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L170)

___

### ObjectTypeToLiteral

Ƭ **ObjectTypeToLiteral**<`T`\>: `T` extends [`ObjectType`](../classes/Types.ObjectType.md)<infer U\> ? { [K in keyof U]: TypeToLiteral<U[K]\> } : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectType`](../classes/Types.ObjectType.md) |

#### Defined in

[Types.ts:260](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L260)

___

### PrimitiveTypeToLiteral

Ƭ **PrimitiveTypeToLiteral**<`T`\>: `T` extends [`PrimitiveType`](../classes/Types.PrimitiveType.md)<infer U\> ? `U` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PrimitiveType`](../classes/Types.PrimitiveType.md) |

#### Defined in

[Types.ts:35](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L35)

___

### TypeToLiteral

Ƭ **TypeToLiteral**<`T`\>: `T` extends [`PrimitiveType`](../classes/Types.PrimitiveType.md) ? [`PrimitiveTypeToLiteral`](Types.md#primitivetypetoliteral)<`T`\> : `T` extends [`AnyType`](../classes/Types.AnyType.md) ? `any` : `T` extends [`ArrayType`](../classes/Types.ArrayType.md) ? [`ArrayTypeToLiteral`](Types.md#arraytypetoliteral)<`T`\> : `T` extends [`ObjectType`](../classes/Types.ObjectType.md) ? [`ObjectTypeToLiteral`](Types.md#objecttypetoliteral)<`T`\> : `T` extends [`UnionType`](../classes/Types.UnionType.md) ? [`UnionTypeToLiteral`](Types.md#uniontypetoliteral)<`T`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseType`](../classes/Types.BaseType.md) |

#### Defined in

[Types.ts:3](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L3)

___

### UnionTypeToLiteral

Ƭ **UnionTypeToLiteral**<`T`\>: `T` extends [`UnionType`](../classes/Types.UnionType.md)<infer U\> ? { [K in keyof U]: TypeToLiteral<U[K]\> }[`number`] : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UnionType`](../classes/Types.UnionType.md) |

#### Defined in

[Types.ts:79](https://github.com/flowi-dev/core/blob/98bdb45/src/classes/Types.ts#L79)
