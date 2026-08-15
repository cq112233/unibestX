import { arrayFind, arrayPop, arrayShift, arrayCopyWithin, arrayFill } from "@normalized:N&&&@dcloudio/uni-app-harmony/UTS/Array&1.0.0";
import { UTSJSON } from "@normalized:N&&&@dcloudio/uni-app-harmony/UTS/JSON&1.0.0";
import { mapGet } from "@normalized:N&&&@dcloudio/uni-app-harmony/UTS/Map&1.0.0";
import { stringCodePointAt } from "@normalized:N&&&@dcloudio/uni-app-harmony/UTS/String&1.0.0";
import { weakMapGet } from "@normalized:N&&&@dcloudio/uni-app-harmony/UTS/WeakMap&1.0.0";
import { UTSConsole } from "@normalized:N&&&@dcloudio/uni-app-harmony/UTS/console&1.0.0";
type IUTS = {
    arrayFind: typeof arrayFind;
    arrayPop: typeof arrayPop;
    arrayShift: typeof arrayShift;
    arrayCopyWithin: typeof arrayCopyWithin;
    arrayFill: typeof arrayFill;
    mapGet: typeof mapGet;
    stringCodePointAt: typeof stringCodePointAt;
    weakMapGet: typeof weakMapGet;
    JSON: typeof UTSJSON;
    console: typeof UTSConsole;
};
export const UTS: IUTS = {
    arrayFind,
    arrayPop,
    arrayShift,
    arrayCopyWithin,
    arrayFill,
    mapGet,
    stringCodePointAt,
    weakMapGet,
    JSON: UTSJSON,
    console: UTSConsole
};
