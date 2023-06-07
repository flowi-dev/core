import 'reflect-metadata';

export {Attribute, type AttributeName, type AttributeOptions, DataAttribute, type DataAttributeOptions, ExecutionAttribute, type ExecutionAttributeOptions, GetterAttribute, type InferAttributeName, type InferAttributeType} from './classes/block/Attribute';
export {Block, type BlockAttributes, type BlockName, type BlockOptions} from './classes/block/Block';
export {Serializable, SerializableData, Serializer} from './classes/Serialization';
export {AnyType, type AnyTypeToLiteral, ArrayType, type ArrayTypeToLiteral, BaseType, ObjectType, type ObjectTypeToLiteral, PrimitiveType, type PrimitiveTypeToLiteral, type TypeToLiteral, UnionType, type UnionTypeToLiteral} from './classes/Types';
export {Primitives} from './primitives';
