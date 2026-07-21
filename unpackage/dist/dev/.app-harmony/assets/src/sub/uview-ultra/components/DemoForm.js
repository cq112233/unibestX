import { _ as __easycom_0 } from "../../../../uni_modules/uview-ultra/components/up-input/up-input.js";
const { defineComponent, reactive, ref, resolveDynamicComponent, openBlock, createElementBlock, createCommentVNode, createElementVNode, createVNode, withCtx } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../uni_modules/uview-ultra/components/up-form-item/up-form-item.js";
import { _ as __easycom_35 } from "../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { _ as __easycom_3 } from "../../../../uni_modules/uview-ultra/components/up-radio/up-radio.js";
import { _ as __easycom_4 } from "../../../../uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js";
import { _ as __easycom_5 } from "../../../../uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js";
import { _ as __easycom_6 } from "../../../../uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js";
import { _ as __easycom_7 } from "../../../../uni_modules/uview-ultra/components/up-switch/up-switch.js";
import { _ as __easycom_8 } from "../../../../uni_modules/uview-ultra/components/up-rate/up-rate.js";
import { _ as __easycom_9 } from "../../../../uni_modules/uview-ultra/components/up-number-box/up-number-box.js";
import { _ as __easycom_10 } from "../../../../uni_modules/uview-ultra/components/up-slider/up-slider.js";
import { _ as __easycom_11 } from "../../../../uni_modules/uview-ultra/components/up-textarea/up-textarea.js";
import { _ as __easycom_12 } from "../../../../uni_modules/uview-ultra/components/up-upload/up-upload.js";
import { _ as __easycom_13 } from "../../../../uni_modules/uview-ultra/components/up-form/up-form.js";
import { _ as __easycom_5$1 } from "../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_15 } from "../../../../uni_modules/uview-ultra/components/up-calendar/up-calendar.js";
import { _ as __easycom_16 } from "../../../../uni_modules/uview-ultra/components/up-picker/up-picker.js";
import { _ as __easycom_17 } from "../../../../uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.js";
import { _ as __easycom_18 } from "../../../../uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoForm",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const formModel = reactive(new UTSJSONObject({
      name: "",
      gender: "",
      birthday: "",
      country: "",
      stayTime: "",
      fruit: "apple",
      hobbies: ["reading"],
      notification: true,
      rate: 4,
      count: 1,
      satisfaction: 80,
      intro: "",
      photos: []
    }));
    const formRules = new UTSJSONObject({
      name: [
        new UTSJSONObject({
          required: true,
          message: "请填写姓名",
          trigger: ["blur", "change"]
        }),
        new UTSJSONObject({
          min: 2,
          max: 10,
          message: "姓名长度在2到10个字符",
          trigger: ["blur", "change"]
        })
      ],
      gender: [
        new UTSJSONObject({
          required: true,
          message: "请选择性别",
          trigger: ["change"]
        })
      ],
      birthday: [
        new UTSJSONObject({
          required: true,
          message: "请选择出生日期",
          trigger: ["change"]
        })
      ],
      intro: [
        new UTSJSONObject({
          required: true,
          message: "请填写个人简介",
          trigger: ["blur", "change"]
        })
      ]
    });
    const uForm = ref(null);
    const uploadList = ref([]);
    function submitForm() {
      const form = uForm.value;
      if (form != null) {
        form.$callMethod("validate").then((res = null) => {
          uni.showToast({
            title: "验证通过，提交成功！",
            icon: "success"
          });
          uni.__f__("log", "at src/sub/uview-ultra/components/DemoForm.uvue:247", "提交的数据：", formModel);
        }).catch((err = null) => {
          uni.__f__("log", "at src/sub/uview-ultra/components/DemoForm.uvue:249", "验证失败:", err);
          uni.showToast({
            title: "请检查必填项",
            icon: "error"
          });
        });
      }
    }
    function resetForm() {
      const form = uForm.value;
      if (form != null) {
        form.$callMethod("resetFields");
        formModel.gender = "";
        formModel.birthday = "";
        formModel.country = "";
        formModel.stayTime = "";
        formModel.hobbies = ["reading"];
        uploadList.value = [];
        uni.showToast({
          title: "已重置表单",
          icon: "none"
        });
      }
    }
    const genderActionShow = ref(false);
    const genderActions = ref([
      new UTSJSONObject({ name: "男" }),
      new UTSJSONObject({ name: "女" }),
      new UTSJSONObject({ name: "保密" })
    ]);
    function onGenderSelect(item) {
      var _a2;
      formModel.gender = (_a2 = item.getString("name")) !== null && _a2 !== void 0 ? _a2 : "";
      genderActionShow.value = false;
      const form = uForm.value;
      if (form != null) {
        form.$callMethod("validateField", "gender");
      }
    }
    const calendarShow = ref(false);
    function onCalendarConfirm(dates) {
      if (dates.length > 0) {
        if (dates.length > 1) {
          formModel.stayTime = `${dates[0]} 至 ${dates[dates.length - 1]}`;
        } else {
          formModel.stayTime = dates[0];
        }
      }
      calendarShow.value = false;
    }
    const pickerShow = ref(false);
    const pickerColumns = ref([
      ["中国", "美国", "日本", "英国", "法国", "德国", "澳大利亚"]
    ]);
    function onPickerConfirm(e) {
      const indexs = e["indexs"];
      if (indexs.length > 0) {
        formModel.country = pickerColumns.value[0][indexs[0]];
      }
      pickerShow.value = false;
    }
    const datetimePickerShow = ref(false);
    const datetimePickerValue = ref((/* @__PURE__ */ new Date()).getTime());
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
        formModel.birthday = `${year}-${monthStr}-${dateStr}`;
        const form = uForm.value;
        if (form != null) {
          form.$callMethod("validateField", "birthday");
        }
      }
      datetimePickerShow.value = false;
    }
    function onUploadAfterRead(e) {
      const file = e["file"];
      file.forEach((item) => {
        uploadList.value.push(UTSJSONObject.assign(new UTSJSONObject({}), item));
      });
      formModel.photos = uploadList.value;
    }
    function onUploadDelete(e) {
      const index = e["index"];
      if (index >= 0 && index < uploadList.value.length) {
        uploadList.value.splice(index, 1);
      }
      formModel.photos = uploadList.value;
    }
    const __returned__ = { formModel, formRules, uForm, uploadList, submitForm, resetForm, genderActionShow, genderActions, onGenderSelect, calendarShow, onCalendarConfirm, pickerShow, pickerColumns, onPickerConfirm, datetimePickerShow, datetimePickerValue, onDatetimePickerConfirm, onUploadAfterRead, onUploadDelete };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "blur": { "": { "filter": "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-opacity) var(--un-saturate) var(--un-sepia)", "--un-blur": "blur(8rpx)" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-row": { "": { "flexDirection": "row" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "ml-10px": { "": { "marginLeft": 10 } }, "mr-10px": { "": { "marginRight": 10 } }, "mt-20px": { "": { "marginTop": 20 } }, "none": { "": { "display": "none" } }, "w-10px": { "": { "width": 10 } } };
const _style_1 = { "section-title": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 8, "paddingLeft": 16, "fontSize": 18, "fontWeight": "bold", "color": "#303133" } }, "demo-block": { "": { "marginTop": 0, "marginRight": 12, "marginBottom": 12, "marginLeft": 12, "paddingTop": 12, "paddingRight": 16, "paddingBottom": 12, "paddingLeft": 16, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8, "boxShadow": "0 2px 12px rgba(0, 0, 0, 0.05)" } }, "w-10px": { "": { "width": 10 } }, "mt-20px": { "": { "marginTop": 20 } }, "mr-10px": { "": { "marginRight": 10 } }, "ml-10px": { "": { "marginLeft": 10 } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_input = resolveEasycom(resolveDynamicComponent("up-input"), __easycom_0);
  const _component_up_form_item = resolveEasycom(resolveDynamicComponent("up-form-item"), __easycom_1);
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_35);
  const _component_up_radio = resolveEasycom(resolveDynamicComponent("up-radio"), __easycom_3);
  const _component_up_radio_group = resolveEasycom(resolveDynamicComponent("up-radio-group"), __easycom_4);
  const _component_up_checkbox = resolveEasycom(resolveDynamicComponent("up-checkbox"), __easycom_5);
  const _component_up_checkbox_group = resolveEasycom(resolveDynamicComponent("up-checkbox-group"), __easycom_6);
  const _component_up_switch = resolveEasycom(resolveDynamicComponent("up-switch"), __easycom_7);
  const _component_up_rate = resolveEasycom(resolveDynamicComponent("up-rate"), __easycom_8);
  const _component_up_number_box = resolveEasycom(resolveDynamicComponent("up-number-box"), __easycom_9);
  const _component_up_slider = resolveEasycom(resolveDynamicComponent("up-slider"), __easycom_10);
  const _component_up_textarea = resolveEasycom(resolveDynamicComponent("up-textarea"), __easycom_11);
  const _component_up_upload = resolveEasycom(resolveDynamicComponent("up-upload"), __easycom_12);
  const _component_up_form = resolveEasycom(resolveDynamicComponent("up-form"), __easycom_13);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_5$1);
  const _component_up_calendar = resolveEasycom(resolveDynamicComponent("up-calendar"), __easycom_15);
  const _component_up_picker = resolveEasycom(resolveDynamicComponent("up-picker"), __easycom_16);
  const _component_up_datetime_picker = resolveEasycom(resolveDynamicComponent("up-datetime-picker"), __easycom_17);
  const _component_up_action_sheet = resolveEasycom(resolveDynamicComponent("up-action-sheet"), __easycom_18);
  return openBlock(), createElementBlock("view", null, [
    createCommentVNode(" ==================== 表单组件 ==================== "),
    createElementVNode("text", { class: "section-title" }, " 完整表单演示 "),
    createElementVNode("view", { class: "demo-block" }, [
      createVNode(_component_up_form, {
        ref: "uForm",
        model: $setup.formModel,
        rules: $setup.formRules,
        "label-width": "90px",
        "error-type": "toast"
      }, {
        default: withCtx(() => [
          createVNode(_component_up_form_item, {
            label: "姓名",
            prop: "name",
            "border-bottom": true,
            required: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_up_input, {
                modelValue: $setup.formModel.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.formModel.name = $event),
                placeholder: "请输入姓名",
                border: "none",
                clearable: ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "性别",
            prop: "gender",
            "border-bottom": true,
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.genderActionShow = true),
            required: ""
          }, {
            right: withCtx(() => [
              createVNode(_component_up_icon, {
                name: "arrow-right",
                color: "#c0c4cc",
                size: "16"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_up_input, {
                modelValue: $setup.formModel.gender,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.formModel.gender = $event),
                disabled: "",
                "disabled-color": "#ffffff",
                placeholder: "请选择性别",
                border: "none"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "出生日期",
            prop: "birthday",
            "border-bottom": true,
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.datetimePickerShow = true),
            required: ""
          }, {
            right: withCtx(() => [
              createVNode(_component_up_icon, {
                name: "arrow-right",
                color: "#c0c4cc",
                size: "16"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_up_input, {
                modelValue: $setup.formModel.birthday,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.formModel.birthday = $event),
                disabled: "",
                "disabled-color": "#ffffff",
                placeholder: "请选择出生日期",
                border: "none"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "国籍",
            prop: "country",
            "border-bottom": true,
            onClick: _cache[6] || (_cache[6] = ($event) => $setup.pickerShow = true)
          }, {
            right: withCtx(() => [
              createVNode(_component_up_icon, {
                name: "arrow-right",
                color: "#c0c4cc",
                size: "16"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_up_input, {
                modelValue: $setup.formModel.country,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.formModel.country = $event),
                disabled: "",
                "disabled-color": "#ffffff",
                placeholder: "请选择国籍",
                border: "none"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "行程时间",
            prop: "stayTime",
            "border-bottom": true,
            onClick: _cache[8] || (_cache[8] = ($event) => $setup.calendarShow = true)
          }, {
            right: withCtx(() => [
              createVNode(_component_up_icon, {
                name: "arrow-right",
                color: "#c0c4cc",
                size: "16"
              })
            ]),
            default: withCtx(() => [
              createVNode(_component_up_input, {
                modelValue: $setup.formModel.stayTime,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.formModel.stayTime = $event),
                disabled: "",
                "disabled-color": "#ffffff",
                placeholder: "请选择日期范围",
                border: "none"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "水果最爱",
            prop: "fruit",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_radio_group, {
                modelValue: $setup.formModel.fruit,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.formModel.fruit = $event),
                placement: "row"
              }, {
                default: withCtx(() => [
                  createVNode(_component_up_radio, {
                    name: "apple",
                    label: "苹果"
                  }),
                  createElementVNode("view", { class: "w-10px" }),
                  createVNode(_component_up_radio, {
                    name: "banana",
                    label: "香蕉"
                  }),
                  createElementVNode("view", { class: "w-10px" }),
                  createVNode(_component_up_radio, {
                    name: "orange",
                    label: "橘子"
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
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.formModel.hobbies = $event),
                placement: "row"
              }, {
                default: withCtx(() => [
                  createVNode(_component_up_checkbox, {
                    name: "reading",
                    label: "阅读"
                  }),
                  createElementVNode("view", { class: "w-10px" }),
                  createVNode(_component_up_checkbox, {
                    name: "sports",
                    label: "运动"
                  }),
                  createElementVNode("view", { class: "w-10px" }),
                  createVNode(_component_up_checkbox, {
                    name: "music",
                    label: "音乐"
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
            label: "通知开关",
            prop: "notification",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_switch, {
                modelValue: $setup.formModel.notification,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.formModel.notification = $event),
                "active-color": "#2979ff"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "服务评分",
            prop: "rate",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_rate, {
                modelValue: $setup.formModel.rate,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.formModel.rate = $event),
                count: 5
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "购买数量",
            prop: "count",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_number_box, {
                modelValue: $setup.formModel.count,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.formModel.count = $event),
                min: 1,
                max: 100
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "满意度",
            prop: "satisfaction",
            "border-bottom": true
          }, {
            default: withCtx(() => [
              createVNode(_component_up_slider, {
                modelValue: $setup.formModel.satisfaction,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.formModel.satisfaction = $event),
                min: 0,
                max: 100,
                "show-value": true,
                style: { "width": "100%" }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "个人简介",
            prop: "intro",
            "border-bottom": true,
            "label-position": "top"
          }, {
            default: withCtx(() => [
              createVNode(_component_up_textarea, {
                modelValue: $setup.formModel.intro,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.formModel.intro = $event),
                placeholder: "请输入个人简介",
                count: "",
                maxlength: 100
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_up_form_item, {
            label: "相关照片",
            prop: "photos",
            "border-bottom": true,
            "label-position": "top"
          }, {
            default: withCtx(() => [
              createVNode(_component_up_upload, {
                "file-list": $setup.uploadList,
                multiple: true,
                "max-count": 3,
                width: "80px",
                height: "80px",
                onAfterRead: $setup.onUploadAfterRead,
                onDelete: $setup.onUploadDelete
              }, null, 8, ["file-list"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model"]),
      createElementVNode("view", { class: "mt-20px flex-row justify-between" }, [
        createElementVNode("view", { class: "flex-1 mr-10px" }, [
          createVNode(_component_up_button, {
            type: "primary",
            text: "提交表单",
            onClick: $setup.submitForm
          })
        ]),
        createElementVNode("view", { class: "flex-1 ml-10px" }, [
          createVNode(_component_up_button, {
            type: "info",
            text: "重置表单",
            onClick: $setup.resetForm
          })
        ])
      ])
    ]),
    createCommentVNode(" 弹窗选择组件 "),
    createCommentVNode(" Calendar 日历 "),
    createVNode(_component_up_calendar, {
      show: $setup.calendarShow,
      mode: "range",
      onConfirm: $setup.onCalendarConfirm,
      onClose: _cache[16] || (_cache[16] = ($event) => $setup.calendarShow = false)
    }, null, 8, ["show"]),
    createCommentVNode(" Picker 国家选择 "),
    createVNode(_component_up_picker, {
      show: $setup.pickerShow,
      columns: $setup.pickerColumns,
      onConfirm: $setup.onPickerConfirm,
      onCancel: _cache[17] || (_cache[17] = ($event) => $setup.pickerShow = false),
      onClose: _cache[18] || (_cache[18] = ($event) => $setup.pickerShow = false)
    }, null, 8, ["show", "columns"]),
    createCommentVNode(" DatetimePicker 出生日期 "),
    createVNode(_component_up_datetime_picker, {
      modelValue: $setup.datetimePickerValue,
      "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $setup.datetimePickerValue = $event),
      show: $setup.datetimePickerShow,
      mode: "date",
      "min-date": 0,
      onConfirm: $setup.onDatetimePickerConfirm,
      onCancel: _cache[20] || (_cache[20] = ($event) => $setup.datetimePickerShow = false),
      onClose: _cache[21] || (_cache[21] = ($event) => $setup.datetimePickerShow = false)
    }, null, 8, ["modelValue", "show"]),
    createCommentVNode(" ActionSheet 性别选择 "),
    createVNode(_component_up_action_sheet, {
      show: $setup.genderActionShow,
      actions: $setup.genderActions,
      title: "请选择性别",
      onSelect: $setup.onGenderSelect,
      onClose: _cache[22] || (_cache[22] = ($event) => $setup.genderActionShow = false)
    }, null, 8, ["show", "actions"])
  ]);
}
const DemoForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/components/DemoForm.uvue"]]);
export {
  DemoForm as D
};
//# sourceMappingURL=DemoForm.js.map
