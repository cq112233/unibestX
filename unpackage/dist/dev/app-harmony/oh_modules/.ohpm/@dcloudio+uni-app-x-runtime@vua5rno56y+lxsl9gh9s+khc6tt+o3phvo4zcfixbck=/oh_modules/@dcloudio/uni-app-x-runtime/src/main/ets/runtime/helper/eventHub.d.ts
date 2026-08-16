export declare class EventHub {
    private listeners;
    constructor();
    on(name: string, callback: Function): number;
    emit(name: string, ...args: Object[]): void;
    off(name: string, callback?: number | Function | null): void;
    dispose(): void;
}
