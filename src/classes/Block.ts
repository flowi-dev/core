import {type BaseType} from './Types';
import {Events} from './Events';
import {type DataAttribute, type Attribute, type ExecutionAttribute, type AttributeName} from './Attribute';
import {Serializable} from './Serializable';

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
// eslint-disable-next-line @typescript-eslint/ban-types
export class Block<N extends BlockName = BlockName, A extends BlockAttributes = {}> extends Serializable {
	/**
	 * A typed map of attributes that belong to this block.
	 */
	public attributes: A = {} as unknown as A;

	/**
	 * This is used to emit and listen to events.
	 */
	public events: Events<BlockEvents> = new Events<BlockEvents>();

	/**
	 * The label is what is shown to the user, this can also be changed at runtime.
	 */
	public get label() {
		return this._label;
	}

	public set label(label: string) {
		this._label = label;
		this.events.emit('change:label', label);
	}

	/** @ignore */
	protected _label: string;

	constructor(name: N, options?: Partial<BlockOptions>) {
		super(name);

		this._label = options?.label ?? name;
	}

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
	public addAttribute<T extends Attribute<Na> | ExecutionAttribute<Na> | DataAttribute<Na, D>, Na extends AttributeName, D extends BaseType>(attribute: T) {
		this.attributes = {
			...this.attributes,
			[attribute.name]: attribute,
		};
		attribute.setParent(this);

		this.events.emit('attribute:add', attribute);

		return this as unknown as Block<N, A & {
			[Na in T['name']]: T;
		}>;
	}

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
	public removeAttribute<T extends Attribute<Na> | ExecutionAttribute<Na> | DataAttribute<Na, D>, Na extends AttributeName, D extends BaseType>(attribute: T) {
		this.attributes = Object.fromEntries(Object.entries(this.attributes).filter(([key]) => key !== attribute.name)) as unknown as A;

		attribute.setParent(undefined);
		this.events.emit('attribute:remove', attribute);

		return this as unknown as Block<N, Omit<A, T['name']>>;
	}
}
