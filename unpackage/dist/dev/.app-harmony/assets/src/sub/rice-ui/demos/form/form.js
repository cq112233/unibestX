import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/rice-ui/components/rice-input/rice-input.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/rice-ui/components/rice-form-item/rice-form-item.js";
import { _ as __easycom_3 } from "../../../../../uni_modules/rice-ui/components/rice-form/rice-form.js";
import { _ as __easycom_1$1 } from "../../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import "../../../../store/index.js";
import { u as useAppStore } from "../../../../store/app.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/rice-icon.js";
import "../../../../../uni_modules/rice-ui/libs/utils/basic.js";
import "../../../../../uni_modules/rice-ui/libs/store/useConfig.js";
import "../../../../../uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/usePopup/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js";
import "../../../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js";
import "../../../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js";
import "../../../../../uni_modules/rice-ui/libs/use/useTouch/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-icon/font.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-form-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-input/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-form/useForm.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/rice-loading.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/conversion.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/coloruts/utils.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "../../../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-loading/useLoading.js";
import "../../../../../uni_modules/rice-ui/libs/utils/debug.js";
import "../../../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-button/utils.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-calendar/lunar.js";
import "../../../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-badge/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-radio-group/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../../../uni_modules/rice-ui/components/rice-checkbox-group/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-code-input/type.js";
import "../../../../../uni_modules/rice-ui/components/rice-qrcode/type.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, unref: _unref, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubRiceUiDemosFormForm";
const { computed } = globalThis.Vue;
const { reactive } = globalThis.Vue;
class UserForm extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.username = this.__props__.username;
    this.password = this.__props__.password;
    this.phone = this.__props__.phone;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "6271be55",
  __className,
  __filename: "src/sub/rice-ui/demos/form/form.uvue",
  __name: "form",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubRiceUiDemosFormFormSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubRiceUiDemosFormFormSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const formData = reactive(new UserForm({
      username: "",
      password: "",
      phone: ""
    }));
    function submitForm() {
      if (formData.username == "" || formData.password == "") {
        uni.showToast({
          title: "请完整填写表单项",
          icon: "none"
        });
        return null;
      }
      uni.showToast({
        title: `提交成功: ${formData.username}`,
        icon: "success"
      });
    }
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_NavBar = __easycom_0;
      const _component_rice_input = __easycom_1;
      const _component_rice_form_item = __easycom_2;
      const _component_rice_form = __easycom_3;
      const _component_rice_button = __easycom_1$1;
      const n15 = _createSharedDataComponent(_sfc_main$1, "13c8b2a4", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "654da042", {
            title: "Form 表单",
            "auto-back": true,
            "safe-area-inset-top": true,
            "bg-color": "#ffffff"
          });
          _setSharedData(__sharedData, 1, n0?.sharedData);
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 10, { borderLeftColor: currentTheme.value });
          });
          const n8 = _createSharedDataComponentWithFallback(_component_rice_form, "44668c5e", { model: () => {
            return _unref(formData);
          } }, {
            "default": _withSharedDataVaporCtx(() => {
              const n3 = _createSharedDataComponentWithFallback(_component_rice_form_item, "446685e0", {
                label: "用户名",
                prop: "username",
                required: true
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n2 = _createSharedDataComponentWithFallback(_component_rice_input, "44668426", {
                    modelValue: () => {
                      return _unref(formData).username;
                    },
                    "onUpdate:modelValue": () => {
                      return (_value) => {
                        return _unref(formData).username = _value;
                      };
                    },
                    placeholder: "请输入用户名"
                  });
                  _setSharedData(__sharedData, 4, n2?.sharedData);
                })
              });
              _setSharedData(__sharedData, 3, n3?.sharedData);
              const n5 = _createSharedDataComponentWithFallback(_component_rice_form_item, "44667ca0", {
                label: "密码",
                prop: "password",
                required: true
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n4 = _createSharedDataComponentWithFallback(_component_rice_input, "446675a8", {
                    modelValue: () => {
                      return _unref(formData).password;
                    },
                    "onUpdate:modelValue": () => {
                      return (_value) => {
                        return _unref(formData).password = _value;
                      };
                    },
                    placeholder: "请输入密码",
                    "show-password": true
                  });
                  _setSharedData(__sharedData, 6, n4?.sharedData);
                })
              });
              _setSharedData(__sharedData, 5, n5?.sharedData);
              const n7 = _createSharedDataComponentWithFallback(_component_rice_form_item, "44666da4", {
                label: "手机号",
                prop: "phone"
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n6 = _createSharedDataComponentWithFallback(_component_rice_input, "44666750", {
                    modelValue: () => {
                      return _unref(formData).phone;
                    },
                    "onUpdate:modelValue": () => {
                      return (_value) => {
                        return _unref(formData).phone = _value;
                      };
                    },
                    placeholder: "请输入手机号"
                  });
                  _setSharedData(__sharedData, 8, n6?.sharedData);
                })
              });
              _setSharedData(__sharedData, 7, n7?.sharedData);
            })
          });
          _setSharedData(__sharedData, 2, n8?.sharedData);
          _setTemplateRef(n8, "formRef");
          const n9 = _createSharedDataComponentWithFallback(_component_rice_button, "44665e96", {
            type: "primary",
            color: () => {
              return currentTheme.value;
            },
            text: "提交表单",
            onClick: () => {
              return submitForm;
            }
          });
          _setSharedData(__sharedData, 9, n9?.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n15.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const form = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  form as default
};
//# sourceMappingURL=form.js.map
