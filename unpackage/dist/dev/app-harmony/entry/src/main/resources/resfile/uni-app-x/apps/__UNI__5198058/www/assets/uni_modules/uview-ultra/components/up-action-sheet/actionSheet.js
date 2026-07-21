import "./types.js";
const defProps = new UTSJSONObject({
  // action-sheet组件
  actionSheet: new UTSJSONObject({
    show: false,
    title: "",
    description: "",
    // actions: [] as Array<UPActionSheetItem>,
    actions: [],
    index: "",
    cancelText: "",
    closeOnClickAction: true,
    safeAreaInsetBottom: true,
    openType: "",
    closeOnClickOverlay: true,
    round: 0,
    wrapMaxHeight: "600px"
  })
});
export {
  defProps as d
};
//# sourceMappingURL=actionSheet.js.map
