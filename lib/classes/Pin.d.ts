import { Serializable } from './Serializable';
import { type BaseType } from './Type';
export declare class Pin extends Serializable {
    readonly type: BaseType;
    _: string;
    readonly name: Lowercase<string>;
    constructor(name: Lowercase<string>, type: BaseType);
}
//# sourceMappingURL=Pin.d.ts.map