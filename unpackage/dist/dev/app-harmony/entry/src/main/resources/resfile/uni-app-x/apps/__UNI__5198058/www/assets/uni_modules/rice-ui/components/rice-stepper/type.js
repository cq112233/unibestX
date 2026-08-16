class StepperCurrent extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          inputValue: { type: String, optional: true },
          currentValue: { type: "Unknown", optional: true }
        };
      },
      name: "StepperCurrent"
    };
  }
  constructor(options, metadata = StepperCurrent.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.inputValue = this.__props__.inputValue;
    this.currentValue = this.__props__.currentValue;
    delete this.__props__;
  }
}
class StepperProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          mode: { type: "Unknown", optional: true },
          step: { type: Number, optional: true },
          stepStrictly: { type: Boolean, optional: true },
          min: { type: Number, optional: true },
          max: { type: Number, optional: true },
          autoFixed: { type: Boolean, optional: true },
          integer: { type: Boolean, optional: true },
          decimalLength: { type: Number, optional: true },
          inputWidth: { type: "Unknown", optional: true },
          buttonSize: { type: "Unknown", optional: true },
          fontSize: { type: "Unknown", optional: true },
          disabled: { type: Boolean, optional: true },
          readonly: { type: Boolean, optional: true },
          disablePlus: { type: Boolean, optional: true },
          disableMinus: { type: Boolean, optional: true },
          disableInput: { type: Boolean, optional: true },
          showPlus: { type: Boolean, optional: true },
          showMinus: { type: Boolean, optional: true },
          showInput: { type: Boolean, optional: true },
          beforeChange: { type: "Unknown", optional: true },
          plusBtnStyle: { type: "Unknown", optional: true },
          minusBtnStyle: { type: "Unknown", optional: true },
          inputStyle: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "StepperProps"
    };
  }
  constructor(options, metadata = StepperProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.mode = this.__props__.mode;
    this.step = this.__props__.step;
    this.stepStrictly = this.__props__.stepStrictly;
    this.min = this.__props__.min;
    this.max = this.__props__.max;
    this.autoFixed = this.__props__.autoFixed;
    this.integer = this.__props__.integer;
    this.decimalLength = this.__props__.decimalLength;
    this.inputWidth = this.__props__.inputWidth;
    this.buttonSize = this.__props__.buttonSize;
    this.fontSize = this.__props__.fontSize;
    this.disabled = this.__props__.disabled;
    this.readonly = this.__props__.readonly;
    this.disablePlus = this.__props__.disablePlus;
    this.disableMinus = this.__props__.disableMinus;
    this.disableInput = this.__props__.disableInput;
    this.showPlus = this.__props__.showPlus;
    this.showMinus = this.__props__.showMinus;
    this.showInput = this.__props__.showInput;
    this.beforeChange = this.__props__.beforeChange;
    this.plusBtnStyle = this.__props__.plusBtnStyle;
    this.minusBtnStyle = this.__props__.minusBtnStyle;
    this.inputStyle = this.__props__.inputStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
//# sourceMappingURL=type.js.map
