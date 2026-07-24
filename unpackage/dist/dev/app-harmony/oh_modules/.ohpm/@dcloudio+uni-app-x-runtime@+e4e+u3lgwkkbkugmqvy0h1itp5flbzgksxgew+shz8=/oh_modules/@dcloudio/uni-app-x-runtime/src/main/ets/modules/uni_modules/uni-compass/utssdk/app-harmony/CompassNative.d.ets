export type CompassUpdateListener = (direction: number, accuracy: number | null) => void;
interface OrientationPayload {
    x?: number;
    y?: number;
    z?: number;
    alpha?: number;
    azimuth?: number;
    accuracy?: number;
}
export declare class CompassNative {
    private static listener;
    private static started;
    private static readonly orientationCallback;
    static getOrientationSensorId(): number;
    static isSupported(): boolean;
    static setListener(callback: CompassUpdateListener | null): void;
    static removeListener(): void;
    static start(): number;
    static stop(): number;
    static extractDirection(data: OrientationPayload): number;
    static normalizeDirection(value: number): number;
}
export {};
