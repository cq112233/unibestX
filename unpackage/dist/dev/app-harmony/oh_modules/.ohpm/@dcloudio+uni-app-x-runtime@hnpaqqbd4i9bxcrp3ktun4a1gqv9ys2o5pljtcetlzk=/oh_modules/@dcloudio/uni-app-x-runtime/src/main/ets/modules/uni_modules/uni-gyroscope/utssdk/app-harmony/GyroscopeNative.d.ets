export type GyroscopeUpdateListener = (x: number, y: number, z: number) => void;
export declare class GyroscopeNative {
    private static listener;
    private static started;
    private static readonly sensorCallback;
    static setListener(callback: GyroscopeUpdateListener | null): void;
    static removeListener(): void;
    static start(interval: string): number;
    static stop(): number;
    private static mapInterval;
}
