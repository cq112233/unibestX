export type AccelerometerUpdateListener = (x: number, y: number, z: number) => void;
export declare class AccelerometerNative {
    private static listener;
    private static started;
    private static readonly sensorCallback;
    static setListener(callback: AccelerometerUpdateListener | null): void;
    static removeListener(): void;
    static start(interval: string): number;
    static stop(): number;
    private static mapIntervalToNanoseconds;
}
