import { c as config } from "../../libs/config/config.js";
const defProps = new UTSJSONObject({
  // loading-icon加载中图标组件
  loadingIcon: new UTSJSONObject({
    show: true,
    color: config.getString("color.up-tips-color"),
    textColor: config.getString("color.up-tips-color"),
    vertical: false,
    mode: "spinner",
    size: "24",
    textSize: "15",
    text: "",
    timingFunction: "ease-in-out",
    duration: 1200,
    inactiveColor: ""
  })
});
export {
  defProps as d
};
//# sourceMappingURL=loadingIcon.js.map
