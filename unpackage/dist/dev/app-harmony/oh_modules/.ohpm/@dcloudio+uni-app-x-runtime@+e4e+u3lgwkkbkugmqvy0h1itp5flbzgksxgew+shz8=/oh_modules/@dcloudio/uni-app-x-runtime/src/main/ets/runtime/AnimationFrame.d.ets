type RequestAnimationFrameCallback = (timestamp: number) => void;
export declare function requestAnimationFrame(callback: RequestAnimationFrameCallback): number;
export declare function cancelAnimationFrame(taskId: number): void;
export {};
