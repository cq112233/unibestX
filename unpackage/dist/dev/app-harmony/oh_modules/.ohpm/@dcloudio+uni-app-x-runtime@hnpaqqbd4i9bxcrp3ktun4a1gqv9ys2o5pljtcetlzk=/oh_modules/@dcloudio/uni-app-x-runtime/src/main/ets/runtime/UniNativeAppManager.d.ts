import { IUniNativeAppImpl } from "./IUniNativeApp";
import { setUniApp as setUniAppOrigin } from './libs/dom';
export declare const setUniApp: typeof setUniAppOrigin;
export declare const getUniApp: () => IUniNativeAppImpl | null;
