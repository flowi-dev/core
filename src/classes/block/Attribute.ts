import {Events} from '../Events';
import {Serializable} from '../Serialization/Serializable';
import {type BaseType} from '../Types';
import {type Block} from './Block';

/**
 * The direction of the attribute. Inputs sit on the left side of the block, and outputs sit on the right side of the block.
 */
export type AttributeDirection = 'input' | 'output';
export type AttributeName = `${string}-attribute`;
export type InferAttributeName<T extends Attribute<any>> = T extends Attribute<
infer N
>
	? N
	: never;
export type InferAttributeType<T extends DataAttribute<any, BaseType>> =
  T extends DataAttribute<any, infer T> ? T : never;

export type AttributeOptions<
	Io extends AttributeDirection = AttributeDirection,
> = {
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
 */

export class Attribute<
	N extends AttributeName = AttributeName,
	Io extends AttributeDirection = AttributeDirection,
> extends Serializable {
	/**
   * This is used to emit and listen to events.
   */
	public events: Events<AttributeEvents> = new Events<AttributeEvents>();

	/**
   * The direction of the attribute. This determines whether or not the attribute is an input or an output.
   */
	public readonly direction: Io;

	/**
   * Just like the label on a block, this is what the user sees, this cannot be changed by the user though.
   */
	public get label() {
		return this._label;
	}

	public set label(label: string) {
		this._label = label;
		this.events.emit('change:label', label);
	}

	/**
   * Whether or not to hide the label of the attribute. Can be used for attributes that have custom controllers that display the label.
   */
	public hideLabel: boolean;

	/**
   * Whether or not to hide the pin of the attribute. Can be used when you only want to display the controller
   */
	public hidePin: boolean;

	/** @ignore */
	protected _label: string;

	/**
	 * Get the block that this attribute belongs to.
	 */
	get parent() {
		return this._block;
	}

	/**
   * Stores a reference to the block that this attribute belongs to.
   */
	private _block?: Block;

	constructor(public readonly name: N, options: AttributeOptions<Io>) {
		super(name);
		this._label = options.label ?? name;
		this.direction = options.direction;

		this.hideLabel = options.hideLabel ?? false;
		this.hidePin = options.hidePin ?? false;
	}

	public setParent(block: Block | undefined) {
		this._block = block;
	}
}

export type DataAttributeOptions<
	T extends BaseType,
	Io extends AttributeDirection,
> = {
	datatype: T;
	defaultValue?: any;
} & AttributeOptions<Io>;

/**
 * An attribute that holds data.
 */
export class DataAttribute<
	N extends AttributeName,
	T extends BaseType,
	Io extends AttributeDirection = AttributeDirection,
> extends Attribute<N> {
	/**
   * The type of data that this attribute holds.
   */
	public datatype: BaseType;

	constructor(name: N, options: DataAttributeOptions<T, Io>) {
		super(name, options);
		this.datatype = options.datatype;
	}
}

export type ExecutionAttributeOptions = Partial<AttributeOptions>;

/**
 * An attribute that executes code when its executed by another block.
 */
export class ExecutionAttribute<N extends AttributeName> extends Attribute<N> {}
