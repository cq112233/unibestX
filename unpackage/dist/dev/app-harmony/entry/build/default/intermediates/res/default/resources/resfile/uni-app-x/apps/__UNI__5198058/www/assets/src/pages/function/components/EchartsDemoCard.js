import { _ as _sfc_main$1 } from "../../../../uni_modules/e-chart/components/e-chart/e-chart.js";
import { C as Card } from "../../basic/components/Card.js";
import { a as systemInfo } from "../../../utils/systemInfo.js";
import { $ as $t } from "../../../utils/i18n.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesFunctionComponentsEchartsDemoCard";
const { computed, ref, watch } = globalThis.Vue;
const gridKey = "grid";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "56087336",
  __className,
  __filename: "src/pages/function/components/EchartsDemoCard.uvue",
  __name: "EchartsDemoCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionComponentsEchartsDemoCardSharedData", sharedDataClassId: 0 })));
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
      var _a, _b;
      return (_b = (_a = systemInfo.value) === null || _a === void 0 ? null : _a.windowWidth) !== null && _b !== void 0 ? _b : 0;
    });
    watch(windowWidth, () => {
      setTimeout(() => {
        if (echartRef.value != null) {
          const chart = echartRef.value;
          chart.$callMethod("resize");
        }
      }, 100);
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_e_chart = _sfc_main$1;
      const n12 = _createSharedDataComponent(
        Card,
        "207b4afe",
        { title: () => {
          return echartTitle.value;
        } },
        {
          "default": _withSharedDataVaporCtx(() => {
            const n0 = _createSharedDataComponentWithFallback(_component_e_chart, "2223d49a", {
              height: "280px",
              class: "wtu-1gus49c-0 wtu-1hnun9r-3",
              onReady: () => {
                return initEchart;
              }
            });
            _setSharedData(__sharedData, 1, n0?.sharedData);
            _setTemplateRef(n0, echartRef, null, "echartRef");
            _setSharedDataEvent(__sharedData, 2, changeToLine);
            _setSharedDataEvent(__sharedData, 3, changeToBar);
            _setSharedDataEvent(__sharedData, 4, changeToPie);
            _renderSharedDataEffect(() => {
              const _currentType = currentType.value;
              _setSharedDataClass(__sharedData, 5, ["wtu-1gus49c-0 wtu-utvssx-9 wtu-1gx3c6p-a wtu-1xomkve-b wtu-mcij7f-4 wtu-1vz4tc3-c wtu-80iwab-d", _currentType !== "line" ? "wtu-1t1j6iy-e" : "wtu-1oruciv-f"]);
              _setSharedDataClass(__sharedData, 6, ["wtu-esa49s-g wtu-100960-h", _currentType !== "line" ? "wtu-ecywtr-i" : "wtu-1y2qqu-j"]);
              _setSharedData(__sharedData, 7, _toDisplayString(echartLineText.value));
              _setSharedDataClass(__sharedData, 8, ["wtu-1gus49c-0 wtu-utvssx-9 wtu-1gx3c6p-a wtu-1xomkve-b wtu-mcij7f-4 wtu-1vz4tc3-c wtu-80iwab-d", _currentType !== "bar" ? "wtu-e83h5m-k" : "wtu-96qsb-l"]);
              _setSharedDataClass(__sharedData, 9, ["wtu-esa49s-g wtu-100960-h", _currentType !== "bar" ? "wtu-rz8j03-m" : "wtu-1y2qqu-j"]);
              _setSharedData(__sharedData, 10, _toDisplayString(echartBarText.value));
              _setSharedDataClass(__sharedData, 11, ["wtu-1gus49c-0 wtu-utvssx-9 wtu-1gx3c6p-a wtu-1xomkve-b wtu-mcij7f-4 wtu-1vz4tc3-c wtu-80iwab-d", _currentType !== "pie" ? "wtu-1votq1i-n" : "wtu-kr2m39-o"]);
              _setSharedDataClass(__sharedData, 12, ["wtu-esa49s-g wtu-100960-h", _currentType !== "pie" ? "wtu-1sjpi71-p" : "wtu-1y2qqu-j"]);
              _setSharedData(__sharedData, 13, _toDisplayString(echartPieText.value));
            });
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n12.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const EchartsDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  EchartsDemoCard as E
};
//# sourceMappingURL=EchartsDemoCard.js.map
