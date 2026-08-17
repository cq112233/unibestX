new UTSJSONObject({
  lang: String,
  sessionFrom: new UTSJSONObject({
    type: String,
    default: "test"
  }),
  sendMessageTitle: String,
  sendMessagePath: String,
  sendMessageImg: String,
  showMessageCard: Boolean,
  appParameter: String,
  formType: String,
  openType: String
});
class buttonPropsType extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          lang: { type: String, optional: false },
          sessionFrom: { type: String, optional: false },
          sendMessageTitle: { type: String, optional: false },
          sendMessagePath: { type: String, optional: false },
          sendMessageImg: { type: String, optional: false },
          showMessageCard: { type: Boolean, optional: false },
          appParameter: { type: String, optional: false },
          formType: { type: String, optional: false },
          openType: { type: String, optional: false }
        };
      },
      name: "buttonPropsType"
    };
  }
  constructor(options, metadata = buttonPropsType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.lang = this.__props__.lang;
    this.sessionFrom = this.__props__.sessionFrom;
    this.sendMessageTitle = this.__props__.sendMessageTitle;
    this.sendMessagePath = this.__props__.sendMessagePath;
    this.sendMessageImg = this.__props__.sendMessageImg;
    this.showMessageCard = this.__props__.showMessageCard;
    this.appParameter = this.__props__.appParameter;
    this.formType = this.__props__.formType;
    this.openType = this.__props__.openType;
    delete this.__props__;
  }
}
new UTSJSONObject({
  lang: "",
  sessionFrom: "",
  sendMessageTitle: "",
  sendMessagePath: "",
  sendMessageImg: "",
  showMessageCard: false,
  appParameter: "",
  formType: "",
  openType: ""
});
//# sourceMappingURL=useButton.js.map
