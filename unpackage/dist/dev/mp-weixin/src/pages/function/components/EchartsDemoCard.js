"use strict";
const common_vendor = require("../../../../common/vendor.js");
const src_utils_systemInfo = require("../../../utils/systemInfo.js");
const src_utils_i18n = require("../../../utils/i18n.js");
if (!Array) {
  const _easycom_e_chart_1 = common_vendor.resolveComponent("e-chart");
  _easycom_e_chart_1();
}
const _easycom_e_chart = () => "../../../../uni_modules/e-chart/components/e-chart/e-chart.js";
if (!Math) {
  (_easycom_e_chart + common_vendor.unref(Card))();
}
const Card = () => "../../basic/components/Card.js";
const gridKey = "grid";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "EchartsDemoCard",
  setup(__props) {
    const echartTitle = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.echartTitle");
    });
    const echartLineText = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.echartLine");
    });
    const echartBarText = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.echartBar");
    });
    const echartPieText = common_vendor.computed(() => {
      return src_utils_i18n.$t("basic.echartPie");
    });
    const echartRef = common_vendor.ref(null);
    const currentType = common_vendor.ref("line");
    const lineOption = new common_vendor.UTSJSONObject({
      title: new common_vendor.UTSJSONObject({
        text: "访问趋势 (折线图)",
        textStyle: new common_vendor.UTSJSONObject({
          fontSize: 12,
          color: "#64748b"
        })
      }),
      xAxis: new common_vendor.UTSJSONObject({
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        axisLine: new common_vendor.UTSJSONObject({
          lineStyle: new common_vendor.UTSJSONObject({
            color: "#cbd5e1"
          })
        }),
        axisLabel: new common_vendor.UTSJSONObject({
          color: "#64748b"
        })
      }),
      yAxis: new common_vendor.UTSJSONObject({
        type: "value",
        axisLine: new common_vendor.UTSJSONObject({
          show: false
        }),
        splitLine: new common_vendor.UTSJSONObject({
          lineStyle: new common_vendor.UTSJSONObject({
            color: "#f1f5f9"
          })
        }),
        axisLabel: new common_vendor.UTSJSONObject({
          color: "#64748b"
        })
      }),
      [gridKey]: new common_vendor.UTSJSONObject({
        left: "12%",
        right: "5%",
        top: "18%",
        bottom: "12%"
      }),
      series: [new common_vendor.UTSJSONObject({
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "line",
        smooth: true,
        color: "#3b82f6",
        areaStyle: new common_vendor.UTSJSONObject({
          color: new common_vendor.UTSJSONObject({
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              new common_vendor.UTSJSONObject({ offset: 0, color: "rgba(59, 130, 246, 0.4)" }),
              new common_vendor.UTSJSONObject({ offset: 1, color: "rgba(59, 130, 246, 0)" })
            ]
          })
        })
      })]
    });
    const barOption = new common_vendor.UTSJSONObject({
      title: new common_vendor.UTSJSONObject({
        text: "访问分布 (柱状图)",
        textStyle: new common_vendor.UTSJSONObject({
          fontSize: 12,
          color: "#64748b"
        })
      }),
      xAxis: new common_vendor.UTSJSONObject({
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        axisLine: new common_vendor.UTSJSONObject({
          lineStyle: new common_vendor.UTSJSONObject({
            color: "#cbd5e1"
          })
        }),
        axisLabel: new common_vendor.UTSJSONObject({
          color: "#64748b"
        })
      }),
      yAxis: new common_vendor.UTSJSONObject({
        type: "value",
        axisLine: new common_vendor.UTSJSONObject({
          show: false
        }),
        splitLine: new common_vendor.UTSJSONObject({
          lineStyle: new common_vendor.UTSJSONObject({
            color: "#f1f5f9"
          })
        }),
        axisLabel: new common_vendor.UTSJSONObject({
          color: "#64748b"
        })
      }),
      [gridKey]: new common_vendor.UTSJSONObject({
        left: "12%",
        right: "5%",
        top: "18%",
        bottom: "12%"
      }),
      series: [new common_vendor.UTSJSONObject({
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        color: "#10b981"
      })]
    });
    const pieOption = new common_vendor.UTSJSONObject({
      title: new common_vendor.UTSJSONObject({
        text: "访问来源 (饼图)",
        textStyle: new common_vendor.UTSJSONObject({
          fontSize: 12,
          color: "#64748b"
        })
      }),
      series: [new common_vendor.UTSJSONObject({
        name: "访问来源",
        type: "pie",
        radius: "52%",
        center: ["50%", "52%"],
        label: new common_vendor.UTSJSONObject({
          fontSize: 11,
          color: "#64748b"
        }),
        data: [
          new common_vendor.UTSJSONObject({ value: 1048, name: "搜索引擎", itemStyle: new common_vendor.UTSJSONObject({ color: "#3b82f6" }) }),
          new common_vendor.UTSJSONObject({ value: 735, name: "直接访问", itemStyle: new common_vendor.UTSJSONObject({ color: "#10b981" }) }),
          new common_vendor.UTSJSONObject({ value: 580, name: "邮件营销", itemStyle: new common_vendor.UTSJSONObject({ color: "#f59e0b" }) }),
          new common_vendor.UTSJSONObject({ value: 484, name: "联盟广告", itemStyle: new common_vendor.UTSJSONObject({ color: "#8b5cf6" }) })
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
    const windowWidth = common_vendor.computed(() => {
      var _a, _b;
      return (_b = (_a = src_utils_systemInfo.systemInfo.value) === null || _a === void 0 ? null : _a.windowWidth) !== null && _b !== void 0 ? _b : 0;
    });
    common_vendor.watch(windowWidth, () => {
      setTimeout(() => {
        if (echartRef.value != null) {
          const chart = echartRef.value;
          chart.$callMethod("resize");
        }
      }, 100);
    });
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = {
        a: common_vendor.sr(echartRef, "55532f68-1,55532f68-0", {
          "k": "echartRef"
        }),
        b: common_vendor.o(initEchart, "b6"),
        c: common_vendor.p({
          height: "280px",
          class: "wtu-1gus49c-0 wtu-1hnun9r-3 r data-v-55532f68"
        }),
        d: common_vendor.t(echartLineText.value),
        e: common_vendor.n(currentType.value !== "line" ? "wtu-ecywtr-i" : "wtu-1y2qqu-j"),
        f: common_vendor.n(currentType.value !== "line" ? "wtu-1t1j6iy-e" : "wtu-1oruciv-f"),
        g: common_vendor.o(changeToLine, "d5"),
        h: common_vendor.t(echartBarText.value),
        i: common_vendor.n(currentType.value !== "bar" ? "wtu-rz8j03-m" : "wtu-1y2qqu-j"),
        j: common_vendor.n(currentType.value !== "bar" ? "wtu-e83h5m-k" : "wtu-96qsb-l"),
        k: common_vendor.o(changeToBar, "e7"),
        l: common_vendor.t(echartPieText.value),
        m: common_vendor.n(currentType.value !== "pie" ? "wtu-1sjpi71-p" : "wtu-1y2qqu-j"),
        n: common_vendor.n(currentType.value !== "pie" ? "wtu-1votq1i-n" : "wtu-kr2m39-o"),
        o: common_vendor.o(changeToPie, "09"),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          title: echartTitle.value,
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-55532f68"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-55532f68"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/function/components/EchartsDemoCard.js.map
