import { _ as __easycom_0 } from "../../../../uni_modules/uview-ultra/components/up-input/up-input.js";
const { defineComponent, ref, reactive, resolveDynamicComponent, openBlock, createElementBlock, createCommentVNode, createElementVNode, createVNode, withCtx, toDisplayString, normalizeClass } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../uni_modules/uview-ultra/components/up-search/up-search.js";
import { _ as __easycom_2 } from "../../../../uni_modules/uview-ultra/components/up-switch/up-switch.js";
import { _ as __easycom_3 } from "../../../../uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js";
import { _ as __easycom_4 } from "../../../../uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js";
import { _ as __easycom_5 } from "../../../../uni_modules/uview-ultra/components/up-radio/up-radio.js";
import { _ as __easycom_6 } from "../../../../uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js";
import { _ as __easycom_7 } from "../../../../uni_modules/uview-ultra/components/up-slider/up-slider.js";
import { _ as __easycom_8 } from "../../../../uni_modules/uview-ultra/components/up-rate/up-rate.js";
import { _ as __easycom_9 } from "../../../../uni_modules/uview-ultra/components/up-number-box/up-number-box.js";
import { _ as __easycom_10 } from "../../../../uni_modules/uview-ultra/components/up-form-item/up-form-item.js";
import { _ as __easycom_2$1 } from "../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { _ as __easycom_12 } from "../../../../uni_modules/uview-ultra/components/up-textarea/up-textarea.js";
import { _ as __easycom_0$1 } from "../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_14 } from "../../../../uni_modules/uview-ultra/components/up-form/up-form.js";
import { _ as __easycom_15 } from "../../../../uni_modules/uview-ultra/components/up-upload/up-upload.js";
import { _ as __easycom_46 } from "../../../../uni_modules/uview-ultra/components/up-divider/up-divider.js";
import { _ as __easycom_17 } from "../../../../uni_modules/uview-ultra/components/up-calendar/up-calendar.js";
import { _ as __easycom_18 } from "../../../../uni_modules/uview-ultra/components/up-keyboard/up-keyboard.js";
import { _ as __easycom_19 } from "../../../../uni_modules/uview-ultra/components/up-picker/up-picker.js";
import { _ as __easycom_20 } from "../../../../uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.js";
import { _ as __easycom_21 } from "../../../../uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoForm",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const inputValue = ref("");
    const passwordValue = ref("");
    const searchValue = ref("");
    const switchValue1 = ref(true);
    const switchValue2 = ref(false);
    const checkboxValue = ref(["apple"]);
    const radioValue = ref("male");
    const sliderValue = ref(50);
    const rateValue = ref(3);
    const numberValue = ref(1);
    const formModel = reactive(new UTSJSONObject({
      name: "楼兰",
      gender: "",
      age: "0",
      fruit: "apple",
      hobbies: [],
      intro: "",
      stayTime: "",
      code: "",
      birthday: ""
    }));
    const formRules = new UTSJSONObject({
      name: [
        new UTSJSONObject({
          required: true,
          message: "请填写姓名",
          trigger: ["blur", "change"]
        })
      ],
      gender: [
        new UTSJSONObject({
          required: true,
          message: "请选择性别",
          trigger: ["blur", "change"]
        })
      ],
      age: [
        new UTSJSONObject({
          required: true,
          message: "请输入年龄",
          trigger: ["blur", "change"]
        })
      ],
      fruit: [
        new UTSJSONObject({
          required: true,
          message: "请选择水果",
          trigger: ["blur", "change"]
        })
      ],
      hobbies: [
        new UTSJSONObject({
          type: "array",
          required: true,
          message: "请选择兴趣爱好",
          trigger: ["blur", "change"]
        })
      ],
      intro: [
        new UTSJSONObject({
          required: true,
          message: "请填写简介",
          trigger: ["blur", "change"]
        })
      ],
      stayTime: [
        new UTSJSONObject({
          required: true,
          message: "请选择住店时间",
          trigger: ["blur", "change"]
        })
      ],
      code: [
        new UTSJSONObject({
          required: true,
          message: "请填写验证码",
          trigger: ["blur", "change"]
        })
      ],
      birthday: [
        new UTSJSONObject({
          required: true,
          message: "请选择生日",
          trigger: ["blur", "change"]
        })
      ]
    });
    const uForm = ref(null);
    function submitForm() {
      const form = uForm.value;
      if (form != null) {
        form.$callMethod("validate").then((res = null) => {
          uni.showToast({
            title: "验证通过",
            icon: "success"
          });
        }).catch((err = null) => {
          uni.__f__("log", "at src/sub/uview-ultra/components/DemoForm.uvue:393", "validate err:", err);
        });
      }
    }
    function resetForm() {
      const form = uForm.value;
      if (form != null) {
        form.$callMethod("resetFields");
      }
    }
    const genderActionShow = ref(false);
    const genderActions = ref([
      new UTSJSONObject({ name: "男" }),
      new UTSJSONObject({ name: "女" })
    ]);
    function onGenderSelect(item) {
      var _a2;
      formModel.gender = (_a2 = item.getString("name")) !== null && _a2 !== void 0 ? _a2 : "";
      genderActionShow.value = false;
    }
    const calendarShow = ref(false);
    const calendarValue = ref("");
    function onCalendarConfirm(dates) {
      if (dates.length > 0) {
        calendarValue.value = dates[0];
        if (dates.length > 1) {
          formModel.stayTime = `${dates[0]} 至 ${dates[dates.length - 1]}`;
        } else {
          formModel.stayTime = dates[0];
        }
      }
      calendarShow.value = false;
    }
    const keyboardShow = ref(false);
    const keyboardMode = ref("number");
    const keyboardValue = ref("");
    function openKeyboard(mode) {
      keyboardMode.value = mode;
      keyboardShow.value = true;
    }
    function onKeyboardChange(val) {
      uni.__f__("log", "at src/sub/uview-ultra/components/DemoForm.uvue:442", val, "val");
      keyboardValue.value = keyboardValue.value + val;
    }
    function onKeyboardBackspace() {
      const len = keyboardValue.value.length;
      if (len > 0) {
        keyboardValue.value = keyboardValue.value.substring(0, len - 1);
      }
    }
    const pickerShow = ref(false);
    const pickerValue = ref("");
    const pickerColumns = ref([
      ["中国", "美国", "日本", "英国", "法国"]
    ]);
    function onPickerConfirm(e) {
      const indexs = e["indexs"];
      if (indexs.length > 0) {
        pickerValue.value = pickerColumns.value[0][indexs[0]];
      }
      pickerShow.value = false;
    }
    const datetimePickerShow = ref(false);
    const datetimePickerValue = ref((/* @__PURE__ */ new Date()).getTime());
    const datetimePickerLabel = ref("");
    function onDatetimePickerConfirm(e) {
      const value = e["value"];
      if (value != null) {
        datetimePickerValue.value = value;
        let timestamp = 0;
        if (typeof value === "number") {
          timestamp = value;
        } else {
          timestamp = Number.parseInt(value.toString());
        }
        const d = new Date(timestamp);
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const date = d.getDate();
        const monthStr = month < 10 ? `0${month}` : `${month}`;
        const dateStr = date < 10 ? `0${date}` : `${date}`;
        datetimePickerLabel.value = `${year}-${monthStr}-${dateStr}`;
        formModel.birthday = `${year}-${monthStr}-${dateStr}`;
      }
      datetimePickerShow.value = false;
    }
    const uploadList = ref([
      new UTSJSONObject({
        url: "/static/logo.png"
      })
    ]);
    function onUploadAfterRead(e) {
      const file = e["file"];
      file.forEach((item) => {
        uploadList.value.push(UTSJSONObject.assign(new UTSJSONObject({}), item));
      });
    }
    function onUploadDelete(e) {
      const index = e["index"];
      if (index >= 0 && index < uploadList.value.length) {
        uploadList.value.splice(index, 1);
      }
    }
    const __returned__ = { inputValue, passwordValue, searchValue, switchValue1, switchValue2, checkboxValue, radioValue, sliderValue, rateValue, numberValue, formModel, formRules, uForm, submitForm, resetForm, genderActionShow, genderActions, onGenderSelect, calendarShow, calendarValue, onCalendarConfirm, keyboardShow, keyboardMode, keyboardValue, openKeyboard, onKeyboardChange, onKeyboardBackspace, pickerShow, pickerValue, pickerColumns, onPickerConfirm, datetimePickerShow, datetimePickerValue, datetimePickerLabel, onDatetimePickerConfirm, uploadList, onUploadAfterRead, onUploadDelete };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "blur": { "": { "filter": "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-opacity) var(--un-saturate) var(--un-sepia)", "--un-blur": "blur(8rpx)" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-row": { "": { "flexDirection": "row" } }, "h-10px": { "": { "height": 10 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "ml-10px": { "": { "marginLeft": 10 } }, "mt-10px": { "": { "marginTop": 10 } }, "mt-15px": { "": { "marginTop": 15 } }, "none": { "": { "display": "none" } }, "text-__303133_": { "": { "color": "#303133" } }, "text-__606266_": { "": { "color": "#606266" } }, "text-__909399_": { "": { "color": "#909399" } }, "text-__c0c4cc_": { "": { "color": "#c0c4cc" } }, "text-14px": { "": { "fontSize": 14 } }, "text-15px": { "": { "fontSize": 15 } }, "w-10px": { "": { "width": 10 } }, "w-15px": { "": { "width": 15 } }, "w-20px": { "": { "width": 20 } }, "w-full": { "": { "width": "100%" } } };
const _style_1 = { "section-title": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 8, "paddingLeft": 16, "fontSize": 18, "fontWeight": "bold", "color": "#303133" } }, "demo-block": { "": { "marginTop": 0, "marginRight": 12, "marginBottom": 12, "marginLeft": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } }, "demo-row": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "marginBottom": 8 } }, "demo-row-start": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "flex-start", "marginBottom": 8 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_input = resolveEasycom(resolveDynamicComponent("up-input"), __easycom_0);
  const _component_up_search = resolveEasycom(resolveDynamicComponent("up-search"), __easycom_1);
  const _component_up_switch = resolveEasycom(resolveDynamicComponent("up-switch"), __easycom_2);
  const _component_up_checkbox = resolveEasycom(resolveDynamicComponent("up-checkbox"), __easycom_3);
  const _component_up_checkbox_group = resolveEasycom(resolveDynamicComponent("up-checkbox-group"), __easycom_4);
  const _component_up_radio = resolveEasycom(resolveDynamicComponent("up-radio"), __easycom_5);
  const _component_up_radio_group = resolveEasycom(resolveDynamicComponent("up-radio-group"), __easycom_6);
  const _component_up_slider = resolveEasycom(resolveDynamicComponent("up-slider"), __easycom_7);
  const _component_up_rate = resolveEasycom(resolveDynamicComponent("up-rate"), __easycom_8);
  const _component_up_number_box = resolveEasycom(resolveDynamicComponent("up-number-box"), __easycom_9);
  const _component_up_form_item = resolveEasycom(resolveDynamicComponent("up-form-item"), __easycom_10);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_2$1);
  const _component_up_textarea = resolveEasycom(resolveDynamicComponent("up-textarea"), __easycom_12);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_0$1);
  const _component_up_form = resolveEasycom(resolveDynamicComponent("up-form"), __easycom_14);
  const _component_up_upload = resolveEasycom(resolveDynamicComponent("up-upload"), __easycom_15);
  const _component_up_divider = resolveEasycom(resolveDynamicComponent("up-divider"), __easycom_46);
  const _component_up_calendar = resolveEasycom(resolveDynamicComponent("up-calendar"), __easycom_17);
  const _component_up_keyboard = resolveEasycom(resolveDynamicComponent("up-keyboard"), __easycom_18);
  const _component_up_picker = resolveEasycom(resolveDynamicComponent("up-picker"), __easycom_19);
  const _component_up_datetime_picker = resolveEasycom(resolveDynamicComponent("up-datetime-picker"), __easycom_20);
  const _component_up_action_sheet = resolveEasycom(resolveDynamicComponent("up-action-sheet"), __easycom_21);
  return openBlock(), createElementBlock("view", null, [
    createCommentVNode(" ==================== 表单组件 ==================== "),
    createElementVNode("text", { class: "section-title" }, " 表单组件 "),
    createCommentVNode(" Input 输入框 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-input "),
      createVNode(_component_up_input, {
        modelValue: $setup.inputValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputValue = $event),
        placeholder: "请输入内容",
        border: "surround",
        clearable: ""
      }, null, 8, ["modelValue"]),
      createElementVNode("view", { class: "h-10px" }),
      createVNode(_component_up_input, {
        modelValue: $setup.passwordValue,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.passwordValue = $event),
        placeholder: "请输入密码",
        password: true,
        border: "surround"
      }, null, 8, ["modelValue"]),
      createElementVNode("view", { class: "h-10px" }),
      createVNode(_component_up_input, {
        placeholder: "带图标",
        "prefix-icon": "search",
        border: "surround"
      })
    ]),
    createCommentVNode(" Search 搜索 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-search "),
      createVNode(_component_up_search, {
        modelValue: $setup.searchValue,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.searchValue = $event),
        placeholder: "搜索关键字",
        "show-action": true,
        "action-text": "搜索"
      }, null, 8, ["modelValue"])
    ]),
    createCommentVNode(" Switch 开关 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-switch "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_switch, {
          modelValue: $setup.switchValue1,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.switchValue1 = $event)
        }, null, 8, ["modelValue"]),
        createElementVNode("view", { class: "w-20px" }),
        createVNode(_component_up_switch, {
          modelValue: $setup.switchValue2,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.switchValue2 = $event),
          "active-color": "#fa3534"
        }, null, 8, ["modelValue"]),
        createElementVNode("view", { class: "w-20px" }),
        createVNode(_component_up_switch, { disabled: true }),
        createElementVNode("view", { class: "w-20px" }),
        createVNode(_component_up_switch, { loading: true })
      ])
    ]),
    createCommentVNode(" Checkbox 复选框 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-checkbox "),
      createVNode(_component_up_checkbox_group, {
        modelValue: $setup.checkboxValue,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.checkboxValue = $event),
        placement: "row"
      }, {
        default: withCtx(() => [
          createVNode(_component_up_checkbox, {
            name: "apple",
            label: "苹果",
            checked: true
          }),
          createVNode(_component_up_checkbox, {
            name: "banana",
            label: "香蕉"
          }),
          createVNode(_component_up_checkbox, {
            name: "orange",
            label: "橙子"
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    createCommentVNode(" Radio 单选框 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-radio "),
      createVNode(_component_up_radio_group, {
        modelValue: $setup.radioValue,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.radioValue = $event),
        placement: "row"
      }, {
        default: withCtx(() => [
          createVNode(_component_up_radio, {
            name: "male",
            label: "男"
          }),
          createVNode(_component_up_radio, {
            name: "female",
            label: "女"
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    createCommentVNode(" Slider 滑块 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-slider "),
      createVNode(_component_up_slider, {
        modelValue: $setup.sliderValue,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.sliderValue = $event),
        min: 0,
        max: 100,
        step: 1,
        "show-value": true
      }, null, 8, ["modelValue"])
    ]),
    createCommentVNode(" Rate 评分 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-rate "),
      createElementVNode("view", { class: "demo-row" }, [
        createVNode(_component_up_rate, {
          modelValue: $setup.rateValue,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.rateValue = $event),
          count: 5
        }, null, 8, ["modelValue"]),
        createElementVNode(
          "text",
          { class: "text-14px text-__909399_ ml-10px" },
          toDisplayString($setup.rateValue) + " 分",
          1
          /* TEXT */
        )
      ])
    ]),
    createCommentVNode(" NumberBox 步进器 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-number-box "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_number_box, {
          modelValue: $setup.numberValue,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.numberValue = $event),
          min: 0,
          max: 100
        }, null, 8, ["modelValue"])
      ])
    ]),
    createCommentVNode(" Form 表单 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " 基础使用 "),
      createVNode(_component_up_form, {
        ref: "uForm",
        model: $setup.formModel,
        rules: $setup.formRules,
        "label-width": "80px",
        "error-type": "toast"
      }, {
        default: withCtx(() => [
          createVNode(_component_up_form_item, {
            label: "姓名",
            prop: "name",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_input, {
                modelValue: $setup.formModel.name,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.formModel.name = $event),
                placeholder: "请输入姓名",
                border: "none"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "性别",
            prop: "gender",
            "border-bottom": true,
            onClick: _cache[11] || (_cache[11] = ($event) => $setup.genderActionShow = true)
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "flex-row items-center justify-between w-full" }, [
                createElementVNode(
                  "text",
                  {
                    class: normalizeClass(["text-15px", $setup.formModel.gender == "" ? "text-__c0c4cc_" : "text-__303133_"])
                  },
                  toDisplayString($setup.formModel.gender != "" ? $setup.formModel.gender : "请选择性别"),
                  3
                  /* TEXT, CLASS */
                ),
                createVNode(_component_up_icon, {
                  name: "arrow-right",
                  color: "#c0c4cc",
                  size: "16"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "年龄",
            prop: "age",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_input, {
                modelValue: $setup.formModel.age,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.formModel.age = $event),
                type: "number",
                placeholder: "请输入年龄",
                border: "none",
                "custom-style": { backgroundColor: "#f2f3f5", padding: "4px 10px", borderRadius: "4px", width: "100%" }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "水果",
            prop: "fruit",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_radio_group, {
                modelValue: $setup.formModel.fruit,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.formModel.fruit = $event),
                placement: "row"
              }, {
                default: withCtx(() => [
                  createVNode(_component_up_radio, {
                    name: "apple",
                    label: "苹果",
                    shape: "circle"
                  }),
                  createVNode(_component_up_radio, {
                    name: "banana",
                    label: "香蕉",
                    shape: "circle"
                  }),
                  createVNode(_component_up_radio, {
                    name: "orange",
                    label: "毒橙子",
                    shape: "circle"
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "兴趣爱好",
            prop: "hobbies",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_checkbox_group, {
                modelValue: $setup.formModel.hobbies,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.formModel.hobbies = $event),
                placement: "row"
              }, {
                default: withCtx(() => [
                  createVNode(_component_up_checkbox, {
                    name: "badminton",
                    label: "羽毛球"
                  }),
                  createVNode(_component_up_checkbox, {
                    name: "running",
                    label: "跑步"
                  }),
                  createVNode(_component_up_checkbox, {
                    name: "climbing",
                    label: "爬山"
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "简介",
            prop: "intro",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_textarea, {
                modelValue: $setup.formModel.intro,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.formModel.intro = $event),
                placeholder: "不低于3个字",
                count: "",
                maxlength: "140",
                height: "80px"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "住店时间",
            prop: "stayTime",
            "border-bottom": true,
            onClick: _cache[16] || (_cache[16] = ($event) => $setup.calendarShow = true)
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "flex-row items-center justify-between w-full" }, [
                createElementVNode(
                  "text",
                  {
                    class: normalizeClass(["text-15px", $setup.formModel.stayTime == "" ? "text-__c0c4cc_" : "text-__303133_"])
                  },
                  toDisplayString($setup.formModel.stayTime != "" ? $setup.formModel.stayTime : "请选择住店和离店时间"),
                  3
                  /* TEXT, CLASS */
                ),
                createVNode(_component_up_icon, {
                  name: "arrow-right",
                  color: "#c0c4cc",
                  size: "16"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "验证码",
            prop: "code",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "flex-row items-center justify-between w-full" }, [
                createVNode(_component_up_input, {
                  modelValue: $setup.formModel.code,
                  "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.formModel.code = $event),
                  placeholder: "请填写验证码",
                  border: "none",
                  class: "flex-1"
                }, null, 8, ["modelValue"]),
                createVNode(_component_up_button, {
                  type: "success",
                  text: "获取验证码",
                  size: "mini",
                  "custom-style": { backgroundColor: "#4cd964", border: "none", color: "#fff", marginLeft: "10px" }
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "生日",
            prop: "birthday",
            "border-bottom": true,
            onClick: _cache[18] || (_cache[18] = ($event) => $setup.datetimePickerShow = true)
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "flex-row items-center justify-between w-full" }, [
                createElementVNode(
                  "text",
                  {
                    class: normalizeClass(["text-15px", $setup.formModel.birthday == "" ? "text-__c0c4cc_" : "text-__303133_"])
                  },
                  toDisplayString($setup.formModel.birthday != "" ? $setup.formModel.birthday : "请选择生日"),
                  3
                  /* TEXT, CLASS */
                ),
                createVNode(_component_up_icon, {
                  name: "arrow-right",
                  color: "#c0c4cc",
                  size: "16"
                })
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model"]),
      createElementVNode("view", { class: "mt-15px flex-row justify-between" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "提交",
          size: "mini",
          onClick: $setup.submitForm
        }),
        createVNode(_component_up_button, {
          type: "info",
          text: "重置",
          size: "mini",
          onClick: $setup.resetForm
        })
      ])
    ]),
    createCommentVNode(" Calendar 日历 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-calendar "),
      createElementVNode("view", { class: "demo-row-start items-center" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "选择日期",
          size: "mini",
          onClick: _cache[19] || (_cache[19] = ($event) => $setup.calendarShow = true)
        }),
        createElementVNode("view", { class: "w-15px" }),
        createElementVNode(
          "text",
          { class: "text-14px text-__606266_" },
          toDisplayString($setup.calendarValue != "" ? `已选日期: ${$setup.calendarValue}` : "未选择日期"),
          1
          /* TEXT */
        )
      ])
    ]),
    createCommentVNode(" Keyboard 键盘 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-keyboard "),
      createElementVNode("view", { class: "demo-row-start items-center" }, [
        createElementVNode("view", { class: "flex-1" }, [
          createVNode(_component_up_input, {
            modelValue: $setup.keyboardValue,
            "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $setup.keyboardValue = $event),
            placeholder: "通过键盘输入内容",
            border: "surround",
            readonly: "",
            onClick: _cache[21] || (_cache[21] = ($event) => $setup.openKeyboard("number"))
          }, null, 8, ["modelValue"])
        ]),
        createElementVNode("view", { class: "w-10px" }),
        createVNode(_component_up_button, {
          type: "info",
          text: "清空",
          size: "mini",
          onClick: _cache[22] || (_cache[22] = ($event) => $setup.keyboardValue = "")
        })
      ]),
      createElementVNode("view", { class: "demo-row-start mt-10px" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "数字键盘",
          size: "mini",
          onClick: _cache[23] || (_cache[23] = ($event) => $setup.openKeyboard("number"))
        }),
        createElementVNode("view", { class: "w-10px" }),
        createVNode(_component_up_button, {
          type: "primary",
          text: "身份证键盘",
          size: "mini",
          onClick: _cache[24] || (_cache[24] = ($event) => $setup.openKeyboard("card"))
        }),
        createElementVNode("view", { class: "w-10px" }),
        createVNode(_component_up_button, {
          type: "primary",
          text: "车牌号键盘",
          size: "mini",
          onClick: _cache[25] || (_cache[25] = ($event) => $setup.openKeyboard("car"))
        })
      ])
    ]),
    createCommentVNode(" Picker 选择器 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-picker "),
      createElementVNode("view", { class: "demo-row-start items-center" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "选择国家",
          size: "mini",
          onClick: _cache[26] || (_cache[26] = ($event) => $setup.pickerShow = true)
        }),
        createElementVNode("view", { class: "w-15px" }),
        createElementVNode(
          "text",
          { class: "text-14px text-__606266_" },
          toDisplayString($setup.pickerValue != "" ? `已选: ${$setup.pickerValue}` : "未选择"),
          1
          /* TEXT */
        )
      ])
    ]),
    createCommentVNode(" DatetimePicker 时间选择器 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-datetime-picker "),
      createElementVNode("view", { class: "demo-row-start items-center" }, [
        createVNode(_component_up_button, {
          type: "primary",
          text: "选择日期",
          size: "mini",
          onClick: _cache[27] || (_cache[27] = ($event) => $setup.datetimePickerShow = true)
        }),
        createElementVNode("view", { class: "w-15px" }),
        createElementVNode(
          "text",
          { class: "text-14px text-__606266_" },
          toDisplayString($setup.datetimePickerLabel != "" ? `已选: ${$setup.datetimePickerLabel}` : "未选择"),
          1
          /* TEXT */
        )
      ])
    ]),
    createCommentVNode(" Upload 上传 "),
    createElementVNode("view", { class: "demo-block" }, [
      createElementVNode("text", { class: "demo-label" }, " up-upload "),
      createElementVNode("view", { class: "demo-row-start" }, [
        createVNode(_component_up_upload, {
          "file-list": $setup.uploadList,
          multiple: true,
          "max-count": 3,
          width: "80px",
          height: "80px",
          onAfterRead: $setup.onUploadAfterRead,
          onDelete: $setup.onUploadDelete
        }, null, 8, ["file-list"])
      ])
    ]),
    createVNode(_component_up_divider, { text: "表单组件结束" }),
    createCommentVNode(" Calendar 组件 "),
    createVNode(_component_up_calendar, {
      show: $setup.calendarShow,
      mode: "range",
      onConfirm: $setup.onCalendarConfirm,
      onClose: _cache[28] || (_cache[28] = ($event) => $setup.calendarShow = false)
    }, null, 8, ["show"]),
    createCommentVNode(" Keyboard 组件 "),
    createVNode(_component_up_keyboard, {
      show: $setup.keyboardShow,
      mode: $setup.keyboardMode,
      onChange: $setup.onKeyboardChange,
      onBackspace: $setup.onKeyboardBackspace,
      onClose: _cache[29] || (_cache[29] = ($event) => $setup.keyboardShow = false),
      onConfirm: _cache[30] || (_cache[30] = ($event) => $setup.keyboardShow = false),
      onCancel: _cache[31] || (_cache[31] = ($event) => $setup.keyboardShow = false)
    }, null, 8, ["show", "mode"]),
    createCommentVNode(" Picker 组件 "),
    createVNode(_component_up_picker, {
      show: $setup.pickerShow,
      columns: $setup.pickerColumns,
      onConfirm: $setup.onPickerConfirm,
      onCancel: _cache[32] || (_cache[32] = ($event) => $setup.pickerShow = false),
      onClose: _cache[33] || (_cache[33] = ($event) => $setup.pickerShow = false)
    }, null, 8, ["show", "columns"]),
    createCommentVNode(" DatetimePicker 组件 "),
    createVNode(_component_up_datetime_picker, {
      modelValue: $setup.datetimePickerValue,
      "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => $setup.datetimePickerValue = $event),
      show: $setup.datetimePickerShow,
      mode: "date",
      onConfirm: $setup.onDatetimePickerConfirm,
      onCancel: _cache[35] || (_cache[35] = ($event) => $setup.datetimePickerShow = false),
      onClose: _cache[36] || (_cache[36] = ($event) => $setup.datetimePickerShow = false)
    }, null, 8, ["modelValue", "show"]),
    createCommentVNode(" ActionSheet 性别选择 "),
    createVNode(_component_up_action_sheet, {
      show: $setup.genderActionShow,
      actions: $setup.genderActions,
      title: "请选择性别",
      onSelect: $setup.onGenderSelect,
      onClose: _cache[37] || (_cache[37] = ($event) => $setup.genderActionShow = false)
    }, null, 8, ["show", "actions"])
  ]);
}
const DemoForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/components/DemoForm.uvue"]]);
export {
  DemoForm as D
};
//# sourceMappingURL=DemoForm.js.map
