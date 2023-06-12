import { Events } from './Events';
import { Serializable, type SerializedData } from './Serializable';
import { type BaseType } from './Types';
import { type Block } from './Block';
/**
 * The direction of the attribute. Inputs sit on the left side of the block, and outputs sit on the right side of the block.
 */
export type AttributeDirection = 'input' | 'output';
export type AttributeName = string;
export type InferAttributeName<T extends Attribute<any>> = T extends Attribute<infer N> ? N : never;
export type InferAttributeType<T extends DataAttribute<any, BaseType>> = T extends DataAttribute<any, infer T> ? T : never;
export type AttributeOptions<Io extends AttributeDirection = AttributeDirection> = {
    label?: string;
    hideLabel?: true;
    hidePin?: true;
    direction: Io;
};
export type AttributeEvents = {
    'change:label': [string];
    'change:hideLabel': [boolean];
    'change:hidePin': [boolean];
};
/**
 * An attribute is a property of a block.
 *
 * ```ts
 * const attribute = new Attribute('myAttribute', {
 * 	label: 'My Attribute',
 * 	direction: 'input',
 * });
 *
 * // You can listen to events on the attribute.
 * attribute.events.on('change:label', (newLabel) => {
 * 	console.log(newLabel);
 * });
 *
 *
 */
export declare class Attribute<N extends AttributeName = AttributeName, Io extends AttributeDirection = AttributeDirection, S extends Record<string, any> = Record<string, unknown>> extends Serializable<S & Required<AttributeOptions>> {
    readonly name: N;
    /**
   * This is used to emit and listen to events.
   */
    events: Events<AttributeEvents>;
    /**
   * The direction of the attribute. This determines whether or not the attribute is an input or an output.
   */
    readonly direction: Io;
    /**
   * Just like the label on a block, this is what the user sees, this cannot be changed by the user though.
   */
    get label(): string;
    set label(label: string);
    /**
   * Whether or not to hide the label of the attribute. Can be used for attributes that have custom controllers that display the label.
   */
    hideLabel: boolean;
    /**
   * Whether or not to hide the pin of the attribute. Can be used when you only want to display the controller
   */
    hidePin: boolean;
    /** @ignore */
    protected _label: string;
    /**
     * Get the block that this attribute belongs to.
     */
    get parent(): Block<{}> | undefined;
    /**
   * Stores a reference to the block that this attribute belongs to.
   */
    private _block?;
    constructor(name: N, options: AttributeOptions<Io>);
    setParent(block: Block | undefined): void;
    serialize(): SerializedData<S & Required<AttributeOptions>>;
}
export type DataAttributeOptions<T extends BaseType, Io extends AttributeDirection> = {
    datatype: T;
    defaultValue?: any;
} & AttributeOptions<Io>;
/**
 * An attribute that holds data.
 *
 * ```ts
 * const attribute = new DataAttribute('myAttribute', {
 * 	label: 'My Attribute',
 * 	direction: 'input',
 * 	datatype: Primitives.STRING,
 * });
 */
export declare class DataAttribute<N extends AttributeName, T extends BaseType, Io extends AttributeDirection = AttributeDirection> extends Attribute<N, Io, {
    datatype: {
        _: string;
    };
}> {
    /**
   * The type of data that this attribute holds.
   */
    datatype: BaseType;
    constructor(name: N, options: DataAttributeOptions<T, Io>);
    serialize(): ReturnType<Attribute['serialize']> & {
        datatype: ReturnType<BaseType['serialize']>;
    };
}
export type ExecutionAttributeOptions = Partial<AttributeOptions>;
/**
 * An attribute that executes code when its executed by another block.
 */
export declare class ExecutionAttribute<N extends AttributeName> extends Attribute<N> {
}
//# sourceMappingURL=Attribute.d.ts.map