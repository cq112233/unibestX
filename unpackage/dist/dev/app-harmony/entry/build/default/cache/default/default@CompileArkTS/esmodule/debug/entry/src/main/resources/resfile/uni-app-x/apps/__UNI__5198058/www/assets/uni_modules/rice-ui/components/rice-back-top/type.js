class BackTopProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          mode: { type: "Unknown", optional: true },
          parentId: { type: String, optional: true },
          scrollTop: { type: Number, optional: true },
          offset: { type: Number, optional: true },
          right: { type: "Unknown", optional: true },
          bottom: { type: "Unknown", optional: true },
          duration: { type: Number, optional: true },
          icon: { type: String, optional: true },
          iconSize: { type: "Unknown", optional: true },
          text: { type: String, optional: true },
          textSize: { type: "Unknown", optional: true },
          textColor: { type: String, optional: true },
          width: { type: "Unknown", optional: true },
          height: { type: "Unknown", optional: true },
          radius: { type: "Unknown", optional: true },
          bgColor: { type: String, optional: true },
          zoom: { type: Boolean, optional: true },
          zIndex: { type: Number, optional: true },
          disabledPageScroll: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "BackTopProps"
    };
  }
  constructor(options, metadata = BackTopProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.mode = this.__props__.mode;
    this.parentId = this.__props__.parentId;
    this.scrollTop = this.__props__.scrollTop;
    this.offset = this.__props__.offset;
    this.right = this.__props__.right;
    this.bottom = this.__props__.bottom;
    this.duration = this.__props__.duration;
    this.icon = this.__props__.icon;
    this.iconSize = this.__props__.iconSize;
    this.text = this.__props__.text;
    this.textSize = this.__props__.textSize;
    this.textColor = this.__props__.textColor;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.radius = this.__props__.radius;
    this.bgColor = this.__props__.bgColor;
    this.zoom = this.__props__.zoom;
    this.zIndex = this.__props__.zIndex;
    this.disabledPageScroll = this.__props__.disabledPageScroll;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=type.js.map
