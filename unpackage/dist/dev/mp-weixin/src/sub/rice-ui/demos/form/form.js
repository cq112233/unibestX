"use strict";
const common_vendor = require("../../../../../common/vendor.js");
require("../../../../store/index.js");
const src_store_app = require("../../../../store/app.js");
if (!Array) {
  const _easycom_NavBar_1 = common_vendor.resolveComponent("NavBar");
  const _easycom_rice_input_1 = common_vendor.resolveComponent("rice-input");
  const _easycom_rice_form_item_1 = common_vendor.resolveComponent("rice-form-item");
  const _easycom_rice_form_1 = common_vendor.resolveComponent("rice-form");
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  (_easycom_NavBar_1 + _easycom_rice_input_1 + _easycom_rice_form_item_1 + _easycom_rice_form_1 + _easycom_rice_button_1)();
}
const _easycom_NavBar = () => "../../../../components/NavBar/NavBar.js";
const _easycom_rice_input = () => "../../../../../uni_modules/rice-ui/components/rice-input/rice-input.js";
const _easycom_rice_form_item = () => "../../../../../uni_modules/rice-ui/components/rice-form-item/rice-form-item.js";
const _easycom_rice_form = () => "../../../../../uni_modules/rice-ui/components/rice-form/rice-form.js";
const _easycom_rice_button = () => "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
if (!Math) {
  (_easycom_NavBar + _easycom_rice_input + _easycom_rice_form_item + _easycom_rice_form + _easycom_rice_button + common_vendor.unref(AppKu))();
}
const AppKu = () => "../../../../../App.ku.js";
class UserForm extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          username: { type: String, optional: false },
          password: { type: String, optional: false },
          phone: { type: String, optional: false }
        };
      },
      name: "UserForm"
    };
  }
  constructor(options, metadata = UserForm.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.username = this.__props__.username;
    this.password = this.__props__.password;
    this.phone = this.__props__.phone;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "form",
  setup(__props) {
    const appStore = src_store_app.useAppStore();
    const currentTheme = common_vendor.computed(() => {
      return appStore.state.theme;
    });
    const formData = common_vendor.reactive(new UserForm({
      username: "",
      password: "",
      phone: ""
    }));
    function submitForm() {
      if (formData.username == "" || formData.password == "") {
        common_vendor.index.showToast({
          title: "请完整填写表单项",
          icon: "none"
        });
        return null;
      }
      common_vendor.index.showToast({
        title: `提交成功: ${formData.username}`,
        icon: "success"
      });
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.p({
          title: "Form 表单",
          ["auto-back"]: true,
          ["safe-area-inset-top"]: true,
          ["bg-color"]: "#ffffff",
          class: "data-v-5d3b95ae"
        }),
        b: currentTheme.value,
        c: common_vendor.o(($event) => {
          return common_vendor.unref(formData).username = $event;
        }, "5a"),
        d: common_vendor.p({
          placeholder: "请输入用户名",
          modelValue: common_vendor.unref(formData).username,
          class: "data-v-5d3b95ae"
        }),
        e: common_vendor.p({
          label: "用户名",
          prop: "username",
          required: true,
          class: "data-v-5d3b95ae"
        }),
        f: common_vendor.o(($event) => {
          return common_vendor.unref(formData).password = $event;
        }, "29"),
        g: common_vendor.p({
          placeholder: "请输入密码",
          ["show-password"]: true,
          modelValue: common_vendor.unref(formData).password,
          class: "data-v-5d3b95ae"
        }),
        h: common_vendor.p({
          label: "密码",
          prop: "password",
          required: true,
          class: "data-v-5d3b95ae"
        }),
        i: common_vendor.o(($event) => {
          return common_vendor.unref(formData).phone = $event;
        }, "1b"),
        j: common_vendor.p({
          placeholder: "请输入手机号",
          modelValue: common_vendor.unref(formData).phone,
          class: "data-v-5d3b95ae"
        }),
        k: common_vendor.p({
          label: "手机号",
          prop: "phone",
          class: "data-v-5d3b95ae"
        }),
        l: common_vendor.sr("formRef", "5d3b95ae-2,5d3b95ae-0"),
        m: common_vendor.p({
          model: common_vendor.unref(formData),
          class: "r data-v-5d3b95ae"
        }),
        n: common_vendor.o(submitForm, "b9"),
        o: common_vendor.p({
          type: "primary",
          color: currentTheme.value,
          text: "提交表单",
          class: "data-v-5d3b95ae"
        }),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-5d3b95ae"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5d3b95ae"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/src/sub/rice-ui/demos/form/form.js.map
