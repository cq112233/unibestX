"use strict";
const common_vendor = require("../../../../common/vendor.js");
class CascaderOption extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          text: { type: String, optional: false },
          value: { type: "Unknown", optional: false },
          disabled: { type: Boolean, optional: true },
          children: { type: common_vendor.UTS.UTSType.withGenerics(Array, [CascaderOption]), optional: true },
          extend: { type: "Any", optional: true }
        };
      },
      name: "CascaderOption"
    };
  }
  constructor(options, metadata = CascaderOption.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.text = this.__props__.text;
    this.value = this.__props__.value;
    this.disabled = this.__props__.disabled;
    this.children = this.__props__.children;
    this.extend = this.__props__.extend;
    delete this.__props__;
  }
}
class CascaderEvent extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          value: { type: "Unknown", optional: false },
          selectedOptions: { type: common_vendor.UTS.UTSType.withGenerics(Array, [CascaderOption]), optional: false },
          tabIndex: { type: Number, optional: false }
        };
      },
      name: "CascaderEvent"
    };
  }
  constructor(options, metadata = CascaderEvent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.value = this.__props__.value;
    this.selectedOptions = this.__props__.selectedOptions;
    this.tabIndex = this.__props__.tabIndex;
    delete this.__props__;
  }
}
class CascaderClickDisabledEvent extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          option: { type: CascaderOption, optional: false },
          tabIndex: { type: Number, optional: false }
        };
      },
      name: "CascaderClickDisabledEvent"
    };
  }
  constructor(options, metadata = CascaderClickDisabledEvent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.option = this.__props__.option;
    this.tabIndex = this.__props__.tabIndex;
    delete this.__props__;
  }
}
class CascaderProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          options: { type: common_vendor.UTS.UTSType.withGenerics(Array, [CascaderOption]), optional: true },
          title: { type: String, optional: true },
          titleAlign: { type: "Unknown", optional: true },
          placeholder: { type: String, optional: true },
          color: { type: String, optional: true },
          activeColor: { type: String, optional: true },
          fontSize: { type: "Unknown", optional: true },
          closeable: { type: Boolean, optional: true },
          closeIcon: { type: String, optional: true },
          border: { type: Boolean, optional: true },
          usePopup: { type: Boolean, optional: true },
          closeOnFinish: { type: Boolean, optional: true },
          closeOnClickClose: { type: Boolean, optional: true },
          closeOnClickOverlay: { type: Boolean, optional: true },
          safeAreaInsetBottom: { type: Boolean, optional: true },
          zIndex: { type: Number, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "CascaderProps"
    };
  }
  constructor(options, metadata = CascaderProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.options = this.__props__.options;
    this.title = this.__props__.title;
    this.titleAlign = this.__props__.titleAlign;
    this.placeholder = this.__props__.placeholder;
    this.color = this.__props__.color;
    this.activeColor = this.__props__.activeColor;
    this.fontSize = this.__props__.fontSize;
    this.closeable = this.__props__.closeable;
    this.closeIcon = this.__props__.closeIcon;
    this.border = this.__props__.border;
    this.usePopup = this.__props__.usePopup;
    this.closeOnFinish = this.__props__.closeOnFinish;
    this.closeOnClickClose = this.__props__.closeOnClickClose;
    this.closeOnClickOverlay = this.__props__.closeOnClickOverlay;
    this.safeAreaInsetBottom = this.__props__.safeAreaInsetBottom;
    this.zIndex = this.__props__.zIndex;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
exports.CascaderClickDisabledEvent = CascaderClickDisabledEvent;
exports.CascaderEvent = CascaderEvent;
exports.CascaderOption = CascaderOption;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-cascader/type.js.map
