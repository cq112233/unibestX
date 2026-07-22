import { UniEntryAbility } from "@normalized:N&&&@dcloudio/uni-app-x-runtime/Index&5.1.42026062201";
import BuildProfile from "@normalized:N&&&entry/build/default/generated/profile/default/BuildProfile&";
import { initUniModules } from "@normalized:N&&&entry/src/main/ets/uni_modules/index.generated&";
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
