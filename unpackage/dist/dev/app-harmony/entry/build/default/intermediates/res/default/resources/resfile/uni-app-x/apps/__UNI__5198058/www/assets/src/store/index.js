import { P as PersistOptions } from "../../uni_modules/x-pinia-s/instans/types.js";
import "../../uni_modules/x-pinia-s/instans/subscriptions.js";

import { c as createPinia } from "../../uni_modules/x-pinia-s/instans/createPinia.js";
import { s as setActivePinia } from "../../uni_modules/x-pinia-s/instans/rootState.js";
import { c as createPersistPlugin } from "../../uni_modules/x-pinia-s/instans/persist.js";
import "./token.js";
import "./user.js";
import "./app.js";
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
