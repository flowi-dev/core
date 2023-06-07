import {Serializable} from '../Serialization';
import {type Block} from './Block';
import {type BaseType} from '../Types';

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
export class Attribute<N extends AttributeName = AttributeName> extends Serializable {
	/**
	 * Just like the label on a block, this is what the user sees, this cannot be changed by the user though.
	 */
	public label: string;

	/**
	 * Whether or not to hide the label of the attribute. Can be used for attributes that have custom controllers that display the label.
	 */
	public hideLabel: boolean;

	/**
	 * Whether or not to hide the pin of the attribute. Can be used when you only want to display the controller
	 */
	public hidePin: boolean;

	/**
	 * Stores a reference to the block that this attribute belongs to.
	 */
	private _block?: Block;

	constructor(public readonly name: N, options?: Partial<AttributeOptions>) {
		super(name);
		this.label = options?.label ?? name;

		this.hideLabel = options?.hideLabel ?? false;
		this.hidePin = options?.hidePin ?? false;
	}

	public setParent(block: Block) {
		this._block = block;
	}
}

export type DataAttributeOptions<T extends BaseType> = {
	datatype: T;
	defaultValue?: any;
} & Partial<AttributeOptions>;

/**
 * An attribute that holds data.
 */
export class DataAttribute<N extends AttributeName, T extends BaseType> extends Attribute<N> {
	/**
	 * The type of data that this attribute holds.
	 */
	public datatype: BaseType;

	constructor(name: N, options: DataAttributeOptions<T>) {
		super(name, options);
		this.datatype = options.datatype;
	}
}

export type ExecutionAttributeOptions = Partial<AttributeOptions>;

/**
 * An attribute that executes code when its executed by another block.
 */
export class ExecutionAttribute<N extends AttributeName> extends Attribute<N> {
	private _handler: (data: any, context: any) => void = () => {
		throw new Error('No handler defined');
	};

	/**
	 * This is the code that will be executed when the attribute is executed.
	 */
	// eslint-disable-next-line @typescript-eslint/member-ordering
	public onExecute(handler: typeof ExecutionAttribute.prototype['_handler']) {
		this._handler = handler;
	}

	/**
	 * This function is used by the engine to execute this attribute.
	 */
	// eslint-disable-next-line @typescript-eslint/member-ordering
	public execute(...args: Parameters<typeof ExecutionAttribute.prototype['_handler']>) {
		this._handler(...args);
	}
}

export class GetterAttribute<N extends AttributeName, T extends BaseType> extends DataAttribute<N, T> {
	private _getter: (data: any, context: any) => any = () => {
		throw new Error('No getter defined');
	};

	// eslint-disable-next-line @typescript-eslint/member-ordering
	public onGet(handler: typeof GetterAttribute.prototype['_getter']) {
		this._getter = handler;
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	public get(...args: Parameters<typeof GetterAttribute.prototype['_getter']>) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return this._getter(...args);
	}
}
