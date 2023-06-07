import { Serializable } from '../Serialization';
import { type DataAttribute, type Attribute, type ExecutionAttribute, type AttributeName } from './Attribute';
import { type BaseType } from '../Types';
export type BlockName = `${string}-block`;
export type BlockOptions = {
    label: string;
};
export type BlockAttributes = Record<string, Attribute>;
/**
 * This class defines the base block. Each block then has attributes, which can have pins, types, controllers, etc.
 */
export declare class Block<N extends BlockName = BlockName, A extends BlockAttributes = {}> extends Serializable {
    /**
     * The label of the block. This is what is displayed to the user, and can be changed by the user.
     */
    label: string;
    attributes: A;
    constructor(name: N, options?: Partial<BlockOptions>);
    addAttribute<T extends Attribute<Na> | ExecutionAttribute<Na> | DataAttribute<Na, D>, Na extends AttributeName, D extends BaseType>(attribute: T): Block<N, A & { [Na_1 in T["name"]]: T; }>;
}
//# sourceMappingURL=Block.d.ts.map