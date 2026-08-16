"use strict";
const common_vendor = require("../../../../common/vendor.js");
class SliderInitData extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          dragging: { type: "Unknown", optional: false },
          moveReady: { type: Boolean, optional: false },
          firstValue: { type: Number, optional: false },
          secondValue: { type: Number, optional: false },
          startValue: { type: "Unknown", optional: false },
          sliderWidth: { type: Number, optional: false },
          sliderHeight: { type: Number, optional: false },
          trackLeft: { type: Number, optional: false },
          trackTop: { type: Number, optional: false },
          trackWidth: { type: Number, optional: false },
          trackHeight: { type: Number, optional: false }
        };
      },
      name: "SliderInitData"
    };
  }
  constructor(options, metadata = SliderInitData.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.dragging = this.__props__.dragging;
    this.moveReady = this.__props__.moveReady;
    this.firstValue = this.__props__.firstValue;
    this.secondValue = this.__props__.secondValue;
    this.startValue = this.__props__.startValue;
    this.sliderWidth = this.__props__.sliderWidth;
    this.sliderHeight = this.__props__.sliderHeight;
    this.trackLeft = this.__props__.trackLeft;
    this.trackTop = this.__props__.trackTop;
    this.trackWidth = this.__props__.trackWidth;
    this.trackHeight = this.__props__.trackHeight;
    delete this.__props__;
  }
}
class SliderProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          min: { type: Number, optional: true },
          max: { type: Number, optional: true },
          step: { type: Number, optional: true },
          range: { type: Boolean, optional: true },
          showValue: { type: Boolean, optional: true },
          valuePosition: { type: "Unknown", optional: true },
          valueColor: { type: String, optional: true },
          formatValuetip: { type: "Unknown", optional: true },
          disabled: { type: Boolean, optional: true },
          readonly: { type: Boolean, optional: true },
          mode: { type: "Unknown", optional: true },
          trackHeight: { type: "Unknown", optional: true },
          buttonSize: { type: "Unknown", optional: true },
          buttonColor: { type: String, optional: true },
          buttonBorderColor: { type: String, optional: true },
          buttonClass: { type: String, optional: true },
          activeColor: { type: String, optional: true },
          inactiveColor: { type: String, optional: true },
          clickChange: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "SliderProps"
    };
  }
  constructor(options, metadata = SliderProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.min = this.__props__.min;
    this.max = this.__props__.max;
    this.step = this.__props__.step;
    this.range = this.__props__.range;
    this.showValue = this.__props__.showValue;
    this.valuePosition = this.__props__.valuePosition;
    this.valueColor = this.__props__.valueColor;
    this.formatValuetip = this.__props__.formatValuetip;
    this.disabled = this.__props__.disabled;
    this.readonly = this.__props__.readonly;
    this.mode = this.__props__.mode;
    this.trackHeight = this.__props__.trackHeight;
    this.buttonSize = this.__props__.buttonSize;
    this.buttonColor = this.__props__.buttonColor;
    this.buttonBorderColor = this.__props__.buttonBorderColor;
    this.buttonClass = this.__props__.buttonClass;
    this.activeColor = this.__props__.activeColor;
    this.inactiveColor = this.__props__.inactiveColor;
    this.clickChange = this.__props__.clickChange;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
exports.SliderInitData = SliderInitData;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-slider/type.js.map
