class CustomTabBarItem extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          text: { type: String, optional: false },
          pagePath: { type: String, optional: false },
          iconType: { type: String, optional: false },
          icon: { type: String, optional: false },
          iconActive: { type: String, optional: false },
          iconPath: { type: String, optional: true },
          selectedIconPath: { type: String, optional: true },
          badge: { type: "Unknown", optional: true },
          isBulge: { type: Boolean, optional: false }
        };
      }
    };
  }
  constructor(options, metadata = CustomTabBarItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.text = this.__props__.text;
    this.pagePath = this.__props__.pagePath;
    this.iconType = this.__props__.iconType;
    this.icon = this.__props__.icon;
    this.iconActive = this.__props__.iconActive;
    this.iconPath = this.__props__.iconPath;
    this.selectedIconPath = this.__props__.selectedIconPath;
    this.badge = this.__props__.badge;
    this.isBulge = this.__props__.isBulge;
    delete this.__props__;
  }
}
class TabBarMidButtonIconfont extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          text: { type: String, optional: true },
          selectedText: { type: String, optional: true },
          fontSize: { type: String, optional: true },
          color: { type: String, optional: true },
          selectedColor: { type: String, optional: true }
        };
      }
    };
  }
  constructor(options, metadata = TabBarMidButtonIconfont.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.text = this.__props__.text;
    this.selectedText = this.__props__.selectedText;
    this.fontSize = this.__props__.fontSize;
    this.color = this.__props__.color;
    this.selectedColor = this.__props__.selectedColor;
    delete this.__props__;
  }
}
class TabBarMidButton extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          width: { type: String, optional: true },
          height: { type: String, optional: true },
          text: { type: String, optional: true },
          iconPath: { type: String, optional: true },
          iconWidth: { type: String, optional: true },
          backgroundImage: { type: String, optional: true },
          iconfont: { type: TabBarMidButtonIconfont, optional: true },
          pagePath: { type: String, optional: true },
          iconType: { type: String, optional: true },
          icon: { type: String, optional: true },
          iconActive: { type: String, optional: true },
          selectedIconPath: { type: String, optional: true },
          badge: { type: "Unknown", optional: true },
          isBulge: { type: Boolean, optional: true }
        };
      }
    };
  }
  constructor(options, metadata = TabBarMidButton.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.width = this.__props__.width;
    this.height = this.__props__.height;
    this.text = this.__props__.text;
    this.iconPath = this.__props__.iconPath;
    this.iconWidth = this.__props__.iconWidth;
    this.backgroundImage = this.__props__.backgroundImage;
    this.iconfont = this.__props__.iconfont;
    this.pagePath = this.__props__.pagePath;
    this.iconType = this.__props__.iconType;
    this.icon = this.__props__.icon;
    this.iconActive = this.__props__.iconActive;
    this.selectedIconPath = this.__props__.selectedIconPath;
    this.badge = this.__props__.badge;
    this.isBulge = this.__props__.isBulge;
    delete this.__props__;
  }
}
class TabBarConfig extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          type: { type: String, optional: true },
          color: { type: String, optional: true },
          selectedColor: { type: String, optional: true },
          backgroundColor: { type: String, optional: true },
          borderStyle: { type: String, optional: true },
          borderColor: { type: String, optional: true },
          blurEffect: { type: String, optional: true },
          glassEffect: { type: Boolean, optional: true },
          position: { type: String, optional: true },
          fontSize: { type: String, optional: true },
          iconWidth: { type: String, optional: true },
          spacing: { type: String, optional: true },
          height: { type: String, optional: true },
          midButton: { type: TabBarMidButton, optional: true },
          midButton1: { type: TabBarMidButton, optional: true },
          iconfontSrc: { type: String, optional: true },
          backgroundImage: { type: String, optional: true },
          backgroundRepeat: { type: String, optional: true },
          redDotColor: { type: String, optional: true },
          list: { type: UTS.UTSType.withGenerics(Array, [CustomTabBarItem]), optional: false }
        };
      }
    };
  }
  constructor(options, metadata = TabBarConfig.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.type = this.__props__.type;
    this.color = this.__props__.color;
    this.selectedColor = this.__props__.selectedColor;
    this.backgroundColor = this.__props__.backgroundColor;
    this.borderStyle = this.__props__.borderStyle;
    this.borderColor = this.__props__.borderColor;
    this.blurEffect = this.__props__.blurEffect;
    this.glassEffect = this.__props__.glassEffect;
    this.position = this.__props__.position;
    this.fontSize = this.__props__.fontSize;
    this.iconWidth = this.__props__.iconWidth;
    this.spacing = this.__props__.spacing;
    this.height = this.__props__.height;
    this.midButton = this.__props__.midButton;
    this.midButton1 = this.__props__.midButton1;
    this.iconfontSrc = this.__props__.iconfontSrc;
    this.backgroundImage = this.__props__.backgroundImage;
    this.backgroundRepeat = this.__props__.backgroundRepeat;
    this.redDotColor = this.__props__.redDotColor;
    this.list = this.__props__.list;
    delete this.__props__;
  }
}
export {
  CustomTabBarItem as C,
  TabBarConfig as T
};
