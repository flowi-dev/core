import { Serializable } from '../Serialization';
import { type Block } from './Block';
import { type BaseType } from '../Types';
export type AttributeName = `${string}-attribute`;
export type InferAttributeName<T extends Attribute<any>> = T extends Attribute<infer N> ? N : never;
export type InferAttributeType<T extends DataAttribute<any, BaseType>> = T extends DataAttribute<any, infer T> ? T : never;
export type AttributeOptions = {
    label: string;
    hideLabel: true;
    hidePin: true;
};
/**
 * An attribute is a property of a block.
 */
export declare class Attribute<N extends AttributeName = AttributeName> extends Serializable {
    readonly name: N;
    /**
     * Just like the label on a block, this is what the user sees, this cannot be changed by the user though.
     */
    label: string;
    /**
     * Whether or not to hide the label of the attribute. Can be used for attributes that have custom controllers that display the label.
     */
    hideLabel: boolean;
    /**
     * Whether or not to hide the pin of the attribute. Can be used when you only want to display the controller
     */
    hidePin: boolean;
    /**
     * Stores a reference to the block that this attribute belongs to.
     */
    private _block?;
    constructor(name: N, options?: Partial<AttributeOptions>);
    setParent(block: Block): void;
}
export type DataAttributeOptions<T extends BaseType> = {
    datatype: T;
    defaultValue?: any;
} & Partial<AttributeOptions>;
/**
 * An attribute that holds data.
 */
export declare class DataAttribute<N extends AttributeName, T extends BaseType> extends Attribute<N> {
    /**
     * The type of data that this attribute holds.
     */
    datatype: BaseType;
    constructor(name: N, options: DataAttributeOptions<T>);
}
export type ExecutionAttributeOptions = Partial<AttributeOptions>;
/**
 * An attribute that executes code when its executed by another block.
 */
export declare class ExecutionAttribute<N extends AttributeName> extends Attribute<N> {
    private _handler;
    /**
     * This is the code that will be executed when the attribute is executed.
     */
    onExecute(handler: typeof ExecutionAttribute.prototype['_handler']): void;
    /**
     * This function is used by the engine to execute this attribute.
     */
    execute(...args: Parameters<typeof ExecutionAttribute.prototype['_handler']>): void;
}
export declare class GetterAttribute<N extends AttributeName, T extends BaseType> extends DataAttribute<N, T> {
    private _getter;
    onGet(handler: typeof GetterAttribute.prototype['_getter']): void;
    get(...args: Parameters<typeof GetterAttribute.prototype['_getter']>): any;
}
//# sourceMappingURL=Attribute.d.ts.map