import { c as config } from "../../libs/config/config.js";
const defProps = new UTSJSONObject({
  // link超链接组件props参数
  link: new UTSJSONObject({
    color: config.getString("color.up-primary"),
    fontSize: "15px",
    underLine: false,
    href: "",
    mpTips: "链接已复制，请在浏览器打开",
    lineColor: "",
    text: ""
  })
});
export {
  defProps as d
};
//# sourceMappingURL=link.js.map
