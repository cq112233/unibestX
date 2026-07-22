import { _ as __easycom_0 } from "../../../../uni_modules/e-chart/components/e-chart/e-chart.js";
const { defineComponent, ref, computed, watch, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, createVNode, normalizeClass } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { C as Card } from "./Card.js";
import { a as systemInfo } from "../../../utils/systemInfo.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const gridKey = "grid";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EchartsDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const echartRef = ref(null);
    const currentType = ref("line");
    const lineOption = new UTSJSONObject({
      title: new UTSJSONObject({
        text: "访问趋势 (折线图)",
        textStyle: new UTSJSONObject({
          fontSize: 12,
          color: "#64748b"
        })
      }),
      xAxis: new UTSJSONObject({
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        axisLine: new UTSJSONObject({
          lineStyle: new UTSJSONObject({
            color: "#cbd5e1"
          })
        }),
        axisLabel: new UTSJSONObject({
          color: "#64748b"
        })
      }),
      yAxis: new UTSJSONObject({
        type: "value",
        axisLine: new UTSJSONObject({
          show: false
        }),
        splitLine: new UTSJSONObject({
          lineStyle: new UTSJSONObject({
            color: "#f1f5f9"
          })
        }),
        axisLabel: new UTSJSONObject({
          color: "#64748b"
        })
      }),
      [gridKey]: new UTSJSONObject({
        left: "12%",
        right: "5%",
        top: "18%",
        bottom: "12%"
      }),
      series: [new UTSJSONObject({
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "line",
        smooth: true,
        color: "#3b82f6",
        areaStyle: new UTSJSONObject({
          color: new UTSJSONObject({
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              new UTSJSONObject({ offset: 0, color: "rgba(59, 130, 246, 0.4)" }),
              new UTSJSONObject({ offset: 1, color: "rgba(59, 130, 246, 0)" })
            ]
          })
        })
      })]
    });
    const barOption = new UTSJSONObject({
      title: new UTSJSONObject({
        text: "访问分布 (柱状图)",
        textStyle: new UTSJSONObject({
          fontSize: 12,
          color: "#64748b"
        })
      }),
      xAxis: new UTSJSONObject({
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        axisLine: new UTSJSONObject({
          lineStyle: new UTSJSONObject({
            color: "#cbd5e1"
          })
        }),
        axisLabel: new UTSJSONObject({
          color: "#64748b"
        })
      }),
      yAxis: new UTSJSONObject({
        type: "value",
        axisLine: new UTSJSONObject({
          show: false
        }),
        splitLine: new UTSJSONObject({
          lineStyle: new UTSJSONObject({
            color: "#f1f5f9"
          })
        }),
        axisLabel: new UTSJSONObject({
          color: "#64748b"
        })
      }),
      [gridKey]: new UTSJSONObject({
        left: "12%",
        right: "5%",
        top: "18%",
        bottom: "12%"
      }),
      series: [new UTSJSONObject({
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        color: "#10b981"
      })]
    });
    const pieOption = new UTSJSONObject({
      title: new UTSJSONObject({
        text: "访问来源 (饼图)",
        textStyle: new UTSJSONObject({
          fontSize: 12,
          color: "#64748b"
        })
      }),
      series: [new UTSJSONObject({
        name: "访问来源",
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],
        data: [
          new UTSJSONObject({ value: 1048, name: "搜索引擎", itemStyle: new UTSJSONObject({ color: "#3b82f6" }) }),
          new UTSJSONObject({ value: 735, name: "直接访问", itemStyle: new UTSJSONObject({ color: "#10b981" }) }),
          new UTSJSONObject({ value: 580, name: "邮件营销", itemStyle: new UTSJSONObject({ color: "#f59e0b" }) }),
          new UTSJSONObject({ value: 484, name: "联盟广告", itemStyle: new UTSJSONObject({ color: "#8b5cf6" }) })
        ]
      })]
    });
    function initEchart() {
      if (echartRef.value != null) {
        const chart = echartRef.value;
        chart.$callMethod("init", lineOption);
      }
    }
    function changeToLine() {
      currentType.value = "line";
      if (echartRef.value != null) {
        const chart = echartRef.value;
        chart.$callMethod("setOption", lineOption);
      }
    }
    function changeToBar() {
      currentType.value = "bar";
      if (echartRef.value != null) {
        const chart = echartRef.value;
        chart.$callMethod("setOption", barOption);
      }
    }
    function changeToPie() {
      currentType.value = "pie";
      if (echartRef.value != null) {
        const chart = echartRef.value;
        chart.$callMethod("setOption", pieOption);
      }
    }
    const windowWidth = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = systemInfo.value) === null || _a2 === void 0 ? null : _a2.windowWidth) !== null && _b !== void 0 ? _b : 0;
    });
    watch(windowWidth, () => {
      setTimeout(() => {
        if (echartRef.value != null) {
          const chart = echartRef.value;
          chart.$callMethod("resize");
        }
      }, 100);
    });
    const __returned__ = { echartRef, currentType, gridKey, lineOption, barOption, pieOption, initEchart, changeToLine, changeToBar, changeToPie, windowWidth, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__10b981_": { "": { "backgroundImage": "none", "backgroundColor": "#10b981" } }, "bg-__3b82f6_": { "": { "backgroundImage": "none", "backgroundColor": "#3b82f6" } }, "bg-__d1fae5_": { "": { "backgroundImage": "none", "backgroundColor": "#d1fae5" } }, "bg-__e0edff_": { "": { "backgroundImage": "none", "backgroundColor": "#e0edff" } }, "bg-__f59e0b_": { "": { "backgroundImage": "none", "backgroundColor": "#f59e0b" } }, "bg-__fef3c7_": { "": { "backgroundImage": "none", "backgroundColor": "#fef3c7" } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-260px": { "": { "height": 260 } }, "h-36px": { "": { "height": 36 } }, "i_h-full": { "": { "!height": "100%" } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mr-8px": { "": { "marginRight": 8 } }, "mt-10px": { "": { "marginTop": 10 } }, "mt-15px": { "": { "marginTop": 15 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__10b981_": { "": { "color": "#10b981" } }, "text-__3b82f6_": { "": { "color": "#3b82f6" } }, "text-__f59e0b_": { "": { "color": "#f59e0b" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "w-full": { "": { "width": "100%" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_e_chart = resolveEasycom(resolveDynamicComponent("e-chart"), __easycom_0);
  return openBlock(), createBlock($setup["Card"], { title: "ECharts 图表示例" }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "w-full h-260px mt-10px" }, [
        createVNode(
          _component_e_chart,
          {
            ref: "echartRef",
            class: "w-full i_h-full",
            onReady: $setup.initEchart
          },
          null,
          512
          /* NEED_PATCH */
        )
      ]),
      createElementVNode("view", { class: "flex-row justify-between mt-15px" }, [
        createElementVNode("view", { class: "flex-1 mr-8px" }, [
          createElementVNode(
            "view",
            {
              class: normalizeClass(["w-full h-36px rounded-8px flex flex-row items-center justify-center", $setup.currentType !== "line" ? "bg-__e0edff_" : "bg-__3b82f6_"]),
              onClick: $setup.changeToLine
            },
            [
              createElementVNode(
                "text",
                {
                  class: normalizeClass(["text-12px font-bold", $setup.currentType !== "line" ? "text-__3b82f6_" : "text-__ffffff_"])
                },
                "折线图",
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )
        ]),
        createElementVNode("view", { class: "flex-1 mr-8px" }, [
          createElementVNode(
            "view",
            {
              class: normalizeClass(["w-full h-36px rounded-8px flex flex-row items-center justify-center", $setup.currentType !== "bar" ? "bg-__d1fae5_" : "bg-__10b981_"]),
              onClick: $setup.changeToBar
            },
            [
              createElementVNode(
                "text",
                {
                  class: normalizeClass(["text-12px font-bold", $setup.currentType !== "bar" ? "text-__10b981_" : "text-__ffffff_"])
                },
                "柱状图",
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )
        ]),
        createElementVNode("view", { class: "flex-1" }, [
          createElementVNode(
            "view",
            {
              class: normalizeClass(["w-full h-36px rounded-8px flex flex-row items-center justify-center", $setup.currentType !== "pie" ? "bg-__fef3c7_" : "bg-__f59e0b_"]),
              onClick: $setup.changeToPie
            },
            [
              createElementVNode(
                "text",
                {
                  class: normalizeClass(["text-12px font-bold", $setup.currentType !== "pie" ? "text-__f59e0b_" : "text-__ffffff_"])
                },
                "饼图",
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const EchartsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/EchartsDemoCard.uvue"]]);
export {
  EchartsDemoCard as E
};
//# sourceMappingURL=EchartsDemoCard.js.map
