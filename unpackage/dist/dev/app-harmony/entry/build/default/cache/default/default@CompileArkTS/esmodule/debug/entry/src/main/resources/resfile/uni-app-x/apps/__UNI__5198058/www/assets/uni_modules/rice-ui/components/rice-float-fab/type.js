class FloatFabState extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          y: { type: Number, optional: false },
          width: { type: Number, optional: false },
          height: { type: Number, optional: false }
        };
      },
      name: "FloatFabState"
    };
  }
  constructor(options, metadata = FloatFabState.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.y = this.__props__.y;
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    delete this.__props__;
  }
}
class FloatFabOffset extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          y: { type: Number, optional: false }
        };
      },
      name: "FloatFabOffset"
    };
  }
  constructor(options, metadata = FloatFabOffset.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.y = this.__props__.y;
    delete this.__props__;
  }
}
class FloatFabBoundary extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          top: { type: Number, optional: false },
          bottom: { type: Number, optional: false },
          left: { type: Number, optional: false },
          right: { type: Number, optional: false }
        };
      },
      name: "FloatFabBoundary"
    };
  }
  constructor(options, metadata = FloatFabBoundary.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.top = this.__props__.top;
    this.bottom = this.__props__.bottom;
    this.left = this.__props__.left;
    this.right = this.__props__.right;
    delete this.__props__;
  }
}
class FloatFabWindowSize extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          width: { type: Number, optional: false },
          height: { type: Number, optional: false }
        };
      },
      name: "FloatFabWindowSize"
    };
  }
  constructor(options, metadata = FloatFabWindowSize.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    delete this.__props__;
  }
}
class FloatFabProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          axis: { type: "Unknown", optional: true },
          adsorption: { type: "Unknown", optional: true },
          gap: { type: "Unknown", optional: true },
          gapTop: { type: "Unknown", optional: true },
          gapBottom: { type: "Unknown", optional: true },
          gapLeft: { type: "Unknown", optional: true },
          gapRight: { type: "Unknown", optional: true },
          overGap: { type: Boolean, optional: true },
          defaultPosition: { type: "Unknown", optional: true },
          duration: { type: Number, optional: true },
          icon: { type: String, optional: true },
          iconColor: { type: String, optional: true },
          iconSize: { type: "Unknown", optional: true },
          height: { type: "Unknown", optional: true },
          width: { type: "Unknown", optional: true },
          radius: { type: "Unknown", optional: true },
          bgColor: { type: String, optional: true },
          disabled: { type: Boolean, optional: true },
          zIndex: { type: Number, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "FloatFabProps"
    };
  }
  constructor(options, metadata = FloatFabProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.axis = this.__props__.axis;
    this.adsorption = this.__props__.adsorption;
    this.gap = this.__props__.gap;
    this.gapTop = this.__props__.gapTop;
    this.gapBottom = this.__props__.gapBottom;
    this.gapLeft = this.__props__.gapLeft;
    this.gapRight = this.__props__.gapRight;
    this.overGap = this.__props__.overGap;
    this.defaultPosition = this.__props__.defaultPosition;
    this.duration = this.__props__.duration;
    this.icon = this.__props__.icon;
    this.iconColor = this.__props__.iconColor;
    this.iconSize = this.__props__.iconSize;
    this.height = this.__props__.height;
    this.width = this.__props__.width;
    this.radius = this.__props__.radius;
    this.bgColor = this.__props__.bgColor;
    this.disabled = this.__props__.disabled;
    this.zIndex = this.__props__.zIndex;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
export {
  FloatFabOffset as F,
  FloatFabWindowSize as a,
  FloatFabState as b,
  FloatFabBoundary as c
};
//# sourceMappingURL=type.js.map
