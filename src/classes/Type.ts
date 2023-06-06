import {Serializable} from './Serializable';

export abstract class BaseType extends Serializable {
	public abstract _: string;
	public abstract name: string;
	public abstract extends(type: BaseType): boolean;
	public abstract check(data: any): boolean;
}

export class PrimitiveType extends BaseType {
	_ = PrimitiveType.name;
	constructor(
		public name: string,
		private readonly validator: (data: any) => boolean,
	) {
		super(name);
	}

	public check(data: any): boolean {
		return this.validator(data);
	}

	public extends(type: BaseType): boolean {
		if (type === this) {
			return true;
		}

		if (type instanceof UnionType) {
			return type.types.some(t => this.extends(t));
		}

		return false;
	}
}

export class UnionType extends BaseType {
	_ = UnionType.name;
	constructor(
		public name: string,
		readonly types: BaseType[],
	) {
		super(name);
	}

	public extends(type: BaseType): boolean {
		if (type === this) {
			return true;
		}

		// If the type extends any of the types in the union, then it extends the union
		return this.types.every(t => t.extends(type));
	}

	public check(data: any): boolean {
		return this.types.some(t => t.check(data));
	}
}

export class ArrayType extends BaseType {
	_ = ArrayType.name;
	constructor(
		public name: string,
		readonly elementType: BaseType,
	) {
		super(name);
	}

	public check(data: any): boolean {
		if (!Array.isArray(data)) {
			return false;
		}

		return data.every(value => this.elementType.check(value));
	}

	public extends(type: BaseType): boolean {
		if (type === this) {
			return true;
		}

		if (type instanceof ArrayType) {
			return this.elementType.extends(type.elementType);
		}

		return false;
	}

	override serialize(): {
		name: string;
		_: string;
		elementType: {
			name: string;
			_: string;
		};
	} {
		return {
			...super.serialize(),
			elementType: this.elementType.serialize(),
		};
	}
}

export class AnyType extends BaseType {
	_ = AnyType.name;
	public name = 'any';

	constructor() {
		super('any');
	}

	public check(data: any): boolean {
		return true;
	}

	public extends(type: BaseType): boolean {
		return true;
	}
}

export class ObjectType extends BaseType {
	properties: Record<string, BaseType>;
	_ = ObjectType.name;

	constructor(
		public name: string,
		properties: Record<string, BaseType>,
	) {
		super(name);
		this.properties = properties;
	}

	public extend(name: string, properties: Record<string, BaseType>): ObjectType {
		return new ObjectType(name, {
			...this.properties,
			...properties,
		});
	}

	public extends(type: BaseType): boolean {
		if (type === this) {
			return true;
		}

		if (type instanceof ObjectType) {
			return Object.keys(type.properties).every(key => {
				const property = this.properties[key];
				const otherProperty = type.properties[key];

				if (!property) {
					return false;
				}

				return property.extends(otherProperty);
			});
		}

		return false;
	}

	public check(data: any): boolean {
		if (typeof data !== 'object' || data === null) {
			return false;
		}

		return Object.keys(this.properties).every(key => {
			const property = this.properties[key];
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const value = data[key];

			return property.check(value);
		});
	}

	override serialize(): {
		name: string;
		_: string;
		properties: Record<string, {
			name: string;
			_: string;
		}>;
	} {
		return {
			...super.serialize(),
			properties: Object.fromEntries(Object.entries(this.properties).map(([key, value]) => [key, value.serialize()])),
		};
	}
}

export class ObjectIntersectionType extends ObjectType {
	constructor(
		public name: string,
		types: ObjectType[],
	) {
		const properties: Record<string, BaseType> = {};
		for (const type of types) {
			for (const key of Object.keys(type.properties)) {
				const property = type.properties[key];
				const existingProperty = properties[key];
				if (existingProperty) {
					if (!property.extends(existingProperty) && !existingProperty.extends(property)) {
						// If neither extends the other, then we have a problem
						throw new Error(`Property ${key} is defined as both ${existingProperty.name} and ${property.name} and neither extends the other`);
					}

					properties[key] = existingProperty.extends(property) ? existingProperty : property;
				} else {
					properties[key] = property;
				}
			}
		}

		super(name, properties);
	}
}

export class UnionIntersectionType extends UnionType {
	constructor(
		public name: string,
		types: UnionType[],
	) {
		const newTypes: BaseType[] = [];
		for (const union of types) {
			for (const type of union.types) {
				if (types.every(u => u.types.some(t => type.extends(t)))) {
					if (!newTypes.includes(type)) {
						newTypes.push(type);
					}
				}
			}
		}

		super(name, newTypes);
	}
}
