const { defineComponent, getCurrentInstance, ref, computed, watch, openBlock, createElementBlock, renderSlot } = globalThis.Vue
import { d as defProps } from "./form.js";
import { S as Schema } from "../../libs/util/async-validator.js";
import { m as deepClone, k as getProperty, l as setProperty, t as toast } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import "./types.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
class UPFormRules extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          key: { type: "Unknown", optional: false }
        };
      },
      name: "UPFormRules"
    };
  }
  constructor(options, metadata = UPFormRules.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.key = this.__props__.key;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-form"
  },
  __name: "up-form",
  props: {
    // 当前form的需要验证字段的集合
    model: {
      type: Object,
      default: defProps.getArray("form.model")
    },
    // 验证规则
    rules: {
      type: Object,
      default: defProps.getArray("form.rules")
    },
    // 有错误时的提示方式，message-提示信息，toast-进行toast提示
    // border-bottom-下边框呈现红色，none-无提示
    errorType: {
      type: String,
      default: defProps.getString("form.errorType")
    },
    // 是否显示表单域的下划线边框
    borderBottom: {
      type: Boolean,
      default: defProps.getBoolean("form.borderBottom")
    },
    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: defProps.getString("form.labelPosition")
    },
    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: defProps.getNumber("form.labelWidth")
    },
    // lable字体的对齐方式
    labelAlign: {
      type: String,
      default: defProps.getString("form.labelAlign")
    },
    // lable的样式，对象形式
    labelStyle: {
      type: Object,
      default: defProps.getArray("form.labelStyle")
    }
  },
  emits: [],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const _b = useUltraUI(), children = _b.children, getChildren = _b.getChildren, addChild = _b.addChild;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const formRules = ref(new UTSJSONObject({}));
    const validator = ref(new Schema(new UTSJSONObject({})));
    const originalModel = ref(null);
    const propsChange = computed(() => {
      return [
        props.errorType,
        props.borderBottom,
        props.labelPosition,
        props.labelWidth,
        props.labelAlign,
        props.labelStyle
      ];
    });
    const setRules = (rules) => {
      if (rules == null)
        return null;
      formRules.value = rules;
      validator.value = new Schema(formRules.value);
    };
    function resetModel(obj = null) {
      children.value.map((child) => {
        const prop = child.$props["prop"].toString();
        const value = getProperty(originalModel.value, prop);
        try {
          setProperty(props.model, prop, value);
        } catch (e) {
          uni.__f__("error", "at uni_modules/uview-ultra/components/up-form/up-form.uvue:115", "resetModel error", e);
        }
      });
    }
    function clearValidate(propsParam = null) {
      const propsList = propsParam == null ? [] : propsParam;
      children.value.map((child) => {
        const prop = child.$props["prop"].toString();
        if (propsList.length == 0 || propsList.includes(prop)) {
          child.$callMethod("setMessage", "");
        }
      });
    }
    const resetFields = () => {
      resetModel();
      clearValidate();
    };
    function validateField(value, callback = null, event = null) {
      return new Promise((resolve, reject) => {
        const errorsRes = [];
        const validateProps = [];
        const modelSnapshot = UTS.JSON.parse(UTS.JSON.stringify(props.model));
        if (Array.isArray(value)) {
          value.forEach((propItem) => {
            validateProps.push(propItem);
          });
        } else {
          validateProps.push(value);
        }
        let promises = children.value.map((child) => {
          return new Promise((resolveChild) => {
            const childErrors = [];
            let childProps = child.$callMethod("getProps");
            child.$callMethod("getRefs");
            if (validateProps.includes(childProps["prop"].toString())) {
              const propertyVal = getProperty(modelSnapshot, childProps["prop"].toString());
              const propertyChain = childProps["prop"].toString().split(".");
              const propertyName = propertyChain[propertyChain.length - 1];
              let rule = [];
              let tmp = formRules.value[childProps["prop"].toString()];
              if (tmp == null && props.rules != null) {
                tmp = props.rules[childProps["prop"].toString()];
              }
              if (Array.isArray(tmp)) {
                rule = tmp;
              } else {
                if (tmp != null) {
                  rule.push(tmp);
                }
              }
              if (rule == null || rule.length == 0) {
                uni.__f__("log", "at uni_modules/uview-ultra/components/up-form/up-form.uvue:191", "rule-miss", childProps["prop"].toString(), UTSJSONObject.keys(formRules.value));
                resolveChild([]);
                return null;
              }
              let rules = [];
              rules = rule;
              let executeRuleCount = 0;
              let completeRuleCount = 0;
              let childResolved = false;
              const finishChild = () => {
                if (childResolved)
                  return null;
                if (completeRuleCount < executeRuleCount)
                  return null;
                if (childErrors.length > 0) {
                  const msg = childErrors[0]["message"];
                  const childMsg = msg == null ? "" : msg.toString();
                  child.$callMethod("setMessage", childMsg);
                } else {
                  child.$callMethod("setMessage", "");
                }
                childResolved = true;
                resolveChild(errorsRes);
              };
              for (let i = 0; i < rules.length; i++) {
                const ruleItem = rules[i];
                if (ruleItem == null) {
                  continue;
                }
                const normalizedRule = new UTSJSONObject({});
                if (ruleItem["type"] != null) {
                  normalizedRule.type = ruleItem["type"].toString();
                }
                if (ruleItem["required"] != null) {
                  normalizedRule.required = ruleItem["required"];
                }
                if (ruleItem["min"] != null) {
                  normalizedRule.min = parseFloat(ruleItem["min"].toString());
                }
                if (ruleItem["max"] != null) {
                  normalizedRule.max = parseFloat(ruleItem["max"].toString());
                }
                if (ruleItem["len"] != null) {
                  normalizedRule.len = parseFloat(ruleItem["len"].toString());
                }
                if (ruleItem["message"] != null) {
                  normalizedRule.message = ruleItem["message"].toString();
                }
                if (ruleItem["enum"] != null && Array.isArray(ruleItem["enum"])) {
                  const enumList = [];
                  const rawEnum = ruleItem["enum"];
                  for (let j = 0; j < rawEnum.length; j++) {
                    enumList.push(rawEnum[j].toString());
                  }
                  normalizedRule.enum = enumList;
                }
                if (ruleItem["whitespace"] != null) {
                  normalizedRule.whitespace = ruleItem["whitespace"];
                }
                if (ruleItem["pattern"] != null) {
                  normalizedRule.pattern = ruleItem["pattern"];
                }
                if (ruleItem["validator"] != null) {
                  normalizedRule.validator = ruleItem["validator"];
                }
                if (ruleItem["asyncValidator"] != null) {
                  normalizedRule.asyncValidator = ruleItem["asyncValidator"];
                }
                if (ruleItem["transform"] != null) {
                  normalizedRule.transform = ruleItem["transform"];
                }
                let trigger = [];
                if (ruleItem["trigger"] != null) {
                  const triggerVal = ruleItem["trigger"];
                  if (Array.isArray(triggerVal)) {
                    const triggerList = triggerVal;
                    for (let j = 0; j < triggerList.length; j++) {
                      trigger.push(triggerList[j].toString());
                    }
                    normalizedRule.trigger = trigger;
                  } else {
                    trigger.push(triggerVal.toString());
                    normalizedRule.trigger = triggerVal.toString();
                  }
                }
                if (event != null && trigger.length > 0 && !trigger.includes(event)) {
                  continue;
                }
                executeRuleCount += 1;
                const validator_1 = new Schema(new UTSJSONObject({
                  [propertyName]: normalizedRule
                }));
                uni.__f__("log", "at uni_modules/uview-ultra/components/up-form/up-form.uvue:288", "rule-debug", childProps["prop"].toString(), UTS.JSON.stringify(normalizedRule), propertyVal);
                try {
                  let finishRule = function(ruleErrors = null) {
                    if (settled)
                      return null;
                    settled = true;
                    if (ruleErrors != null && ruleErrors.length > 0) {
                      ruleErrors.forEach((element) => {
                        element["prop"] = childProps["prop"];
                      });
                      ruleErrors.forEach((element) => {
                        errorsRes.push(element);
                        childErrors.push(element);
                      });
                    }
                    completeRuleCount += 1;
                    finishChild();
                  };
                  let settled = false;
                  const validateRet = validator_1.validate(new UTSJSONObject({
                    [propertyName]: propertyVal
                  }), new UTSJSONObject({}), (errors = null, fields = null) => {
                    uni.__f__("log", "at uni_modules/uview-ultra/components/up-form/up-form.uvue:311", "rule-errors", childProps["prop"].toString(), errors);
                    finishRule(errors);
                  });
                  validateRet.then((res = null) => {
                    finishRule([]);
                  }, (err = null) => {
                    let ruleErrors = [];
                    if (err != null) {
                      try {
                        const errObj = err;
                        const errsVal = errObj["errors"];
                        if (errsVal != null && Array.isArray(errsVal)) {
                          ruleErrors = errsVal;
                        }
                      } catch (e) {
                      }
                    }
                    finishRule(ruleErrors);
                  });
                } catch (e) {
                  completeRuleCount += 1;
                  finishChild();
                }
              }
              if (executeRuleCount == 0) {
                child.$callMethod("setMessage", "");
                resolveChild([]);
              }
            } else {
              resolveChild([]);
            }
          });
        });
        Promise.all(promises).then((results = null) => {
          uni.__f__("log", "at uni_modules/uview-ultra/components/up-form/up-form.uvue:352", "errors", errorsRes.length);
          if (callback != null) {
            callback(errorsRes);
          }
          resolve(errorsRes);
        });
      });
    }
    const validate = () => {
      if (UTSJSONObject.keys(formRules.value).length == 0) {
        uni.__f__("error", "at uni_modules/uview-ultra/components/up-form/up-form.uvue:370", "未设置rules，请看文档说明！如果已经设置，请刷新页面。");
        return new Promise((resolve, reject) => {
          reject(new UTSJSONObject({}));
        });
      }
      return new Promise((resolve, reject) => {
        const formItemProps = children.value.map((item) => {
          const props2 = item.$callMethod("getProps");
          return props2 != null ? props2["prop"].toString() : "";
        });
        uni.__f__("log", "at uni_modules/uview-ultra/components/up-form/up-form.uvue:385", "formItemProps", formItemProps);
        let func = function(errors) {
          if (errors.length > 0) {
            if (props.errorType == "toast" && errors[0] != null)
              toast(errors[0]["message"].toString());
            uni.__f__("log", "at uni_modules/uview-ultra/components/up-form/up-form.uvue:390", "errors", errors.length);
            reject(errors);
          } else {
            resolve(true);
          }
        };
        validateField(formItemProps, func);
      });
    };
    watch(() => {
      return props.rules;
    }, (newVal) => {
      setRules(newVal);
    }, { immediate: true });
    watch(() => {
      return propsChange.value;
    }, () => {
      if (children.value.length > 0) {
        children.value.forEach((child) => {
          child.$callMethod("updateParentData");
        });
      }
    });
    watch(() => {
      return props.model;
    }, (newVal = null) => {
      if (originalModel.value == null) {
        originalModel.value = deepClone(newVal);
      }
    }, { immediate: true });
    const getProps = function() {
      return new UTSJSONObject({
        labelPosition: props.labelPosition,
        labelAlign: props.labelAlign,
        labelStyle: props.labelStyle,
        labelWidth: props.labelWidth,
        errorType: props.errorType
      });
    };
    const getRefs = function() {
      return new UTSJSONObject({
        originalModel: originalModel.value == null ? new UTSJSONObject({}) : originalModel.value
      });
    };
    const setOriginalModel = function(prop, value = null) {
      if (originalModel.value == null) {
        originalModel.value = new UTSJSONObject({});
      }
      originalModel.value[prop] = value;
    };
    __expose({
      setOriginalModel,
      getChildren,
      addChild,
      getProps,
      getRefs,
      validate,
      clearValidate,
      validateField,
      resetFields,
      setRules
    });
    const __returned__ = { children, getChildren, addChild, instance, props, emit, formRules, validator, originalModel, propsChange, setRules, resetModel, clearValidate, resetFields, validateField, validate, getProps, getRefs, setOriginalModel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-form" }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __easycom_14 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-form/up-form.uvue"]]);
export {
  __easycom_14 as _
};
//# sourceMappingURL=up-form.js.map
