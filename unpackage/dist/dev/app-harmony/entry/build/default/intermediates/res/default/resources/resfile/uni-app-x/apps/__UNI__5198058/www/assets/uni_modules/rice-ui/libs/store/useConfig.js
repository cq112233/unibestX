const { reactive, computed } = globalThis.Vue;
class Config extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          theme: { type: "Unknown", optional: false },
          unit: { type: "Unknown", optional: false }
        };
      },
      name: "Config"
    };
  }
  constructor(options, metadata = Config.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.theme = this.__props__.theme;
    this.unit = this.__props__.unit;
    delete this.__props__;
  }
}
const config = reactive(new Config({
  theme: "light",
  unit: "px"
}));
const isDark = computed(() => {
  return config.theme == "dark";
});
const setTheme = (theme) => {
  config.theme = theme;
};
export {
  config as c,
  isDark as i,
  setTheme as s
};
//# sourceMappingURL=useConfig.js.map
