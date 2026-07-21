import { t } from "../../libs/i18n/index.js";
const defProps = new UTSJSONObject({
  // readMore
  readMore: new UTSJSONObject({
    showHeight: 400,
    toggle: false,
    closeText: t("up.readMore.expand"),
    openText: t("up.readMore.fold"),
    color: "#2979ff",
    fontSize: 14,
    textIndent: "2em",
    name: ""
  })
});
export {
  defProps as d
};
//# sourceMappingURL=readMore.js.map
