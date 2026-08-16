class ProgressCircleDrawParams extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          radius: { type: Number, optional: false },
          centerX: { type: Number, optional: false },
          centerY: { type: Number, optional: false },
          startAngle: { type: Number, optional: false },
          endAngle: { type: Number, optional: false },
          progressAngle: { type: Number, optional: false }
        };
      },
      name: "ProgressCircleDrawParams"
    };
  }
  constructor(options, metadata = ProgressCircleDrawParams.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.radius = this.__props__.radius;
    this.centerX = this.__props__.centerX;
    this.centerY = this.__props__.centerY;
    this.startAngle = this.__props__.startAngle;
    this.endAngle = this.__props__.endAngle;
    this.progressAngle = this.__props__.progressAngle;
    delete this.__props__;
  }
}
class ProgressCircleProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          percentage: { type: "Unknown", optional: false },
          type: { type: "Unknown", optional: true },
          size: { type: "Unknown", optional: true },
          duration: { type: Number, optional: true },
          strokeWidth: { type: Number, optional: true },
          showText: { type: Boolean, optional: true },
          textColor: { type: String, optional: true },
          textSize: { type: "Unknown", optional: true },
          format: { type: "Unknown", optional: true },
          color: { type: String, optional: true },
          inactiveColor: { type: String, optional: true },
          gapAngle: { type: Number, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "ProgressCircleProps"
    };
  }
  constructor(options, metadata = ProgressCircleProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.percentage = this.__props__.percentage;
    this.type = this.__props__.type;
    this.size = this.__props__.size;
    this.duration = this.__props__.duration;
    this.strokeWidth = this.__props__.strokeWidth;
    this.showText = this.__props__.showText;
    this.textColor = this.__props__.textColor;
    this.textSize = this.__props__.textSize;
    this.format = this.__props__.format;
    this.color = this.__props__.color;
    this.inactiveColor = this.__props__.inactiveColor;
    this.gapAngle = this.__props__.gapAngle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
export {
  ProgressCircleDrawParams as P
};
//# sourceMappingURL=type.js.map
