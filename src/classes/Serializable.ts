import {ObjectType, UnionType, ArrayType, type BaseType} from './Type';

export class Serializable {
	static catalog = new Map<string, Serializable>();

	public static deserialize(data: {name: string; _: string}): Serializable {
		const saved = Serializable.catalog.get(data.name);

		if (!saved) {
			switch (data._) {
				case 'ObjectType':
					// eslint-disable-next-line no-case-declarations
					const properties: Record<string, BaseType> = {};
					for (const [key, value] of Object.entries((data as unknown as {properties: Record<string, {name: string; _: string}>}).properties)) {
						properties[key] = Serializable.deserialize(value) as BaseType;
					}

					return new ObjectType(data.name, properties);
				case 'UnionType':
					// eslint-disable-next-line no-case-declarations
					const types: BaseType[] = [];
					for (const value of (data as unknown as {types: Array<{name: string; _: string}>}).types) {
						types.push(Serializable.deserialize(value) as BaseType);
					}

					return new UnionType(data.name, types);
				case 'ArrayType':
					// eslint-disable-next-line no-case-declarations
					const elementType = Serializable.deserialize((data as ReturnType<ArrayType['serialize']>).elementType) as BaseType;
					return new ArrayType(data.name, elementType);
				default:
					throw new Error(`Unknown type ${data._}:${data.name}`);
			}
		}

		return saved;
	}

	constructor(name: string) {
		Serializable.catalog.set(name, this);
	}

	public serialize(): {
		name: string;
		_: string;
	} {
		// Only keep the properties, not the methods and convert it to a basic object instead of a class
		return {
			name: this.constructor.name,
			_: this.constructor.name,
			...Object.fromEntries(Object.entries(this).filter(([key]) => !key.startsWith('_')).map(([key, value]) => [key, value])),
		};
	}
}
