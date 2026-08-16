import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/dateuts/locale&";
class DateParams extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.date = this.__props__.date;
    this.customFormat = this.__props__.customFormat;
    delete this.__props__;
  }
}
class DateObject extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
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
export {
  DateParams as D,
  DateObject as a
};
//# sourceMappingURL=type.js.map
