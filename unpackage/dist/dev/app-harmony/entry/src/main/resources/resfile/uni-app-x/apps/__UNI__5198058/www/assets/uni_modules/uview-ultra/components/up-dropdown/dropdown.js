import { c as config } from "../../libs/config/config.js";
const defProps = new UTSJSONObject({
  // dropdown组件
  dropdown: new UTSJSONObject({
    activeColor: config.getString("color.up-primary"),
    inactiveColor: "#606266",
    closeOnClickMask: true,
    closeOnClickSelf: true,
    duration: 300,
    height: 40,
    borderBottom: false,
    titleSize: 14,
    borderRadius: 0,
    menuIcon: "arrow-down",
    menuIconSize: 14
  })
});
export {
  defProps as d
};
//# sourceMappingURL=dropdown.js.map
