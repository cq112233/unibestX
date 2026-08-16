import { f as getRandomStr } from "../../libs/utils/basic.js";
import "./type.js";
const formInjectKey = `FormKey-${getRandomStr()}`;
const formDataInjectKey = `FormDataKey-${getRandomStr()}`;
const formDisabledInjectKey = `FormDisabledContextKey-${getRandomStr()}`;
const formReadonlyInjectKey = `FormReadonlyContextKey-${getRandomStr()}`;
export {
  formReadonlyInjectKey as a,
  formInjectKey as b,
  formDataInjectKey as c,
  formDisabledInjectKey as f
};
//# sourceMappingURL=index.js.map
