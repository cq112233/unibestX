import type { IUniNativeAppImpl } from "./IUniNativeApp";
import { setUniApp as setUniAppOrigin, getUniApp as getUniAppOrigin } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/libs/dom&1.0.0";
export const setUniApp = setUniAppOrigin;
export const getUniApp = getUniAppOrigin as () => IUniNativeAppImpl | null;
