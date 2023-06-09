import { type BaseType } from './Types';
import { Events } from './Events';
import { type DataAttribute, type Attribute, type ExecutionAttribute, type AttributeName } from './Attribute';
import { Serializable, type SerializedData } from './Serializable';
export type BlockName = `${string}-block`;
export type BlockPosition = {
    x: number;
    y: number;
};
export type BlockOptions = {
    label: string;
    position: BlockPosition;
    id: string;
};
export type BlockAttributes = Record<string, Attribute>;
export type BlockEvents = {
    'change:label': [string];
    'change:position': [BlockPosition];
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
export declare class Block<A extends BlockAttributes = {}> extends Serializable<{
    label: string;
    position: BlockPosition;
    id: string;
    attributes: Record<string, ReturnType<BaseType['serialize']>>;
}> {
    /**
     * The unique identifier of the block. Used in connections between blocks.
     */
    id: string;
    /**
     * A typed map of attributes that belong to this block.
     */
    attributes: A;
    /**
     * This is used to emit and listen to events.
     */
    events: Events<BlockEvents>;
    /**
     * The position of the block.
     */
    get position(): BlockPosition;
    set position(position: BlockPosition);
    /** @ignore */
    protected _position: BlockPosition;
    /**
     * The label is what is shown to the user, this can also be changed at runtime.
     */
    get label(): string;
    set label(label: string);
    /** @ignore */
    protected _label: string;
    constructor(name: string, options?: Partial<BlockOptions>);
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
    addAttribute<T extends Attribute<Na> | ExecutionAttribute<Na> | DataAttribute<Na, D>, Na extends AttributeName, D extends BaseType>(attribute: T): Block<A & { [Na_1 in T["name"]]: T; }>;
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
    removeAttribute<T extends Attribute<Na> | ExecutionAttribute<Na> | DataAttribute<Na, D>, Na extends AttributeName, D extends BaseType>(attribute: T): Block<Omit<A, T["name"]>>;
    static deserialize<T extends Block>(data: ReturnType<T['serialize']>): Block<{}>;
    serialize(): {
        id: string;
        label: string;
        position: BlockPosition;
        attributes: Record<string, SerializedData>;
        _: string;
    };
}
//# sourceMappingURL=Block.d.ts.map