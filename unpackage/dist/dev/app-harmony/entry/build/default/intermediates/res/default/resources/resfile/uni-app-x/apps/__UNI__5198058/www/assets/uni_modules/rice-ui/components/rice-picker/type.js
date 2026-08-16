class PickerOption extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          text: { type: "Unknown", optional: false },
          value: { type: "Unknown", optional: false },
          disabled: { type: Boolean, optional: true },
          children: { type: UTS.UTSType.withGenerics(Array, [PickerOption]), optional: true },
          extend: { type: "Unknown", optional: true }
        };
      },
      name: "PickerOption"
    };
  }
  constructor(options, metadata = PickerOption.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.text = this.__props__.text;
    this.value = this.__props__.value;
    this.disabled = this.__props__.disabled;
    this.children = this.__props__.children;
    this.extend = this.__props__.extend;
    delete this.__props__;
  }
}
class PickerEvent extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          selectedValues: { type: UTS.UTSType.withGenerics(Array, ["Unknown"]), optional: false },
          selectedOptions: { type: UTS.UTSType.withGenerics(Array, [PickerOption]), optional: false },
          selectedIndex: { type: UTS.UTSType.withGenerics(Array, [Number]), optional: false }
        };
      },
      name: "PickerEvent"
    };
  }
  constructor(options, metadata = PickerEvent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.selectedValues = this.__props__.selectedValues;
    this.selectedOptions = this.__props__.selectedOptions;
    this.selectedIndex = this.__props__.selectedIndex;
    delete this.__props__;
  }
}
class PickerCascadeState extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          columns: { type: UTS.UTSType.withGenerics(Array, [UTS.UTSType.withGenerics(Array, [PickerOption])]), optional: false },
          selectedIndex: { type: UTS.UTSType.withGenerics(Array, [Number]), optional: false },
          selectedValues: { type: UTS.UTSType.withGenerics(Array, ["Unknown"]), optional: false }
        };
      },
      name: "PickerCascadeState"
    };
  }
  constructor(options, metadata = PickerCascadeState.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.columns = this.__props__.columns;
    this.selectedIndex = this.__props__.selectedIndex;
    this.selectedValues = this.__props__.selectedValues;
    delete this.__props__;
  }
}
class PickerProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          columns: { type: UTS.UTSType.withGenerics(Array, [UTS.UTSType.withGenerics(Array, [PickerOption])]), optional: true },
          toolbarPosition: { type: "Unknown", optional: true },
          title: { type: String, optional: true },
          confirmButtonText: { type: String, optional: true },
          cancelButtonText: { type: String, optional: true },
          fontSize: { type: "Unknown", optional: true },
          optionHeight: { type: "Unknown", optional: true },
          visibleOptionNum: { type: Number, optional: true },
          closeOnClickOverlay: { type: Boolean, optional: true },
          closeOnClickConfirm: { type: Boolean, optional: true },
          closeOnClickCancel: { type: Boolean, optional: true },
          loading: { type: Boolean, optional: true },
          safeAreaInsetBottom: { type: Boolean, optional: true },
          usePopup: { type: Boolean, optional: true },
          immediateChange: { type: Boolean, optional: true },
          zIndex: { type: Number, optional: true },
          emptyText: { type: String, optional: true }
        };
      },
      name: "PickerProps"
    };
  }
  constructor(options, metadata = PickerProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.columns = this.__props__.columns;
    this.toolbarPosition = this.__props__.toolbarPosition;
    this.title = this.__props__.title;
    this.confirmButtonText = this.__props__.confirmButtonText;
    this.cancelButtonText = this.__props__.cancelButtonText;
    this.fontSize = this.__props__.fontSize;
    this.optionHeight = this.__props__.optionHeight;
    this.visibleOptionNum = this.__props__.visibleOptionNum;
    this.closeOnClickOverlay = this.__props__.closeOnClickOverlay;
    this.closeOnClickConfirm = this.__props__.closeOnClickConfirm;
    this.closeOnClickCancel = this.__props__.closeOnClickCancel;
    this.loading = this.__props__.loading;
    this.safeAreaInsetBottom = this.__props__.safeAreaInsetBottom;
    this.usePopup = this.__props__.usePopup;
    this.immediateChange = this.__props__.immediateChange;
    this.zIndex = this.__props__.zIndex;
    this.emptyText = this.__props__.emptyText;
    delete this.__props__;
  }
}
export {
  PickerOption as P,
  PickerCascadeState as a,
  PickerEvent as b
};
//# sourceMappingURL=type.js.map
