const defProps = new UTSJSONObject({
  // calendar 组件
  calendar: new UTSJSONObject({
    title: "日期选择",
    showTitle: true,
    showSubtitle: true,
    mode: "single",
    startText: "开始",
    endText: "结束",
    customList: [],
    color: "#3c9cff",
    minDate: 0,
    maxDate: 0,
    defaultDate: null,
    maxCount: Number.MAX_VALUE,
    rowHeight: 56,
    formatter: null,
    showLunar: false,
    showMark: true,
    confirmText: "确定",
    confirmDisabledText: "确定",
    show: false,
    closeOnClickOverlay: false,
    readonly: false,
    showConfirm: true,
    maxRange: Number.MIN_VALUE,
    rangePrompt: "",
    showRangePrompt: true,
    allowSameDay: false,
    rangeResultMode: "all",
    round: 0,
    monthNum: 3,
    monthSwitch: false,
    showToday: true
  })
});
export {
  defProps as d
};
//# sourceMappingURL=calendar.js.map
