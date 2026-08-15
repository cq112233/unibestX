const defProps = new UTSJSONObject({
  // datetimePicker组件
  datetimePicker: new UTSJSONObject({
    hasInput: false,
    placeholder: "请选择",
    format: "",
    show: false,
    popupMode: "bottom",
    showToolbar: true,
    toolbarRightSlot: false,
    value: "",
    modelValue: "",
    title: "",
    mode: "datetime",
    maxDate: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime(),
    minDate: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime(),
    minHour: 0,
    maxHour: 23,
    minMinute: 0,
    maxMinute: 59,
    minSecond: 0,
    maxSecond: 59,
    filter: null,
    formatter: null,
    loading: false,
    itemHeight: 44,
    cancelText: "取消",
    confirmText: "确认",
    cancelColor: "#909193",
    confirmColor: "#3c9cff",
    visibleItemCount: 5,
    closeOnClickOverlay: false,
    defaultIndex: [],
    pageInline: false
  })
});
export {
  defProps as d
};
//# sourceMappingURL=datetimePicker.js.map
