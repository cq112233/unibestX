import { Emitter, getCurrentMP } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { UTS, defineSyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type $OnCallback = Function;
type $On = (eventName: string, callback: $OnCallback) => number;
type $OnceCallback = Function;
type $Once = (eventName: string, callback: $OnceCallback) => number;
type $Off = (eventName: string, callback?: Object | null) => void;
type $Emit = (eventName: string, ...args: Array<Object | null>) => void;
const API_$_ON = '$on';
const API_$_ONCE = '$once';
const API_$_OFF = '$off';
const API_$_EMIT = '$emit';
interface IUniEventEmitter {
    on: (eventName: string, callback: Function) => void;
    once: (eventName: string, callback: Function) => void;
    off: (eventName: string, callback?: Function | null) => void;
    emit: (eventName: string, ...args: (Object | undefined | null)[]) => void;
}
const emitterStore = new Map<string, IUniEventEmitter>();
function getEmitter(): IUniEventEmitter {
    const mp = getCurrentMP();
    const id = mp.appId as string;
    if (emitterStore.has(id)) {
        return UTS.mapGet(emitterStore, id) as IUniEventEmitter;
    }
    const emitter = new Emitter() as IUniEventEmitter;
    emitterStore.set(id, emitter);
    mp.on('beforeClose', () => {
        emitterStore.delete(id);
    });
    return emitter;
}
const $on: $On = defineSyncApi<number>(API_$_ON, (eventName: string, callback: Function) => {
    return getEmitter().on(eventName, callback);
}) as $On;
const $once: $Once = defineSyncApi<number>(API_$_ONCE, (eventName: string, callback: Function) => {
    return getEmitter().once(eventName, callback);
}) as $Once;
const $off: $Off = defineSyncApi<void>(API_$_OFF, (eventName: string, callback: Function) => {
    getEmitter().off(eventName, callback);
}) as $Off;
const $emit: $Emit = defineSyncApi<void>(API_$_EMIT, (eventName: string, ...args: (Object | undefined | null)[]) => {
    getEmitter().emit(eventName, ...args);
}) as $Emit;
export type { $Emit as $Emit, $Off as $Off, $On as $On, $Once as $Once };
export { $on as $on };
export { $once as $once };
export { $off as $off };
export { $emit as $emit };
