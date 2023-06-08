/**
 * Defines the required data for serialization.
 */
export abstract class SerializableData {
	/**
	 * The class name
	 */
	abstract _: string;
	/**
	 * The identifier for the specific instance of the class
	 */
	abstract name: string;
}
