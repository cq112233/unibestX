"use strict";
const common_vendor = require("../../../../common/vendor.js");
const src_utils_systemInfo = require("../../../utils/systemInfo.js");
if (!Array) {
  const _easycom_e_chart_1 = common_vendor.resolveComponent("e-chart");
  _easycom_e_chart_1();
}
const _easycom_e_chart = () => "../../../../uni_modules/e-chart/components/e-chart/e-chart.js";
if (!Math) {
  (_easycom_e_chart + common_vendor.unref(Card))();
}
const Card = () => "./Card.js";
const gridKey = "grid";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "EchartsDemoCard",
  setup(__props) {
    const echartRef = common_vendor.ref(null);
    const currentType = common_vendor.ref("line");
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
        a: common_vendor.sr(echartRef, "3d774314-1,3d774314-0", {
          "k": "echartRef"
        }),
        b: common_vendor.o(initEchart, "b2"),
        c: common_vendor.p({
          class: "w-full i_h-full r"
        }),
        d: common_vendor.t(_ctx.$t("basic.echartLine")),
        e: common_vendor.n(currentType.value !== "line" ? "text-__3b82f6_" : "text-__ffffff_"),
        f: common_vendor.n(currentType.value !== "line" ? "bg-__e0edff_" : "bg-__3b82f6_"),
        g: common_vendor.o(changeToLine, "89"),
        h: common_vendor.t(_ctx.$t("basic.echartBar")),
        i: common_vendor.n(currentType.value !== "bar" ? "text-__10b981_" : "text-__ffffff_"),
        j: common_vendor.n(currentType.value !== "bar" ? "bg-__d1fae5_" : "bg-__10b981_"),
        k: common_vendor.o(changeToBar, "2d"),
        l: common_vendor.t(_ctx.$t("basic.echartPie")),
        m: common_vendor.n(currentType.value !== "pie" ? "text-__f59e0b_" : "text-__ffffff_"),
        n: common_vendor.n(currentType.value !== "pie" ? "bg-__fef3c7_" : "bg-__f59e0b_"),
        o: common_vendor.o(changeToPie, "60"),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          title: _ctx.$t("basic.echartTitle"),
          id: common_vendor.gei(_ctx, "")
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/EchartsDemoCard.js.map
