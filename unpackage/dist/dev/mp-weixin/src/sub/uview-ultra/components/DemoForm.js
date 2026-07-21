"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_up_input_1 = common_vendor.resolveComponent("up-input");
  const _easycom_up_form_item_1 = common_vendor.resolveComponent("up-form-item");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_radio_1 = common_vendor.resolveComponent("up-radio");
  const _easycom_up_radio_group_1 = common_vendor.resolveComponent("up-radio-group");
  const _easycom_up_checkbox_1 = common_vendor.resolveComponent("up-checkbox");
  const _easycom_up_checkbox_group_1 = common_vendor.resolveComponent("up-checkbox-group");
  const _easycom_up_switch_1 = common_vendor.resolveComponent("up-switch");
  const _easycom_up_rate_1 = common_vendor.resolveComponent("up-rate");
  const _easycom_up_number_box_1 = common_vendor.resolveComponent("up-number-box");
  const _easycom_up_slider_1 = common_vendor.resolveComponent("up-slider");
  const _easycom_up_textarea_1 = common_vendor.resolveComponent("up-textarea");
  const _easycom_up_upload_1 = common_vendor.resolveComponent("up-upload");
  const _easycom_up_form_1 = common_vendor.resolveComponent("up-form");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_calendar_1 = common_vendor.resolveComponent("up-calendar");
  const _easycom_up_picker_1 = common_vendor.resolveComponent("up-picker");
  const _easycom_up_datetime_picker_1 = common_vendor.resolveComponent("up-datetime-picker");
  const _easycom_up_action_sheet_1 = common_vendor.resolveComponent("up-action-sheet");
  (_easycom_up_input_1 + _easycom_up_form_item_1 + _easycom_up_icon_1 + _easycom_up_radio_1 + _easycom_up_radio_group_1 + _easycom_up_checkbox_1 + _easycom_up_checkbox_group_1 + _easycom_up_switch_1 + _easycom_up_rate_1 + _easycom_up_number_box_1 + _easycom_up_slider_1 + _easycom_up_textarea_1 + _easycom_up_upload_1 + _easycom_up_form_1 + _easycom_up_button_1 + _easycom_up_calendar_1 + _easycom_up_picker_1 + _easycom_up_datetime_picker_1 + _easycom_up_action_sheet_1)();
}
const _easycom_up_input = () => "../../../../uni_modules/uview-ultra/components/up-input/up-input.js";
const _easycom_up_form_item = () => "../../../../uni_modules/uview-ultra/components/up-form-item/up-form-item.js";
const _easycom_up_icon = () => "../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
const _easycom_up_radio = () => "../../../../uni_modules/uview-ultra/components/up-radio/up-radio.js";
const _easycom_up_radio_group = () => "../../../../uni_modules/uview-ultra/components/up-radio-group/up-radio-group.js";
const _easycom_up_checkbox = () => "../../../../uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js";
const _easycom_up_checkbox_group = () => "../../../../uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js";
const _easycom_up_switch = () => "../../../../uni_modules/uview-ultra/components/up-switch/up-switch.js";
const _easycom_up_rate = () => "../../../../uni_modules/uview-ultra/components/up-rate/up-rate.js";
const _easycom_up_number_box = () => "../../../../uni_modules/uview-ultra/components/up-number-box/up-number-box.js";
const _easycom_up_slider = () => "../../../../uni_modules/uview-ultra/components/up-slider/up-slider.js";
const _easycom_up_textarea = () => "../../../../uni_modules/uview-ultra/components/up-textarea/up-textarea.js";
const _easycom_up_upload = () => "../../../../uni_modules/uview-ultra/components/up-upload/up-upload.js";
const _easycom_up_form = () => "../../../../uni_modules/uview-ultra/components/up-form/up-form.js";
const _easycom_up_button = () => "../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
const _easycom_up_calendar = () => "../../../../uni_modules/uview-ultra/components/up-calendar/up-calendar.js";
const _easycom_up_picker = () => "../../../../uni_modules/uview-ultra/components/up-picker/up-picker.js";
const _easycom_up_datetime_picker = () => "../../../../uni_modules/uview-ultra/components/up-datetime-picker/up-datetime-picker.js";
const _easycom_up_action_sheet = () => "../../../../uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.js";
if (!Math) {
  (_easycom_up_input + _easycom_up_form_item + _easycom_up_icon + _easycom_up_radio + _easycom_up_radio_group + _easycom_up_checkbox + _easycom_up_checkbox_group + _easycom_up_switch + _easycom_up_rate + _easycom_up_number_box + _easycom_up_slider + _easycom_up_textarea + _easycom_up_upload + _easycom_up_form + _easycom_up_button + _easycom_up_calendar + _easycom_up_picker + _easycom_up_datetime_picker + _easycom_up_action_sheet)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "DemoForm",
  setup(__props) {
    const formModel = common_vendor.reactive(new UTSJSONObject({
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
    const uForm = common_vendor.ref(null);
    const uploadList = common_vendor.ref([]);
    function submitForm() {
      const form = uForm.value;
      if (form != null) {
        form.$callMethod("validate").then((res = null) => {
          common_vendor.index.showToast({
            title: "验证通过，提交成功！",
            icon: "success"
          });
          common_vendor.index.__f__("log", "at src/sub/uview-ultra/components/DemoForm.uvue:247", "提交的数据：", formModel);
        }).catch((err = null) => {
          common_vendor.index.__f__("log", "at src/sub/uview-ultra/components/DemoForm.uvue:249", "验证失败:", err);
          common_vendor.index.showToast({
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
        common_vendor.index.showToast({
          title: "已重置表单",
          icon: "none"
        });
      }
    }
    const genderActionShow = common_vendor.ref(false);
    const genderActions = common_vendor.ref([
      new UTSJSONObject({ name: "男" }),
      new UTSJSONObject({ name: "女" }),
      new UTSJSONObject({ name: "保密" })
    ]);
    function onGenderSelect(item) {
      var _a;
      formModel.gender = (_a = item.getString("name")) !== null && _a !== void 0 ? _a : "";
      genderActionShow.value = false;
      const form = uForm.value;
      if (form != null) {
        form.$callMethod("validateField", "gender");
      }
    }
    const calendarShow = common_vendor.ref(false);
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
    const pickerShow = common_vendor.ref(false);
    const pickerColumns = common_vendor.ref([
      ["中国", "美国", "日本", "英国", "法国", "德国", "澳大利亚"]
    ]);
    function onPickerConfirm(e) {
      const indexs = e["indexs"];
      if (indexs.length > 0) {
        formModel.country = pickerColumns.value[0][indexs[0]];
      }
      pickerShow.value = false;
    }
    const datetimePickerShow = common_vendor.ref(false);
    const datetimePickerValue = common_vendor.ref((/* @__PURE__ */ new Date()).getTime());
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
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.o(($event) => {
          return formModel.name = $event;
        }, "57"),
        b: common_vendor.p({
          placeholder: "请输入姓名",
          border: "none",
          clearable: true,
          modelValue: formModel.name,
          class: "data-v-daaa3afd"
        }),
        c: common_vendor.p({
          label: "姓名",
          prop: "name",
          ["border-bottom"]: true,
          required: true,
          class: "data-v-daaa3afd"
        }),
        d: common_vendor.o(($event) => {
          return formModel.gender = $event;
        }, "a1"),
        e: common_vendor.p({
          disabled: true,
          ["disabled-color"]: "#ffffff",
          placeholder: "请选择性别",
          border: "none",
          modelValue: formModel.gender,
          class: "data-v-daaa3afd"
        }),
        f: common_vendor.p({
          name: "arrow-right",
          color: "#c0c4cc",
          size: "16",
          class: "data-v-daaa3afd"
        }),
        g: common_vendor.o(($event) => {
          return genderActionShow.value = true;
        }, "1f"),
        h: common_vendor.p({
          label: "性别",
          prop: "gender",
          ["border-bottom"]: true,
          required: true,
          class: "data-v-daaa3afd"
        }),
        i: common_vendor.o(($event) => {
          return formModel.birthday = $event;
        }, "02"),
        j: common_vendor.p({
          disabled: true,
          ["disabled-color"]: "#ffffff",
          placeholder: "请选择出生日期",
          border: "none",
          modelValue: formModel.birthday,
          class: "data-v-daaa3afd"
        }),
        k: common_vendor.p({
          name: "arrow-right",
          color: "#c0c4cc",
          size: "16",
          class: "data-v-daaa3afd"
        }),
        l: common_vendor.o(($event) => {
          return datetimePickerShow.value = true;
        }, "29"),
        m: common_vendor.p({
          label: "出生日期",
          prop: "birthday",
          ["border-bottom"]: true,
          required: true,
          class: "data-v-daaa3afd"
        }),
        n: common_vendor.o(($event) => {
          return formModel.country = $event;
        }, "4e"),
        o: common_vendor.p({
          disabled: true,
          ["disabled-color"]: "#ffffff",
          placeholder: "请选择国籍",
          border: "none",
          modelValue: formModel.country,
          class: "data-v-daaa3afd"
        }),
        p: common_vendor.p({
          name: "arrow-right",
          color: "#c0c4cc",
          size: "16",
          class: "data-v-daaa3afd"
        }),
        q: common_vendor.o(($event) => {
          return pickerShow.value = true;
        }, "43"),
        r: common_vendor.p({
          label: "国籍",
          prop: "country",
          ["border-bottom"]: true,
          class: "data-v-daaa3afd"
        }),
        s: common_vendor.o(($event) => {
          return formModel.stayTime = $event;
        }, "37"),
        t: common_vendor.p({
          disabled: true,
          ["disabled-color"]: "#ffffff",
          placeholder: "请选择日期范围",
          border: "none",
          modelValue: formModel.stayTime,
          class: "data-v-daaa3afd"
        }),
        v: common_vendor.p({
          name: "arrow-right",
          color: "#c0c4cc",
          size: "16",
          class: "data-v-daaa3afd"
        }),
        w: common_vendor.o(($event) => {
          return calendarShow.value = true;
        }, "41"),
        x: common_vendor.p({
          label: "行程时间",
          prop: "stayTime",
          ["border-bottom"]: true,
          class: "data-v-daaa3afd"
        }),
        y: common_vendor.p({
          name: "apple",
          label: "苹果",
          class: "data-v-daaa3afd"
        }),
        z: common_vendor.p({
          name: "banana",
          label: "香蕉",
          class: "data-v-daaa3afd"
        }),
        A: common_vendor.p({
          name: "orange",
          label: "橘子",
          class: "data-v-daaa3afd"
        }),
        B: common_vendor.o(($event) => {
          return formModel.fruit = $event;
        }, "c6"),
        C: common_vendor.p({
          placement: "row",
          modelValue: formModel.fruit,
          class: "data-v-daaa3afd"
        }),
        D: common_vendor.p({
          label: "水果最爱",
          prop: "fruit",
          ["border-bottom"]: true,
          class: "data-v-daaa3afd"
        }),
        E: common_vendor.p({
          name: "reading",
          label: "阅读",
          class: "data-v-daaa3afd"
        }),
        F: common_vendor.p({
          name: "sports",
          label: "运动",
          class: "data-v-daaa3afd"
        }),
        G: common_vendor.p({
          name: "music",
          label: "音乐",
          class: "data-v-daaa3afd"
        }),
        H: common_vendor.o(($event) => {
          return formModel.hobbies = $event;
        }, "7d"),
        I: common_vendor.p({
          placement: "row",
          modelValue: formModel.hobbies,
          class: "data-v-daaa3afd"
        }),
        J: common_vendor.p({
          label: "兴趣爱好",
          prop: "hobbies",
          ["border-bottom"]: true,
          class: "data-v-daaa3afd"
        }),
        K: common_vendor.o(($event) => {
          return formModel.notification = $event;
        }, "54"),
        L: common_vendor.p({
          ["active-color"]: "#2979ff",
          modelValue: formModel.notification,
          class: "data-v-daaa3afd"
        }),
        M: common_vendor.p({
          label: "通知开关",
          prop: "notification",
          ["border-bottom"]: true,
          class: "data-v-daaa3afd"
        }),
        N: common_vendor.o(($event) => {
          return formModel.rate = $event;
        }, "4c"),
        O: common_vendor.p({
          count: 5,
          modelValue: formModel.rate,
          class: "data-v-daaa3afd"
        }),
        P: common_vendor.p({
          label: "服务评分",
          prop: "rate",
          ["border-bottom"]: true,
          class: "data-v-daaa3afd"
        }),
        Q: common_vendor.o(($event) => {
          return formModel.count = $event;
        }, "7d"),
        R: common_vendor.p({
          min: 1,
          max: 100,
          modelValue: formModel.count,
          class: "data-v-daaa3afd"
        }),
        S: common_vendor.p({
          label: "购买数量",
          prop: "count",
          ["border-bottom"]: true,
          class: "data-v-daaa3afd"
        }),
        T: common_vendor.o(($event) => {
          return formModel.satisfaction = $event;
        }, "a2"),
        U: common_vendor.p({
          min: 0,
          max: 100,
          ["show-value"]: true,
          modelValue: formModel.satisfaction,
          class: "data-v-daaa3afd",
          style: "width:100%"
        }),
        V: common_vendor.p({
          label: "满意度",
          prop: "satisfaction",
          ["border-bottom"]: true,
          class: "data-v-daaa3afd"
        }),
        W: common_vendor.o(($event) => {
          return formModel.intro = $event;
        }, "e2"),
        X: common_vendor.p({
          placeholder: "请输入个人简介",
          count: true,
          maxlength: 100,
          modelValue: formModel.intro,
          class: "data-v-daaa3afd"
        }),
        Y: common_vendor.p({
          label: "个人简介",
          prop: "intro",
          ["border-bottom"]: true,
          ["label-position"]: "top",
          class: "data-v-daaa3afd"
        }),
        Z: common_vendor.o(onUploadAfterRead, "54"),
        aa: common_vendor.o(onUploadDelete, "5a"),
        ab: common_vendor.p({
          ["file-list"]: uploadList.value,
          multiple: true,
          ["max-count"]: 3,
          width: "80px",
          height: "80px",
          class: "data-v-daaa3afd"
        }),
        ac: common_vendor.p({
          label: "相关照片",
          prop: "photos",
          ["border-bottom"]: true,
          ["label-position"]: "top",
          class: "data-v-daaa3afd"
        }),
        ad: common_vendor.sr(uForm, "daaa3afd-0", {
          "k": "uForm"
        }),
        ae: common_vendor.p({
          model: formModel,
          rules: formRules,
          ["label-width"]: "90px",
          ["error-type"]: "toast",
          class: "r data-v-daaa3afd"
        }),
        af: common_vendor.o(submitForm, "bb"),
        ag: common_vendor.p({
          type: "primary",
          text: "提交表单",
          class: "data-v-daaa3afd"
        }),
        ah: common_vendor.o(resetForm, "f2"),
        ai: common_vendor.p({
          type: "info",
          text: "重置表单",
          class: "data-v-daaa3afd"
        }),
        aj: common_vendor.o(onCalendarConfirm, "45"),
        ak: common_vendor.o(($event) => {
          return calendarShow.value = false;
        }, "21"),
        al: common_vendor.p({
          show: calendarShow.value,
          mode: "range",
          class: "data-v-daaa3afd"
        }),
        am: common_vendor.o(onPickerConfirm, "99"),
        an: common_vendor.o(($event) => {
          return pickerShow.value = false;
        }, "53"),
        ao: common_vendor.o(($event) => {
          return pickerShow.value = false;
        }, "a3"),
        ap: common_vendor.p({
          show: pickerShow.value,
          columns: pickerColumns.value,
          class: "data-v-daaa3afd"
        }),
        aq: common_vendor.o(onDatetimePickerConfirm, "40"),
        ar: common_vendor.o(($event) => {
          return datetimePickerShow.value = false;
        }, "d6"),
        as: common_vendor.o(($event) => {
          return datetimePickerShow.value = false;
        }, "13"),
        at: common_vendor.o(($event) => {
          return datetimePickerValue.value = $event;
        }, "ab"),
        av: common_vendor.p({
          show: datetimePickerShow.value,
          mode: "date",
          ["min-date"]: 0,
          modelValue: datetimePickerValue.value,
          class: "data-v-daaa3afd"
        }),
        aw: common_vendor.o(onGenderSelect, "33"),
        ax: common_vendor.o(($event) => {
          return genderActionShow.value = false;
        }, "b3"),
        ay: common_vendor.p({
          show: genderActionShow.value,
          actions: genderActions.value,
          title: "请选择性别",
          class: "data-v-daaa3afd"
        }),
        az: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        aA: `${_ctx.u_s_b_h}px`,
        aB: `${_ctx.u_s_a_i_b}px`,
        aC: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-daaa3afd"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/sub/uview-ultra/components/DemoForm.js.map
