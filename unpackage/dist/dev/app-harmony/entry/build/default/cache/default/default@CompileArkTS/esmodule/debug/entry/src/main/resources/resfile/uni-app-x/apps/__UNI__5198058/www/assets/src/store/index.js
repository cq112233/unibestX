import { P as PersistOptions } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/types&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/subscriptions&";

import { c as createPinia } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/createPinia&";
import { s as setActivePinia } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/rootState&";
import { c as createPersistPlugin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/x-pinia-s/instans/persist&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/token&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/user&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/app&";
const pinia = createPinia();
pinia.use(createPersistPlugin(new PersistOptions({
  keyPrefix: "pinia:",
  includeStores: ["token", "user", "app"],
  excludeStores: [],
  serializer: null
})));
setActivePinia(pinia);
export {
  pinia as p
};
//# sourceMappingURL=index.js.map
