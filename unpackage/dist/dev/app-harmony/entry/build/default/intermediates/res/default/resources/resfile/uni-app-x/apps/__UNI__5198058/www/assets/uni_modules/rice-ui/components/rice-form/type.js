import "../rice-form-item/index.js";
class FormItemContextProvide extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          formItems: { type: "Unknown", optional: false },
          addField: { type: "Unknown", optional: false },
          removeField: { type: "Unknown", optional: false }
        };
      },
      name: "FormItemContextProvide"
    };
  }
  constructor(options, metadata = FormItemContextProvide.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.formItems = this.__props__.formItems;
    this.addField = this.__props__.addField;
    this.removeField = this.__props__.removeField;
    delete this.__props__;
  }
}
class FormItemContext extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: true },
          validate: { type: "Unknown", optional: false },
          clearValidate: { type: "Unknown", optional: false },
          scrollToField: { type: "Unknown", optional: false }
        };
      },
      name: "FormItemContext"
    };
  }
  constructor(options, metadata = FormItemContext.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.validate = this.__props__.validate;
    this.clearValidate = this.__props__.clearValidate;
    this.scrollToField = this.__props__.scrollToField;
    delete this.__props__;
  }
}
class FormRules extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          required: { type: Boolean, optional: true },
          message: { type: String, optional: true },
          trigger: { type: "Unknown", optional: true },
          min: { type: Number, optional: true },
          max: { type: Number, optional: true },
          pattern: { type: "Unknown", optional: true },
          validator: { type: "Unknown", optional: true }
        };
      },
      name: "FormRules"
    };
  }
  constructor(options, metadata = FormRules.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.required = this.__props__.required;
    this.message = this.__props__.message;
    this.trigger = this.__props__.trigger;
    this.min = this.__props__.min;
    this.max = this.__props__.max;
    this.pattern = this.__props__.pattern;
    this.validator = this.__props__.validator;
    delete this.__props__;
  }
}
class FormValidateErrors extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          name: { type: String, optional: false },
          rule: { type: FormRules, optional: false },
          message: { type: String, optional: false },
          label: { type: String, optional: true }
        };
      },
      name: "FormValidateErrors"
    };
  }
  constructor(options, metadata = FormValidateErrors.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.name = this.__props__.name;
    this.rule = this.__props__.rule;
    this.message = this.__props__.message;
    this.label = this.__props__.label;
    delete this.__props__;
  }
}
class FormProps extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          model: { type: "Any", optional: true },
          rules: { type: "Unknown", optional: true },
          labelWidth: { type: "Unknown", optional: true },
          labelPosition: { type: "Unknown", optional: true },
          labelStyle: { type: "Unknown", optional: true },
          showRequired: { type: Boolean, optional: true },
          requiredPosition: { type: "Unknown", optional: true },
          showError: { type: Boolean, optional: true },
          borderBottom: { type: Boolean, optional: true },
          errorBottom: { type: Boolean, optional: true },
          scrollToError: { type: Boolean, optional: true },
          disabled: { type: Boolean, optional: true },
          readonly: { type: Boolean, optional: true },
          errorStyle: { type: "Unknown", optional: true },
          customStyle: { type: "Unknown", optional: true }
        };
      },
      name: "FormProps"
    };
  }
  constructor(options, metadata = FormProps.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.model = this.__props__.model;
    this.rules = this.__props__.rules;
    this.labelWidth = this.__props__.labelWidth;
    this.labelPosition = this.__props__.labelPosition;
    this.labelStyle = this.__props__.labelStyle;
    this.showRequired = this.__props__.showRequired;
    this.requiredPosition = this.__props__.requiredPosition;
    this.showError = this.__props__.showError;
    this.borderBottom = this.__props__.borderBottom;
    this.errorBottom = this.__props__.errorBottom;
    this.scrollToError = this.__props__.scrollToError;
    this.disabled = this.__props__.disabled;
    this.readonly = this.__props__.readonly;
    this.errorStyle = this.__props__.errorStyle;
    this.customStyle = this.__props__.customStyle;
    delete this.__props__;
  }
}
export {
  FormRules as F,
  FormItemContext as a,
  FormItemContextProvide as b,
  FormValidateErrors as c
};
//# sourceMappingURL=type.js.map
