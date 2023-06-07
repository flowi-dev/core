import {Serializable} from '../Serialization';
import {type DataAttribute, type Attribute, type ExecutionAttribute, type AttributeName} from './Attribute';
import {type BaseType} from '../Types';

export type BlockName = `${string}-block`;
export type BlockOptions = {
	label: string;
};

export type BlockAttributes = Record<string, Attribute>;

/**
 * This class defines the base block. Each block then has attributes, which can have pins, types, controllers, etc.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export class Block<N extends BlockName = BlockName, A extends BlockAttributes = {}> extends Serializable {
	/**
	 * The label of the block. This is what is displayed to the user, and can be changed by the user.
	 */
	public label: string;

	public attributes: A = {} as unknown as A;

	constructor(name: N, options?: Partial<BlockOptions>) {
		super(name);

		this.label = options?.label ?? name;
	}

	public addAttribute<T extends Attribute<Na> | ExecutionAttribute<Na> | DataAttribute<Na, D>, Na extends AttributeName, D extends BaseType>(attribute: T) {
		this.attributes = {
			...this.attributes,
			[attribute.name]: attribute,
		};
		attribute.setParent(this);
		return this as unknown as Block<N, A & {
			[Na in T['name']]: T;
		}>;
	}
}
