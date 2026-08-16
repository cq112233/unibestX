class ImageProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          src: { type: String, optional: true },
          mode: { type: String, optional: true },
          width: { type: "Unknown", optional: true },
          height: { type: "Unknown", optional: true },
          round: { type: Boolean, optional: true },
          radius: { type: "Unknown", optional: true },
          showError: { type: Boolean, optional: true },
          showLoading: { type: Boolean, optional: true },
          errorIcon: { type: String, optional: true },
          loadingIcon: { type: String, optional: true },
          iconSize: { type: String, optional: true },
          iconColor: { type: String, optional: true },
          bgColor: { type: String, optional: true },
          preview: { type: Boolean, optional: true },
          previewSrcList: { type: UTS.UTSType.withGenerics(Array, [String]), optional: true },
          previewIndex: { type: Number, optional: true },
          lazyLoad: { type: Boolean, optional: true },
          fadeShow: { type: Boolean, optional: true },
          webp: { type: Boolean, optional: true },
          showMenuByLongpress: { type: Boolean, optional: true },
          draggable: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "ImageProps"
    };
  }
  constructor(options, metadata = ImageProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.src = this.__props__.src;
    this.mode = this.__props__.mode;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.round = this.__props__.round;
    this.radius = this.__props__.radius;
    this.showError = this.__props__.showError;
    this.showLoading = this.__props__.showLoading;
    this.errorIcon = this.__props__.errorIcon;
    this.loadingIcon = this.__props__.loadingIcon;
    this.iconSize = this.__props__.iconSize;
    this.iconColor = this.__props__.iconColor;
    this.bgColor = this.__props__.bgColor;
    this.preview = this.__props__.preview;
    this.previewSrcList = this.__props__.previewSrcList;
    this.previewIndex = this.__props__.previewIndex;
    this.lazyLoad = this.__props__.lazyLoad;
    this.fadeShow = this.__props__.fadeShow;
    this.webp = this.__props__.webp;
    this.showMenuByLongpress = this.__props__.showMenuByLongpress;
    this.draggable = this.__props__.draggable;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=type.js.map
