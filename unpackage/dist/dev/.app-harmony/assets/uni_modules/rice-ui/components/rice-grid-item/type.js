class GridItemProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          text: { type: "Unknown", optional: true },
          textColor: { type: String, optional: true },
          textSize: { type: "Unknown", optional: true },
          icon: { type: String, optional: true },
          iconColor: { type: String, optional: true },
          iconSize: { type: "Unknown", optional: true },
          iconFontFamily: { type: String, optional: true },
          to: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "GridItemProps"
    };
  }
  constructor(options, metadata = GridItemProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.text = this.__props__.text;
    this.textColor = this.__props__.textColor;
    this.textSize = this.__props__.textSize;
    this.icon = this.__props__.icon;
    this.iconColor = this.__props__.iconColor;
    this.iconSize = this.__props__.iconSize;
    this.iconFontFamily = this.__props__.iconFontFamily;
    this.to = this.__props__.to;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=type.js.map
