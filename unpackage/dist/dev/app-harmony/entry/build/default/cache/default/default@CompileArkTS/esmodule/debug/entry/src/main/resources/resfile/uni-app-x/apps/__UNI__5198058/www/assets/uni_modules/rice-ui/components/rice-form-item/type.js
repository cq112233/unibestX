import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-form/index&";
class FormItemState extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: true },
          label: { type: String, optional: true },
          status: { type: "Unknown", optional: false },
          validateMessage: { type: String, optional: false },
          rule: { type: "Unknown", optional: true }
        };
      },
      name: "FormItemState"
    };
  }
  constructor(options, metadata = FormItemState.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.label = this.__props__.label;
    this.status = this.__props__.status;
    this.validateMessage = this.__props__.validateMessage;
    this.rule = this.__props__.rule;
    delete this.__props__;
  }
}
class FormItemProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: true },
          label: { type: String, optional: true },
          labelWidth: { type: "Unknown", optional: true },
          labelPosition: { type: "Unknown", optional: true },
          labelStyle: { type: "Unknown", optional: true },
          rules: { type: UTS.UTSType.withGenerics(Array, ["Unknown"]), optional: true },
          required: { type: Boolean, optional: true },
          showRequired: { type: Boolean, optional: true },
          requiredPosition: { type: "Unknown", optional: true },
          showError: { type: Boolean, optional: true },
          suffixIcon: { type: String, optional: true },
          suffixIconStyle: { type: "Unknown", optional: true },
          borderBottom: { type: Boolean, optional: true },
          errorBottom: { type: Boolean, optional: true },
          contentStyle: { type: "Unknown", optional: true },
          errorStyle: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "FormItemProps"
    };
  }
  constructor(options, metadata = FormItemProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.label = this.__props__.label;
    this.labelWidth = this.__props__.labelWidth;
    this.labelPosition = this.__props__.labelPosition;
    this.labelStyle = this.__props__.labelStyle;
    this.rules = this.__props__.rules;
    this.required = this.__props__.required;
    this.showRequired = this.__props__.showRequired;
    this.requiredPosition = this.__props__.requiredPosition;
    this.showError = this.__props__.showError;
    this.suffixIcon = this.__props__.suffixIcon;
    this.suffixIconStyle = this.__props__.suffixIconStyle;
    this.borderBottom = this.__props__.borderBottom;
    this.errorBottom = this.__props__.errorBottom;
    this.contentStyle = this.__props__.contentStyle;
    this.errorStyle = this.__props__.errorStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
export {
  FormItemState as F
};
//# sourceMappingURL=type.js.map
