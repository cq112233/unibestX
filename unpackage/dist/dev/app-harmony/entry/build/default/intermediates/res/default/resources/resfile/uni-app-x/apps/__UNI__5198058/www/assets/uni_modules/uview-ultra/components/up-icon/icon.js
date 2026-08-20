import { c as config } from "../../libs/config/config.js";
const defProps = new UTSJSONObject({
  // icon组件
  icon: new UTSJSONObject({
    name: "",
    color: config.getString("color.up-content-color"),
    size: "16px",
    bold: false,
    index: "",
    hoverClass: "",
    customPrefix: "upicon",
    label: "",
    labelPos: "right",
    labelSize: "15px",
    labelColor: config.getString("color.up-content-color"),
    space: "3px",
    imgMode: "",
    width: "",
    height: "",
    top: "0",
    stop: false
  })
});
export {
  defProps as d
};
//# sourceMappingURL=icon.js.map
