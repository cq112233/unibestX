import "../../components/up-form/types.js";
function createError(field, message) {
  return new UTSJSONObject({
    field,
    message
  });
}
function createMessages() {
  return new UTSJSONObject({
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    types: new UTSJSONObject({
      string: "%s is not a %s",
      number: "%s is not a %s",
      boolean: "%s is not a %s",
      array: "%s is not an %s",
      object: "%s is not an %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    }),
    string: new UTSJSONObject({
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    }),
    number: new UTSJSONObject({
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    }),
    array: new UTSJSONObject({
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    }),
    pattern: new UTSJSONObject({
      mismatch: "%s value %s does not match pattern %s"
    })
  });
}
function formatMessage(template = null, a = null, b = null, c = null) {
  let msg = typeof template == "string" ? template : template == null ? "" : template.toString();
  return msg;
}
function toFieldErrors(errors = null) {
  if (errors == null || errors.length == 0)
    return null;
  const fields = new UTSJSONObject({});
  errors.forEach((e) => {
    const f = e["field"].toString();
    let ff = [];
    const existed = fields[f];
    if (existed != null && Array.isArray(existed)) {
      ff = existed;
    }
    ff.push(e);
    fields[f] = ff;
  });
  return fields;
}
function isEmpty(value = null, type) {
  if (value == null)
    return true;
  if (type == "array" && Array.isArray(value) && value.length == 0)
    return true;
  if ((type == "string" || type == "email" || type == "url" || type == "hex" || type == "pattern") && typeof value == "string" && value.length == 0)
    return true;
  return false;
}
function getValue(source, field) {
  if (field.indexOf(".") == -1)
    return source[field];
  const chain = field.split(".");
  let cur = source;
  for (let i = 0; i < chain.length; i++) {
    if (cur == null)
      return null;
    cur = cur[chain[i]];
  }
  return cur;
}
function hasValue(source, field) {
  if (field.indexOf(".") == -1)
    return UTSJSONObject.keys(source).includes(field);
  const chain = field.split(".");
  for (let i = 0; i < chain.length; i++) {
  }
  return true;
}
function checkType(type, value = null) {
  switch (type) {
    case "string":
      return typeof value == "string";
    case "number":
      return typeof value == "number" || typeof value == "string" && value.length > 0 && !isNaN(parseFloat(value));
    case "boolean":
      return typeof value == "boolean";
    case "array":
      return Array.isArray(value);
    case "object":
      return value != null && typeof value == "object" && !Array.isArray(value) && !UTS.isInstanceOf(value, Date);
    case "integer":
      return typeof value == "number" ? Math.floor(value) == value : /^(-)?\d+$/.test(value.toString() + "");
    case "float":
      return typeof value == "number" ? true : /^(-)?\d+(\.\d+)?$/.test(value.toString() + "");
    case "email":
      return typeof value == "string" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    case "url":
      return typeof value == "string" && /^(?!mailto:)(?:(?:http|https|ftp):\/\/|\/\/)/i.test(value.toString());
    case "hex":
      return typeof value == "string" && /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(value);
    case "pattern":
      return true;
    default:
      return true;
  }
}
const customValidators = new UTSJSONObject({});
class Schema {
  constructor(rules) {
    this.rules = new UTSJSONObject({});
    this._messages = createMessages();
    if (typeof rules != "object" || Array.isArray(rules))
      throw new Error("Rules must be an object");
    UTSJSONObject.keys(rules).forEach((k) => {
      const item = rules[k];
      this.rules[k] = Array.isArray(item) ? item : [item];
    });
  }
  messages(custom = null) {
    if (custom != null) {
      this._messages = UTSJSONObject.assign(createMessages(), custom);
    }
    return this._messages;
  }
  getType(rule) {
    if (rule.type == null && UTS.isInstanceOf(rule.pattern, RegExp))
      return "pattern";
    return rule.type != null ? rule.type : "string";
  }
  getValidationMethod(rule) {
    if (typeof rule.validator == "function")
      return rule.validator;
    const t = this.getType(rule);
    const v = customValidators[t];
    return typeof v == "function" ? v : null;
  }
  execBuiltIn(rule, value = null, source, field, options) {
    const errors = [];
    const messages = options["messages"] != null ? options["messages"] : this._messages;
    const type = this.getType(rule);
    if (rule.required == true && (!hasValue(source, field) || isEmpty(value, type))) {
      errors.push(createError(field, rule.message != null ? rule.message : formatMessage(messages.required, field)));
      return errors;
    }
    if (isEmpty(value, type))
      return errors;
    if (!checkType(type, value)) {
      let types = messages["types"];
      errors.push(createError(field, rule.message != null ? rule.message : formatMessage(types[type], field, type)));
      return errors;
    }
    const len = rule.len;
    const min = rule.min;
    const max = rule.max;
    if (len != null || min != null || max != null) {
      if (type == "number" || type == "integer" || type == "float") {
        const cur = parseFloat(value.toString());
        const nm = messages["number"];
        if (len != null && cur != len)
          errors.push(createError(field, rule.message != null ? rule.message : formatMessage(nm["len"], field, len)));
        if (min != null && max != null && (cur < min || cur > max))
          errors.push(createError(field, rule.message != null ? rule.message : formatMessage(nm["range"], field, min, max)));
        if (min != null && max == null && cur < min)
          errors.push(createError(field, rule.message != null ? rule.message : formatMessage(nm["min"], field, min)));
        if (max != null && min == null && cur > max)
          errors.push(createError(field, rule.message != null ? rule.message : formatMessage(nm["max"], field, max)));
      } else {
        const cur = Array.isArray(value) ? value.length : (value.toString() + "").length;
        const rm = type == "array" ? messages.array : messages.string;
        if (len != null && cur != len)
          errors.push(createError(field, rule.message != null ? rule.message : formatMessage(rm["len"], field, len)));
        if (min != null && max != null && (cur < min || cur > max))
          errors.push(createError(field, rule.message != null ? rule.message : formatMessage(rm["range"], field, min, max)));
        if (min != null && max == null && cur < min)
          errors.push(createError(field, rule.message != null ? rule.message : formatMessage(rm["min"], field, min)));
        if (max != null && min == null && cur > max)
          errors.push(createError(field, rule.message != null ? rule.message : formatMessage(rm["max"], field, max)));
      }
    }
    if (rule.enum != null && Array.isArray(rule.enum) && rule.enum.indexOf(value) == -1) {
      errors.push(createError(field, rule.message != null ? rule.message : formatMessage(messages.enum, field, rule.enum.join(", "))));
    }
    if (rule.whitespace != null && rule.whitespace == true && typeof value == "string" && value.trim().length == 0) {
      errors.push(createError(field, rule.message != null ? rule.message : formatMessage(messages.whitespace, field)));
    }
    return errors;
  }
  executeRule(rule, value = null, source, options, field) {
    return new Promise((resolve) => {
      const builtIn = this.execBuiltIn(rule, value, source, field, options);
      if (builtIn.length > 0) {
        resolve(builtIn);
        return null;
      }
      let asyncValidator = rule.asyncValidator;
      const validator = this.getValidationMethod(rule);
      const exec = asyncValidator != null ? asyncValidator : validator;
      if (typeof exec != "function") {
        resolve([]);
        return null;
      }
      let doneCalled = false;
      function done(errs = null) {
        if (doneCalled)
          return null;
        doneCalled = true;
        if (errs == null) {
          resolve([]);
          return null;
        }
        if (Array.isArray(errs)) {
          resolve(errs.map((e) => {
            return typeof e == "string" ? createError(field, e.toString()) : e["message"] != null ? e : createError(field, e.toString() + "");
          }));
          return null;
        }
        if (typeof errs == "string") {
          resolve([createError(field, errs)]);
          return null;
        }
        if (UTS.isInstanceOf(errs, Error)) {
          resolve([createError(field, errs.message)]);
          return null;
        }
        resolve([]);
      }
      done();
    });
  }
  validate(source, options = null, callback = null) {
    let validateOptions = new UTSJSONObject({});
    let cb = callback;
    if (options != null)
      validateOptions = options;
    validateOptions["messages"] = validateOptions["messages"] != null ? validateOptions["messages"] : this.messages();
    if (this.rules == null || UTSJSONObject.keys(this.rules).length == 0) {
      if (cb != null)
        cb(null, null);
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
      const errors = [];
      const keys = validateOptions["keys"] != null ? validateOptions["keys"] : UTSJSONObject.keys(this.rules);
      const schema = this;
      function runValidate(fieldIndex, ruleIndex) {
        if (fieldIndex >= keys.length) {
          const finalErrors = errors.length > 0 ? errors : null;
          const fields = toFieldErrors(finalErrors);
          if (cb != null)
            cb(finalErrors, fields);
          if (finalErrors != null)
            reject(new UTSJSONObject({ errors: finalErrors, fields }));
          else
            resolve(null);
          return null;
        }
        const field = keys[fieldIndex];
        let tmp = schema.rules[field];
        const list = tmp != null ? tmp : [];
        if (ruleIndex >= list.length) {
          runValidate(fieldIndex + 1, 0);
          return null;
        }
        let rule = list[ruleIndex];
        rule.field = field;
        rule.fullField = rule.fullField != null ? rule.fullField : field;
        rule.type = schema.getType(rule);
        const transformVal = rule.transform;
        if (transformVal != null && typeof transformVal == "function") {
          const transformFn = transformVal;
          source[field] = transformFn(getValue(source, field));
        }
        const value = getValue(source, field);
        schema.executeRule(rule, value, source, validateOptions, field).then((es) => {
          if (es.length > 0) {
            errors.push(...es);
            const firstVal = validateOptions["first"];
            if (firstVal != null && typeof firstVal == "boolean" && firstVal == true) {
              const fields = toFieldErrors(errors);
              if (cb != null)
                cb(errors, fields);
              reject(new UTSJSONObject({ errors, fields }));
              return null;
            }
          }
          runValidate(fieldIndex, ruleIndex + 1);
        });
      }
      runValidate(0, 0);
    });
  }
  static register(type, validator = null) {
    if (typeof validator != "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    customValidators[type] = validator;
  }
  static warning(type, errors) {
    uni.__f__("warn", "at uni_modules/uview-ultra/libs/util/async-validator.uts:413", type, errors);
  }
}
export {
  Schema as S
};
//# sourceMappingURL=async-validator.js.map
