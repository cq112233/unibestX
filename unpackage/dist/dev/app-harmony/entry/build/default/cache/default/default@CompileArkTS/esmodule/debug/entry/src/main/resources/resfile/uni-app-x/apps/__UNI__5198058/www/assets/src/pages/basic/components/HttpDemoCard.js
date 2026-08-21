import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { g as getFooList, f as foo } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/api/foo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataFor: _createSharedDataFor, setSharedDataClass: _setSharedDataClass, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsHttpDemoCard";
const { computed, ref } = globalThis.Vue;
const { onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "5429899c",
  __className,
  __filename: "src/pages/basic/components/HttpDemoCard.uvue",
  __name: "HttpDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsHttpDemoCardSharedData", sharedDataClassId: 0 })));
    const mockList = ref([]);
    const loading = ref(false);
    const requestStatus = ref("idle");
    const responseData = ref(null);
    const errorMsg = ref("");
    const statusText = computed(() => {
      switch (requestStatus.value) {
        case "loading":
          return "请求中";
        case "success":
          return "请求成功";
        case "error":
          return "请求失败";
        default:
          return "待请求";
      }
    });
    const statusTextClass = computed(() => {
      switch (requestStatus.value) {
        case "loading":
          return "wtu-kl45yb-1c";
        case "success":
          return "wtu-fv1izt-1d";
        case "error":
          return "wtu-1ivzueh-1e";
        default:
          return "wtu-6tsugz-1f";
      }
    });
    const statusBgClass = computed(() => {
      switch (requestStatus.value) {
        case "loading":
          return "wtu-1xrn6ww-1g";
        case "success":
          return "wtu-k3m9e2-1h";
        case "error":
          return "wtu-1jk4s61-1i";
        default:
          return "wtu-1y83w1l-h";
      }
    });
    const hasResponseData = computed(() => {
      return responseData.value != null;
    });
    const hasErrorMsg = computed(() => {
      return errorMsg.value.length > 0;
    });
    const responseText = computed(() => {
      const data = responseData.value;
      if (data == null)
        return "";
      return `id: ${data.id}, name: ${data.name}`;
    });
    async function loadMockData() {
      try {
        const list = await getFooList();
        mockList.value = list;
      } catch (err) {
        uni.__f__("error", "at src/pages/basic/components/HttpDemoCard.uvue:134", "loadMockData error:", err);
      }
    }
    async function fetchRealApi() {
      var _a, _b;
      loading.value = true;
      requestStatus.value = "loading";
      responseData.value = null;
      errorMsg.value = "";
      try {
        const res = await foo();
        responseData.value = res;
        requestStatus.value = "success";
      } catch (err) {
        uni.__f__("log", "at src/pages/basic/components/HttpDemoCard.uvue:154", err, "err");
        requestStatus.value = "error";
        let msg = "请求失败";
        if (UTS.isInstanceOf(err, Error)) {
          msg = err.message;
        } else if (UTS.isInstanceOf(err, UTSJSONObject)) {
          const errMsg = (_b = (_a = err.getString("message")) !== null && _a !== void 0 ? _a : err.getString("msg")) !== null && _b !== void 0 ? _b : err.getString("errMsg");
          if (errMsg != null) {
            msg = errMsg;
          } else {
            msg = UTS.JSON.stringify(err);
          }
        } else if (err != null) {
          msg = `${err}`;
        }
        errorMsg.value = msg;
      }
      loading.value = false;
    }
    onMounted(() => {
      loadMockData();
    });
    return () => {
      "raw js";
      const n30 = _createSharedDataComponent(
        Card,
        "51bfa7fe",
        { title: "HTTP 请求 Demo" },
        {
          "default": () => {
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 1, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return mockList.value;
            }, (__sharedData_VFor0, _for_item0, _for_key0) => {
              _renderSharedDataEffect(() => {
                const _item = _for_item0.value;
                _setSharedData(__sharedData_VFor0, 1, _toDisplayString(_item.id));
                _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_item.name));
              });
              return null;
            }, (__sharedData_VFor0, item, index) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
            });
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 8, ["wtu-1jy1lu-x wtu-uaewvr-y wtu-edhfgi-s", statusBgClass.value]);
              _setSharedDataClass(__sharedData, 9, ["wtu-mcng40-6", statusTextClass.value]);
              _setSharedData(__sharedData, 10, _toDisplayString(statusText.value));
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 2, _toSharedDataBoolean(hasResponseData.value));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 3, _toDisplayString(responseText.value));
              });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 4, _toSharedDataBoolean(hasErrorMsg.value));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 5, _toDisplayString(errorMsg.value));
              });
            });
            _setSharedDataEvent(__sharedData, 6, loadMockData);
            _setSharedDataEvent(__sharedData, 7, fetchRealApi);
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 11, _toDisplayString(loading.value ? "请求中..." : "真实 API 请求"));
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n30.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const HttpDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  HttpDemoCard as H
};
//# sourceMappingURL=HttpDemoCard.js.map
