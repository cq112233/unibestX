class AvatarProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          src: { type: String, optional: true },
          round: { type: Boolean, optional: true },
          radius: { type: "Unknown", optional: true },
          size: { type: "Unknown", optional: true },
          mode: { type: String, optional: true },
          text: { type: "Unknown", optional: true },
          icon: { type: String, optional: true },
          bgColor: { type: String, optional: true },
          color: { type: String, optional: true },
          fontSize: { type: "Unknown", optional: true },
          textClass: { type: String, optional: true },
          defaultUrl: { type: String, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "AvatarProps"
    };
  }
  constructor(options, metadata = AvatarProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.src = this.__props__.src;
    this.round = this.__props__.round;
    this.radius = this.__props__.radius;
    this.size = this.__props__.size;
    this.mode = this.__props__.mode;
    this.text = this.__props__.text;
    this.icon = this.__props__.icon;
    this.bgColor = this.__props__.bgColor;
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.textClass = this.__props__.textClass;
    this.defaultUrl = this.__props__.defaultUrl;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=type.js.map
