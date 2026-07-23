const { defineComponent, ref, computed, onMounted, openBlock, createBlock, withCtx, createCommentVNode, createElementVNode, createElementBlock, Fragment, renderList, toDisplayString, normalizeStyle } = globalThis.Vue
import { C as Card } from "./Card.js";
import { g as getFooList, f as foo } from "../../../api/foo.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
const _style_0 = { "bg-__10b981_": { "": { "backgroundImage": "none", "backgroundColor": "#10b981" } }, "bg-__3182ce_": { "": { "backgroundImage": "none", "backgroundColor": "#3182ce" } }, "bg-__f1f5f9_": { "": { "backgroundImage": "none", "backgroundColor": "#f1f5f9" } }, "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "bg-__fff5f5_": { "": { "backgroundImage": "none", "backgroundColor": "#fff5f5" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-color-__fecaca_": { "": { "borderTopColor": "#fecaca", "borderRightColor": "#fecaca", "borderBottomColor": "#fecaca", "borderLeftColor": "#fecaca" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-28px": { "": { "height": 28 } }, "h-42px": { "": { "height": 42 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "leading-20px": { "": { "lineHeight": "20px" } }, "mb-10px": { "": { "marginBottom": 10 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-6px": { "": { "marginBottom": 6 } }, "mr-10px": { "": { "marginRight": 10 } }, "mt-6px": { "": { "marginTop": 6 } }, "mt-8px": { "": { "marginTop": 8 } }, "p-10px": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "p-12px": { "": { "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "px-12px": { "": { "paddingLeft": 12, "paddingRight": 12 } }, "py-10px": { "": { "paddingTop": 10, "paddingBottom": 10 } }, "rounded-10px": { "": { "borderTopLeftRadius": 10, "borderTopRightRadius": 10, "borderBottomRightRadius": 10, "borderBottomLeftRadius": 10 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-14px": { "": { "borderTopLeftRadius": 14, "borderTopRightRadius": 14, "borderBottomRightRadius": 14, "borderBottomLeftRadius": 14 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__2d3748_": { "": { "color": "#2d3748" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__475569_": { "": { "color": "#475569" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__ef4444_": { "": { "color": "#ef4444" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "text-white": { "": { "color": "rgba(255,255,255,var(--un-color-opacity,1))" } }, "w-28px": { "": { "width": 28 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Card"], { title: "HTTP 请求 Demo" }, {
    default: withCtx(() => [
      createCommentVNode(" 说明区域 "),
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("text", { class: "text-12px text-__64748b_ leading-20px" }, " 基于 lime-request 封装的 http 请求演示，包含 Mock 数据与真实接口请求两种模式。 ")
      ]),
      createCommentVNode(" Mock 数据区域 "),
      createElementVNode("view", { class: "mb-16px" }, [
        createElementVNode("text", { class: "text-14px font-bold text-__2d3748_ mb-10px" }, "Mock 数据列表（ID 为任意类型）"),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($setup.mockList, (item, index) => {
            return openBlock(), createElementBlock("view", {
              key: index,
              class: "flex-row items-center py-10px px-12px bg-__f1f5f9_ rounded-8px mt-8px"
            }, [
              createElementVNode("view", { class: "w-28px h-28px rounded-14px bg-__3182ce_ justify-center items-center mr-10px" }, [
                createElementVNode(
                  "text",
                  { class: "text-12px text-white font-bold" },
                  toDisplayString(item.id),
                  1
                  /* TEXT */
                )
              ]),
              createElementVNode(
                "text",
                { class: "text-14px text-__334155_" },
                toDisplayString(item.name),
                1
                /* TEXT */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      createCommentVNode(" 请求状态展示 "),
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-10px p-12px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode("view", { class: "flex-row justify-between items-center mb-6px" }, [
          createElementVNode("text", { class: "text-13px text-__64748b_" }, "接口请求状态:"),
          createElementVNode(
            "view",
            {
              style: normalizeStyle({ paddingLeft: "8px", paddingRight: "8px", paddingTop: "2px", paddingBottom: "2px", borderRadius: 10, backgroundColor: $setup.statusBgColor })
            },
            [
              createElementVNode(
                "text",
                {
                  style: normalizeStyle({ fontSize: 12, color: $setup.statusColor })
                },
                toDisplayString($setup.statusText),
                5
                /* TEXT, STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ]),
        $setup.hasResponseData ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "bg-white rounded-8px p-10px border-width-1px border-style-solid border-color-__e2e8f0_"
        }, [
          createElementVNode(
            "text",
            { class: "text-12px text-__475569_" },
            toDisplayString($setup.responseText),
            1
            /* TEXT */
          )
        ])) : createCommentVNode("v-if", true),
        $setup.hasErrorMsg ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "bg-__fff5f5_ rounded-8px p-10px border-width-1px border-style-solid border-color-__fecaca_ mt-6px"
        }, [
          createElementVNode(
            "text",
            { class: "text-12px text-__ef4444_" },
            "错误：" + toDisplayString($setup.errorMsg),
            1
            /* TEXT */
          )
        ])) : createCommentVNode("v-if", true)
      ]),
      createCommentVNode(" 操作按钮：用 margin-right 代替 gap "),
      createElementVNode("view", { class: "flex-row" }, [
        createElementVNode("view", { class: "flex-1 mr-10px" }, [
          createElementVNode("view", {
            class: "bg-__3182ce_ rounded-8px h-42px w-full flex flex-row items-center justify-center",
            onClick: $setup.loadMockData
          }, [
            createElementVNode("text", { class: "text-__ffffff_ text-14px" }, "加载 Mock 数据")
          ])
        ]),
        createElementVNode("view", { class: "flex-1" }, [
          createElementVNode("view", {
            class: "bg-__10b981_ rounded-8px h-42px w-full flex flex-row items-center justify-center",
            onClick: $setup.fetchRealApi
          }, [
            createElementVNode(
              "text",
              { class: "text-__ffffff_ text-14px" },
              toDisplayString($setup.loading ? "请求中..." : "真实 API 请求"),
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
