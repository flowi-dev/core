import {type BaseType} from './Types';
import {Events} from './Events';
import {type DataAttribute, type Attribute, type ExecutionAttribute, type AttributeName} from './Attribute';
import {Serializable, type SerializedData} from './Serializable';
import {v4} from 'uuid';
import {Serializer} from './Serializer';

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
// eslint-disable-next-line @typescript-eslint/ban-types
export class Block<A extends BlockAttributes = {}> extends Serializable<{
	label: string;
	position: BlockPosition;
	id: string;
	attributes: Record<string, ReturnType<BaseType['serialize']>>;
}> {
	/**
	 * The unique identifier of the block. Used in connections between blocks.
	 */
	public id: string;

	/**
	 * A typed map of attributes that belong to this block.
	 */
	public attributes: A = {} as unknown as A;

	/**
	 * This is used to emit and listen to events.
	 */
	public events: Events<BlockEvents> = new Events<BlockEvents>();

	/**
	 * The position of the block.
	 */
	public get position() {
		return this._position;
	}

	public set position(position: BlockPosition) {
		this._position = position;
		this.events.emit('change:position', position);
	}

	/** @ignore */
	protected _position: BlockPosition;

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

	constructor(name: string, options?: Partial<BlockOptions>) {
		super();

		this._label = options?.label ?? name;
		this._position = options?.position ?? {x: 0, y: 0};
		this.id = options?.id ?? v4();
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

		return this as unknown as Block<A & {
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

		return this as unknown as Block<Omit<A, T['name']>>;
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	public static deserialize<T extends Block>(data: ReturnType<T['serialize']>) {
		const block = new Block(data.label, {
			id: data.id,
			label: data.label,
			position: data.position,
		});

		block.attributes = Object.fromEntries(Object.entries(data.attributes).map(([key, value]) => [key, Serializer.deserialize(value)])) as unknown as T['attributes'];

		return block;
	}

	public override serialize() {
		return {
			...super.serialize(),
			id: this.id,
			label: this.label,
			position: this.position,
			attributes: Object.fromEntries(Object.entries(this.attributes).map(([key, value]) => [key, value.serialize()])) as Record<string, SerializedData>,
		};
	}
}

Block.register<Block>(Block.deserialize);
