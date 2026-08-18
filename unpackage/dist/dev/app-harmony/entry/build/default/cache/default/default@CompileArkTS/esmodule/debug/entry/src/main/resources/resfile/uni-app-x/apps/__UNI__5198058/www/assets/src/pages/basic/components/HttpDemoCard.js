import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { g as getFooList, f as foo } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/api/foo&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref } = globalThis.Vue;
const { onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "HttpDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
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
        uni.__f__("error", "at src/pages/basic/components/HttpDemoCard.uvue:135", "loadMockData error:", err);
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
        uni.__f__("log", "at src/pages/basic/components/HttpDemoCard.uvue:155", err, "err");
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
    const __returned__ = { mockList, loading, requestStatus, responseData, errorMsg, statusText, statusColor, statusBgColor, hasResponseData, hasErrorMsg, responseText, loadMockData, fetchRealApi, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-pryky7-0":{"":{"color":"#64748b"}},"wtu-1gyo9ug-1":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-1e7koem-2":{"":{"color":"#2d3748"}},"wtu-1p3s0p7-3":{"":{"flexDirection":"row"}},"wtu-or3po3-4":{"":{"alignItems":"center"}},"wtu-1y83w1l-5":{"":{"backgroundColor":"#f1f5f9"}},"wtu-1i8kliw-6":{"":{"backgroundColor":"#3182ce"}},"wtu-ijj99f-7":{"":{"justifyContent":"center"}},"wtu-155p5he-8":{"":{"color":"#ffffff"}},"wtu-xg97j7-9":{"":{"color":"#334155"}},"wtu-ok6iny-a":{"":{"justifyContent":"space-between"}},"wtu-kp3eq2-b":{"":{"backgroundColor":"#ffffff"}},"wtu-s98mzw-c":{"":{"color":"#475569"}},"wtu-snsrpe-d":{"":{"backgroundColor":"#fff5f5"}},"wtu-bquocn-e":{"":{"color":"#ef4444"}},"wtu-wy44gc-f":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-1mbx3i8-g":{"":{"width":"100%"}},"wtu-io2yyi-h":{"":{"display":"flex"}},"wtu-1tndks6-i":{"":{"color":"#ffffff"}},"wtu-1dwvvaj-j":{"":{"backgroundColor":"#10b981"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "HTTP 请求 Demo" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-12px wtu-pryky7-0 leading-20px" }, " 基于 lime-request 封装的 http 请求演示，包含 Mock 数据与真实接口请求两种模式。 ")
      ]),
      _createElementVNode("view", { class: "mb-16px" }, [
        _createElementVNode("text", { class: "text-14px wtu-1gyo9ug-1 wtu-1e7koem-2 mb-10px" }, "Mock 数据列表（ID 为任意类型）"),
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList($setup.mockList, (item, index) => {
            return _openBlock(), _createElementBlock("view", {
              key: index,
              class: "wtu-1p3s0p7-3 wtu-or3po3-4 py-10px px-12px wtu-1y83w1l-5 rounded-8px mt-8px"
            }, [
              _createElementVNode("view", { class: "w-28px h-28px rounded-14px wtu-1i8kliw-6 wtu-ijj99f-7 wtu-or3po3-4 mr-10px" }, [
                _createElementVNode(
                  "text",
                  { class: "text-12px wtu-155p5he-8 wtu-1gyo9ug-1" },
                  _toDisplayString(item.id),
                  1
                  /* TEXT */
                )
              ]),
              _createElementVNode(
                "text",
                { class: "text-14px wtu-xg97j7-9" },
                _toDisplayString(item.name),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      _createElementVNode("view", { class: "rounded-10px p-12px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("view", { class: "wtu-1p3s0p7-3 wtu-ok6iny-a wtu-or3po3-4 mb-6px" }, [
          _createElementVNode("text", { class: "text-13px wtu-pryky7-0" }, "接口请求状态:"),
          _createElementVNode(
            "view",
            {
              style: _normalizeStyle({ paddingLeft: "8px", paddingRight: "8px", paddingTop: "2px", paddingBottom: "2px", borderRadius: 10, backgroundColor: $setup.statusBgColor })
            },
            [
              _createElementVNode(
                "text",
                {
                  style: _normalizeStyle({ fontSize: 12, color: $setup.statusColor })
                },
                _toDisplayString($setup.statusText),
                5
                /* TEXT, STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ]),
        $setup.hasResponseData ? (_openBlock(), _createElementBlock("view", {
          key: 0,
          class: "wtu-kp3eq2-b rounded-8px p-10px border-width-1px border-style-solid border-color-[#e2e8f0]"
        }, [
          _createElementVNode(
            "text",
            { class: "text-12px wtu-s98mzw-c" },
            _toDisplayString($setup.responseText),
            1
            /* TEXT */
          )
        ])) : _createCommentVNode("v-if", true),
        $setup.hasErrorMsg ? (_openBlock(), _createElementBlock("view", {
          key: 1,
          class: "wtu-snsrpe-d rounded-8px p-10px border-width-1px border-style-solid border-color-[#fecaca] mt-6px"
        }, [
          _createElementVNode(
            "text",
            { class: "text-12px wtu-bquocn-e" },
            "错误：" + _toDisplayString($setup.errorMsg),
            1
            /* TEXT */
          )
        ])) : _createCommentVNode("v-if", true)
      ]),
      _createElementVNode("view", { class: "wtu-1p3s0p7-3" }, [
        _createElementVNode("view", { class: "wtu-wy44gc-f mr-10px" }, [
          _createElementVNode("view", {
            class: "wtu-1i8kliw-6 rounded-8px h-42px wtu-1mbx3i8-g wtu-io2yyi-h wtu-1p3s0p7-3 wtu-or3po3-4 wtu-ijj99f-7",
            onClick: $setup.loadMockData
          }, [
            _createElementVNode("text", { class: "wtu-1tndks6-i text-14px" }, "加载 Mock 数据")
          ])
        ]),
        _createElementVNode("view", { class: "wtu-wy44gc-f" }, [
          _createElementVNode("view", {
            class: "wtu-1dwvvaj-j rounded-8px h-42px wtu-1mbx3i8-g wtu-io2yyi-h wtu-1p3s0p7-3 wtu-or3po3-4 wtu-ijj99f-7",
            onClick: $setup.fetchRealApi
          }, [
            _createElementVNode(
              "text",
              { class: "wtu-1tndks6-i text-14px" },
              _toDisplayString($setup.loading ? "请求中..." : "真实 API 请求"),
              1
              /* TEXT */
            )
          ])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const HttpDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/HttpDemoCard.uvue"]]);
export {
  HttpDemoCard as H
};
//# sourceMappingURL=HttpDemoCard.js.map
