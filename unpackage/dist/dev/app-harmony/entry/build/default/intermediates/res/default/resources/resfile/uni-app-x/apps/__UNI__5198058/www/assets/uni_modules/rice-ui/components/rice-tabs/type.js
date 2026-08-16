import "../rice-badge/type.js";
class TabsOptions extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: false },
          value: { type: "Unknown", optional: true },
          disabled: { type: Boolean, optional: true },
          badge: { type: "Unknown", optional: true }
        };
      },
      name: "TabsOptions"
    };
  }
  constructor(options, metadata = TabsOptions.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.value = this.__props__.value;
    this.disabled = this.__props__.disabled;
    this.badge = this.__props__.badge;
    delete this.__props__;
  }
}
class TabsClickTab extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          index: { type: Number, optional: false },
          name: { type: String, optional: false },
          value: { type: "Unknown", optional: true },
          disabled: { type: Boolean, optional: false }
        };
      },
      name: "TabsClickTab"
    };
  }
  constructor(options, metadata = TabsClickTab.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.index = this.__props__.index;
    this.name = this.__props__.name;
    this.value = this.__props__.value;
    this.disabled = this.__props__.disabled;
    delete this.__props__;
  }
}
class TabsChange extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          index: { type: Number, optional: false },
          name: { type: String, optional: false },
          value: { type: "Unknown", optional: true },
          disabled: { type: Boolean, optional: false }
        };
      },
      name: "TabsChange"
    };
  }
  constructor(options, metadata = TabsChange.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.index = this.__props__.index;
    this.name = this.__props__.name;
    this.value = this.__props__.value;
    this.disabled = this.__props__.disabled;
    delete this.__props__;
  }
}
class TabsItemRect extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          w: { type: Number, optional: false }
        };
      },
      name: "TabsItemRect"
    };
  }
  constructor(options, metadata = TabsItemRect.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.w = this.__props__.w;
    delete this.__props__;
  }
}
class TabsProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          list: { type: UTS.UTSType.withGenerics(Array, [TabsOptions]), optional: false },
          shrink: { type: Boolean, optional: true },
          lineMode: { type: "Unknown", optional: true },
          titleActiveColor: { type: String, optional: true },
          titleInactiveColor: { type: String, optional: true },
          initAnimate: { type: Boolean, optional: true },
          bgColor: { type: String, optional: true },
          height: { type: "Unknown", optional: true },
          lineColor: { type: String, optional: true },
          lineWidth: { type: "Unknown", optional: true },
          lineHeight: { type: "Unknown", optional: true },
          textClass: { type: String, optional: true },
          activeTextClass: { type: String, optional: true },
          inactiveTextClass: { type: String, optional: true },
          disabledTextClass: { type: String, optional: true },
          itemStyle: { type: "Unknown", optional: true },
          activeStyle: { type: "Unknown", optional: true },
          inactiveStyle: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "TabsProps"
    };
  }
  constructor(options, metadata = TabsProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.list = this.__props__.list;
    this.shrink = this.__props__.shrink;
    this.lineMode = this.__props__.lineMode;
    this.titleActiveColor = this.__props__.titleActiveColor;
    this.titleInactiveColor = this.__props__.titleInactiveColor;
    this.initAnimate = this.__props__.initAnimate;
    this.bgColor = this.__props__.bgColor;
    this.height = this.__props__.height;
    this.lineColor = this.__props__.lineColor;
    this.lineWidth = this.__props__.lineWidth;
    this.lineHeight = this.__props__.lineHeight;
    this.textClass = this.__props__.textClass;
    this.activeTextClass = this.__props__.activeTextClass;
    this.inactiveTextClass = this.__props__.inactiveTextClass;
    this.disabledTextClass = this.__props__.disabledTextClass;
    this.itemStyle = this.__props__.itemStyle;
    this.activeStyle = this.__props__.activeStyle;
    this.inactiveStyle = this.__props__.inactiveStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
export {
  TabsOptions as T,
  TabsClickTab as a,
  TabsChange as b,
  TabsItemRect as c
};
//# sourceMappingURL=type.js.map
