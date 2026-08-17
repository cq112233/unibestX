class UPFormRuleItem extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          trigger: { type: "Unknown", optional: true },
          key: { type: "Any", optional: true },
          required: { type: Boolean, optional: true },
          min: { type: Number, optional: true },
          max: { type: Number, optional: true },
          message: { type: String, optional: true },
          type: { type: String, optional: true },
          len: { type: Number, optional: true },
          pattern: { type: "Any", optional: true },
          enum: { type: UTS.UTSType.withGenerics(Array, [String]), optional: true },
          whitespace: { type: Boolean, optional: true },
          validator: { type: "Any", optional: true },
          asyncValidator: { type: "Any", optional: true },
          field: { type: String, optional: true },
          fullField: { type: String, optional: true },
          transform: { type: "Any", optional: true }
        };
      },
      name: "UPFormRuleItem"
    };
  }
  constructor(options, metadata = UPFormRuleItem.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.trigger = this.__props__.trigger;
    this.key = this.__props__.key;
    this.required = this.__props__.required;
    this.min = this.__props__.min;
    this.max = this.__props__.max;
    this.message = this.__props__.message;
    this.type = this.__props__.type;
    this.len = this.__props__.len;
    this.pattern = this.__props__.pattern;
    this.enum = this.__props__.enum;
    this.whitespace = this.__props__.whitespace;
    this.validator = this.__props__.validator;
    this.asyncValidator = this.__props__.asyncValidator;
    this.field = this.__props__.field;
    this.fullField = this.__props__.fullField;
    this.transform = this.__props__.transform;
    delete this.__props__;
  }
}
//# sourceMappingURL=types.js.map
