import { UniEntryAbility } from "@normalized:N&&&@dcloudio/uni-app-x-runtime/Index&1.0.0";
import BuildProfile from "@normalized:N&&&entry/build/default/generated/profile/default/BuildProfile&";
import { initUniModules } from "@normalized:N&&&entry/src/main/ets/uni_modules/index.generated&";
import "@normalized:Y&&&libentry.so&";
initUniModules();
export default class EntryAbility extends UniEntryAbility {
    constructor() {
        super("__UNI__5198058", {
            debug: BuildProfile.DEBUG
        });
    }
    onImport(path: string): Promise<Object | void> {
        return import(path);
    }
}
