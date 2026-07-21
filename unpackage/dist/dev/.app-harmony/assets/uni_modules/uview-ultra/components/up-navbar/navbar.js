import { c as color } from "../../libs/config/color.js";
const defProps = new UTSJSONObject({
  // navbar 组件
  navbar: new UTSJSONObject({
    safeAreaInsetTop: true,
    placeholder: false,
    fixed: true,
    border: false,
    leftIcon: "arrow-left",
    leftText: "",
    rightText: "",
    rightIcon: "",
    title: "",
    bgColor: "#ffffff",
    titleWidth: "400rpx",
    height: "44px",
    leftIconSize: 20,
    leftIconColor: color["mainColor"],
    autoBack: false,
    titleStyle: new UTSJSONObject({})
  })
});
export {
  defProps as d
};
//# sourceMappingURL=navbar.js.map
