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
        radius: "65%",
        center: ["50%", "50%"],
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
        a: common_vendor.sr(echartRef, "41b6edc5-1,41b6edc5-0", {
          "k": "echartRef"
        }),
        b: common_vendor.o(initEchart, "60"),
        c: common_vendor.p({
          class: "wtu-jt2kws-0 wtu-1gaqnlv-1 r data-v-41b6edc5"
        }),
        d: common_vendor.t(_ctx.$t("basic.echartLine")),
        e: common_vendor.n(currentType.value !== "line" ? "wtu-1qm4myr-b" : "wtu-qcdy5m-c"),
        f: common_vendor.n(currentType.value !== "line" ? "wtu-15vl6hy-8" : "wtu-jq7tyz-9"),
        g: common_vendor.o(changeToLine, "54"),
        h: common_vendor.t(_ctx.$t("basic.echartBar")),
        i: common_vendor.n(currentType.value !== "bar" ? "wtu-1icmodz-f" : "wtu-qcdy5m-c"),
        j: common_vendor.n(currentType.value !== "bar" ? "wtu-1bvelj2-d" : "wtu-t6nyan-e"),
        k: common_vendor.o(changeToBar, "fb"),
        l: common_vendor.t(_ctx.$t("basic.echartPie")),
        m: common_vendor.n(currentType.value !== "pie" ? "wtu-co0z8p-i" : "wtu-qcdy5m-c"),
        n: common_vendor.n(currentType.value !== "pie" ? "wtu-1kp3vbu-g" : "wtu-rl5n1d-h"),
        o: common_vendor.o(changeToPie, "ea"),
        p: common_vendor.gei(_ctx, ""),
        q: common_vendor.p({
          title: _ctx.$t("basic.echartTitle"),
          id: common_vendor.gei(_ctx, ""),
          class: "data-v-41b6edc5"
        }),
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      };
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-41b6edc5"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/src/pages/basic/components/EchartsDemoCard.js.map
