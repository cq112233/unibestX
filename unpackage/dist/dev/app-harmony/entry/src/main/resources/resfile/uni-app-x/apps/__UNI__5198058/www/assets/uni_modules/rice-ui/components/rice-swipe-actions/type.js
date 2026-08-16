class SwipeActionsProvide extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          accordion: { type: "Unknown", optional: false },
          disabled: { type: "Unknown", optional: false },
          autoClose: { type: "Unknown", optional: false },
          iosStyle: { type: "Unknown", optional: false },
          closeOtherSwipe: { type: "Unknown", optional: false }
        };
      },
      name: "SwipeActionsProvide"
    };
  }
  constructor(options, metadata = SwipeActionsProvide.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.accordion = this.__props__.accordion;
    this.disabled = this.__props__.disabled;
    this.autoClose = this.__props__.autoClose;
    this.iosStyle = this.__props__.iosStyle;
    this.closeOtherSwipe = this.__props__.closeOtherSwipe;
    delete this.__props__;
  }
}
class SwipeActionsProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          disabled: { type: Boolean, optional: true },
          accordion: { type: Boolean, optional: true },
          autoClose: { type: Boolean, optional: true },
          iosStyle: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "SwipeActionsProps"
    };
  }
  constructor(options, metadata = SwipeActionsProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.disabled = this.__props__.disabled;
    this.accordion = this.__props__.accordion;
    this.autoClose = this.__props__.autoClose;
    this.iosStyle = this.__props__.iosStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
export {
  SwipeActionsProvide as S
};
//# sourceMappingURL=type.js.map
