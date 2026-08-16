class ColorPickerColorState extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          r: { type: Number, optional: false },
          g: { type: Number, optional: false },
          b: { type: Number, optional: false },
          a: { type: Number, optional: false },
          h: { type: Number, optional: false },
          s: { type: Number, optional: false },
          v: { type: Number, optional: false }
        };
      },
      name: "ColorPickerColorState"
    };
  }
  constructor(options, metadata = ColorPickerColorState.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.r = this.__props__.r;
    this.g = this.__props__.g;
    this.b = this.__props__.b;
    this.a = this.__props__.a;
    this.h = this.__props__.h;
    this.s = this.__props__.s;
    this.v = this.__props__.v;
    delete this.__props__;
  }
}
class ColorPickerHSV extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          h: { type: Number, optional: false },
          s: { type: Number, optional: false },
          v: { type: Number, optional: false }
        };
      },
      name: "ColorPickerHSV"
    };
  }
  constructor(options, metadata = ColorPickerHSV.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.h = this.__props__.h;
    this.s = this.__props__.s;
    this.v = this.__props__.v;
    delete this.__props__;
  }
}
class ColorPickerRGB extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          r: { type: Number, optional: false },
          g: { type: Number, optional: false },
          b: { type: Number, optional: false }
        };
      },
      name: "ColorPickerRGB"
    };
  }
  constructor(options, metadata = ColorPickerRGB.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.r = this.__props__.r;
    this.g = this.__props__.g;
    this.b = this.__props__.b;
    delete this.__props__;
  }
}
class ParsedColorResult extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          r: { type: Number, optional: false },
          g: { type: Number, optional: false },
          b: { type: Number, optional: false },
          a: { type: Number, optional: false },
          format: { type: "Unknown", optional: false }
        };
      },
      name: "ParsedColorResult"
    };
  }
  constructor(options, metadata = ParsedColorResult.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.r = this.__props__.r;
    this.g = this.__props__.g;
    this.b = this.__props__.b;
    this.a = this.__props__.a;
    this.format = this.__props__.format;
    delete this.__props__;
  }
}
class ColorPickerProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          presetColors: { type: UTS.UTSType.withGenerics(Array, [String]), optional: true },
          showAlpha: { type: Boolean, optional: true },
          disabledInput: { type: Boolean, optional: true },
          disabledSwitch: { type: Boolean, optional: true },
          panelClass: { type: String, optional: true },
          previewClass: { type: String, optional: true }
        };
      },
      name: "ColorPickerProps"
    };
  }
  constructor(options, metadata = ColorPickerProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.presetColors = this.__props__.presetColors;
    this.showAlpha = this.__props__.showAlpha;
    this.disabledInput = this.__props__.disabledInput;
    this.disabledSwitch = this.__props__.disabledSwitch;
    this.panelClass = this.__props__.panelClass;
    this.previewClass = this.__props__.previewClass;
    delete this.__props__;
  }
}
export {
  ColorPickerColorState as C,
  ColorPickerRGB as a,
  ColorPickerHSV as b
};
//# sourceMappingURL=type.js.map
