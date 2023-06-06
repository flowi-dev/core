export declare class Serializable {
    static catalog: Map<string, Serializable>;
    static deserialize(data: {
        name: string;
        _: string;
    }): Serializable;
    constructor(name: string);
    serialize(): {
        name: string;
        _: string;
    };
}
//# sourceMappingURL=Serializable.d.ts.map