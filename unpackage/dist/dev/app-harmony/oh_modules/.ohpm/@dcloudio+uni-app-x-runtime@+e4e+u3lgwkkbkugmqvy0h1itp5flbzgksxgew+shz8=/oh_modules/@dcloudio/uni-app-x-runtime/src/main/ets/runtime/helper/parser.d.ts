type Declaration = {
    prop: string;
    value: string;
    important: boolean;
    replaceWith(newProps: Declaration[]): void;
};
export declare function parseStyleDecl(prop: string, value: any | null): Declaration[];
export {};
