"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../rice-picker/type.js");
require("../../libs/utils/basic.js");
class DateTimePickerExtend extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          year: { type: Number, optional: false },
          month: { type: Number, optional: false },
          day: { type: Number, optional: false },
          hour: { type: Number, optional: false },
          minute: { type: Number, optional: false },
          second: { type: Number, optional: false },
          timeStamp: { type: Number, optional: false },
          value: { type: String, optional: false }
        };
      },
      name: "DateTimePickerExtend"
    };
  }
  constructor(options, metadata = DateTimePickerExtend.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.year = this.__props__.year;
    this.month = this.__props__.month;
    this.day = this.__props__.day;
    this.hour = this.__props__.hour;
    this.minute = this.__props__.minute;
    this.second = this.__props__.second;
    this.timeStamp = this.__props__.timeStamp;
    this.value = this.__props__.value;
    delete this.__props__;
  }
}
class DateTimePickerEvent extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          value: { type: String, optional: false },
          extend: { type: DateTimePickerExtend, optional: false }
        };
      },
      name: "DateTimePickerEvent"
    };
  }
  constructor(options, metadata = DateTimePickerEvent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.value = this.__props__.value;
    this.extend = this.__props__.extend;
    delete this.__props__;
  }
}
class DateTimePickerProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: "Unknown", optional: true },
          minDate: { type: String, optional: true },
          maxDate: { type: String, optional: true },
          valueFormat: { type: String, optional: true },
          format: { type: String, optional: true },
          toolbarPosition: { type: "Unknown", optional: true },
          title: { type: "Unknown", optional: true },
          confirmButtonText: { type: "Unknown", optional: true },
          cancelButtonText: { type: "Unknown", optional: true },
          closeOnClickOverlay: { type: Boolean, optional: true },
          closeOnClickConfirm: { type: Boolean, optional: true },
          closeOnClickCancel: { type: Boolean, optional: true },
          loading: { type: Boolean, optional: true },
          filter: { type: "Unknown", optional: true },
          formatter: { type: "Unknown", optional: true },
          fontSize: { type: "Unknown", optional: true },
          optionHeight: { type: "Unknown", optional: true },
          visibleOptionNum: { type: Number, optional: true },
          zIndex: { type: Number, optional: true },
          usePopup: { type: Boolean, optional: true },
          emptyText: { type: String, optional: true },
          safeAreaInsetBottom: { type: Boolean, optional: true },
          immediateChange: { type: Boolean, optional: true }
        };
      },
      name: "DateTimePickerProps"
    };
  }
  constructor(options, metadata = DateTimePickerProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.minDate = this.__props__.minDate;
    this.maxDate = this.__props__.maxDate;
    this.valueFormat = this.__props__.valueFormat;
    this.format = this.__props__.format;
    this.toolbarPosition = this.__props__.toolbarPosition;
    this.title = this.__props__.title;
    this.confirmButtonText = this.__props__.confirmButtonText;
    this.cancelButtonText = this.__props__.cancelButtonText;
    this.closeOnClickOverlay = this.__props__.closeOnClickOverlay;
    this.closeOnClickConfirm = this.__props__.closeOnClickConfirm;
    this.closeOnClickCancel = this.__props__.closeOnClickCancel;
    this.loading = this.__props__.loading;
    this.filter = this.__props__.filter;
    this.formatter = this.__props__.formatter;
    this.fontSize = this.__props__.fontSize;
    this.optionHeight = this.__props__.optionHeight;
    this.visibleOptionNum = this.__props__.visibleOptionNum;
    this.zIndex = this.__props__.zIndex;
    this.usePopup = this.__props__.usePopup;
    this.emptyText = this.__props__.emptyText;
    this.safeAreaInsetBottom = this.__props__.safeAreaInsetBottom;
    this.immediateChange = this.__props__.immediateChange;
    delete this.__props__;
  }
}
exports.DateTimePickerExtend = DateTimePickerExtend;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-datetime-picker/type.js.map
