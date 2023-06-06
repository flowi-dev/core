import {Serializable} from './Serializable';
import { type BaseType } from './Type';
import _ from 'lodash';

export class Pin extends Serializable {
	_ = Pin.name;

	public readonly name: Lowercase<string>;

	constructor(name: Lowercase<string>, public readonly type: BaseType) {
		if (!name.endsWith('-pin')) {
			name += '-pin';
		}

		super(name);

		this.name = name;
	}
}
