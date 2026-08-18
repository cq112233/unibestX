import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/e-chart/components/e-chart/e-chart&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { a as systemInfo } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/systemInfo&";
import { $ as $t } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/i18n&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch } = globalThis.Vue;
const gridKey = "grid";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "EchartsDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const echartTitle = computed(() => {
      return $t("basic.echartTitle");
    });
    const echartLineText = computed(() => {
      return $t("basic.echartLine");
    });
    const echartBarText = computed(() => {
      return $t("basic.echartBar");
    });
    const echartPieText = computed(() => {
      return $t("basic.echartPie");
    });
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
        radius: "52%",
        center: ["50%", "52%"],
        label: new UTSJSONObject({
          fontSize: 11,
          color: "#64748b"
        }),
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
    const __returned__ = { echartTitle, echartLineText, echartBarText, echartPieText, echartRef, currentType, gridKey, lineOption, barOption, pieOption, initEchart, changeToLine, changeToBar, changeToPie, windowWidth, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"wtu-1gus49c-0":{"":{"width":"100%"}},"wtu-1hnun9r-1":{"":{"height":"100%"}},"wtu-mcij7f-2":{"":{"flexDirection":"row"}},"wtu-z7dd2m-3":{"":{"justifyContent":"space-between"}},"wtu-1jofu1o-4":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-1xomkve-5":{"":{"display":"flex"}},"wtu-1vz4tc3-6":{"":{"alignItems":"center"}},"wtu-80iwab-7":{"":{"justifyContent":"center"}},"wtu-1t1j6iy-8":{"":{"backgroundColor":"#e0edff"}},"wtu-1oruciv-9":{"":{"backgroundColor":"#3b82f6"}},"wtu-100960-a":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-ecywtr-b":{"":{"color":"#3b82f6"}},"wtu-1y2qqu-c":{"":{"color":"#ffffff"}},"wtu-e83h5m-d":{"":{"backgroundColor":"#d1fae5"}},"wtu-96qsb-e":{"":{"backgroundColor":"#10b981"}},"wtu-rz8j03-f":{"":{"color":"#10b981"}},"wtu-1votq1i-g":{"":{"backgroundColor":"#fef3c7"}},"wtu-kr2m39-h":{"":{"backgroundColor":"#f59e0b"}},"wtu-1sjpi71-i":{"":{"color":"#f59e0b"}},"resize":{"":{"resize":"both"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_e_chart = resolveEasycom(__resolveDynamicComponent("e-chart"), __easycom_0);
  return _openBlock(), _createBlock($setup["Card"], { title: $setup.echartTitle }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-1gus49c-0 h-280px mt-10px" }, [
        _createVNode(
          _component_e_chart,
          {
            ref: "echartRef",
            height: "280px",
            class: "wtu-1gus49c-0 wtu-1hnun9r-1",
            onReady: $setup.initEchart
          },
          null,
          512
          /* NEED_PATCH */
        )
      ]),
      _createElementVNode("view", { class: "wtu-mcij7f-2 wtu-z7dd2m-3 mt-15px" }, [
        _createElementVNode("view", { class: "wtu-1jofu1o-4 mr-8px" }, [
          _createElementVNode(
            "view",
            {
              class: _normalizeClass(["wtu-1gus49c-0 h-36px rounded-8px wtu-1xomkve-5 wtu-mcij7f-2 wtu-1vz4tc3-6 wtu-80iwab-7", $setup.currentType !== "line" ? "wtu-1t1j6iy-8" : "wtu-1oruciv-9"]),
              onClick: $setup.changeToLine
            },
            [
              _createElementVNode(
                "text",
                {
                  class: _normalizeClass(["text-12px wtu-100960-a", $setup.currentType !== "line" ? "wtu-ecywtr-b" : "wtu-1y2qqu-c"])
                },
                _toDisplayString($setup.echartLineText),
                3
                /* TEXT, CLASS */
              )
            ],
            2
            /* CLASS */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1jofu1o-4 mr-8px" }, [
          _createElementVNode(
            "view",
            {
              class: _normalizeClass(["wtu-1gus49c-0 h-36px rounded-8px wtu-1xomkve-5 wtu-mcij7f-2 wtu-1vz4tc3-6 wtu-80iwab-7", $setup.currentType !== "bar" ? "wtu-e83h5m-d" : "wtu-96qsb-e"]),
              onClick: $setup.changeToBar
            },
            [
              _createElementVNode(
                "text",
                {
                  class: _normalizeClass(["text-12px wtu-100960-a", $setup.currentType !== "bar" ? "wtu-rz8j03-f" : "wtu-1y2qqu-c"])
                },
                _toDisplayString($setup.echartBarText),
                3
                /* TEXT, CLASS */
              )
            ],
            2
            /* CLASS */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1jofu1o-4" }, [
          _createElementVNode(
            "view",
            {
              class: _normalizeClass(["wtu-1gus49c-0 h-36px rounded-8px wtu-1xomkve-5 wtu-mcij7f-2 wtu-1vz4tc3-6 wtu-80iwab-7", $setup.currentType !== "pie" ? "wtu-1votq1i-g" : "wtu-kr2m39-h"]),
              onClick: $setup.changeToPie
            },
            [
              _createElementVNode(
                "text",
                {
                  class: _normalizeClass(["text-12px wtu-100960-a", $setup.currentType !== "pie" ? "wtu-1sjpi71-i" : "wtu-1y2qqu-c"])
                },
                _toDisplayString($setup.echartPieText),
                3
                /* TEXT, CLASS */
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
  }, 8, ["title"]);
}
const EchartsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/EchartsDemoCard.uvue"]]);
export {
  EchartsDemoCard as E
};
//# sourceMappingURL=EchartsDemoCard.js.map
