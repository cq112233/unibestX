/**
 * 拷贝自uni-shared，统一$on('test', fn) -> $on('test', fn) -> $off('test', fn)的行为
 * 此版本和npm上的tiny-emitter的主要区别在74行的break
 */
interface E {
    e: Record<string, unknown>;
    _id: number;
    on: (name: EventName, callback: EventCallback, ctx?: any) => number;
    once: (name: EventName, callback: EventCallback, ctx?: any) => number;
    emit: (name: EventName, ...args: any[]) => this;
    off: (name: EventName, callback?: EventCallback | null) => this;
}
declare const E: new () => E;
export type EventName = string;
export type EventCallback = Function;
export type EventId = number;
export default E;
