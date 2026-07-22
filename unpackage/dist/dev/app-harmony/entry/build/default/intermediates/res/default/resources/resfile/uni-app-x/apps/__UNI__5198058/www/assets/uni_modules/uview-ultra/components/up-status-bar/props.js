
import { d as defProps } from "./statusBar.js";
let crtProp = defProps["statusBar"];
const propsStatusBar = {
  props: {
    bgColor: {
      type: String,
      default: crtProp["bgColor"]
    }
  }
};
export {
  propsStatusBar as p
};
//# sourceMappingURL=props.js.map
