const light = new UTSJSONObject({
  navigationBarTextStyle: "black",
  navigationBarBackgroundColor: "#ffffff",
  backgroundColor: "#f8fafc",
  backgroundColorContent: "#f8fafc",
  backgroundTextStyle: "dark",
  tabBarColor: "#94a3b8",
  tabBarSelectedColor: "#1890ff",
  tabBarBackgroundColor: "#ffffff",
  tabBarBorderStyle: "black"
});
const dark = new UTSJSONObject({
  navigationBarTextStyle: "white",
  navigationBarBackgroundColor: "#0f172a",
  backgroundColor: "#0f172a",
  backgroundColorContent: "#0f172a",
  backgroundTextStyle: "light",
  tabBarColor: "#94a3b8",
  tabBarSelectedColor: "#1890ff",
  tabBarBackgroundColor: "#0f172a",
  tabBarBorderStyle: "black"
});
const themeJson = new UTSJSONObject({
  light,
  dark
});
export {
  themeJson as t
};
//# sourceMappingURL=theme.js.map
