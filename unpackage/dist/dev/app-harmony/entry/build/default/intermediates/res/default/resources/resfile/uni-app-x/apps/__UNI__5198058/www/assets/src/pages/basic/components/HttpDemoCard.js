import { C as Card } from "./Card.js";
import { g as getFooList, f as foo } from "../../../api/foo.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataFor: _createSharedDataFor, setSharedDataStyle: _setSharedDataStyle, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsHttpDemoCard";
const { computed, ref } = globalThis.Vue;
const { onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "7920b0f6",
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
    const statusColor = computed(() => {
      switch (requestStatus.value) {
        case "loading":
          return "#d97706";
        case "success":
          return "#059669";
        case "error":
          return "#dc2626";
        default:
          return "#94a3b8";
      }
    });
    const statusBgColor = computed(() => {
      switch (requestStatus.value) {
        case "loading":
          return "#fef9c3";
        case "success":
          return "#d1fae5";
        case "error":
          return "#fee2e2";
        default:
          return "#f1f5f9";
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
        let errStr = "";
        if (err !== null) {
          errStr = UTS.JSON.stringify(err);
        }
        errorMsg.value = errStr.length > 0 ? errStr : "请求失败";
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
              _setSharedDataStyle(__sharedData, 8, { paddingLeft: "8px", paddingRight: "8px", paddingTop: "2px", paddingBottom: "2px", borderRadius: 10, backgroundColor: statusBgColor.value });
              _setSharedDataStyle(__sharedData, 9, { fontSize: 12, color: statusColor.value });
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
