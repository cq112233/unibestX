"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("./locale.js");
class DateParams extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          date: { type: "Unknown", optional: false },
          customFormat: { type: String, optional: true }
        };
      },
      name: "DateParams"
    };
  }
  constructor(options, metadata = DateParams.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.date = this.__props__.date;
    this.customFormat = this.__props__.customFormat;
    delete this.__props__;
  }
}
class DateObject extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          year: { type: Number, optional: false },
          month: { type: Number, optional: false },
          date: { type: Number, optional: false },
          hours: { type: Number, optional: false },
          minutes: { type: Number, optional: false },
          seconds: { type: Number, optional: false },
          milliseconds: { type: Number, optional: false }
        };
      },
      name: "DateObject"
    };
  }
  constructor(options, metadata = DateObject.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.year = this.__props__.year;
    this.month = this.__props__.month;
    this.date = this.__props__.date;
    this.hours = this.__props__.hours;
    this.minutes = this.__props__.minutes;
    this.seconds = this.__props__.seconds;
    this.milliseconds = this.__props__.milliseconds;
    delete this.__props__;
  }
}
exports.DateObject = DateObject;
exports.DateParams = DateParams;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/libs/plugin/dateuts/type.js.map
