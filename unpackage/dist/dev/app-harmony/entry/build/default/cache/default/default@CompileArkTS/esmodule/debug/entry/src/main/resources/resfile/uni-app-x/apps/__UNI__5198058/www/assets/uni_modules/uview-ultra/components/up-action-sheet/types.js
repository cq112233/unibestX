class UPActionSheetItem extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: true },
          title: { type: String, optional: true },
          subname: { type: String, optional: true },
          loading: { type: Boolean, optional: true },
          disabled: { type: Boolean, optional: true },
          color: { type: String, optional: true },
          fontSize: { type: String, optional: true },
          openType: { type: String, optional: true },
          iconUrl: { type: String, optional: true }
        };
      },
      name: "UPActionSheetItem"
    };
  }
  constructor(options, metadata = UPActionSheetItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.title = this.__props__.title;
    this.subname = this.__props__.subname;
    this.loading = this.__props__.loading;
    this.disabled = this.__props__.disabled;
    this.color = this.__props__.color;
    this.fontSize = this.__props__.fontSize;
    this.openType = this.__props__.openType;
    this.iconUrl = this.__props__.iconUrl;
    delete this.__props__;
  }
}
class UPActionSheetProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          show: { type: Boolean, optional: true },
          title: { type: String, optional: true },
          description: { type: String, optional: true },
          actions: { type: "Unknown", optional: true },
          cancelText: { type: String, optional: true },
          closeOnClickAction: { type: Boolean, optional: true },
          safeAreaInsetBottom: { type: Boolean, optional: true },
          openType: { type: String, optional: true },
          closeOnClickOverlay: { type: Boolean, optional: true },
          round: { type: "Unknown", optional: true },
          lang: { type: String, optional: true },
          sessionFrom: { type: String, optional: true },
          sendMessageTitle: { type: String, optional: true },
          sendMessagePath: { type: String, optional: true },
          sendMessageImg: { type: String, optional: true },
          showMessageCard: { type: Boolean, optional: true },
          appParameter: { type: String, optional: true },
          wrapMaxHeight: { type: String, optional: true }
        };
      },
      name: "UPActionSheetProps"
    };
  }
  constructor(options, metadata = UPActionSheetProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.show = this.__props__.show;
    this.title = this.__props__.title;
    this.description = this.__props__.description;
    this.actions = this.__props__.actions;
    this.cancelText = this.__props__.cancelText;
    this.closeOnClickAction = this.__props__.closeOnClickAction;
    this.safeAreaInsetBottom = this.__props__.safeAreaInsetBottom;
    this.openType = this.__props__.openType;
    this.closeOnClickOverlay = this.__props__.closeOnClickOverlay;
    this.round = this.__props__.round;
    this.lang = this.__props__.lang;
    this.sessionFrom = this.__props__.sessionFrom;
    this.sendMessageTitle = this.__props__.sendMessageTitle;
    this.sendMessagePath = this.__props__.sendMessagePath;
    this.sendMessageImg = this.__props__.sendMessageImg;
    this.showMessageCard = this.__props__.showMessageCard;
    this.appParameter = this.__props__.appParameter;
    this.wrapMaxHeight = this.__props__.wrapMaxHeight;
    delete this.__props__;
  }
}
//# sourceMappingURL=types.js.map
