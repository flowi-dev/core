
export abstract class Type {
	public abstract name: string;
	public abstract extends(type: Type): boolean;
	public abstract check(data: any): boolean;
}

export class PrimitiveType extends Type {
	constructor(
		public name: string,
		private readonly validator: (data: any) => boolean,
	) {
		super();
	}

	public check(data: any): boolean {
		return this.validator(data);
	}

	public extends(type: Type): boolean {
		if (type === this) {
			return true;
		}

		if (type instanceof UnionType) {
			return type.types.some(t => this.extends(t));
		}

		return false;
	}
}

export class UnionType extends Type {
	constructor(
		public name: string,
		readonly types: Type[],
	) {
		super();
	}

	public extends(type: Type): boolean {
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

export class ObjectType extends Type {
	constructor(
		public name: string,
		readonly properties: Record<string, Type>,
	) {
		super();
	}

	public extend(name: string, properties: Record<string, Type>): ObjectType {
		return new ObjectType(name, {
			...this.properties,
			...properties,
		});
	}

	public extends(type: Type): boolean {
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
}

export class IntersectionType extends ObjectType {
	constructor(
		public name: string,
		types: ObjectType[],
	) {
		const properties: Record<string, Type> = {};
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

export class ArrayType extends Type {
	constructor(
		public name: string,
		private readonly type: Type,
	) {
		super();
	}

	public check(data: any): boolean {
		if (!Array.isArray(data)) {
			return false;
		}

		return data.every(value => this.type.check(value));
	}

	public extends(type: Type): boolean {
		if (type === this) {
			return true;
		}

		if (type instanceof ArrayType) {
			return this.type.extends(type.type);
		}

		return false;
	}
}

export class AnyType extends Type {
	public name = 'any';

	public check(data: any): boolean {
		return true;
	}

	public extends(type: Type): boolean {
		return true;
	}
}
