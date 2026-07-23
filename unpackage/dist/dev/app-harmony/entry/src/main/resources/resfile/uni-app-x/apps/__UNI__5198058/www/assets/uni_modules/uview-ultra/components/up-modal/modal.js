import { t } from "../../libs/i18n/index.js";
const defProps = new UTSJSONObject({
  // modal 组件
  modal: new UTSJSONObject({
    show: false,
    title: "",
    content: "",
    confirmText: t("up.common.confirm", new UTSJSONObject({})),
    cancelText: t("up.common.cancel", new UTSJSONObject({})),
    showConfirmButton: true,
    showCancelButton: false,
    confirmColor: "#2979ff",
    cancelColor: "#606266",
    buttonReverse: false,
    zoom: true,
    asyncClose: false,
    closeOnClickOverlay: false,
    negativeTop: 0,
    width: "650rpx",
    confirmButtonShape: "",
    duration: 400,
    contentTextAlign: "left",
    asyncCloseTip: t("up.common.inOperation", new UTSJSONObject({})) + "...",
    asyncCancelClose: false,
    contentStyle: new UTSJSONObject({})
  })
});
export {
  defProps as d
};
//# sourceMappingURL=modal.js.map
