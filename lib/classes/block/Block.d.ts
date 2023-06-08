import { type BaseType } from '../Types';
import { Events } from '../Events';
import { type DataAttribute, type Attribute, type ExecutionAttribute, type AttributeName } from './Attribute';
import { Serializable } from '../Serialization/Serializable';
export type BlockName = `${string}-block`;
export type BlockOptions = {
    label: string;
};
export type BlockAttributes = Record<string, Attribute>;
export type BlockEvents = {
    'change:label': [string];
    'attribute:add': [Attribute];
    'attribute:remove': [Attribute];
};
/**
 * This class defines the base block. Each block then has attributes, which can have pins, types, controllers, etc.
 *
 * ```ts
 * const block = new Block('my-block');
 * ```
 *
 * You can optionally pass in a label to the block.
 * ```ts
 * const block = new Block('my-block', {label: 'My Block'});
 * ```
 */
export declare class Block<N extends BlockName = BlockName, A extends BlockAttributes = {}> extends Serializable {
    /**
     * A typed map of attributes that belong to this block.
     */
    attributes: A;
    /**
     * This is used to emit and listen to events.
     */
    events: Events<BlockEvents>;
    /**
     * The label is what is shown to the user, this can also be changed at runtime.
     */
    get label(): string;
    set label(label: string);
    /** @ignore */
    protected _label: string;
    constructor(name: N, options?: Partial<BlockOptions>);
    /**
     * Used to add an attribute to the block.
     *
     *```ts
     * const block = new Block('my-block');
     * const attribute = new DataAttribute('my-attribute', {datatype: Primitives.STRING, direction: 'input'});
     *
     * block.addAttribute(attribute);
     * block.removeAttribute(attribute);
     * ```
     */
    addAttribute<T extends Attribute<Na> | ExecutionAttribute<Na> | DataAttribute<Na, D>, Na extends AttributeName, D extends BaseType>(attribute: T): Block<N, A & { [Na_1 in T["name"]]: T; }>;
    /**
     * Used to remove an attribute from the block.
     *
     * ```ts
     * const block = new Block('my-block');
     * const attribute = new DataAttribute('my-attribute', {datatype: Primitives.STRING, direction: 'input'});
     *
     * block.addAttribute(attribute);
     * block.removeAttribute(attribute);
     * ```
     */
    removeAttribute<T extends Attribute<Na> | ExecutionAttribute<Na> | DataAttribute<Na, D>, Na extends AttributeName, D extends BaseType>(attribute: T): Block<N, Omit<A, T["name"]>>;
}
//# sourceMappingURL=Block.d.ts.map