"use strict";
const common_vendor = require("../../../../common/vendor.js");
const src_api_foo = require("../../../api/foo.js");
if (!Math) {
  common_vendor.unref(Card)();
}
const Card = () => "./Card.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HttpDemoCard",
  setup(__props) {
    const mockList = common_vendor.ref([]);
    const loading = common_vendor.ref(false);
    const requestStatus = common_vendor.ref("idle");
    const responseData = common_vendor.ref(null);
    const errorMsg = common_vendor.ref("");
    const statusText = common_vendor.computed(() => {
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
    const statusColor = common_vendor.computed(() => {
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
    const statusBgColor = common_vendor.computed(() => {
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
    const hasResponseData = common_vendor.computed(() => {
      return responseData.value != null;
    });
    const hasErrorMsg = common_vendor.computed(() => {
      return errorMsg.value.length > 0;
    });
    const responseText = common_vendor.computed(() => {
      const data = responseData.value;
      if (data == null)
        return "";
      return `id: ${data.id}, name: ${data.name}`;
    });
    function loadMockData() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          const list = yield src_api_foo.getFooList();
          mockList.value = list;
        } catch (err) {
          common_vendor.index.__f__("error", "at src/pages/basic/components/HttpDemoCard.uvue:135", "loadMockData error:", err);
        }
      });
    }
    function fetchRealApi() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        loading.value = true;
        requestStatus.value = "loading";
        responseData.value = null;
        errorMsg.value = "";
        try {
          const res = yield src_api_foo.foo();
          responseData.value = res;
          requestStatus.value = "success";
        } catch (err) {
          common_vendor.index.__f__("log", "at src/pages/basic/components/HttpDemoCard.uvue:155", err, "err");
          requestStatus.value = "error";
          let errStr = "";
          if (err !== null) {
            errStr = common_vendor.UTS.JSON.stringify(err);
          }
          errorMsg.value = errStr.length > 0 ? errStr : "请求失败";
        }
        loading.value = false;
      });
    }
    common_vendor.onMounted(() => {
      loadMockData();
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: common_vendor.f(mockList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.t(item.name),
            c: index
          };
        }),
        b: common_vendor.t(statusText.value),
        c: statusColor.value,
        d: statusBgColor.value,
        e: hasResponseData.value
      }, hasResponseData.value ? {
        f: common_vendor.t(responseText.value)
      } : {}, {
        g: hasErrorMsg.value
      }, hasErrorMsg.value ? {
        h: common_vendor.t(errorMsg.value)
      } : {}, {
        i: common_vendor.o(loadMockData, "ca"),
        j: common_vendor.t(loading.value ? "请求中..." : "真实 API 请求"),
        k: common_vendor.o(fetchRealApi, "e9"),
        l: common_vendor.gei(_ctx, ""),
        m: common_vendor.p({
          title: "HTTP 请求 Demo",
          id: common_vendor.gei(_ctx, "")
        }),
        n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/HttpDemoCard.js.map
