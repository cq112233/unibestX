import { C as Card } from "./Card.js";
import { g as getFooList, f as foo } from "../../../api/foo.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
const _style_0 = {"wtu-w0ubis-0":{"":{"borderTopLeftRadius":12,"borderTopRightRadius":12,"borderBottomRightRadius":12,"borderBottomLeftRadius":12}},"wtu-qf0h83-1":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16}},"wtu-ecdk3o-2":{"":{"marginBottom":16}},"wtu-wfs7cl-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-16hz6cp-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-1ns4j6f-5":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"wtu-mcng40-6":{"":{"fontSize":12}},"wtu-pryky7-7":{"":{"color":"#64748b"}},"wtu-1vehn2-8":{"":{"--tw-leading":"20px","lineHeight":"20px"}},"wtu-owidvm-9":{"":{"fontSize":14}},"wtu-1gyo9ug-a":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-1e7koem-b":{"":{"color":"#2d3748"}},"wtu-vnac5q-c":{"":{"marginBottom":10}},"wtu-1p3s0p7-d":{"":{"flexDirection":"row"}},"wtu-or3po3-e":{"":{"alignItems":"center"}},"wtu-1lgfe3e-f":{"":{"paddingTop":10,"paddingBottom":10}},"wtu-1us4hrd-g":{"":{"paddingLeft":12,"paddingRight":12}},"wtu-1y83w1l-h":{"":{"backgroundColor":"#f1f5f9"}},"wtu-1ny4yap-i":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"wtu-yqo827-j":{"":{"marginTop":8}},"wtu-5wqmpn-k":{"":{"width":28}},"wtu-sz6l4-l":{"":{"height":28}},"wtu-1v2zgda-m":{"":{"borderTopLeftRadius":14,"borderTopRightRadius":14,"borderBottomRightRadius":14,"borderBottomLeftRadius":14}},"wtu-1i8kliw-n":{"":{"backgroundColor":"#3182ce"}},"wtu-ijj99f-o":{"":{"justifyContent":"center"}},"wtu-1hzxj1a-p":{"":{"marginRight":10}},"wtu-155p5he-q":{"":{"color":"#ffffff"}},"wtu-xg97j7-r":{"":{"color":"#334155"}},"wtu-edhfgi-s":{"":{"borderTopLeftRadius":10,"borderTopRightRadius":10,"borderBottomRightRadius":10,"borderBottomLeftRadius":10}},"wtu-1115s0n-t":{"":{"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12}},"wtu-ok6iny-u":{"":{"justifyContent":"space-between"}},"wtu-115s1if-v":{"":{"marginBottom":6}},"wtu-mdu9q5-w":{"":{"fontSize":13}},"wtu-kp3eq2-x":{"":{"backgroundColor":"#ffffff"}},"wtu-1ic2k2p-y":{"":{"paddingTop":10,"paddingRight":10,"paddingBottom":10,"paddingLeft":10}},"wtu-s98mzw-z":{"":{"color":"#475569"}},"wtu-snsrpe-10":{"":{"backgroundColor":"#fff5f5"}},"wtu-1bi5jw-11":{"":{"borderTopColor":"#fecaca","borderRightColor":"#fecaca","borderBottomColor":"#fecaca","borderLeftColor":"#fecaca"}},"wtu-1cffqjh-12":{"":{"marginTop":6}},"wtu-bquocn-13":{"":{"color":"#ef4444"}},"wtu-wy44gc-14":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-10jafc4-15":{"":{"height":42}},"wtu-1mbx3i8-16":{"":{"width":"100%"}},"wtu-io2yyi-17":{"":{"display":"flex"}},"wtu-1tndks6-18":{"":{"color":"#ffffff"}},"wtu-1dwvvaj-19":{"":{"backgroundColor":"#10b981"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "HTTP 请求 Demo" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-w0ubis-0 wtu-qf0h83-1 wtu-ecdk3o-2 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5" }, [
        _createElementVNode("text", { class: "wtu-mcng40-6 wtu-pryky7-7 wtu-1vehn2-8" }, " 基于 lime-request 封装的 http 请求演示，包含 Mock 数据与真实接口请求两种模式。 ")
      ]),
      _createElementVNode("view", { class: "wtu-ecdk3o-2" }, [
        _createElementVNode("text", { class: "wtu-owidvm-9 wtu-1gyo9ug-a wtu-1e7koem-b wtu-vnac5q-c" }, "Mock 数据列表（ID 为任意类型）"),
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList($setup.mockList, (item, index) => {
            return _openBlock(), _createElementBlock("view", {
              key: index,
              class: "wtu-1p3s0p7-d wtu-or3po3-e wtu-1lgfe3e-f wtu-1us4hrd-g wtu-1y83w1l-h wtu-1ny4yap-i wtu-yqo827-j"
            }, [
              _createElementVNode("view", { class: "wtu-5wqmpn-k wtu-sz6l4-l wtu-1v2zgda-m wtu-1i8kliw-n wtu-ijj99f-o wtu-or3po3-e wtu-1hzxj1a-p" }, [
                _createElementVNode(
                  "text",
                  { class: "wtu-mcng40-6 wtu-155p5he-q wtu-1gyo9ug-a" },
                  _toDisplayString(item.id),
                  1
                  /* TEXT */
                )
              ]),
              _createElementVNode(
                "text",
                { class: "wtu-owidvm-9 wtu-xg97j7-r" },
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
      _createElementVNode("view", { class: "wtu-edhfgi-s wtu-1115s0n-t wtu-ecdk3o-2 wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5" }, [
        _createElementVNode("view", { class: "wtu-1p3s0p7-d wtu-ok6iny-u wtu-or3po3-e wtu-115s1if-v" }, [
          _createElementVNode("text", { class: "wtu-mdu9q5-w wtu-pryky7-7" }, "接口请求状态:"),
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
          class: "wtu-kp3eq2-x wtu-1ny4yap-i wtu-1ic2k2p-y wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1ns4j6f-5"
        }, [
          _createElementVNode(
            "text",
            { class: "wtu-mcng40-6 wtu-s98mzw-z" },
            _toDisplayString($setup.responseText),
            1
            /* TEXT */
          )
        ])) : _createCommentVNode("v-if", true),
        $setup.hasErrorMsg ? (_openBlock(), _createElementBlock("view", {
          key: 1,
          class: "wtu-snsrpe-10 wtu-1ny4yap-i wtu-1ic2k2p-y wtu-wfs7cl-3 wtu-16hz6cp-4 wtu-1bi5jw-11 wtu-1cffqjh-12"
        }, [
          _createElementVNode(
            "text",
            { class: "wtu-mcng40-6 wtu-bquocn-13" },
            "错误：" + _toDisplayString($setup.errorMsg),
            1
            /* TEXT */
          )
        ])) : _createCommentVNode("v-if", true)
      ]),
      _createElementVNode("view", { class: "wtu-1p3s0p7-d" }, [
        _createElementVNode("view", { class: "wtu-wy44gc-14 wtu-1hzxj1a-p" }, [
          _createElementVNode("view", {
            class: "wtu-1i8kliw-n wtu-1ny4yap-i wtu-10jafc4-15 wtu-1mbx3i8-16 wtu-io2yyi-17 wtu-1p3s0p7-d wtu-or3po3-e wtu-ijj99f-o",
            onClick: $setup.loadMockData
          }, [
            _createElementVNode("text", { class: "wtu-1tndks6-18 wtu-owidvm-9" }, "加载 Mock 数据")
          ])
        ]),
        _createElementVNode("view", { class: "wtu-wy44gc-14" }, [
          _createElementVNode("view", {
            class: "wtu-1dwvvaj-19 wtu-1ny4yap-i wtu-10jafc4-15 wtu-1mbx3i8-16 wtu-io2yyi-17 wtu-1p3s0p7-d wtu-or3po3-e wtu-ijj99f-o",
            onClick: $setup.fetchRealApi
          }, [
            _createElementVNode(
              "text",
              { class: "wtu-1tndks6-18 wtu-owidvm-9" },
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
