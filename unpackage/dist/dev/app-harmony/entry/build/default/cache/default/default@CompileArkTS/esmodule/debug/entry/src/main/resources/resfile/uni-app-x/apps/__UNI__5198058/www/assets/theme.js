const light = new UTSJSONObject({
  backgroundColor: "#f8fafc",
  backgroundColorContent: "#f8fafc",
  backgroundTextStyle: "dark",
  navigationBarBackgroundColor: "#ffffff",
  navigationBarTextStyle: "black",
  tabBarBackgroundColor: "#ffffff",
  tabBarBorderStyle: "black",
  tabBarColor: "#94a3b8",
  tabBarSelectedColor: "#1890ff"
});
const dark = new UTSJSONObject({
  backgroundColor: "#0f172a",
  backgroundColorContent: "#0f172a",
  backgroundTextStyle: "light",
  navigationBarBackgroundColor: "#0f172a",
  navigationBarTextStyle: "white",
  tabBarBackgroundColor: "#0f172a",
  tabBarBorderStyle: "black",
  tabBarColor: "#94a3b8",
  tabBarSelectedColor: "#1890ff"
});
const themeJson = new UTSJSONObject({
  light,
  dark
});
export {
  themeJson as t
};
//# sourceMappingURL=theme.js.map
