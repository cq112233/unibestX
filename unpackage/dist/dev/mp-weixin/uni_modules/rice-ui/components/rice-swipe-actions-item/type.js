"use strict";
const common_vendor = require("../../../../common/vendor.js");
class SwipeActionsMenu extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          text: { type: String, optional: true },
          icon: { type: String, optional: true },
          iconSize: { type: "Unknown", optional: true },
          disabled: { type: Boolean, optional: true },
          style: { type: "Unknown", optional: true }
        };
      },
      name: "SwipeActionsMenu"
    };
  }
  constructor(options, metadata = SwipeActionsMenu.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.text = this.__props__.text;
    this.icon = this.__props__.icon;
    this.iconSize = this.__props__.iconSize;
    this.disabled = this.__props__.disabled;
    this.style = this.__props__.style;
    delete this.__props__;
  }
}
class SwipeActionsState extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          x: { type: Number, optional: false },
          rightWidth: { type: Number, optional: false },
          leftWidth: { type: Number, optional: false },
          opened: { type: Boolean, optional: false },
          position: { type: "Unknown", optional: false }
        };
      },
      name: "SwipeActionsState"
    };
  }
  constructor(options, metadata = SwipeActionsState.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.x = this.__props__.x;
    this.rightWidth = this.__props__.rightWidth;
    this.leftWidth = this.__props__.leftWidth;
    this.opened = this.__props__.opened;
    this.position = this.__props__.position;
    delete this.__props__;
  }
}
class SwipeActionsMenuRect extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          rightMenuDom: { type: common_vendor.UTS.UTSType.withGenerics(Array, ["Unknown"]), optional: false },
          rightMenuOffset: { type: common_vendor.UTS.UTSType.withGenerics(Array, [Number]), optional: false },
          leftMenuOffset: { type: common_vendor.UTS.UTSType.withGenerics(Array, [Number]), optional: false },
          leftMenuDom: { type: common_vendor.UTS.UTSType.withGenerics(Array, ["Unknown"]), optional: false }
        };
      },
      name: "SwipeActionsMenuRect"
    };
  }
  constructor(options, metadata = SwipeActionsMenuRect.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.rightMenuDom = this.__props__.rightMenuDom;
    this.rightMenuOffset = this.__props__.rightMenuOffset;
    this.leftMenuOffset = this.__props__.leftMenuOffset;
    this.leftMenuDom = this.__props__.leftMenuDom;
    delete this.__props__;
  }
}
class SwipeActionsItemClick extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: "Unknown", optional: true },
          position: { type: "Unknown", optional: false },
          index: { type: Number, optional: false },
          opened: { type: Boolean, optional: false }
        };
      },
      name: "SwipeActionsItemClick"
    };
  }
  constructor(options, metadata = SwipeActionsItemClick.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.position = this.__props__.position;
    this.index = this.__props__.index;
    this.opened = this.__props__.opened;
    delete this.__props__;
  }
}
class SwipeActionsItemOpen extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: "Unknown", optional: true },
          position: { type: "Unknown", optional: false }
        };
      },
      name: "SwipeActionsItemOpen"
    };
  }
  constructor(options, metadata = SwipeActionsItemOpen.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.position = this.__props__.position;
    delete this.__props__;
  }
}
class SwipeActionsItemClose extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: "Unknown", optional: true }
        };
      },
      name: "SwipeActionsItemClose"
    };
  }
  constructor(options, metadata = SwipeActionsItemClose.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    delete this.__props__;
  }
}
class SwipeActionsItemProps extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: "Unknown", optional: true },
          leftMenu: { type: common_vendor.UTS.UTSType.withGenerics(Array, [SwipeActionsMenu]), optional: true },
          rightMenu: { type: common_vendor.UTS.UTSType.withGenerics(Array, [SwipeActionsMenu]), optional: true },
          iosStyle: { type: Boolean, optional: true },
          disabled: { type: Boolean, optional: true },
          duration: { type: Number, optional: true },
          autoClose: { type: Boolean, optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "SwipeActionsItemProps"
    };
  }
  constructor(options, metadata = SwipeActionsItemProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.leftMenu = this.__props__.leftMenu;
    this.rightMenu = this.__props__.rightMenu;
    this.iosStyle = this.__props__.iosStyle;
    this.disabled = this.__props__.disabled;
    this.duration = this.__props__.duration;
    this.autoClose = this.__props__.autoClose;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
exports.SwipeActionsItemClick = SwipeActionsItemClick;
exports.SwipeActionsItemClose = SwipeActionsItemClose;
exports.SwipeActionsItemOpen = SwipeActionsItemOpen;
exports.SwipeActionsMenu = SwipeActionsMenu;
exports.SwipeActionsState = SwipeActionsState;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-swipe-actions-item/type.js.map
