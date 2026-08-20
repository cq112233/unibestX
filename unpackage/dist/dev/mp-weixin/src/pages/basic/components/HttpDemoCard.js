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
    const statusTextClass = common_vendor.computed(() => {
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
    const statusBgClass = common_vendor.computed(() => {
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
          common_vendor.index.__f__("error", "at src/pages/basic/components/HttpDemoCard.uvue:134", "loadMockData error:", err);
        }
      });
    }
    function fetchRealApi() {
      var _a, _b;
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
          common_vendor.index.__f__("log", "at src/pages/basic/components/HttpDemoCard.uvue:154", err, "err");
          requestStatus.value = "error";
          let msg = "请求失败";
          if (common_vendor.UTS.isInstanceOf(err, Error)) {
            msg = err.message;
          } else if (common_vendor.UTS.isInstanceOf(err, common_vendor.UTSJSONObject)) {
            const errMsg = (_b = (_a = err.getString("message")) !== null && _a !== void 0 ? _a : err.getString("msg")) !== null && _b !== void 0 ? _b : err.getString("errMsg");
            if (errMsg != null) {
              msg = errMsg;
            } else {
              msg = common_vendor.UTS.JSON.stringify(err);
            }
          } else if (err != null) {
            msg = `${err}`;
          }
          errorMsg.value = msg;
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
        c: common_vendor.n(statusTextClass.value),
        d: common_vendor.n(statusBgClass.value),
        e: hasResponseData.value
      }, hasResponseData.value ? {
        f: common_vendor.t(responseText.value)
      } : {}, {
        g: hasErrorMsg.value
      }, hasErrorMsg.value ? {
        h: common_vendor.t(errorMsg.value)
      } : {}, {
        i: common_vendor.o(loadMockData, "2e"),
        j: common_vendor.t(loading.value ? "请求中..." : "真实 API 请求"),
        k: common_vendor.o(fetchRealApi, "65"),
        l: common_vendor.gei(_ctx, ""),
        m: common_vendor.p({
          title: "HTTP 请求 Demo",
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-98862868"
        }),
        n: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98862868"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/HttpDemoCard.js.map
