import "../../libs/config/color.js";
const defProps = new UTSJSONObject({
  //
  tabs: new UTSJSONObject({
    duration: 300,
    list: [],
    lineColor: "#3c9cff",
    activeStyle: new UTSJSONObject({
      color: "#303133"
    }),
    inactiveStyle: new UTSJSONObject({
      color: "#606266"
    }),
    lineWidth: 20,
    lineHeight: 3,
    lineBgSize: "cover",
    itemStyle: new UTSJSONObject({
      height: "44px"
    }),
    height: "44px",
    scrollable: true,
    current: 0,
    keyName: "name",
    iconStyle: new UTSJSONObject({})
  })
});
export {
  defProps as d
};
//# sourceMappingURL=tabs.js.map
